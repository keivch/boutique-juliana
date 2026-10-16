import type { MetadataRoute } from "next";
import { absoluteUrl, siteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
