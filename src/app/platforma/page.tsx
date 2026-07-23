import type { Metadata } from "next";
import {
  LayoutDashboard,
  BadgeCheck,
  Boxes,
  Briefcase,
  LifeBuoy,
  UserCog,
  Globe,
  Bell,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ACCENT_CHIP } from "@/lib/accents";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  Chip,
  ExternalButton,
  InternalButton,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { StepNav } from "@/components/step-nav";
import { Reveal } from "@/components/reveal";
import { BrowserFrame } from "@/components/frames";
import { LogoWordmark } from "@/components/logo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Krok 2 — Poznaj platformę UNIQ",
  description: "Spacer po my.uniqglobal.net: panel, członkostwo, produkty, biznes, wsparcie i profil.",
};

const AREAS = [
  {
    icon: LayoutDashboard,
    accent: "cyan" as const,
    name: "Panel",
    desc: "Twój pulpit startowy — punkt wejścia do całego ekosystemu i skróty do najważniejszych sekcji.",
  },
  {
    icon: BadgeCheck,
    accent: "gold" as const,
    name: "Członkostwo",
    desc: "Szczegóły Twojego pakietu: ID członka, nazwa pakietu, koszt subskrypcji i data kolejnej opłaty. Subskrypcja odnawia się w cyklu 28 dni.",
  },
  {
    icon: Boxes,
    accent: "magenta" as const,
    name: "UNIQ Produkty",
    desc: "Rozwijane menu ze wszystkimi narzędziami: Learn, Live, Hub, Scan, Intelligence i Connect.",
    href: "/narzedzia",
    hrefLabel: "Przejdź do narzędzi",
  },
  {
    icon: Briefcase,
    accent: "violet" as const,
    name: "Biznes",
    desc: "Strefa modelu biznesowego i afiliacji. Podstawy tego, jak działa część networkowa, opisujemy osobno.",
    href: "/network",
    hrefLabel: "Model biznesowy",
    locked: true,
  },
  {
    icon: LifeBuoy,
    accent: "emerald" as const,
    name: "Wsparcie",
    desc: "Kontakt ze sponsorem, FAQ oraz zgłoszenie wsparcia. Gdy coś jest niejasne — zaczynasz właśnie tutaj (albo od swojego Lidera).",
  },
  {
    icon: UserCog,
    accent: "teal" as const,
    name: "Menu profilu",
    desc: "Mój profil, zmiana hasła, bezpieczeństwo, powiadomienia, program afiliacyjny, informacje o wypłacie i KYC.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Krok 2 · Platforma"
        eyebrow="Krok 02"
        accent="cyan"
        title={<>Poznaj <span className="text-chrome">platformę</span></>}
        subtitle="my.uniqglobal.net to Twoje centrum dowodzenia. Zrób sobie 5 minut i przeklikaj każdą zakładkę — poniżej masz mapę, żeby nic Cię nie zaskoczyło."
      >
        <ExternalButton href={SITE.links.platformApp}>Otwórz platformę</ExternalButton>
      </PageHero>

      {/* Browser mock */}
      <Section>
        <Container>
          <Reveal>
            <BrowserFrame url="my.uniqglobal.net">
              <div className="p-4 sm:p-6">
                {/* nav */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-white/8 pb-4">
                  <LogoWordmark className="h-5 text-white" />
                  {["Panel", "Członkostwo", "UNIQ Produkty", "Biznes", "Wsparcie"].map((n, i) => (
                    <span
                      key={n}
                      className={cn(
                        "text-[13px]",
                        i === 0 ? "font-medium text-ink" : "text-muted",
                      )}
                    >
                      {n}
                    </span>
                  ))}
                  <div className="ml-auto flex items-center gap-3">
                    <span className="flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted">
                      <Globe className="h-3 w-3" /> PL
                    </span>
                    <span className="relative">
                      <Bell className="h-4 w-4 text-muted" />
                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-magenta" />
                    </span>
                    <span className="h-7 w-7 rounded-full bg-white/10" />
                  </div>
                </div>
                {/* membership card mock */}
                <div className="mt-5 grid gap-4 sm:grid-cols-[1.2fr_1fr]">
                  <div className="glass rounded-2xl p-5">
                    <div className="text-sm font-semibold">Szczegóły członkostwa</div>
                    <div className="mt-4 space-y-3 text-[13px]">
                      <Row k="ID członka" v="#••••" />
                      <Row k="Pakiet" v="UNIQ ELITE" accent />
                      <Row k="Koszt subskrypcji" v="$179,99 / miesiąc" />
                      <Row k="Cykl rozliczeń" v="co 28 dni" />
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-5">
                    <div className="text-sm font-semibold">Jak działa subskrypcja</div>
                    <ul className="mt-4 space-y-2 text-[13px] text-muted">
                      <li>• Opłata rezerwuje się automatycznie co 28 dni</li>
                      <li>• Konto musi być aktywne i w dobrym stanie</li>
                      <li>• Jeden zakup pakietu = jeden cykl</li>
                    </ul>
                  </div>
                </div>
              </div>
            </BrowserFrame>
            <p className="mt-4 text-center text-xs text-faint">
              Rekonstrukcja poglądowa interfejsu — bez prawdziwych danych osobowych.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Map of areas */}
      <Section className="pt-4">
        <Container>
          <SectionHeading
            eyebrow="Mapa platformy"
            accent="cyan"
            title="Co gdzie znajdziesz"
            subtitle="Sześć obszarów, które warto znać od pierwszego dnia."
          />
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a) => (
              <GlassCard key={a.name} hover className="flex h-full flex-col p-6">
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-2xl border",
                    ACCENT_CHIP[a.accent],
                  )}
                >
                  <a.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 flex items-center gap-2 text-lg font-semibold">
                  {a.name}
                  {a.locked && <Chip accent="violet">hasło</Chip>}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{a.desc}</p>
                {a.href && (
                  <InternalButton href={a.href} variant="ghost" size="sm" className="mt-4 self-start px-0">
                    {a.hrefLabel}
                    <ArrowRight className="h-4 w-4" />
                  </InternalButton>
                )}
              </GlassCard>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Profile essentials */}
      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <GlassCard strong className="h-full p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal/25 bg-teal/10 text-teal">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">Ustaw profil od razu</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  W menu profilu uzupełnij dane osobowe, ustaw język na polski i włącz powiadomienia.
                  Jeśli planujesz część biznesową — od razu przejdź weryfikację{" "}
                  <strong className="text-ink">KYC</strong> i dodaj{" "}
                  <strong className="text-ink">informacje o wypłacie</strong>. To odblokowuje wypłaty
                  później i oszczędza nerwów.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Chip accent="teal">Mój profil</Chip>
                  <Chip accent="teal">Zmień hasło</Chip>
                  <Chip accent="teal">Bezpieczeństwo</Chip>
                  <Chip accent="teal">Powiadomienia</Chip>
                  <Chip accent="teal">Program afiliacyjny</Chip>
                  <Chip accent="teal">Informacje o wypłacie</Chip>
                  <Chip accent="teal">KYC</Chip>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal>
              <Callout variant="tip" title="Wskazówka" className="h-full">
                Ustaw język na <strong className="text-ink">Polski</strong> (ikona globusa) — cała
                platforma przełączy się na polski, łącznie z opisami produktów.
              </Callout>
            </Reveal>
          </div>
        </Container>
      </Section>

      <StepNav current="platforma" />
    </>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-white/6 pb-2">
      <span className="text-muted">{k}</span>
      <span className={cn("font-medium", accent ? "text-gold" : "text-ink")}>{v}</span>
    </div>
  );
}
