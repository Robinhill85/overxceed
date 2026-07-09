import { X_URL, LINKEDIN_URL } from "@/lib/constants";

/*
 * Legacy /robonky music page — kept reachable (no 404s for existing links)
 * but out of the nav and noindexed, per the PRD. Minimal port of the old
 * static page (legacy-vite/public/robonky/index.html).
 */

export const metadata = {
  title: "robonky | Music by Robin van den Heuvel",
  description:
    "robonky — AI-produced music by Robin van den Heuvel. Listen on Spotify.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/robonky" },
};

export default function RobonkyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] flex items-center justify-center px-6 py-32">
      <div className="max-w-lg text-center">
        <h1 className="font-mono text-5xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-br from-[#e8e8e8] to-[#1DB954] bg-clip-text text-transparent">
          robonky
        </h1>
        <p className="text-sm font-light text-[#9a9a9a] tracking-[0.15em] uppercase mb-10">
          Robin van den Heuvel
        </p>
        <div className="w-10 h-0.5 bg-[#1DB954] mx-auto mb-10" />
        <p className="text-lg font-light leading-relaxed text-[#9a9a9a] mb-10">
          AI-produced music. Human-directed creativity.
        </p>
        <div className="flex flex-col gap-3 mb-10">
          <a
            href="https://open.spotify.com/artist/29uPjLGhUIdrLN5IB9HX25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#1DB954] text-black font-bold text-sm tracking-wide hover:bg-[#1ed760] transition-colors"
          >
            Listen on Spotify
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-[#333] text-[#e8e8e8] text-sm font-medium hover:border-[#1DB954] hover:text-[#1DB954] transition-colors"
          >
            X / Twitter
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-[#333] text-[#e8e8e8] text-sm font-medium hover:border-[#1DB954] hover:text-[#1DB954] transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-[#9a9a9a]">
          Contact:{" "}
          <a
            href="mailto:robin@overxceed.com"
            className="text-[#e8e8e8] border-b border-[#6a6a6a] hover:border-[#1DB954] transition-colors"
          >
            robin@overxceed.com
          </a>
        </p>
      </div>
    </main>
  );
}
