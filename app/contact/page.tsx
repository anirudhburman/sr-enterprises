import type { Metadata } from "next";
import { business } from "@/content/business";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SR Enterprises for acrylic fabrication, CNC cutting, UV printing, signage, trophies, and custom business projects in Bangalore."
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="muted">
            Share your requirements and we will get back with scope, material suggestions, and
            estimate. We handle custom acrylic jobs, signage, UV printing, trophies, podiums, and
            corporate gift work.
          </p>
        </div>
      </section>
      <section>
        <div className="container grid grid-3">
          <article className="card fade-in-up">
            <h2>
              <Icon name="phone" className="icon-sm" /> Reach SR Enterprises
            </h2>
            <p>
              <strong>
                <Icon name="phone" className="icon-sm" /> Phone:
              </strong>{" "}
              <a href={`tel:${business.phone}`}>{business.phone}</a>
              {" / "}
              <a href={`tel:${business.phone2}`}>{business.phone2}</a>
            </p>
            <p>
              <strong>
                <Icon name="mail" className="icon-sm" /> Email:
              </strong>{" "}
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <p>
              <strong>
                <Icon name="map" className="icon-sm" /> Address:
              </strong>{" "}
              {business.address}
            </p>
            <p>
              <a
                className="cta"
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </p>
          </article>

          <ContactForm />

          <article className="card fade-in-up">
            <h2>
              <Icon name="map" className="icon-sm" /> Location
            </h2>
            <iframe
              src={business.mapEmbedUrl}
              width="100%"
              height="280"
              loading="lazy"
              style={{ border: 0, borderRadius: "0.8rem" }}
              referrerPolicy="no-referrer-when-downgrade"
              title="SR Enterprises map location"
              allowFullScreen
              allow="fullscreen"
            />
            <p className="muted">Srirampura, Bangalore — serving the entire city and beyond.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
