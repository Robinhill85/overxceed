import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
        <section ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-navy text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-blue)_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-4xl mx-auto text-center relative z-10 about-content flex flex-col items-center">

                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-12 backdrop-blur-sm">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-wider text-green-400 uppercase">System Operational</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-sans font-bold mb-8">
                    One operator. Full accountability.
                </h2>

                <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed max-w-3xl border-l-2 border-blue-600 pl-8 text-left">
                    Built on 5+ years of agency experience, OverXceed delivers the senior-only advantage.
                    No bloated account teams, no junior handoffs. Just raw capability, hyper-optimized pipelines, and a relentless focus on execution.
                </p>

            </div>
        </section>
    );
}
