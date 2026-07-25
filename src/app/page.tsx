import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Sparkles,
  CalendarDays,
  Compass,
  Ticket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE, STEPS, PRODUCTS, SCHEDULE_WEEK, EVENT } from "@/lib/site";
import { ACCENT_TEXT, ACCENT_DOT } from "@/lib/accents";
import { ProductIcon } from "@/components/product-icon";
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  GlassCard,
  Chip,
  Glow,
  ExternalButton,
  InternalButton,
  LeaderBadge,
} from "@/components/kit";
import { Button } from "@/components/ui/button";
import { Reveal, HeroReveal } from "@/components/reveal";
import { Checklist } from "@/components/checklist";
import { LogoMark } from "@/components/logo";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <Glow accent="violet" className="-top-20 left-1/2 h-96 w-[42rem] -translate-x-1/2" opacity={0.16} />
        <Container className="relative pt-20 pb-16 sm:pt-28 sm:pb-24">
          <HeroReveal className="mx-auto max-w-4xl text-center">
            <div data-hero className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2">
              <LogoMark className="h-5" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Polska społeczność UNIQ
              </span>
            </div>

            <h1 data-hero className="text-balance text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
              <span className="text-chrome">Akademia Startowa</span>
              <br />
              <span className="text-ink">UNIQ</span>
            </h1>

            <p data-hero className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Twój przewodnik krok po kroku. Platforma, narzędzia, broker, grupy sygnałowe,
              TradingView i harmonogram — wszystko poukładane tak, żeby żółtodziób ruszył z miejsca
              w jeden wieczór.
            </p>

            <div data-hero className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/spolecznosc">
                  Zacznij od kroku 1
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <ExternalButton href={SITE.links.vimeo} variant="secondary" size="lg">
                <Play className="h-4 w-4" />
                Akademia na Vimeo
              </ExternalButton>
            </div>

            <p data-hero className="mt-5 font-mono text-xs text-faint">
              Hasło do Akademii na Vimeo: <span className="text-muted">UNIQ2026</span>
            </p>
          </HeroReveal>

          {/* Stat strip */}
          <Reveal stagger className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "6", v: "kroków startu" },
              { k: "6", v: "narzędzi UNIQ" },
              { k: "9", v: "kanałów sygnałów" },
              { k: "16+", v: "rozdziałów akademii" },
            ].map((s) => (
              <div key={s.v} className="glass edge-highlight rounded-2xl px-4 py-5 text-center">
                <div className="text-chrome text-3xl font-semibold">{s.k}</div>
                <div className="mt-1 text-xs text-muted">{s.v}</div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ================= NEWS / EVENT ================= */}
      <Section className="py-8 sm:py-12">
        <Container>
          <Reveal>
            <GlassCard strong className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[2/1] md:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={EVENT.image}
                    alt="UNIQ Unfold — Poland, Łódź"
                    draggable={false}
                    className="absolute inset-0 h-full w-full select-none object-cover object-left"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-panel-2/50" />
                </div>

                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta/70" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-magenta" />
                    </span>
                    <span className="eyebrow">Aktualności · {EVENT.badge}</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                    {EVENT.title} — <span className="text-chrome">{EVENT.city}</span>
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Chip accent="violet">{EVENT.date}</Chip>
                    <Chip accent="cyan">{EVENT.time}</Chip>
                    <Chip accent="gold">{EVENT.venue}, {EVENT.city}</Chip>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{EVENT.desc}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                    <ExternalButton href={EVENT.ticketUrl} size="lg">
                      <Ticket className="h-4 w-4" />
                      Kup bilet
                    </ExternalButton>
                    <span className="text-sm text-muted">Bilety {EVENT.price}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* ================= STEPS ================= */}
      <Section id="kroki">
        <Container>
          <SectionHeading
            eyebrow="Ścieżka startowa"
            accent="violet"
            title={<>Sześć kroków od <span className="text-chrome">zera do gotowości</span></>}
            subtitle="Przejdź je po kolei. Każdy krok to osobna, prosta instrukcja z przyciskami do właściwych miejsc."
          />
          <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <Link key={s.slug} href={s.href} className="group">
                <GlassCard hover className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className={cn("font-mono text-xs uppercase tracking-wider", ACCENT_TEXT[s.accent])}>
                      {s.eyebrow}
                    </span>
                    <span className={cn("h-2 w-2 rounded-full", ACCENT_DOT[s.accent])} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    Otwórz
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* ================= CHECKLIST ================= */}
      <Section className="py-8 sm:py-16">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
            <Reveal className="lg:sticky lg:top-24">
              <Eyebrow accent="emerald">Plan działania</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Pierwsze 48 godzin, <span className="text-chrome">bez chaosu</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Nie musisz ogarniać wszystkiego naraz. Odhaczaj kolejne punkty — checklista zapamięta
                Twój postęp w tej przeglądarce. To dokładnie ta sama kolejność, którą przechodzimy w zespole.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <InternalButton href="/spolecznosc" variant="primary">
                  Start: Społeczność
                  <ArrowRight className="h-4 w-4" />
                </InternalButton>
                <InternalButton href="/faq" variant="outline">
                  Mam pytanie
                </InternalButton>
              </div>
              <div className="mt-6">
                <LeaderBadge>Linki do grup i Solantis — od Twojego Lidera</LeaderBadge>
              </div>
            </Reveal>
            <Reveal>
              <Checklist />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ================= PRODUCTS ================= */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Ekosystem"
            accent="cyan"
            title={<>Sześć narzędzi, <span className="text-chrome">jeden ekosystem</span></>}
            subtitle="UNIQ to nie jeden produkt, tylko połączony system. Poznaj każdy z nich w zakładce Narzędzia."
          />
          <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <GlassCard key={p.key} hover className="p-6">
                <div className="flex items-center gap-3">
                  <ProductIcon pkey={p.key} className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className={cn("font-mono text-[11px] uppercase tracking-wide", ACCENT_TEXT[p.accent])}>
                      {p.tagline}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.desc}</p>
              </GlassCard>
            ))}
          </Reveal>
          <div className="mt-10 flex justify-center">
            <InternalButton href="/narzedzia" variant="secondary" size="lg">
              Zobacz wszystkie narzędzia
              <ArrowRight className="h-4 w-4" />
            </InternalButton>
          </div>
        </Container>
      </Section>

      {/* ================= EDUKATOR ================= */}
      <Section>
        <Container>
          <Reveal>
            <GlassCard strong className="relative overflow-hidden p-8 sm:p-12">
              <Glow accent="magenta" className="-right-10 -top-10 h-64 w-64" opacity={0.16} />
              <div className="relative grid items-center gap-8 md:grid-cols-[1fr_1.3fr]">
                <div className="relative mx-auto w-full max-w-sm md:mx-0">
                  <div className="conic-border relative overflow-hidden rounded-3xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/damian.jpg"
                      alt="Damian Pacan — nowy polski edukator UNIQ"
                      draggable={false}
                      className="block w-full select-none"
                    />
                  </div>
                </div>
                <div>
                  <Eyebrow accent="magenta">Twój edukator</Eyebrow>
                  <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Damian Pacan</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    Trader i mentor polskiej społeczności UNIQ. Prowadzi sesje na żywo i szkolenia.
                    „Zamieniłem lata strat w strategię, która działa. Uczę, jak handlować skutecznie —
                    nie emocjonalnie.”
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <ExternalButton href={SITE.links.damianInstagram} variant="secondary">
                      <Sparkles className="h-4 w-4" />
                      @damix.trades
                    </ExternalButton>
                    <InternalButton href="/harmonogram" variant="ghost">
                      <CalendarDays className="h-4 w-4" />
                      Kiedy prowadzi sesje?
                    </InternalButton>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* ================= SCHEDULE TEASER ================= */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Rytm tygodnia"
            accent="orange"
            title={<>Spotkania na żywo, <span className="text-chrome">po polsku</span></>}
            subtitle="Regularność robi różnicę. Zapisz stałe punkty tygodnia w kalendarzu."
          />
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-3">
            {SCHEDULE_WEEK.map((w) => (
              <GlassCard key={w.day} className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-muted">{w.day}</span>
                  <Chip accent={w.accent}>{w.time}</Chip>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{w.title}</h3>
                <p className="mt-2 text-sm text-muted">{w.where}</p>
              </GlassCard>
            ))}
          </Reveal>
          <div className="mt-10 flex justify-center">
            <InternalButton href="/harmonogram" variant="secondary">
              Pełny harmonogram
              <ArrowRight className="h-4 w-4" />
            </InternalButton>
          </div>
        </Container>
      </Section>

      {/* ================= QUICK LINKS ================= */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Skróty"
            accent="teal"
            title="Wszystko, czego potrzebujesz — jednym kliknięciem"
          />
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <QuickLink href={SITE.links.platformApp} title="Platforma UNIQ" desc="Twój panel: my.uniqglobal.net" external />
            <QuickLink href={SITE.links.mt5} title="MetaTrader 5" desc="Pobierz aplikację brokera" external />
            <QuickLink href={SITE.links.tradingview} title="TradingView" desc="Załóż darmowe konto" external />
            <QuickLink href={SITE.links.vimeo} title="Akademia UNIQ (Vimeo)" desc="Hasło: UNIQ2026" external />
            <QuickLink href="/broker" title="Solantis" desc="Link otrzymasz od Lidera" leader />
            <QuickLink href="/spolecznosc" title="Telegram: UNIQ / Elite" desc="Dostęp przez Lidera" leader />
          </Reveal>
        </Container>
      </Section>

      {/* ================= CTA BAND ================= */}
      <Section className="pb-28">
        <Container>
          <Reveal>
            <div className="glass-strong edge-highlight relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-12">
              <Glow accent="violet" className="left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2" opacity={0.16} />
              <div className="relative">
                <Compass className="mx-auto h-8 w-8 text-muted" />
                <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
                  Gotowy? Zacznij od dołączenia do <span className="text-chrome">społeczności</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted">
                  Reszta poukłada się szybciej, niż myślisz. Przejdź kroki po kolei — jesteśmy obok.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button asChild size="lg">
                    <Link href="/spolecznosc">
                      Krok 1: Społeczność
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <InternalButton href="/faq" variant="outline" size="lg">
                    FAQ i wsparcie
                  </InternalButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function QuickLink({
  href,
  title,
  desc,
  external,
  leader,
}: {
  href: string;
  title: string;
  desc: string;
  external?: boolean;
  leader?: boolean;
}) {
  const inner = (
    <GlassCard hover className="flex h-full items-center justify-between gap-4 p-5">
      <div>
        <div className="flex items-center gap-2 font-semibold">
          {title}
          {leader && <span className="h-1.5 w-1.5 rounded-full bg-violet" />}
        </div>
        <div className="mt-1 text-sm text-muted">{desc}</div>
      </div>
      {external ? (
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted" />
      ) : (
        <ArrowRight className="h-5 w-5 shrink-0 text-muted" />
      )}
    </GlassCard>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href}>{inner}</Link>
  );
}
