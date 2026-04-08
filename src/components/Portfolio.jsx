import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        label: "SaaS · AI Tooling · Product",
        title: "PostToSource",
        description: "SaaS tool converting social posts into hosted PDF links for AI knowledge bases. Solves the broken workflow of copy-pasting content into NotebookLM, Claude Projects, or any AI tool.",
        tags: ["SaaS", "AI Tooling", "Product"],
        url: "https://posttosource.com",
        linkText: "Visit posttosource.com"
    },
    {
        label: "SaaS · AI Tooling · Productivity",
        title: "File2Markdown.ai",
        description: "Converts any file into clean AI-ready markdown. Removes the friction between legacy file formats and modern AI tools — making documents instantly usable across LLMs and AI workflows.",
        tags: ["SaaS", "AI Tooling", "Productivity"],
        url: "https://file2markdown.ai",
        linkText: "Visit file2markdown.ai"
    },
    {
        label: "Vibecoded · Lead Gen · AI",
        title: "AI Marketing Tombstone Generator",
        description: "Viral lead gen tool that scrapes a profile and roasts their marketing strategy. Used as outreach and as a live demo during the Market in Public livestream.",
        tags: ["Vibecoded", "Lead Gen", "AI"],
        url: "https://aiready.robinweb3.com",
        linkText: "Visit aiready.robinweb3.com"
    },
    {
        label: "AI · Finance · Decision Support",
        title: "AskAtlantis",
        description: "AI-powered stock analysis and financial research tool. Combines Claude, Perplexity, and Grok for DCF valuations, comparable analysis, earnings deep dives, and real-time sentiment — all from real market data.",
        tags: ["AI", "Finance", "SaaS", "Decision Support"],
        url: "https://www.askatlantis.com",
        linkText: "Visit askatlantis.com"
    },
    {
        label: "Analytics · Dashboard · Under NDA",
        title: "Marketing Analytics Dashboard",
        description: "Real-time campaign performance and content ROI tracking across channels.",
        tags: ["Analytics", "Dashboard"],
        confidential: true
    },
    {
        label: "Data · Research · Technical Build",
        title: "Wallet Intelligence Tool",
        description: "Research tool mapping 400+ wallet addresses to social identities. Structured CSV datasets for CRM integration with confidence scoring.",
        tags: ["Data", "Research", "Technical Build"]
    }
];

export default function Portfolio() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.portfolio-card').forEach((card) => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <p className="text-navy/60 font-mono text-sm uppercase tracking-widest mb-3">Selected Work</p>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">Things I've built that work</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((item, index) => {
                        const isLink = !!item.url;
                        const Tag = isLink ? 'a' : 'div';
                        const linkProps = isLink ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : {};

                        return (
                            <Tag
                                key={index}
                                {...linkProps}
                                className="portfolio-card group block p-8 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition-all shadow-sm hover:shadow-md"
                            >
                                <p className="font-mono text-xs text-blue-600/70 tracking-wider uppercase mb-4">{item.label}</p>
                                <h3 className="font-sans font-semibold text-xl text-navy mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <p className="font-sans text-navy/70 leading-relaxed text-sm mb-6">{item.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono text-navy/50 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {item.url && (
                                    <p className="font-mono text-xs text-blue-600 pt-4 border-t border-gray-100 opacity-70 group-hover:opacity-100 transition-opacity">
                                        {item.linkText} &#x2197;
                                    </p>
                                )}
                                {item.confidential && (
                                    <p className="text-xs text-navy/40 italic pt-4 border-t border-gray-100">
                                        Client project &middot; Under NDA
                                    </p>
                                )}
                            </Tag>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
