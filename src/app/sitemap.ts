import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getPosts } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/technology", priority: 0.9 },
    { path: "/studies", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/about/bruce-huici", priority: 0.8 },
    { path: "/news", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/legal/privacy", priority: 0.2 },
    { path: "/legal/terms", priority: 0.2 },
    { path: "/legal/accessibility", priority: 0.2 },
  ];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p.path}`, priority: p.priority })),
    ...getPosts().map((p) => ({ url: `${site.url}/news/${p.slug}`, lastModified: p.date, priority: 0.6 })),
  ];
}
