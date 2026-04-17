import Image from "next/image";
import { projects } from "@/content/projects";
import { Icon } from "@/components/Icon";

const imageDims = {
  landscape: { width: 1200, height: 900 },
  portrait: { width: 900, height: 1200 },
  square: { width: 1000, height: 1000 }
} as const;

export function FeaturedCarousel() {
  const looped = [...projects, ...projects];

  return (
    <div className="featured-carousel-wrapper">
      <div className="featured-carousel-track">
        {looped.map((project, idx) => (
          <article className="featured-carousel-item card" key={`${project.title}-${idx}`}>
            <Image
              src={project.image}
              alt={`${project.title} by SR Enterprises`}
              width={imageDims[project.orientation].width}
              height={imageDims[project.orientation].height}
              className="featured-carousel-image"
            />
            <p className="pill">{project.category}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
