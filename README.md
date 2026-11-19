# Hallstat Website

Source for www.hallstat.com — Hallstat Industries, nurse-designed Foley catheter system for CAUTI prevention.

- Build spec: [docs/BLUEPRINT.md](docs/BLUEPRINT.md)
- Instructions for Claude: [CLAUDE.md](CLAUDE.md)
- Team data: [content/team.json](content/team.json)

Hosting: Vercel (preview deployment per pull request).

## Development
```bash
npm install
cp .env.example .env.local
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui conventions (`components.json`, `src/components/ui`) · Vercel Analytics.

Design tokens live in `src/app/globals.css` (`@theme`). Site name, nav, disclaimer and founder link live in `src/config/site.ts`.
