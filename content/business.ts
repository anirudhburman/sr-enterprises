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
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6538.396748046494!2d77.56899220740821!3d12.987581991762985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16278f750001%3A0x21f9ce24cfeaafa8!2sS%20R%20ENTERPRISES!5e0!3m2!1sen!2sus!4v1777958907879!5m2!1sen!2sus",
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

export const clients = [
  { name: "Daimler",    logo: "/images/daimler.png" },
  { name: "Decathlon",  logo: "/images/decathlon.png" },
  { name: "Fischer",    logo: "/images/fischer.png" },
  { name: "Micelio",   logo: "/images/micelio.png" },
  { name: "SCG",        logo: "/images/SCG.png" },
  { name: "Alcon",      logo: "/images/alcon.png" },
  { name: "Kriya",      logo: "/images/kriya.png" },
  { name: "Licious",    logo: "/images/Licious.png" },
];

export const processSteps = [
  { n: "01", title: "Brief", body: "Send a sketch, a reference, or just describe it. WhatsApp works." },
  { n: "02", title: "Quote", body: "We size the job, suggest materials, and quote within a working day." },
  { n: "03", title: "Make", body: "Cut, print, assemble, finish — all in our Srirampura workshop." },
  { n: "04", title: "Deliver", body: "Pickup, courier, or on-site installation for signage projects." },
];

export const testimonials = [
  {
    quote: "Turned our annual awards around in under two weeks — clean acrylic finish and the engraving was spot on. They've been our go-to ever since.",
    attribution: "Operations lead, automotive sector",
  },
  {
    quote: "Façade signage installation was painless. They handled survey, fabrication and mounting end-to-end. The backlit letters look exactly like the renders.",
    attribution: "Retail rollout team",
  },
  {
    quote: "We needed 200 personalised UV-printed gifts in a hurry. Quality was consistent across the whole batch. Will work with them again.",
    attribution: "HR, B2B SaaS company",
  },
];
