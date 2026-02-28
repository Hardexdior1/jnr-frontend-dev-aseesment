"use client";
// components/admin/AdminSidebar.tsx

import Link from "next/link";
import { cn } from "../../lib/utils";
import { Icons } from "../../components/ui/Icons";

export type AdminTab = "overview" | "properties" | "add";

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
}

const NAV_ITEMS: { id: AdminTab; label: string; icon: React.ReactNode }[] = [
  { id: "overview",    label: "Overview",    icon: <Icons.Home /> },
  { id: "properties",  label: "Properties",  icon: <Icons.Chart /> },
  { id: "add",         label: "Add New",     icon: <Icons.Plus /> },
];

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  return (
    <aside className="bg-[#0d0d12] border-r border-[rgba(255,255,255,0.06)] flex flex-col shrink-0 w-14 md:w-52 h-screen overflow-y-auto">
      {/* Brand */}
      <div className="px-3 md:px-5 py-5 mb-2">
        <div className="font-serif-display text-[#c8a45a] text-base md:text-lg">
          <span className="hidden md:inline">Lumière</span>
          <span className="md:hidden">L</span>
        </div>
        <div className="text-[10px] text-[#6a6a78] mt-0.5 hidden md:block">Admin Panel</div>
      </div>

      <div className="h-px bg-[rgba(255,255,255,0.06)] mb-2 mx-4" />

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 px-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "admin-nav-item flex items-center gap-3 px-3 py-3 text-sm text-left w-full rounded-sm",
              activeTab === item.id ? "active text-[#c8a45a]" : "text-[#6a6a78]"
            )}
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Exit */}
      <div className="mt-auto p-3">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm border border-[rgba(200,164,90,0.3)] text-[#c8a45a] text-xs hover:bg-[rgba(200,164,90,0.08)] transition-all duration-200"
        >
          <Icons.ArrowLeft />
          <span className="hidden md:inline">Exit Admin</span>
        </Link>
      </div>
    </aside>
  );
}
