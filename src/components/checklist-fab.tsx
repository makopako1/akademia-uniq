"use client";

import { useEffect, useState } from "react";
import { ListChecks, X, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChecklist } from "@/lib/use-checklist";
import { ChecklistItems } from "@/components/checklist-items";

export function ChecklistFab() {
  const [open, setOpen] = useState(false);
  const { count, total, pct, ready } = useChecklist();
  const allDone = ready && count === total;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const R = 46;
  const C = 2 * Math.PI * R;

  return (
    <>
      {/* backdrop */}
      <button
        aria-hidden
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] transition-opacity duration-200 sm:bg-black/20",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50">
        {/* panel */}
        <div
          role="dialog"
          aria-label="Checklista startowa"
          className={cn(
            "absolute bottom-[4.5rem] right-0 w-[min(360px,calc(100vw-2.5rem))] origin-bottom-right transition-all duration-200 ease-[var(--ease-out-expo)]",
            open ? "visible scale-100 opacity-100" : "pointer-events-none invisible scale-95 opacity-0",
          )}
        >
          <div className="glass-strong edge-highlight overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.95)]">
            <div className="flex items-center justify-between gap-3 border-b border-white/8 p-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet">
                  <ListChecks className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">Pierwsze 48 godzin</div>
                  <div className="font-mono text-[11px] text-faint">Twój postęp startowy</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Zamknij"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-white/5 hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 px-4 pt-4">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet via-cyan to-emerald transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="font-mono text-xs tabular-nums text-muted">
                {count}/{total}
              </span>
            </div>

            {allDone && (
              <div className="mx-4 mt-3 flex items-center gap-2 rounded-xl border border-emerald/25 bg-emerald/10 px-3 py-2 text-xs text-emerald">
                <PartyPopper className="h-3.5 w-3.5" />
                Gotowe! Masz solidny start 🚀
              </div>
            )}

            <div className="max-h-[min(58vh,26rem)] overflow-y-auto p-4">
              <ChecklistItems onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>

        {/* floating button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Zamknij checklistę" : "Otwórz checklistę"}
          className="relative flex h-14 w-14 items-center justify-center rounded-full glass-strong text-ink shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9)] transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
            <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="6" />
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="url(#fab-ring)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - (ready ? pct : 0) / 100)}
              className="transition-[stroke-dashoffset] duration-500"
            />
            <defs>
              <linearGradient id="fab-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#8b7bff" />
                <stop offset="0.5" stopColor="#4ec6f5" />
                <stop offset="1" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>

          {open ? (
            <X className="relative h-5 w-5" />
          ) : (
            <ListChecks className="relative h-5 w-5" />
          )}

          {/* small remaining badge */}
          {ready && !open && count < total && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full border border-void bg-violet px-1 font-mono text-[10px] font-semibold text-white">
              {total - count}
            </span>
          )}
        </button>

        {/* hover label (desktop) */}
        <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-void/80 px-3 py-1 text-xs text-muted opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 lg:block">
          Checklista
        </span>
      </div>
    </>
  );
}
