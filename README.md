# SR Enterprises Website

SEO-focused Next.js static website for SR Enterprises (Bangalore) with Home, About, Services, Gallery, and Contact pages.

## Stack

- Next.js App Router (TypeScript)
- CSS-based design system with reusable components
- Structured SEO metadata and LocalBusiness schema

## Customize Before Go-Live

Update the following files with real business data and assets:

- `content/business.ts` for phone, email, WhatsApp, exact address, social links, and map URL.
- `content/services.ts` for final service descriptions and FAQs.
- `content/projects.ts` and `public/images/` for real portfolio images.

## SEO Features Included

- Global metadata in `app/layout.tsx`
- Per-page metadata for About, Services, Gallery, Contact
- JSON-LD LocalBusiness schema in `components/LocalBusinessSchema.tsx`
- Dynamic `sitemap.xml` in `app/sitemap.ts`
- Dynamic `robots.txt` in `app/robots.ts`
- OG image endpoint in `app/opengraph-image.tsx`

## Run Locally

This environment does not currently expose npm, so install and run locally where npm is available:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Launch Checklist

1. Replace placeholder phone/address/map with exact details.
2. Replace placeholder project SVG with real optimized WebP/AVIF images.
3. Verify mobile responsiveness on key pages.
4. Run Lighthouse and improve largest image payloads first.
5. Deploy on Vercel and connect production domain.
6. Submit sitemap to Google Search Console.
