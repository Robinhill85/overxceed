"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { FORMSPREE_URL } from "@/lib/constants";

/**
 * Webinar registration form. Deliberately NOT a calendar link: invitees are
 * added to the session by hand, and the availability answer decides which
 * slot they get. (Calendar links sent over LinkedIn trip redirect warnings
 * and depress clicks — decision from the 3 Aug outreach call.)
 * Same Formspree form as BriefForm; `form: "webinar"` keys the inbox filter.
 * Fires `webinar_register` on success.
 */
const AVAILABILITY_OPTIONS = [
  "Weekday lunchtime (12–2pm)",
  "Weekday afternoon (2–5pm)",
  "Weekday evening (5–8pm)",
  "Whenever — just send me the invite",
];

export default function WebinarForm({ location = "webinar" }) {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const availability = form.availability.value;

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";

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
        body: JSON.stringify({
          form: "webinar",
          name,
          email,
          availability,
          page: location,
        }),
      });

      if (response.ok) {
        track("webinar_register", { location });
        setStatus("success");
      } else {
        setStatus("idle");
        setFormError("There was an issue saving your spot. Please try again.");
      }
    } catch {
      setStatus("idle");
      setFormError("Network error. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-xl font-serif italic text-navy/80">
          You&rsquo;re on the list.
        </p>
        <p className="font-sans text-sm text-navy/70 max-w-sm leading-relaxed">
          The invite comes from a real person, not a mailing robot — check your
          inbox in the next day or so for this week&rsquo;s session details.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 flex flex-col"
    >
      <h3 className="font-sans font-semibold text-xl text-navy mb-1.5">
        Save your spot
      </h3>
      <p className="font-sans text-sm text-navy/60 mb-6">
        Free, weekly, about 45 minutes. No card, no commitment.
      </p>

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
            htmlFor={`availability-${location}`}
            className="block text-sm font-sans font-medium text-navy/80 mb-1.5"
          >
            When suits you best?
          </label>
          <select
            id={`availability-${location}`}
            name="availability"
            defaultValue={AVAILABILITY_OPTIONS[3]}
            className="w-full bg-white border border-gray-200 text-navy rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
          >
            {AVAILABILITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
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
          {status === "submitting" ? "Saving..." : "Save my spot"}
        </span>
        {status !== "submitting" && (
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
      </button>

      <p className="font-sans text-xs text-navy/50 mt-4 text-center">
        Can&rsquo;t make it this week? You&rsquo;re automatically invited to
        the next one.
      </p>
    </form>
  );
}
