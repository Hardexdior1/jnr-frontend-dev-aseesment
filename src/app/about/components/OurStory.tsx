// components/about/OurStory.tsx
import Image from "next/image";

// ─── DATA ────────────────────────────────────────────────────────
const PARAGRAPHS = [
  "Lumière Estates was born from a single conviction: that the most important transactions in a person's life deserve more than a transaction. They deserve a relationship, a counsel, and an advocate who stays long after the keys change hands.",
  "Alexandre Fontaine founded the firm in 2006 after witnessing firsthand the gap between what ultra-high-net-worth clients needed and what the market offered. He built Lumière to be different — smaller by design, deeper by choice, and uncompromising in every detail.",
  "Today, with three offices, a global partner network spanning 40 markets, and $4.8 billion in closed transactions, that founding philosophy remains unchanged. We do not chase volume. We pursue excellence.",
];

const STATS = [
  { value: "20+",   label: "Years"  },
  { value: "439",   label: "Deals"  },
  { value: "$4.8B", label: "Volume" },
];

const MILESTONES = [
  { year: "2006", title: "Founded",         desc: "Alexandre Fontaine establishes Lumière Estates in Beverly Hills with a team of three." },
  { year: "2009", title: "First $10M Sale", desc: "Close the first ultra-luxury transaction — a $10.5M Bel Air compound — during the financial downturn, proving our resilience." },
  { year: "2012", title: "New York Office", desc: "Open our Manhattan office to serve the urban luxury market. First year closes $120M in sales." },
  { year: "2016", title: "$1B Milestone",   desc: "Cross $1 billion in cumulative sales volume. Ranked #3 luxury brokerage on the West Coast." },
  { year: "2019", title: "Aspen & Napa",    desc: "Expand to mountain and wine country markets. Add estate and ranch division under Isabella Torres." },
  { year: "2023", title: "Global Network",  desc: "Partner with 14 international brokerages across Europe, UAE, and Asia. Now operating across 40+ markets." },
  { year: "2026", title: "Today",           desc: "$4.8B+ in total portfolio value. 439 transactions. Three offices. One uncompromising standard." },
];

// ─── COMPONENT ───────────────────────────────────────────────────
export function OurStory() {
  return (
    <section
      style={{ fontFamily: "'Jost', sans-serif" }}
      className="py-20 px-5 md:px-[5vw] bg-[#09090c]"
    >
      {/* ── Intro split ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">

        {/* Left: copy */}
        <div>
          {/* Inline section header — no SectionHeader import */}
          <span
            style={{ letterSpacing: "0.28em" }}
            className="text-[11px] font-semibold uppercase text-[#c8a45a]"
          >
            Our Story
          </span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#c8a45a] to-transparent my-3" />
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[clamp(26px,4vw,42px)] font-normal text-[#e8e2d9] leading-tight mb-6"
          >
            Two Decades of Quiet Excellence
          </h2>

          <div className="flex flex-col gap-4 text-[15px] text-[#8a8a98] leading-[1.9]">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Stat trio */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="text-center py-4 px-2 rounded-sm border border-[rgba(200,164,90,0.14)]"
                style={{ background: "linear-gradient(135deg, rgba(200,164,90,0.08), transparent)" }}
              >
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl font-normal text-[#c8a45a]"
                >
                  {s.value}
                </div>
                <div
                  style={{ letterSpacing: "0.18em" }}
                  className="text-[10px] uppercase text-[#6a6a78] mt-1"
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image + floating card */}
        <div className="relative">
          <div className="relative h-[380px] md:h-[460px] rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=85"
              alt="Lumière team in discussion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,12,0.45)] to-transparent" />
          </div>

          {/* Floating year card */}
          <div className="absolute -bottom-5 -left-4 md:-left-6 bg-[#111116] border border-[rgba(200,164,90,0.25)] rounded-sm px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl font-normal text-[#c8a45a]"
            >
              2006
            </div>
            <div
              style={{ letterSpacing: "0.2em" }}
              className="text-[10px] text-[#6a6a78] mt-0.5 uppercase"
            >
              Est. Beverly Hills
            </div>
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-4xl mx-auto">

        {/* Timeline header — no SectionHeader import */}
        <div className="text-center mb-12">
          <span
            style={{ letterSpacing: "0.28em" }}
            className="text-[11px] font-semibold uppercase text-[#c8a45a]"
          >
            Milestones
          </span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#c8a45a] to-transparent mx-auto my-3" />
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[clamp(24px,3vw,38px)] font-normal text-[#e8e2d9]"
          >
            The Journey So Far
          </h2>
        </div>

        <div className="relative flex flex-col gap-8">
          {/* Vertical spine */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(200,164,90,0.25)] to-transparent -translate-x-px" />

          {MILESTONES.map((m, i) => {
            const isRight = i % 2 !== 0;
            return (
              <div
                key={m.year}
                className={`relative flex items-center gap-0 ${
                  isRight ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* Content block */}
                <div
                  className={`flex-1 pl-14 md:pl-0 ${
                    isRight ? "md:pl-10" : "md:pr-10"
                  }`}
                >
                  <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-4 md:p-5 hover:border-[rgba(200,164,90,0.22)] transition-all duration-300">
                    <div
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-lg text-[#c8a45a] mb-1"
                    >
                      {m.title}
                    </div>
                    <div className="text-sm text-[#6a6a78] leading-relaxed">{m.desc}</div>
                  </div>
                </div>

                {/* Centre dot — desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-11 h-11 rounded-full bg-[#09090c] border-2 border-[#c8a45a] flex flex-col items-center justify-center">
                    <span
                      style={{ letterSpacing: "0.06em" }}
                      className="text-[9px] font-semibold text-[#c8a45a] leading-tight"
                    >
                      {m.year}
                    </span>
                  </div>
                </div>

                {/* Left dot — mobile */}
                <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#09090c] border-2 border-[#c8a45a] flex items-center justify-center">
                    <span className="text-[8px] font-bold text-[#c8a45a]">
                      {m.year.slice(2)}
                    </span>
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
