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

export type StudyCard = {
  slug: string;
  tag: string;
  /** Peer-reviewed only. Hallstat bench work must use kind "internal". */
  kind: "peer-reviewed" | "internal";
  title: string;
  journal: string;
  year: string;
  takeaway: string;
  todo?: boolean;
};

// TODO(owner): choose the 3–4 peer-reviewed studies for this grid (BLUEPRINT 3b open question).
// Placeholders are clearly marked and must be replaced before launch. Do not invent citations.
export const studies: StudyCard[] = [
  {
    slug: "biofilm",
    tag: "Biofilm",
    kind: "peer-reviewed",
    title: "TODO: study on biofilm formation on indwelling catheters",
    journal: "TODO: journal",
    year: "TODO",
    takeaway: "TODO: one-sentence takeaway from the selected study.",
    todo: true,
  },
  {
    slug: "bacterial-migration",
    tag: "Bacterial migration",
    kind: "peer-reviewed",
    title: "TODO: study on extraluminal / intraluminal bacterial migration",
    journal: "TODO: journal",
    year: "TODO",
    takeaway: "TODO: one-sentence takeaway from the selected study.",
    todo: true,
  },
  {
    slug: "backflow",
    tag: "Drainage backflow",
    kind: "peer-reviewed",
    title: "TODO: study on reflux from drainage systems",
    journal: "TODO: journal",
    year: "TODO",
    takeaway: "TODO: one-sentence takeaway from the selected study.",
    todo: true,
  },
];

export type TrustBadge = { label: string; detail: string; verified: boolean };

// Only show a badge as verified once written permission / proof is on file (BLUEPRINT 3b.6).
export const trustBadges: TrustBadge[] = [
  { label: "MBE Certified", detail: "TODO: certifying body and certificate proof", verified: false },
  { label: "IFAH Recognition", detail: "TODO: full name of the recognition and badge file", verified: false },
  { label: "Patent pending", detail: "TODO: application / patent numbers", verified: false },
];

export const partnerRoles = [
  "Procurement",
  "Engineering/R&D",
  "Business Development/Licensing",
  "Clinical",
  "Investor",
  "Other",
] as const;
