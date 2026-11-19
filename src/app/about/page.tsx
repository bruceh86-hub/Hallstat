import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { TeamCard } from "@/components/about/TeamCard";
import { groups, members } from "@/content/team";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hallstat Industries is a nurse-founded medical device company developing an investigational Foley catheter system designed to reduce CAUTI risk. Meet the leadership team and medical advisory board.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-title" className="bg-navy text-white">
        <Container className="py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Hallstat</p>
          <h1 id="about-title" className="mt-4 max-w-3xl text-display font-bold">
            Nurse-founded. Built at the bedside.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Hallstat Industries was founded by{" "}
            <Link href={site.founder.path} className="text-white underline underline-offset-4 hover:text-accent">
              {site.founder.name}
            </Link>
            , a nurse. We are developing the Hallstat system, an investigational Foley catheter system
            designed from the perspective of the nurses who place and manage these devices every day.
          </p>
        </Container>
      </section>

      <section aria-labelledby="mission-title" className="py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 id="mission-title" className="text-3xl font-bold tracking-tight">
              Our mission
            </h2>
            <p className="mt-4 text-muted">
              To reduce the harm caused by urinary catheters by designing devices around how bacteria actually reach
              the bladder, and around how nurses actually use them.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">How we work</h2>
            <p className="mt-4 text-muted">
              We partner with medical device manufacturers and distributors to license and bring the Hallstat system to
              market. Our design decisions are grounded in{" "}
              <Link href="/studies" className="font-semibold text-accent-strong hover:underline">
                published research
              </Link>{" "}
              and clearly separated from our own early bench work.
            </p>
            {/* TODO(owner): MBE certification and other credentials, once proof is on file. */}
          </div>
        </Container>
      </section>

      <section id="team" aria-labelledby="team-title" className="scroll-mt-20 bg-mist py-16 md:py-24">
        <Container>
          <h2 id="team-title" className="text-3xl font-bold tracking-tight md:text-4xl">
            Our team
          </h2>
          {groups.map((g) => (
            <div key={g} className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-strong">{g}</h3>
              <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {members
                  .filter((m) => m.group === g)
                  .map((m) => (
                    <li key={m.name} className="flex">
                      <TeamCard member={m} />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <section id="investors" aria-labelledby="investors-title" className="scroll-mt-20 py-16 md:py-24">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="investors-title" className="text-3xl font-bold tracking-tight">
              Investors
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Our investor materials are shared under NDA. Tell us a little about yourself and we will be in touch.
            </p>
          </div>
          <Button asChild size="lg" variant="dark">
            <Link href="/contact?topic=investor">Request the investor deck</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
