"use client";

import { useMemo, useState } from "react";

const propertyOptions = [
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Industrial", label: "Industrial" },
  { value: "Office", label: "Office" },
];

export function EnergyCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(2800);
  const [propertyType, setPropertyType] = useState("Residential");
  const [independence, setIndependence] = useState(75);
  const [batteryRequired, setBatteryRequired] = useState(true);

  const results = useMemo(() => {
    const baseFactor = propertyType === "Industrial" ? 1.9 : propertyType === "Commercial" ? 1.5 : 1.1;
    const systemSize = Math.max(4, Math.round((monthlyBill / 300) * (independence / 70) * baseFactor));
    const estimatedSavings = Math.round(monthlyBill * (independence / 100) * 0.72);
    const batterySetup = batteryRequired ? "Recommended for peak-shaving and backup resilience" : "Battery optional depending on outage profile";

    return {
      systemSize,
      estimatedSavings,
      estimatedIndependence: independence,
      batterySetup,
      range: `R ${Math.round(systemSize * 18000).toLocaleString()} - R ${Math.round(systemSize * 28000).toLocaleString()}`,
    };
  }, [batteryRequired, independence, monthlyBill, propertyType]);

  return (
    <div className="rounded-[1.5rem] border border-slate-800 bg-[#0b1720] p-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Monthly electricity bill
          <input
            type="number"
            min={0}
            value={monthlyBill}
            onChange={(event) => setMonthlyBill(Number(event.target.value || 0))}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none ring-0 transition focus:border-lime-400"
          />
        </label>

        <label className="block text-sm text-slate-300">
          Property type
          <select
            value={propertyType}
            onChange={(event) => setPropertyType(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-lime-400"
          >
            {propertyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm text-slate-300">
          Desired energy independence
          <input
            type="range"
            min={25}
            max={100}
            value={independence}
            onChange={(event) => setIndependence(Number(event.target.value))}
            className="mt-3 w-full accent-lime-400"
          />
          <span className="mt-2 block text-lime-300">{independence}%</span>
        </label>

        <div className="flex items-end">
          <label className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-slate-300">
            Battery required?
            <input
              type="checkbox"
              checked={batteryRequired}
              onChange={(event) => setBatteryRequired(event.target.checked)}
              className="h-4 w-4 accent-lime-400"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Estimated system size</p>
          <p className="mt-2 text-2xl font-semibold text-white">{results.systemSize} kW</p>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Estimated savings</p>
          <p className="mt-2 text-2xl font-semibold text-white">R {results.estimatedSavings.toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Estimated independence</p>
          <p className="mt-2 text-2xl font-semibold text-white">{results.estimatedIndependence}%</p>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Battery recommendation</p>
          <p className="mt-2 text-sm leading-6 text-slate-200">{results.batterySetup}</p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-lime-500/30 bg-lime-300/10 p-4 text-sm text-lime-100">
        Estimated investment range: <span className="font-semibold">{results.range}</span>
      </div>
    </div>
  );
}
