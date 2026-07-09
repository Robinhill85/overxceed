import MotionButton from "@/components/MotionButton";

/*
 * ============================================================================
 *  DRAFT — DO NOT PUBLISH UNTIL INVOICE PAID
 * ============================================================================
 *  Case study for OverXceed client #1 (Sam Barber, Redhill). Gated on the
 *  first paid invoice (expected ~1 Aug 2026 per vault).
 *
 *  PUBLISHING CHECKLIST (all must be true before this page goes live):
 *  [ ] Invoice #1 paid and confirmed by Robin
 *  [ ] Sam's written approval to use his name, shop name and photos
 *  [ ] Real metrics filled in below (bookings via agent, reviews gained,
 *      AI-visibility before/after screenshots) — no placeholders left
 *  [ ] Before/after "ask ChatGPT" screenshots exported and added to /public
 *  [ ] Remove `robots: { index: false }` from metadata below
 *  [ ] Remove the DRAFT banner section
 *  [ ] Add this page to app/sitemap.js
 *  [ ] Link the card from /work (see comment in app/work/page.jsx)
 *  [ ] Re-run scripts/validate-schema.mjs and the no-pricing grep
 * ============================================================================
 */

export const metadata = {
  title: "Case Study: A Redhill Barbershop's AI Visibility System [DRAFT]",
  description:
    "DRAFT case study — how a top-rated Redhill barbershop became visible to AI and bookable 24/7.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/work/sam-barber" },
};

export default function SamBarberCaseStudy() {
  return (
    <main>
      {/* DRAFT banner — remove at publication */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-amber-100 border-y border-amber-300 text-amber-900 text-center font-mono text-xs uppercase tracking-widest py-2">
        Draft — not published. Do not share until invoice #1 is paid.
      </div>

      <section className="relative px-6 md:px-12 lg:px-24 pt-48 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
            Case Study · AI Visibility System · Redhill
          </p>
          <h1 className="text-4xl md:text-6xl heading-hero text-navy mb-8">
            100+ five-star reviews.{" "}
            <span className="heading-display text-blue-700">
              Invisible to ChatGPT.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-navy/70 max-w-2xl leading-relaxed font-sans font-medium">
            [DRAFT] The best-rated barbershop in Redhill — #1 on Google Maps,
            a loyal chair that books out weeks ahead — didn&rsquo;t exist as
            far as AI assistants were concerned. No website, no structured
            data, nothing for a model to read. Here&rsquo;s what changed.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-navy tracking-tight mb-4">
              The starting point
            </h2>
            <p className="font-sans text-navy/70 leading-relaxed">
              [DRAFT — fill with the real story: the walk-in with a finished
              demo site built from public reviews and photos, the same-day
              yes, and the founding-client arrangement for the barber niche.]
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-navy tracking-tight mb-4">
              What was built
            </h2>
            <p className="font-sans text-navy/70 leading-relaxed">
              [DRAFT — boutique-grade site on his own domain; GEO/schema and
              review enrichment; Google reviews engine; WhatsApp booking
              agent working around his existing booking tool; monthly proof
              report.]
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-navy tracking-tight mb-4">
              The results
            </h2>
            <p className="font-sans text-navy/70 leading-relaxed">
              [DRAFT — real month-one metrics only. Bookings taken by the
              agent, reviews gained, the before/after &ldquo;ask
              ChatGPT&rdquo; screenshots. Nothing goes here that
              didn&rsquo;t happen.]
            </p>
          </div>

          <div className="text-center pt-8">
            <MotionButton location="sam_barber_case_study">
              Book a call
            </MotionButton>
          </div>
        </div>
      </section>
    </main>
  );
}
