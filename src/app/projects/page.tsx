"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiteShell } from "@/components/site-shell";

const projectCategories = [
  "All",
  "Solar",
  "Residential",
  "Commercial",
  "Industrial",
  "Maintenance",
  "Repairs",
  "Cleaning",
];

const projects = [
  { title: "Commercial Solar Retrofit", categories: ["Solar", "Commercial"], location: "Johannesburg", scope: "Energy improvement", image: "roof.png", imageAlt: "Solar panels installed across a commercial rooftop." },
  { title: "Residential Hybrid Upgrade", categories: ["Solar", "Residential"], location: "Pretoria", scope: "Energy resilience", image: "high.webp", imageAlt: "Residential hybrid solar energy installation." },
  { title: "Property Maintenance Response", categories: ["Maintenance"], location: "Sandton", scope: "Preventative support", image: "before.webp", imageAlt: "Solar panels installed across a residential rooftop." },
  { title: "Electrical Repair Intervention", categories: ["Repairs"], location: "Centurion", scope: "Fault diagnosis", image: "ele.webp", imageAlt: "Electrical repair and maintenance work." },
  { title: "Office Deep Cleaning Programme", categories: ["Cleaning", "Commercial"], location: "Midrand", scope: "Commercial cleaning", image: "after.webp", imageAlt: "Clean solar panels installed across a rooftop." },
  { title: "Industrial Energy Review", categories: ["Solar", "Industrial"], location: "Germiston", scope: "Energy assessment", image: "1.2.jpg", imageAlt: "Hybrid solar inverter and electrical protection equipment." },
  { title: "Rooftop Solar Installation & Panel Cleaning", categories: ["Solar", "Residential", "Cleaning"], location: "Alberton / Gauteng", scope: "Roof-mounted PV array and panel care", image: "1.0.jpg", imageAlt: "Solar panels installed across a rooftop." },
];

const projectGallery = [
  { image: "1.0.jpg", caption: "Rooftop solar panel array", alt: "Solar panels installed across a rooftop." },
  { image: "1.1.jpeg", caption: "Dual inverter and battery installation", alt: "Two solar inverters and battery units installed indoors." },
  { image: "1.2.jpg", caption: "Hybrid inverter and electrical protection", alt: "Wall-mounted hybrid inverter with electrical protection equipment." },
  { image: "1.3.jpg", caption: "Deye inverter and battery installation", alt: "Deye solar inverter and battery system." },
  { image: "1.4.jpg", caption: "Inverter and home storage system", alt: "Wall-mounted solar inverter with battery storage." },
  { image: "1.5.jpg", caption: "Inverter with EEnovance battery", alt: "Solar inverter and EEnovance battery installation." },
  { image: "1.6.jpg", caption: "Modular battery storage", alt: "Stacked battery modules connected to an inverter." },
  { image: "1.7.jpg", caption: "Inverter and battery system", alt: "Installed solar inverter and battery equipment." },
  { image: "1.9.jpg", caption: "Large-format battery installation", alt: "Solar inverter beside a modular battery bank." },
  { image: "2.2.jpg", caption: "Hybrid solar equipment", alt: "Solar inverter and battery installation." },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(activeCategory));

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Projects</p>
            <h1 className="section-heading">Work completed across energy, property and service support.</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  activeCategory === category
                    ? "border-lime-300 bg-lime-300 text-slate-950"
                    : "border-slate-700 bg-slate-950/80 text-slate-300 hover:border-lime-300/60 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="awsp-card group overflow-hidden p-0 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-lime-300/40 hover:shadow-xl motion-reduce:transition-none">
              <div className="relative h-52 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(166,243,72,0.2),_rgba(15,23,30,0.85)_40%,_rgba(9,17,22,1)_100%)]">
                {project.image && <Image src={`/img/${project.image}`} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />}
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-lime-300">{project.categories.join(" · ")}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{project.location}</p>
                <p className="mt-2 text-sm text-slate-400">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16" aria-labelledby="project-gallery-title">
          <div className="mb-7 max-w-3xl">
            <p className="eyebrow">Installation photos</p>
            <h2 id="project-gallery-title" className="section-heading">Solar &amp; energy gallery</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Rooftop panels, inverter systems and battery storage from AWSP installations.</p>
          </div>
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projectGallery.map((item) => (
              <figure key={item.image}>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <Image src={`/img/${item.image}`} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 hover:scale-105" />
                </div>
                <figcaption className="mt-3 text-sm text-slate-200">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-slate-800 bg-[#0d1820] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Request similar support</p>
              <h2 className="section-heading max-w-xl">Need a comparable solution for your property or site?</h2>
            </div>
            <Link href="/request" className="awsp-button-primary">Request a Service</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
