import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { studies, topics } from "@/content/studies";

export const metadata: Metadata = {
  title: "Studies",
  description:
    "Peer-reviewed research on Foley catheter biofilm, routes of infection, catheter-related bladder trauma and closed drainage — the clinical problems the Hallstat system is designed to address.",
  alternates: { canonical: "/studies" },
};

export default function StudiesPage() {
  return (
    <>
      <section aria-labelledby="studies-title" className="bg-navy text-white">
        <Container className="py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Studies</p>
          <h1 id="studies-title" className="mt-4 max-w-3xl text-display font-bold">
            The research behind the problem
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Published, peer-reviewed research on how catheter-associated infections and injuries happen. These studies
            describe the clinical problem. They did not test the Hallstat system.
          </p>
        </Container>
      </section>

      <nav aria-label="Study topics" className="sticky top-16 z-40 border-b border-line bg-white/95 backdrop-blur">
        <Container>
          <ul className="-mx-2 flex gap-1 overflow-x-auto py-2 text-sm font-semibold">
            {topics.map((t) => (
              <li key={t.id} className="shrink-0">
                <a href={`#${t.id}`} className="block rounded-md px-3 py-2 text-navy hover:bg-mist">
                  {t.label}
                </a>
              </li>
            ))}
            <li className="shrink-0">
              <a href="#internal-testing" className="block rounded-md px-3 py-2 text-muted hover:bg-mist">
                Internal testing
              </a>
            </li>
          </ul>
        </Container>
      </nav>

      {topics.map((t, i) => (
        <section
          key={t.id}
          id={t.id}
          aria-labelledby={`${t.id}-title`}
          className={i % 2 === 1 ? "scroll-mt-32 bg-mist py-16 md:py-20" : "scroll-mt-32 py-16 md:py-20"}
        >
          <Container>
            <h2 id={`${t.id}-title`} className="text-3xl font-bold tracking-tight">
              {t.label}
            </h2>
            <p className="mt-2 max-w-2xl text-muted">{t.intro}</p>
            <ol className="mt-8 space-y-5">
              {studies
                .filter((s) => s.topic === t.id)
                .map((s) => (
                  <li
                    key={s.slug}
                    id={s.slug}
                    className="scroll-mt-36 rounded-xl border border-line bg-white p-6 target:ring-2 target:ring-accent md:p-8"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-strong">{s.design}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-navy">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted">
                      {s.authors}. <cite className="italic">{s.journal}</cite>, {s.year}.
                    </p>
                    <p className="mt-4 max-w-3xl">{s.takeaway}</p>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-strong hover:underline"
                    >
                      Read the source
                      <ExternalLink aria-hidden className="size-4" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
            </ol>
          </Container>
        </section>
      ))}

      <section id="internal-testing" aria-labelledby="internal-title" className="scroll-mt-32 py-16 md:py-20">
        <Container>
          <div className="rounded-2xl border-2 border-dashed border-line p-6 md:p-10">
            <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">Internal testing</span>
            <h2 id="internal-title" className="mt-4 text-3xl font-bold tracking-tight">
              Hallstat bench work
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Hallstat’s own bench observations are early, internal and not peer reviewed. We keep them separate from
              the published research above.
            </p>
            <Button asChild variant="dark" className="mt-6">
              <Link href="/technology#callistercatheter">See the CallisterCatheter™ bench observation</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
