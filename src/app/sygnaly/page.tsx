import type { Metadata } from "next";
import { QrCode, Link2, BadgeCheck, Bot, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SIGNAL_CATEGORIES, HUB_BOT_MENU, SITE } from "@/lib/site";
import { ACCENT_TEXT, ACCENT_CHIP, ACCENT_DOT } from "@/lib/accents";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  Chip,
  StepBadge,
  ExternalButton,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { StepNav } from "@/components/step-nav";
import { Reveal } from "@/components/reveal";
import { PhoneFrame } from "@/components/frames";

export const metadata: Metadata = {
  title: "Krok 4 — Grupy sygnałowe (UNIQ Hub)",
  description: "Podłącz Telegram przez UNIQ Hub i odblokuj kanały sygnałowe: Forex, Crypto, Stock, Insights.",
};

const VERIFY = [
  { icon: BadgeCheck, title: "Bądź aktywnym członkiem", desc: "Zaloguj się na platformę UNIQ — Twoje członkostwo jest podstawą dostępu." },
  { icon: Bot, title: "Wejdź w UNIQ Hub", desc: "W platformie otwórz UNIQ Produkty → UNIQ Hub. To centrum połączenia z Telegramem." },
  { icon: QrCode, title: "Zeskanuj QR lub kliknij link", desc: "Uruchom bota UNIQ Hub na Telegramie przez kod QR albo link z platformy." },
  { icon: Link2, title: "Bot łączy konto automatycznie", desc: "Po weryfikacji bot sam przypisuje Cię do właściwych kanałów. Status zobaczysz w „Status”." },
];

export default function Page() {
  const total = SIGNAL_CATEGORIES.reduce((n, c) => n + c.channels.length, 0);

  return (
    <>
      <PageHero
        breadcrumb="Krok 4 · Sygnały"
        eyebrow="Krok 04"
        accent="magenta"
        title={<>Podłącz <span className="text-chrome">grupy sygnałowe</span></>}
        subtitle="Sygnały dostajesz na Telegramie, ale dostęp nadaje się automatycznie z platformy. Łączysz konto raz przez UNIQ Hub, a bot przypisuje Cię do właściwych kanałów."
      >
        <ExternalButton href={SITE.links.platformApp}>Otwórz UNIQ Hub</ExternalButton>
      </PageHero>

      {/* How to connect */}
      <Section>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Połączenie"
                accent="magenta"
                title="Jak podłączyć w 4 krokach"
              />
              <div className="mt-8 space-y-5">
                {VERIFY.map((v, i) => (
                  <div key={v.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <StepBadge n={i + 1} accent="magenta" />
                      {i < VERIFY.length - 1 && <span className="mt-2 w-px flex-1 bg-white/10" />}
                    </div>
                    <div className="pb-1">
                      <div className="flex items-center gap-2">
                        <v.icon className="h-4 w-4 text-magenta" />
                        <h4 className="font-semibold text-ink">{v.title}</h4>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Callout variant="tip" title="Sprawdź status">
                  W bocie UNIQ Hub kliknij <strong className="text-ink">Status</strong>, aby zobaczyć
                  swoją weryfikację i liczbę aktywnych kanałów.
                </Callout>
              </div>
            </Reveal>

            {/* Bot mock */}
            <Reveal>
              <PhoneFrame title="UNIQ Hub · bot">
                <div className="space-y-2.5">
                  <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] p-3">
                    <div className="text-[12px] font-semibold text-ink">Forex</div>
                    <div className="mt-1.5 space-y-1">
                      {["UNIQ – BEYOND", "UNIQ – Delta (BETA)", "UNIQ – Gold Rush", "UNIQ – Grow", "UNIQ – Prime"].map((c) => (
                        <div key={c} className="flex items-center gap-1.5 text-[12px] text-cyan">
                          <CheckCircle2 className="h-3 w-3 text-emerald" /> {c}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted">
                      <CheckCircle2 className="h-3 w-3 text-emerald" /> Dostęp do 5 kanałów
                    </div>
                  </div>
                  {/* menu buttons */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {HUB_BOT_MENU.map((m) => (
                      <div
                        key={m}
                        className={cn(
                          "rounded-lg border border-white/8 bg-black/30 px-2 py-2 text-center text-[11px] text-muted",
                        )}
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </PhoneFrame>
              <p className="mt-4 text-center text-xs text-faint">Podgląd poglądowy menu bota UNIQ Hub.</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Channels */}
      <Section className="pt-0">
        <Container>
          <SectionHeading
            eyebrow="Kanały"
            accent="magenta"
            title={<>Twoje kanały sygnałowe <span className="text-muted text-2xl">· {total} razem</span></>}
            subtitle="Kanały pogrupowane są według rynku. Zakres dostępu zależy od Twojego pakietu."
          />
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {SIGNAL_CATEGORIES.map((cat) => (
              <GlassCard key={cat.key} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={cn("h-2.5 w-2.5 rounded-full", ACCENT_DOT[cat.accent])} />
                    <h3 className={cn("text-lg font-semibold", ACCENT_TEXT[cat.accent])}>{cat.label}</h3>
                  </div>
                  <span className="font-mono text-[11px] text-faint">{cat.channels.length} kanał(y)</span>
                </div>
                <p className="mt-2 text-sm text-muted">{cat.desc}</p>
                <div className="mt-4 space-y-2">
                  {cat.channels.map((ch) => (
                    <div
                      key={ch.name}
                      className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2.5"
                    >
                      <span className="flex items-center gap-2 text-sm text-ink">
                        <ChevronRight className={cn("h-3.5 w-3.5", ACCENT_TEXT[cat.accent])} />
                        {ch.name}
                      </span>
                      {ch.note && <Chip accent={cat.accent}>{ch.note}</Chip>}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </Reveal>

          <div className="mt-6">
            <Callout variant="info" title="Dostęp zależy od pakietu">
              Kanały oznaczone <strong className="text-ink">Elite</strong> są dostępne dla wyższych
              pakietów. Jeśli któregoś nie widzisz — sprawdź swój pakiet lub zapytaj Lidera.
            </Callout>
          </div>
        </Container>
      </Section>

      <StepNav current="sygnaly" />
    </>
  );
}
