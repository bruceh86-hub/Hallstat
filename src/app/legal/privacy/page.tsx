import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Hallstat Industries collects and uses information submitted through hallstat.com.",
  alternates: { canonical: "/legal/privacy" },
};

// TODO(legal): attorney review before launch. Content describes what the site actually does as built.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 20, 2026">
      <p>
        This policy explains what information Hallstat Industries Inc. (“Hallstat,” “we”) collects through
        hallstat.com and how we use it.
      </p>

      <h2>Information you send us</h2>
      <p>
        When you use our contact or partnership forms, we receive the information you enter: your name, organization,
        role, email address, the topic you choose and your message. We use it only to respond to you and to manage
        any resulting business relationship. We do not sell or rent this information.
      </p>
      <p>
        Please do not include patient information or other protected health information in your message.
      </p>

      <h2>Information collected automatically</h2>
      <ul>
        <li>
          <strong>Hosting logs.</strong> Our hosting provider, Vercel, processes technical data such as IP address,
          browser type and pages requested in order to deliver and secure the site.
        </li>
        <li>
          <strong>Analytics.</strong> We use Vercel Web Analytics to understand overall traffic, such as page views
          and referring sites. It reports aggregated data and does not use cookies.
        </li>
      </ul>

      <h2>Cookies</h2>
      <p>This site does not use cookies for advertising or cross-site tracking.</p>

      <h2>Service providers</h2>
      <p>
        We share information only with providers that help us run the site: Vercel (hosting and analytics) and Resend
        (delivering form submissions to our inbox). They process it on our behalf.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep inquiries for as long as needed to respond and to maintain our business records, and delete them on
        request unless we are required to keep them.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to access, correct or delete information you have sent us by emailing{" "}
        <a href="mailto:info@hallstat.com">info@hallstat.com</a>.
      </p>

      <h2>Children</h2>
      <p>This site is intended for healthcare and business professionals and is not directed to children under 13.</p>

      <h2>Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>

      <h2>Contact</h2>
      <p>
        Hallstat Industries Inc. · <a href="mailto:info@hallstat.com">info@hallstat.com</a>
      </p>
    </LegalPage>
  );
}
