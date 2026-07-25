/* ============================================================
   Central content + configuration for Akademia Startowa UNIQ
   ============================================================ */

export type Accent =
  | "gold"
  | "orange"
  | "magenta"
  | "cyan"
  | "emerald"
  | "teal"
  | "violet";

export const SITE = {
  name: "Akademia Startowa UNIQ",
  short: "Akademia UNIQ",
  gatePassword: "UNIQ2026",
  networkPassword: "UNIQNETWORK",
  academyPassword: "UNIQ2026",
  links: {
    platform: "https://uniqglobal.net",
    platformApp: "https://my.uniqglobal.net",
    mt5: "https://www.metatrader5.com/en/download",
    vimeo: "https://bit.ly/akademiauniq",
    tradingview: "https://www.tradingview.com",
    damianInstagram: "https://www.instagram.com/damix.trades/",
    // Prywatne — udostępnia wyłącznie Lider:
    solantis: null as string | null,
    telegramMain: null as string | null,
    telegramElite: null as string | null,
  },
} as const;

/* ---------- Guided onboarding steps (kolejność „Pierwsze kroki") ---------- */

export type Step = {
  slug: string;
  href: string;
  n: number;
  eyebrow: string;
  title: string;
  short: string;
  desc: string;
  accent: Accent;
};

export const STEPS: Step[] = [
  {
    slug: "spolecznosc",
    href: "/spolecznosc",
    n: 1,
    eyebrow: "Krok 01",
    title: "Dołącz do społeczności",
    short: "Społeczność",
    desc: "Grupy na Telegramie: UNIQ i UNIQ Elite. Serce zespołu, ogłoszenia i wsparcie.",
    accent: "violet",
  },
  {
    slug: "platforma",
    href: "/platforma",
    n: 2,
    eyebrow: "Krok 02",
    title: "Poznaj platformę",
    short: "Platforma",
    desc: "Pełny spacer po my.uniqglobal.net — panel, członkostwo, produkty, wsparcie.",
    accent: "cyan",
  },
  {
    slug: "broker",
    href: "/broker",
    n: 3,
    eyebrow: "Krok 03",
    title: "Broker: MetaTrader 5 + Solantis",
    short: "Broker",
    desc: "Pobierz MetaTrader 5 i załóż konto na Solantis (link dostaniesz od Lidera).",
    accent: "gold",
  },
  {
    slug: "sygnaly",
    href: "/sygnaly",
    n: 4,
    eyebrow: "Krok 04",
    title: "Podłącz grupy sygnałowe",
    short: "Sygnały",
    desc: "Połącz Telegram przez UNIQ Hub i odblokuj kanały sygnałowe Forex, Crypto i Stock.",
    accent: "magenta",
  },
  {
    slug: "tradingview",
    href: "/tradingview",
    n: 5,
    eyebrow: "Krok 05",
    title: "TradingView + wskaźniki UNIQ",
    short: "TradingView",
    desc: "Załóż konto TradingView i przypisz wskaźniki IMPULS, HUNTER i PILOT AI.",
    accent: "cyan",
  },
  {
    slug: "automatyzacja",
    href: "/automatyzacja",
    n: 6,
    eyebrow: "Krok 06 · Elite",
    title: "Automatyzacja (AtlasAI)",
    short: "Automatyzacja",
    desc: "Zautomatyzowany system tradingowy dla pakietu Elite — prosto i przejrzyście.",
    accent: "emerald",
  },
];

/* ---------- Produkty UNIQ ---------- */

export type Product = {
  key: string;
  name: string;
  accent: Accent;
  tagline: string;
  desc: string;
  points: string[];
};

