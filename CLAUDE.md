# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build (static export)
npm run lint         # ESLint via Next.js
```

## Architecture

**Next.js 16 static site** (`output: "export"`) deployed to static hosts (Cloudflare Pages, Netlify). Images are unoptimized for static compatibility.

**Path alias:** `@/*` maps to root directory.

### Directory Structure
- `app/` - App Router pages (Home, About, Services, Gallery, Contact) + SEO files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`)
- `components/` - UI components (SiteHeader, SiteFooter, ThemeToggle, Reveal, MasonryProjectGrid, LocalBusinessSchema)
- `content/` - Content files (business.ts, services.ts, projects.ts) - update these with real business data
- `public/images/` - Static assets

### Key Patterns

**CSS-based design system** - Single `globals.css` with CSS variables for theming (dark/light via `data-theme` attribute). No CSS-in-JS or Tailwind utility classes.

**SEO-first architecture:**
- Global metadata in `app/layout.tsx`
- Per-page metadata via `generateMetadata` or export
- `LocalBusinessSchema` component injects JSON-LD structured data
- Dynamic `sitemap.xml` and `robots.txt`

**Theme system:** Early script in layout sets theme from localStorage before render to avoid flash.

### Content Customization

Before go-live, update:
- `content/business.ts` - phone, email, WhatsApp, address, social links, map URL
- `content/services.ts` - service descriptions and FAQs
- `content/projects.ts` + `public/images/` - portfolio images

### GitHub Pages Deployment

Set `GITHUB_PAGES=true` env var during build to enable `/repo-name` basePath and assetPrefix.
