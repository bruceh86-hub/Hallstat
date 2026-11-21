import { Container } from "@/components/Container";
import { trustBadges } from "@/content/home";

export function TrustBar() {
  const badges = trustBadges.filter((b) => b.verified);
  if (!badges.length) return null;
  return (
    <section aria-label="Certifications and recognition" className="border-y border-line py-10">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {badges.map((b) => (
            <li
              key={b.label}
              className={
                b.verified
                  ? "rounded-lg border border-line px-5 py-3 text-sm font-semibold uppercase tracking-wider text-muted grayscale"
                  : "rounded-lg border border-dashed border-amber-500 px-5 py-3 text-sm text-muted"
              }
            >
              <span className="font-semibold uppercase tracking-wider">{b.label}</span>
              {!b.verified && <span className="block text-xs normal-case">{b.detail}</span>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
