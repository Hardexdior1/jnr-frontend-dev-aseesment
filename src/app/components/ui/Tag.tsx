// components/ui/Tag.tsx
import { cn } from "../../lib/utils";
import type { PropertyTag, PropertyStatus } from "../../lib/types";

const tagStyles: Record<PropertyTag, string> = {
  Featured:  "bg-[rgba(200,164,90,0.15)]  text-[#c8a45a]  border-[rgba(200,164,90,0.3)]",
  New:       "bg-[rgba(52,211,153,0.12)]  text-[#34d399]  border-[rgba(52,211,153,0.25)]",
  Exclusive: "bg-[rgba(167,139,250,0.12)] text-[#a78bfa]  border-[rgba(167,139,250,0.25)]",
  Hot:       "bg-[rgba(251,113,133,0.12)] text-[#fb7185]  border-[rgba(251,113,133,0.25)]",
};

interface TagProps {
  tag: PropertyTag;
  className?: string;
}

export function Tag({ tag, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border text-[10px] font-semibold tracking-[0.12em] uppercase px-2 py-0.5 rounded-sm",
        tagStyles[tag],
        className
      )}
    >
      {tag}
    </span>
  );
}

const statusStyles: Record<PropertyStatus, string> = {
  "For Sale": "bg-[rgba(52,211,153,0.12)] text-[#34d399] border-[rgba(52,211,153,0.25)]",
  "For Rent": "bg-[rgba(96,165,250,0.12)] text-[#60a5fa] border-[rgba(96,165,250,0.25)]",
};

interface StatusBadgeProps {
  status: PropertyStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
