import Link from "next/link";

/*
 * Placeholder article route (P2-3 — structure only, writing is out of scope).
 * Noindexed until the real article ships.
 */

export const metadata = {
  title: "What is Generative Engine Optimization (GEO)?",
  description:
    "A practical guide to generative engine optimization — coming soon.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/blog/what-is-generative-engine-optimization" },
};

export default function GeoArticlePlaceholder() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 pt-40 pb-24">
      <article className="max-w-3xl mx-auto">
        <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
          Coming soon
        </p>
        <h1 className="text-4xl md:text-5xl heading-hero text-navy mb-8">
          What is Generative Engine Optimization?
        </h1>
        <p className="text-lg text-navy/70 font-sans leading-relaxed mb-8">
          This article is being written. It will cover what GEO is, how it
          differs from classic SEO, and what actually moves the needle when
          you want ChatGPT, Gemini and Perplexity to recommend your business.
        </p>
        <Link
          href="/local"
          className="font-sans font-semibold text-blue-700 hover:text-blue-800 transition-colors"
        >
          In the meantime: see the AI Visibility System &rarr;
        </Link>
      </article>
    </main>
  );
}
