import { Container } from "@/components/Container";
import { PartnerForm } from "./PartnerForm";

export function PartnerCTA() {
  return (
    <section id="partner" aria-labelledby="partner-title" className="bg-navy py-20 text-white md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <h2 id="partner-title" className="text-3xl font-bold tracking-tight md:text-4xl">
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We work with medical device manufacturers and distributors to license and bring the Hallstat system to
            market.
          </p>
        </div>
        <PartnerForm />
      </Container>
    </section>
  );
}
