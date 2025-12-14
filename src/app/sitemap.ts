import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://felipealmeida.github.io/hrservicosprediais",
      lastModified: new Date(),
    },
  ];
}
