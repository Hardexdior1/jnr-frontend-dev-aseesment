"use client";
// components/property/LeadForm.tsx

import { useState } from "react";
import { Button } from "../../components/ui/Button";

interface LeadFormProps {
  propertyTitle: string;
}

export function LeadForm({ propertyTitle }: LeadFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: `I'm interested in ${propertyTitle}. Please contact me with more details.`,
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="text-4xl mb-3">✓</div>
        <div className="font-serif-display text-xl text-[#c8a45a]">Message Sent</div>
        <p className="text-sm text-[#6a6a78] mt-1">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm outline-none focus:border-[#c8a45a] focus:shadow-[0_0_0_3px_rgba(200,164,90,0.1)] transition-all";

  return (
    <>
      <h4 className="font-serif-display text-xl mb-1">Request Information</h4>
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8a45a] to-transparent my-3" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className={inputCls}
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          className={inputCls}
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          className={`${inputCls} resize-none`}
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <Button type="submit" variant="gold" fullWidth className="mt-1">
          Send Enquiry
        </Button>
      </form>
    </>
  );
}
