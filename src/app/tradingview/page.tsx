import type { Metadata } from "next";
import { Zap, Crosshair, Bot, Star, UserCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import { ACCENT_TEXT, ACCENT_CHIP } from "@/lib/accents";
import type { Accent } from "@/lib/site";
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
import { BrowserFrame } from "@/components/frames";

export const metadata: Metadata = {
  title: "Krok 5 — TradingView + wskaźniki UNIQ",
  description: "Załóż darmowe konto TradingView i przypisz wskaźniki UNIQ IMPULS, HUNTER i PILOT AI przez nazwę użytkownika.",
};

const INDICATORS: { name: string; accent: Accent; icon: React.ComponentType<{ className?: string }>; desc: string }[] = [
  {
    name: "UNIQ IMPULS",
    accent: "cyan",
    icon: Zap,
    desc: "Sygnały momentum i wybić w czasie rzeczywistym. Filtr trendu EMA 200, potwierdzenie ADX, gotowe poziomy Entry, TP1–TP3 i SL.",
  },
  {
    name: "UNIQ HUNTER",
    accent: "magenta",
    icon: Crosshair,
    desc: "Precyzyjne punkty wejścia i wyjścia dzięki autorskiej nakładce wielu wskaźników. Dla polowania na dokładne setupy.",
  },
  {
    name: "UNIQ PILOT AI",
    accent: "emerald",
    icon: Bot,
    desc: "Wspomagane AI wykrywanie sygnałów na wielu interwałach — kierunek trendu na pierwszy rzut oka.",
  },
];

const STEPS_TV = [
  { title: "Załóż darmowe konto TradingView", desc: "Wejdź na TradingView i zarejestruj się. Płatny plan nie jest potrzebny — darmowe konto wystarczy." },
  { title: "Skopiuj swoją nazwę użytkownika", desc: "To Twój unikalny username z TradingView (np. z ustawień profilu). Będzie kluczem do przypisania wtyczek." },
  { title: "Wpisz nazwę użytkownika w UNIQ Scan", desc: "W platformie: UNIQ Produkty → UNIQ Scan → podaj swoje konto TradingView. Wtyczki przypisują się do Twojego konta automatycznie." },
  { title: "Otwórz link do wskaźników i dodaj do ulubionych", desc: "Kliknij „Otwórz w TradingView” przy każdym wskaźniku i dodaj go do ulubionych (gwiazdka). Potem użyj na wykresie." },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Krok 5 · TradingView"
        eyebrow="Krok 05"
        accent="cyan"
        title={<>TradingView + <span className="text-chrome">wskaźniki UNIQ</span></>}
        subtitle="Wskaźniki UNIQ działają na TradingView. Podpięcie jest banalnie proste: podajesz swoją nazwę użytkownika w platformie, a wtyczki same przypisują się do konta."
      >
        <ExternalButton href={SITE.links.tradingview}>Załóż konto TradingView</ExternalButton>
      </PageHero>

      {/* Indicators */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Trzy wskaźniki"
            accent="cyan"
            title="Twój arsenał na wykresie"
            subtitle="Trzy autorskie narzędzia UNIQ Scan. Każde pokazuje rynek z innej strony."
          />
          <Reveal stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {INDICATORS.map((ind) => (
              <GlassCard key={ind.name} hover className="p-6">
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl border", ACCENT_CHIP[ind.accent])}>
                  <ind.icon className="h-5 w-5" />
                </span>
                <h3 className={cn("mt-4 text-lg font-semibold", ACCENT_TEXT[ind.accent])}>{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ind.desc}</p>
              </GlassCard>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Steps + chart mock */}
      <Section className="pt-0">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <SectionHeading eyebrow="Podpięcie" accent="cyan" title="Jak przypisać wskaźniki" />
              <div className="mt-8 space-y-5">
                {STEPS_TV.map((s, i) => (
                  <div key={s.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <StepBadge n={i + 1} accent="cyan" />
                      {i < STEPS_TV.length - 1 && <span className="mt-2 w-px flex-1 bg-white/10" />}
                    </div>
                    <div className="pb-1">
                      <h4 className="font-semibold text-ink">{s.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <Callout variant="tip" title="Weryfikacja = nazwa użytkownika">
                  Cała „magia” to podanie <strong className="text-ink">nazwy użytkownika TradingView</strong>{" "}
                  w UNIQ Scan. Nie udostępniasz hasła — tylko publiczny username.
                </Callout>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <UserCheck className="h-4 w-4 text-emerald" />
                  Status w platformie pokaże „Konto TradingView — połączone”.
                </div>
              </div>
            </Reveal>

            {/* chart mock */}
            <Reveal>
              <BrowserFrame url="tradingview.com · UniQ Impuls">
                <div className="p-4">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-muted">EUR / USD · 15m</span>
                    <span className="flex items-center gap-1 text-cyan">
                      <Star className="h-3 w-3 fill-cyan" /> Ulubione
                    </span>
                  </div>
                  <ChartMock />
                  <div className="mt-3 rounded-xl border border-cyan/20 bg-cyan/[0.05] p-3">
                    <div className="text-[11px] font-semibold text-cyan">UNIQ Impuls</div>
                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[10px] text-muted">
                      <span>Trend · EMA 200 (filtr)</span>
                      <span className="text-emerald">Entry 1.14385</span>
                      <span>Momentum · ADX &gt; 20</span>
                      <span className="text-emerald">TP1 · TP2 · TP3</span>
                      <span>Wejście · wick-breakout</span>
                      <span className="text-magenta">SL 1.14530</span>
                    </div>
                  </div>
                </div>
              </BrowserFrame>
              <p className="mt-4 text-center text-xs text-faint">Wizualizacja poglądowa — nie sygnał inwestycyjny.</p>
            </Reveal>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Chip accent="cyan">Darmowe konto OK</Chip>
            <Chip accent="cyan">IMPULS</Chip>
            <Chip accent="magenta">HUNTER</Chip>
            <Chip accent="emerald">PILOT AI</Chip>
          </div>
        </Container>
      </Section>

      <StepNav current="tradingview" />
    </>
  );
}

function ChartMock() {
  const candles = [
    [30, 12, 8], [42, 10, 6], [26, 14, 10], [50, 9, 7], [36, 11, 9],
    [58, 8, 12], [44, 13, 6], [66, 7, 10], [52, 12, 8], [72, 9, 6],
    [60, 11, 10], [80, 6, 9], [70, 10, 7], [88, 8, 11], [78, 12, 6],
  ];
  return (
    <svg viewBox="0 0 320 140" className="mt-3 w-full" role="img" aria-label="Wykres poglądowy">
      <defs>
        <linearGradient id="ema" x1="0" y1="0" x2="320" y2="0">
          <stop stopColor="#4ec6f5" stopOpacity="0.2" />
          <stop offset="1" stopColor="#4ec6f5" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {[30, 60, 90, 120].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#ffffff" strokeOpacity="0.05" />
      ))}
      {candles.map((c, i) => {
        const x = 12 + i * 20;
        const up = i % 2 === 0;
        const top = c[0];
        const h = 34 - c[2];
        return (
          <g key={i}>
            <line x1={x} y1={top - c[1]} x2={x} y2={top + h + c[2]} stroke={up ? "#34d399" : "#ff4d8d"} strokeWidth="1" />
            <rect x={x - 4} y={top} width="8" height={h} rx="1" fill={up ? "#34d399" : "#ff4d8d"} />
          </g>
        );
      })}
      <path d="M6 96 C 60 88, 120 70, 180 58 S 300 40, 316 44" fill="none" stroke="url(#ema)" strokeWidth="2" />
      <polygon points="150,120 158,120 154,112" fill="#34d399" />
      <polygon points="230,40 238,40 234,48" fill="#ff4d8d" />
    </svg>
  );
}
