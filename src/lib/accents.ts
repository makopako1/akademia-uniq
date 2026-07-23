import type { Accent } from "./site";

/** Full static class strings so Tailwind can detect them at build time. */

export const ACCENT_TEXT: Record<Accent, string> = {
  gold: "text-gold",
  orange: "text-orange",
  magenta: "text-magenta",
  cyan: "text-cyan",
  emerald: "text-emerald",
  teal: "text-teal",
  violet: "text-violet",
};

export const ACCENT_DOT: Record<Accent, string> = {
  gold: "bg-gold",
  orange: "bg-orange",
  magenta: "bg-magenta",
  cyan: "bg-cyan",
  emerald: "bg-emerald",
  teal: "bg-teal",
  violet: "bg-violet",
};

export const ACCENT_CHIP: Record<Accent, string> = {
  gold: "bg-gold/10 text-gold border-gold/25",
  orange: "bg-orange/10 text-orange border-orange/25",
  magenta: "bg-magenta/10 text-magenta border-magenta/25",
  cyan: "bg-cyan/10 text-cyan border-cyan/25",
  emerald: "bg-emerald/10 text-emerald border-emerald/25",
  teal: "bg-teal/10 text-teal border-teal/25",
  violet: "bg-violet/10 text-violet border-violet/25",
};

export const ACCENT_BORDER: Record<Accent, string> = {
  gold: "border-gold/30",
  orange: "border-orange/30",
  magenta: "border-magenta/30",
  cyan: "border-cyan/30",
  emerald: "border-emerald/30",
  teal: "border-teal/30",
  violet: "border-violet/30",
};

export const ACCENT_HEX: Record<Accent, string> = {
  gold: "#f4c25b",
  orange: "#ff8f43",
  magenta: "#ff4d8d",
  cyan: "#4ec6f5",
  emerald: "#34d399",
  teal: "#22d3ee",
  violet: "#8b7bff",
};
