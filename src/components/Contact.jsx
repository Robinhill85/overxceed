import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const containerRef = useRef(null);
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.contact-element',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const brief = form.brief.value.trim();

        const newErrors = {};
        if (!name) newErrors.name = "Name is required";
        if (!email) newErrors.email = "Email is required";
        if (!brief) newErrors.brief = "Brief is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/xnjbgoyd", {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, brief })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('idle');
                alert("There was an issue submitting your brief. Please try again.");
            }
        } catch {
            setStatus('idle');
            alert("Network error. Please try again later.");
        }
    };

    return (
        <section id="contact" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto">

                <div className="mb-12 text-center contact-element">
                    <p className="text-navy/60 font-mono text-sm uppercase tracking-widest mb-3">Get Started</p>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight">Start a conversation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Book a call */}
                    <div className="contact-element bg-navy text-white p-8 md:p-10 rounded-xl flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                                <Calendar className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="font-sans font-semibold text-2xl mb-4">Book a call</h3>
                            <p className="text-white/70 font-sans leading-relaxed mb-8">
                                30 minutes, free. We'll diagnose where AI can move the needle for your marketing and whether we're the right fit.
                            </p>
                        </div>
                        <a
                            href="https://app.usemotion.com/meet/robin-h/ai-native"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-navy rounded-xl font-sans font-semibold hover:bg-white/90 transition-all group"
                        >
                            Schedule now <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>

                    {/* Submit a brief */}
                    <div className="contact-element">
                        {status === 'success' ? (
                            <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 h-full flex items-center justify-center">
                                <p className="text-xl font-serif italic text-navy/80 text-center">
                                    Brief received. We'll be in touch within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 h-full flex flex-col">
                                <h3 className="font-sans font-semibold text-xl text-navy mb-6">Submit a brief</h3>

                                <div className="space-y-4 flex-grow">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-sans font-medium text-navy/80 mb-1.5">Name</label>
                                        <input
                                            type="text" id="name" name="name"
                                            className={`w-full bg-white border ${errors.name ? 'border-red-400' : 'border-gray-200'} text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-sans font-medium text-navy/80 mb-1.5">Email</label>
                                        <input
                                            type="email" id="email" name="email"
                                            className={`w-full bg-white border ${errors.email ? 'border-red-400' : 'border-gray-200'} text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm`}
                                            placeholder="you@company.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="brief" className="block text-sm font-sans font-medium text-navy/80 mb-1.5">Project Brief</label>
                                        <textarea
                                            id="brief" name="brief" rows="3"
                                            className={`w-full bg-white border ${errors.brief ? 'border-red-400' : 'border-gray-200'} text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none text-sm`}
                                            placeholder="What do you need? Scope, timeline, goals."
                                        ></textarea>
                                        {errors.brief && <p className="text-red-500 text-xs mt-1">{errors.brief}</p>}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full mt-6 group relative overflow-hidden bg-navy hover:bg-navy/90 disabled:bg-navy/50 disabled:cursor-not-allowed text-white font-sans font-semibold py-3.5 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 text-sm"
                                >
                                    <span className="relative z-10">{status === 'submitting' ? 'Sending...' : 'Submit Brief'}</span>
                                    {status !== 'submitting' && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
