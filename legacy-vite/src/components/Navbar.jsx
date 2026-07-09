import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'AI music', href: '/robonky/' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        setMenuOpen(false);
        if (!href.startsWith('#')) return;
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                <a href="#" className="font-sans font-bold text-xl md:text-2xl text-navy tracking-tight">
                    OverXceed
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="font-sans text-sm font-medium text-navy/60 hover:text-navy transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://app.usemotion.com/meet/robin-h/ai-native"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white rounded-lg font-sans font-semibold text-sm hover:bg-navy/90 transition-all group"
                    >
                        Book a Call <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-navy"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="font-sans text-base font-medium text-navy/70 hover:text-navy transition-colors py-2"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://app.usemotion.com/meet/robin-h/ai-native"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy text-white rounded-lg font-sans font-semibold text-sm mt-2"
                    >
                        Book a Call <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            )}
        </nav>
    );
}
