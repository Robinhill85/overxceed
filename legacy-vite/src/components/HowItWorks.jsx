import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const tiers = [
    {
        title: "AI-Native Marketing Audit",
        description: "I map your current marketing stack, identify what AI can immediately replace or improve, and hand you a prioritised action plan.",
        price: "Fixed fee · Delivered in 5 days",
        tags: ["Current stack assessment", "AI opportunity mapping", "Prioritised action plan", "Tool recommendations"]
    },
    {
        title: "Project-Based Build",
        description: "You know what you need. I build it — content pipelines, campaigns, vibecoded tools, AI workflows. Scoped per brief.",
        price: "Project-based · Scoped per brief",
        tags: ["Content & campaign pipelines", "Vibecoded web tools", "AI workflows", "Custom builds"]
    },
    {
        title: "Retainer",
        description: "Your embedded AI-native marketing partner. Strategy and execution, weekly check-ins, continuous delivery.",
        price: "Monthly · From $3,000/month",
        tags: ["Strategy & roadmap", "Content production", "Campaign management", "Weekly check-ins"]
    }
];

export default function HowItWorks() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.tier-card',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.tiers-container',
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <p className="text-navy/60 font-mono text-sm uppercase tracking-widest mb-3">How I Work</p>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">Three ways to engage</h2>
                </div>

                <div className="tiers-container grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tiers.map((tier, idx) => (
                        <div key={idx} className="tier-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full relative overflow-hidden group hover:border-gray-200 hover:shadow-md transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-blue-500/10 transition-colors duration-500" />

                            <span className="font-mono text-sm text-blue-600/60 font-semibold tracking-wider uppercase mb-4 block">0{idx + 1}</span>
                            <h3 className="font-sans font-semibold text-xl text-navy mb-4 relative z-10">{tier.title}</h3>
                            <p className="font-sans text-navy/70 leading-relaxed text-sm mb-6 relative z-10 flex-grow">{tier.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {tier.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-mono text-navy/50 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-gray-100 mt-auto">
                                <span className="font-mono text-sm text-blue-600 font-medium">{tier.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
