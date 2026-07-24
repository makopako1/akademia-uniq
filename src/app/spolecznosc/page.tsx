import type { Metadata } from "next";
import { Pin, MessageSquarePlus, Sparkle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  CheckList,
  Chip,
  StepBadge,
  LeaderBadge,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { StepNav } from "@/components/step-nav";
import { Reveal } from "@/components/reveal";
import { PhoneFrame } from "@/components/frames";

export const metadata: Metadata = {
  title: "Krok 1 — Społeczność (Telegram)",
  description: "Dołącz do grup UNIQ i UNIQ Elite na Telegramie. Serce polskiej społeczności.",
};

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Krok 1 · Społeczność"
        eyebrow="Krok 01"
        accent="violet"
        title={<>Dołącz do <span className="text-chrome">społeczności</span></>}
        subtitle="Zanim ruszysz z narzędziami — wejdź tam, gdzie dzieje się wszystko. Grupy na Telegramie to serce zespołu: ogłoszenia, wsparcie i codzienna energia."
      >
        <LeaderBadge>Linki do grup otrzymasz od swojego Lidera</LeaderBadge>
      </PageHero>

      {/* Two groups */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Dwie grupy"
            accent="violet"
            title="Gdzie dokładnie dołączyć"
            subtitle="Mamy dwie grupy tematyczne. Do jednej trafiają wszyscy, druga jest wyłącznie dla pakietu Elite."
          />
          <Reveal stagger className="mt-10 grid gap-4 md:grid-cols-2">
            <GlassCard className="p-7">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/group-uniq.jpg"
                  alt="Grupa UNIQ"
                  draggable={false}
                  className="h-14 w-14 shrink-0 select-none rounded-2xl object-cover ring-1 ring-white/10"
                />
                <div>
                  <div className="text-lg font-semibold">UNIQ 🇵🇱</div>
                  <div className="font-mono text-[11px] uppercase tracking-wide text-muted">Grupa główna / forum</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Najważniejsze informacje i ogłoszenia zespołu. Tu poznajesz ludzi, zadajesz pytania
                i dostajesz wsparcie na starcie. Obowiązkowa dla każdego.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip accent="violet">ogłoszenia</Chip>
                <Chip accent="cyan">wsparcie</Chip>
                <Chip accent="emerald">społeczność</Chip>
              </div>
            </GlassCard>

            <GlassCard className="p-7">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/group-elite.jpg"
                  alt="Grupa UNIQ Elite"
                  draggable={false}
                  className="h-14 w-14 shrink-0 select-none rounded-2xl object-cover ring-1 ring-white/10"
                />
                <div>
                  <div className="text-lg font-semibold">UNIQ Elite</div>
                  <div className="font-mono text-[11px] uppercase tracking-wide text-muted">Tylko pakiet Elite</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Zamknięta grupa dla osób na pakiecie Elite. Dodatkowy kontekst, treści zaawansowane
                i wszystko wokół sesji Elite. Dostęp powiązany z Twoim pakietem.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip accent="gold">Elite</Chip>
                <Chip accent="magenta">zaawansowane</Chip>
              </div>
            </GlassCard>
          </Reveal>

          <div className="mt-6">
            <Callout variant="lock" title="Jak zdobyć dostęp?">
              Linki-zaproszenia do grup <strong className="text-ink">UNIQ</strong> i{" "}
              <strong className="text-ink">UNIQ Elite</strong> udostępnia prywatnie Twój Lider.
              Jeśli jeszcze ich nie masz — po prostu do niego napisz.
            </Callout>
          </div>
        </Container>
      </Section>

      {/* First tasks + phone mock */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Pierwsze zadania"
                accent="cyan"
                title="Zrób to zaraz po wejściu"
              />
              <div className="mt-8 space-y-5">
                <Task n={1} icon={MessageSquarePlus} title="Napisz wiadomość powitalną">
                  Krótko o sobie: czym się zajmujesz, dlaczego zacząłeś i jakie masz cele. Dzięki temu
                  zespół Cię pozna i przywita.
                </Task>
                <Task n={2} icon={Pin} title="Przeczytaj przypięte wiadomości">
                  W przypiętych znajdziesz najważniejsze linki, zasady i skróty. To Twoja mapa na start.
                </Task>
                <Task n={3} icon={Sparkle} title="Bądź aktywny">
                  Zadawaj pytania, reaguj, wspieraj innych. Otoczenie i regularność to połowa sukcesu.
                </Task>
              </div>

              <div className="mt-8">
                <Callout variant="tip" title="Gotowy szablon powitania">
                  „Cześć! Jestem [imię] z [miasto]. Na co dzień [zajęcie]. Dołączyłem do UNIQ, bo
                  [powód]. Mój cel na najbliższe 90 dni to [cel]. Cieszę się, że tu jestem! 🚀”
                </Callout>
              </div>
            </Reveal>

            <Reveal>
              <PhoneFrame title="UNIQ 🇵🇱">
                <div className="space-y-2.5">
                  <div className="rounded-xl border border-white/8 bg-white/[0.04] p-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-muted">
                      <Pin className="h-3 w-3" /> Przypięte
                    </div>
                    <div className="mt-1.5 text-[13px] leading-snug text-ink">
                      🟢 Pierwsze zadania · Harmonogram tygodnia · Ważne linki
                    </div>
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/[0.06] p-3 text-[13px] leading-snug text-ink">
                    Witamy w UNIQ! 👋 Zacznij od przedstawienia się grupie.
                  </div>
                  <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-violet/20 p-3 text-[13px] leading-snug text-ink">
                    Cześć! Jestem nowy, mój cel na 90 dni to nauczyć się handlować spokojnie 🚀
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/8 bg-black/40 px-3 py-2">
                    <span className="text-[12px] text-faint">Napisz wiadomość…</span>
                    <Send className="ml-auto h-3.5 w-3.5 text-muted" />
                  </div>
                </div>
              </PhoneFrame>
              <p className="mt-4 text-center text-xs text-faint">Podgląd poglądowy — nie pokazuje prawdziwych danych.</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Etiquette */}
      <Section className="pt-0">
        <Container>
          <Reveal>
            <GlassCard strong className="p-7 sm:p-9">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                <StepBadge n="✓" accent="emerald" className="h-12 w-12 text-lg" />
                <div>
                  <h3 className="text-xl font-semibold">Zasady dobrej społeczności</h3>
                  <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    <CheckList
                      accent="emerald"
                      items={[
                        "Bądź aktywny i pomagaj innym",
                        "Zadawaj pytania — nie ma głupich pytań",
                      ]}
                    />
                    <CheckList
                      accent="emerald"
                      items={[
                        "Trzymaj tematykę i szanuj innych",
                        "Bez spamu i linków afiliacyjnych bez zgody",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
          <div className="mt-6">
            <Callout variant="info" title="To nie to samo, co grupy sygnałowe">
              Grupa <strong className="text-ink">UNIQ</strong> to forum społeczności. Osobno działają{" "}
              <strong className="text-ink">kanały sygnałowe</strong> (Forex, Crypto, Stock), które
              podłączasz przez UNIQ Hub — pokażemy to w kroku 4.
            </Callout>
          </div>
        </Container>
      </Section>

      <StepNav current="spolecznosc" />
    </>
  );
}

function Task({
  n,
  icon: Icon,
  title,
  children,
}: {
  n: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="relative flex flex-col items-center">
        <StepBadge n={n} accent="cyan" />
        <span className="mt-2 w-px flex-1 bg-white/10" />
      </div>
      <div className="pb-2">
        <div className="flex items-center gap-2">
          <Icon className={cn("h-4 w-4 text-cyan")} />
          <h4 className="font-semibold text-ink">{title}</h4>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}
