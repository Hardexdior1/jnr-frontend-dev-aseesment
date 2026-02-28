"use client";
// components/sections/ContactSection.tsx

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Button } from "../../components/ui/Button";
import { Icons } from "../../components/ui/Icons";
import { WA_NUMBER } from "../../lib/data";

const CONTACT_ITEMS = [
  {
    icon: <Icons.WhatsApp />,
    label: "WhatsApp",
    value: `+${WA_NUMBER}`,
    href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello, I'd like to inquire about your luxury properties.")}`,
    external: true,
  },
  {
    icon: <Icons.Mail />,
    label: "Email",
    value: "concierge@lumiereestates.com",
    href: "mailto:concierge@lumiereestates.com",
    external: false,
  },
  {
    icon: <Icons.Phone />,
    label: "Phone",
    value: "+1 (310) 555-0100",
    href: "tel:+13105550100",
    external: false,
  },
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", intent: "Looking to Buy", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 px-5 md:px-[5vw]">
      <SectionHeader
        label="Get in Touch"
        title="Private Consultation"
        subtitle="Every exceptional relationship begins with a conversation. One of our specialists will respond within hours."
        className="mb-12"
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-6 md:p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-5xl mb-4">✓</div>
              <div className="font-serif-display text-2xl text-[#c8a45a]">Message Sent</div>
              <p className="text-sm text-[#6a6a78] mt-2">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <>
              <h3 className="font-serif-display text-2xl mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm outline-none focus:border-[#c8a45a] focus:shadow-[0_0_0_3px_rgba(200,164,90,0.1)] transition-all"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm outline-none focus:border-[#c8a45a] focus:shadow-[0_0_0_3px_rgba(200,164,90,0.1)] transition-all"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <input
                  type="tel"
                  className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm outline-none focus:border-[#c8a45a] transition-all"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <select
                  className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm outline-none focus:border-[#c8a45a] transition-all"
                  value={form.intent}
                  onChange={(e) => setForm({ ...form, intent: e.target.value })}
                >
                  <option>Looking to Buy</option>
                  <option>Looking to Rent</option>
                  <option>Selling a Property</option>
                  <option>Investment Inquiry</option>
                </select>
                <textarea
                  className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm outline-none focus:border-[#c8a45a] transition-all resize-none"
                  rows={4}
                  placeholder="Tell us about your requirements…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <Button type="submit" variant="gold" fullWidth size="lg" className="mt-1">
                  Send Message
                </Button>
              </form>
            </>
          )}
        </div>

        {/* Info column */}
        <div className="flex flex-col gap-4">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-4 flex items-center gap-4 hover:border-[rgba(200,164,90,0.3)] transition-all duration-200 no-underline"
            >
              <div className="w-10 h-10 rounded-sm bg-[rgba(200,164,90,0.1)] border border-[rgba(200,164,90,0.2)] flex items-center justify-center text-[#c8a45a] shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="section-label text-[10px] mb-0.5">{item.label}</div>
                <div className="text-sm text-[#e8e2d9]">{item.value}</div>
              </div>
            </a>
          ))}

          {/* Office photo */}
          <div className="relative h-44 rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85"
              alt="Lumière Estates office"
              fill
              className="object-cover opacity-70"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,12,0.5)] to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-[#6a6a78]">
              Beverly Hills · Manhattan · Aspen
            </div>
          </div>

          {/* Social */}
          <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-4 flex items-center justify-between">
            <span className="text-sm text-[#6a6a78]">Follow Lumière</span>
            <div className="flex gap-2">
              {["In", "Fb", "Tw", "Yt"].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] text-[#6a6a78] text-xs hover:border-[#c8a45a] hover:text-[#c8a45a] transition-all duration-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
