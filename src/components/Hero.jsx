import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cinematic initial load sequence
            gsap.fromTo('.hero-text',
                { y: 30, opacity: 0, filter: 'blur(10px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
            );
            gsap.fromTo('.hero-cta',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power2.out', delay: 0.8 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const scrollToPortfolio = () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-6">
            {/* Decorative top-right gradient/light orb to fit Neural Studio */}
            <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="max-w-5xl relative z-10 w-full mx-auto">
                <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl flex flex-col gap-2 mb-8 text-navy mt-8 md:mt-12">
                    <span className="heading-hero">You need better marketing.</span>
                    <span className="heading-display text-blue-600 pr-4">Not more of it.</span>
                </h1>

                <p className="hero-text text-lg md:text-xl lg:text-2xl text-navy/70 max-w-2xl leading-relaxed mb-12 font-sans font-medium">
                    We build websites, content, and campaigns using AI pipelines. Faster turnaround, higher quality, measurable outcomes.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <button className="hero-cta group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white rounded-xl font-sans font-semibold hover:bg-navy/90 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Let's talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button
                        onClick={scrollToPortfolio}
                        className="hero-cta inline-flex items-center gap-2 px-6 py-4 text-navy/70 hover:text-navy font-sans font-medium transition-colors duration-300"
                    >
                        See what we've built <ChevronDown className="w-5 h-5 animate-bounce" />
                    </button>
                </div>
            </div>
        </section>
    );
}
