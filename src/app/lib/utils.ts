// lib/utils.ts

import { type ClassValue, clsx } from "clsx";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format number as USD currency */
export function formatPrice(amount: number): string {
 return new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
}).format(amount)}

/** WhatsApp deep-link with pre-filled message */
export function waLink(propertyTitle: string): string {
  const WA_NUMBER = "4556777";
  const message = `I'd like to get more information about ${propertyTitle}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp link for agent */
export function waAgentLink(agentName: string): string {
  const WA_NUMBER = "4556777";
  const message = `Hello ${agentName}, I'd like to discuss a property with you.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Filter properties by FilterState */
export function filterProperties(
  properties: import("./types").Property[],
  filters: import("./types").FilterState
) {
  return properties.filter((p) => {
    const q = filters.query.toLowerCase();
    const matchQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.address.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q);

    const matchType = filters.type === "All" || p.type === filters.type;
    const matchStatus = filters.status === "All" || p.status === filters.status;

    const matchPrice =
      filters.priceRange === "Any Price" ||
      (filters.priceRange === "Under $3M" && p.price < 3_000_000) ||
      (filters.priceRange === "$3M–$6M" && p.price >= 3_000_000 && p.price < 6_000_000) ||
      (filters.priceRange === "$6M–$10M" && p.price >= 6_000_000 && p.price < 10_000_000) ||
      (filters.priceRange === "$10M+" && p.price >= 10_000_000);

    return matchQ && matchType && matchStatus && matchPrice;
  });
}
