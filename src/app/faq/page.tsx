import type { Metadata } from "next";
import { LifeBuoy, UserRound, MessagesSquare, ArrowUpRight } from "lucide-react";
import { FAQ, SITE } from "@/lib/site";
import {
  Container,
  Section,
  SectionHeading,
  GlassCard,
  Callout,
  ExternalButton,
  InternalButton,
} from "@/components/kit";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ i wsparcie",
  description: "Najczęstsze pytania początkujących i skąd otrzymać pomoc w polskiej społeczności UNIQ.",
};

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="FAQ i wsparcie"
        eyebrow="Pomoc"
        accent="emerald"
        title={<>Masz pytanie? <span className="text-chrome">Zaczynamy tutaj</span></>}
        subtitle="Najczęstsze pytania na starcie i jasna ścieżka, gdy potrzebujesz pomocy. Pierwszy adres zawsze ten sam — Twój Lider."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* FAQ */}
            <Reveal>
              <SectionHeading eyebrow="Pytania" accent="emerald" title="Najczęstsze pytania" />
              <Accordion type="single" collapsible className="mt-8 flex flex-col gap-3">
                {FAQ.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

            {/* Support rail */}
            <Reveal className="space-y-4">
              <GlassCard strong className="p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet/25 bg-violet/10 text-violet">
                  <UserRound className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">Twój Lider</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Każdy ma swojego Lidera — to Twój pierwszy kontakt. Od niego dostajesz linki do grup,
                  do Solantis i pomoc, gdy coś jest niejasne.
                </p>
              </GlassCard>

              <GlassCard className="p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald/25 bg-emerald/10 text-emerald">
                  <LifeBuoy className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">Wsparcie na platformie</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  W zakładce <strong className="text-ink">Wsparcie</strong> znajdziesz kontakt ze
                  sponsorem, FAQ oraz formularz zgłoszenia wsparcia.
                </p>
                <div className="mt-4">
                  <ExternalButton href={SITE.links.platformApp} variant="secondary" size="sm">
                    Otwórz Wsparcie
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </ExternalButton>
                </div>
              </GlassCard>

              <GlassCard className="p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
                  <MessagesSquare className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">Społeczność</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Na grupie UNIQ zawsze ktoś pomoże. Nie bój się pytać — wszyscy kiedyś zaczynali.
                </p>
                <div className="mt-4">
                  <InternalButton href="/spolecznosc" variant="secondary" size="sm">
                    Grupy na Telegramie
                  </InternalButton>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <Callout variant="info" title="Nie znalazłeś odpowiedzi?">
              Wróć do <strong className="text-ink">checklisty na stronie startowej</strong> albo napisz
              do Lidera. Krok po kroku dojdziesz do celu — nie musisz wiedzieć wszystkiego naraz.
            </Callout>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
