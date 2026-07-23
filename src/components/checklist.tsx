"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { CHECKLIST } from "@/lib/site";

const KEY = "uniq_checklist";

export function Checklist() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setDone(new Set(JSON.parse(raw) as string[]));
    } catch {}
    setReady(true);
  }, []);

  function persist(next: Set<string>) {
    setDone(new Set(next));
    try {
      localStorage.setItem(KEY, JSON.stringify([...next]));
    } catch {}
  }

  function toggle(id: string) {
    const next = new Set(done);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    persist(next);
  }

  const total = CHECKLIST.length;
  const count = done.size;
  const pct = ready ? Math.round((count / total) * 100) : 0;

  return (
    <div className="glass-strong edge-highlight rounded-3xl p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Twoje pierwsze 48 godzin</h3>
          <p className="mt-1 text-sm text-muted">Odhaczaj kroki — postęp zapisuje się w tej przeglądarce.</p>
        </div>
        <button
          onClick={() => persist(new Set())}
          className="hidden items-center gap-1.5 rounded-full border border-white/12 px-3 py-1.5 text-xs text-muted transition hover:text-ink sm:inline-flex"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      {/* Progress */}
      <div className="mt-6 flex items-center gap-4">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet via-cyan to-emerald transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="font-mono text-sm tabular-nums text-muted">
          {count}/{total}
        </span>
      </div>

      {count === total && ready && (
        <div className="mt-5 rounded-2xl border border-emerald/25 bg-emerald/10 px-4 py-3 text-sm text-emerald">
          Gotowe! Masz solidny start. Teraz konsekwencja — do zobaczenia na sesjach na żywo.
        </div>
      )}

      <ul className="mt-6 space-y-2">
        {CHECKLIST.map((item) => {
          const isDone = done.has(item.id);
          return (
            <li key={item.id}>
              <div
                className={cn(
                  "group flex items-center gap-3 rounded-2xl border p-3 transition-colors",
                  isDone ? "border-emerald/20 bg-emerald/[0.06]" : "border-white/8 bg-white/[0.02] hover:border-white/15",
                )}
              >
                <button
                  onClick={() => toggle(item.id)}
                  aria-pressed={isDone}
                  aria-label={isDone ? "Odznacz" : "Zaznacz"}
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all",
                    isDone
                      ? "border-emerald bg-emerald text-black"
                      : "border-white/20 text-transparent hover:border-white/40",
                  )}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </button>
                <span
                  className={cn(
                    "flex-1 text-sm leading-snug transition-colors",
                    isDone ? "text-faint line-through" : "text-ink",
                  )}
                >
                  {item.label}
                </span>
                {item.href && (
                  <Link
                    href={item.href}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted opacity-0 transition hover:bg-white/5 hover:text-ink group-hover:opacity-100"
                    aria-label="Przejdź do instrukcji"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
