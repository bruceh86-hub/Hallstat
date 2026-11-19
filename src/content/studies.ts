/**
 * Peer-reviewed sources for /studies and the homepage science grid.
 * Every entry was checked against PubMed / DOI / journal records (Nov 2026).
 * Takeaways only restate what the paper's abstract reports. Do not add claims that a study validates Hallstat.
 * Rule: no coating-technology studies on this site (CLAUDE.md rule 2).
 */

export type Topic = "biofilm" | "backflow" | "trauma" | "closed-system";

export const topics: { id: Topic; label: string; intro: string }[] = [
  {
    id: "biofilm",
    label: "Biofilm",
    intro: "How bacteria colonize the catheter surface and why that makes infections hard to treat.",
  },
  {
    id: "backflow",
    label: "Routes of infection",
    intro: "How bacteria reach the bladder: along the outside of the catheter, and up the inside from the drainage system.",
  },
  {
    id: "trauma",
    label: "Bladder & urethral trauma",
    intro: "Harms from catheters that are not infections, and how often they occur.",
  },
  {
    id: "closed-system",
    label: "Closed drainage",
    intro: "Why keeping the drainage system closed matters, and why it is not enough on its own.",
  },
];

export type Study = {
  slug: string;
  topic: Topic;
  kind: "peer-reviewed" | "internal";
  design: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  href: string;
  takeaway: string;
  /** Short tag for homepage cards. */
  tag: string;
  featured?: boolean;
};

