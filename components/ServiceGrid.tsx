import Link from "next/link";
import { services } from "@/content/services";

type ServiceGridProps = {
  compact?: boolean;
};

export function ServiceGrid({ compact = false }: ServiceGridProps) {
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <Link key={s.key} href="/services" className="service-card">
          <span className="num">/{String(i + 1).padStart(2, "0")}</span>
          <span className="service-card-arrow">↗</span>
          <h3 style={compact ? { fontSize: 24 } : undefined}>{s.name}</h3>
          <span className="tag">{s.tag}</span>
        </Link>
      ))}
    </div>
  );
}
