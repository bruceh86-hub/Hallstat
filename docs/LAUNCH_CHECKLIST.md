# Pre-launch checklist

Placeholders marked TODO show on preview links and are **hidden automatically on the live site**
(`src/lib/placeholders.ts`). Filling them in makes the content appear. Nothing unverified is published.

## Must do before switching hallstat.com
- [ ] **Verify the three homepage statistics** by opening each link (CDC, PMC, UNC SPICE) and confirming the number and wording. These could not be checked from the build environment.
- [ ] **Attorney review**: Privacy Policy, Terms of Use (governing law, liability wording), ™ vs ® for MicroTip, CallisterCatheter, BermeoValve, BactiStat.
- [ ] **DNS move**: follow `docs/LAUNCH_DNS.md` (includes info@hallstat.com MX records and the Google site-verification TXT).
- [ ] **Search Console**: hallstat.com is already verified with Google (TXT record). After launch, submit `https://www.hallstat.com/sitemap.xml`. Optional: Bing Webmaster Tools (set `NEXT_PUBLIC_BING_VERIFICATION` in Vercel).
- [ ] **Cross-link the founder page** from brucehuici.com, LinkedIn (Featured + Experience), Medium bio: `https://www.hallstat.com/about/bruce-huici`.
- [ ] Test both forms on the live domain.

## Content waiting on the owner (hidden until supplied)
| Item | Where it appears |
|---|---|
| Nursing background (years, specialties, settings) | Founder page |
| Why you invented the system | Founder page |
| Patent status / numbers | Technology status table, trust bar, founder page |
| MBE certification (body, date, proof) | Trust bar, About, founder page |
| IFAH recognition (full name, badge file) | Trust bar |
| Top 100 Healthcare Leader 2019 (awarding organization, proof) | Founder page |
| Component status (optional) | Technology page |
| Bench observation method, date, conditions, sample size | Technology page (CallisterCatheter) |
| Citation for the bacterial adhesion timeline | Technology page |
| Non-confidential description of BactiStat technology | Technology page |
| Headshots: Bryan Martin, Carlos Peña, Dr. El Kassim, Dr. Speigel, Dr. Homsi | About page |
| Credentials, 2–3 sentence bio, LinkedIn for each team member | About page (`content/team.json`) |
| High-resolution product photos (and a BactiStat Tubing photo) | Homepage, Technology |
| First press release (and 1–2 per month after) | News, founder page |

## Later
- [ ] HubSpot: route the form's Role field into a contact property (`src/app/api/contact/route.ts`).
- [ ] Cloudflare Turnstile on forms if spam appears (a honeypot is already in place).
