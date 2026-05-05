import Link from "next/link";
import { business } from "@/content/business";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-wordmark">
              SR<span className="wordmark-dot" />ENTERPRISES
            </div>
            <p className="footer-tagline">{business.shortDescription}</p>
          </div>
          <div>
            <h5>Visit</h5>
            <p>#22, 2nd Main Road</p>
            <p>Hanumanthapura, Srirampura</p>
            <p>Bengaluru – 560021</p>
            <p style={{ marginTop: 12 }}>Mon – Sat · 10:00 – 19:00</p>
          </div>
          <div>
            <h5>Contact</h5>
            <a href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a>
            <a href={`tel:${business.phone2.replace(/\s/g, "")}`}>{business.phone2}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>
          <div>
            <h5>Pages</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SR Enterprises. All rights reserved.</span>
          <span>Bengaluru / India</span>
        </div>
      </div>
    </footer>
  );
}
