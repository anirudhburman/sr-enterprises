import { business } from "@/content/business";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.shortDescription,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560000",
      addressCountry: "IN"
    },
    areaServed: business.areaServed,
    image: "https://srenterprises.in/og-image.jpg",
    sameAs: [business.social.instagram, business.social.facebook]
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
