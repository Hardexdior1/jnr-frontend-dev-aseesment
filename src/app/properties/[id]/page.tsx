// app/properties/[id]/page.tsx (moved from src/app/app/properties/[id]/page.tsx)
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROPERTIES, AGENTS } from "../../lib/data";
import { formatPrice, waLink } from "../../lib/utils";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { FloatingWhatsApp } from "../../components/layout/FloatingWhatsApp";
import { PropertyGallery } from "../../components/property/PropertyGallery";
import { LeadForm } from "../../components/property/LeadForm";
import { Tag, StatusBadge } from "../../components/ui/Tag";
import { Button } from "../../components/ui/Button";
import { Icons } from "../../components/ui/Icons";

interface PageProps {
  params: Promise<{ id: string }>;

}

// Generate static params for all properties
export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  const property = PROPERTIES.find((p) => p.id === Number(id));

  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.title} — Lumière Estates`,
    description: property.description.slice(0, 160),
  };
}

export default async function  PropertyDetailPage({ params }: PageProps) {
        const { id } = await params;

  const property = PROPERTIES.find((p) => p.id === Number(id));
  if (!property) return <div className="min-h-screen bg-[#0f0f14] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">

        {/* Big 404 */}
        <h1 className="font-serif-display text-[clamp(80px,12vw,160px)] leading-none text-[#c8a45a]">
          404
        </h1>

        {/* Divider Line */}
        <div className="w-24 h-[2px] bg-[#c8a45a] mx-auto my-6 opacity-60" />

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif-display text-white mb-4">
          Property Not Found
        </h2>

        {/* Description */}
        <p className="text-[#e8d5a0] text-sm md:text-base leading-relaxed mb-8">
          The property you’re looking for may have been sold, removed,
          or the listing link is incorrect. Please explore our available
          listings below.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/properties"
            className="px-8 py-3 bg-[#c8a45a] text-[#0f0f14] font-medium text-sm tracking-wide rounded-sm hover:bg-[#e8d5a0] transition-all duration-300"
          >
            Browse Properties
          </Link>

          <Link
            href="/#contact"
            className="px-8 py-3 border border-[#c8a45a] text-[#c8a45a] font-medium text-sm tracking-wide rounded-sm hover:bg-[#c8a45a] hover:text-[#0f0f14] transition-all duration-300"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </div>

    //  notFound();

  const agent = AGENTS.find((a) => a.name === property.agent) ?? AGENTS[0];

  return (
    <>
      <Navbar />

      <main className="pt-[68px] min-h-screen">
        {/* Back breadcrumb */}
        <div className="border-b border-[rgba(255,255,255,0.06)] px-5 md:px-[5vw] py-3 flex items-center gap-2 text-sm text-[#6a6a78]">
          <Link href="/properties" className="flex items-center gap-1.5 hover:text-[#c8a45a] transition-colors">
            <Icons.ArrowLeft /> Properties
          </Link>
          <span>/</span>
          <span className="truncate text-[#e8e2d9]">{property.title}</span>
        </div>

        <div className="px-5 md:px-[5vw] py-8 md:py-12">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 xl:gap-12 items-start">

            {/* ── LEFT COLUMN ── */}
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Tag tag={property.tag} />
                <span className="section-label text-[10px]">{property.type}</span>
                <StatusBadge status={property.status} className="ml-auto" />
              </div>

              <h1 className="font-serif-display text-[clamp(26px,4vw,50px)] font-normal leading-tight mb-2">
                {property.title}
              </h1>

              <div className="flex items-center gap-1.5 text-sm text-[#6a6a78] mb-8">
                <Icons.Pin />
                <span>{property.address}</span>
              </div>

              {/* Gallery */}
              <div className="mb-8">
                <PropertyGallery images={property.gallery} title={property.title} />
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { label: "Bedrooms",  value: property.beds },
                  { label: "Bathrooms", value: property.baths },
                  { label: "Area",      value: `${property.sqft.toLocaleString()} ft²` },
                  { label: "Built",     value: property.year },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center py-4 px-3 rounded-sm bg-gradient-to-br from-[rgba(200,164,90,0.08)] to-[rgba(200,164,90,0.03)] border border-[rgba(200,164,90,0.14)]"
                  >
                    <div className="font-serif-display text-[clamp(22px,3vw,32px)] font-normal text-[#c8a45a]">
                      {s.value}
                    </div>
                    <div className="text-[10px] tracking-widest uppercase text-[#6a6a78] mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-serif-display text-2xl mb-3">About this Property</h2>
                <p className="text-sm text-[#8a8a98] leading-[1.9]">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="font-serif-display text-2xl mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="px-3 py-1.5 text-xs font-medium rounded-sm bg-[rgba(200,164,90,0.08)] border border-[rgba(200,164,90,0.2)] text-[#e8d5a0]"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="mb-8">
                <h2 className="font-serif-display text-2xl mb-4">Location</h2>
                <div className="rounded-sm overflow-hidden border border-[rgba(200,164,90,0.18)] h-[220px] sm:h-[280px]">
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.lng - 0.025},${property.lat - 0.015},${property.lng + 0.025},${property.lat + 0.015}&layer=mapnik&marker=${property.lat},${property.lng}`}
                    width="100%"
                    height="100%"
                    title={`Map of ${property.title}`}
                    loading="lazy"
                    className="map-iframe"
                  />
                </div>
              </div>
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-4">

              {/* Price + CTAs */}
              <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-5 md:p-6">
                <div className="font-serif-display text-[clamp(28px,3vw,38px)] font-normal text-[#c8a45a]">
                  {formatPrice(property.price)}
                </div>
                <div className="text-xs text-[#6a6a78] mb-5">
                  {property.status} · {property.type}
                </div>

                {/* WhatsApp */}
                <Button
                  variant="whatsapp"
                  fullWidth
                  href={waLink(property.title)}
                  external
                  className="py-3 rounded-sm mb-2.5"
                >
                  <Icons.WhatsApp />
                  WhatsApp Enquiry
                </Button>

                {/* Call */}
                <Button
                  variant="outline"
                  fullWidth
                  href="tel:+4556777"
                  className="py-3 rounded-sm"
                >
                  <Icons.Phone />
                  Call Agent
                </Button>

                <div className="h-px bg-[rgba(255,255,255,0.07)] my-5" />

                {/* Agent mini-card */}
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="object-cover object-top"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{agent.name}</div>
                    <div className="text-xs text-[#6a6a78]">{agent.title}</div>
                  </div>
                </div>
              </div>

              {/* Lead form */}
              <div className="bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-sm p-5 md:p-6">
                <LeadForm propertyTitle={property.title} />
              </div>

              {/* Share */}
              {/* ...existing continued content omitted for brevity... */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
