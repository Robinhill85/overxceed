# overxceed.com

Next.js 15 (App Router, full SSG) rebuild of www.overxceed.com. The previous
Vite SPA (which shipped an empty `<div id="root">` to crawlers) is preserved
untouched in `legacy-vite/`.

## Commands

```bash
npm run dev              # local dev
npm run build            # production build (all routes static)
npm run start            # serve the production build
npm run validate-schema  # P1-3 JSON-LD assertions against the built HTML
                         # (or: node scripts/validate-schema.mjs http://localhost:3000)
```

## Pages

| Route | Purpose | Indexed |
|---|---|---|
| `/` | Home — operator credibility, the two offers, work teaser, about, contact | yes |
| `/local` | AI Visibility System for local businesses (Redhill · Reigate · Surrey) | yes |
| `/operator` | 90-day AI operator engagement — pricing on request | yes |
| `/work` | Portfolio | yes |
| `/work/sam-barber` | DRAFT case study — publishing checklist in the page source; not linked | **noindex** |
| `/blog` (+1 placeholder) | GEO/AI-visibility content cluster, structure only | **noindex** |
| `/robonky` | Legacy music page, kept reachable, out of nav | **noindex** |

## Hard rules (Robin's rulings)

- **NO public pricing anywhere.** No currency figures, no tier tables, no
  engagement-fee "from" numbers. Sole CTA is "Book a call" (Motion). HTML
  comments in `/local` and `/operator` mark where prices would go if the
  ruling ever reverses. Schema uses the vague `priceRange: "££"` band only.
- **No WhatsApp CTA** (no business WhatsApp exists). The WhatsApp booking
  *agent* may be described as a product component.
- Content is never `opacity: 0` pre-scroll — CSS transform-only entrance
  animation, `prefers-reduced-motion` respected.
- Canonical host is **www**; `vercel.json` 308s apex → www.

## Ops notes

- **Monthly: check the Formspree spam folder** (form `xnjbgoyd`, recipient
  robin@overxceed.com). Bots already target the form; a real brief could be
  misclassified. (P0-1 follow-up, 2026-07-07.)
- Analytics: `@vercel/analytics` pageviews + custom events `brief_submit`
  and `motion_click`. Custom events need a paid Vercel plan — on Hobby they
  no-op harmlessly.
- GBP setup doc (ready to paste): `docs/gbp-setup.md` — Robin executes.
- Lighthouse snapshots: `docs/perf/*.json`.
