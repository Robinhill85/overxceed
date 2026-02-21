import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "01",
        title: "Define",
        desc: "What you need and the outcome you're after.",
    },
    {
        num: "02",
        title: "Build",
        desc: "AI pipelines tailored to your brief.",
    },
    {
        num: "03",
        title: "Receive",
        desc: "Better assets, faster than the traditional route.",
    }
];

export default function HowItWorks() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.step-card',
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.steps-container',
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                <div className="lg:w-1/3 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight mb-4">The Three Steps</h2>
                    <p className="text-navy/60 font-serif italic text-xl">
                        A precise operation, designed for measurable outcomes.
                    </p>
                </div>

                <div className="steps-container lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="step-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-blue-500/10 transition-colors duration-500" />

                            <span className="font-mono text-4xl text-blue-600/20 font-bold mb-8 block">{step.num}</span>
                            <h3 className="font-sans font-semibold text-2xl text-navy mb-4 relative z-10">{step.title}</h3>
                            <p className="font-sans text-navy/70 leading-relaxed text-sm md:text-base relative z-10">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
