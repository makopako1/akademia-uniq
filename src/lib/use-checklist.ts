"use client";

import { useCallback, useEffect, useState } from "react";
import { CHECKLIST } from "@/lib/site";
import { fireConfetti } from "@/lib/confetti";

const KEY = "uniq_checklist";
const EVENT = "uniq:checklist";
const TOTAL = CHECKLIST.length;

/** Count only completed ids that still exist in CHECKLIST (ignores stale storage). */
function completed(set: Set<string>): number {
  return CHECKLIST.reduce((n, i) => n + (set.has(i.id) ? 1 : 0), 0);
}

function read(): Set<string> {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {}
  return new Set();
}

function write(next: Set<string>) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...next]));
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

/**
 * Shared checklist state backed by localStorage. All instances in the tab stay
 * in sync via a custom event; cross-tab via the native `storage` event.
 */
export function useChecklist() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDone(read());
    setReady(true);
    const onChange = () => setDone(read());
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setDone(read());
    };
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggle = useCallback(
    (id: string) => {
      const next = new Set(done);
      const wasComplete = completed(done) >= TOTAL;
      if (next.has(id)) next.delete(id);
      else next.add(id);
      setDone(next);
      write(next);
      if (completed(next) >= TOTAL && !wasComplete) fireConfetti();
    },
    [done],
  );

  const reset = useCallback(() => {
    const next = new Set<string>();
    setDone(next);
    write(next);
  }, []);

  const count = completed(done);
  return {
    done,
    ready,
    count,
    total: TOTAL,
    pct: ready ? Math.round((count / TOTAL) * 100) : 0,
    toggle,
    reset,
  };
}
