import { CalendarCheck, MessageSquare, FileBarChart, Home } from "lucide-react";
import WebinarForm from "@/components/WebinarForm";

// Webinar funnel LP (3 Aug outreach call w/ Rayme). Traffic arrives warm from
// LinkedIn DMs — the CTA there is "we run a free webinar, nothing to sell",
// so this page stays light-touch: no pricing (8 Jul ruling), no calendar
// link (LinkedIn redirect-warning problem), no Motion button. Email +
// availability only; invitees are added to the session by hand.
export const metadata = {
  title: "Free Weekly Webinar — See AI Working in Real Businesses",
  description:
    "A free 45-minute session showing real AI systems running in real small businesses: a WhatsApp booking assistant, an Airbnb guest concierge, and reports that write themselves. Plain English, nothing to buy.",
  alternates: { canonical: "/webinar" },
  openGraph: {
    title: "See AI working in real businesses — free weekly webinar",
    description:
      "45 minutes. Real systems, live — not slides. A booking assistant that answers while you work, a guest concierge, reports that write themselves.",
  },
};

const DEMOS = [
  {
    icon: MessageSquare,
    title: "A booking assistant that answers while you work",
    body: "A WhatsApp assistant running right now in a Surrey barbershop: it books, moves and cancels appointments around the diary, texts back missed calls, and hands the owner an evening summary. He hasn't answered the phone mid-haircut since.",
  },
  {
    icon: Home,
    title: "A guest concierge for a holiday let",
    body: "An Airbnb assistant that answers guest questions — check-in, wifi, the good pub — day and night, in the host's tone of voice. Live in a real Airbnb, handling questions the host used to type out one by one.",
  },
  {
    icon: FileBarChart,
    title: "Reports that write themselves",
    body: "A weekly client report that pulls its own numbers — search visibility, bookings, reviews — and publishes itself every Monday morning without anyone touching a spreadsheet. Running unattended since July.",
  },
];

const STEPS = [
  {
    title: "Save your spot",
    body: "Name, email, and when suits you. That's it — no card, no calendar roulette.",
  },
  {
    title: "Get a personal invite",
    body: "A real person sends you the link for this week's session at a time that works for the group.",
  },
  {
    title: "Watch real systems, live",
    body: "45 minutes, plain English, live screens — not slides. Bring questions about your own business; that's the best part of the hour.",
  },
];

export default function WebinarPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-36 pb-20">
        <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="max-w-5xl relative z-10 w-full mx-auto">
          <p className="rise font-mono text-sm uppercase tracking-widest text-navy/70 mb-6">
            Free weekly webinar · 45 minutes · nothing to buy
          </p>
          <h1 className="rise text-4xl md:text-6xl heading-hero text-navy mb-8 max-w-4xl">
            See what AI can quietly do for a business{" "}
            <span className="heading-display text-blue-700">like yours</span> —
            shown live, in businesses that already use it.
          </h1>
          <p className="rise-2 text-lg md:text-xl text-navy/70 max-w-2xl leading-relaxed font-sans font-medium">
            Not a sales pitch and not a tech lecture. Every system in this
            session is running today inside a real small business — you&rsquo;ll
            see the actual screens, what changed for the owner, and what
            something like it would mean for you.
          </p>
        </div>
      </section>

      {/* What you'll see */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-5xl heading-hero mb-6">
              What you&rsquo;ll see{" "}
              <span className="heading-display text-blue-300">
                — all of it real
              </span>
            </h2>
            <p className="font-sans text-white/70 text-lg leading-relaxed">
              No mock-ups and no &ldquo;coming soon&rdquo;. Three systems,
              each one live in a paying business right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMOS.map((demo) => (
              <div
                key={demo.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-5">
                  <demo.icon
                    className="w-5 h-5 text-blue-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-sans font-semibold text-lg mb-3">
                  {demo.title}
                </h3>
                <p className="font-sans text-white/70 leading-relaxed text-sm">
                  {demo.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl heading-hero text-navy mb-8">
            Who it&rsquo;s{" "}
            <span className="heading-display text-blue-700">for</span>
          </h2>
          <div className="space-y-5 text-navy/70 font-sans text-lg leading-relaxed">
            <p>
              Owners and managers who keep hearing about AI and quietly suspect
              most of it is hype. You&rsquo;re probably right about most of it
              — this hour is about the unglamorous part that actually works:
              the phone that answers itself, the report that writes itself,
              the admin that stops eating your evenings.
            </p>
            <p>
              You don&rsquo;t need to be technical.{" "}
              <strong className="text-navy">
                If you can watch a screen, you&rsquo;re qualified.
              </strong>{" "}
              Come with questions about your own business — the session is
              small enough to ask them.
            </p>
          </div>
        </div>
      </section>

      {/* How it works + form */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-grey">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl heading-hero text-navy mb-10">
              How it{" "}
              <span className="heading-display text-blue-700">works</span>
            </h2>
            <ol className="space-y-8">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-navy text-white font-sans font-semibold text-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-navy mb-1.5">
                      {step.title}
                    </h3>
                    <p className="font-sans text-navy/70 leading-relaxed text-sm">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-5">
              <CalendarCheck
                className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="font-sans text-sm text-navy/70 leading-relaxed">
                Sessions run weekly. Miss one and you&rsquo;re simply on the
                list for the next — no chasing, no &ldquo;last chance&rdquo;
                emails.
              </p>
            </div>
          </div>

          <div id="register">
            <WebinarForm location="webinar_page" />
          </div>
        </div>
      </section>
    </main>
  );
}
