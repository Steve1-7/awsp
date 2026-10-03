import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const maintenanceTypes = [
  "Electrical maintenance",
  "Property maintenance",
  "Equipment maintenance",
  "Scheduled inspections",
  "Preventative maintenance",
  "Reactive support",
];

export default function MaintenancePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Maintenance</p>
          <h1 className="section-heading">Preventative and responsive maintenance for reliable property performance.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            AWSP helps property owners and businesses stay ahead of faults, deterioration and operational disruption.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {maintenanceTypes.map((type) => (
            <article key={type} className="awsp-card">
              <p className="text-[10px] uppercase tracking-[0.2em] text-lime-300">Support</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{type}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Planned care, scheduled reviews and efficient remedy when issues arise.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-800 bg-[#0d1820] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Book maintenance</p>
              <h2 className="section-heading max-w-xl">Keep your property running smoothly with planned support and responsive follow-up.</h2>
            </div>
            <Link href="/request" className="awsp-button-primary">Book Maintenance</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
