"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoWordmark } from "@/components/logo";

type Status = "loading" | "locked" | "unlocked";

export function Gate({
  children,
  password,
  storageKey,
  variant = "screen",
  persist = true,
  title = "Treść chroniona",
  desc = "Ta sekcja jest zabezpieczona hasłem.",
}: {
  children: React.ReactNode;
  password: string;
  storageKey: string;
  variant?: "screen" | "inline";
  persist?: boolean;
  title?: string;
  desc?: string;
}) {
  const [status, setStatus] = useState<Status>("loading");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (persist) {
      try {
        if (localStorage.getItem(storageKey) === "1") {
          setStatus("unlocked");
          return;
        }
      } catch {}
    }
    setStatus("locked");
  }, [storageKey, persist]);

  useEffect(() => {
    if (status === "locked") inputRef.current?.focus();
  }, [status]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim().toUpperCase() === password.toUpperCase()) {
      if (persist) {
        try {
          localStorage.setItem(storageKey, "1");
        } catch {}
      }
      setStatus("unlocked");
      setError(false);
    } else {
      setError(true);
      setValue("");
      inputRef.current?.focus();
    }
  }

  if (status === "unlocked") return <>{children}</>;

  /* ---------- Inline variant (e.g. Network content) ---------- */
  if (variant === "inline") {
    return (
      <div className="glass edge-highlight relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="aura -right-16 -top-16 h-52 w-52 bg-violet/20" />
        <div className="relative mx-auto max-w-md text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Lock className="h-5 w-5 text-muted" />
          </div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-2 text-sm text-muted">{desc}</p>
          <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Hasło dostępu"
              aria-label="Hasło dostępu"
              className={cn(
                "w-full rounded-xl border bg-black/40 px-4 py-3 text-center font-mono tracking-widest text-ink outline-none transition",
                error ? "border-magenta/60" : "border-white/12 focus:border-violet/60",
              )}
            />
            {error && <p className="text-xs text-magenta">Nieprawidłowe hasło. Zapytaj Lidera.</p>}
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Odblokuj
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ---------- Screen variant (whole site) ---------- */
  return (
    <div className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center overflow-hidden bg-void px-6">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="aura left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 bg-violet/12" />

      <div
        className={cn(
          "relative w-full max-w-sm transition-opacity duration-500",
          status === "loading" ? "opacity-60" : "opacity-100",
        )}
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <LogoWordmark className="h-9 text-white" />
          <p className="eyebrow mt-4">Akademia Startowa</p>
        </div>

        <div className="glass-strong edge-highlight rounded-3xl p-7">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Lock className="h-4.5 w-4.5 text-muted" />
            </div>
            <div>
              <h1 className="text-base font-semibold leading-tight text-white">Strefa społeczności</h1>
              <p className="text-xs text-muted">Podaj hasło, aby wejść</p>
            </div>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-3">
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Hasło dostępu"
              aria-label="Hasło dostępu"
              autoComplete="off"
              className={cn(
                "w-full rounded-xl border bg-black/40 px-4 py-3 text-center font-mono tracking-[0.3em] text-ink outline-none transition placeholder:tracking-normal placeholder:text-faint",
                error ? "border-magenta/60" : "border-white/12 focus:border-violet/60",
              )}
            />
            {error && (
              <p className="text-center text-xs text-magenta">
                Nieprawidłowe hasło. Otrzymasz je od swojego Lidera.
              </p>
            )}
            <button
              type="submit"
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Wejdź do Akademii
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-[11px] leading-relaxed text-faint">
          Nieoficjalny zasób polskiej społeczności UNIQ.
          <br />
          Nie masz hasła? Napisz do swojego Lidera.
        </p>
      </div>
    </div>
  );
}
