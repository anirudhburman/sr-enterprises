"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useProjectFilter } from "@/hooks/useProjectFilter";

const imageDims = {
  landscape: { width: 1200, height: 900 },
  portrait: { width: 900, height: 1200 },
  square: { width: 1000, height: 1000 }
} as const;

export function MasonryProjectGrid() {
  const { active, setActive, filtered, categories } = useProjectFilter();

  return (
    <>
      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className="pill"
            style={{ cursor: "pointer", opacity: category === active ? 1 : 0.75 }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="masonry-grid">
        {filtered.map((project) => (
          <Reveal key={`${project.title}-masonry`} className="masonry-item">
            <article className="card">
              <Image
                src={project.image}
                alt={`${project.title} by SR Enterprises`}
                width={imageDims[project.orientation].width}
                height={imageDims[project.orientation].height}
                className="masonry-image"
              />
              <p className="pill">{project.category}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
