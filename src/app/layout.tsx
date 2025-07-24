import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

import "@fontsource-variable/playfair-display";
import "@fontsource-variable/quicksand";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "F Beautyque – Centro Estetico a Perdaxius",
  description: "Trattamenti estetici professionali a Perdaxius",
  openGraph: {
    title: "F Beautique – Centro Estetico a Perdaxius",
    description:
      "Scopri trattamenti personalizzati per viso, corpo ed estetica di base in un ambiente accogliente. Prenota ora la tua consulenza gratuita.",
    url: "https://www.tuosito.it",
    siteName: "F Beautique",
    images: [
      {
        url: "../public/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "F Beautique – Centro Estetico a Perdaxius",
      },
    ],
    type: "website",
    locale: "it_IT",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-mainBg relative w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
