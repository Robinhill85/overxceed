import { SITE_URL, LINKEDIN_URL, X_URL } from "./constants";

// NOTE: `priceRange` uses a vague GBP band ("££") deliberately — Robin's
// no-public-pricing ruling (2026-07-08) forbids figures, a band is allowed.
// No "robinweb3" string may appear in any schema block (validated by
// scripts/validate-schema.mjs).

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robin van den Heuvel",
  url: SITE_URL,
  jobTitle: "AI Operator",
  worksFor: {
    "@type": "Organization",
    name: "OverXceed",
    url: SITE_URL,
  },
  knowsAbout: [
    "AI Systems Implementation",
    "AI Visibility",
    "Generative Engine Optimization",
    "Workflow Automation",
    "AI Agents",
  ],
  sameAs: [X_URL, LINKEDIN_URL],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OverXceed",
  url: SITE_URL,
  logo: `${SITE_URL}/black-blue-logo.png`,
  image: `${SITE_URL}/black-blue-logo.png`,
  description:
    "AI operator studio. We build AI systems inside your business — in 90 days, you own them. The AI Visibility System for UK local service businesses and 90-day operator engagements for UK SMEs.",
  priceRange: "££",
  founder: {
    "@type": "Person",
    name: "Robin van den Heuvel",
    sameAs: [X_URL, LINKEDIN_URL],
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: [
    "AI Systems Implementation",
    "AI Visibility",
    "Generative Engine Optimization",
    "Workflow Automation",
  ],
  knowsAbout: [
    "AI Systems Implementation",
    "AI Visibility",
    "SEO",
    "AEO",
    "GEO",
    "AI Booking Agents",
    "Review Generation",
    "Workflow Automation",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/local#business`,
  name: "OverXceed — AI Visibility System",
  url: `${SITE_URL}/local`,
  image: `${SITE_URL}/black-blue-logo.png`,
  description:
    "AI Visibility System for local service businesses in Redhill, Reigate and across Surrey: website, AI visibility (GEO), Google reviews engine, WhatsApp booking agent and a monthly proof report.",
  priceRange: "££",
  founder: {
    "@type": "Person",
    name: "Robin van den Heuvel",
    sameAs: [X_URL, LINKEDIN_URL],
  },
  areaServed: [
    { "@type": "City", name: "Redhill" },
    { "@type": "City", name: "Reigate" },
    { "@type": "AdministrativeArea", name: "Surrey" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Redhill",
    addressRegion: "Surrey",
    addressCountry: "GB",
  },
};
