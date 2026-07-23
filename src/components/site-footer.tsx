import Link from "next/link";
import { ArrowUpRight, AtSign } from "lucide-react";
import { LogoWordmark } from "@/components/logo";
import { Container } from "@/components/kit";
import { SITE, STEPS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 bg-base-2/60">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <LogoWordmark className="h-6 text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Przewodnik startowy dla polskiej społeczności UNIQ. Wszystkie narzędzia,
              instrukcje i harmonogram w jednym miejscu.
            </p>
            <a
              href={SITE.links.damianInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 px-3.5 py-2 text-sm text-muted transition hover:text-ink"
            >
              <AtSign className="h-4 w-4" />
              damix.trades · Instagram
            </a>
          </div>

          <FooterCol title="Pierwsze kroki" links={STEPS.map((s) => ({ label: s.short, href: s.href }))} />
          <FooterCol
            title="Zasoby"
            links={[
              { label: "Narzędzia", href: "/narzedzia" },
              { label: "Podstawy tradingu", href: "/trading" },
              { label: "Harmonogram", href: "/harmonogram" },
              { label: "Akademia", href: "/akademia" },
              { label: "Pakiety", href: "/pakiety" },
              { label: "FAQ", href: "/faq" },
            ]}
          />
          <div>
            <p className="eyebrow mb-4">Szybkie linki</p>
            <div className="flex flex-col gap-2.5">
              <ExtFoot href={SITE.links.platformApp}>Platforma UNIQ</ExtFoot>
              <ExtFoot href={SITE.links.mt5}>MetaTrader 5</ExtFoot>
              <ExtFoot href={SITE.links.tradingview}>TradingView</ExtFoot>
              <ExtFoot href={SITE.links.vimeo}>Akademia (Vimeo)</ExtFoot>
            </div>
          </div>
        </div>

        <div className="rule my-10" />

        <div className="space-y-4 text-xs leading-relaxed text-faint">
          <p>
            <span className="font-semibold text-muted">Zastrzeżenie prawne. </span>
            UNIQ to platforma edukacyjna. Materiały mają charakter wyłącznie informacyjny i edukacyjny
            i nie stanowią porady finansowej, inwestycyjnej ani rekomendacji. Trading i inwestowanie
            wiążą się z ryzykiem utraty kapitału — wyniki z przeszłości nie gwarantują wyników w przyszłości.
            Podejmujesz decyzje na własną odpowiedzialność.
          </p>
          <p>
            Ta strona jest <span className="text-muted">nieoficjalnym zasobem polskiej społeczności UNIQ</span>,
            stworzonym, aby ułatwić start nowym osobom. Nie jest oficjalnym serwisem firmy.
            Znaki i nazwy produktów należą do ich właścicieli. © 2026 UNIQ Platform LLC (odniesienie).
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <div className="flex flex-col gap-2.5">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-sm text-muted transition hover:text-ink">
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ExtFoot({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-ink"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
    </a>
  );
}
