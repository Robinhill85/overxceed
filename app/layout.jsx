import { Inter, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

// next/font self-hosts both families — no render-blocking third-party font CSS.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OverXceed | AI-Native Marketing Operator, UK",
    template: "%s | OverXceed",
  },
  description:
    "AI-native marketing operator. The AI Visibility System for UK local businesses and 90-day AI operator engagements — built by a senior operator, not a bloated team.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "OverXceed",
    title: "OverXceed | AI-Native Marketing Operator, UK",
    description:
      "AI-native marketing operator. The AI Visibility System for UK local businesses and 90-day AI operator engagements.",
    images: [{ url: `${SITE_URL}/black-blue-logo.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OverXceed | AI-Native Marketing Operator, UK",
    description:
      "AI-native marketing operator. The AI Visibility System for UK local businesses and 90-day AI operator engagements.",
    images: [`${SITE_URL}/black-blue-logo.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-screen bg-white font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
