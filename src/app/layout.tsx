// app/layout.tsx (moved from src/app/app/layout.tsx)
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Estates — Ultra-Luxury Real Estate",
  description:
    "Extraordinary properties. Uncompromising standards. The world's most coveted addresses, curated for a discerning clientele.",
  keywords: ["luxury real estate", "ultra-luxury homes", "Malibu", "Manhattan", "Aspen", "Beverly Hills"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
