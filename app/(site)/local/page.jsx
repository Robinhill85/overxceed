import {
  BarChart3,
  Globe,
  MessageCircle,
  Search,
  Star,
} from "lucide-react";
import MotionButton from "@/components/MotionButton";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata = {
  title: "AI Visibility System for Local Businesses — Redhill, Reigate & Surrey",
  description:
    "Your customers ask ChatGPT for recommendations now. The AI Visibility System makes your local business findable in AI answers, bookable 24/7, and collecting reviews on autopilot. Redhill, Reigate and across Surrey.",
  alternates: { canonical: "/local" },
};

const components = [
  {
    icon: Globe,
    title: "A website worth your reputation",
    description:
      "A boutique-grade one-pager on your own domain, built from your real reviews, prices and photos — not a template that looks like everyone else's. Most clients see theirs finished before they've paid a penny.",
  },
  {
    icon: Search,
    title: "AI visibility (GEO)",
    description:
      "Schema, entity data and review enrichment so ChatGPT, Gemini and Perplexity can actually see you and recommend you. Honest expectation: AI answers take 4–8 weeks to shift, and I show you the before and after.",
  },
  {
    icon: Star,
    title: "Google reviews engine",
    description:
      "Post-visit review requests via WhatsApp or QR that produce rich, specific reviews — the exact data AI models read when deciding who to recommend. Your reputation, made machine-readable.",
  },
  {
    icon: MessageCircle,
    title: "AI booking assistant on WhatsApp",
    description:
      "An assistant that books, moves and cancels appointments around your existing booking tool, texts back missed calls, and sends you an evening digest. You keep an owner's lane too — \"book Ahmed Saturday 2pm\" just works.",
  },
  {
    icon: BarChart3,
    title: "Monthly proof report",
    description:
      "Every month: bookings taken by the assistant, reviews gained, and an AI visibility check — the actual \"ask ChatGPT\" screenshot. You always know exactly what you're paying for.",
  },
];

const faqs = [
  {
    q: "What happens if I cancel?",
    a: "You can cancel anytime — no long contract, no exit fee. Your website, your domain, and your Google reviews are yours and stay yours. Your rate is locked for 12 months from the day you start, so it never creeps up on you.",
  },
  {
    q: "How much does it cost?",
    a: "It's a simple monthly subscription with a one-off setup, priced on a short call so it matches your business — one chair or five, one location or three. No obligation; most owners know within 20 minutes whether it makes sense.",
  },
  {
    q: "When will I show up in ChatGPT?",
    a: "Honestly: 4–8 weeks for AI answers to shift, sometimes faster. AI models re-read the web on their own schedule, so anyone promising overnight results is guessing. What I do promise is the before-and-after check in your monthly report, so you see the movement when it happens.",
  },
  {
    q: "Do you guarantee me more customers?",
    a: "No — and you should be suspicious of anyone who does. I can't control when ChatGPT sends the first customer. I guarantee you'll be findable when customers ask AI, bookable 24/7 without lifting a finger, and collecting reviews on autopilot. That's the system working; the customers follow the visibility.",
  },
  {
    q: "I already get most of my business from word of mouth. Why does this matter?",
    a: "Because your next customer's word of mouth is increasingly a machine. When someone new to town asks ChatGPT or Perplexity who to book, the answer comes from structured data, websites and rich reviews — not from your regulars. Great businesses with none of that data get skipped, however good they are.",
  },
];

