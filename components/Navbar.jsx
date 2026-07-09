"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MotionButton from "@/components/MotionButton";

// No "AI music" link — /robonky stays reachable by URL but out of the nav.
const navLinks = [
  { label: "AI Visibility", href: "/local" },
  { label: "90-Day Operator", href: "/operator" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <Link
          href="/"
          className="font-sans font-bold text-xl md:text-2xl text-navy tracking-tight"
        >
          OverXceed
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <MotionButton variant="nav" location="navbar">
            Book a Call
          </MotionButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-navy"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-base font-medium text-navy/70 hover:text-navy transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <MotionButton variant="navMobile" location="navbar_mobile">
            Book a Call
          </MotionButton>
        </div>
      )}
    </nav>
  );
}
