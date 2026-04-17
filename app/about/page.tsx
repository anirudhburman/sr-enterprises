import type { Metadata } from "next";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SR Enterprises, a Bangalore team specializing in acrylic fabrication, CNC cutting, UV printing, signage, and custom business display work."
};

export default function AboutPage() {
  return (
    <main>
      <section className="hero fade-in-up">
        <div className="container">
          <h1>About SR Enterprises</h1>
          <p className="muted">
            SR Enterprises is a Bangalore-based fabrication partner for acrylic, signage,
            and precision branding products. We focus on quality output, practical pricing,
            and dependable delivery timelines. Our team collaborates with businesses from
            concept stage to execution, helping clients choose right materials and finishing.
          </p>
        </div>
      </section>
      <section>
        <div className="container grid grid-3">
          <article className="card fade-in-up">
            <h2><Icon name="rocket" className="icon-sm" /> Our Mission</h2>
            <p className="muted">
              Build long-term client relationships through clean finishing, accuracy,
              and responsive service.
            </p>
          </article>
          <article className="card fade-in-up">
            <h2><Icon name="shield" className="icon-sm" /> What We Value</h2>
            <p className="muted">
              Material quality, transparent communication, and project ownership from brief to delivery.
            </p>
          </article>
          <article className="card fade-in-up">
            <h2><Icon name="industry" className="icon-sm" /> Who We Work With</h2>
            <p className="muted">
              Retail brands, event agencies, institutions, and corporates that need reliable fabrication support.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
