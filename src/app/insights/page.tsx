import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const articles = [
  { title: "Solar battery planning for load shedding resilience", category: "Solar" },
  { title: "Preventative maintenance checklist for home systems", category: "Maintenance" },
  { title: "How to prepare your property for commercial cleaning", category: "Cleaning" },
  { title: "When repairs are urgent and when they can be planned", category: "Repairs" },
  { title: "Energy efficiency ideas for higher monthly savings", category: "Energy" },
  { title: "What to look for before approving a quote", category: "Company" },
];

export default function InsightsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Insights</p>
          <h1 className="section-heading">Useful guidance for energy, service and property care decisions.</h1>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="awsp-card">
              <div className="h-40 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(166,243,72,0.2),_rgba(18,24,31,0.9)_35%,_rgba(9,15,20,1)_100%)]" />
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-lime-300">{article.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{article.title}</h2>
              <Link href="/contact" className="mt-5 inline-flex text-sm font-medium text-lime-300 underline-offset-4 hover:underline">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
