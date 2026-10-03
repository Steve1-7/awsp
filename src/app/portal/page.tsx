import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const stats = [
  { label: "Active requests", value: "5" },
  { label: "Upcoming appointments", value: "2" },
  { label: "Pending quotes", value: "1" },
  { label: "Completed jobs", value: "18" },
];

const requestTimeline = [
  { label: "Request submitted", time: "Today • 09:10", active: true },
  { label: "Request reviewed", time: "Today • 10:25", active: true },
  { label: "Technician assigned", time: "Tomorrow • 08:00", active: true },
  { label: "Appointment scheduled", time: "Pending", active: false },
  { label: "Work in progress", time: "Pending", active: false },
  { label: "Completed", time: "Pending", active: false },
];

const recentRequests = [
  { id: "AWSP-REQ-000123", service: "Repair", status: "Under review", date: "Today", progress: 35 },
  { id: "AWSP-REQ-000118", service: "Solar assessment", status: "Scheduled", date: "2 days ago", progress: 68 },
  { id: "AWSP-REQ-000103", service: "Cleaning", status: "Completed", date: "5 days ago", progress: 100 },
];

export default function PortalPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Customer portal</p>
            <h1 className="section-heading">Welcome back.</h1>
          </div>
          <Link href="/request" className="awsp-button-primary">New Service Request</Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="awsp-card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="awsp-card">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white">Recent requests</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">3 active</span>
            </div>
            <div className="mt-6 space-y-4">
              {recentRequests.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.id}</p>
                      <p className="mt-1 text-lg font-semibold text-white">{item.service}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-lime-500/30 bg-lime-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-lime-200">{item.status}</span>
                      <span className="text-sm text-slate-400">{item.date}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 flex justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-lime-400" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="awsp-card">
            <h2 className="text-2xl font-semibold text-white">Request timeline</h2>
            <div className="mt-6 space-y-4">
              {requestTimeline.map((item, index) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${item.active ? "bg-lime-300/20 text-lime-200" : "bg-slate-800 text-slate-500"}`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 border-l border-slate-700 pl-4 pb-4">
                    <p className="text-base font-medium text-white">{item.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
