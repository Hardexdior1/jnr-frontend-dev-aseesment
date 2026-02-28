"use client";
// app/admin/page.tsx (moved from src/app/app/admin/page.tsx)

import { useState } from "react";
import { AdminSidebar, type AdminTab } from "../components/admin/AdminSidebar";
import { OverviewTab } from "../components/admin/OverviewTab";
import { PropertiesTab } from "../components/admin/PropertiesTab";
import { PropertyForm } from "../components/admin/PropertyForm";
import { PROPERTIES } from "../lib/data";
import type { Property } from "../lib/types";

// Blank form template for new properties
const BLANK_FORM: Omit<Property, "id" | "gallery" | "amenities" | "lat" | "lng"> = {
  title: "", address: "", price: 0, beds: 3, baths: 2, sqft: 2000,
  type: "Villa", status: "For Sale", tag: "New",
  description: "", image: "", agent: "Sophia Reeves", year: 2024,
};

export default function AdminPage() {
  const [properties, setProperties] = useState<Property[]>(PROPERTIES);
  const [tab, setTab] = useState<AdminTab>("overview");

  // Edit state
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);

  // Add form state
  const [newForm, setNewForm] = useState({ ...BLANK_FORM });

  // ── Handlers ─────────────────────────────────────────────────────
  const handleDelete = (id: number) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (property: Property) => {
    setEditingProperty({ ...property });
    setTab("properties");
  };

  const handleSaveEdit = () => {
    if (!editingProperty) return;
    setProperties((prev) =>
      prev.map((p) => (p.id === editingProperty.id ? editingProperty : p))
    );
    setEditingProperty(null);
  };

  const handleAddNew = () => {
    setNewForm({ ...BLANK_FORM });
    setTab("add");
  };

  const handleSaveNew = () => {
    const id = Date.now();
    const newProperty: Property = {
      ...newForm,
      id,
      price: Number(newForm.price),
      beds: Number(newForm.beds),
      baths: Number(newForm.baths),
      sqft: Number(newForm.sqft),
      year: Number(newForm.year),
      gallery: newForm.image ? [newForm.image] : [],
      amenities: [],
      lat: 0,
      lng: 0,
    };
    setProperties((prev) => [newProperty, ...prev]);
    setTab("overview");
    setNewForm({ ...BLANK_FORM });
  };

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div className="flex h-screen overflow-hidden bg-[#09090c]">
      <AdminSidebar
        activeTab={tab}
        onTabChange={(t) => {
          setTab(t);
          if (t !== "properties") setEditingProperty(null);
        }}
      />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-5 md:p-8">
        {/* Overview */}
        {tab === "overview" && (
          <OverviewTab
            properties={properties}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAddNew={handleAddNew}
          />
        )}

        {/* Properties list / edit */}
        {tab === "properties" && (
          editingProperty ? (
            <div className="animate-fade-up max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <button
                  className="text-sm text-[#6a6a78] hover:text-[#e8e2d9] transition-colors flex items-center gap-1.5"
                  onClick={() => setEditingProperty(null)}
                >
                  ← Back
                </button>
                <h2 className="font-serif-display text-2xl">Edit: {editingProperty.title}</h2>
              </div>
              <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-6">
                <PropertyForm
                  data={editingProperty}
                  onChange={(d) => setEditingProperty(d as Property)}
                  onSave={handleSaveEdit}
                  onCancel={() => setEditingProperty(null)}
                  mode="edit"
                />
              </div>
            </div>
          ) : (
            <PropertiesTab
              properties={properties}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAddNew={handleAddNew}
            />
          )
        )}

        {/* Add new */}
        {tab === "add" && (
          <div className="animate-fade-up max-w-2xl">
            <h2 className="font-serif-display text-3xl mb-6">Add New Property</h2>
            <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-6">
              <PropertyForm
                data={newForm}
                onChange={(d) => setNewForm(d)}
                onSave={handleSaveNew}
                onCancel={() => setTab("overview")}
                mode="add"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
