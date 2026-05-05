import { projects } from "@/content/projects";

export function FeaturedCarousel() {
  const looped = [...projects, ...projects];

  return (
    <div className="featured-carousel-wrapper">
      <div className="featured-carousel-track">
        {looped.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            className="featured-carousel-item gallery-card"
            style={{ height: 170 }}
          >
            <div className="gallery-stripes" />
            <div className="gallery-meta">
              <span className="gallery-label" style={{ fontSize: 12 }}>{item.label}</span>
              <span className="gallery-cat">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
