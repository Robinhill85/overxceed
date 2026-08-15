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
    default: "OverXceed | AI Operator Studio, UK",
    template: "%s | OverXceed",
  },
  description:
    "AI operator studio. We build AI systems inside your business — in 90 days, you own them. The AI Visibility System for UK local businesses and 90-day operator engagements for UK SMEs.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "OverXceed",
    title: "OverXceed | AI Operator Studio, UK",
    description:
      "AI operator studio. We build AI systems inside your business — in 90 days, you own them.",
    images: [{ url: `${SITE_URL}/black-blue-logo.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OverXceed | AI Operator Studio, UK",
    description:
      "AI operator studio. We build AI systems inside your business — in 90 days, you own them.",
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
