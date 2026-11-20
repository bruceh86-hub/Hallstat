import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { Avatar } from "@/components/about/Avatar";
import { founder, organizationId, personId } from "@/content/founder";
import { site } from "@/config/site";
import { formatDate, getPosts } from "@/lib/news";
import { showPlaceholders } from "@/lib/placeholders";

export const metadata: Metadata = {
  title: { absolute: "Bruce Huici — Founder & CEO, Hallstat Industries" },
  description: founder.description,
  alternates: { canonical: founder.path },
  openGraph: { type: "profile", title: "Bruce Huici — Founder & CEO, Hallstat Industries", url: founder.path },
};

const pageUrl = `${site.url}${founder.path}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": pageUrl,
  url: pageUrl,
  name: "Bruce Huici — Founder & CEO, Hallstat Industries",
  mainEntity: {
    "@type": "Person",
    "@id": personId,
    name: founder.name,
    jobTitle: founder.jobTitle,
    url: pageUrl,
    description: founder.description,
    ...(founder.photo ? { image: `${site.url}${founder.photo}` } : {}),
    worksFor: { "@type": "Organization", "@id": organizationId, name: site.legalName, url: site.url },
    knowsAbout: founder.knowsAbout,
    memberOf: { "@type": "Organization", name: "Free At Last Coalition", url: "https://www.freeatlastcoalition.org" },
    subjectOf: [{ "@type": "WebPage", url: "https://www.freeatlastcoalition.org/team/bruce-huici/" }],
    sameAs: founder.links.map((l) => l.href),
  },
};

export default function FounderPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section aria-labelledby="founder-title" className="bg-navy text-white">
        <Container className="grid items-center gap-10 py-16 md:grid-cols-[auto_1fr] md:py-24">
          <Avatar
            name={founder.name}
            photo={founder.photo}
            alt={founder.photoAlt}
            className="w-40 bg-white/10 text-white ring-white/20 md:w-56"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-navy-200">
              <Link href="/about" className="hover:underline">
                About
              </Link>{" "}
              / Founder
            </p>
            <h1 id="founder-title" className="mt-3 text-display font-bold">
              {founder.name}
            </h1>
            <p className="mt-4 text-lg text-white/80">{founder.subhead}</p>
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 md:grid-cols-[1.7fr_1fr] md:gap-16 md:py-24">
        <article className="max-w-none space-y-5 text-[1.0625rem] text-muted">
          <h2 className="text-2xl font-bold tracking-tight text-navy">From the bedside to device design</h2>
          <p>
            Bruce Huici is a nurse and the founder and CEO of Hallstat Industries. Nurses place and manage Foley
            catheters every day, yet they rarely have a say in how those devices are designed. Hallstat exists to
            change that.
          </p>
          <p>
            His nursing experience includes cardiac catheterization and interventional radiology. He invented the
            Hallstat Foley System after seeing firsthand the challenges that urinary catheters can create for patients
            and care teams.
          </p>
          {/* TODO(owner): nursing background — years in practice, specialties, settings (2–3 sentences). */}
          {showPlaceholders && (
<p className="rounded-lg border border-dashed border-amber-500 p-4 text-sm">
            TODO: Years in practice and other care settings (optional).
          </p>
)}

          <h2 className="pt-4 text-2xl font-bold tracking-tight text-navy">The Hallstat system</h2>
          <p>
            Bruce started Hallstat to design a Foley system around how bacteria actually reach the bladder. He is the
            inventor behind its four components: the{" "}
            <Link href="/technology#microtip" className="font-semibold text-navy-600 hover:underline">
              MicroTip™
            </Link>
            ,{" "}
            <Link href="/technology#callistercatheter" className="font-semibold text-navy-600 hover:underline">
              CallisterCatheter™
            </Link>
            ,{" "}
            <Link href="/technology#bermeovalve" className="font-semibold text-navy-600 hover:underline">
              BermeoValve™
            </Link>{" "}
            and{" "}
            <Link href="/technology#bactistat" className="font-semibold text-navy-600 hover:underline">
              BactiStat™ Tubing
            </Link>
            . The Hallstat system was designed from the bedside up.
          </p>
          {showPlaceholders && (
<p className="rounded-lg border border-dashed border-amber-500 p-4 text-sm">
            TODO: Why he invented the system (a specific moment or patient experience, 2–3 sentences); patents
            (numbers); MBE certification; other ventures; speaking and press.
          </p>
)}

          <blockquote className="border-l-4 border-accent pl-5 text-xl font-semibold text-navy">
            “Designed by nurses. Built for nurses.”
            <footer className="mt-2 text-sm font-normal text-muted">— Bruce Huici</footer>
          </blockquote>
        </article>

        <aside className="space-y-10">
          <section aria-labelledby="links-title">
            <h2 id="links-title" className="text-sm font-semibold uppercase tracking-wider text-navy">
              Elsewhere
            </h2>
            <ul className="mt-3 space-y-2">
              {founder.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    rel="me noopener noreferrer"
                    target="_blank"
                    className="font-semibold text-navy-600 hover:underline"
                  >
                    {l.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="affiliations-title">
            <h2 id="affiliations-title" className="text-sm font-semibold uppercase tracking-wider text-navy">
              Affiliations &amp; recognition
            </h2>
            <ul className="mt-3 space-y-3 text-sm text-muted">
              {founder.affiliations.filter((a) => a.verified || showPlaceholders).map((a) =>
                a.verified ? (
                  <li key={a.label}>
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {a.label}
                    </a>
                  </li>
                ) : (
                  <li key={a.label} className="rounded-lg border border-dashed border-amber-500 p-3">
                    {a.label}
                  </li>
                ),
              )}
            </ul>
          </section>

          <section aria-labelledby="news-title">
            <h2 id="news-title" className="text-sm font-semibold uppercase tracking-wider text-navy">
              In the news
            </h2>
            {/* Press releases by Bruce from /news. TODO(owner): add outside coverage links. */}
            {(() => {
              const posts = getPosts().filter((p) => p.author === founder.name).slice(0, 5);
              return posts.length ? (
                <ul className="mt-3 space-y-3 text-sm">
                  {posts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/news/${p.slug}`} className="font-semibold text-navy-600 hover:underline">
                        {p.title}
                      </Link>
                      <span className="block text-muted">{formatDate(p.date)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted">
                  Press releases and coverage will appear here.{" "}
                  <Link href="/news" className="font-semibold text-navy-600 hover:underline">
                    Visit the newsroom
                  </Link>
                </p>
              );
            })()}
          </section>
        </aside>
      </Container>
    </>
  );
}
