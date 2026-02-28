// components/admin/OverviewTab.tsx
import Image from "next/image";
import type { Property } from "../../lib/types";
import { formatPrice } from "../../lib/utils";
import { StatCard } from "../../components/ui/StatCard";
import { Tag, StatusBadge } from "../../components/ui/Tag";
import { Button } from "../../components/ui/Button";
import { Icons } from "../../components/ui/Icons";

interface OverviewTabProps {
  properties: Property[];
  onEdit: (property: Property) => void;
  onDelete: (id: number) => void;
  onAddNew: () => void;
}

export function OverviewTab({ properties, onEdit, onDelete, onAddNew }: OverviewTabProps) {
  const totalValue = properties.reduce((sum, p) => sum + p.price, 0);
  const forSale = properties.filter((p) => p.status === "For Sale").length;
  const forRent = properties.filter((p) => p.status === "For Rent").length;

  return (
    <div className="animate-fade-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-serif-display text-3xl">Dashboard</h2>
          <p className="text-sm text-[#6a6a78] mt-0.5">Welcome back. Here&apos;s your portfolio at a glance.</p>
        </div>
        <Button variant="gold" size="sm" onClick={onAddNew}>
          <Icons.Plus /> Add Property
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Listings"  value={properties.length}           icon={<Icons.Home />}  sub="active" />
        <StatCard label="For Sale"        value={forSale}                      icon={<Icons.Eye />}   sub="listings" />
        <StatCard label="For Rent"        value={forRent}                      icon={<Icons.Key />}   sub="listings" />
        <StatCard
          label="Portfolio Value"
          value={`$${(totalValue / 1_000_000).toFixed(1)}M`}
          icon={<Icons.Chart />}
          sub="total listed"
        />
      </div>

      {/* Recent listings table */}
      <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
          <h3 className="font-serif-display text-xl">Recent Listings</h3>
          <span className="text-xs text-[#6a6a78]">{properties.length} total</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.06)]">
                {["Property", "Type", "Price", "Status", "Agent", "Actions"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.12em] uppercase text-[#6a6a78]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {properties.slice(0, 6).map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-8 rounded-sm overflow-hidden shrink-0">
                        <Image src={p.image} alt={p.title} fill className="object-cover" sizes="40px" />
                      </div>
                      <span className="font-medium truncate max-w-[140px]">{p.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-[#6a6a78]">{p.type}</td>
                  <td className="px-5 py-3 font-serif-display text-[#c8a45a]">{formatPrice(p.price)}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="px-5 py-3 text-[#6a6a78] text-xs">{p.agent.split(" ")[0]}</td>
                  <td className="px-5 py-3">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => onEdit(p)}>
                        <Icons.Edit />
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