export const PRODUCTS: Product[] = [
  {
    key: "learn",
    name: "UNIQ Learn",
    accent: "gold",
    tagline: "Wiedza od zera",
    desc: "Ustrukturyzowane kursy wideo: First Steps, Basic, Crypto i Forex. Dla tych, którzy chcą zrozumieć rynki, a nie tylko po nich klikać.",
    points: [
      "Ścieżki: First Steps · Basic · Crypto · Forex",
      "Krótkie lekcje wideo z paskiem postępu",
      "Idealny punkt startu dla żółtodzioba",
    ],
  },
  {
    key: "live",
    name: "UNIQ Live",
    accent: "orange",
    tagline: "Edukacja na żywo",
    desc: "Sesje tradingowe na żywo i biblioteka nagrań. Nasze polskie sesje są tłumaczone na żywo — trening w realnym środowisku rynkowym.",
    points: [
      "Sesje na żywo + nagrania do odtworzenia",
      "Przypomnienia i dodawanie do kalendarza",
      "Dwa widoki: «Pokazuje» oraz «Kalendarz»",
    ],
  },
  {
    key: "hub",
    name: "UNIQ Hub",
    accent: "magenta",
    tagline: "Grupy sygnałowe",
    desc: "Centrum sygnałów. Podpinasz swoje konto Telegram i bot UNIQ Hub automatycznie nadaje dostęp do kanałów Forex, Crypto, Stock i Insights.",
    points: [
      "Automatyczne łączenie konta przez bota",
      "Kanały pogrupowane: Forex · Crypto · Stock · Insights",
      "Status weryfikacji i lista aktywnych kanałów",
    ],
  },
  {
    key: "scan",
    name: "UNIQ Scan",
    accent: "cyan",
    tagline: "Wskaźniki TradingView",
    desc: "Profesjonalny widok na wykresy. Autorskie wskaźniki na TradingView: UNIQ IMPULS, UNIQ HUNTER i UNIQ PILOT AI — sygnały, poziomy i kierunek trendu.",
    points: [
      "IMPULS · HUNTER · PILOT AI",
      "Weryfikacja przez nazwę użytkownika TradingView",
      "Nie wymaga płatnego planu TradingView",
    ],
  },
  {
    key: "intelligence",
    name: "UNIQ Intelligence",
    accent: "emerald",
    tagline: "System wsparcia AI",
    desc: "Nowa generacja: Skaner analizy wykresów, Vault (dziennik tradera), Asystent AI oraz Market Intelligence. Research, kontekst i jasny kolejny krok.",
    points: [
      "Skaner: wgraj 3 wykresy → analiza Signal-Pro",
      "Vault: prywatny dziennik setupów i lekcji",
      "Asystent + Deep Search (krypto i akcje)",
    ],
  },
  {
    key: "connect",
    name: "UNIQ Connect",
    accent: "teal",
    tagline: "Integracje",
    desc: "Zawsze masz kontrolę. Systemy zewnętrzne połączone bezproblemowo, aby cały ekosystem działał razem.",
    points: [
      "Łączenie systemów zewnętrznych",
      "Pełna kontrola nad danymi",
      "Dostępne w wyższych pakietach",
    ],
  },
];

/* ---------- Grupy sygnałowe (bot UNIQ Hub) ---------- */

export type SignalCategory = {
  key: string;
  label: string;
  accent: Accent;
  channels: { name: string; note?: string }[];
  desc: string;
};

export const SIGNAL_CATEGORIES: SignalCategory[] = [
  {
    key: "forex",
    label: "Forex",
    accent: "gold",
    desc: "Pary walutowe — nasz główny rynek automatyzacji i sesji na żywo.",
    channels: [
      { name: "UNIQ – BEYOND" },
      { name: "UNIQ – Delta", note: "BETA" },
      { name: "UNIQ – Gold Rush" },
      { name: "UNIQ – Grow" },
      { name: "UNIQ – Prime" },
    ],
  },
  {
    key: "crypto",
    label: "Crypto",
    accent: "cyan",
    desc: "Kryptowaluty — sygnały i portfele.",
    channels: [
      { name: "UNIQ – Cryptoflow" },
      { name: "UNIQ – Crypto Portfolio Elite", note: "Elite" },
    ],
  },
  {
    key: "stock",
    label: "Stock",
    accent: "emerald",
    desc: "Akcje i portfele długoterminowe.",
    channels: [{ name: "UNIQ – Stock Portfolio Elite", note: "Elite" }],
  },
  {
    key: "insights",
    label: "Insights",
    accent: "magenta",
    desc: "Najważniejsze newsy i kontekst rynkowy.",
    channels: [{ name: "UNIQ – News", note: "ważne" }],
  },
];

