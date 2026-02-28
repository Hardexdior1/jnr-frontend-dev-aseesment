// components/ui/StatCard.tsx
import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  sub?: string;
  className?: string;
}

export function StatCard({ label, value, icon, sub, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-sm p-5",
        "bg-gradient-to-br from-[rgba(200,164,90,0.08)] to-[rgba(200,164,90,0.03)]",
        "border border-[rgba(200,164,90,0.14)]",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="section-label text-[10px]">{label}</span>
        {icon && <span className="text-[#c8a45a]">{icon}</span>}
      </div>
      <div className="font-serif-display text-4xl font-normal text-[#c8a45a]">{value}</div>
      {sub && <div className="text-xs text-[#6a6a78] mt-1">{sub}</div>}
    </div>
  );
}
