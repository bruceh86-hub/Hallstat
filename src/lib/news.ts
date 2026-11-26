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
  /** Link to the originally distributed release (e.g. a wire service). */
  source?: string;
  sourceName?: string;
  /** Further verified copies of the release on distribution services. */
  alsoPublished: { name: string; url: string }[];
  /** Related pages shown under the release (founder, technology, articles). */
  related: { label: string; url: string; note?: string }[];
  content: string;
};

const list = <T,>(v: unknown, pick: (o: Record<string, unknown>) => T | null): T[] =>
  Array.isArray(v) ? v.map((o) => (o && typeof o === "object" ? pick(o as Record<string, unknown>) : null)).filter((x): x is T => x !== null) : [];

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
        source: data.source ? String(data.source) : undefined,
        sourceName: data.sourceName ? String(data.sourceName) : undefined,
        alsoPublished: list(data.alsoPublished, (o) =>
          o.name && o.url ? { name: String(o.name), url: String(o.url) } : null,
        ),
        related: list(data.related, (o) =>
          o.label && o.url ? { label: String(o.label), url: String(o.url), ...(o.note ? { note: String(o.note) } : {}) } : null,
        ),
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
