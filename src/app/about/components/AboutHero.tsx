// components/about/AboutHero.tsx
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative h-[420px] md:h-[520px] overflow-hidden">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVtLT-MIcRtvHHuH3BqZdg_fZh8emglk1sQ&s"
        alt="Lumière Estates office"
        fill
        priority
        className="object-cover object-[center_55%]"
        sizes="100vw"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,12,0.45)] via-[rgba(9,9,12,0.35)] to-[rgba(9,9,12,0.95)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,9,12,0.55)] via-transparent to-[rgba(9,9,12,0.2)]" />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-[5vw] pb-14 md:pb-20">
        <span className="section-label mb-3">Who We Are</span>
        <h1 className="font-serif-display text-[clamp(2.4rem,5.5vw,5rem)] font-normal leading-[1.08] text-[#f5f0e8] max-w-[680px]">
          Built on Trust.<br />Defined by Excellence.
        </h1>
        <p className="mt-4 text-[clamp(14px,1.5vw,16px)] text-[rgba(232,226,217,0.62)] max-w-[480px] leading-[1.85]">
          Since 2006, Lumière Estates has been the quiet force behind the most
          significant real estate transactions in America.
        </p>
      </div>
    </section>
  );
}
