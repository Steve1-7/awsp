"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { SiteShell } from "@/components/site-shell";
import { AWSP_CONTACT_EMAIL, AWSP_WHATSAPP_URL, createRequestLinks } from "@/components/request-links";

export default function ContactPage() {
  const [requestLinks, setRequestLinks] = useState<ReturnType<typeof createRequestLinks> | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const topic = String(formData.get("topic") ?? "General enquiry");
    const message = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone / WhatsApp: ${formData.get("phone") || "Not provided"}`,
      `Topic: ${topic}`,
      `Message: ${formData.get("message")}`,
    ].join("\n");

    setRequestLinks(createRequestLinks(`AWSP enquiry: ${topic}`, message));
  };

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="section-heading">Let’s talk about your property, project or service need.</h1>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <a href={AWSP_WHATSAPP_URL} target="_blank" rel="noreferrer" className="block transition hover:text-lime-300">WhatsApp: 083 253 9773</a>
              <a href={`mailto:${AWSP_CONTACT_EMAIL}`} className="block transition hover:text-lime-300">Email: {AWSP_CONTACT_EMAIL}</a>
              <p>Alberton / Gauteng</p>
            </div>
          </div>

          <div className="awsp-card">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="block text-sm text-slate-200">
                Full name
                <input name="name" required className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="Your name" />
              </label>
              <label className="block text-sm text-slate-200">
                Email
                <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="you@example.com" />
              </label>
              <label className="block text-sm text-slate-200">
                Phone / WhatsApp
                <input name="phone" type="tel" className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="Your number (optional)" />
              </label>
              <label className="block text-sm text-slate-200">
                Topic
                <select name="topic" className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white">
                  <option>Solar &amp; Energy</option>
                  <option>Repairs</option>
                  <option>Maintenance</option>
                  <option>Cleaning</option>
                  <option>General enquiry</option>
                </select>
              </label>
              <label className="block text-sm text-slate-200">
                Message
                <textarea name="message" required className="mt-2 min-h-[140px] w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="Tell us what you need" />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="awsp-button-primary">Prepare enquiry</button>
                <Link href="/request" className="awsp-button-secondary">Request a Service</Link>
              </div>
              {requestLinks && (
                <div role="status" className="rounded-xl border border-lime-400/30 bg-lime-300/10 p-4">
                  <p className="text-sm text-lime-100">Use both options to send your enquiry to AWSP by WhatsApp and email. Confirm the message in each app to deliver it.</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a href={requestLinks.whatsapp} target="_blank" rel="noreferrer" className="awsp-button-primary">Send via WhatsApp</a>
                    <a href={requestLinks.email} className="awsp-button-secondary">Send via email</a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
