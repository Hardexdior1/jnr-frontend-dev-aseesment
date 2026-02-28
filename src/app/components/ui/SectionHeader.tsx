// components/ui/SectionHeader.tsx
import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <span className="section-label">{label}</span>
      <div className={cn("divider-gold", align === "left" && "mx-0")} />
      <h2 className="font-serif-display text-[clamp(26px,4vw,46px)] font-normal leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-[#6a6a78] max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
