import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/lib/config";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Bricolage_Grotesque,
} from "next/font/google";

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: config.name,
  description: `${config.name} — ${config.currentFocus}. ${config.degree} graduate working in IT ops.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
