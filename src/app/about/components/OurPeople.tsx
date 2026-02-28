// components/about/OurPeople.tsx
import Image from "next/image";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Icons } from "@/components/ui/Icons";
import { AgentsSection } from "../../components/sections/AgentsSection";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  linkedin:  (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
};

// Department colour accent
const DEPT_COLOURS: Record<string, string> = {
  Executive:       "text-[#c8a45a] border-[rgba(200,164,90,0.25)] bg-[rgba(200,164,90,0.08)]",
  Sales:           "text-[#34d399] border-[rgba(52,211,153,0.25)] bg-[rgba(52,211,153,0.08)]",
  "Client Services":"text-[#60a5fa] border-[rgba(96,165,250,0.25)] bg-[rgba(96,165,250,0.08)]",
  Marketing:       "text-[#f472b6] border-[rgba(244,114,182,0.25)] bg-[rgba(244,114,182,0.08)]",
  Finance:         "text-[#a78bfa] border-[rgba(167,139,250,0.25)] bg-[rgba(167,139,250,0.08)]",
  Operations:      "text-[#fb923c] border-[rgba(251,146,60,0.25)] bg-[rgba(251,146,60,0.08)]",
};

export function OurPeople() {
 

  return (
    <section className="py-20 px-5 md:px-[5vw]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Our People"
          title="The Team Behind Lumière"
          subtitle="A curated group of specialists united by one standard: no detail is too small, no client expectation too high."
          className="mb-12"
        />

        {/* CEO row — full width spotlight card */}
      <AgentsSection />
      </div>
    </section>
  );
}
