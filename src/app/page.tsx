import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { Problem } from "@/components/home/Problem";
import { Product } from "@/components/home/Product";
import { Science } from "@/components/home/Science";
import { TrustBar } from "@/components/home/TrustBar";
import { PartnerCTA } from "@/components/home/PartnerCTA";

// Section order is fixed by docs/BLUEPRINT.md section 3b (one action per section).
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Problem />
      <Product />
      <Science />
      <TrustBar />
      <PartnerCTA />
    </>
  );
}
