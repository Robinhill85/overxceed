import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Vibecoded App",
        need: "High-speed frontend iteration",
        built: "React 19 / AI Pipeline",
        speed: "7 days",
        imageUrl: "/vibecodeapp1.jpg",
        imageFallback: "bg-gradient-to-br from-blue-900 to-navy"
    },
    {
        title: "Wallet Intelligence tool",
        need: "DeFi user segmentation",
        built: "Data Dashboard / Analytics",
        speed: "14 days",
        imageUrl: "/mockups/wallet.png",
        imageFallback: "bg-gradient-to-tr from-gray-900 via-navy to-blue-950"
    },
    {
        title: "BTC Yield Calculator",
        need: "Conversion rate optimization",
        built: "Interactive Web App",
        speed: "5 days",
        imageUrl: "/mockups/btc.png",
        imageFallback: "bg-gradient-to-bl from-navy via-blue-900 to-black",
        contentUrl: "https://www.btcyieldcalculator.com"
    },
    {
        title: "AI source tool",
        need: "Automated content ingestion",
        built: "Backend Service / API",
        speed: "10 days",
        imageUrl: "/ai-source-tool.png",
        imageFallback: "bg-gradient-to-t from-black to-blue-900",
        contentUrl: "https://www.posttosource.com"
    },
    {
        title: "GenAI video/images",
        need: "Brand campaign assets",
        built: "Custom Generative Models",
        speed: "48 hours",
        imageUrl: "/genai.png",
        imageFallback: "bg-gradient-to-r from-gray-900 to-navy"
    },
    {
        title: "Deep Market research",
        need: "Competitor analysis",
        built: "Telegram Mini App Report",
        speed: "3 days",
        imageUrl: "/market-research.png",
        imageFallback: "bg-gradient-to-br from-gray-900 to-navy",
        contentUrl: "/market-research.pdf"
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
        <section id="portfolio" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight mb-2">Case Study Zero</h2>
                    <p className="text-navy/60 font-mono text-sm uppercase tracking-widest">Architected for Speed & Scale</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => {
                        const CardWrapper = item.contentUrl ? 'a' : 'div';
                        return (
                            <CardWrapper
                                key={index}
                                href={item.contentUrl}
                                target={item.contentUrl ? "_blank" : undefined}
                                rel={item.contentUrl ? "noopener noreferrer" : undefined}
                                className="portfolio-card group block overflow-hidden rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 cursor-pointer"
                            >
                                <div className={`aspect-[16/10] w-full relative overflow-hidden`}>
                                    {item.imageUrl ? (
                                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    ) : (
                                        <div className={`w-full h-full ${item.imageFallback}`} />
                                    )}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    {/* Simulated Tech Texture overlays the fallback gradients, but not the images for clarity */}
                                    {!item.imageUrl && (
                                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-white)_1px,_transparent_1px)] bg-[size:20px_20px]" />
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="font-sans font-semibold text-xl text-navy mb-6 group-hover:text-blue-600 transition-colors">{item.title}</h3>

                                    <div className="space-y-3 font-mono text-sm">
                                        <div className="flex justify-between border-b border-gray-100 pb-2">
                                            <span className="text-navy/50">Need</span>
                                            <span className="text-navy text-right font-medium">{item.need}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-100 pb-2">
                                            <span className="text-navy/50">Built</span>
                                            <span className="text-navy text-right font-medium">{item.built}</span>
                                        </div>
                                        <div className="flex justify-between pt-1">
                                            <span className="text-navy/50">Speed</span>
                                            <span className="text-blue-600 font-bold">{item.speed}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardWrapper>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
