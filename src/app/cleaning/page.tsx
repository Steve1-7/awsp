import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const cleaningTypes = [
  "Residential cleaning",
  "Commercial cleaning",
  "Deep cleaning",
  "Move-in / move-out cleaning",
  "Recurring cleaning",
  "Property refresh",
];

export default function CleaningPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Cleaning</p>
          <h1 className="section-heading">Reliable cleaning services for homes, offices and commercial spaces.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            From routine property care to deeper cleaning programmes, AWSP helps keep spaces functional, welcoming and presentation-ready.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cleaningTypes.map((type) => (
            <article key={type} className="awsp-card">
              <p className="text-[10px] uppercase tracking-[0.2em] text-lime-300">Cleaning</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{type}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Flexible scheduling and practical cleaning care designed around your property and routines.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-800 bg-[#0d1820] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Request cleaning</p>
              <h2 className="section-heading max-w-xl">Book a cleaning service or request a tailored quote for your property.</h2>
            </div>
            <Link href="/request" className="awsp-button-primary">Request Cleaning</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
