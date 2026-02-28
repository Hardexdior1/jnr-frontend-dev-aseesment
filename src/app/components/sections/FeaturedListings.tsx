// components/sections/FeaturedListings.tsx
import { PROPERTIES } from "../../lib/data";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Button } from "../../components/ui/Button";
import { PropertyCard } from "../../components/property/PropertyCard";
import { Icons } from "../../components/ui/Icons";

export function FeaturedListings() {
  const featured = PROPERTIES.filter(
    (p) => p.tag === "Featured" || p.tag === "Exclusive"
  ).slice(0, 6);

  return (
    <section className="py-20 px-5 md:px-[5vw]">
      <SectionHeader
        label="Our Portfolio"
        title="Featured Properties"
        className="mb-10"
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" size="lg" href="/properties">
          View All Properties <Icons.ArrowRight />
        </Button>
      </div>
    </section>
  );
}
