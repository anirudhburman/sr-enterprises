import type { Metadata } from "next";
import { MasonryProjectGrid } from "@/components/MasonryProjectGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Masonry style portfolio gallery of acrylic fabrication, signage, podium, UV printing, and trophy projects completed by SR Enterprises in Bangalore."
};

export default function GalleryPage() {
  return (
    <main>
      <section className="hero fade-in-up">
        <div className="container">
          <h1>Project Gallery</h1>
          <p className="muted">
            Browse our previous work in a masonry-style showcase with category filters.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <MasonryProjectGrid />
        </div>
      </section>
    </main>
  );
}
