export const business = {
  name: "SR Enterprises",
  shortDescription:
    "Acrylic fabrication, CNC cutting, UV printing, signage, trophies, podiums, and custom display solutions in Bangalore.",
  phone: "+91 98440 57897",
  phone2: "+91 90355 16333",
  whatsapp: "919844057897",
  email: "srenterprises7897@gmail.com",
  address: "#22, 2nd Main Road, Hanumanthapura, Srirampura, Bangalore, Karnataka 560021",
  postalCode: "560021",
  /** Human-readable service area for copy and basic schema text */
  areaServed: "Bangalore Urban, Bangalore Rural, and nearby districts in Karnataka",
  /** Primary city for local SEO */
  primaryCity: "Bengaluru (Bangalore)",
  primaryRegion: "Karnataka",
  country: "IN",
  siteUrl: "https://srenterprises.in",
  mapEmbedUrl: "https://maps.google.com/maps?q=%2322+2nd+Main+Road%2C+Hanumanthapura%2C+Srirampura%2C+Bangalore+560021&output=embed",
  social: {
    instagram: "https://instagram.com/srenterprises",
    facebook: "https://facebook.com/srenterprises"
  }
};

/** Approximate coordinates for Srirampura, North Bangalore */
export const businessGeo = {
  latitude: 12.9963,
  longitude: 77.5521
};

/** Typical pickup / delivery and on-site install radius (km) for GeoCircle */
export const serviceRadiusKm = 75;

/** Areas we mention for geographic relevance (not exhaustive) */
export const neighborhoodsServed = [
  "Whitefield",
  "Electronic City",
  "Peenya Industrial Area",
  "Rajajinagar",
  "HSR Layout",
  "Koramangala",
  "Indiranagar",
  "Mahadevapura",
  "Yeshwanthpur",
  "Jigani Industrial Area"
] as const;

export const fabricationServices = [
  "Acrylic fabrication",
  "Laser cutting",
  "CNC cutting",
  "UV printing",
  "Signage",
  "Trophies and awards",
  "Photo frames",
  "Custom corporate gifts",
  "Podiums and display units"
] as const;
