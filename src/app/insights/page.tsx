import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";

const articles = [
  { title: "Solar battery planning for load shedding resilience", category: "Solar", image: "1.6.jpg", imageAlt: "Modular battery storage connected to a solar energy system." },
  { title: "Preventative maintenance checklist for home systems", category: "Maintenance", image: "1.0.jpg", imageAlt: "Solar panels installed across a rooftop." },
  { title: "How to prepare your property for commercial cleaning", category: "Cleaning", image: "after.webp", imageAlt: "Rooftop solar panels after cleaning." },
  { title: "When repairs are urgent and when they can be planned", category: "Repairs", image: "ele.webp", imageAlt: "Electrical repair and maintenance work." },
  { title: "Energy efficiency ideas for higher monthly savings", category: "Energy", image: "1.4.jpg", imageAlt: "Wall-mounted solar inverter with battery storage." },
  { title: "What to look for before approving a quote", category: "Company", image: "1.1.jpeg", imageAlt: "Solar inverters and battery units installed indoors." },
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
              <div className="relative h-40 overflow-hidden rounded-2xl bg-slate-900">
                <Image src={`/img/${article.image}`} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
              </div>
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
