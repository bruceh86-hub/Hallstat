import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Hallstat's commitment to an accessible website and how to report a barrier.",
  alternates: { canonical: "/legal/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement" updated="November 20, 2026">
      <p>
        Hallstat Industries wants hallstat.com to be usable by everyone, including people who use assistive
        technology. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Text and interface colors are chosen to meet WCAG AA contrast ratios.</li>
        <li>Every page can be used with a keyboard, with a visible focus indicator and a “Skip to content” link.</li>
        <li>Images have text alternatives, and diagrams include written descriptions.</li>
        <li>Forms have labels, and errors are announced next to the field they belong to.</li>
        <li>Pages respect your device’s reduced-motion setting and work at mobile widths and high zoom.</li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        Some product photos come from earlier materials and will be replaced with higher-resolution versions. Links to
        outside research may lead to sites we do not control.
      </p>

      <h2>Report a barrier</h2>
      <p>
        If anything on this site is hard to use, email <a href="mailto:info@hallstat.com">info@hallstat.com</a> with the
        page and what happened. We aim to respond within five business days.
      </p>
    </LegalPage>
  );
}
