import type { Metadata } from "next";
import { GitBranch, Layers, Rocket, CalendarCheck, Trophy, Scale, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { PACKAGES, SITE } from "@/lib/site";
import { ACCENT_TEXT, ACCENT_CHIP } from "@/lib/accents";
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
import { Gate } from "@/components/gate";

export const metadata: Metadata = {
  title: "Model biznesowy",
  description: "Podstawy planu wynagrodzeń UNIQ (RANKPATH) — sekcja chroniona hasłem.",
  robots: { index: false, follow: false },
};

const CONCEPTS = [
  { icon: GitBranch, accent: "violet" as const, title: "Dwie nogi", desc: "Budujesz zespół w dwóch strukturach — lewej i prawej nodze. Wystarczą dwie, aby ruszyć." },
  { icon: Layers, accent: "cyan" as const, title: "BV — Binary Volume", desc: "Wolumen generowany przez zespół w obu nogach. To on napędza tygodniowy dochód rezydualny." },
  { icon: Rocket, accent: "orange" as const, title: "Fast Start", desc: "Szybki bonus startowy powiązany z pakietem — nagroda za dobry początek." },
  { icon: CalendarCheck, accent: "emerald" as const, title: "Wypłaty tygodniowe", desc: "Dochód rezydualny z obu nóg rozliczany jest w cyklu tygodniowym." },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="Model biznesowy"
        eyebrow="RANKPATH · chronione"
        accent="violet"
        title={<>Model <span className="text-chrome">biznesowy</span></>}
        subtitle="Podstawy planu wynagrodzeń UNIQ. Ta sekcja jest chroniona hasłem — podaj je, aby zobaczyć szczegóły."
      />

      <Section className="pt-6">
        <Container>
          <Gate
            variant="inline"
            persist={false}
            password={SITE.networkPassword}
            storageKey="uniq_network"
            title="Sekcja biznesowa"
            desc="Ta sekcja jest chroniona hasłem i wymaga go przy każdym wejściu. Otrzymasz je od Lidera."
          >
            <div className="space-y-10">
              {/* Concepts */}
              <div>
                <SectionHeading
                  eyebrow="Jak to działa"
                  accent="violet"
                  title="Plan binarny w pigułce"
                  subtitle="UNIQ korzysta z binarnego planu wynagrodzeń (RANKPATH). Oto podstawowe pojęcia — to celowo uproszczony przegląd."
                />
                <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {CONCEPTS.map((c) => (
                    <GlassCard key={c.title} className="p-6">
                      <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl border", ACCENT_CHIP[c.accent])}>
                        <c.icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-semibold">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                    </GlassCard>
                  ))}
                </Reveal>
              </div>

              {/* Ranks highlight */}
              <Reveal>
                <GlassCard strong className="relative overflow-hidden p-8 sm:p-10">
                  <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
                    <span className="flex h-16 w-16 items-center justify-center rounded-3xl border border-gold/25 bg-gold/10 text-gold">
                      <Trophy className="h-8 w-8" />
                    </span>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-faint">System rang · RANKPATH</div>
                      <h3 className="mt-1 text-2xl font-semibold">
                        Dochód rezydualny z obu nóg — <span className="text-gold">do $250 000 / tydzień</span> na najwyższej randze
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        Wraz z rozwojem zespołu i wolumenu (BV) awansujesz w rangach, a potencjał
                        tygodniowego dochodu rośnie. Najwyższe rangi to poziom szczytowy planu.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>

              {/* CV / Fast Start table */}
              <div>
                <SectionHeading eyebrow="Wartość pakietów" accent="cyan" title="CV i Fast Start" />
                <Reveal className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[420px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.03] text-muted">
                          <th className="px-5 py-3 font-medium">Pakiet</th>
                          <th className="px-5 py-3 font-medium">CV</th>
                          <th className="px-5 py-3 font-medium">Fast Start</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PACKAGES.map((p) => (
                          <tr key={p.key} className="border-b border-white/6 last:border-0">
                            <td className={cn("px-5 py-3 font-semibold", ACCENT_TEXT[p.accent])}>{p.name}</td>
                            <td className="px-5 py-3 font-mono text-ink">{p.cv}</td>
                            <td className="px-5 py-3 font-mono text-ink">{p.fastStart}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Reveal>
                <p className="mt-3 text-xs text-faint">
                  CV (Commissionable Volume) to wartość pakietu liczona do wolumenu binarnego. Fast Start to bonus startowy.
                </p>
              </div>

              {/* Resources + disclaimer */}
              <div className="grid gap-4 md:grid-cols-2">
                <Reveal>
                  <GlassCard className="flex h-full flex-col p-7">
                    <Scale className="h-5 w-5 text-emerald" />
                    <h3 className="mt-3 font-semibold">Chcesz zrozumieć więcej?</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      W Akademii znajdziesz lekcję „Czy Network Marketing jest dla Ciebie?”. Po pełny,
                      oficjalny plan wynagrodzeń i rangi zgłoś się do swojego Lidera.
                    </p>
                    <div className="mt-4">
                      <ExternalButton href={SITE.links.vimeo} variant="secondary">
                        <PlayCircle className="h-4 w-4" />
                        Zobacz lekcję
                      </ExternalButton>
                    </div>
                  </GlassCard>
                </Reveal>
                <Reveal>
                  <Callout variant="warning" title="To nie obietnica dochodu" className="h-full">
                    Przedstawione kwoty to potencjał planu, a nie gwarancja. Wyniki zależą od Twojej
                    pracy, zaangażowania i wielu czynników. Większość osób nie osiąga najwyższych rang.
                    To działalność, nie „szybki zysk”.
                  </Callout>
                </Reveal>
              </div>
            </div>
          </Gate>
        </Container>
      </Section>
    </>
  );
}
