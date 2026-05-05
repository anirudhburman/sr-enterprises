"use client";

import { useProjectFilter } from "@/hooks/useProjectFilter";

export function ProjectGrid() {
  const { active, setActive, filtered, categories } = useProjectFilter();

  return (
    <>
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`btn btn-ghost ${category === active ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((item, i) => (
          <div key={i} className="gallery-card" style={{ gridColumn: "span 4", gridRow: "span 3" }}>
            <div className="gallery-stripes" />
            <div className="gallery-meta">
              <span className="gallery-label">{item.label}</span>
              <span className="gallery-cat">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
