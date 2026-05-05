import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { clients, processSteps, testimonials } from "@/content/business";
import { FaqAccordion } from "@/components/FaqAccordion";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-meta">
            <span>EST. Bengaluru</span>
            <span>/ Workshop · Srirampura</span>
            <span>/ Since 2010</span>
          </div>
          <h1 className="hero-h1">
            We <span className="outline">cut</span>,<br />
            print &amp;<br />
            <span className="accent">fabricate.</span>
          </h1>
          <div className="hero-sub">
            <p className="hero-blurb">
              Acrylic fabrication, laser &amp; CNC cutting, UV printing, signage and trophies —
              designed and built end-to-end in our Bengaluru workshop.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Request a quote →
              </Link>
              <Link href="/services" className="btn btn-ghost">
                See services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">/ 01 — Services</span>
            <div>
              <h2 className="section-title">
                Nine things,<br />
                <span className="it">done properly.</span>
              </h2>
              <p className="section-lede">
                Each service runs on our floor — no outsourcing, no telephone-game. That keeps
                timelines tight and quality consistent.
              </p>
            </div>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link key={s.key} href="/services" className="service-card">
                <span className="num">/{String(i + 1).padStart(2, "0")}</span>
                <span className="service-card-arrow">↗</span>
                <h3>{s.name}</h3>
                <span className="tag">{s.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">/ 02 — Process</span>
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
            <span className="section-num">/ 03 — Clients</span>
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
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={160}
                  height={80}
                  className="client-logo-img"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">/ 04 — Word of mouth</span>
            <div>
              <h2 className="section-title">
                From people<br />
                <span className="it">we&apos;ve made things for.</span>
              </h2>
            </div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <span className="qmark">&ldquo;</span>
                <p>{t.quote}</p>
                <div className="attr">— {t.attribution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">/ 05 — FAQ</span>
            <div>
              <h2 className="section-title">
                Asked<br />
                <span className="it">often.</span>
              </h2>
            </div>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}
