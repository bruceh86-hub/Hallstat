export const site = {
  name: "Hallstat Industries",
  legalName: "Hallstat Industries Inc.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hallstat.com").replace(/\/$/, ""),
  description:
    "Hallstat Industries makes the Hallstat Foley Insertion Kit, a nurse-designed Foley catheter system designed to reduce catheter-associated urinary tract infection (CAUTI) risk.",
  disclaimer:
    "The Hallstat Foley Insertion Kit is a convenience kit of legally marketed components and includes a 510(k)-cleared Foley catheter. Contact us for product and ordering information.",
  nav: [
    { href: "/technology", label: "Technology" },
    { href: "/studies", label: "Studies" },
    { href: "/about", label: "About" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy" },
    { href: "/legal/terms", label: "Terms" },
    { href: "/legal/accessibility", label: "Accessibility" },
  ],
  founder: {
    name: "Bruce Huici",
    title: "Founder & CEO",
    path: "/about/bruce-huici",
  },
} as const;

/** The Hallstat system has exactly these four components. Use these spellings everywhere. */
export const components = ["MicroTip™", "CallisterCatheter™", "BermeoValve™", "BactiStat™ Tubing"] as const;