export const studies: Study[] = [
  // Biofilm
  {
    slug: "stickler-2008",
    topic: "biofilm",
    tag: "Biofilm",
    kind: "peer-reviewed",
    design: "Review",
    title: "Bacterial biofilms in patients with indwelling urinary catheters",
    authors: "Stickler DJ",
    journal: "Nature Clinical Practice Urology",
    year: "2008",
    href: "https://doi.org/10.1038/ncpuro1231",
    takeaway:
      "Many bacterial species colonize indwelling catheters as biofilms; crystalline biofilms, most often formed by Proteus mirabilis, can encrust and block the catheter.",
    featured: true,
  },
  {
    slug: "trautner-2004",
    topic: "biofilm",
    tag: "Biofilm",
    kind: "peer-reviewed",
    design: "Review",
    title: "Role of biofilm in catheter-associated urinary tract infection",
    authors: "Trautner BW, Darouiche RO",
    journal: "American Journal of Infection Control",
    year: "2004",
    href: "https://doi.org/10.1016/j.ajic.2003.08.005",
    takeaway:
      "Biofilm gives catheter bacteria a survival advantage, leading to persistent infections that resist antimicrobial therapy.",
  },
  // Routes of infection / backflow
  {
    slug: "tambyah-1999",
    topic: "backflow",
    tag: "Routes of infection",
    kind: "peer-reviewed",
    design: "Prospective study, 1,497 patients",
    title: "A prospective study of pathogenesis of catheter-associated urinary tract infections",
    authors: "Tambyah PA, Halvorson KT, Maki DG",
    journal: "Mayo Clinic Proceedings",
    year: "1999",
    href: "https://doi.org/10.4065/74.2.131",
    takeaway:
      "Of 173 infections with a known route, 66% were extraluminal (along the outside of the catheter) and 34% intraluminal (from contamination inside the drainage system).",
    featured: true,
  },
  // Trauma
  {
    slug: "hollingsworth-2013",
    topic: "trauma",
    tag: "Bladder trauma",
    kind: "peer-reviewed",
    design: "Systematic review and meta-analysis",
    title: "Determining the noninfectious complications of indwelling urethral catheters",
    authors: "Hollingsworth JM, Rogers MA, Krein SL, et al.",
    journal: "Annals of Internal Medicine",
    year: "2013",
    href: "https://doi.org/10.7326/0003-4819-159-6-201309170-00006",
    takeaway:
      "Many noninfectious catheter complications are at least as common as clinically significant urinary tract infections.",
    featured: true,
  },
  {
    slug: "leuck-2012",
    topic: "trauma",
    tag: "Bladder trauma",
    kind: "peer-reviewed",
    design: "Prospective surveillance, single VA center",
    title: "Complications of Foley catheters — is infection the greatest risk?",
    authors: "Leuck AM, et al.",
    journal: "Journal of Urology",
    year: "2012",
    href: "https://pubmed.ncbi.nlm.nih.gov/22425122/",
    takeaway:
      "Catheter trauma requiring an intervention occurred on 0.5% of catheter days, compared with 0.3% for symptomatic urinary tract infection (difference not significant).",
  },
  {
    slug: "saint-2018",
    topic: "trauma",
    tag: "Bladder trauma",
    kind: "peer-reviewed",
    design: "Multicenter prospective cohort, 2,076 patients",
    title:
      "A multicenter study of patient-reported infectious and noninfectious complications associated with indwelling urethral catheters",
    authors: "Saint S, et al.",
    journal: "JAMA Internal Medicine",
    year: "2018",
    href: "https://doi.org/10.1001/jamainternmed.2018.2417",
    takeaway:
      "57% of patients reported at least one catheter complication within 30 days; 55.4% reported noninfectious complications such as pain and blood in the urine, versus 10.5% infectious.",
  },
  {
    slug: "glahn-1988",
    topic: "trauma",
    tag: "Bladder trauma",
    kind: "peer-reviewed",
    design: "Animal study (pigs)",
    title: "Influence of drainage conditions on mucosal bladder damage by indwelling catheters. II. Histological study",
    authors: "Glahn BE, Brændstrup O, Olesen HP",
    journal: "Scandinavian Journal of Urology and Nephrology",
    year: "1988",
    href: "https://doi.org/10.1080/00365599.1988.11690392",
    takeaway:
      "Suction of the bladder lining against the catheter during drainage caused localized mucosal damage; the authors identify it as a likely major cause of catheter-associated “polypoid cystitis.”",
  },
  // Closed drainage
  {
    slug: "kunin-1966",
    topic: "closed-system",
    tag: "Closed drainage",
    kind: "peer-reviewed",
    design: "Clinical study",
    title: "Prevention of catheter-induced urinary-tract infections by sterile closed drainage",
    authors: "Kunin CM, McCormack RC",
    journal: "New England Journal of Medicine",
    year: "1966",
    href: "https://doi.org/10.1056/NEJM196605262742101",
    takeaway:
      "The landmark study behind sterile closed drainage, which became the standard of care for indwelling urinary catheters.",
    featured: true,
  },
  {
    slug: "garibaldi-1974",
    topic: "closed-system",
    tag: "Closed drainage",
    kind: "peer-reviewed",
    design: "Prospective study, 405 patients",
    title: "Factors predisposing to bacteriuria during indwelling urethral catheterization",
    authors: "Garibaldi RA, Burke JP, Dickman ML, Smith CB",
    journal: "New England Journal of Medicine",
    year: "1974",
    href: "https://doi.org/10.1056/NEJM197408012910501",
    takeaway:
      "Even with closed sterile drainage, 23% of 405 hospitalized patients acquired bacteriuria; risk was higher in women, older patients and the critically ill.",
  },
  {
    slug: "gould-2010",
    topic: "closed-system",
    tag: "Closed drainage",
    kind: "peer-reviewed",
    design: "Evidence-based guideline (CDC / HICPAC)",
    title: "Guideline for prevention of catheter-associated urinary tract infections 2009",
    authors: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA; HICPAC",
    journal: "Infection Control & Hospital Epidemiology",
    year: "2010",
    href: "https://stacks.cdc.gov/view/cdc/11561",
    takeaway:
      "Recommends maintaining a sterile, continuously closed drainage system and unobstructed urine flow after aseptic insertion.",
  },
];

export const featuredStudies = studies.filter((s) => s.featured).slice(0, 4);
