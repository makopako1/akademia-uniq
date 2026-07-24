import type { Metadata } from "next";
import { Monitor, Apple, Smartphone, Download, Building2, PlayCircle, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  Chip,
  StepBadge,
  ExternalButton,
  LeaderBadge,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { StepNav } from "@/components/step-nav";
import { Reveal } from "@/components/reveal";
import { BrandChip } from "@/components/brand-chip";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Krok 3 — MetaTrader 5 + Solantis",
  description: "Pobierz MetaTrader 5 i załóż konto na Solantis. Link do giełdy otrzymasz od Lidera.",
};

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Krok 3 · Broker"
        eyebrow="Krok 03"
        accent="gold"
        title={<>Broker: <span className="text-chrome">MetaTrader 5</span> + Solantis</>}
        subtitle="Do handlu potrzebujesz dwóch rzeczy: aplikacji MetaTrader 5 (tu widzisz rynek i realizujesz zlecenia) oraz konta na Solantis — naszej giełdzie, na której trzymasz środki i handlujesz parami walutowymi."
      >
        <ExternalButton href={SITE.links.mt5}>
          <Download className="h-4 w-4" />
          Pobierz MetaTrader 5
        </ExternalButton>
      </PageHero>

      {/* MT5 */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Część 1"
            accent="gold"
            title="Zainstaluj MetaTrader 5 (MT5)"
            subtitle="To bezpłatna, oficjalna aplikacja. Zainstaluj na komputerze, a najlepiej też na telefonie — będziesz mieć rynek zawsze pod ręką."
          />

          <Reveal className="mt-6">
            <BrandChip src="/mt5.png" alt="MetaTrader 5" imgClassName="h-9" />
          </Reveal>

          <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DownloadCard icon={Monitor} label="Windows" note="Aplikacja desktop" href={SITE.links.mt5} />
            <DownloadCard icon={Apple} label="macOS" note="Wersja dla Maca" href={SITE.links.mt5} />
            <DownloadCard icon={Smartphone} label="iPhone / iPad" note="App Store" href={SITE.links.mt5} />
            <DownloadCard icon={Smartphone} label="Android" note="Google Play" href={SITE.links.mt5} />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <GlassCard className="h-full p-7">
                <h3 className="text-lg font-semibold">Jak zalogować się do MT5</h3>
                <div className="mt-6 space-y-5">
                  <Step n={1} accent="gold" title="Pobierz i zainstaluj aplikację">
                    Skorzystaj z przycisku powyżej dla swojego systemu. Instalacja jest standardowa —
                    dalej, dalej, gotowe.
                  </Step>
                  <Step n={2} accent="gold" title="Wybierz serwer brokera">
                    Przy logowaniu MT5 poprosi o serwer. Podajesz serwer Solantis — dane dostaniesz
                    przy zakładaniu konta (patrz część 2).
                  </Step>
                  <Step n={3} accent="gold" title="Zaloguj się danymi z Solantis" last>
                    Login i hasło do MT5 pochodzą z Twojego konta Solantis. Po zalogowaniu zobaczysz
                    swój rachunek i wykresy.
                  </Step>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal>
              <Callout variant="warning" title="Demo najpierw" className="h-full">
                Zacznij od <strong className="text-ink">konta Demo</strong> (wirtualne środki). Poćwicz
                obsługę MT5 bez ryzyka, zanim przejdziesz na konto Real.
              </Callout>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Solantis */}
      <Section className="pt-0">
        <Container>
          <SectionHeading
            eyebrow="Część 2"
            accent="gold"
            title="Załóż konto na Solantis"
            subtitle="Solantis to giełda, na której podpinamy handel i (dla Elite) automatyzację. Konto zakładasz przez indywidualny link od swojego Lidera."
          />

          <Reveal className="mt-6">
            <div className="glass edge-highlight inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl px-5 py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/solantis.png" alt="Solantis" className="h-8 w-auto select-none" draggable={false} />
              <span className="h-6 w-px bg-white/12" />
              <span className="text-sm text-muted">Nasza giełda — tutaj zakładasz konto handlowe</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <GlassCard strong className="h-full p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">Rejestracja krok po kroku</h3>
                </div>
                <div className="mt-6 space-y-5">
                  <Step n={1} accent="gold" title="Otwórz link od Lidera">
                    Rejestracja startuje z indywidualnego linku, który wysyła Ci Lider. To ważne — dzięki
                    temu Twoje konto trafia we właściwe miejsce w strukturze.
                  </Step>
                  <Step n={2} accent="gold" title="Załóż konto Demo i Real">
                    Standardowo tworzysz dwa rachunki: Demo (do nauki) oraz Real (do handlu na żywo).
                    Zapisz dane logowania — przydadzą się w MT5.
                  </Step>
                  <Step n={3} accent="gold" title="Przejdź weryfikację i zasil konto" last>
                    Uzupełnij dane, przejdź weryfikację i zasil konto Real, gdy poczujesz się gotowy.
                    Kroki pokazujemy też na wideo w Akademii.
                  </Step>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal className="space-y-4">
              <GlassCard className="p-7">
                <KeyRound className="h-5 w-5 text-violet" />
                <h3 className="mt-3 text-base font-semibold">Skąd wziąć link?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Link do rejestracji na Solantis jest prywatny — udostępnia go wyłącznie Twój Lider.
                </p>
                <div className="mt-4">
                  <LeaderBadge>Link do Solantis — od Lidera</LeaderBadge>
                </div>
              </GlassCard>
              <ExternalButton href={SITE.links.vimeo} variant="secondary" className="w-full">
                <PlayCircle className="h-4 w-4" />
                Zobacz na wideo (Akademia)
              </ExternalButton>
            </Reveal>
          </div>

          <div className="mt-6">
            <Callout variant="info" title="Kolejność ma znaczenie">
              Najpierw zakładasz konto na <strong className="text-ink">Solantis</strong> (stamtąd masz
              dane logowania), a potem <strong className="text-ink">tymi danymi logujesz się w MT5</strong>.
              Jeśli coś nie gra — najpierw sprawdź serwer i dane z Solantis.
            </Callout>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Chip accent="gold">MetaTrader 5</Chip>
            <Chip accent="gold">Solantis</Chip>
            <Chip accent="gold">Konto Demo</Chip>
            <Chip accent="gold">Konto Real</Chip>
            <Chip accent="gold">Pary walutowe</Chip>
          </div>
        </Container>
      </Section>

      <StepNav current="broker" />
    </>
  );
}

function DownloadCard({
  icon: Icon,
  label,
  note,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  note: string;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <GlassCard hover className="flex h-full flex-col items-start gap-3 p-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <div className="font-semibold">{label}</div>
          <div className="text-xs text-muted">{note}</div>
        </div>
        <span className="mt-1 inline-flex items-center gap-1 text-xs text-gold">
          <Download className="h-3.5 w-3.5" /> Pobierz
        </span>
      </GlassCard>
    </a>
  );
}

function Step({
  n,
  title,
  accent,
  children,
  last,
}: {
  n: number;
  title: string;
  accent: "gold";
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <StepBadge n={n} accent={accent} />
        {!last && <span className="mt-2 w-px flex-1 bg-white/10" />}
      </div>
      <div className={cn(!last && "pb-1")}>
        <h4 className="font-semibold text-ink">{title}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}
