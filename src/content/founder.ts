import { site } from "@/config/site";

/** Founder page data — docs/BLUEPRINT.md section 11. Only verified facts. */
export const founder = {
  name: "Bruce Huici",
  jobTitle: "Founder & CEO",
  subhead: "Founder & CEO, Hallstat Industries · Nurse · Medical Device Inventor",
  path: "/about/bruce-huici",
  photo: "/images/team/bruce-huici-founder-hallstat.jpg",
  photoAlt: "Bruce Huici, founder and CEO of Hallstat Industries",
  description:
    "Bruce Huici is a nurse with experience in cardiac catheterization and interventional radiology, a medical device inventor, and the founder and CEO of Hallstat Industries, which is developing a nurse-designed Foley catheter system intended to reduce catheter-associated urinary tract infection risk.",
  knowsAbout: ["Foley catheters", "CAUTI prevention", "medical device design", "nursing"],
  links: [
    { label: "brucehuici.com", href: "https://www.brucehuici.com" },
    { label: "Founder profile at Nurvana", href: "https://www.nurvanarx.com/about/bruce-huici" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bruce-huici-207b1939" },
    { label: "Medium", href: "https://medium.com/@BruceHuici" },
    { label: "Crunchbase", href: "https://www.crunchbase.com/person/bruce-huici-383a" },
    { label: "Facebook", href: "https://www.facebook.com/BruceHuici" },
  ],
  /** Bruce's other company (a separate venture; never part of the Hallstat system). */
  otherVentures: [
    {
      name: "Nurvana",
      href: "https://www.nurvanarx.com",
      profile: "https://www.nurvanarx.com/about/bruce-huici",
      summary: "an early-stage research venture studying an investigational candidate for ischemic-stroke recovery",
    },
  ],
  /** Bruce's personal site: the central record of his biography, patents and articles. */
  personalSite: {
    home: "https://www.brucehuici.com/",
    biography: "https://www.brucehuici.com/about",
    venture: "https://www.brucehuici.com/ventures/hallstat",
    insights: "https://www.brucehuici.com/insights",
  },
  /** Official records of the two Hallstat-related U.S. patents (verified on Google Patents). */
  patents: [
    { number: "U.S. Patent 11,938,276", href: "https://patents.google.com/patent/US11938276B2/en" },
    { number: "U.S. Patent 10,179,232", href: "https://patents.google.com/patent/US10179232B2/en" },
  ],
  /** Third-party interview (subjectOf, not sameAs). */
  interview: { label: "IdeaMensch", href: "https://ideamensch.com/bruce-huici/" },
  affiliations: [
    {
      label: "Member, Free At Last Coalition (501(c)(3) nonprofit)",
      href: "https://www.freeatlastcoalition.org/team/bruce-huici/",
      verified: true,
    },
  ],
} as const;

/**
 * One Person entity across hallstat.com, nurvanarx.com and brucehuici.com:
 * the @id is the one brucehuici.com (Bruce's central professional site)
 * publishes. Owner request 2026-11-26; supersedes BLUEPRINT 11b's
 * hallstat.com-local @id.
 */
export const personId = "https://www.brucehuici.com/#person";
export const organizationId = `${site.url}/#organization`;
