"use client";
// components/about/TheBoss.tsx
import Image from "next/image";

// ─── CEO DATA ────────────────────────────────────────────────────
const CEO = {
  name:  "Alexandre Fontaine",
  role:  "Founder & Chief Executive Officer",
  image: "data:image/jpeg;base64,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",
  quote: "We never built Lumière to be the biggest. We built it to be the best — for the few who understand the difference.",
  bio:   "Alexandre founded Lumière Estates in 2006 after a decade on Wall Street and three years advising sovereign wealth funds on real estate acquisitions. His vision — to bring European white-glove service standards to the American luxury market — has made Lumière the most trusted name in ultra-high-net-worth real estate. He personally oversees every transaction above $20M.",
  phone: "+1 (310) 555-0001",
  email: "alexandre@lumiereestates.com",
  social: [
    {
      platform: "LinkedIn",
      handle:   "/in/alexandrefontaine",
      href:     "https://linkedin.com/in/alexandrefontaine",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      platform: "X / Twitter",
      handle:   "@alexandrefontaine",
      href:     "https://twitter.com/alexandrefontaine",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      platform: "Instagram",
      handle:   "@alexandrefontaine",
      href:     "https://instagram.com/alexandrefontaine",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
  ],
};

// ─── INLINE ICONS ────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a2 2 0 012-2.18h3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── COMPONENT ───────────────────────────────────────────────────
export function TheBoss() {
  return (
    <section
      style={{ fontFamily: "'Jost', sans-serif" }}
      className="py-20 px-5 md:px-[5vw] bg-[#0d0d12]"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <span
            style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.28em" }}
            className="text-[11px] font-semibold uppercase text-[#c8a45a]"
          >
            Leadership
          </span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#c8a45a] to-transparent mx-auto my-3" />
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[clamp(26px,4vw,44px)] font-normal text-[#e8e2d9]"
          >
            The Founder
          </h2>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">

          {/* Photo column */}
          <div className="relative">
            <div className="relative h-[480px] md:h-[580px] rounded-sm overflow-hidden">
              <Image
                src={CEO.image}
                alt={CEO.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,12,0.82)] via-[rgba(9,9,12,0.1)] to-transparent" />
              {/* Name on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl text-[#f0ebe0] font-normal"
                >
                  {CEO.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#c8a45a] font-semibold mt-1">
                  {CEO.role}
                </div>
              </div>
            </div>

            {/* Gold accent bar */}
            <div className="absolute top-8 -right-2 w-0.5 h-20 bg-gradient-to-b from-[#c8a45a] to-transparent hidden lg:block" />
          </div>

          {/* Content column */}
          <div className="flex flex-col gap-7">

            {/* Quote */}
            <div className="border-l-2 border-[#c8a45a] pl-6">
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[clamp(17px,2.2vw,25px)] italic text-[#e8e2d9] leading-[1.65] font-normal"
              >
                &ldquo;{CEO.quote}&rdquo;
              </p>
            </div>

            {/* Bio */}
            <p className="text-[15px] text-[#8a8a98] leading-[1.9]">
              {CEO.bio}
            </p>

            {/* Phone + Email cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${CEO.phone}`}
                className="flex items-center gap-3 bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm px-4 py-3.5 hover:border-[rgba(200,164,90,0.3)] transition-all duration-200 no-underline group"
              >
                <span className="text-[#c8a45a] shrink-0"><PhoneIcon /></span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6a6a78]">Direct Line</div>
                  <div className="text-sm text-[#e8e2d9] mt-0.5">{CEO.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${CEO.email}`}
                className="flex items-center gap-3 bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm px-4 py-3.5 hover:border-[rgba(200,164,90,0.3)] transition-all duration-200 no-underline group"
              >
                <span className="text-[#c8a45a] shrink-0"><MailIcon /></span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6a6a78]">Email</div>
                  <div className="text-sm text-[#e8e2d9] mt-0.5">{CEO.email}</div>
                </div>
              </a>
            </div>

            {/* Social handles */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#6a6a78] mb-3">
                Connect with Alexandre
              </div>
              <div className="flex flex-col gap-2">
                {CEO.social.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm px-4 py-3 hover:border-[rgba(200,164,90,0.28)] hover:bg-[rgba(200,164,90,0.03)] transition-all duration-200 no-underline group"
                  >
                    <span className="text-[#6a6a78] group-hover:text-[#c8a45a] transition-colors shrink-0">
                      {s.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-widest text-[#6a6a78]">{s.platform}</div>
                      <div className="text-sm text-[#e8e2d9] mt-0.5">{s.handle}</div>
                    </div>
                    <span className="text-[#6a6a78] group-hover:text-[#c8a45a] group-hover:translate-x-0.5 transition-all duration-200">
                      <ArrowIcon />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-1">
              <a
                href={`mailto:${CEO.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#09090c] rounded-sm"
                style={{
                  background: "linear-gradient(135deg, #c8a45a, #e8d5a0 50%, #c8a45a)",
                  backgroundSize: "200% 100%",
                  transition: "all 0.35s ease",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundPosition = "right";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(200,164,90,0.4)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundPosition = "left";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                Write to Alexandre
                <ArrowIcon />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
