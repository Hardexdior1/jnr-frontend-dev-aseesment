// components/sections/TestimonialsSection.tsx
import Image from "next/image";
import { TESTIMONIALS } from "../../lib/data";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Icons } from "../../components/ui/Icons";

const PRESS = ["Forbes", "Wall Street Journal", "Financial Times", "Architectural Digest"];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-5 md:px-[5vw]">
      <SectionHeader label="Client Words" title="What Our Clients Say" className="mb-8" />

      {/* Press strip */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {PRESS.map((outlet) => (
          <div
            key={outlet}
            className="text-xs px-3 py-1.5 rounded-sm border border-[rgba(255,255,255,0.08)] text-[#6a6a78]"
          >
            As seen in{" "}
            <span className="text-[#c8a45a]">{outlet}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <blockquote
            key={i}
            className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-6 hover:border-[rgba(200,164,90,0.2)] transition-all duration-300"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Icons.Star key={j} />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif-display text-base italic leading-[1.75] text-[#ccc8c0] mb-5">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <footer className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src={t.avatar}
                  alt={t.author}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="font-medium text-sm">{t.author}</div>
                <div className="text-xs text-[#6a6a78]">{t.role}</div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
