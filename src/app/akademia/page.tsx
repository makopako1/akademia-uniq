import type { Metadata } from "next";
import { Play, KeyRound, ListVideo } from "lucide-react";
import { ACADEMY_VIDEOS, SITE } from "@/lib/site";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  ExternalButton,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CopyPill } from "@/components/copy-pill";

export const metadata: Metadata = {
  title: "Akademia UNIQ (Vimeo)",
  description: "Kilkanaście nagrań krok po kroku: rejestracja Solantis, kopiowanie sygnałów, zarządzanie ryzykiem i więcej. Hasło: UNIQ2026.",
};

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Akademia"
        eyebrow="Wideo · Vimeo"
        accent="gold"
        title={<>Akademia <span className="text-chrome">UNIQ</span></>}
        subtitle="Nasza wideoteka na Vimeo. Kilkanaście nagrań, które prowadzą Cię przez platformę, konfigurację narzędzi, zasady inwestowania i sposób działania systemu. Obejrzyj i przeanalizuj całość."
      >
        <ExternalButton href={SITE.links.vimeo} size="lg">
          <Play className="h-4 w-4" />
          Otwórz Akademię na Vimeo
        </ExternalButton>
        <CopyPill label="Hasło" value={SITE.academyPassword} />
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <GlassCard strong className="flex h-full items-center gap-5 p-7">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                  <ListVideo className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{ACADEMY_VIDEOS.length}+ lekcji w jednym miejscu</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    Od powitania w społeczności, przez rejestrację na Solantis i kopiowanie sygnałów,
                    po zarządzanie ryzykiem i plan działania na 90 dni.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal>
              <Callout variant="warning" title="Hasło do Akademii" className="h-full">
                <div className="flex items-center gap-2">
                  <KeyRound className="h-4 w-4 text-gold" />
                  Hasło to <strong className="text-ink">UNIQ2026</strong>. Wpisz je na Vimeo, aby odblokować nagrania.
                </div>
              </Callout>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHeading eyebrow="Playlista" accent="gold" title="Co obejrzysz" />
          <Reveal stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ACADEMY_VIDEOS.map((title, i) => (
              <a key={title} href={SITE.links.vimeo} target="_blank" rel="noopener noreferrer">
                <GlassCard hover className="flex h-full items-center gap-4 p-4">
                  <div className="relative flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/8 bg-gradient-to-br from-panel-2 to-black">
                    <Play className="h-6 w-6 text-white/80" />
                    <span className="absolute left-1.5 top-1.5 font-mono text-[10px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium leading-snug text-ink">{title}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">Vimeo · UNIQ</div>
                  </div>
                </GlassCard>
              </a>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <Callout variant="tip" title="Jak najlepiej wyciągnąć z Akademii">
              Oglądaj po kolei i notuj wnioski oraz pytania. Wracaj do konkretnych lekcji, gdy
              konfigurujesz dane narzędzie — np. „Rejestracja Solantis” przy kroku 3, „Kopiowanie
              sygnałów MT5” przy automatyzacji.
            </Callout>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
