# Akademia Startowa UNIQ

Przewodnik startowy („pierwsze kroki") dla polskiej społeczności UNIQ.
Next.js 16 + React 19 + Tailwind v4 + GSAP. Ciemny, premium motyw („Obsidian & Liquid Chrome").

## Uruchomienie lokalne

Wymagany Node.js 20.9+ (projekt budowany na Node 24).

```bash
npm install
npm run dev      # tryb deweloperski → http://localhost:3000
# lub produkcyjnie:
npm run build && npm run start
```

## Hasła dostępu

- **Cała strona** jest chroniona hasłem: `UNIQ2026`
- **Sekcja „Model biznesowy"** (`/network`) ma dodatkowe hasło: `UNIQNETWORK`
- Hasło do **Akademii na Vimeo**: `UNIQ2026` (wyświetlane na stronie `/akademia`)

> Uwaga: to „miękka" bramka po stronie przeglądarki — wygodna dla społeczności,
> ale nie jest zabezpieczeniem kryptograficznym. Zmienisz hasła w `src/lib/site.ts`.

## Gdzie edytować treść

Prawie cała treść i konfiguracja są w jednym pliku:

- **`src/lib/site.ts`** — linki, kroki, produkty, kanały sygnałowe, harmonogram,
  pakiety, lista wideo Akademii, checklista, FAQ, nawigacja, hasła.
- **`src/lib/accents.ts`** — kolory akcentów per produkt.
- **`src/app/globals.css`** — design system (kolory, fonty, efekty).

Linki, które udostępnia **Lider** (Solantis, grupy Telegram), celowo NIE są w kodzie —
strona kieruje użytkownika do Lidera.

## Struktura (podstrony)

`/` Start · `/spolecznosc` · `/platforma` · `/broker` · `/sygnaly` · `/tradingview`
· `/automatyzacja` · `/narzedzia` · `/trading` · `/harmonogram` · `/akademia`
· `/pakiety` · `/network` (chronione) · `/faq`

## Deploy (Vercel)

1. Wrzuć folder `akademia-uniq` do repozytorium (GitHub).
2. Na [vercel.com](https://vercel.com) → New Project → import repo.
3. Framework wykryje się automatycznie (Next.js). Deploy.

Nie trzeba żadnych zmiennych środowiskowych. Strona jest w pełni statyczna.
