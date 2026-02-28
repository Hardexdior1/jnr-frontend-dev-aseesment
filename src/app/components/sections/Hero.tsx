"use client";
// components/sections/Hero.tsx

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { Icons } from "../../components/ui/Icons";

export function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query)  params.set("q", query);
    if (type)   params.set("type", type);
    if (status) params.set("status", status);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90"
        alt="Luxury home aerial view"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(9,9,12,0.78)] via-[rgba(9,9,12,0.45)] to-[rgba(9,9,12,0.72)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-5 md:px-[5vw] pt-[68px]">
        <span className="section-label mb-4">Ultra-Luxury Real Estate</span>

        <h1 className="font-serif-display font-normal text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.08] text-[#f5f0e8] max-w-[700px]">
          Where Architecture<br />Meets Aspiration
        </h1>

        <p className="mt-4 text-[clamp(14px,1.5vw,16px)] text-[rgba(232,226,217,0.65)] max-w-[480px] leading-[1.8]">
          Extraordinary properties. Uncompromising standards. The world&apos;s most
          coveted addresses, curated for a discerning clientele.
        </p>

        {/* Search bar */}
        <div className="mt-8 bg-[rgba(9,9,12,0.7)] backdrop-blur-md border border-[rgba(200,164,90,0.2)] rounded-sm p-4 md:p-5 flex flex-wrap gap-3 items-center max-w-[720px] w-full">
          <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 flex-1 min-w-[160px]">
            <Icons.Search />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Location, type, keyword…"
              className="bg-transparent border-none outline-none text-[14px] text-[#e8e2d9] w-full"
            />
          </div>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm text-[#e8e2d9] outline-none min-w-[120px]"
          >
            <option value="">All Types</option>
            {["Villa", "Penthouse", "Estate", "Waterfront", "Loft", "Condo"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm text-[#e8e2d9] outline-none min-w-[110px]"
          >
            <option value="">Any Status</option>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>

          <Button variant="gold" size="md" onClick={handleSearch} className="whitespace-nowrap">
            Search
          </Button>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 mt-7 flex-wrap">
          <Button variant="gold" size="lg" href="/properties">
            Browse All Properties
          </Button>
          <Button variant="outline" size="lg" href="/#contact">
            Private Consultation
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[rgba(200,164,90,0.6)]">
        <span className="text-[9px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c8a45a] to-transparent" />
      </div>
    </section>
  );
}
