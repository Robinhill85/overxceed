# OverXceed.com SEO Audit Report
**Date:** 2026-02-22 | **Auditor:** Claude (DataForSEO MCP)

---

## Executive Summary

**overxceed.com is effectively invisible to Google.** Zero ranked keywords, zero organic traffic, zero domain authority. The site is a well-built React SPA with strong Lighthouse scores (89/100/100/100) but fundamental SEO architecture problems prevent any indexation. This audit prioritizes fixes by severity.

---

## Current State Snapshot

| Metric | Value | Verdict |
|--------|-------|---------|
| Ranked Keywords | **0** | Critical |
| Organic Traffic (est.) | **0/mo** | Critical |
| Domain Authority | **Not indexed** | Critical |
| Backlink Profile | **No data** | Critical |
| Competitors Found | **0** (Google doesn't know this site) | Critical |
| Lighthouse Performance | **89** | Good |
| Lighthouse Accessibility | **100** | Excellent |
| Lighthouse Best Practices | **100** | Excellent |
| Lighthouse SEO (technical) | **100** | Misleading* |

*Lighthouse SEO score only checks technical meta tags, not actual search visibility. The site passes all automated checks but has zero real-world SEO presence.*

---

## P0 - CRITICAL (Fix Immediately)

### 1. Client-Side Rendering = Google Can't See Your Content

**The Problem:** overxceed.com is a Vite + React SPA. The HTML served to crawlers is:
```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```
Google sees an empty page until JavaScript executes. While Googlebot *can* render JS, it:
- Deprioritizes JS-rendered pages in crawl queue
- May take weeks/months to fully render new SPA content
- Frequently misses dynamically loaded text/sections
- Gives ranking preference to SSR/SSG content

**The Fix:** Migrate to **Next.js** (or Astro) for Static Site Generation (SSG). Since this is a single landing page, SSG is trivial - the entire site pre-renders to static HTML at build time. You keep React, keep Vite's speed during dev, but ship crawlable HTML.

**Effort:** ~4-8 hours (the site is 8 components, single page)
**Impact:** Unlocks ALL other SEO efforts. Nothing else matters until this is fixed.

### 2. No robots.txt

**The Problem:** No `/robots.txt` means no explicit crawl instructions for search engines.

**The Fix:** Add to `/public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://overxceed.com/sitemap.xml
```

**Effort:** 5 minutes

### 3. No sitemap.xml

**The Problem:** No XML sitemap means Google has no roadmap for the site.

**The Fix:** Add to `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://overxceed.com/</loc>
    <lastmod>2026-02-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Effort:** 5 minutes (expand as you add pages)

### 4. OG URL Points to Wrong Domain

**The Problem:** Open Graph tags reference `overxceed.vercel.app` instead of `overxceed.com`:
```html
<meta property="og:url" content="https://overxceed.vercel.app/" />
<meta property="og:image" content="https://overxceed.vercel.app/black-blue-logo.png" />
```

This splits link equity between two domains and confuses crawlers.

**The Fix:** Update all URLs to `https://overxceed.com/`.

**Effort:** 5 minutes

### 5. No Canonical URL

**The Problem:** Without a `<link rel="canonical">`, Google may index the Vercel subdomain AND the custom domain as separate pages, diluting any authority.

**The Fix:** Add to `<head>`:
```html
<link rel="canonical" href="https://overxceed.com/" />
```

**Effort:** 2 minutes

---

## P1 - HIGH PRIORITY (Fix This Week)

### 6. Title Tag is Wrong

**Current:** `"OverXceed | Cinematic Landing Page"`
**Problem:** "Cinematic Landing Page" is meaningless to search engines and users. It describes the template, not the business.

**Recommended:** `"OverXceed | AI-Powered Marketing Agency - Websites, Content & Campaigns"`
- Includes primary keyword ("AI marketing agency")
- Describes the service offering
- Under 60 characters

### 7. Meta Description Needs Keyword Optimization

**Current:** *"One senior operator. Every time. We build websites, content, and campaigns using AI pipelines."*
**Problem:** Good brand copy, but missing searchable keywords.

**Recommended:** *"AI marketing agency delivering websites, content, and campaigns through AI pipelines. One senior operator, faster turnaround, measurable outcomes."*
- Leads with target keyword
- Retains brand personality
- Under 160 characters

### 8. H1 Lacks Keywords

**Current:** `"You need better marketing. Not more of it."`
**Problem:** Great tagline, but Google uses H1 as a major ranking signal. This H1 contains no target keywords.

**Options:**
- A) Change H1 to keyword-rich: `"AI Marketing Agency: Better Marketing, Not More of It"`
- B) Keep current H1 but add a keyword-rich subtitle/paragraph immediately below

### 9. No Structured Data (JSON-LD)

**The Problem:** No schema markup means no rich snippets in search results.

