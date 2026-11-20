# Hallstat.com Redesign Blueprint (Build Spec for Claude)

## 1. Current-site audit
- Single page with About Us + Our Vision only; stray "Our Vision 1" text block.
- No navigation, no product page, no evidence, no contact form, no calls to action.
- Footer reads "2022" — signals an inactive company to investors.
- Product (Hallstat Foley Catheter System: CallisterCatheter, Micro Tip, Bermeo Valve) appears only in SEO metadata, not on the page.
- Founder name in page title; professional device sites lead with the problem/product, not the person.

## 2. Benchmark comparison
| Pattern | Medtronic / Stryker | BD / Teleflex (Foley & urology) | Boston Scientific | Hallstat takeaway |
|---|---|---|---|---|
| Hero | One-line mission + patient/clinician imagery | Clinical problem framing (infection prevention) | Bold mission statement | Lead with CAUTI problem + "nurse-designed" solution |
| Navigation | Products, Healthcare Professionals, Patients, About, Investors | Product catalog by clinical area | Audience-split menus | Technology · Clinical Need · About · Investors · News · Contact |
| Trust | Quality/regulatory pages, ISO statements | Clinical evidence, IFUs, education | Safety & quality pages | Development-stage status, quality plan, regulatory pathway |
| Evidence | Publications, outcome data | Infection-prevention resources | Clinical trials pages | Cite CAUTI burden data (CDC/AHRQ); label Hallstat bench data as internal testing |
| Investors | Dedicated IR section | IR section | IR section | Gated investor room with deck, NDA request |
| Visual style | Lots of white space, single brand color, real photography | Clinical blues, diagrams | Strong typography | Navy/teal palette, clean sans-serif, product 3D renders |

