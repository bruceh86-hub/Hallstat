import Link from "next/link";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { featuredStudies } from "@/content/studies";

export function Science() {
  return (
    <section aria-labelledby="science-title" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">Science foundation</p>
            <h2 id="science-title" className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Built on published research into how CAUTI develops
            </h2>
          </div>
          <Link href="/studies" className="font-semibold text-navy-600 hover:underline">
            All studies →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStudies.map((s) => (
            <FeatureCard key={s.slug} study={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
