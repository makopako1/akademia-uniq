"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CHECKLIST } from "@/lib/site";
import { useChecklist } from "@/lib/use-checklist";

/** Shared list of checklist rows — used by the home checklist and the floating widget. */
export function ChecklistItems({ onNavigate }: { onNavigate?: () => void }) {
  const { done, toggle } = useChecklist();

  return (
    <ul className="space-y-2">
      {CHECKLIST.map((item) => {
        const isDone = done.has(item.id);
        return (
          <li key={item.id}>
            <div
              className={cn(
                "group flex items-center gap-3 rounded-2xl border p-3 transition-colors",
                isDone
                  ? "border-emerald/20 bg-emerald/[0.06]"
                  : "border-white/8 bg-white/[0.02] hover:border-white/15",
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
                <Check
                  className={cn("h-3.5 w-3.5", isDone && "animate-[pop_0.28s_var(--ease-out-expo)]")}
                  strokeWidth={3}
                />
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
                  onClick={onNavigate}
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
  );
}
