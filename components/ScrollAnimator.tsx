"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function revealIfInView(nodes: HTMLElement[]) {
  const vh = typeof window !== "undefined" ? window.innerHeight : 0;
  if (!vh) return;
  nodes.forEach((node) => {
    const r = node.getBoundingClientRect();
    if (r.top < vh + 2 && r.bottom > -2) {
      node.classList.add("revealed");
    }
  });
}

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-in-up:not(.revealed)")
    );
    if (!nodes.length) {
      return;
    }

    const runRevealPass = () => revealIfInView(nodes);

    runRevealPass();
    requestAnimationFrame(() => {
      runRevealPass();
      requestAnimationFrame(runRevealPass);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px 8% 0px" }
    );

    nodes.forEach((node) => {
      if (!node.classList.contains("revealed")) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
