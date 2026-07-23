import { cn } from "@/lib/utils";

/** UNIQ chrome wordmark — the official logo (background removed to transparency). */
export function LogoWordmark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/uniq-logo.png"
      alt="UNIQ"
      draggable={false}
      className={cn("h-7 w-auto select-none", className)}
    />
  );
}

/** UNIQ infinity mark — the official symbol (background removed to transparency). */
export function LogoMark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/uniq-infinity.png"
      alt="UNIQ"
      draggable={false}
      className={cn("h-6 w-auto select-none", className)}
    />
  );
}

export function BrandLockup({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoWordmark className="h-6" />
      <span className="hidden h-4 w-px bg-white/15 sm:block" />
      <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:block">
        Akademia
        <br />
        Startowa
      </span>
    </span>
  );
}
