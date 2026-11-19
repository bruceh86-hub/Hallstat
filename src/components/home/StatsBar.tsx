import { Container } from "@/components/Container";
import { StatBlock } from "@/components/StatBlock";
import { stats } from "@/content/home";

export function StatsBar() {
  return (
    <section aria-label="The scale of the problem" className="border-t border-white/10 bg-navy-800">
      <Container className="grid gap-8 py-10 text-center sm:grid-cols-3">
        {stats.map((stat, i) => (
          <StatBlock key={stat.value} stat={stat} index={i} />
        ))}
      </Container>
    </section>
  );
}
