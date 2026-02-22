import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef(null);
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success'
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

        // Basic Validation
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
            const endpoint = "https://formspree.io/f/xnjbgoyd";
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, brief })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('idle');
                alert("There was an issue submitting your brief. Please try again.");
            }
        } catch (error) {
            setStatus('idle');
            alert("Network error. Please try again later.");
        }
    };

    return (
        <section id="contact" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-3xl mx-auto">

                <div className="mb-12 text-center contact-element">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight mb-4">Initialize Project</h2>
                    <p className="text-navy/60 font-mono text-sm uppercase tracking-widest">Pricing is scoped per brief</p>
                </div>

                {status === 'success' ? (
                    <div className="bg-white p-12 text-center contact-element">
                        <p className="text-2xl font-serif italic text-navy/80">
                            Brief received. We'll be in touch within 24 hours.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 contact-element">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-sans font-semibold text-navy mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`w-full bg-gray-50 border ${errors.name ? 'border-red-400' : 'border-gray-200'} text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-sans font-semibold text-navy mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-400' : 'border-gray-200'} text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="brief" className="block text-sm font-sans font-semibold text-navy mb-2">Project Brief</label>
                            <textarea
                                id="brief"
                                name="brief"
                                rows="4"
                                className={`w-full bg-gray-50 border ${errors.brief ? 'border-red-400' : 'border-gray-200'} text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none`}
                                placeholder="What do you need built? Details on scope and timeline."
                            ></textarea>
                            {errors.brief && <p className="text-red-500 text-xs mt-1">{errors.brief}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full group relative overflow-hidden bg-navy hover:bg-navy/90 disabled:bg-navy/50 disabled:cursor-not-allowed text-white font-sans font-semibold py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-2"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {status === 'submitting' ? 'Sending...' : 'Submit Brief'}
                            </span>
                            {status !== 'submitting' && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
