import type { Metadata } from "next";
import Link from "next/link";
import { business, clients, processSteps } from "@/content/business";
import { JsonLd } from "@/components/JsonLd";

const site = business.siteUrl;

export const metadata: Metadata = {
  title: "About Us — Bangalore Acrylic, CNC & UV Printing Workshop",
  description:
    "SR Enterprises is a Bengaluru fabrication workshop: acrylic, laser and CNC cutting, UV printing, signage, trophies, photo frames, and custom gifts. Learn our story, process, and capabilities.",
  alternates: { canonical: `${site}/about` },
  openGraph: {
    title: "About SR Enterprises | Bengaluru Fabrication & Printing",
    description:
      "Meet the team behind acrylic fabrication, precision cutting, UV printing, and signage for brands across Bangalore.",
    url: `${site}/about`,
    siteName: business.name,
    type: "website",
    locale: "en_IN",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${site}/about` },
  ],
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbLd} />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-meta">
            <span>/ About</span>
          </div>
          <h1 className="hero-h1">
            A workshop<br />
            <span className="outline it" style={{ fontFamily: "var(--font-archivo-narrow)", fontStyle: "italic" }}>
              in Srirampura.
            </span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="section" style={{ paddingTop: 0, borderTop: "none" }}>
        <div className="container">
          <div className="about-two-col">
            <div className="about-text">
              <p>
                SR Enterprises is a Bengaluru fabrication studio that has been cutting, printing
                and finishing for over a decade. We work with acrylic, wood, metal, ACP and most
                rigid substrates that take a UV print.
              </p>
              <p>
                The work ranges from a single trophy on someone&apos;s desk to backlit signage on
                a retail façade. What ties it together is care: clean edges, true finishes, and a
                delivery date that holds.
              </p>
              <p>
                Everything is made in-house in our Hanumanthapura workshop — laser, CNC, UV
                flatbed, fabrication bay and finishing under one roof. Nothing is outsourced.
                That&apos;s why timelines don&apos;t slip.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 8 }}>
                Get a quote →
              </Link>
            </div>
            <div
              className="img-placeholder"
              style={{ height: 560 }}
              aria-hidden="true"
            >
              <div className="img-placeholder-stripes" />
              <span className="img-placeholder-label">ABOUT · Workshop floor or owner portrait</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">/ Process</span>
            <div>
              <h2 className="section-title">
                Brief to<br />
                <span className="it">delivery.</span>
              </h2>
            </div>
          </div>
          <div className="process-grid">
            {processSteps.map((p) => (
              <div key={p.n} className="process-step">
                <div className="process-num">{p.n}</div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">/ Clients</span>
            <div>
              <h2 className="section-title">
                Trusted by<br />
                <span className="it">teams that ship.</span>
              </h2>
            </div>
          </div>
          <div className="clients-grid">
            {clients.map((c) => (
              <div key={c.name} className="client-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/${c.logo}`} alt={c.name} className="client-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
