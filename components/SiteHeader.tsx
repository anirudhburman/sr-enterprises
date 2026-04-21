"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={close}>
          SR Enterprises
        </Link>
        <nav className={`nav${open ? " nav-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link-fun" onClick={close}>
              <Icon name={link.icon} className="icon-sm" />
              {link.label}
            </Link>
          ))}
          <Link className="cta nav-cta-mobile" href="/contact" onClick={close}>
            Get a Quote
          </Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="cta header-cta-desktop" href="/contact">
            Get a Quote
          </Link>
          <button
            className="nav-hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} className="icon-sm" />
          </button>
        </div>
      </div>
    </header>
  );
}
