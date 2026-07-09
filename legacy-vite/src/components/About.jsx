import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

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

            <div className="max-w-6xl mx-auto relative z-10 about-content">
                <p className="font-mono text-sm uppercase tracking-widest text-blue-400/70 mb-12">About</p>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
                    {/* Photo */}
                    <div className="lg:col-span-2">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src="/robin.jpg"
                                alt="Robin van den Heuvel"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="lg:col-span-3 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-sans font-bold mb-2">Robin van den Heuvel</h2>
                        <p className="font-mono text-sm text-blue-400/70 uppercase tracking-wider mb-8">Founder, OverXceed</p>

                        <div className="space-y-5 text-white/75 font-sans text-base leading-relaxed">
                            <p>
                                I'm a marketer who spent five years running Web3 campaigns and building growth systems the traditional way — before that, 7 years in iGaming including at a FTSE 100 — now rebuilt everything from scratch when AI changed the game.
                            </p>
                            <p>
                                I ran a Web3 marketing agency, scaled clients to 4,000% user growth, drove 22M+ impressions in a single month on X, and built tools like PostToSource and AskAtlantis to prove that AI-native marketing works in practice.
                            </p>
                            <p>
                                Now I operate as OverXceed — lean, senior-only, with a network of specialist AI and marketing operators I've built up over years in the industry. You get one point of contact with access to the full stack.
                            </p>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/robinmarketing/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-sans font-medium mt-8 transition-colors group"
                        >
                            Connect on LinkedIn <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Stats */}
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
