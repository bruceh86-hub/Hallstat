import type { ComponentSection } from "@/content/technology";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

export function ComponentBlock({
  section,
  figure,
  index,
  children,
}: {
  section: ComponentSection;
  figure?: React.ReactNode;
  index: number;
  children?: React.ReactNode;
}) {
  const flip = index % 2 === 1;
  return (
    <section
      id={section.slug}
      aria-labelledby={`${section.slug}-title`}
      className={cn("scroll-mt-32 py-16 md:py-24", flip && "bg-mist")}
    >
      <Container>
        <div className={cn("grid items-start gap-10 md:grid-cols-2 md:gap-16", !figure && "md:grid-cols-1")}>
          <div className={cn(figure && flip && "md:order-2", !figure && "max-w-3xl")}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">
              Component {index + 1} of 4
            </p>
            <h2 id={`${section.slug}-title`} className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {section.name}
            </h2>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-navy">The problem</h3>
            <p className="mt-2 text-muted">{section.problem}</p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-navy">Our design</h3>
            <div className="mt-2 space-y-3 text-muted">
              {section.design.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-sm">
              <span className="font-semibold text-navy">Status:</span>
              <span className="text-muted">{section.status}</span>
            </p>
          </div>
          {figure && <div className={cn(flip && "md:order-1")}>{figure}</div>}
        </div>
        {children}
      </Container>
    </section>
  );
}
