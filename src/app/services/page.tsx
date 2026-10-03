import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const solarServices = [
  {
    number: "01",
    title: "Grid-Tied Systems",
    description: "Grid-Tied Systems connect your solar panels directly to the existing utility grid. Generate your own power to reduce electricity bills, and export excess energy where permitted. These reliable, cost-effective systems can reduce your carbon footprint and make sustainable energy more accessible.",
  },
  {
    number: "02",
    title: "Hybrid Systems",
    description: "Hybrid Systems combine grid-tied solar with integrated battery storage. Store surplus solar energy for peak demand or at night, and keep essential power available during outages and load-shedding for greater energy security and independence.",
  },
  {
    number: "03",
    title: "Off-Grid Solutions",
    description: "Achieve energy independence with systems that generate and store electricity using solar panels and battery banks, without a utility-grid connection. Each solution is designed around the demands of remote properties or anyone seeking greater self-sufficiency.",
  },
  {
    number: "04",
    title: "Maintenance & Support",
    description: "Keep your solar system operating efficiently with regular inspections, professional cleaning and performance checks by certified technicians. We also provide troubleshooting, repairs and ongoing customer support to help protect your investment.",
  },
];

const serviceGroups = [
  {
    title: "Repairs",
    id: "repairs",
    description: "When a fault, damage or breakdown affects your property or equipment, AWSP provides quick triage and practical repair support built around the issue and urgency.",
    items: [
      "Electrical issues",
      "Property repairs",
      "Equipment problems",
      "Fault diagnosis",
      "General repairs",
      "Emergency response",
    ],
  },
  {
    title: "Maintenance",
    id: "maintenance",
    description: "Preventative and responsive maintenance keeps properties, systems and assets running reliably, while reducing downtime and surprise failures.",
    items: [
      "Electrical maintenance",
      "Property maintenance",
      "Equipment maintenance",
      "Scheduled inspections",
      "Preventative maintenance",
      "Reactive support",
    ],
  },
  {
    title: "Cleaning",
    id: "cleaning",
    description: "AWSP provides cleaning services designed to keep homes, workspaces and commercial environments functional, presentable and comfortable for daily use.",
    items: [
      "Residential cleaning",
      "Commercial cleaning",
      "Deep cleaning",
      "Move-in / move-out cleaning",
      "Recurring cleaning",
      "Property refresh",
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Solutions</p>
          <h1 className="section-heading">A full-service platform for energy, repairs, maintenance and cleaning.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            AWSP brings together practical service categories into one operating model so clients can request support quickly, manage their property needs and move from assessment to execution with clarity.
          </p>
        </div>

        <section id="solar" className="mt-16 scroll-mt-28">
          <div className="mb-7 max-w-3xl">
            <p className="eyebrow">Solar &amp; Energy</p>
            <h2 className="section-heading">Our Solar Services</h2>
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {solarServices.map((service) => (
              <article key={service.number} className="border-t border-slate-700 pt-5">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-semibold text-lime-300">{service.number}.</span>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-7">
            <p className="eyebrow">More ways we can help</p>
            <h2 className="text-3xl font-semibold text-white">Additional AWSP Services</h2>
          </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {serviceGroups.map((group) => (
            <article key={group.title} id={group.id} className="awsp-card">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-3xl font-semibold text-white">{group.title}</h2>
                <span className="rounded-full border border-lime-500/30 bg-lime-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-lime-200">Service</span>
              </div>
              <p className="text-sm leading-7 text-slate-300">{group.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-lime-400" /> {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        </section>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="border-y border-slate-700 py-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Built for long-term value</p>
            <h2 className="section-heading">Our Commitment To Quality &amp; Reliability</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We believe peace of mind is just as important as power. Every AWSP installation includes warranty coverage for long-term value and trust.
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-white">Product Warranty</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                <li>Minimum 10 years on inverters</li>
                <li>Battery coverage depends on the product</li>
                <li>25+ years on Canadian Solar panels</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Workmanship Warranty</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">1–2 years, depending on the installation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Installation Timeframes</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">From 1–2 days up to one month, depending on system size and location.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 lg:px-10">
        <div className="rounded-[2rem] border border-slate-800 bg-[#0d1820] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Need help now?</p>
              <h2 className="section-heading max-w-xl">Tell AWSP what’s happening and we’ll guide the right next step.</h2>
            </div>
            <Link href="/request" className="awsp-button-primary">Request a Service</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
