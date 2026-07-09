"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import { FORMSPREE_URL, MOTION_URL } from "@/lib/constants";

/**
 * Formspree brief form (form id verified working; recipient robin@overxceed.com,
 * confirmed 2026-07-07). Fires `brief_submit` on success.
 * Success state links the Motion calendar — no dead end.
 */
export default function BriefForm({ location = "home" }) {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

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
    setFormError("");
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, brief, page: location }),
      });

      if (response.ok) {
        track("brief_submit", { location });
        setStatus("success");
      } else {
        setStatus("idle");
        setFormError("There was an issue submitting your brief. Please try again.");
      }
    } catch {
      setStatus("idle");
      setFormError("Network error. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 h-full flex flex-col items-center justify-center gap-6 text-center">
        <p className="text-xl font-serif italic text-navy/80">
          Brief received. I&rsquo;ll be in touch within 24 hours.
        </p>
        <a
          href={MOTION_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("motion_click", { location: `${location}_form_success` })}
          className="inline-flex items-center gap-2 font-sans font-semibold text-blue-700 hover:text-blue-800 transition-colors"
        >
          Want to talk sooner? Book a call now
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 h-full flex flex-col"
    >
      <h3 className="font-sans font-semibold text-xl text-navy mb-6">
        Submit a brief
      </h3>

      <div className="space-y-4 flex-grow">
        <div>
          <label
            htmlFor={`name-${location}`}
            className="block text-sm font-sans font-medium text-navy/80 mb-1.5"
          >
            Name
          </label>
          <input
            type="text"
            id={`name-${location}`}
            name="name"
            autoComplete="name"
            className={`w-full bg-white border ${
              errors.name ? "border-red-400" : "border-gray-200"
            } text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-700 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor={`email-${location}`}
            className="block text-sm font-sans font-medium text-navy/80 mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id={`email-${location}`}
            name="email"
            autoComplete="email"
            className={`w-full bg-white border ${
              errors.email ? "border-red-400" : "border-gray-200"
            } text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm`}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="text-red-700 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor={`brief-${location}`}
            className="block text-sm font-sans font-medium text-navy/80 mb-1.5"
          >
            Project Brief
          </label>
          <textarea
            id={`brief-${location}`}
            name="brief"
            rows="3"
            className={`w-full bg-white border ${
              errors.brief ? "border-red-400" : "border-gray-200"
            } text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none text-sm`}
            placeholder="What do you need? Scope, timeline, goals."
          ></textarea>
          {errors.brief && (
            <p className="text-red-700 text-xs mt-1">{errors.brief}</p>
          )}
        </div>
      </div>

      {formError && (
        <p className="text-red-700 text-sm mt-4" role="alert">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full mt-6 group relative overflow-hidden bg-navy hover:bg-navy/90 disabled:bg-navy/50 disabled:cursor-not-allowed text-white font-sans font-semibold py-3.5 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 text-sm"
      >
        <span className="relative z-10">
          {status === "submitting" ? "Sending..." : "Submit Brief"}
        </span>
        {status !== "submitting" && (
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
      </button>
    </form>
  );
}