export default function LocalPage() {
  return (
    <main>
      <JsonLd data={localBusinessSchema} />

      {/* Hero — the vault one-liner, verbatim */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-16">
        <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="max-w-5xl relative z-10 w-full mx-auto">
          <p className="rise font-mono text-sm uppercase tracking-widest text-navy/70 mb-6">
            For local service businesses — Redhill · Reigate · Surrey
          </p>
          <h1 className="rise text-4xl md:text-6xl lg:text-7xl heading-hero text-navy mb-8 max-w-4xl">
            Your customers ask ChatGPT now. It doesn&rsquo;t know you exist.{" "}
            <span className="heading-display text-blue-700">
              I fix that
            </span>{" "}
            — and give you an AI assistant that takes bookings while you work.
          </h1>

          <p className="rise-2 text-lg md:text-xl text-navy/70 max-w-2xl leading-relaxed mb-12 font-sans font-medium">
            You&rsquo;ve done the hard part: the five-star rating, the loyal
            regulars, the reputation. The problem is the internet&rsquo;s AI
            layer can&rsquo;t see how good you already are. That&rsquo;s a
            visibility problem — and visibility problems are fixable.
          </p>

          <div className="rise-3">
            <MotionButton location="local_hero">Book a call</MotionButton>
          </div>
        </div>
      </section>

      {/* The self-demo — the pitch you can run on yourself */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-blue)_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="font-mono text-sm uppercase tracking-widest text-blue-300 mb-3">
            Try it yourself — right now
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8 max-w-3xl">
            Ask ChatGPT: &ldquo;best [your trade] in [your town]&rdquo;.
            <span className="heading-display text-blue-300"> Are you there?</span>
          </h2>
          <p className="text-white/80 font-sans text-lg leading-relaxed mb-12 max-w-2xl">
            That&rsquo;s the whole pitch. If competitors show up and you
            don&rsquo;t — with your rating, your reviews, your years of
            reputation — the AI layer is recommending around you every single
            day. It isn&rsquo;t judging your work. It just can&rsquo;t see it.
          </p>

          {/*
            BEFORE/AFTER PROOF SLOT.
            "Before" state below is illustrative text styling, not a fabricated
            screenshot. RESERVED: swap in the real before/after "ask ChatGPT"
            screenshots once the first client's GEO work shifts AI answers
            (offer.md honest window: 4–8 weeks). DO NOT fabricate an
            after-state before it exists.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-blue-300 mb-4">
                Today — invisible
              </p>
              <p className="font-sans text-white/80 leading-relaxed text-sm">
                &ldquo;Best barber in Redhill?&rdquo; ChatGPT lists three names
                pulled from thin directory data. The shop with 100+ five-star
                reviews and the strongest reputation in town isn&rsquo;t one of
                them — because it has no website and no structured data for the
                model to read.
              </p>
            </div>
            <div className="bg-white/5 border border-dashed border-white/20 rounded-xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-white/70 mb-4">
                4–8 weeks in — the after shot
              </p>
              <p className="font-sans text-white/70 leading-relaxed text-sm">
                This slot is reserved for the real before-and-after screenshots
                from client work — shown when they exist, not mocked up. Honesty
                is part of the product: your monthly report carries the same
                un-doctored check for your own business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The five components */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
              The AI Visibility System
            </p>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight max-w-3xl">
              Five parts. One system. Working while you work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition-colors shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-blue-700" aria-hidden="true" />
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-navy/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}

            {/* Trust card in the grid */}
            <div className="p-8 rounded-xl border border-navy bg-navy text-white shadow-sm">
              <h3 className="font-sans font-semibold text-lg mb-3">
                Built to be easy to say yes to
              </h3>
              <p className="font-sans text-white/80 leading-relaxed text-sm mb-4">
                Cancel anytime — your site, domain and reviews stay yours. Your
                rate is locked for 12 months. One system, one point of contact,
                no agency bloat.
              </p>
              {/*
                PRICING PLACEHOLDER — intentionally blank.
                Robin's no-public-pricing ruling (2026-07-08): the monthly and
                setup figures are quoted on the call, matched to the business.
                If the ruling ever reverses, the subscription + setup pricing
                block goes here.
              */}
              <p className="font-sans text-white/80 leading-relaxed text-sm">
                Pricing is agreed on a short call, sized to your business. The
                first business in each trade locally gets founding-client terms
                in exchange for a case study and introductions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honesty block */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
            The Honest Bit
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-navy tracking-tight mb-8">
            What I promise — and what I don&rsquo;t
          </h2>
          <div className="space-y-5 text-navy/70 font-sans text-lg leading-relaxed">
            <p>
              I can&rsquo;t guarantee when ChatGPT sends your first customer —
              nobody honestly can. AI answers typically take{" "}
              <strong className="text-navy">4–8 weeks</strong> to shift once
              the groundwork is live, and I show you the before and after
              rather than asking you to take my word for it.
            </p>
            <p>
              What I do guarantee: you&rsquo;ll be{" "}
              <strong className="text-navy">findable</strong> when customers
              ask AI who to book,{" "}
              <strong className="text-navy">bookable 24/7</strong> without
              touching your phone, and{" "}
              <strong className="text-navy">
                collecting reviews on autopilot
              </strong>
              . The system runs while you work — that&rsquo;s the point of it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
              Questions Owners Actually Ask
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-navy tracking-tight">
              Straight answers
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-gray-100 bg-gray-50/50 open:bg-white open:border-gray-200 transition-colors"
              >
                <summary className="cursor-pointer list-none p-6 font-sans font-semibold text-navy flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-blue-700 group-open:rotate-45 transition-transform text-xl leading-none" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 font-sans text-navy/70 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Motion is the sole CTA on this page */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-6">
            Your reputation deserves to be visible.
          </h2>
          <p className="text-white/80 font-sans text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            30 minutes, free, no obligation. I&rsquo;ll run the ChatGPT check
            on your business live on the call — if you&rsquo;re already
            visible, I&rsquo;ll tell you, and you&rsquo;ve lost nothing.
          </p>
          <MotionButton variant="inverted" location="local_footer">
            Book a call
          </MotionButton>
        </div>
      </section>
    </main>
  );
}