## 3. Design direction
- Palette: deep navy (#0B2545), clinical teal (#13A89E), white, cool gray (#F4F6F8). One accent only.
- Type: Inter or Source Sans 3; large headlines, 16–18px body.
- Imagery: product renders/exploded view of valve and tip, nurse-at-bedside photography (licensed), no generic stock gradients.
- Tone: Use accurate, evidence-calibrated language ("designed to," "intended to reduce"). Never claim proven clinical outcomes, and never call the device investigational. Footer shows `site.disclaimer` (product and regulatory status) and the current year.
- Accessibility: WCAG 2.1 AA, keyboard nav, alt text, contrast ≥ 4.5:1.

## 3b. Homepage spec (final — owner-approved skeleton)
Primary goal of homepage: licensing/partnership leads from medical device companies. One action per section.

1. **Hero** — full-width dark navy background; single product shot of the full Hallstat system.
   - H1: "Stopping CAUTI Before It Starts" (title case; other headings use sentence case). Eyebrow: "Nurse-designed Foley system".
   - Subhead: "A nurse-designed Foley insertion kit built around how bacteria reach the bladder."
   - One button only: "See the Technology" → smooth-scroll to #product. No secondary button.
2. **Stats bar** — dark band, white text, three numbers across, tight padding, each with a small footnote citation link:
   - "13,000+" — "U.S. deaths associated with UTIs each year" — CDC CAUTI Guideline: https://www.cdc.gov/infection-control/hcp/cauti/background.html (note: CDC says *associated with UTIs*, not "preventable"; CDC estimates up to 9,000 CAUTI deaths/yr could be prevented — use "Up to 9,000 preventable deaths" if you want the word "preventable")
   - Cost stat — CDC/VDH cite $340M–$450M annually (https://www.vdh.virginia.gov/surveillance-and-investigation/hai/organisms/uti-and-cauti/); aggregate CAUTI hospitalization cost estimated at $1.3B in 2010 (https://pmc.ncbi.nlm.nih.gov/articles/PMC13451317/). Use "$1.3B" with citation, not an unsourced "billions."
   - Third stat — "zero design input from nurses until now" cannot be sourced and invites challenge. Replace with a verifiable stat, e.g., "15–25% of hospitalized patients receive a urinary catheter" (https://spice.unc.edu/wp-content/uploads/2026/04/13-UTI-Pathophysiology_Epidemiology_Prevention-2026-2.pdf) or keep the nurse message as a word stat: "Nurse-designed — built by the people who place them."
3. **Problem section** (#problem) — 2–3 short paragraphs: biofilm formation (adhesion → encrustation timeline), bacterial migration along the catheter and backflow from drainage tubing, and that bedside nurses rarely shape device design. Sidebar pull-quote card (right column, teal accent rule): "Designed by nurses. Built for nurses." — Bruce Huici, Founder & CEO.
4. **Product section** (#product) — split layout, image left, copy right. One line per component, then 2–3 sentences on how they work together. Component list (final):
   - MicroTip™ — smaller tip designed to reduce bladder-wall irritation
   - CallisterCatheter™ — 100% medical-grade silicone designed to resist bacterial adhesion
   - BermeoValve™ — reduces urine backflow from drainage tubing
   - BactiStat™ Tubing — kink-resistant drainage tubing designed to limit bacterial growth
   The system has exactly these four components. Do NOT mention a securement device or any coating technology anywhere on the site.
   No spec sheets on homepage.
5. **Science foundation** — 3–4 cards max; each card: topic tag, study title, journal + year, one-sentence takeaway, "Read more" → /studies#slug. Only peer-reviewed sources; label Hallstat's own bench work separately as "internal testing."
6. **Trust bar** — single row of grayscale badges: MBE certification, IFAH recognition, patent status ("Patent pending" / "U.S. Patent No. ___"). Use only badges you have written permission/proof for.
7. **Licensing CTA** (#partner) — dark band. Headline "Partner With Us"; line: "We work with medical device manufacturers and distributors to license and bring the Hallstat system to market." Inline form: Name, Organization, Role (dropdown: Procurement · Engineering/R&D · Business Development/Licensing · Clinical · Investor · Other), Email (needed to reply), optional message. Submit button: "Partner With Us." Route Role to HubSpot property for lead triage.

Inner pages (one-pager each): Product deep-dive (/technology), Studies (/studies), About (/about incl. team), Contact (/contact). Investors content moves to About or a gated link.

Open questions for owner:
- IFAH: full name of the recognition and badge file.
- Patent status: application/patent numbers.
- Which 3–4 peer-reviewed studies go on the homepage grid.

## 4. Sitemap
(Section 3b supersedes this list wherever they conflict.)
1. Home — see section 3b
2. Technology — CallisterCatheter (silicone), Micro Tip, Bermeo Valve; animated diagrams; IP status (patent pending/issued)
3. Clinical Need — CAUTI burden, cost to hospitals, CMS non-reimbursement context, sourced citations
4. Development Pipeline — timeline: design → bench testing → biocompatibility (ISO 10993) → 510(k) strategy → manufacturing partner → launch
5. About — mission, nurse-founded/MBE certification, founder + advisors bios, partners (universities, manufacturers)
6. Investors — opportunity summary, market size, use of funds, "Request Investor Deck" (NDA-gated)
7. News & Insights — press releases, blog, conference appearances
8. Contact — form segmented by Investor / Clinician / Partner / Media
9. Legal — Privacy, Terms, Cookie policy, Accessibility statement

## 5. Technical stack
- Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- MDX for News content (or headless CMS — see connectors)
- Framer Motion for subtle product animations
- Hosted on Vercel; domain hallstat.com pointed via Vercel DNS
- SEO: metadata per page, OpenGraph images, sitemap.xml, robots.txt, JSON-LD Organization + MedicalDevice schema
- Performance target: Lighthouse ≥ 95 all categories

## 6. Repo structure
```
/app
  /(site)/page.tsx            Home
  /technology/page.tsx
  /clinical-need/page.tsx
  /pipeline/page.tsx
  /about/page.tsx
  /investors/page.tsx
  /news/[slug]/page.tsx
  /contact/page.tsx
  /legal/{privacy,terms,accessibility}/page.tsx
  /api/contact/route.ts       Form handler → email + CRM
/components  Header, Footer, Hero, StatBlock, FeatureCard, Timeline, TeamCard, CTA, InvestorForm
/content/news/*.mdx
/public/images
```

## 7. Prompt for Claude (paste into Claude with repo access)
> Build the Hallstat Industries website in this repo per docs/BLUEPRINT.md. Use Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui. Implement every page in the sitemap with real placeholder copy written in accurate, evidence-calibrated language (never "investigational"). Create reusable components listed in section 6. Add the contact API route with Zod validation and Resend email delivery (env: RESEND_API_KEY, CONTACT_TO_EMAIL). Add Vercel Analytics, sitemap, robots, JSON-LD. Ensure WCAG AA and mobile-first layout. Open a pull request per page group so each gets a Vercel preview.

## 8. Recommended connectors / integrations
| Priority | Service | Purpose |
|---|---|---|
| Must | GitHub + Vercel | Code, preview deployments per PR, production hosting, domain |
| Must | Resend (or SendGrid) | Contact/investor form email delivery |
| Must | Vercel Analytics or Google Analytics 4 + Search Console | Traffic, SEO indexing |
| High | HubSpot (free CRM) | Capture investor/partner leads, follow-up pipeline |
| High | DocuSign / Dropbox Sign | NDA e-signature before deck release |
| High | DocSend or Google Drive | Secure, trackable investor deck sharing |
| Medium | Sanity or Contentful CMS | Edit news/team without code |
| Medium | Calendly | "Book a call" with investors/partners |
| Medium | Cloudflare Turnstile | Spam protection on forms |
| Medium | Cookie consent (Cookiebot/Termly) | Privacy compliance |
| Later | LinkedIn Insight Tag | Investor-audience retargeting |

## 9. Existing content inventory (migrate + rewrite)

### 9a. Foley System page (/hallstat-foley-system → /technology)
Source: https://www.hallstat.com/hallstat-foley-system

Four components — standardize names everywhere (pick one spelling, confirm ™ vs ® with counsel):
| Component | Standard name | Current claim | Rewrite direction |
|---|---|---|---|
| Tip | MicroTip™ | Less than 1/3 the size of standard tip; bladder injury "mortality as high as 34%" | Keep size spec; cite or remove 34% stat; "designed to reduce bladder-wall irritation" |
| Catheter | CallisterCatheter™ (currently also "CallisterCath", "Callister Catheter") | 100% medical-grade silicone, reduced bacterial adhesion; "clean after six weeks" vs "occluded after two weeks" | Present 6-week image as internal bench observation with method/date; remove the antimicrobial-coating comparison paragraph and "making antimicrobial coats a thing of the past" entirely (no coating discussion on the site) |
| Valve | BermeoValve™ | Reduces backflow; fits any drainage tubing/other manufacturers' catheters; low opening pressure; ID larger than catheter entry for clots/sediment; (current page also mentions optional silver-alloy/hydrogel coating — remove) | Strongest technical story — build interactive flow diagram; "designed to be compatible with" |
| Tubing | BactiStat™ Tubing (currently also "Bacti Stat") | Infused with BactiStat technology; softer PVC; spiral support reduces kinking | Explain what "BactiStat technology" is at a non-confidential level, or label "in development" |

Fix: unexplained "NovaStat" label (define it or remove), typo "free of bacterial. growth", "pinnacle of indwelling catheter technology" and competitor-cost-cutting language (replace with neutral, factual positioning).

Keep and redesign: the "Bacterial Adhesion Timeline" (seconds → minutes → hours → days → encrustation) as an animated horizontal timeline with a literature citation. Keep "Our Design" valve challenges as a 3-card "Problem → Our approach" block.

Technology page layout: hero with full-system render → sticky sub-nav (MicroTip · CallisterCatheter · BermeoValve · BactiStat) → one section per component (problem, design, status, figure) → adhesion timeline → "Development status" table → regulatory status block → CTA (Request technical brief / Partner with us).

### 9b. Our Team page (/our-team → /about#team)
Source: https://www.hallstat.com/our-team

Leadership: Bruce Huici (President/CEO), Carlos Peña (Director/CFO), Bryan Martin (Director/COO), Kenneth Iroezi (International Business Development).
Medical Advisory Board: Dr. Mohamad El Kassim, Dr. Justin Speigel, Dr. Mileivys Huici, Dr. Nora Homsi.

Current gaps: no bios, credentials, photos, or links. Investors weigh team heavily, so each card needs:
- Professional headshot (consistent background/lighting)
- Credentials after name (e.g., RN, MD, MBA) and specialty/affiliation
- 2–3 sentence bio focused on relevant experience
- LinkedIn link
- Separate "Leadership" and "Medical Advisory Board" groups; consider adding "Engineering / Manufacturing Partners"

Action: collect a bio + headshot + LinkedIn + permission to publish from each person before build. Use placeholder cards until received.

Data file for Claude: `/content/team.json` with fields name, credentials, title, group, bio, photo, linkedin.

## 10. Launch checklist
- Replace 2022 footer; footer shows `site.disclaimer` (product and regulatory status)
- Verify all statistics carry a citation link
- Confirm patent/trademark wording (™ vs ®) with counsel
- Redirect old URLs (301) in vercel.json: /hallstat-foley-system → /technology, /our-team → /about#team
- Test forms end-to-end in Vercel preview before switching DNS

## 11. Founder name search & reputation (SEO for "Bruce Huici")
Goal: make hallstat.com a strong, credible result for searches of "Bruce Huici," reinforcing brucehuici.com, LinkedIn, and Medium. Use only legitimate, accurate content — no keyword stuffing, hidden text, doorway pages, or link schemes (these can get the site penalized).

### 11a. Dedicated founder page — `/about/bruce-huici`
- `<title>`: "Bruce Huici — Founder & CEO, Hallstat Industries"
- H1: "Bruce Huici"; subhead: "Founder & CEO, Hallstat Industries · Nurse · Medical Device Inventor"
- 400–700 words: nursing background, why he invented the Hallstat system, inventions (MicroTip™, CallisterCatheter™, BermeoValve™, BactiStat™ Tubing), patents (TODO numbers), MBE certification, other ventures, speaking/press.
- Professional headshot, filename `bruce-huici-founder-hallstat.jpg`, alt "Bruce Huici, founder and CEO of Hallstat Industries".
- "In the News" list linking to press releases (`/news`) and outside coverage.
- "Affiliations & Recognition" list:
  - Member, Free At Last Coalition (501(c)(3) nonprofit) — link: https://www.freeatlastcoalition.org/team/bruce-huici/
  - Top 100 Healthcare Leader, 2019 — TODO: confirm awarding organization and add link/proof before publishing
- Links out to brucehuici.com, LinkedIn, Medium (rel="me").
- Self-referencing canonical URL.

### 11b. Structured data (JSON-LD)
- On `/about/bruce-huici`: `ProfilePage` with `mainEntity` = `Person`:
  - name "Bruce Huici", jobTitle "Founder & CEO", worksFor Organization "Hallstat Industries Inc.", image, url, description, knowsAbout ["Foley catheters", "CAUTI prevention", "medical device design", "nursing"]
  - `memberOf`: {"@type": "Organization", "name": "Free At Last Coalition", "url": "https://www.freeatlastcoalition.org"}
  - `subjectOf`: [{"@type": "WebPage", "url": "https://www.freeatlastcoalition.org/team/bruce-huici/"}] (third-party bio pages go here, not in sameAs)
  - `sameAs`: ["https://www.brucehuici.com", "https://www.linkedin.com/in/bruce-huici-207b1939", "https://medium.com/@BruceHuici", "https://www.crunchbase.com/person/bruce-huici-383a", "https://www.facebook.com/BruceHuici"]
- On every page: `Organization` schema with `founder` → the Person `@id` (`https://www.hallstat.com/about/bruce-huici#person`).
- On news posts: `NewsArticle` with `author` = the Person `@id`.

### 11c. Name signals site-wide (natural, not stuffed)
- Footer line on all pages: "Hallstat Industries Inc. — founded by Bruce Huici" linking to the founder page.
- Homepage pull-quote attributed "— Bruce Huici, Founder & CEO" linking to the founder page.
- Team card for Bruce links to the founder page.
- Remove "| Bruce Huici" from the end of every page title (current site does this; it reads as stuffing). Only the founder page and news posts quoting him use his name in titles.
- Unique `<title>` and meta description on every page; Open Graph + Twitter card images.

### 11d. Newsroom — `/news`
- MDX posts for press releases (e.g., U.S./nearby manufacturing evaluation release), conference appearances, milestones. Each post: date, author byline "Bruce Huici" linking to founder page, quote from Bruce, 300+ words.
- RSS feed at `/news/rss.xml` so posts can be syndicated to LinkedIn/Medium (use canonical link back to hallstat.com).
- Plan: 1–2 posts per month; consistent fresh content helps more than volume.

### 11e. Technical SEO
- Static generation for all pages; Lighthouse ≥ 95; Core Web Vitals passing.
- `sitemap.xml` (include founder page and every news post), `robots.txt`, clean URLs, 301 redirects from old Wix URLs.
- Google Search Console + Bing Webmaster Tools verification meta tags via env vars (`NEXT_PUBLIC_GSC_VERIFICATION`, `NEXT_PUBLIC_BING_VERIFICATION`); submit sitemap after launch.
- Cross-link: brucehuici.com, LinkedIn (Featured + Experience → Hallstat), Medium bio should all link to `https://www.hallstat.com/about/bruce-huici`.

### 11f. Expectations
Search ranking changes typically take weeks to months, and no site build can guarantee a specific position or remove another site's result. This work strengthens accurate, authoritative pages so they compete well for the name.
