export type ProjectItem = {
  title: string;
  category: "Acrylic" | "Signage" | "Trophies" | "UV Printing" | "Podiums";
  image: string;
  orientation: "landscape" | "portrait" | "square";
};

export const projects: ProjectItem[] = [
  {
    title: "Retail Acrylic Product Display",
    category: "Acrylic",
    image: "/images/placeholder-landscape.svg",
    orientation: "landscape"
  },
  {
    title: "Corporate Reception Signboard",
    category: "Signage",
    image: "/images/placeholder-portrait.svg",
    orientation: "portrait"
  },
  {
    title: "Annual Day Trophy Set",
    category: "Trophies",
    image: "/images/placeholder-square.svg",
    orientation: "square"
  },
  {
    title: "UV Printed Event Panels",
    category: "UV Printing",
    image: "/images/placeholder-landscape.svg",
    orientation: "landscape"
  },
  {
    title: "Conference Podium Unit",
    category: "Podiums",
    image: "/images/placeholder-portrait.svg",
    orientation: "portrait"
  },
  {
    title: "Wayfinding Signage Series",
    category: "Signage",
    image: "/images/placeholder-landscape.svg",
    orientation: "landscape"
  },
  {
    title: "Storefront Acrylic Lettering",
    category: "Signage",
    image: "/images/placeholder-square.svg",
    orientation: "square"
  },
  {
    title: "Corporate Gift Acrylic Stand",
    category: "Acrylic",
    image: "/images/placeholder-portrait.svg",
    orientation: "portrait"
  },
  {
    title: "Recognition Plaque Collection",
    category: "Trophies",
    image: "/images/placeholder-landscape.svg",
    orientation: "landscape"
  },
  {
    title: "UV Printed Branding Panel",
    category: "UV Printing",
    image: "/images/placeholder-square.svg",
    orientation: "square"
  },
  {
    title: "Event Stage Podium",
    category: "Podiums",
    image: "/images/placeholder-landscape.svg",
    orientation: "landscape"
  },
  {
    title: "Reception Desk Sign Set",
    category: "Signage",
    image: "/images/placeholder-portrait.svg",
    orientation: "portrait"
  }
];
