import type { Metadata } from "next";
import { Clock, ShieldCheck, HeartOff, Gauge, Sparkles } from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  Chip,
  StepBadge,
  InternalButton,
  LeaderBadge,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { StepNav } from "@/components/step-nav";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Krok 6 — Automatyzacja (AtlasAI)",
  description: "AtlasAI to zautomatyzowany system tradingowy na MetaTrader 5 dla pakietu Elite. Proste wyjaśnienie.",
};

const FEATURES = [
  { icon: Clock, title: "Działa 24/5", desc: "Po skonfigurowaniu pracuje w tle w godzinach rynku — nie musisz siedzieć przed wykresem." },
  { icon: Gauge, title: "Stałe reguły", desc: "Handluje według jasnych zasad dopracowanych na testach — bez zgadywania." },
  { icon: ShieldCheck, title: "Zarządzanie ryzykiem", desc: "Ochrona kapitału jest wbudowana w system — limity i kontrola ekspozycji." },
  { icon: HeartOff, title: "Bez emocji", desc: "Zero strachu i chciwości. Realizacja zgodna z planem, nie z nastrojem." },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Krok 6 · Automatyzacja"
        eyebrow="Krok 06 · Elite"
        accent="emerald"
        title={<>Automatyzacja: <span className="text-chrome">AtlasAI</span></>}
        subtitle="AtlasAI to zautomatyzowany system tradingowy na rynku Forex. Uruchamiasz go na MetaTrader 5, a on realizuje transakcje według sprawdzonych reguł. To narzędzie dla pakietu Elite."
      >
        <Chip accent="gold">Tylko pakiet Elite</Chip>
      </PageHero>

      {/* What it does */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="W skrócie"
            accent="emerald"
            title="Co robi automatyzacja"
            subtitle="Bez wchodzenia w techniczne szczegóły — oto sedno w czterech punktach."
          />
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <GlassCard key={f.title} hover className="p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald/25 bg-emerald/10 text-emerald">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </GlassCard>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Simple setup */}
      <Section className="pt-0">
        <Container>
          <div className="grid items-start gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <GlassCard strong className="h-full p-7 sm:p-9">
                <SectionHeading eyebrow="Uruchomienie" accent="emerald" title="Trzy proste kroki" />
                <div className="mt-8 space-y-5">
                  <Setup n={1} title="Miej gotowe konto Solantis + MT5">
                    To fundament. Jeśli jeszcze go nie masz — wróć do kroku 3 i najpierw ustaw brokera
                    oraz MetaTrader 5.
                  </Setup>
                  <Setup n={2} title="Podłącz automatyzację z Liderem">
                    Podłączenie ustawiasz razem ze swoim Liderem — to on przeprowadzi Cię przez proces
                    krok po kroku. Nie musisz nic „programować”.
                  </Setup>
                  <Setup n={3} title="Obserwuj i ucz się" last>
                    Gdy system działa, Twoją rolą jest spokojna obserwacja i nauka. Regularnie zaglądaj
                    na sesje na żywo, żeby rozumieć, co się dzieje na rynku.
                  </Setup>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal className="space-y-4">
              <GlassCard className="p-6">
                <Sparkles className="h-5 w-5 text-emerald" />
                <h3 className="mt-3 font-semibold">Podłączenie przez Lidera</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Masz pakiet <strong className="text-ink">Elite</strong> i chcesz podłączyć
                  automatyzację? Zgłoś się do swojego Lidera — przeprowadzi Cię przez konfigurację
                  krok po kroku.
                </p>
                <div className="mt-4">
                  <LeaderBadge>Podłączenie automatyzacji — od Lidera</LeaderBadge>
                </div>
              </GlassCard>
              <InternalButton href="/broker" variant="outline" className="w-full">
                Wróć do kroku 3: Broker
              </InternalButton>
            </Reveal>
          </div>

          <div className="mt-6 space-y-3">
            <Callout variant="warning" title="Ważne — ryzyko">
              Żaden system nie eliminuje ryzyka. Automatyzacja stosuje reguły ograniczające straty, ale
              trading zawsze wiąże się z ryzykiem utraty kapitału. Ustaw kwoty, na które możesz sobie
              pozwolić, i decyduj świadomie.
            </Callout>
            <Callout variant="lock" title="To narzędzie Elite">
              Automatyzacja AtlasAI jest częścią pakietu <strong className="text-ink">Elite</strong>.
              Jeśli chcesz z niej korzystać, a nie masz pakietu — porozmawiaj z Liderem o opcjach.
            </Callout>
          </div>
        </Container>
      </Section>

      <StepNav current="automatyzacja" />
    </>
  );
}

function Setup({
  n,
  title,
  children,
  last,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <StepBadge n={n} accent="emerald" />
        {!last && <span className="mt-2 w-px flex-1 bg-white/10" />}
      </div>
      <div className="pb-1">
        <h4 className="font-semibold text-ink">{title}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}
