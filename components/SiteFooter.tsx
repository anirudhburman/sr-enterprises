import Link from "next/link";
import { business } from "@/content/business";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          <strong>{business.name}</strong> - Acrylic Fabrication, CNC Cutting, UV
          Printing, Signage, and Trophies in Bangalore.
        </p>
        <p>
          <Link href="/contact">Contact Us</Link> |{" "}
          <a href={`tel:${business.phone}`}>{business.phone}</a> |{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>
      </div>
    </footer>
  );
}
