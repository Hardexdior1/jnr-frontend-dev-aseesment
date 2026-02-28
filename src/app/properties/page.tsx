"use client";
// app/properties/page.tsx (moved from src/app/app/properties/page.tsx)

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FloatingWhatsApp } from "../components/layout/FloatingWhatsApp";
import { FilterBar } from "../components/property/FilterBar";
import { PropertyCard } from "../components/property/PropertyCard";
import { PROPERTIES } from "../lib/data";
import { filterProperties } from "../lib/utils";
import type { FilterState } from "../lib/types";

export default function PropertiesPage() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    query:      searchParams.get("q")      ?? "",
    type:       searchParams.get("type")   ?? "All",
    status:     searchParams.get("status") ?? "All",
    priceRange: "Any Price",
  });

  // Re-read URL params on mount
  useEffect(() => {
    setFilters({
      query:      searchParams.get("q")      ?? "",
      type:       searchParams.get("type")   ?? "All",
      status:     searchParams.get("status") ?? "All",
      priceRange: "Any Price",
    });
  }, [searchParams]);

  const results = filterProperties(PROPERTIES, filters);

  return (
    <>
      <Navbar />

      <main className="pt-[68px] min-h-screen">
        {/* Page header banner */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&q=85"
            alt="Properties"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,12,0.55)] to-[rgba(9,9,12,0.88)]" />
          <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-[5vw]">
            <span className="section-label mb-2">Our Portfolio</span>
            <h1 className="font-serif-display text-[clamp(28px,4vw,48px)] font-normal">
              All Properties
            </h1>
            <p className="text-sm text-[#6a6a78] mt-1">
              {PROPERTIES.length} exclusive listings
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="py-8 px-5 md:px-[5vw]">
          <FilterBar filters={filters} onChange={setFilters} resultCount={results.length} />

          <div className="mt-8">
            {results.length === 0 ? (
              <div className="text-center py-24">
                <div className="font-serif-display text-3xl text-[#6a6a78] mb-2">
                  No properties found
                </div>
                <p className="text-sm text-[#6a6a78]">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
