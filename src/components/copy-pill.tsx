"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyPill({
  value,
  label,
  className,
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <button
      onClick={copy}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/40 px-4 py-2.5 transition hover:border-white/25",
        className,
      )}
    >
      {label && <span className="font-mono text-[11px] uppercase tracking-wider text-faint">{label}</span>}
      <span className="font-mono text-sm font-semibold tracking-widest text-ink">{value}</span>
      <span className="text-muted transition group-hover:text-ink">
        {copied ? <Check className="h-4 w-4 text-emerald" /> : <Copy className="h-4 w-4" />}
      </span>
    </button>
  );
}
