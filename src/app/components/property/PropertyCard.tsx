// components/property/PropertyCard.tsx
import Image from "next/image";
import Link from "next/link";
import { type Property } from "@/lib/types";
import { formatPrice } from "../..//lib/utils";
import { Tag, StatusBadge } from "../../components/ui/Tag";
import { Icons } from "../../components/ui/Icons";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group block bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm overflow-hidden no-underline hover:border-[rgba(200,164,90,0.25)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-400"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="prop-img object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.72)] via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Tag tag={property.tag} />
        </div>
        <div className="absolute top-3 right-3">
          <StatusBadge status={property.status} />
        </div>

        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <span className="font-serif-display text-2xl font-normal text-[#e8d5a0]">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <h3 className="font-serif-display text-lg text-[#f0ebe0] mb-1.5">{property.title}</h3>

        <div className="flex items-center gap-1.5 text-xs text-[#6a6a78] mb-4">
          <Icons.Pin />
          <span className="truncate">{property.address}</span>
        </div>

        <div className="flex gap-4 text-xs text-[#7a7a88]">
          <span className="flex items-center gap-1.5">
            <Icons.Bed /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Icons.Bath /> {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Icons.Area /> {property.sqft.toLocaleString()} ft²
          </span>
        </div>
      </div>
    </Link>
  );
}
