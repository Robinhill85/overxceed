import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = (e) => {
        e.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                {/* Wordmark replacing logo image */}
                <a href="#" className="font-sans font-bold text-xl md:text-2xl text-navy tracking-tight">
                    OverXceed
                </a>

                {/* Minimal CTA */}
                <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="font-sans font-semibold text-sm md:text-base text-navy hover:text-blue-600 transition-colors"
                >
                    Let's talk
                </a>
            </div>
        </nav>
    );
}
