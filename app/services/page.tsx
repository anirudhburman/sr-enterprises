import type { Metadata } from "next";
import { ServiceGrid } from "@/components/ServiceGrid";
import { serviceFaqs } from "@/content/services";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore acrylic fabrication, CNC cutting, UV printing, signage making, trophies, podium fabrication, and corporate gift services by SR Enterprises in Bangalore."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Services</h1>
          <p className="muted">
            End-to-end acrylic and branding fabrication services for businesses in Bangalore.
            We support custom development, repeat production, and urgent requirements
            with transparent communication.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="section-title"><Icon name="spark" className="icon-sm" /> Frequently Asked Questions</h2>
          <div className="grid grid-3">
            {serviceFaqs.map((faq) => (
              <article key={faq.q} className="card fade-in-up">
                <h3>{faq.q}</h3>
                <p className="muted">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
