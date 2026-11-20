import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ProductVisual } from "./ProductVisual";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-navy text-white">
      <Container className="grid items-center gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-200">Nurse-designed Foley system</p>
          <h1 id="hero-title" className="mt-4 text-display font-bold">
            Built to Take On CAUTI
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
            A nurse-designed Foley insertion kit built around how bacteria reach the bladder.
          </p>
          <Button asChild size="lg" className="mt-10">
            <a href="#product">See the Technology</a>
          </Button>
        </div>
        <ProductVisual priority />
      </Container>
    </section>
  );
}