export const HUB_BOT_MENU = [
  "Forex",
  "Crypto",
  "Stock",
  "Insights",
  "Status",
  "Help",
  "Language",
];

/* ---------- Harmonogram (tylko polskie sesje) ---------- */

export type WeekItem = {
  day: string;
  time: string;
  title: string;
  where: string;
  accent: Accent;
  tag?: string;
  byday: "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU";
  durationMin: number;
};

export const SCHEDULE_WEEK: WeekItem[] = [
  {
    day: "Poniedziałek",
    time: "20:00",
    title: "Sesja Tradingowa — Podstawy",
    where: "UNIQ Live",
    accent: "orange",
    tag: "dla każdego",
    byday: "MO",
    durationMin: 60,
  },
  {
    day: "Środa",
    time: "20:00",
    title: "Sesja Tradingowa — Elite (zaawansowane)",
    where: "UNIQ Live",
    accent: "violet",
    tag: "Elite",
    byday: "WE",
    durationMin: 60,
  },
  {
    day: "Sobota",
    time: "18:00",
    title: "TeamCall",
    where: "Zoom",
    accent: "cyan",
    tag: "zespół",
    byday: "SA",
    durationMin: 90,
  },
];

export type MonthItem = { day: string; title: string; desc: string; accent: Accent };

export const SCHEDULE_MONTH: MonthItem[] = [
  { day: "1", title: "Vision Call", desc: "Kierunek, cele i wizja na nadchodzący miesiąc.", accent: "gold" },
  { day: "8", title: "Produkt Call", desc: "Nowości produktowe i aktualizacje ekosystemu.", accent: "cyan" },
  { day: "15", title: "Webinar UNIQ", desc: "Otwarte szkolenie — możesz zaprosić gości z zewnątrz (np. z Instagrama).", accent: "emerald" },
  { day: "22", title: "Feedback Call", desc: "Pytania, odpowiedzi i wspólna analiza.", accent: "magenta" },
];

/* ---------- Pakiety członkostwa ---------- */

export type Package = {
  key: string;
  label: string;
  name: string;
  price: string;
  cents: string;
  billing: string;
  accent: Accent;
  cv: string;
  fastStart: string;
  includes: string[];
  featured?: boolean;
};

export const PACKAGES: Package[] = [
  {
    key: "core",
    label: "Starter",
    name: "CORE",
    price: "$350",
    cents: ".99",
    billing: "jednorazowo, potem $179,99 / miesiąc",
    accent: "teal",
    cv: "120",
    fastStart: "$50",
    includes: [
      "UNIQ Learn",
      "UNIQ Live",
      "UNIQ Hub — ograniczony",
      "UNIQ Scan — ograniczony",
    ],
  },
  {
    key: "advanced",
    label: "Growth",
    name: "ADVANCED",
    price: "$799",
    cents: ".99",
    billing: "jednorazowo, potem $179,99 / miesiąc",
    accent: "gold",
    cv: "350",
    fastStart: "$100",
    includes: [
      "Wszystko z Core",
      "UNIQ Scan — pełny dostęp",
      "UNIQ Intelligence — ograniczony",
      "UNIQ Hub — rozszerzony",
    ],
  },
  {
    key: "elite",
    label: "Rekomendowany",
    name: "ELITE",
    price: "$1 499",
    cents: ".99",
    billing: "jednorazowo, potem $179,99 / miesiąc",
    accent: "magenta",
    cv: "700",
    fastStart: "$200",
    featured: true,
    includes: [
      "Wszystko z Advanced",
      "UNIQ Hub — pełny dostęp",
      "UNIQ Intelligence — pełny dostęp",
      "UNIQ Connect",
    ],
  },
  {
    key: "vip",
    label: "Exclusive",
    name: "VIP",
    price: "$4 999",
    cents: ".99",
    billing: "jednorazowo, potem $179,99 / miesiąc",
    accent: "violet",
    cv: "2 000",
    fastStart: "$600",
    includes: [
      "Wszystko z Elite",
      "Siedzenia VIP na wydarzeniach",
      "Early access do nowych narzędzi",
      "3 lata dostępu + kolacja VIP",
    ],
  },
  {
    key: "lifetime",
    label: "Ultimate",
    name: "LIFETIME",
    price: "$9 999",
    cents: ".99",
    billing: "jednorazowo",
    accent: "orange",
    cv: "4 000",
    fastStart: "$1 200",
    includes: [
      "Wszystko z VIP",
      "Darmowe bilety na wydarzenia",
      "Specjalne miejsca + 10 lat dostępu",
      "Ekskluzywna kolacja",
    ],
  },
];

