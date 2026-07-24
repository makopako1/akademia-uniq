import { cn } from "@/lib/utils";

const SRC: Record<string, string> = {
  learn: "/products/learn.png",
  live: "/products/live.png",
  hub: "/products/hub.png",
  scan: "/products/scan.png",
  intelligence: "/products/intelligence.png",
  connect: "/products/connect.png",
};

/** Official UNIQ product logo (background removed), used in place of letter badges. */
export function ProductIcon({ pkey, className }: { pkey: string; className?: string }) {
  const src = SRC[pkey];
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      draggable={false}
      className={cn("shrink-0 select-none object-contain", className)}
    />
  );
}
