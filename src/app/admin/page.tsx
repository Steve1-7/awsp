"use client";

import { useState } from "react";
import { SiteShell } from "@/components/site-shell";

const metrics = [
  { label: "New requests", value: "18" },
  { label: "Active jobs", value: "8" },
  { label: "Pending quotes", value: "6" },
  { label: "Today's appointments", value: "11" },
];

const filters = ["All", "New", "Review", "Quote", "Scheduled", "Completed"];

const records = [
  { id: "AWSP-REQ-000123", client: "A. Mokoena", service: "Repair", status: "New", priority: "High", owner: "Ops Team" },
  { id: "AWSP-REQ-000145", client: "P. Ndlovu", service: "Solar assessment", status: "Review", priority: "Medium", owner: "Energy Team" },
  { id: "AWSP-REQ-000181", client: "L. van der Merwe", service: "Cleaning", status: "Quote", priority: "Low", owner: "Support Team" },
  { id: "AWSP-REQ-000204", client: "C. Smith", service: "Commercial maintenance", status: "Scheduled", priority: "High", owner: "Field Team" },
  { id: "AWSP-REQ-000219", client: "J. Moloi", service: "Property repair", status: "Completed", priority: "Low", owner: "Operations" },
];

export default function AdminDashboardPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const visibleRecords =
    selectedFilter === "All"
      ? records
      : records.filter((record) => record.status === selectedFilter);

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Admin dashboard</p>
            <h1 className="section-heading">Operational overview</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.18em] transition ${
                  selectedFilter === filter
                    ? "border-lime-400 bg-lime-300/10 text-lime-100"
                    : "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-slate-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="awsp-card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.75rem] border border-slate-800 bg-[#0c1820] p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Request queue</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{visibleRecords.length} items</span>
            </div>
            <div className="mt-6 space-y-3">
              {visibleRecords.map((record) => (
                <div key={record.id} className="flex flex-col gap-3 rounded-2xl border border-slate-700 bg-slate-950/70 p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{record.id}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{record.client}</p>
                    <p className="text-sm text-slate-400">{record.service}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:justify-end">
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{record.priority}</span>
                    <span className="rounded-full border border-lime-500/30 bg-lime-300/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-lime-200">{record.status}</span>
                    <span className="text-xs text-slate-400">{record.owner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-800 bg-[#0c1820] p-5">
            <h2 className="text-2xl font-semibold text-white">Dispatch board</h2>
            <div className="mt-6 space-y-4">
              {[
                { lane: "New", items: ["Solar enquiry", "Repair request"] },
                { lane: "Reviewing", items: ["Property issue", "Cleaning assignment"] },
                { lane: "Scheduled", items: ["Service visit"] },
                { lane: "In progress", items: ["Maintenance job"] },
              ].map((lane) => (
                <div key={lane.lane} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-lime-300">{lane.lane}</p>
                  <div className="mt-3 space-y-2">
                    {lane.items.map((item) => (
                      <div key={item} className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
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
