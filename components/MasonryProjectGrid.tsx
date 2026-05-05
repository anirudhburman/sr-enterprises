"use client";

import { useState, useMemo } from "react";
import { projects } from "@/content/projects";

const SPANS = [
  { col: 6, row: 4 }, { col: 6, row: 4 },
  { col: 4, row: 3 }, { col: 4, row: 3 }, { col: 4, row: 3 },
  { col: 8, row: 4 }, { col: 4, row: 4 },
  { col: 4, row: 3 }, { col: 4, row: 3 }, { col: 4, row: 3 },
  { col: 6, row: 3 }, { col: 6, row: 3 },
];

export function MasonryProjectGrid() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="gallery-filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`btn btn-ghost ${filter === c ? "active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((item, i) => {
          const sp = SPANS[i % SPANS.length];
          return (
            <div
              key={i}
              className="gallery-card"
              style={{ gridColumn: `span ${sp.col}`, gridRow: `span ${sp.row}` }}
            >
              <div className="gallery-stripes" />
              <div className="gallery-meta">
                <span className="gallery-label">{item.label}</span>
                <span className="gallery-cat">{item.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
