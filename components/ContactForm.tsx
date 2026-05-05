"use client";

import { useState } from "react";
import { business } from "@/content/business";
import { services } from "@/content/services";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[0].name,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Quote request — ${form.service}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nProject details:\n${form.message}`;
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="quote-form">
      <h3>Request a quote</h3>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input
            id="cf-name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Phone</label>
          <input
            id="cf-phone"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email (optional)</label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-service">Service</label>
          <select
            id="cf-service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            {services.map((s) => (
              <option key={s.key}>{s.name}</option>
            ))}
            <option>Other / multiple</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-message">Project details</label>
          <textarea
            id="cf-message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Quantities, materials, sizes, deadline…"
          />
        </div>
        <button className="btn btn-primary" type="submit" style={{ marginTop: 8 }}>
          Send via email →
        </button>
        <p className="form-note">Opens your mail app — no data stored on this site.</p>
      </form>
    </div>
  );
}
