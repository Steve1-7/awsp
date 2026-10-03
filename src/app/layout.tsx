import type { Metadata } from "next";
import { ImageProtection } from "@/components/image-protection";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWSP | A-Way Solutions & Projects",
  description:
    "Professional energy, repairs, maintenance, and cleaning solutions with a digital service request platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#07141d] text-slate-100">
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
