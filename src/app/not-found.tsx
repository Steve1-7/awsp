import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
        <p className="eyebrow">404</p>
        <h1 className="section-heading text-5xl">This page could not be found.</h1>
        <p className="mt-6 text-lg text-slate-300">The route you’re looking for may have moved or may not exist yet.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="awsp-button-primary">Return home</Link>
          <Link href="/request" className="awsp-button-secondary">Request service</Link>
        </div>
      </section>
    </SiteShell>
  );
}
