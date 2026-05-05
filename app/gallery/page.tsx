import type { Metadata } from "next";
import { MasonryProjectGrid } from "@/components/MasonryProjectGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Portfolio of acrylic fabrication, signage, UV printing, trophies and awards projects by SR Enterprises, Bengaluru.",
};

export default function GalleryPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 48 }}>
        <div className="container">
          <div className="hero-meta">
            <span>/ Gallery</span>
          </div>
          <h1 className="hero-h1">
            Selected<br />
            <span
              style={{
                fontFamily: "var(--font-archivo-narrow)",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              work.
            </span>
          </h1>
          <p className="hero-blurb" style={{ marginTop: 32 }}>
            A rolling selection from the workshop. Photographs to be added — labels describe
            what&apos;s coming.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" style={{ paddingTop: 0, borderTop: "none" }}>
        <div className="container">
          <MasonryProjectGrid />
        </div>
      </section>
    </main>
  );
}