/* ---------- Akademia UNIQ (Vimeo) ---------- */

export const ACADEMY_VIDEOS = [
  "Powitanie w Społeczności",
  "Nastawienie + wizja Zespołu",
  "Solantis — Rejestracja, konto Demo + Real",
  "TradingView — podstawy",
  "Zarządzanie ryzykiem w Tradingu",
  "Dwie strategie kopiowania sygnałów",
  "Kopiowanie sygnałów MT5",
  "Czy Network Marketing jest dla Ciebie?",
  "DMO — Daily Method of Operation",
  "Plan działania na 90 dni",
  "Dlaczego warto iść na maxa?",
  "Jak ważny jest Mentoring i Otoczenie",
  "Biznes Tradycyjny vs Biznes Online",
  "Live Trading — Przykład korzystania z produktu",
  "Testimonial — Iwona",
  "Testimonial — Wiktoria",
];

/* ---------- Nadchodzące wydarzenie ---------- */

export const EVENT = {
  badge: "Nadchodzące wydarzenie",
  title: "UNIQ Unfold — Poland",
  date: "15 sierpnia 2026",
  time: "13:00 – 16:00",
  city: "Łódź",
  venue: "DoubleTree by Hilton",
  price: "od $23",
  image: "/event-lodz.jpg",
  ticketUrl: "https://www.eventbrite.com/e/uniq-unfold-poland-tickets-1992433326715",
  desc: "Bardzo ważne szkolenie polskiego zespołu UNIQ — otwarte dla wszystkich. Pokazujemy nasz biznes od środka, a wśród prelegentów wystąpią zaproszeni multimilionerzy. Świetna okazja, by zobaczyć wizję UNIQ na żywo i zabrać ze sobą gości.",
} as const;

/* ---------- Checklist pierwszych 48h ---------- */

export const CHECKLIST: { id: string; label: string; href?: string; external?: boolean }[] = [
  { id: "tg", label: "Dołącz do grup na Telegramie (UNIQ + UNIQ Elite) — poproś Lidera o linki", href: "/spolecznosc" },
  { id: "hello", label: "Napisz wiadomość powitalną na grupie UNIQ (krótko o sobie i celach)", href: "/spolecznosc" },
  { id: "pinned", label: "Przeczytaj przypięte wiadomości na grupie", href: "/spolecznosc" },
  { id: "event-lodz", label: "Kup bilet na UNIQ Unfold — Łódź (15 sierpnia)", href: EVENT.ticketUrl, external: true },
  { id: "platform", label: "Zaloguj się na platformę i rozejrzyj po panelu", href: "/platforma" },
  { id: "mt5", label: "Pobierz i zainstaluj MetaTrader 5", href: "/broker" },
  { id: "solantis", label: "Załóż konto na Solantis (link od Lidera)", href: "/broker" },
  { id: "signals", label: "Podłącz Telegram do grup sygnałowych (UNIQ Hub)", href: "/sygnaly" },
  { id: "tv", label: "Załóż TradingView i przypisz wskaźniki UNIQ", href: "/tradingview" },
  { id: "academy", label: "Obejrzyj Akademię UNIQ na Vimeo (hasło UNIQ2026)", href: "/akademia" },
  { id: "calendar", label: "Zapisz harmonogram spotkań w kalendarzu", href: "/harmonogram" },
];

