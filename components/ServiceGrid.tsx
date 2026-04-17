import { services } from "@/content/services";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

type ServiceGridProps = {
  compact?: boolean;
};

export function ServiceGrid({ compact = false }: ServiceGridProps) {
  return (
    <div className="grid grid-3">
      {services.map((service) => (
        <Reveal key={service.slug}>
          <article className={`card ${compact ? "service-card-compact" : ""}`}>
            <Image
              src={service.image}
              alt={`${service.title} service by SR Enterprises`}
              width={800}
              height={600}
              className={`gallery-image ${compact ? "service-image-compact" : ""}`}
            />
            <span className="pill">{service.title}</span>
            <p className="muted">{service.summary}</p>
            <ul>
              {(compact ? service.details.slice(0, 2) : service.details).map((line) => (
                <li key={line}><Icon name="spark" className="icon-xs" /> {line}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