**The Fix:** Add Organization + ProfessionalService schema:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "OverXceed",
  "url": "https://overxceed.com",
  "logo": "https://overxceed.com/black-blue-logo.png",
  "description": "AI-powered marketing agency building websites, content, and campaigns using AI pipelines.",
  "serviceType": ["Marketing Agency", "Web Development", "Content Production", "Brand Strategy"],
  "areaServed": "Worldwide",
  "founder": {
    "@type": "Person",
    "name": "[Your Name]"
  }
}
```

### 10. Images Are Crushing Performance

**The Data:**
| Image | Size | Potential Savings |
|-------|------|-------------------|
| `ai-source-tool.png` | 2,144 KB | ~1,636 KB with WebP |
| `genai.png` | 1,125 KB | ~1,012 KB with WebP |
| `market-research.png` | 154 KB | ~100 KB |
| **Total page weight** | **3,919 KB** | **~2,800 KB saveable** |

**The Fix:**
1. Convert all PNGs to WebP/AVIF (83% of page weight is these two images)
2. Add responsive `srcset` attributes
3. Add explicit `width`/`height` to `white-logo.png` (causes CLS)
4. This alone would push Performance from 89 to ~96+

---

## P2 - MEDIUM PRIORITY (Fix This Month)

### 11. Missing `<main>` Semantic Element

**Current:** Content goes directly into `<div id="root">` → component sections
**Fix:** Wrap main content in `<main>` element for accessibility and SEO signals

### 12. Portfolio Items Should Use `<article>` Tags

**Current:** Portfolio cards are `<div>` elements
**Fix:** Wrap each in `<article>` for semantic meaning

### 13. No Twitter Card Meta Tags

**Add:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="OverXceed | AI Marketing Agency" />
<meta name="twitter:description" content="AI marketing agency..." />
<meta name="twitter:image" content="https://overxceed.com/black-blue-logo.png" />
```

### 14. Google Fonts Render-Blocking

**The Problem:** Inter + Newsreader fonts block first paint.
**The Fix:** Add `&display=swap` to font URL (already present) + consider `<link rel="preload">` for critical font weights.

### 15. 52 KB Unused JavaScript

**The Problem:** Main bundle has ~52 KB of unused code.
**The Fix:** Code-split or tree-shake. GSAP is likely the culprit - only import used modules.

### 16. No Content Strategy / Blog

**The Problem:** A single-page SPA with no blog or content pages means:
- Only 1 URL to index
- No long-tail keyword opportunities
- No internal linking structure
- No topical authority building

**Recommendation:** Add a `/blog` or `/work` section with:
- Case study pages (you have 6 portfolio items - make each a full page)
- Thought leadership on AI marketing
- This creates indexable URLs and keyword targets

---

## Keyword Opportunity Map

Based on DataForSEO analysis, here are the keywords overxceed.com should target:

### Tier 1: Primary Keywords (target on homepage)

| Keyword | Monthly Volume | Difficulty | CPC | Action |
|---------|---------------|------------|-----|--------|
| ai marketing agency | 1,600 | 28 (Easy) | $21.04 | **Best opportunity** - moderate volume, low difficulty |
| ai digital marketing agency | 320 | 27 (Easy) | $15.30 | Secondary homepage keyword |
| marketing ai agency | 260 | 28 (Easy) | $18.23 | Synonym variant |
| ai powered marketing agency | 140 | 44 (Medium) | $28.75 | Growing +1,600% YoY |

### Tier 2: Long-tail Keywords (blog/case study pages)

| Keyword | Monthly Volume | Difficulty | CPC |
|---------|---------------|------------|-----|
| ai content agency | - | 44 | - |
| ai creative agency | ~30-50 | ~40 | High |
| one person marketing agency | Emerging | N/A | - |
| fractional marketing operator | Emerging | N/A | - |
| vibe coded website | Emerging | N/A | - |

### Tier 3: Informational (blog content)

| Keyword | Difficulty | Intent |
|---------|------------|--------|
| what is ai marketing agency | 1 (Trivial) | Informational |
| how to start an ai marketing agency | 9 (Easy) | Informational/Commercial |
| ai tools for marketing agency | 32 (Easy) | Commercial |

### Key Insight
**"AI marketing agency" at KD 28 is a gift.** Most agency-type keywords have difficulty 50+. The SERP is dominated by directories and Reddit, not entrenched competitors. A well-optimized page with SSR and 5-10 quality backlinks could realistically rank page 1 within 2-3 months.

---

## Competitive Landscape (SERP "AI marketing agency")

| Position | Domain | Type |
|----------|--------|------|
| #1 | thekeenfolks.com | Direct competitor (AI agency) |
| #2 | reddit.com | Forum discussion |
| #3-5 | Local pack results | Location-specific agencies |
| #6 | digitalagencynetwork.com | Directory listing |
| #7 | aimediagroup.com | Direct competitor |
| #8 | youtube.com | Video content |
| #9 | salesforce.com | Informational |

**Observation:** No dominant player. Mix of directories, forums, and small agencies. Very attackable SERP.

---

## Implementation Roadmap

### Week 1 (P0 - Unblock indexation)
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Fix canonical URL and OG tags (change from vercel.app to overxceed.com)
- [ ] Submit sitemap to Google Search Console
- [ ] Begin Next.js migration (or add prerendering)

### Week 2 (P1 - Optimize content signals)
- [ ] Update title tag with target keyword
- [ ] Optimize meta description
- [ ] Add JSON-LD structured data
- [ ] Compress/convert images to WebP
- [ ] Add width/height to logo image

### Week 3 (P1-P2 - Content & semantics)
- [ ] Evaluate H1 keyword strategy
- [ ] Add `<main>` and `<article>` semantic elements
- [ ] Add Twitter Card meta tags
- [ ] Code-split GSAP bundle

### Month 2+ (P2 - Growth)
- [ ] Create individual case study pages (6 portfolio items = 6 new URLs)
- [ ] Start blog with AI marketing content targeting informational keywords
- [ ] Build backlinks (directory submissions, guest posts)
- [ ] Monitor Google Search Console for indexation and impressions

---

## Bottom Line

**The site looks great but is a ghost to Google.** The #1 blocker is SPA architecture serving empty HTML to crawlers. Fix that, add basic SEO hygiene (canonical, sitemap, robots.txt, structured data), and target "AI marketing agency" (KD 28, 1,600 vol/mo) - you have a realistic shot at page 1 within 2-3 months. The SERP is wide open.
