import MotionButton from "@/components/MotionButton";
import { projects, ProjectCard } from "@/lib/projects";

export const metadata = {
  title: "Work — Things I've Built That Work",
  description:
    "Selected work from OverXceed: live SaaS products, AI tools, client systems and the AI Visibility System running for local businesses in Surrey.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main>
      <section className="relative px-6 md:px-12 lg:px-24 pt-40 pb-16 overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="rise text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
            Selected Work
          </p>
          <h1 className="rise text-4xl md:text-6xl heading-hero text-navy mb-6">
            Things I&rsquo;ve built{" "}
            <span className="heading-display text-blue-700">that work</span>
          </h1>
          <p className="rise-2 text-lg md:text-xl text-navy/70 max-w-2xl leading-relaxed font-sans font-medium">
            Everything below is real and most of it is live — click through and
            try it. I ship products, not case-study PDFs.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
          {/*
            /work/sam-barber exists as a DRAFT case-study page (noindex,
            deliberately not linked here). Link it from this grid once the
            first invoice is paid and Robin approves publication.
          */}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-navy tracking-tight mb-6">
            Want something like this for your business?
          </h2>
          <MotionButton location="work_footer">Book a call</MotionButton>
        </div>
      </section>
    </main>
  );
}
