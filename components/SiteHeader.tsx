import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Icon } from "@/components/Icon";

const links = [
  { href: "/", label: "Home", icon: "home" as const },
  { href: "/about", label: "About", icon: "about" as const },
  { href: "/services", label: "Services", icon: "services" as const },
  { href: "/gallery", label: "Gallery", icon: "gallery" as const },
  { href: "/contact", label: "Contact", icon: "contact" as const }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          SR Enterprises
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link-fun">
              <Icon name={link.icon} className="icon-sm" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <ThemeToggle />
          <Link className="cta" href="/contact">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
