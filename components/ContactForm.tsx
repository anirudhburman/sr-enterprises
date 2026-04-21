"use client";

import { useState } from "react";
import { business } from "@/content/business";
import { Icon } from "@/components/Icon";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New Inquiry — SR Enterprises Website");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${business.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <article className="card fade-in-up">
      <h2>
        <Icon name="spark" className="icon-sm" /> Quick Inquiry
      </h2>
      {status === "sent" ? (
        <p style={{ color: "var(--brand-blue)" }}>
          Thank you! We will get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="contact-name">Name</label>
            <br />
            <input id="contact-name" name="name" required className="form-input" />
          </p>
          <p>
            <label htmlFor="contact-phone">Phone</label>
            <br />
            <input id="contact-phone" name="phone" required className="form-input" />
          </p>
          <p>
            <label htmlFor="contact-message">Requirement</label>
            <br />
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="form-textarea"
            />
          </p>
          <button className="cta" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Inquiry"}
          </button>
          {status === "error" && (
            <p className="muted" style={{ marginTop: "0.6rem", fontSize: "0.9rem" }}>
              Something went wrong. Please reach us via WhatsApp or email directly.
            </p>
          )}
        </form>
      )}
    </article>
  );
}
