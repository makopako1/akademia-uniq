"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Lock, ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoWordmark } from "@/components/logo";
import { STEPS, SITE } from "@/lib/site";

type Item = { label: string; href: string; locked?: boolean; desc?: string; external?: boolean };

const STEP_ITEMS: Item[] = STEPS.map((s) => ({
  label: `${s.n}. ${s.short}`,
  href: s.href,
  desc: s.desc,
}));

const MORE_ITEMS: Item[] = [
  { label: "Narzędzia UNIQ", href: "/narzedzia", desc: "Learn, Live, Hub, Scan, Intelligence, Connect." },
  { label: "Podstawy tradingu", href: "/trading", desc: "Mindset, psychologia i ryzyko." },
  { label: "Pakiety", href: "/pakiety", desc: "Poziomy członkostwa." },
  { label: "Model biznesowy", href: "/network", locked: true, desc: "Plan wynagrodzeń." },
  { label: "Platforma UNIQ", href: SITE.links.platformApp, external: true, desc: "Twój panel — wchodzisz później." },
  { label: "FAQ i wsparcie", href: "/faq", desc: "Najczęstsze pytania." },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-void/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav ref={navRef} className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Akademia Startowa UNIQ">
          <LogoWordmark className="h-6 text-white" />
          <span className="hidden font-mono text-[9px] uppercase leading-[1.1] tracking-[0.18em] text-muted sm:block">
            Akademia
            <br />
            Startowa
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavLink href="/" active={isActive("/")}>Start</NavLink>
          <Dropdown
            label="Kroki"
            items={STEP_ITEMS}
            open={menu === "kroki"}
            onOpen={() => setMenu(menu === "kroki" ? null : "kroki")}
            onHover={() => setMenu("kroki")}
            pathname={pathname}
          />
          <NavLink href="/harmonogram" active={isActive("/harmonogram")}>Harmonogram</NavLink>
          <Dropdown
            label="Baza wiedzy"
            items={MORE_ITEMS}
            open={menu === "wiecej"}
            onOpen={() => setMenu(menu === "wiecej" ? null : "wiecej")}
            onHover={() => setMenu("wiecej")}
            pathname={pathname}
          />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/akademia"
            className="hidden h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[13px] font-semibold text-black transition hover:bg-white/90 sm:inline-flex"
          >
            <Play className="h-3.5 w-3.5" fill="currentColor" />
            Akademia
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-ink lg:hidden"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top overflow-y-auto border-b border-white/10 bg-void/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-[calc(100dvh-4rem)] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="space-y-6 px-5 py-6">
          <MobileLink href="/" active={isActive("/")}>Start</MobileLink>
          <MobileGroup label="Pierwsze kroki" items={STEP_ITEMS} pathname={pathname} />
          <MobileGroup
            label="Zasoby"
            items={[
              { label: "Narzędzia UNIQ", href: "/narzedzia" },
              { label: "Podstawy tradingu", href: "/trading" },
              { label: "Harmonogram", href: "/harmonogram" },
              { label: "Akademia (Vimeo)", href: "/akademia" },
            ]}
            pathname={pathname}
          />
          <MobileGroup
            label="Członkostwo"
            items={[
              { label: "Pakiety", href: "/pakiety" },
              { label: "Model biznesowy", href: "/network", locked: true },
              { label: "Platforma UNIQ", href: SITE.links.platformApp, external: true },
              { label: "FAQ i wsparcie", href: "/faq" },
            ]}
            pathname={pathname}
          />
          <Link
            href="/akademia"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-black"
          >
            <Play className="h-4 w-4" fill="currentColor" />
            Obejrzyj Akademię (Vimeo)
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
        active ? "text-white" : "text-muted hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  items,
  open,
  onOpen,
  onHover,
  pathname,
}: {
  label: string;
  items: Item[];
  open: boolean;
  onOpen: () => void;
  onHover: () => void;
  pathname: string;
}) {
  return (
    <div className="relative" onMouseEnter={onHover}>
      <button
        onClick={onOpen}
        className={cn(
          "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
          open ? "text-white" : "text-muted hover:text-ink",
        )}
      >
        {label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-200",
          open ? "visible opacity-100" : "invisible translate-y-1 opacity-0",
        )}
      >
        <div className="glass-strong edge-highlight overflow-hidden rounded-2xl p-2">
          {items.map((it) => {
            const active = !it.external && pathname.startsWith(it.href) && it.href !== "/";
            const cls = cn(
              "flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors",
              active ? "bg-white/[0.06]" : "hover:bg-white/[0.05]",
            );
            const inner = (
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-sm font-medium text-ink">
                  {it.label}
                  {it.locked && <Lock className="h-3 w-3 text-violet" />}
                  {it.external && <ArrowUpRight className="h-3 w-3 text-faint" />}
                </div>
                {it.desc && <p className="truncate text-xs text-faint">{it.desc}</p>}
              </div>
            );
            return it.external ? (
              <a key={it.href} href={it.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={it.href} href={it.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  active,
  locked,
  external,
  children,
}: {
  href: string;
  active?: boolean;
  locked?: boolean;
  external?: boolean;
  children: React.ReactNode;
}) {
  const cls = cn(
    "flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors",
    active ? "bg-white/[0.06] text-white" : "text-muted hover:text-ink",
  );
  const inner = (
    <>
      <span className="flex items-center gap-2">
        {children}
        {locked && <Lock className="h-3.5 w-3.5 text-violet" />}
      </span>
      {external && <ArrowUpRight className="h-4 w-4 opacity-60" />}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

function MobileGroup({
  label,
  items,
  pathname,
}: {
  label: string;
  items: Item[];
  pathname: string;
}) {
  return (
    <div>
      <p className="eyebrow mb-2 px-3">{label}</p>
      <div className="space-y-0.5">
        {items.map((it) => (
          <MobileLink
            key={it.href}
            href={it.href}
            locked={it.locked}
            external={it.external}
            active={!it.external && it.href !== "/" && pathname.startsWith(it.href)}
          >
            {it.label}
          </MobileLink>
        ))}
      </div>
    </div>
  );
}
