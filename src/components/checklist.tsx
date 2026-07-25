"use client";

import { RotateCcw } from "lucide-react";
import { useChecklist } from "@/lib/use-checklist";
import { ChecklistItems } from "@/components/checklist-items";

export function Checklist() {
  const { count, total, pct, ready, reset } = useChecklist();

  return (
    <div className="glass-strong edge-highlight rounded-3xl p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Twoje pierwsze 48 godzin</h3>
          <p className="mt-1 text-sm text-muted">Odhaczaj kroki — postęp zapisuje się w tej przeglądarce.</p>
        </div>
        <button
          onClick={reset}
          className="hidden items-center gap-1.5 rounded-full border border-white/12 px-3 py-1.5 text-xs text-muted transition hover:text-ink sm:inline-flex"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

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

      <div className="mt-6">
        <ChecklistItems />
      </div>
    </div>
  );
}
