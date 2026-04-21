import { services } from "@/content/services";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

type ServiceGridProps = {
  compact?: boolean;
};

type ServiceIconName = "acrylic" | "cnc" | "uvprint" | "signage" | "trophy" | "gift";

const serviceIconMap: Record<string, ServiceIconName> = {
  "acrylic-fabrication-bangalore": "acrylic",
  "cnc-cutting-services-bangalore": "cnc",
  "uv-printing-bangalore": "uvprint",
  "signage-makers-bangalore": "signage",
  "custom-trophies-bangalore": "trophy",
  "podium-and-corporate-gifts-bangalore": "gift"
};

export function ServiceGrid({ compact = false }: ServiceGridProps) {
  return (
    <div className="grid grid-3">
      {services.map((service) => {
        const iconName = serviceIconMap[service.slug] ?? "services";
        return (
          <Reveal key={service.slug}>
            <article className={`card ${compact ? "service-card-compact" : ""}`}>
              <div className={`service-icon-display${compact ? " service-icon-display-compact" : ""}`}>
                <Icon name={iconName} className="icon-service" />
              </div>
              <span className="pill">{service.title}</span>
              <p className="muted">{service.summary}</p>
              <ul>
                {(compact ? service.details.slice(0, 2) : service.details).map((line) => (
                  <li key={line}>
                    <Icon name="spark" className="icon-xs" /> {line}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
