import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { studies } from "@/content/home";

export function Science() {
  return (
    <section aria-labelledby="science-title" className="py-20 md:py-28">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">Science foundation</p>
        <h2 id="science-title" className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Built on published research into how CAUTI develops
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {studies.slice(0, 4).map((s) => (
            <FeatureCard key={s.slug} study={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
