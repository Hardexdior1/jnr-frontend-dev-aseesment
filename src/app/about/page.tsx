// app/about/page.tsx
import type { Metadata } from "next";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FloatingWhatsApp } from "../components/layout/FloatingWhatsApp";
import { AboutHero } from "./components/AboutHero";
import { OurStory } from "./components/OurStory";
import { TheBoss } from "./components/TheBoss";
import { OurPeople } from "./components/OurPeople";
import { AboutContact } from "./components/AboutContact";

export const metadata: Metadata = {
  title: "About Us — Lumière Estates",
  description:
    "Meet the team behind $4.8B in luxury real estate transactions. Our story, our people, and the values that define us.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <AboutHero />
        <OurStory />
        <TheBoss />
        <OurPeople />
        <AboutContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
