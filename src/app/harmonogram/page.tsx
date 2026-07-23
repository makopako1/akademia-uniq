import type { Metadata } from "next";
import { Clock, Video, Send, CalendarClock, GraduationCap, Sparkles, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCHEDULE_WEEK, SCHEDULE_MONTH } from "@/lib/site";
import { ACCENT_TEXT, ACCENT_CHIP, ACCENT_DOT } from "@/lib/accents";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  Chip,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { GCalButton, DownloadIcsButton } from "@/components/calendar-button";

export const metadata: Metadata = {
  title: "Harmonogram spotkań",
  description: "Polskie sesje na żywo i cykl miesięczny UNIQ. Poniedziałek, środa, sobota + Vision/Produkt/Webinar/Feedback.",
};

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Harmonogram"
        eyebrow="Rytm zespołu"
        accent="orange"
        title={<>Harmonogram <span className="text-chrome">spotkań</span></>}
        subtitle="Stałe punkty tygodnia i miesiąca — wszystkie w polskiej wersji, na żywo tłumaczone. Dodaj je do kalendarza jednym kliknięciem i po prostu się pojawiaj."
      >
        <DownloadIcsButton />
        <span className="text-xs text-faint">
          …albo dodaj pojedynczo przyciskiem „Dodaj do kalendarza" przy każdym wydarzeniu
        </span>
      </PageHero>

      {/* Week */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Co tydzień" accent="orange" title="Harmonogram tygodnia" />
          <Reveal className="mt-10">
            <div className="space-y-3">
              {SCHEDULE_WEEK.map((w) => (
                <GlassCard key={w.day} className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex w-28 shrink-0 items-center gap-2">
                      <span className={cn("h-2.5 w-2.5 rounded-full", ACCENT_DOT[w.accent])} />
                      <span className="font-semibold">{w.day}</span>
                    </div>
                    <div className={cn("flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-sm", ACCENT_CHIP[w.accent])}>
                      <Clock className="h-3.5 w-3.5" />
                      {w.time}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-ink">{w.title}</div>
                      <div className="flex items-center gap-1.5 text-sm text-muted">
                        {w.where === "Zoom" ? <Video className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
                        {w.where}
                      </div>
                    </div>
                    {w.tag && <Chip accent={w.accent}>{w.tag}</Chip>}
                    <GCalButton
                      event={{
                        kind: "weekly",
                        title: w.title,
                        byday: w.byday,
                        time: w.time,
                        durationMin: w.durationMin,
                        where: w.where,
                      }}
                    />
                  </div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Month */}
      <Section className="pt-0">
        <Container>
          <SectionHeading eyebrow="Co miesiąc" accent="gold" title="Harmonogram miesiąca" />
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SCHEDULE_MONTH.map((m) => (
              <GlassCard key={m.day} hover className="flex h-full flex-col p-6">
                <div className="flex items-baseline gap-2">
                  <span className={cn("text-4xl font-semibold", ACCENT_TEXT[m.accent])}>{m.day}</span>
                  <span className="text-sm text-muted">dzień miesiąca</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{m.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{m.desc}</p>
                <GCalButton
                  event={{ kind: "monthly", title: m.title, day: parseInt(m.day, 10), where: "Zoom" }}
                  className="mt-4 self-start"
                />
              </GlassCard>
            ))}
          </Reveal>

          {/* Webinar spotlight */}
          <Reveal className="mt-4">
            <GlassCard strong className="p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald/25 bg-emerald/10 text-emerald">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    15. dzień miesiąca · Webinar
                  </div>
                  <h3 className="text-xl font-semibold">Webinar UNIQ — szkolenie otwarte</h3>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                To szkolenie <strong className="text-ink">otwarte dla osób z zewnątrz</strong> — możesz
                zaprosić na nie gości spoza społeczności, np. znajomych z Instagrama. Świetna okazja, by
                pokazać komuś, o co chodzi w UNIQ.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <div className="text-sm leading-relaxed text-muted">
                    <p className="font-semibold text-ink">Prowadzą multimilionerzy</p>
                    Każde szkolenie prowadzone jest z <strong className="text-ink">Tino Taupe</strong> i{" "}
                    <strong className="text-ink">Felixem Alfenem</strong>.
                  </div>
                </div>
                <div className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <Languages className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <div className="text-sm leading-relaxed text-muted">
                    <p className="font-semibold text-ink">Tłumaczenie na polski</p>
                    Na każdym szkoleniu obecny jest tłumacz na język polski.
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal className="mt-4">
            <Callout variant="info" title="Spotkania miesięczne — wyłącznie na Zoomie">
              Wszystkie szkolenia z harmonogramu miesiąca odbywają się{" "}
              <strong className="text-ink">wyłącznie na Zoomie</strong>. Linki wysyłamy na grupę{" "}
              <strong className="text-ink">UNIQ</strong> oraz kanał{" "}
              <strong className="text-ink">UNIQ – News</strong> na Telegramie.
            </Callout>
          </Reveal>
        </Container>
      </Section>

      {/* Notes */}
      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal>
              <Callout variant="info" title="Strefa czasowa">
                Wszystkie godziny podane są w czasie polskim (Europe/Warsaw). Ustaw sobie przypomnienia,
                żeby nic Cię nie ominęło.
              </Callout>
            </Reveal>
            <Reveal>
              <Callout variant="tip" title="Linki do spotkań">
                Linki do Zooma i sesji na żywo publikujemy na grupach na Telegramie. Dołącz do grupy
                (krok 1) i miej powiadomienia włączone.
              </Callout>
            </Reveal>
          </div>
          <Reveal className="mt-4">
            <GlassCard strong className="flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange/25 bg-orange/10 text-orange">
                  <CalendarClock className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Zrób z tego rutynę</h3>
                  <p className="text-sm text-muted">Regularność na sesjach to najszybsza droga do postępów.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip accent="orange">Pon 20:00</Chip>
                <Chip accent="violet">Śr 20:00</Chip>
                <Chip accent="cyan">Sob 18:00</Chip>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
