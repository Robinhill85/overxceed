import Link from "next/link";

/*
 * P2-3: blog structure only. Noindexed until real articles exist.
 * Planned cluster (from the audit's keyword research):
 *  - "generative engine optimization" (1,000/mo UK)
 *  - "ai visibility" (170/mo, fast-growing)
 */

export const metadata = {
  title: "Blog",
  description:
    "Notes on AI visibility and generative engine optimization — coming soon.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 pt-40 pb-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
          Blog
        </p>
        <h1 className="text-4xl md:text-6xl heading-hero text-navy mb-8">
          Notes on <span className="heading-display text-blue-700">AI visibility</span>
        </h1>
        <p className="text-lg text-navy/70 font-sans leading-relaxed mb-12 max-w-2xl">
          Writing on generative engine optimization and how businesses get
          seen — and recommended — by AI. First articles coming soon.
        </p>

        <div className="space-y-4">
          <Link
            href="/blog/what-is-generative-engine-optimization"
            className="block p-8 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition-all"
          >
            <p className="font-mono text-xs text-blue-700 tracking-wider uppercase mb-3">
              Coming soon
            </p>
            <h2 className="font-sans font-semibold text-xl text-navy">
              What is Generative Engine Optimization (GEO)?
            </h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
