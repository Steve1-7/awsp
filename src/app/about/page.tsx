import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const referenceLetters = [
  { title: "Recommendation Letter — J. Geldenhuys", file: "Letter-of-recommendation-J-Geldenhuys.pdf" },
  { title: "Reference Letter", file: "REFERENCE-LETTER.pdf" },
  { title: "Recommendation Letter — Doron Collen", file: "A-Way-Recommendation-Letter-Doron-Collen.pdf" },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">About AWSP</p>
          <h1 className="section-heading">About us.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            AWSP is a practical solutions company focused on energy, property support, repairs and professional cleaning. We assess the problem, engineer the right approach and support the customer through the full journey from first enquiry to completed work.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Where financing is relevant, project discussions may be supported through approved financial partners or lending channels depending on eligibility, project scope and current provider criteria. AWSP does not present financing as a guarantee and each arrangement must be assessed independently.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Assess", "Understand the problem, site conditions and the real need."],
            ["Engineer", "Design the appropriate technical or operational solution."],
            ["Execute", "Complete the work with accountability, quality and clarity."],
            ["Support", "Keep communication, maintenance and follow-up moving after handover."],
          ].map(([title, text]) => (
            <article key={title} className="awsp-card">
              <p className="text-[10px] uppercase tracking-[0.2em] text-lime-300">Process</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 border-y border-slate-700 py-10" aria-labelledby="references-title">
          <div className="max-w-3xl">
            <p className="eyebrow">Client feedback</p>
            <h2 id="references-title" className="section-heading">Recommendation &amp; reference letters</h2>
          </div>
          <ul className="mt-6 divide-y divide-slate-800">
            {referenceLetters.map((letter) => (
              <li key={letter.file}>
                <a href={`/pdf/${letter.file}`} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 py-4 text-sm font-medium text-slate-200 transition hover:text-lime-300">
                  <span>{letter.title}</span>
                  <span aria-hidden="true">PDF ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 rounded-[2rem] border border-slate-800 bg-[#0d1820] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Need support?</p>
              <h2 className="section-heading max-w-xl">Talk to AWSP about your project, repair, maintenance or cleaning needs.</h2>
            </div>
            <Link href="/request" className="awsp-button-primary">Request a Service</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
