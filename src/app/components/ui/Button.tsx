// components/ui/Button.tsx
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost" | "danger" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
  external?: boolean;
}

const variants = {
  gold: `
    bg-gradient-to-r from-[#c8a45a] via-[#e8d5a0] to-[#c8a45a]
    bg-[length:200%_100%] text-[#09090c] font-semibold
    hover:bg-right hover:shadow-[0_6px_24px_rgba(200,164,90,0.4)]
    hover:-translate-y-px transition-all duration-300
  `,
  outline: `
    border border-[rgba(200,164,90,0.45)] text-[#c8a45a] bg-transparent
    hover:bg-[rgba(200,164,90,0.08)] hover:border-[#c8a45a]
    transition-all duration-200
  `,
  ghost: `
    bg-transparent text-[#6a6a78] hover:text-[#e8e2d9]
    transition-colors duration-200
  `,
  danger: `
    border border-[rgba(251,113,133,0.3)] text-[#fb7185] bg-transparent
    hover:bg-[rgba(251,113,133,0.08)] transition-all duration-200
  `,
  whatsapp: `
    bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white
    hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)]
    hover:-translate-y-0.5 transition-all duration-300
  `,
};

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-sm",
  md: "px-5 py-2.5 text-sm rounded-sm",
  lg: "px-8 py-3.5 text-sm rounded-sm",
};

export function Button({
  variant = "gold",
  size = "md",
  href,
  children,
  fullWidth,
  external,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-[Jost] tracking-wide cursor-pointer",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
