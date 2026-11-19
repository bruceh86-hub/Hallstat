import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/config/site";

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">The problem</p>
          <h2 id="problem-title" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Infection starts on the catheter itself
          </h2>
          <div className="mt-6 space-y-5 text-muted">
            <p>
              Within hours of placement, bacteria can begin to adhere to a catheter’s surface. Over days, that colony
              can mature into a biofilm and, in some patients, crystalline encrustation that is difficult to clear
              without replacing the device.
            </p>
            <p>
              Bacteria can also travel along the catheter, both on its outer surface and inside the lumen, and urine
              that flows back from the drainage tubing can carry organisms toward the bladder.
            </p>
            <p>
              Bedside nurses place and manage these devices every day, yet they rarely have a hand in how the devices
              are designed. Hallstat was started to change that.
            </p>
          </div>
        </div>

        <aside aria-label="Founder quote" className="self-start rounded-xl bg-mist p-8">
          <div className="h-1 w-12 rounded-full bg-accent" aria-hidden />
          <blockquote className="mt-6">
            <p className="text-2xl font-semibold leading-snug text-navy">“Designed by nurses. Built for nurses.”</p>
          </blockquote>
          <p className="mt-4 text-sm text-muted">
            —{" "}
            <Link href={site.founder.path} className="font-semibold text-accent-strong hover:underline">
              {site.founder.name}
            </Link>
            , {site.founder.title}
          </p>
        </aside>
      </Container>
    </section>
  );
}
