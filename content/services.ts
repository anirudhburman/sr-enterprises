export type ServiceItem = {
  title: string;
  slug: string;
  summary: string;
  details: string[];
  image: string;
};

export const services: ServiceItem[] = [
  {
    title: "Acrylic Fabrication",
    slug: "acrylic-fabrication-bangalore",
    summary: "Custom acrylic products for retail, office, events, and interiors.",
    image: "/images/service-acrylic.svg",
    details: [
      "Laser-finished acrylic display units and panels.",
      "Custom dimensions, colors, and edge finishes.",
      "Low and bulk quantity production."
    ]
  },
  {
    title: "CNC Cutting",
    slug: "cnc-cutting-services-bangalore",
    summary: "Precision CNC cutting for acrylic, PVC, MDF, and allied materials.",
    image: "/images/service-acrylic.svg",
    details: [
      "Accurate CAD-based cutting and shaping.",
      "Fast turnaround for repeat and one-off jobs.",
      "Production support for manufacturers and agencies."
    ]
  },
  {
    title: "UV Printing",
    slug: "uv-printing-bangalore",
    summary: "High-resolution UV print on acrylic and flat surfaces.",
    image: "/images/service-acrylic.svg",
    details: [
      "Vibrant and durable print output.",
      "Branding for signages, awards, and displays.",
      "Suitable for indoor and selected outdoor use."
    ]
  },
  {
    title: "Signage Solutions",
    slug: "signage-makers-bangalore",
    summary: "Complete signage manufacturing including acrylic and illuminated boards.",
    image: "/images/service-acrylic.svg",
    details: [
      "Shop sign boards and office signages.",
      "Acrylic letters, logo signages, and custom shapes.",
      "Fabrication support with quality finishing."
    ]
  },
  {
    title: "Trophies and Awards",
    slug: "custom-trophies-bangalore",
    summary: "Elegant acrylic trophies, mementos, and recognition products.",
    image: "/images/service-acrylic.svg",
    details: [
      "Corporate and event trophy design.",
      "Custom branding and names with precision engraving.",
      "Premium finishing with quick delivery options."
    ]
  },
  {
    title: "Podiums and Corporate Gifts",
    slug: "podium-and-corporate-gifts-bangalore",
    summary: "Functional and brand-focused podiums, gifts, and presentation pieces.",
    image: "/images/service-acrylic.svg",
    details: [
      "Acrylic and mixed-material podium solutions.",
      "Custom corporate gifting products.",
      "Designed for conferences, retail, and business events."
    ]
  }
];

export const serviceFaqs = [
  {
    q: "Do you take custom design orders?",
    a: "Yes. We work on custom dimensions, branding, and design references for almost all services."
  },
  {
    q: "Do you serve only Bangalore?",
    a: "Our core service area is Bangalore, and we can support nearby regions based on project scope."
  },
  {
    q: "How quickly can you deliver?",
    a: "Timelines depend on quantity and complexity, but we prioritize reliable and fast turnaround."
  }
];
