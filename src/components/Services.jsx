import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Eye, Layers, Monitor, TrendingUp } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const offerings = [
    {
        icon: Compass,
        title: "Brand & Messaging Strategy",
        description: "Positioning, narrative, and tone of voice built to stand out in a market flooded with AI-generated sameness."
    },
    {
        icon: Eye,
        title: "AI Visibility",
        description: "SEO, AEO, and GEO strategy so your brand shows up where humans and AI models are looking. Not last year's SEO — the version that accounts for LLMs, answer engines, and generative search."
    },
    {
        icon: Layers,
        title: "Content & Campaign Production",
        description: "Agentic and autonomous content systems that produce at scale without losing your voice. We build the machine, not just the output."
    },
    {
        icon: Monitor,
        title: "Websites, Tools & Digital Products",
        description: "Marketing sites, dashboards, data aggregators, calculators, and custom internal tools delivered in days. If it lives in a browser and helps your business, we build it."
    },
    {
        icon: TrendingUp,
        title: "Growth Strategy",
        description: "Market intelligence, competitive positioning, and high-leverage roadmaps. Not \"post more and hope.\""
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
        <section id="services" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <p className="text-navy/60 font-mono text-sm uppercase tracking-widest mb-3">What We Do</p>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">Five ways we help</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offerings.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className={`service-card p-8 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition-colors shadow-sm hover:shadow-md ${index >= 3 ? 'lg:col-span-1' : ''}`}
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                                    <Icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="font-sans font-semibold text-lg text-navy mb-3">{service.title}</h3>
                                <p className="font-sans text-navy/70 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
