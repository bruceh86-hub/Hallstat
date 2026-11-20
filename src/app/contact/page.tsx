import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ContactFormFromQuery } from "@/components/ContactFormFromQuery";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hallstat Industries about licensing and partnerships, investor materials, technical briefs, clinical questions or media inquiries.",
  alternates: { canonical: "/contact" },
};

const audiences = [
  { title: "Manufacturers & distributors", text: "Licensing and partnership discussions for the Hallstat system." },
  { title: "Investors", text: "Investor materials are shared under NDA after an introductory conversation." },
  { title: "Clinicians", text: "Feedback from nurses and physicians who place and manage urinary catheters." },
  { title: "Media", text: "Interview and press requests for Hallstat and our founder." },
];

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-title" className="bg-navy text-white">
        <Container className="py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-200">Contact</p>
          <h1 id="contact-title" className="mt-4 max-w-3xl text-display font-bold">
            Talk with Hallstat
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Tell us a little about yourself and what you are looking for. We read every message and reply by email.
          </p>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 md:grid-cols-[1fr_1.6fr] md:gap-16 md:py-24">
        <ul className="space-y-6">
          {audiences.map((a) => (
            <li key={a.title} className="border-l-2 border-accent pl-4">
              <h2 className="font-semibold text-navy">{a.title}</h2>
              <p className="mt-1 text-sm text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
        <div className="rounded-md border border-line bg-white p-6 md:p-8">
          <Suspense fallback={<ContactForm showTopic source="contact-page" submitLabel="Send message" />}>
            <ContactFormFromQuery />
          </Suspense>
        </div>
      </Container>
    </>
  );
}
