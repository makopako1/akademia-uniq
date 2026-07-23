import type { Metadata } from "next";
import { Brain, HeartPulse, ShieldHalf, Repeat, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ACCENT_CHIP } from "@/lib/accents";
import type { Accent } from "@/lib/site";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  CheckList,
  ExternalButton,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Podstawy tradingu",
  description: "Mindset, psychologia i zarządzanie ryzykiem. Fundament, bez którego żadne narzędzie nie zadziała.",
};

const PILLARS: { icon: React.ComponentType<{ className?: string }>; accent: Accent; title: string; points: string[] }[] = [
  {
    icon: Brain,
    accent: "violet",
    title: "Nastawienie",
    points: [
      "Traktuj to jak umiejętność, nie loterię",
      "Konsekwencja > pojedynczy „strzał”",
      "Ucz się na małych krokach, nie od razu na maxa",
    ],
  },
  {
    icon: HeartPulse,
    accent: "magenta",
    title: "Psychologia",
    points: [
      "Emocje to najczęstszy powód strat",
      "Plan piszesz na chłodno i trzymasz się go",
      "Strata to koszt biznesu, nie porażka",
    ],
  },
  {
    icon: ShieldHalf,
    accent: "emerald",
    title: "Zarządzanie ryzykiem",
    points: [
      "Ryzykuj tylko mały % kapitału na transakcję",
      "Zawsze ustawiaj Stop Loss",
      "Pilnuj relacji zysku do ryzyka (RRR)",
    ],
  },
  {
    icon: Repeat,
    accent: "cyan",
    title: "Rutyna (DMO)",
    points: [
      "Codzienny, powtarzalny zestaw działań",
      "Regularna obecność na sesjach na żywo",
      "Dziennik tradera — zapisuj i wyciągaj wnioski",
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Podstawy tradingu"
        eyebrow="Fundament"
        accent="emerald"
        title={<>Zasady, które <span className="text-chrome">robią różnicę</span></>}
        subtitle="Najlepsze narzędzia nic nie dadzą bez fundamentu. Zanim skupisz się na sygnałach i wskaźnikach, zbuduj właściwe nastawienie, opanuj emocje i naucz się chronić kapitał."
      />

      <Section>
        <Container>
          <Reveal stagger className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <GlassCard key={p.title} className="p-7">
                <div className="flex items-center gap-3">
                  <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl border", ACCENT_CHIP[p.accent])}>
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <div className="mt-5">
                  <CheckList accent={p.accent} items={p.points} />
                </div>
              </GlassCard>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <GlassCard strong className="h-full p-7 sm:p-9">
                <SectionHeading eyebrow="Złote zasady" accent="gold" title="Siedem zasad początkującego" />
                <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  <CheckList
                    accent="gold"
                    items={[
                      "Zacznij od konta Demo",
                      "Ryzykuj mało — kapitał to Twoje paliwo",
                      "Nigdy nie odrabiaj strat na siłę",
                      "Jedna decyzja = jeden plan (Entry, SL, TP)",
                    ]}
                  />
                  <CheckList
                    accent="gold"
                    items={[
                      "Nie handluj na emocjach ani „z nudów”",
                      "Prowadź dziennik i analizuj błędy",
                      "Bądź na sesjach — otoczenie uczy najszybciej",
                    ]}
                  />
                </div>
              </GlassCard>
            </Reveal>
            <Reveal className="space-y-4">
              <Callout variant="tip" title="Zobacz na wideo" className="">
                W Akademii znajdziesz lekcje „Zarządzanie ryzykiem w Tradingu” oraz „DMO — Daily Method
                of Operation”. To must-watch na start.
              </Callout>
              <ExternalButton href={SITE.links.vimeo} variant="secondary" className="w-full">
                <PlayCircle className="h-4 w-4" />
                Akademia UNIQ
              </ExternalButton>
            </Reveal>
          </div>

          <Reveal className="mt-6">
            <Callout variant="warning" title="Ważne">
              To treści edukacyjne — nie porada inwestycyjna ani rekomendacja. Trading wiąże się z
              ryzykiem utraty kapitału. Podejmuj decyzje samodzielnie i świadomie.
            </Callout>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
