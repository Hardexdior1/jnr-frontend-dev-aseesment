// components/layout/FloatingWhatsApp.tsx
import { Icons } from "../../components/ui/Icons";
import { WA_NUMBER } from "../../lib/data";

export function FloatingWhatsApp() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hello, I'd like to inquire about your luxury properties."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white text-sm font-medium shadow-[0_8px_32px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_36px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <Icons.WhatsApp />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
