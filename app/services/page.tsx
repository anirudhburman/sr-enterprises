import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Acrylic fabrication, laser cutting, CNC cutting, UV printing, signage, trophies, photo frames, custom gifts and corporate awards — all in-house at SR Enterprises, Bengaluru.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-meta">
            <span>/ Services</span>
          </div>
          <h1 className="hero-h1">
            Everything<br />
            <span className="accent">we make.</span>
          </h1>
          <p className="hero-blurb" style={{ marginTop: 32 }}>
            Nine in-house disciplines. Combine them as you need — most projects use two or three.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section" style={{ paddingTop: 32, borderTop: "none" }}>
        <div className="container">
          {services.map((s, i) => (
            <div key={s.key} className="services-list-item">
              <div className="services-list-row">
                <div>
                  <span className="section-num">/{String(i + 1).padStart(2, "0")}</span>
                  <div
                    style={{
                      marginTop: 12,
                      fontFamily: "var(--font-archivo-narrow)",
                      fontStyle: "italic",
                      color: "var(--muted)",
                      fontSize: 16,
                    }}
                  >
                    {s.tag}
                  </div>
                </div>
                <h3 className="services-list-name">{s.name}</h3>
                <div>
                  <p className="services-list-blurb">{s.blurb}</p>
                  <ul className="services-bullets">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <h2
              className="section-title"
              style={{ margin: 0, fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Ready to start?
            </h2>
            <Link href="/contact" className="btn btn-primary" style={{ marginLeft: "auto" }}>
              Request a quote →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
