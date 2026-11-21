import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using hallstat.com, including product information.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="November 20, 2026">
      <p>By using hallstat.com you agree to these terms. If you do not agree, please do not use the site.</p>

      <h2>Product information</h2>
      <p>
        Information on this site is general and is not medical advice. Product specifications, availability and
        regulatory status may change. Contact Hallstat for current details.
      </p>

      <h2>Not medical advice</h2>
      <p>
        Content on this site is for general information for healthcare and business professionals. It is not medical
        advice and should not be used to make decisions about patient care.
      </p>

      <h2>Forward-looking information</h2>
      <p>
        Statements about development plans, timelines, regulatory pathways or partnerships are expectations that may
        change and are not guarantees.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Site content, the Hallstat name and logo, and the names MicroTip™, CallisterCatheter™, BermeoValve™ and
        BactiStat™ belong to Hallstat Industries Inc. You may not use them without our written permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        We link to published research and other sites for reference. We are not responsible for their content, and a
        link does not mean the author endorses Hallstat.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided “as is.” We work to keep it accurate but do not guarantee that it is complete, current or
        error-free, and we are not liable for losses arising from its use, to the extent the law allows.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows when they last changed.</p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:info@hallstat.com">info@hallstat.com</a>
      </p>
    </LegalPage>
  );
}
