import { ServiceRequestForm } from "@/components/service-request-form";
import { SiteShell } from "@/components/site-shell";

export default function RequestPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="mb-10">
          <p className="eyebrow">Request a service</p>
          <h1 className="section-heading max-w-3xl">Something wrong? Take a photo, tell us what is happening, and let the right team handle it.</h1>
        </div>
        <ServiceRequestForm />
      </section>
    </SiteShell>
  );
}
