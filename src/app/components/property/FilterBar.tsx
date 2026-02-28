"use client";
// components/property/FilterBar.tsx

import { Icons } from "../../components/ui/Icons";
import { PROPERTY_TYPES, PRICE_RANGES } from "../../lib/data";
import type { FilterState } from "../../lib/types";

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  resultCount: number;
}

const inputBase =
  "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm text-sm text-[#e8e2d9] outline-none focus:border-[#c8a45a] transition-colors duration-200 px-3 py-2.5";

export function FilterBar({ filters, onChange, resultCount }: FilterBarProps) {
  const set = (key: keyof FilterState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    onChange({ ...filters, [key]: e.target.value });

  const hasFilters =
    filters.query || filters.type !== "All" || filters.status !== "All" || filters.priceRange !== "Any Price";

  return (
    <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-4 md:p-5">
      <div className="flex flex-wrap gap-3 items-center">
        {/* Text search */}
        <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 flex-1 min-w-[180px] focus-within:border-[#c8a45a] transition-colors duration-200">
          <span className="text-[#6a6a78] shrink-0">
            <Icons.Search />
          </span>
          <input
            value={filters.query}
            onChange={set("query")}
            placeholder="City, area, type…"
            className="bg-transparent border-none outline-none text-sm text-[#e8e2d9] w-full"
          />
        </div>

        {/* Type */}
        <select className={`${inputBase} min-w-[130px]`} value={filters.type} onChange={set("type")}>
          {PROPERTY_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        {/* Status */}
        <select className={`${inputBase} min-w-[120px]`} value={filters.status} onChange={set("status")}>
          <option value="All">All Status</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>

        {/* Price */}
        <select className={`${inputBase} min-w-[130px]`} value={filters.priceRange} onChange={set("priceRange")}>
          {PRICE_RANGES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>

        {/* Clear */}
        {hasFilters && (
          <button
            className="text-xs px-3 py-2.5 rounded-sm border border-[rgba(255,255,255,0.1)] text-[#6a6a78] hover:text-[#e8e2d9] hover:border-[rgba(255,255,255,0.2)] transition-all duration-200"
            onClick={() =>
              onChange({ query: "", type: "All", status: "All", priceRange: "Any Price" })
            }
          >
            Clear ×
          </button>
        )}
      </div>

      {/* Result count */}
      <div className="mt-3 text-xs text-[#6a6a78]">
        {resultCount} {resultCount === 1 ? "property" : "properties"} found
      </div>
    </div>
  );
}
