"use client";

import { useEffect, useMemo, useState } from "react";

const SERVICE_WORDS = [
  "Acrylic fabrication",
  "Laser cutting",
  "CNC cutting",
  "UV printing",
  "Signage",
  "Trophies",
  "Photo frames",
  "Custom gifts"
];

const TYPE_MS = 52;
const HOLD_MS = 2200;
const DELETE_MS = 36;
const BETWEEN_MS = 280;

export function HeroTypedHeadline() {
  const [wordIndex, setWordIndex] = useState(0);
  const [len, setLen] = useState(0);
  const word = SERVICE_WORDS[wordIndex % SERVICE_WORDS.length];
  const visible = useMemo(() => word.slice(0, len), [word, len]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setWordIndex(0);
      setLen(SERVICE_WORDS[0].length);
      return;
    }

    let cancelled = false;
    let wi = 0;
    let l = 0;
    let mode: "type" | "hold" | "delete" = "type";
    let pending: number | undefined;

    const queue = (ms: number, fn: () => void) => {
      if (pending !== undefined) window.clearTimeout(pending);
      pending = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const tick = () => {
      if (cancelled) return;
      const w = SERVICE_WORDS[wi];

      if (mode === "type") {
        if (l < w.length) {
          l += 1;
          setWordIndex(wi);
          setLen(l);
          queue(TYPE_MS, tick);
        } else {
          mode = "hold";
          queue(HOLD_MS, tick);
        }
        return;
      }

      if (mode === "hold") {
        mode = "delete";
        queue(BETWEEN_MS, tick);
        return;
      }

      if (mode === "delete") {
        if (l > 0) {
          l -= 1;
          setWordIndex(wi);
          setLen(l);
          queue(DELETE_MS, tick);
        } else {
          wi = (wi + 1) % SERVICE_WORDS.length;
          setWordIndex(wi);
          mode = "type";
          queue(BETWEEN_MS, tick);
        }
      }
    };

    queue(0, tick);
    return () => {
      cancelled = true;
      if (pending !== undefined) window.clearTimeout(pending);
    };
  }, []);

  return (
    <h1 className="hero-typed-title">
      <span className="hero-typed-word" aria-live="polite">
        {visible}
        <span className="hero-typed-cursor" aria-hidden="true">
          |
        </span>
      </span>
    </h1>
  );
}
