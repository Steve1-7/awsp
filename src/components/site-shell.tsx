import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AWSP_CONTACT_EMAIL, AWSP_WHATSAPP_URL } from "@/components/request-links";

const navItems = [
  { label: "Solutions", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#07141d]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/img/logo.webp" alt="A-Way Solutions & Projects" width={432} height={126} priority className="h-[55.2px] w-[181.7px] object-contain sm:w-[207px]" />
          </Link>

          <div className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>

          <details className="relative lg:hidden">
            <summary aria-label="Toggle navigation menu" className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="flex w-4 flex-col gap-1">
                <span className="h-0.5 w-full rounded bg-current" />
                <span className="h-0.5 w-full rounded bg-current" />
                <span className="h-0.5 w-full rounded bg-current" />
              </span>
              Menu
            </summary>
            <div className="absolute right-0 top-full z-50 mt-3 w-72 max-w-[calc(100vw-2rem)] rounded-lg border border-slate-700 bg-[#08151d] p-3 shadow-2xl">
              <div className="flex flex-col text-sm text-slate-200">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="rounded-md px-3 py-3 transition hover:bg-slate-800 hover:text-white">
                    {item.label}
                  </Link>
                ))}
                <Link href="/request" className="rounded-md px-3 py-3 transition hover:bg-slate-800 hover:text-white">
                  Request a Service
                </Link>
                <Link href="/contact" className="rounded-md px-3 py-3 transition hover:bg-slate-800 hover:text-white">
                  Get a Quote
                </Link>
              </div>
            </div>
          </details>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/request" className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-white">
              Request a Service
            </Link>
            <Link href="/contact" className="awsp-button-primary px-4 py-2 text-sm">
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-800 bg-[#08151d]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-5 lg:px-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/img/logo.webp" alt="A-Way Solutions & Projects" width={432} height={126} className="h-[55.2px] w-[207px] object-contain" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Practical solutions for energy, property support, repairs and cleaning — delivered with technical clarity and responsive service.
            </p>
            <ul className="mt-5 space-y-2 text-xs leading-5 text-slate-400">
              <li>Level 2 Qualified Installers · P4 Certified</li>
              <li>Company Reg No. 2021/872672/07</li>
              <li>Local expertise in Alberton / Gauteng</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Solutions</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/services">AWSP Solutions</Link></li>
              <li><Link href="/request">Request a Service</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/about">About AWSP</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/portal">Customer Portal</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href={AWSP_WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp: 083 253 9773</a></li>
              <li><a href={`mailto:${AWSP_CONTACT_EMAIL}`} className="transition hover:text-white">{AWSP_CONTACT_EMAIL}</a></li>
              <li>Alberton / Gauteng</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-800 px-6 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 AWSP. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Terms</Link>
            <Link href="/contact">Cookie Policy</Link>
            <a href="https://www.eva-tech-studio.com" target="_blank" rel="noreferrer" className="font-medium text-lime-300 transition hover:text-lime-200">
              Powered by EVA-TECH-STUDIO
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
