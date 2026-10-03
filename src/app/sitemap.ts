import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://awsp.co.za";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/solar`, lastModified: new Date() },
    { url: `${baseUrl}/repairs`, lastModified: new Date() },
    { url: `${baseUrl}/maintenance`, lastModified: new Date() },
    { url: `${baseUrl}/cleaning`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/request`, lastModified: new Date() },
    { url: `${baseUrl}/portal`, lastModified: new Date() },
  ];
}
