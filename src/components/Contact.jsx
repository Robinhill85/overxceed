import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef(null);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const brief = document.getElementById('brief').value;

        const subject = encodeURIComponent(`New Project Brief from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Brief:\n${brief}`);

        window.location.href = `mailto:robin@overxceed.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-3xl mx-auto">

                <div className="mb-12 text-center contact-element">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-navy tracking-tight mb-4">Initialize Project</h2>
                    <p className="text-navy/60 font-mono text-sm uppercase tracking-widest">Pricing is scoped per brief</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 contact-element">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-sans font-semibold text-navy mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-gray-50 border border-gray-200 text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-sans font-semibold text-navy mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-gray-50 border border-gray-200 text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="brief" className="block text-sm font-sans font-semibold text-navy mb-2">Project Brief</label>
                        <textarea
                            id="brief"
                            rows="4"
                            required
                            className="w-full bg-gray-50 border border-gray-200 text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                            placeholder="What do you need built? Details on scope and timeline."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold py-4 rounded-lg transition-colors flex justify-center items-center gap-2"
                    >
                        Submit Brief
                    </button>
                </form>
            </div>
        </section>
    );
}
