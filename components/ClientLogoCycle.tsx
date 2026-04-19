"use client";

import { useEffect, useState } from "react";

const COMPANIES = [
  { id: "daimler", name: "Daimler" },
  { id: "decathlon", name: "Decathlon" },
  { id: "fischer", name: "Fischer" },
  { id: "micelio", name: "Micelio" },
  { id: "scg", name: "SCG" },
  { id: "alcon", name: "Alcon" },
  { id: "kriya", name: "Kriya" },
  { id: "licious", name: "Licious" }
] as const;

/** Each column advances on its own cadence (ms between brand changes). */
const COLUMN_INTERVAL_MS = [5200, 7000, 6000, 7600] as const;

/** Start on different brands so the row is not four identical ticks at t=0. */
const COLUMN_INITIAL_INDEX = [0, 2, 4, 6] as const;

function ClientLogoColumn({
  columnIndex,
  reduceMotion
}: {
  columnIndex: 0 | 1 | 2 | 3;
  reduceMotion: boolean;
}) {
  const [idx, setIdx] = useState<number>(COLUMN_INITIAL_INDEX[columnIndex]);

  useEffect(() => {
    if (reduceMotion) return;
    const ms = COLUMN_INTERVAL_MS[columnIndex];
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % COMPANIES.length);
    }, ms);
    return () => window.clearInterval(id);
  }, [columnIndex, reduceMotion]);

  const c = COMPANIES[idx];

  return (
    <div
      key={`${columnIndex}-${c.id}-${idx}`}
      className="client-logo-cell"
      role="listitem"
      style={{
        animationDelay: reduceMotion ? "0ms" : `${columnIndex * 80}ms`
      }}
    >
      <span className="client-logo-mark" aria-hidden="true" />
      <span className="client-logo-name">{c.name}</span>
    </div>
  );
}

export function ClientLogoCycle() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="client-logo-section" aria-label="Brands we have worked with">
      <p className="client-logo-label">Trusted by teams at</p>
      <div className="client-logo-row" role="list">
        {([0, 1, 2, 3] as const).map((col) => (
          <ClientLogoColumn key={col} columnIndex={col} reduceMotion={reduceMotion} />
        ))}
      </div>
    </div>
  );
}
