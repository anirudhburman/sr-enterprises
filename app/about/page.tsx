import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ClientLogoCycle } from "@/components/ClientLogoCycle";
import { JsonLd } from "@/components/JsonLd";
import {
  business,
  fabricationServices,
  neighborhoodsServed
} from "@/content/business";

const site = business.siteUrl;

export const metadata: Metadata = {
  title: "About Us — Bangalore Acrylic, CNC & UV Printing Workshop",
  description:
    "SR Enterprises is a Bengaluru fabrication workshop: acrylic, laser and CNC cutting, UV printing, signage, trophies, photo frames, and custom gifts. Learn our story, process, and service area across Karnataka.",
  keywords: [
    "SR Enterprises",
    "about acrylic fabrication Bangalore",
    "CNC cutting workshop Bengaluru",
    "UV printing company Karnataka",
    "signage manufacturers Bangalore",
    "custom trophies Bangalore",
    "local fabrication partner India"
  ],
  alternates: {
    canonical: `${site}/about`
  },
  openGraph: {
    title: "About SR Enterprises | Bengaluru Fabrication & Printing",
    description:
      "Meet the team behind acrylic fabrication, precision cutting, UV printing, and signage for brands across Bangalore and Karnataka.",
    url: `${site}/about`,
    siteName: business.name,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "About SR Enterprises",
    description:
      "Bangalore-based workshop for acrylic, CNC, UV printing, signage, trophies, and custom gifts."
  }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${site}/`
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${site}/about`
    }
  ]
};

const aboutPageLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${business.name}`,
  description:
    "Company background, fabrication capabilities, and service geography for SR Enterprises in Bengaluru, Karnataka.",
  url: `${site}/about`,
  mainEntity: {
    "@id": `${site}/#localbusiness`
  },
  isPartOf: {
    "@type": "WebSite",
    name: business.name,
    url: site
  }
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={aboutPageLd} />

      <section className="hero">
        <div className="container">
          <p className="fun-badge">
            <Icon name="spark" className="icon-sm" /> Bengaluru workshop since day one
          </p>
          <h1>About SR Enterprises</h1>
          <p className="muted about-hero-lead">
            We are a <strong>Bangalore-based fabrication and printing team</strong> helping
            retailers, corporates, institutions, and agencies turn ideas into physical products:
            acrylic displays, precision-cut parts, illuminated signage, awards, photo frames, and
            bespoke gifts. Our focus is consistent finishing, honest timelines, and clear
            communication from first sketch to handover.
          </p>
        </div>
      </section>

      <section className="clients-strip-section" aria-label="Client brands">
        <div className="container">
          <ClientLogoCycle />
        </div>
      </section>

      <section>
        <div className="container about-two-col">
          <div>
            <h2 className="section-title">Our story</h2>
            <p className="muted">
              SR Enterprises grew from repeat workshop jobs into a full-service partner for teams
              that need both craft and throughput. We combine hands-on bench experience with
              production discipline so a single custom piece gets the same attention as a batch run
              for an event or retail rollout.
            </p>
            <p className="muted">
              Whether you arrive with CAD files, reference photos, or a rough sketch on paper, we
              help you choose materials, thickness, joinery, and print methods that fit your
              budget and where the piece will live—storefront, office, stage, or exhibition floor.
            </p>
          </div>
          <article className="card fade-in-up">
            <h3>
              <Icon name="clock" className="icon-sm" /> At a glance
            </h3>
            <ul className="about-checklist muted">
              <li>Acrylic, PVC, MDF, and allied sheet materials</li>
              <li>Laser and CNC cutting for tight tolerances</li>
              <li>UV printing for vibrant branding on flat surfaces</li>
              <li>Signage, trophies, podiums, frames, and custom gifts</li>
              <li>Support for agencies, brands, schools, and SMEs</li>
            </ul>
            <p style={{ marginTop: "1rem", marginBottom: 0 }}>
              <Link href="/services" className="cta secondary">
                View all services
              </Link>
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">What we make</h2>
          <p className="muted">
            These are the core capabilities clients rely on—often combined in one project (for
            example UV-printed acrylic signage with CNC-routed letters).
          </p>
          <ul className="about-service-pills" aria-label="Core services">
            {fabricationServices.map((label) => (
              <li key={label}>
                <span className="pill">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">How we work with you</h2>
          <ol className="about-steps">
            <li className="card fade-in-up">
              <h3>1. Brief &amp; feasibility</h3>
              <p className="muted">
                We clarify size, quantity, material, finish, installation context, and deadline.
                If something is risky for transport or outdoor use, we say so early.
              </p>
            </li>
            <li className="card fade-in-up">
              <h3>2. Design support</h3>
              <p className="muted">
                Share vector files or dimensions—we advise on stroke widths for small text,
                standoff depths, LED diffusion, and how print will read on your substrate.
              </p>
            </li>
            <li className="card fade-in-up">
              <h3>3. Production &amp; QC</h3>
              <p className="muted">
                Cutting, polishing, bonding, printing, and assembly happen in-house with
                checkpoints before packing so you are not surprised at delivery.
              </p>
            </li>
            <li className="card fade-in-up">
              <h3>4. Delivery or pickup</h3>
              <p className="muted">
                We coordinate handover in Bangalore and can discuss dispatch across Karnataka when
                the job allows safe packing.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Where we operate (service area)</h2>
          <p className="muted">
            Our workshop serves <strong>{business.primaryCity}</strong>,{" "}
            <strong>{business.primaryRegion}</strong>, and nearby industrial and commercial belts.
            Typical work includes pickup and delivery within the wider Bangalore metropolitan region
            and projects that can be shipped securely elsewhere in the state.
          </p>
          <p className="muted">
            We regularly support clients around{" "}
            {neighborhoodsServed.slice(0, -1).join(", ")}, and{" "}
            {neighborhoodsServed[neighborhoodsServed.length - 1]}—plus
            other localities on request. Coverage aligns with our logistics:{" "}
            <strong>{business.areaServed}</strong>.
          </p>
          <p className="muted" style={{ marginBottom: 0 }}>
            <Link href="/contact" className="cta">
              <Icon name="contact" className="icon-sm" /> Discuss your location &amp; timeline
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="container grid grid-3">
          <article className="card fade-in-up">
            <h3>
              <Icon name="rocket" className="icon-sm" /> Our mission
            </h3>
            <p className="muted">
              Build long-term relationships through dependable output, fair pricing, and
              responsive updates—so your marketing, retail, or events team can trust the
              fabrication layer.
            </p>
          </article>
          <article className="card fade-in-up">
            <h3>
              <Icon name="shield" className="icon-sm" /> What we value
            </h3>
            <p className="muted">
              Material honesty, transparent timelines, and ownership from sample to bulk. We would
              rather reset a batch than ship something we would not put our name on.
            </p>
          </article>
          <article className="card fade-in-up">
            <h3>
              <Icon name="industry" className="icon-sm" /> Who we work with
            </h3>
            <p className="muted">
              Retail and D2C brands, corporate facilities, schools and colleges, event and
              exhibition partners, hospitality groups, and manufacturing vendors who need a
              reliable Bangalore fabrication desk.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <article className="card fade-in-up about-cta-card">
            <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
              Ready to plan your next job?
            </h2>
            <p className="muted">
              Send dimensions, reference images, or call us—we will reply with material options
              and a realistic schedule.
            </p>
            <p style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: 0 }}>
              <Link href="/contact" className="cta">
                Get a quote
              </Link>
              <Link href="/gallery" className="cta secondary">
                See gallery
              </Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
