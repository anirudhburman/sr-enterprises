"use client";

import { useState } from "react";
import { serviceFaqs } from "@/content/services";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {serviceFaqs.map((f, i) => (
        <div
          key={i}
          className={`faq-item ${open === i ? "open" : ""}`}
          onClick={() => setOpen(open === i ? -1 : i)}
        >
          <div className="faq-q">
            <h4>{f.q}</h4>
            <span className="faq-plus">+</span>
          </div>
          <div className="faq-a">{f.a}</div>
        </div>
      ))}
    </div>
  );
}
