import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  metadataBase: new URL("https://srenterprises.in"),
  title: {
    default: "SR Enterprises | Acrylic Fabrication and CNC Cutting in Bangalore",
    template: "%s | SR Enterprises"
  },
  description:
    "SR Enterprises provides acrylic fabrication, CNC cutting, UV printing, signage, trophies, podiums, and custom display solutions in Bangalore.",
  openGraph: {
    title: "SR Enterprises",
    description:
      "Acrylic fabrication, CNC cutting, UV printing, signage, trophies, podiums, and custom work in Bangalore.",
    url: "https://srenterprises.in",
    siteName: "SR Enterprises",
    type: "website",
    locale: "en_IN"
  },
  alternates: {
    canonical: "https://srenterprises.in"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', t);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `
          }}
        />
      </head>
      <body>
        <ScrollAnimator />
        <LocalBusinessSchema />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
