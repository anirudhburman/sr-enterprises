# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build (static export → ./out)
npm run lint         # ESLint via Next.js
```

## Architecture

**Next.js 16 static site** (`output: "export"`) deployed to GitHub Pages / Cloudflare Pages / Netlify. Images are unoptimized for static compatibility (`next/image` with `unoptimized: true`).

**Path alias:** `@/*` maps to the root directory.

**Font:** Inter loaded via `next/font/google` in `app/layout.tsx` (self-hosted by Next.js at build time, no external request at runtime).

### Directory Structure

```
app/                    # App Router pages + SEO files
  layout.tsx            # Root layout: Inter font, WhatsApp FAB, SiteHeader/Footer
  globals.css           # Entire design system — CSS variables, all component styles
  page.tsx              # Home
  about/page.tsx
  services/page.tsx
  gallery/page.tsx
  contact/page.tsx      # Uses ContactForm client component (formsubmit.co)
  sitemap.ts
  robots.ts
  opengraph-image.tsx

components/             # Shared UI components
  SiteHeader.tsx        # "use client" — sticky nav with mobile hamburger drawer
  SiteFooter.tsx
  ContactForm.tsx       # "use client" — AJAX form via formsubmit.co
  ServiceGrid.tsx       # Renders service cards with per-category SVG icons
  MasonryProjectGrid.tsx  # "use client" — masonry gallery with category filter
  ProjectGrid.tsx         # "use client" — grid gallery with category filter
  FeaturedCarousel.tsx  # CSS infinite-scroll carousel
  ClientLogoCycle.tsx   # "use client" — cycling brand logos
  HeroTypedHeadline.tsx # "use client" — typewriter animation
  Icon.tsx              # Inline SVG icon library (nav, service, UI icons)
  Reveal.tsx            # "use client" — IntersectionObserver fade-in wrapper
  ScrollAnimator.tsx    # "use client" — global .fade-in-up scroll handler
  ThemeToggle.tsx       # "use client" — dark/light toggle, stored in localStorage
  LocalBusinessSchema.tsx  # JSON-LD structured data injected into <head>
  JsonLd.tsx            # Generic JSON-LD injector for per-page schemas

hooks/
  useProjectFilter.ts   # Shared filter logic for both gallery grid components

content/                # Single source of truth for all business data
  business.ts           # Contact info, address, social links, geo coordinates
  services.ts           # 6 service cards + FAQ data
  projects.ts           # 12 gallery items (categories, orientation, image paths)

public/images/          # Static image assets (currently placeholder SVGs)
```

### Key Patterns

**CSS design system** — `app/globals.css` is the single stylesheet. Uses CSS custom properties (`--brand-blue`, `--bg`, `--surface`, `--text`, etc.) for theming. Dark mode is default; light mode applies via `[data-theme="light"]`. No Tailwind, no CSS-in-JS.

**Theme system** — Inline `<script>` in `app/layout.tsx` reads `localStorage` and sets `data-theme` on `<html>` before first paint, preventing flash.

**Icon system** — `components/Icon.tsx` exports a single `<Icon name="..." />` component backed by inline SVG paths. Add new icons there; update the `IconName` union type.

**Service card icons** — `ServiceGrid.tsx` maps each service slug to an icon name via `serviceIconMap`. When adding a new service to `content/services.ts`, add its slug → icon entry in that map.

**Contact form** — `ContactForm.tsx` POSTs to `https://formsubmit.co/ajax/{email}`. The first ever submission triggers a one-time activation email to the client; they must click it before submissions start arriving. No backend or account needed after that.

**Gallery filters** — Both `ProjectGrid` and `MasonryProjectGrid` use the `useProjectFilter` hook from `hooks/useProjectFilter.ts`. The `categories` array and filter logic live there — update it in one place.

**SEO architecture:**
- Root metadata in `app/layout.tsx`
- Per-page metadata via `export const metadata` in each page file
- `LocalBusinessSchema` renders JSON-LD structured data (reads from `content/business.ts`)
- `JsonLd.tsx` used for per-page schemas (About, Services)
- Dynamic `sitemap.xml` and `robots.txt` via `app/sitemap.ts` and `app/robots.ts`

### Content To Update Before Go-Live

- `content/projects.ts` + `public/images/` — real portfolio photos (all 12 currently use placeholder SVGs)
- `content/business.ts` — Instagram/Facebook handles (currently set to `/srenterprises` placeholder)
- `content/services.ts` — confirm service descriptions match what the client actually offers

Everything else (phone, email, address, WhatsApp, map) is already populated with real data.

### Responsive Breakpoints

- `≤900px` — grid collapses to 1 column, hamburger menu replaces nav, stats go 2-column
- `≤640px` — masonry grid goes 1 column

### GitHub Pages Deployment

Set `GITHUB_PAGES=true` env var during build to enable the `/sr-enterprises` basePath and assetPrefix for project-page hosting.
