// components/about/AboutContact.tsx
import { Icons } from "../../components/ui/Icons";
import { Button } from "../../components/ui/Button";

const SOCIAL_ITEMS = [
  {
    platform: "Instagram",
    handle:   "@lumiereestates",
    href:     "https://instagram.com/lumiereestates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    platform: "LinkedIn",
    handle:   "Lumière Estates",
    href:     "https://linkedin.com/company/lumiereestates",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    platform: "X / Twitter",
    handle:   "@lumiereestates",
    href:     "https://twitter.com/lumiereestates",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    platform: "YouTube",
    handle:   "@lumiereestates",
    href:     "https://youtube.com/@lumiereestates",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    platform: "Facebook",
    handle:   "Lumière Estates",
    href:     "https://facebook.com/lumiereestates",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

export function AboutContact() {
  return (
    <section className="py-20 px-5 md:px-[5vw] bg-[#0d0d12]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Reach Us</span>
          <div className="divider-gold" />
          <h2 className="font-serif-display text-[clamp(26px,4vw,44px)] font-normal">
            Get in Touch
          </h2>
          <p className="text-sm text-[#6a6a78] mt-3 max-w-md mx-auto leading-relaxed">
            Whether you are buying, selling, or simply exploring — every conversation with Lumière begins with a person, not a form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: direct contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif-display text-xl text-[#e8e2d9] mb-1">Direct Contact</h3>

            {[
              {
                icon: <Icons.Phone />,
                label: "Main Office",
                value: "+234 9131 114346",
                href:  `tel:+2349131114346`,
              },
              {
                icon: <Icons.Mail />,
                label: "Email Concierge",
                value: "concierge@lumiereestates.com",
                href:  `mailto:concierge@lumiereestates.com`,
              },
              {
                icon: <Icons.Pin />,
                label: "Headquarters",
                value: "Ikeja, Lagos, Nigeria",
                href:  `https://maps.google.com/?q=${encodeURIComponent(`Ikeja, Lagos, Nigeria`)}`,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Headquarters" ? "_blank" : undefined}
                rel={item.label === "Headquarters" ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm px-5 py-4 hover:border-[rgba(200,164,90,0.3)] transition-all duration-200 no-underline group"
              >
                <div className="w-9 h-9 rounded-sm bg-[rgba(200,164,90,0.1)] border border-[rgba(200,164,90,0.18)] flex items-center justify-center text-[#c8a45a] shrink-0 mt-0.5 group-hover:bg-[rgba(200,164,90,0.15)] transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6a6a78] mb-0.5">{item.label}</div>
                  <div className="text-sm text-[#e8e2d9] leading-snug">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="pt-2">
              <Button variant="gold" size="lg" href="/#contact">
                Send a Message
              </Button>
            </div>
          </div>

          {/* Right: social media */}
          <div>
            <h3 className="font-serif-display text-xl text-[#e8e2d9] mb-4">Follow Lumière</h3>
            <div className="flex flex-col gap-3">
              {SOCIAL_ITEMS.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm px-5 py-3.5 hover:border-[rgba(200,164,90,0.3)] hover:bg-[rgba(200,164,90,0.04)] transition-all duration-200 no-underline group"
                >
                  <div className="w-9 h-9 rounded-sm bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#6a6a78] group-hover:border-[rgba(200,164,90,0.25)] group-hover:text-[#c8a45a] transition-all duration-200 shrink-0">
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-[#6a6a78]">{s.platform}</div>
                    <div className="text-sm text-[#e8e2d9] mt-0.5">{s.handle}</div>
                  </div>
                  {/* Arrow */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" className="text-[#6a6a78] group-hover:text-[#c8a45a] group-hover:translate-x-0.5 transition-all duration-200 shrink-0">
                    <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
