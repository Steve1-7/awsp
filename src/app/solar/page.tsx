import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const solarOptions = [
  { title: "Residential solar", image: "1.0.jpg", alt: "Solar panels installed across a rooftop." },
  { title: "Commercial solar", image: "1.1.jpeg", alt: "Installed solar inverters and battery storage." },
  { title: "Industrial solar", image: "1.9.jpg", alt: "Large-format inverter and battery storage installation." },
  { title: "Hybrid systems", image: "1.2.jpg", alt: "Wall-mounted hybrid inverter with electrical protection equipment." },
  { title: "Off-grid systems", image: "2.2.jpg", alt: "Solar inverter and battery installation." },
  { title: "Battery storage", image: "1.6.jpg", alt: "Battery storage modules installed beside an inverter." },
  { title: "Energy assessment", image: "1.7.jpg", alt: "Installed inverter and electrical control equipment." },
];

export default function SolarPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Solar & energy</p>
          <h1 className="section-heading">Practical solar solutions for homes, businesses and industrial sites.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            AWSP designs energy systems based on your property, usage profile and resilience goals — not a one-size-fits-all pitch.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solarOptions.map((option, index) => (
            <article key={option.title} className="awsp-card overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={`/img/${option.image}`} alt={option.alt} fill loading={index < 4 ? "eager" : "lazy"} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-lime-300">Solution</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{option.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                Explore a tailored approach for performance, savings and reliability based on your site requirements.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-800 bg-[#0d1820] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Energy assessment</p>
              <h2 className="section-heading max-w-xl">Get a practical estimate and discuss the right solar strategy for your property.</h2>
            </div>
            <Link href="/request" className="awsp-button-primary">Get an Energy Assessment</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
