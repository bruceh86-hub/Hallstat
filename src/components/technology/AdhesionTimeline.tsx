import Image from "next/image";
import { adhesionTimeline } from "@/content/technology";
import timelineImg from "../../../public/images/product/adhesion-timeline.jpg";

export function AdhesionTimeline() {
  return (
    <section aria-labelledby="timeline-title" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">Why the surface matters</p>
        <h2 id="timeline-title" className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          How bacteria colonize a standard catheter
        </h2>
        <Image
          src={timelineImg}
          alt=""
          aria-hidden
          placeholder="blur"
          sizes="(min-width: 1152px) 1100px, 100vw"
          className="mt-10 hidden h-auto w-full md:block"
        />
        <ol className="mt-6 grid gap-4 md:grid-cols-5">
          {adhesionTimeline.map((step, i) => (
            <li key={i} className="rounded-md border border-line p-4 md:border-0 md:p-0 md:text-center">
              <p className="font-semibold text-navy">{step.when}</p>
              <p className="mt-1 text-sm text-muted">{step.what}</p>
            </li>
          ))}
        </ol>
        {/* TODO(owner): replace with a peer-reviewed citation for the adhesion timeline. */}
        <p className="mt-6 text-xs text-muted">Source: TODO: add literature citation for this timeline.</p>
      </div>
    </section>
  );
}
