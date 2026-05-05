"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/projects";

export function useProjectFilter() {
  const [active, setActive] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return { active, setActive, filtered, categories };
}
