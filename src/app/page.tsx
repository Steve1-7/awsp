"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { EnergyCalculator } from "@/components/energy-calculator";

const trustItems = [
  "ENERGY SOLUTIONS",
  "REPAIRS",
  "MAINTENANCE",
  "CLEANING",
  "COMMERCIAL",
  "RESIDENTIAL",
];

const serviceCards = [
  {
    id: "energy",
    title: "Energy",
    description: "Solar, hybrid, battery and commercial energy planning designed around real property demand.",
    stats: ["Residential", "Commercial", "Industrial"],
  },
  {
    id: "repairs",
    title: "Repairs",
    description: "Electrical and property fault diagnosis with a fast, usable digital intake and photo-led triage.",
    stats: ["Electrical", "Property", "General"],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Preventative programmes, scheduled inspections and responsive support to keep systems reliable.",
    stats: ["Inspections", "Planned", "Reactive"],
  },
  {
    id: "cleaning",
    title: "Cleaning",
    description: "Home, office and property cleaning scheduled around your operational and lifestyle needs.",
    stats: ["Deep clean", "Recurring", "Move in/out"],
  },
];

const processSteps = [
  { step: "01", title: "Discover", text: "We understand your problem, property and urgency." },
  { step: "02", title: "Assess", text: "We review requirements, site conditions and technical fit." },
  { step: "03", title: "Plan", text: "We propose the correct solution and recommended next action." },
  { step: "04", title: "Execute", text: "Our team carries out the service with clear communication." },
  { step: "05", title: "Support", text: "Ongoing care, reporting and follow-up action when needed." },
];

const projectCards = [
  { title: "Solar Retrofit for Mixed-Use Facility", category: "Commercial Solar", location: "Johannesburg", image: "roof.png", imageAlt: "Solar panels installed across a commercial rooftop." },
  { title: "Residential Hybrid Upgrade", category: "Energy", location: "Pretoria", image: "high.webp", imageAlt: "Residential hybrid solar energy installation." },
  { title: "Property Maintenance Response", category: "Maintenance", location: "Sandton", image: "ele.webp", imageAlt: "Electrical repair and maintenance work." },
];

const testimonials = [
  { name: "Gustav Spanjer", service: "Industrial Engine Parts (Pty) Ltd", quote: "From start to finish, A-Way Solutions & Projects demonstrated professionalism, efficiency, and a commitment to quality… I wholeheartedly recommend them for anyone seeking professional and reliable solar installation services." },
  { name: "Doron Collen", service: "Residential", quote: "Mr. Geldenhuys demonstrated a high level of professionalism and expertise throughout the installation process… I would not hesitate to recommend A-Way to anyone seeking reliable and professional services." },
  { name: "Derek Mills", service: "D&A Gearbox Services", quote: "Jean is always helpful and friendly… His knowledge and know-how spoke of utmost professionalism. The pride he takes in his work was visible in even the smallest of details." },
];

const insightCards = [
  { title: "Solar battery planning for load shedding resilience", category: "Solar", image: "2.2.jpg", imageAlt: "Solar inverter and battery installation." },
  { title: "Preventative maintenance checklist for home systems", category: "Maintenance", image: "1.9.jpg", imageAlt: "Solar inverter beside a modular battery bank." },
  { title: "How to prepare your property for commercial cleaning", category: "Cleaning", image: "after.webp", imageAlt: "Rooftop solar panels after cleaning." },
];

const serviceOptions = [
  "Energy",
  "Repair",
  "Maintenance",
  "Cleaning",
  "Not sure",
] as const;

