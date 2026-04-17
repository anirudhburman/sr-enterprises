import Link from "next/link";
import { ServiceGrid } from "@/components/ServiceGrid";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { business } from "@/content/business";
import { Icon } from "@/components/Icon";

export default function HomePage() {
  return (
    <main>
      <section className="hero fade-in-up">
        <div className="container">
          <p className="fun-badge">
            <Icon name="spark" className="icon-sm" /> Trusted local fabrication partner
          </p>
          <h1>Premium Acrylic Fabrication and CNC Cutting in Bangalore</h1>
          <p className="muted">
            {business.name} delivers custom acrylic works, UV printing, sign boards,
            trophies, podiums, and corporate gifting solutions for businesses across Bangalore.
            From one-piece prototypes to bulk production, we support agencies, retailers, and
            corporates with practical timelines and reliable quality.
          </p>
          <p style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="cta">
              <Icon name="rocket" className="icon-sm" />{" "}
              Get a Quote
            </Link>
            <Link href="/gallery" className="cta secondary">
              <Icon name="gallery" className="icon-sm" />{" "}
              View Gallery
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="container stats-strip">
          <article className="card fade-in-up">
            <h3>500+</h3>
            <p className="muted">Custom fabrication jobs delivered</p>
          </article>
          <article className="card fade-in-up">
            <h3>24-72h</h3>
            <p className="muted">Fast turnaround on selected jobs</p>
          </article>
          <article className="card fade-in-up">
            <h3>10+</h3>
            <p className="muted">Service categories under one roof</p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="muted">
            Precision manufacturing for signages, displays, awards, interiors, and
            promotional branding material.
          </p>
          <ServiceGrid compact />
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="muted">
            Browse recent work across acrylic displays, illuminated signage, trophies,
            and UV printed branded assets.
          </p>
          <FeaturedCarousel />
        </div>
      </section>

      <section>
        <div className="container grid grid-3">
          <article className="card fade-in-up">
            <h3><Icon name="shield" className="icon-sm" /> Why Businesses Choose Us</h3>
            <p className="muted">
              Clean finishing, customization support, and production consistency for small and large orders.
            </p>
          </article>
          <article className="card fade-in-up">
            <h3><Icon name="industry" className="icon-sm" /> Industries Served</h3>
            <p className="muted">
              Corporate offices, retail stores, institutions, event agencies, hospitality,
              and manufacturing partners.
            </p>
          </article>
          <article className="card fade-in-up">
            <h3><Icon name="clock" className="icon-sm" /> Need a Fast Turnaround?</h3>
            <p className="muted">
              Share your requirement and we will suggest materials, process, and timeline
              based on your budget and use-case.
            </p>
            <Link href="/contact" className="cta">
              Talk to Us
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
