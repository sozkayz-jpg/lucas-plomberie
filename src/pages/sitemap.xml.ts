import type { APIRoute } from "astro";
import { SERVICES, BLOG_ARTICLES } from "../data/company";

const site = "https://lucas-plomberie.fr";

const staticPages = [
  { path: "", priority: "1.0" },
  { path: "/a-propos", priority: "0.6" },
  { path: "/contact", priority: "0.8" },
  { path: "/blog", priority: "0.6" },
  { path: "/mentions-legales", priority: "0.3" },
  { path: "/politique-confidentialite", priority: "0.3" },
];

const servicePages = SERVICES.map((s) => ({
  path: `/services/${s.slug}`,
  priority: "0.7",
}));

const blogPages = BLOG_ARTICLES.map((a) => ({
  path: `/blog/${a.slug}`,
  priority: "0.6",
}));

const allPages = [...staticPages, ...servicePages, ...blogPages];

export const GET: APIRoute = () => {
  const urls = allPages
    .map(
      (page) =>
        `  <url><loc>${site}${page.path}</loc><priority>${page.priority}</priority></url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
};
