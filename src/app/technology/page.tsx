import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { componentSections, valveChallenges } from "@/content/technology";
import { SubNav } from "@/components/technology/SubNav";
import { ComponentBlock } from "@/components/technology/ComponentBlock";
import { Figure } from "@/components/technology/Figure";
import { AdhesionTimeline } from "@/components/technology/AdhesionTimeline";
import { ValveFlowDiagram } from "@/components/technology/ValveFlowDiagram";
import systemImg from "../../../public/images/product/hallstat-system.jpg";
import microtipImg from "../../../public/images/product/microtip-vs-standard.jpg";
import catheterImg from "../../../public/images/product/callistercatheter.jpg";
import valveImg from "../../../public/images/product/bermeovalve.jpg";
import benchStdImg from "../../../public/images/product/bench-standard-2wk.jpg";
import benchCallisterImg from "../../../public/images/product/bench-callister-6wk.jpg";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Inside the investigational Hallstat Foley system: MicroTip™, CallisterCatheter™, BermeoValve™ and BactiStat™ Tubing, each designed to address a route to catheter-associated infection.",
  alternates: { canonical: "/technology" },
};

const [microtip, callister, bermeo, bactistat] = componentSections;

export default function TechnologyPage() {
  return (
    <>
      <section aria-labelledby="tech-title" className="bg-navy text-white">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-navy-200">Technology</p>
            <h1 id="tech-title" className="mt-4 text-display font-bold">
              One system, four lines of defense
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              The Hallstat Foley system combines four nurse-designed components. Each one is intended to address a
              different route that bacteria use to reach the bladder.
            </p>
          </div>
          <figure className="rounded-md bg-white p-6">
            <Image
              src={systemImg}
              alt="The complete Hallstat Foley catheter system"
              placeholder="blur"
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="mx-auto h-auto max-h-[26rem] w-auto"
            />
          </figure>
        </Container>
      </section>

      <SubNav />

      <ComponentBlock
        section={microtip}
        index={0}
        figure={
          <Figure
            src={microtipImg}
            alt="A standard catheter tip next to the much shorter MicroTip, with a U.S. penny for scale"
            caption="Standard tip (left) compared with the MicroTip™ (right). Penny shown for scale."
          />
        }
      />

      <ComponentBlock
        section={callister}
        index={1}
        figure={<Figure src={catheterImg} alt="The CallisterCatheter, a clear silicone Foley catheter" />}
      >
        <div className="mt-12 rounded-md border border-line bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">Internal testing</span>
            <span className="text-sm text-muted">Bench observation, not a clinical study</span>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-navy">Inside the catheter lumen</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <figure>
              <Image
                src={benchStdImg}
                alt="Inside view of a standard catheter lumen with visible buildup"
                placeholder="blur"
                sizes="(min-width: 640px) 40vw, 90vw"
                className="h-auto w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted">
                <span className="font-semibold text-navy">Standard catheter, two weeks:</span> visible occlusion of the
                lumen.
              </figcaption>
            </figure>
            <figure>
              <Image
                src={benchCallisterImg}
                alt="Inside view of a CallisterCatheter lumen without visible buildup"
                placeholder="blur"
                sizes="(min-width: 640px) 40vw, 90vw"
                className="h-auto w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted">
                <span className="font-semibold text-navy">CallisterCatheter™ prototype, six weeks:</span> no visible
                buildup.
              </figcaption>
            </figure>
          </div>
          {/* TODO(owner): method, date, test conditions and sample size for this observation (BLUEPRINT 9a). */}
          <p className="mt-6 text-sm text-muted">
            Method, date, conditions and sample size: TODO. Results from a single internal observation may not reflect
            clinical performance.
          </p>
        </div>
      </ComponentBlock>

      <AdhesionTimeline />

      <ComponentBlock
        section={bermeo}
        index={2}
        figure={
          <div className="space-y-6">
            <Figure src={valveImg} alt="The BermeoValve, a small clear one-way valve" />
            <ValveFlowDiagram />
          </div>
        }
      >
        <h3 className="mt-14 text-2xl font-bold tracking-tight">Design challenges we set out to solve</h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {valveChallenges.map((c) => (
            <li key={c.problem} className="rounded-md border border-line bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Problem</p>
              <p className="mt-1 text-navy">{c.problem}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-navy-600">Our approach</p>
              <p className="mt-1 text-muted">{c.approach}</p>
            </li>
          ))}
        </ul>
      </ComponentBlock>

      <ComponentBlock section={bactistat} index={3} />

      <section id="status" aria-labelledby="status-title" className="scroll-mt-32 py-16 md:py-24">
        <Container>
          <h2 id="status-title" className="text-3xl font-bold tracking-tight md:text-4xl">
            Development status
          </h2>
          <div className="mt-8 overflow-x-auto rounded-md border border-line">
            <table className="w-full min-w-[32rem] text-left">
              <thead className="bg-mist text-sm text-navy">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Component
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Stage
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    IP status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {componentSections.map((c) => (
                  <tr key={c.slug}>
                    <th scope="row" className="px-5 py-4 font-semibold text-navy">
                      <a href={`#${c.slug}`} className="hover:underline">
                        {c.name}
                      </a>
                    </th>
                    <td className="px-5 py-4 text-muted">{c.status}</td>
                    <td className="px-5 py-4 text-muted">TODO: patent pending / patent number</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 rounded-md border-l-4 border-accent bg-mist p-5 font-semibold text-navy">
            {site.disclaimer}
          </p>
        </Container>
      </section>

      <section aria-labelledby="tech-cta-title" className="bg-navy py-16 text-white md:py-20">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="tech-cta-title" className="text-3xl font-bold tracking-tight">
              Want the technical details?
            </h2>
            <p className="mt-2 text-white/80">Request a technical brief or talk with us about licensing.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact?topic=technical-brief">Request technical brief</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#partner">Partner with us</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
