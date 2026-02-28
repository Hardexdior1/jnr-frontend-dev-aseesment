// components/sections/AgentsSection.tsx
import Image from "next/image";
import { AGENTS, WA_NUMBER } from "../../lib/data";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Button } from "../../components/ui/Button";
import { Icons } from "../../components/ui/Icons";

export function AgentsSection() {
  return (
    <section id="agents" className="py-20 px-5 md:px-[5vw] bg-[#0d0d12]">
      <SectionHeader label="Our People" title="The Lumière Agents" className="mb-10" />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {AGENTS.map((agent) => {
          const waMsg = encodeURIComponent(
            `Hello ${agent.name}, I'd like to discuss a property with you.`
          );
          return (
            <article
              key={agent.name}
              className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm overflow-hidden hover:border-[rgba(200,164,90,0.25)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
            >
              {/* Photo */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,12,0.7)] to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="font-serif-display text-xl mb-0.5">{agent.name}</div>
                <div className="section-label text-[10px] mb-3">{agent.title}</div>
                <p className="text-sm text-[#6a6a78] leading-relaxed mb-4">{agent.bio}</p>

                <div className="flex gap-4 text-sm text-[#6a6a78] mb-4">
                  <span>
                    <span className="font-serif-display text-lg text-[#c8a45a]">{agent.deals}</span>{" "}
                    Deals
                  </span>
                  <span>
                    <span className="font-serif-display text-lg text-[#c8a45a]">{agent.volume}</span>{" "}
                    Volume
                  </span>
                </div>

                <Button
                  variant="whatsapp"
                  fullWidth
                  href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                  external
                  className="py-2.5 rounded-sm text-sm"
                >
                  <Icons.WhatsApp />
                  Message {agent.name.split(" ")[0]}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
