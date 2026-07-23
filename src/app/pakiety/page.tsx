import type { Metadata } from "next";
import { Check, Star, Lock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PACKAGES, SITE } from "@/lib/site";
import { ACCENT_TEXT, ACCENT_HEX } from "@/lib/accents";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  InternalButton,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pakiety członkostwa",
  description: "Core, Advanced, Elite, VIP i Lifetime — różnią się liczbą i jakością odblokowanych narzędzi UNIQ.",
};

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Pakiety"
        eyebrow="Członkostwo"
        accent="magenta"
        title={<>Wybierz pakiet <span className="text-chrome">pod swoją ścieżkę</span></>}
        subtitle="Pakiety różnią się przede wszystkim liczbą i jakością odblokowanych narzędzi UNIQ — od podstawowego wejścia po pełny, premium dostęp."
      />

      <Section>
        <Container>
          <Reveal stagger className="grid gap-4 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <GlassCard
                key={p.key}
                strong={p.featured}
                className={cn(
                  "relative flex flex-col p-7",
                  p.featured && "conic-border lg:-my-2 lg:scale-[1.02]",
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-magenta/30 bg-magenta/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-magenta">
                    <Star className="h-3 w-3 fill-magenta" /> Rekomendowany
                  </span>
                )}
                <div className="font-mono text-[11px] uppercase tracking-widest text-faint">{p.label}</div>
                <h3 className={cn("mt-1 text-2xl font-semibold", ACCENT_TEXT[p.accent])}>{p.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-semibold text-ink">{p.price}</span>
                  <span className="text-lg text-muted">{p.cents}</span>
                </div>
                <div className="mt-1 text-xs text-muted">{p.billing}</div>

                <div className="my-5 h-px bg-white/8" />

                <ul className="flex-1 space-y-2.5">
                  {p.includes.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT_HEX[p.accent] }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={p.featured ? "primary" : "secondary"}
                  className="mt-6"
                >
                  <a href={SITE.links.platformApp} target="_blank" rel="noopener noreferrer">
                    Wybierz w platformie
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </a>
                </Button>
              </GlassCard>
            ))}
          </Reveal>

          <Reveal className="mt-8 grid gap-4 md:grid-cols-2">
            <Callout variant="info" title="Czym różnią się pakiety?">
              Głównie zakresem narzędzi: wyższe pakiety odblokowują pełny dostęp do UNIQ Hub, UNIQ
              Intelligence, UNIQ Connect oraz dodatki (np. wcześniejszy dostęp do nowości, miejsca VIP).
            </Callout>
            <Callout variant="lock" title="Wartość biznesowa pakietu">
              Każdy pakiet ma też wartość w modelu biznesowym (CV, Fast Start). Szczegóły opisujemy w
              sekcji <strong className="text-ink">Model biznesowy</strong> — chronionej osobnym hasłem.
            </Callout>
          </Reveal>

          <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-violet" />
              <div>
                <div className="font-semibold">Nie wiesz, który pakiet wybrać?</div>
                <div className="text-sm text-muted">Twój Lider pomoże dobrać opcję do Twoich celów.</div>
              </div>
            </div>
            <InternalButton href="/network" variant="secondary">
              Model biznesowy
            </InternalButton>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
