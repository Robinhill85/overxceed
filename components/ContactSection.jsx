import { Calendar } from "lucide-react";
import BriefForm from "@/components/BriefForm";
import MotionButton from "@/components/MotionButton";

export default function ContactSection({ location = "home" }) {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-navy/70 font-mono text-sm uppercase tracking-widest mb-3">
            Get Started
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">
            Start a conversation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book a call */}
          <div className="bg-navy text-white p-8 md:p-10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                <Calendar className="w-5 h-5 text-blue-300" aria-hidden="true" />
              </div>
              <h3 className="font-sans font-semibold text-2xl mb-4">
                Book a call
              </h3>
              <p className="text-white/80 font-sans leading-relaxed mb-8">
                30 minutes, free. I&rsquo;ll diagnose where AI can move the
                needle for your business and whether I&rsquo;m the right fit.
              </p>
            </div>
            <MotionButton
              variant="inverted"
              location={`${location}_contact`}
              className="w-full"
            >
              Schedule now
            </MotionButton>
          </div>

          {/* Submit a brief */}
          <div>
            <BriefForm location={location} />
          </div>
        </div>
      </div>
    </section>
  );
}
