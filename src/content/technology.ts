/**
 * /technology content — rewritten from the current product page per docs/BLUEPRINT.md section 9a.
 * Rules: exactly four components, no securement device, no coating technology, investigational language only.
 */

export type ComponentSection = {
  slug: string;
  name: string;
  /** Short label for the sticky sub-nav. */
  navLabel: string;
  problem: string;
  design: string[];
  status: string;
};

export const componentSections: ComponentSection[] = [
  {
    slug: "microtip",
    name: "MicroTip™",
    navLabel: "MicroTip",
    problem:
      "The tip of a standard Foley catheter extends past the retention balloon into the bladder, where it can press against and irritate the bladder lining.",
    design: [
      "The MicroTip™ is less than one-third the size of a standard catheter tip. It is designed to reduce contact with the bladder wall, and the irritation that comes with it, during drainage.",
      "The tip is intended to be adaptable to a range of catheter designs without a significant increase in manufacturing cost.",
    ],
    status: "TODO: confirm development stage",
  },
  {
    slug: "callistercatheter",
    name: "CallisterCatheter™",
    navLabel: "CallisterCatheter",
    problem:
      "Bacteria colonize a catheter by first adhering to its wall. Once attached, they can multiply into a biofilm that is difficult to remove without replacing the device.",
    design: [
      "The CallisterCatheter™ is made of 100% medical-grade silicone and is designed to resist bacterial adhesion on the catheter surface.",
      // TODO: add a peer-reviewed citation before publishing any silicone-vs-latex adhesion comparison.
    ],
    status: "TODO: confirm development stage",
  },
  {
    slug: "bermeovalve",
    name: "BermeoValve™",
    navLabel: "BermeoValve",
    problem:
      "Urine can settle in the drainage tubing, where bacteria can grow. If the tubing or bag is moved and the direction of flow changes, that urine can travel back toward the bladder.",
    design: [
      "The BermeoValve™ is a one-way valve intended to reduce urine backflow from the drainage tubing. It is designed to fit at the end of standard drainage tubing and to be compatible with catheters from various manufacturers.",
      "It uses medical-grade elastomers and minimal moving parts to simplify manufacturing.",
    ],
    status: "TODO: confirm development stage",
  },
  {
    slug: "bactistat",
    name: "BactiStat™ Tubing",
    navLabel: "BactiStat",
    problem:
      "When drainage tubing kinks, urine flow can stop and urine can pool in the line, giving bacteria more time to grow.",
    design: [
      "BactiStat™ Tubing is a softer PVC drainage tubing with a spiral support designed to reduce kinking and keep urine flowing toward the bag.",
      "The BactiStat™ technology that is designed to limit bacterial growth in the tubing is in development. A non-confidential summary will be added here.", // TODO(owner): non-confidential description
    ],
    status: "In development — TODO: confirm stage",
  },
];

/** BermeoValve "Problem → Our approach" cards (BLUEPRINT 9a "Our Design" block). */
export const valveChallenges = [
  {
    problem: "Moving the bag or tubing can send urine back toward the bladder.",
    approach: "A one-way valve at the end of the drainage tubing, designed to reduce backflow.",
  },
  {
    problem: "Clots and sediment can block a valve and stop drainage.",
    approach: "An inner diameter larger than the catheter entry, intended to let clots and sediment pass.",
  },
  {
    problem: "A valve that is hard to open can slow drainage.",
    approach: "A low opening pressure, designed so urine drains freely in the forward direction.",
  },
];

/** Bacterial adhesion timeline on a standard catheter. TODO: add literature citation (BLUEPRINT 9a). */
export const adhesionTimeline = [
  { when: "Seconds", what: "Bacteria stick to the catheter surface (reversible)." },
  { when: "Minutes", what: "Attachment becomes irreversible." },
  { when: "Hours", what: "Bacteria begin to replicate." },
  { when: "Days", what: "A protective biofilm layer begins to form." },
  { when: "Days", what: "Crystals can form (encrustation), shielding bacteria from antibiotics." },
];
