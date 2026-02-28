"use client";
// components/property/PropertyGallery.tsx

import { useState } from "react";
import Image from "next/image";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div className="relative h-[300px] sm:h-[380px] md:h-[440px] rounded-sm overflow-hidden mb-2">
        <Image
          key={active}
          src={images[active]}
          alt={`${title} — photo ${active + 1}`}
          fill
          priority={active === 0}
          className="object-cover animate-fade-in"
          sizes="(max-width: 900px) 100vw, 65vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
        {/* Counter */}
        <div className="absolute bottom-3 right-4 text-xs text-white/70">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`gallery-thumb flex-1 h-16 md:h-20 ${active === i ? "active" : ""}`}
            aria-label={`View photo ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} thumbnail ${i + 1}`}
              width={200}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
