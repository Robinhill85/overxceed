import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-sans font-bold text-white text-lg">
            OverXceed
          </span>
          <p className="text-white/60 font-sans text-sm">
            &copy; {new Date().getFullYear()} OverXceed. Better marketing. Not
            more of it.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
          <Link
            href="/local"
            className="text-white/60 hover:text-white text-sm font-sans transition-colors"
          >
            AI Visibility
          </Link>
          <Link
            href="/operator"
            className="text-white/60 hover:text-white text-sm font-sans transition-colors"
          >
            90-Day Operator
          </Link>
          <Link
            href="/work"
            className="text-white/60 hover:text-white text-sm font-sans transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#contact"
            className="text-white/60 hover:text-white text-sm font-sans transition-colors"
          >
            Contact
          </Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-sm font-sans transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
