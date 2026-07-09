import { ArrowRight } from "lucide-react";

export default function MarketInPublic() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
          Market in Public
        </p>
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight mb-8">
          I build in public. Every week.
        </h2>

        <p className="text-navy/70 font-sans text-lg leading-relaxed mb-10 max-w-2xl">
          I co-host Market in Public with Robin Lim — a weekly LinkedIn Live
          covering AI-native marketing, AI visibility, and what&rsquo;s
          actually working right now. No polish. No deck. Just real work,
          live.
        </p>

        <a
          href="https://www.linkedin.com/events/7445748371740319744"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white rounded-xl font-sans font-semibold hover:bg-navy/90 transition-all duration-300 group"
        >
          Watch on LinkedIn{" "}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
