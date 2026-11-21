/**
 * Homepage content — docs/BLUEPRINT.md section 3b.
 * Every statistic must carry a visible citation link (CLAUDE.md rule 4).
 */

export type Stat = { value: string; label: string; source: { name: string; href: string } };

export const stats: Stat[] = [
  {
    value: "13,000+",
    label: "U.S. deaths associated with UTIs each year",
    source: { name: "CDC", href: "https://www.cdc.gov/infection-control/hcp/cauti/background.html" },
  },
  {
    value: "$1.3B",
    label: "Estimated aggregate cost of CAUTI hospitalizations (2010)",
    source: { name: "PMC", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13451317/" },
  },
  {
    value: "15–25%",
    label: "of hospitalized patients receive a urinary catheter",
    source: {
      name: "UNC SPICE",
      href: "https://spice.unc.edu/wp-content/uploads/2026/04/13-UTI-Pathophysiology_Epidemiology_Prevention-2026-2.pdf",
    },
  },
];

/** The Hallstat system has exactly these four components (CLAUDE.md rule 1). */
export const systemComponents = [
  { name: "MicroTip™", slug: "microtip", line: "A smaller tip designed to reduce bladder-wall irritation." },
  {
    name: "CallisterCatheter™",
    slug: "callistercatheter",
    line: "100% medical-grade silicone, designed to resist bacterial adhesion.",
  },
  { name: "BermeoValve™", slug: "bermeovalve", line: "Intended to reduce urine backflow from the drainage tubing." },
  {
    name: "BactiStat™ Tubing",
    slug: "bactistat",
    line: "Kink-resistant drainage tubing designed to limit bacterial growth.",
  },
] as const;

export type TrustBadge = { label: string; detail: string; verified: boolean };

// Only show a badge as verified once written permission / proof is on file (BLUEPRINT 3b.6).
export const trustBadges: TrustBadge[] = [
  { label: "MBE Certified", detail: "Show once the certificate is on file", verified: false },
  { label: "IFAH Recognition", detail: "Show once the full name and badge file are on file", verified: false },
  { label: "Patent pending", detail: "Show once application or patent numbers are confirmed", verified: false },
];

export const partnerRoles = [
  "Procurement",
  "Engineering/R&D",
  "Business Development/Licensing",
  "Clinical",
  "Investor",
  "Other",
] as const;
