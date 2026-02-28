"use client";
// app/page.tsx (moved from src/app/app/page.tsx)

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { StatsStrip } from "./components/sections/StatsStrip";
import { FeaturedListings } from "./components/sections/FeaturedListings";
import { AgentsSection } from "./components/sections/AgentsSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { BlogSection } from "./components/sections/BlogSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <FeaturedListings />
        <AgentsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
