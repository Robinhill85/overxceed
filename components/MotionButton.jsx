"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import { MOTION_URL } from "@/lib/constants";

/**
 * The single booking CTA for the whole site (Motion calendar).
 * Fires the `motion_click` custom event. On Vercel Hobby the event
 * no-ops harmlessly; pageviews still record.
 */
export default function MotionButton({
  children = "Book a call",
  location = "unknown",
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white rounded-xl font-sans font-semibold hover:bg-navy/90 transition-all duration-300 overflow-hidden",
    inverted:
      "inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-navy rounded-xl font-sans font-semibold hover:bg-white/90 transition-all group",
    nav: "inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white rounded-lg font-sans font-semibold text-sm hover:bg-navy/90 transition-all group",
    navMobile:
      "inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy text-white rounded-lg font-sans font-semibold text-sm mt-2",
  };

  return (
    <a
      href={MOTION_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("motion_click", { location })}
      className={`${styles[variant] || styles.primary} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </a>
  );
}
