import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const offerings = [
    {
        title: "Brand & Messaging Strategy",
        description: "You can't out-spend the market, but you can out-position it. We use AI-assisted research to find where your brand has an unfair advantage, then build the narrative, messaging framework, and tone of voice to own it. Fast, precise, built to last."
    },
    {
        title: "Content & Campaign Production",
        description: "Most AI content is obvious. Ours isn't. We build custom pipelines that produce campaign assets, copy, and creative at a scale and consistency your team can't match manually, without sacrificing the quality that makes people stop scrolling."
    },
    {
        title: "Websites & Digital Products",
        description: "From marketing sites to vibecoded apps and interactive tools, we design and build digital products that work as hard as your best salesperson. Delivered in days, not months."
    },
    {
        title: "Growth Strategy",
        description: "A bigger budget isn't the answer. A sharper plan is. We map your market, identify the highest-leverage moves, and hand you a roadmap you can actually execute, whether you're entering a new market or breaking through a plateau."
    }
];

export default function Services() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.service-card',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight mb-2">Core Services</h2>
                    <p className="text-navy/60 font-mono text-sm uppercase tracking-widest">Focused Execution</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerings.map((service, index) => (
                        <div key={index} className="service-card p-8 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition-colors shadow-sm hover:shadow-md">
                            <h3 className="font-sans font-semibold text-lg text-navy mb-3">{service.title}</h3>
                            <p className="font-serif italic text-navy/70 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
