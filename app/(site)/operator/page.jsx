import { CheckCircle2 } from "lucide-react";
import BriefForm from "@/components/BriefForm";
import MotionButton from "@/components/MotionButton";
import JsonLd from "@/components/JsonLd";
import { personSchema } from "@/lib/schema";

export const metadata = {
  title: "The 90-Day AI Operator — Build, Train, Hand Over",
  description:
    "A 90-day operator engagement for UK SMEs: I come in, build the AI systems your team will actually use, train your people, and leave you owning it. Pricing on request.",
  alternates: { canonical: "/operator" },
};

const phases = [
  {
    days: "Days 1–15",
    title: "Audit & target",
    description:
      "I map your organisation through an agents-loops-workflows lens: every recurring process, who runs it, what it costs in hours, where it breaks. Together we pick the 2–3 highest-leverage builds. Output: a scoped build plan you sign off — scope freezes here, so you always know exactly what you're getting.",
  },
  {
    days: "Days 16–70",
    title: "Build",
    description:
      "Working systems shipped on your infrastructure — your accounts, your data, your control. Weekly demo cadence: you see real progress every Friday, not status reports. Documentation is written as it's built, not reverse-engineered at the end.",
  },
  {
    days: "Days 71–90",
    title: "Handover & train",
    description:
      "I train your internal owner(s), hand over runbooks, monitoring and escalation paths, and record the training. The success test is blunt: the systems must run for two weeks before exit without me touching them.",
  },
  {
    days: "Day 90",
    title: "Exit",
    description:
      "A clean exit with everything owned by your team — or a scoped renewal for a new build with a new scope. No drift into open-ended dependency: the engagement is designed to end.",
  },
];

const deliverables = [
  "A scoped build plan, signed off at day 15 — the scope freeze protects your budget",
  "2–3 working AI systems on your own infrastructure, not mine",
  "SOPs and runbooks written as-built: what it does, day-to-day operation, monitoring, escalation, running costs",
  "A trained internal owner for every system, plus recorded training sessions",
  "Two weeks of unassisted operation proven before I leave",
  "A team that understands what was built and why — capability, not dependency",
];

const proof = [
  {
    title: "18 months inside a regulated fintech",
    description:
      "Head of marketing at a regulated digital-assets fintech, shipping AI-native systems inside real compliance constraints — not a sandbox.",
  },
  {
    title: "A live local-business product",
    description:
      "The AI Visibility System runs for paying local clients: sites, booking agents, review engines, monthly proof reports. Same stack, different altitude.",
  },
  {
    title: "I run my own company on this",
    description:
      "My own agent stack handles briefings, content pipelines, dashboards and reporting daily. You can see it working on the call — a live tour, not a slide.",
  },
  {
    title: "The handover library",
    description:
      "Every engagement produces SOPs, runbooks and training your team keeps. I'll show you real (anonymised) handover artifacts so you know exactly what you receive.",
  },
];

