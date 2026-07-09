import { SITE_URL } from "@/lib/constants";

// Canonical host is www — every URL here references it (P1-1).
// Noindexed routes (/robonky, /blog/*, /work/sam-barber draft) are
// deliberately excluded.
export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/local`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/operator`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/work`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
