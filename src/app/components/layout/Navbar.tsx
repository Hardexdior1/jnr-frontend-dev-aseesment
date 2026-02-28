"use client";
// components/layout/Navbar.tsx

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../../components/ui/Icons";
import { Button } from "../../components/ui/Button";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
  { label: "Agents",     href: "/#agents" },
  { label: "Blog",       href: "/#blog" },
  { label: "Contact",    href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center px-5 md:px-8 transition-all duration-300",
          scrolled
            ? "bg-[rgba(9,9,12,0.92)] backdrop-blur-xl border-b border-[rgba(200,164,90,0.12)]"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-serif-display text-xl md:text-2xl text-[#c8a45a] tracking-wide mr-auto shrink-0"
        >
          Lumière Estates
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-medium tracking-wide transition-colors duration-200",
                pathname === link.href
                  ? "text-[#c8a45a]"
                  : "text-grey-500 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 ml-8">
          <Button variant="outline" size="sm" href="/admin">
            <Icons.Key /> Admin
          </Button>
          <Button variant="gold" size="sm" href="/#contact">
            Consult
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#e8e2d9] p-1 ml-4"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(9,9,12,0.97)] flex flex-col items-center justify-center gap-8 pt-[68px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif-display text-3xl text-[#c8a45a] tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 items-center mt-4">
            <Button variant="outline" href="/admin" size="md">
              <Icons.Key /> Admin Dashboard
            </Button>
            <Button variant="gold" href="/#contact" size="md">
              Private Consultation
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
