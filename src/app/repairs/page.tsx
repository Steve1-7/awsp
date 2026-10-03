import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const repairTypes = [
  "Electrical issues",
  "Property repairs",
  "Fault diagnosis",
  "General repairs",
  "Equipment problems",
  "Emergency response",
];

export default function RepairsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Repairs</p>
          <h1 className="section-heading">Fast diagnostic support for electrical and property issues.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Upload a photo, explain what is happening and let AWSP triage the issue quickly with the right next step.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {repairTypes.map((type) => (
            <article key={type} className="awsp-card">
              <p className="text-[10px] uppercase tracking-[0.2em] text-lime-300">Service</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{type}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Clear fault handling, practical next steps and photo-led communication built for speed and clarity.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-800 bg-[#0d1820] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Report a problem</p>
              <h2 className="section-heading max-w-xl">Need support for a fault or property issue? Submit the details and photos in minutes.</h2>
            </div>
            <Link href="/request" className="awsp-button-primary">Report a Problem</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
