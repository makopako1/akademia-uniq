import { cn } from "@/lib/utils";

/**
 * Light "brand badge" for external tool logos that are dark-on-white
 * (TradingView, MetaTrader 5). A light surface + soft glow makes them
 * clearly visible on the dark site.
 */
export function BrandChip({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-[#f3f4f7] px-5 py-3 ring-1 ring-white/15 shadow-[0_10px_45px_-8px_rgba(255,255,255,0.22)]",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={cn("h-7 w-auto select-none", imgClassName)}
      />
    </span>
  );
}
