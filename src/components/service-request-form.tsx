"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { createRequestLinks } from "@/components/request-links";

type UploadItem = {
  id: number;
  name: string;
  size: string;
  type: string;
  preview?: string;
};

const serviceSteps = ["Service Type", "Problem", "Photos", "Property", "Customer", "Review"];
const serviceOptions = ["Solar / Energy", "Repair", "Maintenance", "Cleaning", "Other"];
const urgencyOptions = ["Emergency", "Urgent", "Normal", "Planned"];
const propertyTypes = ["Residential", "Commercial", "Industrial", "Office", "Retail", "Other"];

const issueMap: Record<string, string[]> = {
  "Solar / Energy": ["Solar Installation", "Energy Assessment", "Battery Storage", "Hybrid System", "Off-Grid System", "Commercial Energy", "Other"],
  Repair: ["Electrical", "Property", "Equipment", "Water", "Other", "I’m not sure"],
  Maintenance: ["Electrical maintenance", "Property maintenance", "Equipment maintenance", "Scheduled inspection", "Preventative maintenance", "Other"],
  Cleaning: ["Home", "Office", "Commercial property", "Deep cleaning", "Recurring cleaning", "Other"],
  Other: ["General enquiry", "Support", "Quote request", "Other"],
};

export function ServiceRequestForm() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("Repair");
  const [issue, setIssue] = useState("Electrical");
  const [urgency, setUrgency] = useState("Urgent");
  const [details, setDetails] = useState("");
  const [photos, setPhotos] = useState<UploadItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [propertyType, setPropertyType] = useState("Residential");
  const [address, setAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [requestLinks, setRequestLinks] = useState<ReturnType<typeof createRequestLinks> | null>(null);

  const currentIssues = issueMap[serviceType] ?? issueMap["Other"];

  const nextStep = () => setStep((current) => Math.min(current + 1, 6));
  const previousStep = () => setStep((current) => Math.max(current - 1, 1));

  const addFiles = (incomingFiles: File[]) => {
    const mapped = incomingFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      type: file.type,
      preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
    }));
    setPhotos((current) => [...current, ...mapped]);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const incomingFiles = Array.from(event.target.files ?? []);
    if (incomingFiles.length > 0) {
      addFiles(incomingFiles);
    }
    event.target.value = "";
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const incomingFiles = Array.from(event.dataTransfer.files ?? []);
    if (incomingFiles.length > 0) {
      addFiles(incomingFiles);
    }
  };

  const removePhoto = (id: number) => {
    setPhotos((current) => current.filter((item) => item.id !== id));
  };

  const totalSteps = 6;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < totalSteps) {
      nextStep();
      return;
    }

    const requestAddress = [address, suburb, city, postalCode].filter(Boolean).join(", ") || "Not provided";
    const message = [
      `Service: ${serviceType}`,
      `Issue: ${issue}`,
      `Urgency: ${urgency}`,
      `Details: ${details || "Not provided"}`,
      `Property type: ${propertyType}`,
      `Address: ${requestAddress}`,
      `Name: ${name || "Not provided"}`,
      `Customer phone: ${phone || "Not provided"}`,
      `Customer email: ${email || "Not provided"}`,
      `Preferred contact: ${contactMethod}`,
      `Photos to attach: ${photos.length > 0 ? photos.map((photo) => photo.name).join(", ") : "None"}`,
    ].join("\n");

    setRequestLinks(createRequestLinks(`AWSP service request - ${serviceType}`, message));
  };

  if (requestLinks) {
    return (
      <div className="rounded-[2rem] border border-slate-800 bg-[#0b1720] p-8 text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <p className="eyebrow">Ready to send</p>
        <h2 className="section-heading text-4xl">Send your service request to AWSP.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Use both options below to send your request by WhatsApp and email. The details are prefilled, but you must confirm the message in each app.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={requestLinks.whatsapp} target="_blank" rel="noreferrer" className="awsp-button-primary">Continue with WhatsApp</a>
          <a href={requestLinks.email} className="awsp-button-secondary">Continue with email</a>
        </div>
        {photos.length > 0 && <p className="mt-5 text-sm text-slate-400">Attach your selected photos after WhatsApp or email opens; this form does not upload files.</p>}
        <div className="mt-6"><Link href="/" className="text-sm text-lime-300 underline-offset-4 hover:underline">Return Home</Link></div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-slate-800 bg-[#0b1720] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Service request</p>
          <h2 className="text-3xl font-semibold text-white">Step {step} of {totalSteps}</h2>
        </div>
        <div className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
          {serviceSteps[step - 1]}
        </div>
      </div>

      <div className="mb-7 h-2 w-full rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-lime-400" style={{ width: `${(step / totalSteps) * 100}%` }} />
      </div>

      <form className="space-y-7" onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label className="mb-4 block text-sm font-medium text-slate-200">What type of service do you need?</label>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {serviceOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => { setServiceType(option); setIssue(issueMap[option]?.[0] ?? "Other"); }}
                  className={`rounded-2xl border px-4 py-5 text-left transition ${serviceType === option ? "border-lime-400 bg-lime-300/10 text-lime-100" : "border-slate-700 bg-slate-950/60 text-slate-100 hover:border-slate-500"}`}
                >
                  <p className="text-lg font-semibold">{option}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="mb-4 block text-sm font-medium text-slate-200">Tell us what you need help with.</label>
            <textarea
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Describe the issue, requirement or problem..."
              className="min-h-[160px] w-full rounded-2xl border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-lime-400"
            />

            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-slate-200">What type of {serviceType.toLowerCase()} service?</p>
              <div className="flex flex-wrap gap-2">
                {currentIssues.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setIssue(option)}
                    className={`rounded-full border px-3 py-2 text-sm transition ${issue === option ? "border-lime-400 bg-lime-300/10 text-lime-100" : "border-slate-700 bg-slate-900 text-slate-200"}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-slate-200">How urgent is this?</p>
              <div className="flex flex-wrap gap-2">
                {urgencyOptions.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setUrgency(option)}
                    className={`rounded-full border px-3 py-2 text-sm transition ${urgency === option ? "border-lime-400 bg-lime-300/10 text-lime-100" : "border-slate-700 bg-slate-900 text-slate-200"}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="mb-4 block text-sm font-medium text-slate-200">Upload photos or documents.</label>
            <div
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`rounded-[1.5rem] border-2 border-dashed p-6 transition ${
                isDragging ? "border-lime-400 bg-lime-300/10" : "border-slate-700 bg-slate-950/60"
              }`}
            >
              <label className="flex cursor-pointer flex-col items-center gap-3 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lime-300/15 text-3xl text-lime-200">＋</span>
                <span className="text-lg font-semibold text-white">Add photos</span>
                <span className="text-sm text-slate-400">Drag images here or browse files</span>
                <input type="file" multiple accept="image/*,.pdf" onChange={handlePhotoUpload} className="hidden" />
              </label>
            </div>

            {photos.length > 0 && (
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {photos.map((photo) => (
                  <div key={photo.id} className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70">
                    {photo.preview ? (
                      <Image src={photo.preview} alt={photo.name} width={640} height={420} unoptimized className="h-28 w-full object-cover" />
                    ) : (
                      <div className="flex h-28 items-center justify-center bg-slate-800 text-xs uppercase tracking-[0.2em] text-slate-300">{photo.type}</div>
                    )}
                    <div className="space-y-2 p-3 text-xs text-slate-300">
                      <p className="truncate font-medium text-white">{photo.name}</p>
                      <p>{photo.size}</p>
                      <button type="button" onClick={() => removePhoto(photo.id)} className="text-lime-300 underline-offset-4 hover:underline">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm text-slate-200">
              Property type
              <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white">
                {propertyTypes.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <label className="block text-sm text-slate-200">
              Property address
              <input value={address} onChange={(event) => setAddress(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="Street address" />
            </label>
            <label className="block text-sm text-slate-200">
              Suburb
              <input value={suburb} onChange={(event) => setSuburb(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="Suburb" />
            </label>
            <label className="block text-sm text-slate-200">
              City
              <input value={city} onChange={(event) => setCity(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="City" />
            </label>
            <label className="block text-sm text-slate-200 md:col-span-2">
              Postal code
              <input value={postalCode} onChange={(event) => setPostalCode(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="Postal code" />
            </label>
          </div>
        )}

        {step === 5 && (
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm text-slate-200">
              Full name
              <input value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="Your name" />
            </label>
            <label className="block text-sm text-slate-200">
              Phone number
              <input value={phone} onChange={(event) => setPhone(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="+27..." />
            </label>
            <label className="block text-sm text-slate-200 md:col-span-2">
              Email address
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white" placeholder="you@example.com" />
            </label>
            <label className="block text-sm text-slate-200 md:col-span-2">
              Preferred contact method
              <select value={contactMethod} onChange={(event) => setContactMethod(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white">
                <option>WhatsApp</option>
                <option>Phone</option>
                <option>Email</option>
              </select>
            </label>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">summary</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Service</p><p className="mt-2 text-lg font-semibold text-white">{serviceType}</p></div>
                <div><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Issue</p><p className="mt-2 text-lg font-semibold text-white">{issue}</p></div>
                <div><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Urgency</p><p className="mt-2 text-lg font-semibold text-white">{urgency}</p></div>
                <div><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Property</p><p className="mt-2 text-lg font-semibold text-white">{propertyType}</p></div>
                <div className="md:col-span-2"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p><p className="mt-2 text-lg font-semibold text-white">{address || "Not provided"}, {suburb || "Suburb"}, {city || "City"}</p></div>
                <div className="md:col-span-2"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Contact</p><p className="mt-2 text-lg font-semibold text-white">{name || "Customer"} • {phone || "Phone"} • {email || "Email"}</p></div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:justify-between">
          {step > 1 && (
            <button type="button" onClick={previousStep} className="awsp-button-secondary">
              Back
            </button>
          )}
          <div className="ml-auto flex gap-3">
            {step < totalSteps ? (
              <button type="submit" className="awsp-button-primary">Continue</button>
            ) : (
              <button type="submit" className="awsp-button-primary">Submit Service Request</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
