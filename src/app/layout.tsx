import type { Metadata, Viewport } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Starfield } from "@/components/starfield";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Gate } from "@/components/gate";
import { SITE } from "@/lib/site";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akademia Startowa UNIQ — Pierwsze kroki",
    template: "%s · Akademia Startowa UNIQ",
  },
  description:
    "Przewodnik krok po kroku dla polskiej społeczności UNIQ. Platforma, narzędzia, broker, sygnały, TradingView, harmonogram i Akademia — wszystko w jednym miejscu.",
  applicationName: "Akademia Startowa UNIQ",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${sora.variable} ${manrope.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="grain antialiased">
        <Gate variant="screen" password={SITE.gatePassword} storageKey="uniq_access">
          <Starfield />
          <div className="relative z-10 flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Gate>
      </body>
    </html>
  );
}
