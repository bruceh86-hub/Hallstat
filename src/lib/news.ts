import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/** Press releases live in content/news/YYYY-MM-DD-slug.mdx (see content/news/README.md). */
const DIR = path.join(process.cwd(), "content/news");

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  description: string;
  author: string;
  image?: string;
  content: string;
};

export function getPosts(): Post[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
      const base = file.replace(/\.mdx$/, "");
      const date = String(data.date instanceof Date ? data.date.toISOString().slice(0, 10) : (data.date ?? base.slice(0, 10)));
      return {
        slug: base.replace(/^\d{4}-\d{2}-\d{2}-/, ""),
        title: String(data.title ?? base),
        date,
        description: String(data.description ?? ""),
        author: String(data.author ?? "Bruce Huici"),
        image: data.image ? String(data.image) : undefined,
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
