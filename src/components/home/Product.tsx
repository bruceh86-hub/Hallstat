import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { systemComponents } from "@/content/home";
import { ProductVisual } from "./ProductVisual";

export function Product() {
  return (
    <section id="product" aria-labelledby="product-title" className="bg-mist py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <ProductVisual />

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">The Hallstat system</p>
          <h2 id="product-title" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Four components, one closed system
          </h2>
          <ul className="mt-8 space-y-5">
            {systemComponents.map((c) => (
              <li key={c.slug} className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-navy">{c.name}</p>
                <p className="text-muted">{c.line}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">
            Each component targets a different route that bacteria use to reach the bladder. Together they are designed
            to limit adhesion on the catheter surface, reduce backflow from the drainage line and keep the system
            flowing, so nurses have fewer reasons to break the closed system.
          </p>
          <Button asChild variant="link" className="mt-4 h-auto px-0 text-base">
            <Link href="/technology">Explore the technology →</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
