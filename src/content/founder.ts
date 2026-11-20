import { site } from "@/config/site";

/** Founder page data — docs/BLUEPRINT.md section 11. Only verified facts; gaps are TODO. */
export const founder = {
  name: "Bruce Huici",
  jobTitle: "Founder & CEO",
  subhead: "Founder & CEO, Hallstat Industries · Nurse · Medical Device Inventor",
  path: "/about/bruce-huici",
  photo: "/images/team/bruce-huici-founder-hallstat.jpg",
  photoAlt: "Bruce Huici, founder and CEO of Hallstat Industries",
  description:
    "Bruce Huici is a nurse, medical device inventor and the founder and CEO of Hallstat Industries, which is developing a nurse-designed Foley catheter system intended to reduce catheter-associated urinary tract infection risk.",
  knowsAbout: ["Foley catheters", "CAUTI prevention", "medical device design", "nursing"],
  links: [
    { label: "brucehuici.com", href: "https://www.brucehuici.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bruce-huici-207b1939" },
    { label: "Medium", href: "https://medium.com/@BruceHuici" },
    { label: "Crunchbase", href: "https://www.crunchbase.com/person/bruce-huici-383a" },
    { label: "Facebook", href: "https://www.facebook.com/BruceHuici" },
  ],
  affiliations: [
    {
      label: "Member, Free At Last Coalition (501(c)(3) nonprofit)",
      href: "https://www.freeatlastcoalition.org/team/bruce-huici/",
      verified: true,
    },
    {
      label: "Top 100 Healthcare Leader, 2019 — TODO: confirm awarding organization and add proof before publishing",
      href: "",
      verified: false,
    },
  ],
} as const;

export const personId = `${site.url}${founder.path}#person`;
export const organizationId = `${site.url}/#organization`;
