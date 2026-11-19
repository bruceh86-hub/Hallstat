# CLAUDE.md — Build Instructions for the Hallstat Website

You are building the new www.hallstat.com. The full spec is in `docs/BLUEPRINT.md`. Read it completely before writing code. Section 3b (Homepage spec) overrides anything else it conflicts with.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion (subtle only) · deployed on Vercel.

## Non-negotiable content rules
1. The Hallstat system has exactly four components: MicroTip™, CallisterCatheter™, BermeoValve™, BactiStat™ Tubing. Use these exact spellings everywhere.
2. Never mention a securement device or any coating technology.
3. Use investigational, evidence-calibrated language ("designed to," "intended to reduce"). Never claim proven clinical outcomes.
4. Every statistic shows a visible citation link to its source (sources listed in BLUEPRINT section 3b).
5. Do not invent studies, certifications, patent numbers, team bios, or logos. Use clearly marked placeholders (`TODO:`) instead.
6. Footer includes: "Caution: Investigational device. Not available for sale." and the current year.

## Homepage (one action per section)
Hero → Stats bar → Problem (with founder pull-quote sidebar) → Product (image left, copy right) → Science grid (3–4 cards → /studies) → Trust bar → Partner With Us form (Name, Organization, Role dropdown, Email, Message).

## Build order (one pull request per step so each gets a Vercel preview)
1. Project scaffold, design tokens (BLUEPRINT section 3), Header, Footer, layout
2. Homepage
3. /technology (product deep-dive)
4. /studies
5. /about (includes team from `content/team.json`)
6. /contact + `/api/contact` route (Zod validation, Resend email; env: RESEND_API_KEY, CONTACT_TO_EMAIL)
7. SEO (metadata, sitemap, robots, JSON-LD), legal pages, 301 redirects in `vercel.json`

## Quality bar
WCAG 2.1 AA, mobile-first, Lighthouse ≥ 95, no lorem ipsum.
