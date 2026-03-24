import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "pra2dev / Webs para captar clientes";
const siteDescription =
  "Diseñamos webs y landings pensadas para captar clientes, explicar mejor tu propuesta y convertir tráfico en oportunidades.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pra2dev.com"),
  title: {
    default: siteTitle,
    template: "%s | pra2dev",
  },
  description: siteDescription,
  applicationName: "pra2dev",
  keywords: [
    "diseño web",
    "landing pages",
    "captación de clientes",
    "webs para empresas",
    "diseño web para startups",
    "pra2dev",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://pra2dev.com",
    siteName: "pra2dev",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
