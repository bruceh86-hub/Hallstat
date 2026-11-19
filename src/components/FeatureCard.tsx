import Link from "next/link";
import type { Study } from "@/content/studies";

export function FeatureCard({ study }: { study: Study }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-white p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy">{study.tag}</span>
        {study.kind === "internal" && (
          <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">Internal testing</span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-navy">{study.title}</h3>
      <p className="mt-1 text-sm text-muted">
        <cite className="not-italic">{study.journal}</cite> · {study.year}
      </p>
      <p className="mt-4 flex-1 text-muted">{study.takeaway}</p>
      <Link
        href={`/studies#${study.slug}`}
        className="mt-6 font-semibold text-accent-strong hover:underline"
        aria-label={`Read more about “${study.title}”`}
      >
        Read more →
      </Link>
    </article>
  );
}
