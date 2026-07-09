import Link from "next/link";
import { ArrowRight, Bot, Building2, ChevronDown } from "lucide-react";
import MotionButton from "@/components/MotionButton";
import About from "@/components/About";
import MarketInPublic from "@/components/MarketInPublic";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { professionalServiceSchema } from "@/lib/schema";
import { projects, ProjectCard } from "@/lib/projects";

export const metadata = {
  title: { absolute: "OverXceed | AI-Native Marketing Operator, UK" },
  description:
    "AI-native marketing operator, UK. The AI Visibility System for local businesses in Redhill, Reigate and Surrey — and 90-day AI operator engagements for UK SMEs.",
  alternates: { canonical: "/" },
};

const offers = [
  {
    icon: Building2,
    eyebrow: "For local service businesses",
    title: "The AI Visibility System",
    description:
      "Your customers ask ChatGPT for recommendations now — and it can't see how good you already are. A website built from your real reviews, AI visibility work, a reviews engine, and an AI assistant that takes bookings while you work. Redhill, Reigate and across Surrey.",
    href: "/local",
    cta: "See the system",
  },
  {
    icon: Bot,
    eyebrow: "For UK SMEs and their leadership",
    title: "The 90-Day AI Operator",
    description:
      "I don't advise on AI. I come in for 90 days, build the systems your team will actually use, train your people, and leave you owning it. Diagnose, build, hand over — outcomes and ownership, not slide decks.",
    href: "/operator",
    cta: "See the engagement",
  },
];

const steps = [
  {
    title: "Diagnose",
    description:
      "A 30-minute call, then a sharp look at where AI actually moves the needle for your business — and where it doesn't. No jargon, no inflated promises.",
  },
  {
    title: "Build",
    description:
      "Working systems, shipped fast: sites, agents, visibility work, automations. You see progress weekly — real demos, not status reports.",
  },
  {
    title: "Prove",
    description:
      "Everything is measured and shown: bookings taken, reviews gained, visibility shifted. You always know what you're getting — and you own what I build.",
  },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={professionalServiceSchema} />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-6">
        <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="max-w-5xl relative z-10 w-full mx-auto">
          <p className="rise font-mono text-sm uppercase tracking-widest text-navy/70 mb-6">
            AI-native marketing operator — UK
          </p>
          <h1 className="rise text-5xl md:text-7xl lg:text-8xl flex flex-col gap-2 mb-8 text-navy">
            <span className="heading-hero">You need better marketing.</span>
            <span className="heading-display text-blue-700 pr-4">
              Not more of it.
            </span>
          </h1>

          <p className="rise-2 text-lg md:text-xl lg:text-2xl text-navy/70 max-w-2xl leading-relaxed mb-12 font-sans font-medium">
            I&rsquo;m a marketing operator built on deep knowledge of what AI
            can and can&rsquo;t do right now. Sometimes that means custom
            pipelines. Sometimes it means plugging the right tools into what
            already works. I know the difference.
          </p>

          <div className="rise-3 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MotionButton location="home_hero">Book a call</MotionButton>
            <a
              href="#offers"
              className="inline-flex items-center gap-2 px-6 py-4 text-navy/70 hover:text-navy font-sans font-medium transition-colors duration-300"
            >
              See how I can help <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* The two offers */}
      <section
        id="offers"
        className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
              What I Do
            </p>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">
              Two ways I work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <Link
                  key={offer.href}
                  href={offer.href}
                  className="group flex flex-col p-8 md:p-10 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-blue-700" aria-hidden="true" />
                  </div>
                  <p className="font-mono text-xs text-blue-700 tracking-wider uppercase mb-3">
                    {offer.eyebrow}
                  </p>
                  <h3 className="font-sans font-semibold text-2xl text-navy mb-4 group-hover:text-blue-700 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="font-sans text-navy/70 leading-relaxed mb-8 flex-grow">
                    {offer.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans font-semibold text-blue-700">
                    {offer.cta}{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
              How I Work
            </p>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">
              Show, build, prove
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full relative overflow-hidden group hover:border-gray-200 hover:shadow-md transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-blue-500/10 transition-colors duration-500" />
                <span className="font-mono text-sm text-blue-700 font-semibold tracking-wider uppercase mb-4 block">
                  0{idx + 1}
                </span>
                <h3 className="font-sans font-semibold text-xl text-navy mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="font-sans text-navy/70 leading-relaxed text-sm relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          {/*
            The old three-tier engagement block (audit / build / monthly partner)
            with published prices was removed per Robin's no-public-pricing
            ruling (2026-07-08). If that ever reverses, engagement pricing
            would slot in here.
          */}
        </div>
      </section>

      {/* Work teaser */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">
                Things I&rsquo;ve built that work
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans font-semibold text-blue-700 hover:text-blue-800 transition-colors shrink-0"
            >
              See all work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <About />
      <MarketInPublic />
      <ContactSection location="home" />
    </main>
  );
}
