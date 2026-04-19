import {
  business,
  businessGeo,
  fabricationServices,
  serviceRadiusKm
} from "@/content/business";

export function LocalBusinessSchema() {
  const serviceCatalogItems = fabricationServices.map((name, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "Service" as const,
      name,
      serviceType: name,
      areaServed: {
        "@type": "AdministrativeArea" as const,
        name: "Bengaluru Urban District, Karnataka, India"
      }
    }
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.siteUrl}/#localbusiness`,
    name: business.name,
    description: business.shortDescription,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.primaryCity,
      addressRegion: business.primaryRegion,
      postalCode: "560000",
      addressCountry: business.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessGeo.latitude,
      longitude: businessGeo.longitude
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bengaluru",
        alternateName: "Bangalore",
        containedInPlace: {
          "@type": "State",
          name: "Karnataka",
          containedInPlace: {
            "@type": "Country",
            name: "India"
          }
        }
      },
      {
        "@type": "State",
        name: "Karnataka"
      },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: businessGeo.latitude,
          longitude: businessGeo.longitude
        },
        geoRadius: {
          "@type": "Distance",
          value: serviceRadiusKm,
          unitCode: "KMT"
        }
      }
    ],
    image: `${business.siteUrl}/opengraph-image`,
    sameAs: [business.social.instagram, business.social.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fabrication and printing services",
      itemListElement: serviceCatalogItems
    }
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
