import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/site";
import { Container, Eyebrow, Glow } from "@/components/kit";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  accent = "violet",
  breadcrumb,
  children,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  accent?: Accent;
  breadcrumb?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-14 sm:pt-20", className)}>
      <div className="grid-lines pointer-events-none absolute inset-0 -z-0 opacity-60" />
      <Glow accent={accent} className="-top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2" opacity={0.14} />
      <Container className="relative">
        <nav className="mb-6 flex items-center gap-1.5 text-xs text-faint">
          <Link href="/" className="transition hover:text-muted">
            Start
          </Link>
          {breadcrumb && (
            <>
              <ChevronRight className="h-3 w-3" />
              <span className="text-muted">{breadcrumb}</span>
            </>
          )}
        </nav>

        <div className="max-w-3xl">
          {eyebrow && <Eyebrow accent={accent}>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.03] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
