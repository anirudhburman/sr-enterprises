import type { Metadata } from "next";
import { business } from "@/content/business";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SR Enterprises for acrylic fabrication, CNC cutting, UV printing, signage, trophies, and custom business projects in Bangalore.",
};

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-meta">
            <span>/ Contact</span>
          </div>
          <h1 className="hero-h1">
            Let&apos;s <span className="accent">talk.</span>
          </h1>
          <p className="hero-blurb" style={{ marginTop: 32 }}>
            Phone, email or the form below — we&apos;re happy to help.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section" style={{ paddingTop: 32, borderTop: "none" }}>
        <div className="container">
          <div className="contact-grid">
            {/* LEFT — info + map */}
            <div>
              <div className="contact-block">
                <h4>Visit</h4>
                <p>#22, 2nd Main Road</p>
                <p>Hanumanthapura, Srirampura</p>
                <p>Bengaluru – 560021</p>
              </div>
              <div className="contact-block">
                <h4>Hours</h4>
                <p>Mon – Sat · 10:00 – 19:00</p>
              </div>
              <div className="contact-block">
                <h4>Phone</h4>
                <a href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a>
                <a href={`tel:${business.phone2.replace(/\s/g, "")}`}>{business.phone2}</a>
              </div>
              <div className="contact-block">
                <h4>Email</h4>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
              <div className="contact-block">
                <iframe
                  className="map-embed"
                  src={business.mapEmbedUrl}
                  loading="lazy"
                  title="SR Enterprises map"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* RIGHT — quote form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
