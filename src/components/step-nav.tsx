import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { STEPS } from "@/lib/site";
import { ACCENT_TEXT } from "@/lib/accents";
import { Container } from "@/components/kit";

/** Prev / next navigation between guided onboarding steps. */
export function StepNav({ current }: { current: string }) {
  const idx = STEPS.findIndex((s) => s.slug === current);
  const prev = idx > 0 ? STEPS[idx - 1] : null;
  const next = idx < STEPS.length - 1 ? STEPS[idx + 1] : null;

  return (
    <Container className="py-16">
      <div className="mb-6 flex items-center justify-center gap-2">
        {STEPS.map((s, i) => (
          <Link
            key={s.slug}
            href={s.href}
            aria-label={s.title}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === idx ? "w-8 bg-white" : "w-4 bg-white/15 hover:bg-white/30",
            )}
          />
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link
            href={prev.href}
            className="glass edge-highlight group flex items-center gap-4 rounded-2xl p-5 transition hover:border-white/20"
          >
            <ArrowLeft className="h-5 w-5 text-muted transition group-hover:-translate-x-1" />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-faint">
                Poprzedni · {prev.eyebrow}
              </div>
              <div className={cn("font-medium", ACCENT_TEXT[prev.accent])}>{prev.short}</div>
            </div>
          </Link>
        ) : (
          <Link
            href="/"
            className="glass edge-highlight group flex items-center gap-4 rounded-2xl p-5 transition hover:border-white/20"
          >
            <ArrowLeft className="h-5 w-5 text-muted transition group-hover:-translate-x-1" />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-faint">Powrót</div>
              <div className="font-medium text-ink">Strona startowa</div>
            </div>
          </Link>
        )}

        {next ? (
          <Link
            href={next.href}
            className="glass edge-highlight group flex items-center justify-end gap-4 rounded-2xl p-5 text-right transition hover:border-white/20"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-faint">
                Następny · {next.eyebrow}
              </div>
              <div className={cn("font-medium", ACCENT_TEXT[next.accent])}>{next.short}</div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted transition group-hover:translate-x-1" />
          </Link>
        ) : (
          <Link
            href="/harmonogram"
            className="glass edge-highlight group flex items-center justify-end gap-4 rounded-2xl p-5 text-right transition hover:border-white/20"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-faint">Dalej</div>
              <div className="font-medium text-ink">Harmonogram spotkań</div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted transition group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </Container>
  );
}
