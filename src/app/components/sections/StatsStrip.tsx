// components/sections/StatsStrip.tsx

const STATS = [
  { value: "$4.8B+", label: "Portfolio Value" },
  { value: "439",    label: "Deals Closed" },
  { value: "18+",    label: "Years Excellence" },
  { value: "40+",    label: "Markets Served" },
];

export function StatsStrip() {
  return (
    <section className="bg-[#0d0d12] border-y border-[rgba(200,164,90,0.12)]">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-serif-display text-4xl font-normal text-[#c8a45a]">{s.value}</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#6a6a78] mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
