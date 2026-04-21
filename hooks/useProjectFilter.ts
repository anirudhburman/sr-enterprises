"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/projects";

export const categories = ["All", "Acrylic", "Signage", "Trophies", "UV Printing", "Podiums"] as const;
export type Category = (typeof categories)[number];

export function useProjectFilter() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return { active, setActive, filtered, categories };
}
