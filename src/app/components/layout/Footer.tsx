// components/layout/Footer.tsx
import Link from "next/link";

const FOOTER_COLS = [
  {
    title: "Properties",
    links: [
      { label: "All Listings",  href: "/properties" },
      { label: "For Sale",      href: "/properties?status=For+Sale" },
      { label: "For Rent",      href: "/properties?status=For+Rent" },
      { label: "Off-Market",    href: "/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Team",  href: "/#agents" },
      { label: "Press",     href: "#" },
      { label: "Careers",   href: "#" },
      { label: "Privacy",   href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Buying",      href: "/#contact" },
      { label: "Selling",     href: "/#contact" },
      { label: "Renting",     href: "/#contact" },
      { label: "Investment",  href: "/#contact" },
    ],
  },
];

const SOCIAL = ["In", "Fb", "Tw", "Yt"];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[rgba(200,164,90,0.1)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-serif-display text-xl text-[#c8a45a] mb-3">Lumière Estates</div>
            <p className="text-sm text-[#6a6a78] leading-relaxed max-w-[220px]">
              Ultra-luxury real estate for the discerning few. Est. 2006.
            </p>
            <div className="flex gap-2.5 mt-5">
              {SOCIAL.map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-xs text-[#6a6a78] hover:border-[#c8a45a] hover:text-[#c8a45a] transition-all duration-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div className="section-label text-[10px] mb-4">{col.title}</div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6a6a78] hover:text-[#e8e2d9] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(255,255,255,0.06)] mb-5" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#6a6a78]">
          <span>© 2026 Lumière Estates. All rights reserved.</span>
          <span>Equal Housing Opportunity · Crafted with excellence</span>
        </div>
      </div>
    </footer>
  );
}
