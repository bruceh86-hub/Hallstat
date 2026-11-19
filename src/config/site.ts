export const site = {
  name: "Hallstat Industries",
  legalName: "Hallstat Industries Inc.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hallstat.com").replace(/\/$/, ""),
  description:
    "Hallstat Industries is developing a nurse-designed Foley catheter system intended to reduce catheter-associated urinary tract infection (CAUTI) risk.",
  disclaimer: "Caution: Investigational device. Not available for sale.",
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
