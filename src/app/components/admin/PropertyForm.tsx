"use client";
// components/admin/PropertyForm.tsx

import Image from "next/image";
import type { Property } from "../../lib/types";
import { AGENTS } from "../../lib/data";
import { Button } from "../../components/ui/Button";

type FormData = Omit<Property, "id" | "gallery" | "amenities" | "lat" | "lng"> & {
  id?: number;
  imagePreview?: string;
};

interface PropertyFormProps {
  data: FormData;
  onChange: (data: FormData) => void;
  onSave: () => void;
  onCancel: () => void;
  mode: "add" | "edit";
}

const inputCls =
  "w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-sm px-3 py-2.5 text-sm outline-none focus:border-[#c8a45a] focus:shadow-[0_0_0_3px_rgba(200,164,90,0.1)] transition-all";

const labelCls = "block text-[11px] font-medium tracking-[0.08em] uppercase text-[#6a6a78] mb-1.5";

export function PropertyForm({ data, onChange, onSave, onCancel, mode }: PropertyFormProps) {
  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    onChange({ ...data, [key]: e.target.value });

  return (
    <div className="flex flex-col gap-5">
      {/* Row: Title + Price */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Property Title</label>
          <input className={inputCls} value={data.title} onChange={set("title")} placeholder="e.g. The Glass Pavilion" />
        </div>
        <div>
          <label className={labelCls}>Price (USD)</label>
          <input type="number" className={inputCls} value={data.price} onChange={set("price")} placeholder="4850000" />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className={labelCls}>Address</label>
        <input className={inputCls} value={data.address} onChange={set("address")} placeholder="Full street address" />
      </div>

      {/* Row: Beds, Baths, Sqft, Year */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <label className={labelCls}>Beds</label>
          <input type="number" className={inputCls} value={data.beds} onChange={set("beds")} min={1} />
        </div>
        <div>
          <label className={labelCls}>Baths</label>
          <input type="number" className={inputCls} value={data.baths} onChange={set("baths")} min={1} />
        </div>
        <div>
          <label className={labelCls}>Sq Footage</label>
          <input type="number" className={inputCls} value={data.sqft} onChange={set("sqft")} />
        </div>
        <div>
          <label className={labelCls}>Year Built</label>
          <input type="number" className={inputCls} value={data.year} onChange={set("year")} />
        </div>
      </div>

      {/* Row: Type, Status, Tag, Agent */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <label className={labelCls}>Type</label>
          <select className={inputCls} value={data.type} onChange={set("type")}>
            {["Villa", "Penthouse", "Estate", "Waterfront", "Loft", "Condo"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>Status</label>
          <select className={inputCls} value={data.status} onChange={set("status")}>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Tag</label>
          <select className={inputCls} value={data.tag} onChange={set("tag")}>
            {["Featured", "New", "Exclusive", "Hot"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>Agent</label>
          <select className={inputCls} value={data.agent} onChange={set("agent")}>
            {AGENTS.map((a) => (
              <option key={a.name}>{a.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Image URL */}
      <div>
        <label className={labelCls}>Main Image URL</label>
        <input
          className={inputCls}
          value={data.image}
          onChange={set("image")}
          placeholder="https://images.unsplash.com/..."
        />
        {data.image && (
          <div className="relative h-28 mt-2 rounded-sm overflow-hidden border border-[rgba(255,255,255,0.08)]">
            <Image src={data.image} alt="Preview" fill className="object-cover opacity-70" sizes="600px" />
          </div>
        )}
      </div>

      {/* Description */}
      <div>
        <label className={labelCls}>Description</label>
        <textarea
          className={`${inputCls} resize-none`}
          rows={4}
          value={data.description}
          onChange={set("description")}
          placeholder="Describe the property…"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <Button variant="gold" fullWidth onClick={onSave}>
          {mode === "add" ? "Create Listing" : "Save Changes"}
        </Button>
        <Button variant="outline" fullWidth onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
