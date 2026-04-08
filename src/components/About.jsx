import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { value: "4,000%", label: "User growth for a global tech client" },
    { value: "22M+", label: "Impressions in a single month on X" },
    { value: "1M+", label: "Impressions on LinkedIn" },
];

export default function About() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.about-content',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.about-content',
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-navy text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-blue)_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-5xl mx-auto relative z-10 about-content">
                <p className="font-mono text-sm uppercase tracking-widest text-blue-400/70 mb-4">About</p>
                <h2 className="text-4xl md:text-6xl font-sans font-bold mb-10">
                    Senior-only execution. No bloated teams.
                </h2>

                <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed max-w-3xl border-l-2 border-blue-600 pl-8 mb-12">
                    Built on 5+ years of agency experience, OverXceed delivers the advantage of senior operators without the overhead of a traditional agency. We operate lean with a network of specialist AI and marketing operators — you get expertise across the full stack without paying for layers of account managers and juniors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <span className="font-mono text-3xl font-bold text-blue-400 block mb-2">{stat.value}</span>
                            <span className="text-white/60 text-sm font-sans">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
