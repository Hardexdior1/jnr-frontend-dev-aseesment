// components/sections/BlogSection.tsx
import Image from "next/image";
import { BLOG_POSTS } from "../../lib/data";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Icons } from "../../components/ui/Icons";

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-5 md:px-[5vw] bg-[#0d0d12]">
      <SectionHeader label="Insights" title="From Our Desk" className="mb-10" />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm overflow-hidden cursor-pointer group hover:border-[rgba(200,164,90,0.25)] transition-all duration-300"
            onClick={() => alert(`"${post.title}" — full blog coming soon!`)}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-semibold tracking-widest px-2 py-0.5 rounded-sm bg-[rgba(200,164,90,0.1)] text-[#c8a45a] border border-[rgba(200,164,90,0.2)]">
                  {post.category}
                </span>
                <span className="text-xs text-[#6a6a78]">{post.readTime} read</span>
              </div>

              <h3 className="font-serif-display text-lg leading-snug mb-2">{post.title}</h3>
              <p className="text-sm text-[#6a6a78] leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex justify-between items-center">
                <span className="text-xs text-[#6a6a78]">{post.date}</span>
                <span className="flex items-center gap-1 text-xs text-[#c8a45a]">
                  Read <Icons.ArrowRight />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
