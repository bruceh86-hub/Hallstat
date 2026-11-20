"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { isContactTopic } from "@/lib/contact";

/** Reads ?topic= in the browser so /contact stays a static page (metadata in <head>, fast first paint). */
export function ContactFormFromQuery() {
  const topic = useSearchParams().get("topic");
  return (
    <ContactForm
      key={topic ?? "default"}
      showTopic
      defaultTopic={isContactTopic(topic) ? topic : "partnership"}
      source="contact-page"
      submitLabel="Send message"
    />
  );
}
