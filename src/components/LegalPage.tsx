import { Container } from "@/components/Container";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-200">Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-white/80">Last updated {updated}</p>
        </Container>
      </section>
      <Container className="py-14 md:py-16">
        <div className="max-w-3xl space-y-4 text-ink [&_a]:font-semibold [&_a]:text-navy-600 [&_a]:underline [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_li]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2">
          {children}
        </div>
      </Container>
    </>
  );
}
