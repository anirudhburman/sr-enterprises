import type { Metadata } from "next";
import { Archivo, Archivo_Narrow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { business } from "@/content/business";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-archivo-narrow",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srenterprises.in"),
  title: {
    default: "SR Enterprises | Acrylic Fabrication, Trophies & UV Printing in Bengaluru",
    template: "%s | SR Enterprises",
  },
  description:
    "SR Enterprises is a Bengaluru fabrication studio: acrylic fabrication, laser & CNC cutting, UV printing, signage, trophies and corporate awards. In-house from brief to delivery.",
  keywords: [
    "acrylic fabrication Bangalore",
    "trophies Bangalore",
    "UV printing Bangalore",
    "signage Bangalore",
    "laser cutting Bengaluru",
    "corporate awards",
    "custom gifts",
    "CNC cutting",
  ],
  openGraph: {
    title: "SR Enterprises — Acrylic, Signage & Print · Bengaluru",
    description:
      "Acrylic fabrication, laser & CNC cutting, UV printing, signage and trophies — designed and built in Bengaluru.",
    url: "https://srenterprises.in",
    siteName: "SR Enterprises",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SR Enterprises — Bengaluru fabrication studio",
    description:
      "Acrylic, laser, CNC, UV printing, signage, trophies. In-house in Bengaluru.",
  },
  alternates: {
    canonical: "https://srenterprises.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${archivo.variable} ${archivoNarrow.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body>
        <LocalBusinessSchema />
        <SiteHeader />
        {children}
        <SiteFooter />
        <a
          href={`https://wa.me/${business.whatsapp}`}
          className="whatsapp-fab"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with SR Enterprises on WhatsApp"
        >
          <svg viewBox="0 0 32 32" fill="white" width="30" height="30" aria-hidden="true">
            <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L0 32l8.5-2.5c2.2 1.2 4.8 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zM16 28.5c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-5 1.5 1.5-4.9-.3-.5C3.7 20.4 3 18.2 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.5-13 12.5zm7.2-9.4c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1 1.3 3.6 1.5 3.9c.2.2 2.6 4 6.4 5.6 2.3 1 3.2 1.1 4.4.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
