import Link from "next/link";
import type { StudyCard } from "@/content/home";
import { cn } from "@/lib/utils";

export function FeatureCard({ study }: { study: StudyCard }) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border border-line bg-white p-6",
        study.todo && "border-dashed border-amber-500",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy">{study.tag}</span>
        {study.kind === "internal" && (
          <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">Internal testing</span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-navy">{study.title}</h3>
      <p className="mt-1 text-sm text-muted">
        {study.journal} · {study.year}
      </p>
      <p className="mt-4 flex-1 text-muted">{study.takeaway}</p>
      <Link
        href={`/studies#${study.slug}`}
        className="mt-6 font-semibold text-accent-strong hover:underline"
        aria-label={`Read more: ${study.tag}`}
      >
        Read more →
      </Link>
    </article>
  );
}