const serviceDetailMap: Record<(typeof serviceOptions)[number], string[]> = {
  Energy: ["Solar Installation", "Energy Assessment", "Battery Storage", "Hybrid System", "Off-Grid System", "Commercial Energy"],
  Repair: ["Electrical", "Property", "Equipment", "Water", "Other", "I’m not sure"],
  Maintenance: ["Electrical maintenance", "Property maintenance", "Equipment maintenance", "Scheduled inspection", "Preventative maintenance", "Other"],
  Cleaning: ["Home", "Office", "Commercial property", "Deep cleaning", "Recurring cleaning", "Other"],
  "Not sure": ["General enquiry", "Support", "Quote request", "Not sure yet"],
};

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<(typeof serviceOptions)[number]>("Energy");
  const [selectedDetail, setSelectedDetail] = useState<string>(serviceDetailMap.Energy[0]);

  const handleServiceSelect = (service: (typeof serviceOptions)[number]) => {
    setSelectedService(service);
    setSelectedDetail(serviceDetailMap[service][0]);
  };

  const optionChips = serviceDetailMap[selectedService];

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#0c1923] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <Image src="/img/logo1.webp" alt="" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-center" />
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="relative z-10 grid gap-8 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-14">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 self-start rounded-full border border-lime-400/40 bg-lime-300/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-lime-200">
                Solutions beyond the installation.
              </div>
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-5xl xl:text-7xl">
                Solutions that keep your property moving.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Energy. Repairs. Maintenance. Cleaning. Professional solutions engineered around your property, your needs and your future.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/request" className="awsp-button-primary">
                  Request a Service
                </Link>
                <Link href="/services" className="awsp-button-secondary">
                  Explore Solutions
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/request" className="text-sm font-medium text-lime-300 underline-offset-4 hover:underline">
                  Get an Energy Assessment
                </Link>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-slate-700 bg-slate-950/15 p-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 backdrop-blur-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Energy</p>
                    <p className="mt-2 text-xl font-semibold text-white">System status</p>
                  </div>
                  <div className="rounded-full bg-lime-400/20 px-3 py-1 text-xs font-semibold text-lime-200">ONLINE</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Property</p>
                    <div className="mt-3 h-24 rounded-xl bg-[radial-gradient(circle_at_center,_rgba(143,191,46,0.38),rgba(14,24,31,0.2)_35%,transparent_70%)]" />
                    <p className="mt-4 text-sm text-slate-300">Service readiness</p>
                    <p className="mt-1 text-2xl font-semibold text-white">96%</p>
                  </div>
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Support</p>
                    <div className="mt-4 space-y-2 text-sm text-slate-200">
                      <div className="flex items-center justify-between"><span>Requests</span><span>24/7</span></div>
                      <div className="flex items-center justify-between"><span>Response</span><span>2h</span></div>
                      <div className="flex items-center justify-between"><span>Jobs</span><span>118</span></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-lime-500/40 bg-lime-300/10 px-4 py-3 text-sm text-lime-100">
                  <span className="font-semibold">AWSP service desk:</span> photo-led requests, tracked updates and technician coordination.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
        <div className="grid gap-3 rounded-[1.2rem] border border-slate-800 bg-slate-900/80 p-4 text-center text-xs uppercase tracking-[0.22em] text-slate-300 sm:grid-cols-3 lg:grid-cols-6">
          {trustItems.map((item) => (
            <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-3 text-[10px] font-medium tracking-[0.26em] text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Core solutions</p>
            <h2 className="section-heading">Built for energy, property and peace of mind.</h2>
          </div>
          <Link href="/services" className="text-sm font-medium text-lime-300 underline-offset-4 hover:underline">
            View all services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <article key={card.id} className="awsp-card group">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime-400/15 text-sm font-semibold text-lime-200">
                  {card.title.slice(0, 1)}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">0{serviceCards.indexOf(card) + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                {card.stats.map((stat) => (
                  <li key={stat} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime-400" /> {stat}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="rounded-[2rem] border border-slate-800 bg-[#0d1820] p-6 md:p-8 lg:p-10">
          <div className="mb-8">
            <p className="eyebrow">Need help fast?</p>
            <h2 className="section-heading">Choose the service you need.</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceOptions.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={selectedService === option}
                onClick={() => handleServiceSelect(option)}
                className={`rounded-2xl border px-4 py-4 text-left text-sm font-medium transition ${
                  selectedService === option
                    ? "border-lime-400 bg-lime-300/10 text-lime-100 shadow-[0_0_0_1px_rgba(166,243,72,0.25)]"
                    : "border-slate-700 bg-slate-950/60 text-slate-100 hover:border-lime-400 hover:bg-slate-900"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{selectedService} options</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {optionChips.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selectedDetail === item}
                  onClick={() => setSelectedDetail(item)}
                  className={`rounded-full border px-3 py-2 text-sm transition ${
                    selectedDetail === item
                      ? "border-lime-400 bg-lime-300/10 text-lime-100"
                      : "border-slate-700 bg-slate-900 text-slate-200 hover:border-lime-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-300">
                Selected: <span className="font-semibold text-white">{selectedService}</span> / <span className="font-semibold text-lime-200">{selectedDetail}</span>
              </p>
              <Link href="/request" className="awsp-button-primary px-4 py-2 text-sm">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="mb-10">
          <p className="eyebrow">Why AWSP</p>
          <h2 className="section-heading">A practical process that keeps every job clear.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((item) => (
            <div key={item.step} className="awsp-card flex min-h-[220px] flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-lime-300">{item.step}</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="lg:max-w-xl">
            <p className="eyebrow">Estimate only</p>
            <h2 className="section-heading">Energy calculator</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              Useful planning guidance for solar and energy performance. Results are estimates unless backed by a validated engineering review.
            </p>
          </div>
          <div className="w-full max-w-xl"><EnergyCalculator /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Featured projects</p>
            <h2 className="section-heading">Real work across residential, commercial and maintenance sectors.</h2>
          </div>
          <Link href="/projects" className="text-sm font-medium text-lime-300 underline-offset-4 hover:underline">
            Explore portfolio
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projectCards.map((project) => (
            <article key={project.title} className="awsp-card overflow-hidden p-0">
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <Image src={`/img/${project.image}`} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-lime-300">{project.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="mb-10">
          <p className="eyebrow">Before & after</p>
          <h2 className="section-heading">Proof that quality workmanship changes outcomes.</h2>
        </div>
        <div className="rounded-[2rem] border border-slate-800 bg-[#0d1820] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid h-72 grid-cols-2 overflow-hidden rounded-2xl border border-slate-700">
              <figure className="relative">
                <Image src="/img/before.webp" alt="Before: rooftop solar panels before the improvement." fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/70 px-3 py-2 text-center text-xs font-semibold uppercase text-white">Before</figcaption>
              </figure>
              <figure className="relative">
                <Image src="/img/after.webp" alt="After: rooftop solar panels after the improvement." fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/70 px-3 py-2 text-center text-xs font-semibold uppercase text-white">After</figcaption>
              </figure>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Case study</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Property refresh and service uplift</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">A practical, layered intervention improved reliability, presentation and day-to-day usability for the client’s property.</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-lime-200"><span className="h-2.5 w-2.5 rounded-full bg-lime-400" /> Before / After comparison</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="mb-10">
          <p className="eyebrow">Customer voice</p>
          <h2 className="section-heading">Trusted by homeowners, businesses and property teams.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="awsp-card">
              <p className="text-base leading-7 text-slate-200">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-slate-800 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.service}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="mb-10">
          <p className="eyebrow">Insights</p>
          <h2 className="section-heading">Advice and practical guidance for safer, smarter property decisions.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {insightCards.map((item) => (
            <article key={item.title} className="awsp-card">
              <div className="relative h-40 overflow-hidden rounded-2xl bg-slate-900">
                <Image src={`/img/${item.image}`} alt={item.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-lime-300">{item.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10">
        <div className="rounded-[2rem] border border-lime-500/30 bg-gradient-to-r from-[#0b1c22] to-[#0d1c2f] p-8 md:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Start today</p>
              <h2 className="section-heading max-w-xl">Tell us what’s happening, upload a photo and let the right team take it from there.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/request" className="awsp-button-primary">Request a Service</Link>
              <Link href="/contact" className="awsp-button-secondary">Contact AWSP</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
