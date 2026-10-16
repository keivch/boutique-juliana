import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1ea",
    theme_color: "#6b2d3c",
    lang: site.language,
    categories: ["shopping", "lifestyle"],
    icons: [
      {
        src: site.logo,
        sizes: "1254x1254",
        type: "image/jpeg",
      },
    ],
  };
}