export default function OperatorPage() {
  return (
    <main>
      <JsonLd data={personSchema} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-16">
        <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="max-w-5xl relative z-10 w-full mx-auto">
          <p className="rise font-mono text-sm uppercase tracking-widest text-navy/70 mb-6">
            The 90-Day AI Operator — for UK SMEs
          </p>
          <h1 className="rise text-4xl md:text-6xl lg:text-7xl heading-hero text-navy mb-8 max-w-4xl">
            I don&rsquo;t advise on AI.{" "}
            <span className="heading-display text-blue-700">I build it</span> —
            then hand you the keys.
          </h1>

          <p className="rise-2 text-lg md:text-xl text-navy/70 max-w-2xl leading-relaxed mb-12 font-sans font-medium">
            90 days inside your company. I build the systems your team will
            actually use, train your people, and leave you owning it. Operator,
            not advisor — the difference is you end up with working systems,
            not a strategy deck.
          </p>

          <div className="rise-3 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#brief"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white rounded-xl font-sans font-semibold hover:bg-navy/90 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Submit a brief</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <MotionButton variant="nav" location="operator_hero" className="!px-6 !py-4 !text-base !rounded-xl">
              Or book a call
            </MotionButton>
          </div>
        </div>
      </section>

      {/* The 90-day arc */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
              The Engagement
            </p>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">
              The 90-day arc
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
              <div
                key={phase.title}
                className="bg-gray-50/50 p-8 rounded-xl border border-gray-100 flex flex-col h-full hover:bg-white hover:border-gray-200 hover:shadow-md transition-all"
              >
                <span className="font-mono text-sm text-blue-700 font-semibold tracking-wider uppercase mb-2 block">
                  0{idx + 1}
                </span>
                <p className="font-mono text-xs text-navy/70 uppercase tracking-wider mb-4">
                  {phase.days}
                </p>
                <h3 className="font-sans font-semibold text-xl text-navy mb-4">
                  {phase.title}
                </h3>
                <p className="font-sans text-navy/70 leading-relaxed text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          {/* Milestones + pricing-on-request */}
          <div className="mt-12 bg-navy text-white rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-sans font-semibold text-2xl mb-4">
                Milestone-billed. Fixed scope. No day rates.
              </h3>
              <p className="text-white/80 font-sans leading-relaxed">
                The engagement is billed across four milestones — signing,
                day-15 scope sign-off, mid-build, and handover — so payment
                tracks delivery, not time. Never hourly: the invoice buys
                outcomes and ownership, not my calendar.
              </p>
            </div>
            <div className="md:text-right">
              {/*
                PRICING PLACEHOLDER — intentionally blank.
                Robin's no-public-pricing ruling (2026-07-08). If it ever
                reverses, the fixed engagement fee and the four milestone
                amounts go here.
              */}
              <p className="font-mono text-sm uppercase tracking-widest text-blue-300 mb-2">
                Pricing on request
              </p>
              <p className="text-white/80 font-sans text-sm leading-relaxed md:ml-auto md:max-w-xs">
                Scoped to the builds we pick at audit. You&rsquo;ll have the
                full number before anything is signed — no surprises after
                day 15&rsquo;s scope freeze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
              What You Get
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-navy tracking-tight">
              You keep everything. That&rsquo;s the design.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-6"
              >
                <CheckCircle2
                  className="w-5 h-5 text-blue-700 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-sans text-navy/80 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
              Who It&rsquo;s For
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-navy tracking-tight max-w-3xl">
              Ops-heavy UK companies where &ldquo;we should be doing something
              with AI&rdquo; is already being said out loud
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-navy/70 font-sans leading-relaxed">
            <div className="space-y-5">
              <p>
                The best fit: 10–50 person companies drowning in quoting,
                scheduling, reporting, inbox triage and document churn — with
                no dev team and a founder or MD who can decide quickly.
                Recruitment agencies, accountancy practices, property and
                lettings management, logistics back-offices, trade-services
                firms that outgrew the van.
              </p>
              <p>
                If you&rsquo;re hiring another admin or ops role right now,
                that&rsquo;s usually the tell: a 90-day build can absorb much
                of what that role would do — permanently, and owned by you.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Not a fit: tech startups with in-house engineers, enterprises
                with procurement cycles longer than the engagement, anyone who
                wants a chatbot as decoration, or anyone whose real problem is
                sales rather than operations. I&rsquo;ll tell you on the first
                call if that&rsquo;s you.
              </p>
              <p>
                Guardrails are part of the build: a permission-and-risk pass
                decides what an agent may touch, read or send before anything
                ships. LLMs talk; verified code acts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-blue)_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-blue-300 mb-3">
              Why Me
            </p>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight">
              An operator&rsquo;s CV, not an advisor&rsquo;s
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proof.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <h3 className="font-sans font-semibold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-white/80 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief form — primary CTA */}
      <section
        id="brief"
        className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
              Start Here
            </p>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight mb-4">
              Tell me what&rsquo;s eating your team&rsquo;s hours
            </h2>
            <p className="text-navy/70 font-sans text-lg max-w-2xl mx-auto">
              Two or three sentences is plenty. I&rsquo;ll reply within 24
              hours with an honest read on whether a 90-day build fits.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <BriefForm location="operator" />
          </div>
        </div>
      </section>
    </main>
  );
}
