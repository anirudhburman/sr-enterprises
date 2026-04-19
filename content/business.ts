export const business = {
  name: "SR Enterprises",
  shortDescription:
    "Acrylic fabrication, CNC cutting, UV printing, signage, trophies, podiums, and custom display solutions in Bangalore.",
  phone: "+91 90000 00000",
  whatsapp: "919000000000",
  email: "hello@srenterprises.in",
  address: "No. 00, Industrial Area, Bangalore, Karnataka 560000",
  /** Human-readable service area for copy and basic schema text */
  areaServed: "Bangalore Urban, Bangalore Rural, and nearby districts in Karnataka",
  /** Primary city for local SEO */
  primaryCity: "Bengaluru (Bangalore)",
  primaryRegion: "Karnataka",
  country: "IN",
  siteUrl: "https://srenterprises.in",
  mapEmbedUrl: "https://www.google.com/maps?q=Bangalore&output=embed",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/"
  }
};

/** Approximate centre of Bengaluru for LocalBusiness / geo signals */
export const businessGeo = {
  latitude: 12.9716,
  longitude: 77.5946
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
