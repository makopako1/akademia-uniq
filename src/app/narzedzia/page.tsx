import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Radio,
  Send,
  LineChart,
  BrainCircuit,
  Plug,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PRODUCTS, SITE, type Product } from "@/lib/site";
import { ACCENT_TEXT, ACCENT_CHIP, ACCENT_HEX } from "@/lib/accents";
import {
  Container,
  Section,
  GlassCard,
  CheckList,
  Glow,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Narzędzia UNIQ",
  description: "Learn, Live, Hub, Scan, Intelligence i Connect — cały ekosystem UNIQ wyjaśniony po polsku.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  learn: GraduationCap,
  live: Radio,
  hub: Send,
  scan: LineChart,
  intelligence: BrainCircuit,
  connect: Plug,
};

type CTA = { label: string; href: string; external?: boolean };
const CTAS: Record<string, CTA[]> = {
  learn: [
    { label: "Otwórz UNIQ Learn", href: SITE.links.platformApp, external: true },
    { label: "Akademia na Vimeo", href: SITE.links.vimeo, external: true },
  ],
  live: [
    { label: "Otwórz UNIQ Live", href: SITE.links.platformApp, external: true },
    { label: "Harmonogram", href: "/harmonogram" },
  ],
  hub: [{ label: "Instrukcja: grupy sygnałowe", href: "/sygnaly" }],
  scan: [{ label: "Instrukcja: TradingView", href: "/tradingview" }],
  intelligence: [{ label: "Otwórz Intelligence", href: SITE.links.platformApp, external: true }],
  connect: [{ label: "Otwórz platformę", href: SITE.links.platformApp, external: true }],
};

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Narzędzia"
        eyebrow="Ekosystem UNIQ"
        accent="magenta"
        title={<>Sześć narzędzi, <span className="text-chrome">jeden system</span></>}
        subtitle="UNIQ to połączony ekosystem: uczysz się, ćwiczysz na żywo, dostajesz sygnały, analizujesz wykresy i automatyzujesz. Oto każdy element z osobna."
      />

      <Section className="pt-6">
        <Container>
          <div className="space-y-5">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.key}>
                <ProductBlock product={p} icon={ICONS[p.key]} ctas={CTAS[p.key]} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function ProductBlock({
  product: p,
  icon: Icon,
  ctas,
  flip,
}: {
  product: Product;
  icon: React.ComponentType<{ className?: string }>;
  ctas: CTA[];
  flip?: boolean;
}) {
  return (
    <GlassCard className="relative overflow-hidden">
      <Glow accent={p.accent} className={cn("h-56 w-56 top-0", flip ? "left-0" : "right-0")} opacity={0.13} />
      <div className={cn("relative grid gap-8 p-7 sm:p-9 lg:grid-cols-2 lg:items-center", flip && "lg:[direction:rtl]")}>
        <div className="lg:[direction:ltr]">
          <div className="flex items-center gap-3">
            <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border", ACCENT_CHIP[p.accent])}>
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold">{p.name}</h2>
              <div className={cn("font-mono text-[11px] uppercase tracking-widest", ACCENT_TEXT[p.accent])}>
                {p.tagline}
              </div>
            </div>
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted">{p.desc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((c) =>
              c.external ? (
                <Button key={c.href + c.label} asChild variant="secondary" size="sm">
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    {c.label}
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </a>
                </Button>
              ) : (
                <Button key={c.href + c.label} asChild variant="secondary" size="sm">
                  <Link href={c.href}>
                    {c.label}
                    <ArrowRight className="h-4 w-4 opacity-70" />
                  </Link>
                </Button>
              ),
            )}
          </div>
        </div>

        <div className="lg:[direction:ltr]">
          <div
            className="rounded-2xl border border-white/8 bg-black/25 p-6"
            style={{ boxShadow: `inset 0 1px 0 ${ACCENT_HEX[p.accent]}22` }}
          >
            <div className="font-mono text-[11px] uppercase tracking-widest text-faint">W skrócie</div>
            <div className="mt-4">
              <CheckList accent={p.accent} items={p.points} />
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
