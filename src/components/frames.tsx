import { cn } from "@/lib/utils";

/** Stylised browser window — used for platform UI mockups (no personal data). */
export function BrowserFrame({
  url = "my.uniqglobal.net",
  children,
  className,
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass-strong edge-highlight overflow-hidden rounded-2xl", className)}>
      <div className="flex items-center gap-3 border-b border-white/8 bg-black/30 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto flex max-w-xs flex-1 items-center justify-center gap-2 rounded-full border border-white/8 bg-black/40 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
          <span className="truncate font-mono text-[11px] text-muted">{url}</span>
        </div>
        <div className="w-10" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

/** Stylised phone frame — used for Telegram / mobile mockups. */
export function PhoneFrame({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[300px]", className)}>
      <div className="glass-strong edge-highlight overflow-hidden rounded-[2.2rem] border-white/12 p-2">
        <div className="overflow-hidden rounded-[1.7rem] bg-[#0b1016]">
          <div className="flex items-center justify-between px-5 pt-3 pb-2 font-mono text-[10px] text-muted">
            <span>9:41</span>
            <span className="h-1.5 w-16 rounded-full bg-white/10" />
            <span>100%</span>
          </div>
          {title && (
            <div className="flex items-center gap-2.5 border-b border-white/8 px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-mono text-[10px] text-white">
                UQ
              </span>
              <span className="text-sm font-medium text-ink">{title}</span>
            </div>
          )}
          <div className="p-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
