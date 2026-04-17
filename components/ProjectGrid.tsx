"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/Reveal";

const categories = ["All", "Acrylic", "Signage", "Trophies", "UV Printing", "Podiums"] as const;
const orientationRatio = {
  landscape: "4 / 3",
  portrait: "3 / 4",
  square: "1 / 1"
} as const;

export function ProjectGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") {
      return projects;
    }
    return projects.filter((item) => item.category === active);
  }, [active]);

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
      <div className="grid grid-3">
        {filtered.map((project) => (
          <Reveal key={project.title}>
            <article className="card">
              <Image
                src={project.image}
                alt={`${project.title} by SR Enterprises`}
                width={800}
                height={600}
                className="gallery-image"
                style={{ aspectRatio: orientationRatio[project.orientation] }}
              />
              <p className="pill">{project.category}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
