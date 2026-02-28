// components/admin/PropertiesTab.tsx
import Image from "next/image";
import type { Property } from "../../lib/types";
import { formatPrice } from "../../lib/utils";
import { Tag, StatusBadge } from "../../components/ui/Tag";
import { Button } from "../../components/ui/Button";
import { Icons } from "../../components/ui/Icons";

interface PropertiesTabProps {
  properties: Property[];
  onEdit: (property: Property) => void;
  onDelete: (id: number) => void;
  onAddNew: () => void;
}

export function PropertiesTab({ properties, onEdit, onDelete, onAddNew }: PropertiesTabProps) {
  return (
    <div className="animate-fade-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif-display text-3xl">All Properties</h2>
        <Button variant="gold" size="sm" onClick={onAddNew}>
          <Icons.Plus /> Add Property
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {properties.map((p) => (
          <div
            key={p.id}
            className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm flex items-center gap-4 p-3 md:p-4 hover:border-[rgba(200,164,90,0.18)] transition-all duration-200"
          >
            {/* Thumbnail */}
            <div className="relative w-16 h-12 md:w-20 md:h-14 rounded-sm overflow-hidden shrink-0">
              <Image src={p.image} alt={p.title} fill className="object-cover" sizes="80px" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">{p.title}</div>
              <div className="text-xs text-[#6a6a78] truncate mt-0.5">{p.address}</div>
            </div>

            {/* Badges (hidden on small screens) */}
            <div className="hidden sm:flex items-center gap-2">
              <Tag tag={p.tag} />
              <StatusBadge status={p.status} />
            </div>

            {/* Price */}
            <div className="font-serif-display text-base text-[#c8a45a] shrink-0 hidden md:block">
              {formatPrice(p.price)}
            </div>

            {/* Actions */}
            <div className="flex gap-2 shrink-0">
              <Button variant="outline" size="sm" onClick={() => onEdit(p)}>
                <Icons.Edit />
                <span className="hidden md:inline">Edit</span>
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  if (window.confirm(`Delete "${p.title}"?`)) onDelete(p.id);
                }}
              >
                <Icons.Trash />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
