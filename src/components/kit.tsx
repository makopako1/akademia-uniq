import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Lock, Info, Lightbulb, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/site";
import { ACCENT_CHIP, ACCENT_DOT, ACCENT_TEXT, ACCENT_HEX } from "@/lib/accents";
import { Button, type ButtonProps } from "@/components/ui/button";

/* ---------- Layout ---------- */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-24", className)}>
      {children}
    </section>
  );
}

/* ---------- Text ---------- */

export function Eyebrow({
  children,
  accent,
  className,
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2", className)}>
      {accent && <span className={cn("h-1.5 w-1.5 rounded-full", ACCENT_DOT[accent])} />}
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  accent?: Accent;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow accent={accent}>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("max-w-2xl text-base leading-relaxed text-muted", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------- Surfaces ---------- */

export function GlassCard({
  className,
  children,
  strong,
  hover,
}: {
  className?: string;
  children: React.ReactNode;
  strong?: boolean;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        strong ? "glass-strong" : "glass",
        "edge-highlight rounded-3xl",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:border-white/20",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Chip({
  children,
  accent = "violet",
  className,
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
        ACCENT_CHIP[accent],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------- Callout ---------- */

const calloutMeta = {
  info: { icon: Info, accent: "cyan" as Accent, label: "Info" },
  tip: { icon: Lightbulb, accent: "emerald" as Accent, label: "Wskazówka" },
  warning: { icon: TriangleAlert, accent: "gold" as Accent, label: "Uwaga" },
  lock: { icon: Lock, accent: "violet" as Accent, label: "Od Lidera" },
};

export function Callout({
  variant = "info",
  title,
  children,
  className,
}: {
  variant?: keyof typeof calloutMeta;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const meta = calloutMeta[variant];
  const Icon = meta.icon;
  return (
    <div
      className={cn(
        "flex gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5",
        className,
      )}
    >
      <div
        className={cn(
          "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border",
          ACCENT_CHIP[meta.accent],
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-sm leading-relaxed text-muted">
        {title && <p className={cn("mb-1 font-semibold text-ink")}>{title}</p>}
        {children}
      </div>
    </div>
  );
}

/* ---------- Lists ---------- */

export function CheckList({
  items,
  accent = "emerald",
  className,
}: {
  items: React.ReactNode[];
  accent?: Accent;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
              ACCENT_CHIP[accent],
            )}
          >
            <Check className="h-3 w-3" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Buttons / links ---------- */

export function ExternalButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
} & Pick<ButtonProps, "variant" | "size" | "className">) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowUpRight className="h-4 w-4 opacity-70" />
      </a>
    </Button>
  );
}

export function InternalButton({
  href,
  children,
  variant = "secondary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
} & Pick<ButtonProps, "variant" | "size" | "className">) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

/** Non-clickable pill signalling "your Leader shares this privately". */
export function LeaderBadge({ children = "Link od Lidera", className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-4 py-2.5 text-sm font-medium text-violet",
        className,
      )}
    >
      <Lock className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ---------- Numeric step badge ---------- */

export function StepBadge({
  n,
  accent = "violet",
  className,
}: {
  n: number | string;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono text-sm font-semibold",
        ACCENT_CHIP[accent],
        className,
      )}
    >
      {typeof n === "number" ? String(n).padStart(2, "0") : n}
    </span>
  );
}

/* ---------- Accent glow blob (inline style, exact hex) ---------- */

export function Glow({
  accent,
  className,
  opacity = 0.18,
}: {
  accent: Accent;
  className?: string;
  opacity?: number;
}) {
  return (
    <span
      aria-hidden
      className={cn("aura", className)}
      style={{ background: ACCENT_HEX[accent], opacity }}
    />
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn("rule my-12", className)} />;
}

export function accentText(accent: Accent) {
  return ACCENT_TEXT[accent];
}
