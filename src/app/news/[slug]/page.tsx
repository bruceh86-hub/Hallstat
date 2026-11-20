import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { founder, organizationId, personId } from "@/content/founder";
import { site } from "@/config/site";
import { formatDate, getPost, getPosts } from "@/lib/news";

export const dynamicParams = false;
export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [`${site.url}${founder.path}`],
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = `${site.url}/news/${post.slug}`;
  const isFounder = post.author === founder.name;

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          mainEntityOfPage: url,
          url,
          ...(post.source ? { isBasedOn: post.source } : {}),
          ...(post.image ? { image: [`${site.url}${post.image}`] } : {}),
          author: isFounder
            ? { "@type": "Person", "@id": personId, name: founder.name, url: `${site.url}${founder.path}` }
            : { "@type": "Person", name: post.author },
          publisher: {
            "@type": "Organization",
            "@id": organizationId,
            name: site.legalName,
            logo: { "@type": "ImageObject", url: `${site.url}/brand/hallstat-logo-navy.png` },
          },
        }}
      />
      <header className="bg-navy text-white">
        <Container className="py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-200">
            <Link href="/news" className="hover:underline">
              News
            </Link>
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
          <p className="mt-6 text-white/80">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · By{" "}
            {isFounder ? (
              <Link href={founder.path} rel="author" className="text-white underline underline-offset-4 hover:text-navy-200">
                {founder.name}
              </Link>
            ) : (
              post.author
            )}
          </p>
          {post.source && (
            <a
              href={post.source}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              View original press release{post.sourceName ? ` on ${post.sourceName}` : ""}
              <ExternalLink aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </Container>
      </header>
      <Container className="py-16 md:py-20">
        <div className="max-w-3xl space-y-5 text-[1.0625rem] leading-relaxed text-ink [&_a]:font-semibold [&_a]:text-navy-600 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:text-xl [&_blockquote]:font-semibold [&_blockquote]:text-navy [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_li]:ml-6 [&_ol]:list-decimal [&_ul]:list-disc">
          <MDXRemote source={post.content} />
        </div>
        <p className="mt-12 border-t border-line pt-6 text-sm text-muted">{site.disclaimer}</p>
      </Container>
    </article>
  );
}