/* ---------- FAQ ---------- */

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Od czego mam zacząć?",
    a: "Od zakładki Start i checklisty pierwszych 48 godzin. Następnie przejdź kolejno przez kroki: Społeczność → Platforma → Broker → Sygnały → TradingView. Każdy krok to osobna, prosta instrukcja.",
  },
  {
    q: "Skąd wezmę linki do grup na Telegramie i do Solantis?",
    a: "Dostęp do grup UNIQ i UNIQ Elite oraz link do giełdy Solantis udostępnia Twój Lider prywatnie. Jeśli czegoś nie masz — napisz do swojego Lidera.",
  },
  {
    q: "Czy potrzebuję płatnego konta TradingView?",
    a: "Nie. Darmowe konto TradingView w zupełności wystarczy, aby dodać wskaźniki UNIQ do ulubionych i korzystać z nich na wykresie.",
  },
  {
    q: "Jak podłączyć grupy sygnałowe?",
    a: "W platformie wejdź w UNIQ Hub, zaloguj się do bota UNIQ Hub na Telegramie (skan QR lub kliknięcie linku), a bot automatycznie przypisze Twoje konto do właściwych kanałów. Szczegóły w zakładce Sygnały.",
  },
  {
    q: "Czym jest automatyzacja (AtlasAI)?",
    a: "To zautomatyzowany system tradingowy działający na MetaTrader 5, dostępny dla pakietu Elite. Uruchamiasz go na koncie brokerskim, a on realizuje transakcje według reguł. Podstawy wyjaśniamy w zakładce Automatyzacja. Aby ją podłączyć, zgłoś się do swojego Lidera.",
  },
  {
    q: "Kim jest Damian Pacan?",
    a: "To nasz polski edukator UNIQ — trader i mentor, który prowadzi sesje i szkolenia dla społeczności. Znajdziesz go na Instagramie: @damix.trades.",
  },
  {
    q: "Kiedy odbywają się spotkania?",
    a: "Poniedziałek 20:00 — Sesja Podstawy, Środa 20:00 — Sesja Elite, Sobota 18:00 — TeamCall (Zoom). Do tego cykl miesięczny: 1. Vision Call, 8. Produkt Call, 15. Webinar, 22. Feedback Call. Linki do Zooma pojawiają się na grupach Telegram.",
  },
  {
    q: "Gdzie znajdę filmy tłumaczące poszczególne tematy?",
    a: "W Akademii UNIQ na Vimeo — kilkanaście nagrań krok po kroku (rejestracja Solantis, kopiowanie sygnałów, zarządzanie ryzykiem i więcej). Hasło do Akademii to UNIQ2026.",
  },
];

/* ---------- Nawigacja ---------- */

export const NAV_GROUPS: {
  label: string;
  items: { label: string; href: string; locked?: boolean }[];
}[] = [
  {
    label: "Pierwsze kroki",
    items: STEPS.map((s) => ({ label: `${s.n}. ${s.short}`, href: s.href })),
  },
  {
    label: "Zasoby",
    items: [
      { label: "Narzędzia UNIQ", href: "/narzedzia" },
      { label: "Podstawy tradingu", href: "/trading" },
      { label: "Harmonogram", href: "/harmonogram" },
      { label: "Akademia (Vimeo)", href: "/akademia" },
    ],
  },
  {
    label: "Członkostwo",
    items: [
      { label: "Pakiety", href: "/pakiety" },
      { label: "Model biznesowy", href: "/network", locked: true },
      { label: "FAQ i wsparcie", href: "/faq" },
    ],
  },
];
