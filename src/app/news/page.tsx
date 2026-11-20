import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { formatDate, getPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "Press releases, milestones and conference appearances from Hallstat Industries.",
  alternates: { canonical: "/news", types: { "application/rss+xml": "/news/rss.xml" } },
};

export default function NewsPage() {
  const posts = getPosts();
  return (
    <>
      <section aria-labelledby="news-title" className="bg-navy text-white">
        <Container className="py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-200">Newsroom</p>
          <h1 id="news-title" className="mt-4 text-display font-bold">
            News
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Press releases, milestones and conference appearances.{" "}
            <a href="/news/rss.xml" className="underline underline-offset-4 hover:text-navy-200">
              RSS feed
            </a>
          </p>
        </Container>
      </section>

      <Container className="py-16 md:py-20">
        {posts.length === 0 ? (
          <p className="max-w-xl text-muted">
            Our first announcements are on the way. In the meantime,{" "}
            <Link href="/contact?topic=media" className="font-semibold text-navy-600 hover:underline">
              media inquiries are welcome
            </Link>
            .
          </p>
        ) : (
          <ol className="divide-y divide-line">
            {posts.map((p) => (
              <li key={p.slug} className="py-8 first:pt-0">
                <article>
                  <time dateTime={p.date} className="text-sm text-muted">
                    {formatDate(p.date)}
                  </time>
                  <h2 className="mt-1 text-2xl font-semibold text-navy">
                    <Link href={`/news/${p.slug}`} className="hover:underline">
                      {p.title}
                    </Link>
                  </h2>
                  {p.description && <p className="mt-2 max-w-3xl text-muted">{p.description}</p>}
                </article>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </>
  );
}
