// lib/types.ts

export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: PropertyType;
  status: PropertyStatus;
  tag: PropertyTag;
  description: string;
  image: string;
  gallery: string[];
  lat: number;
  lng: number;
  agent: string;
  year: number;
  amenities: string[];
}

export type PropertyType = "Villa" | "Penthouse" | "Estate" | "Waterfront" | "Loft" | "Condo";
export type PropertyStatus = "For Sale" | "For Rent";
export type PropertyTag = "Featured" | "New" | "Exclusive" | "Hot";

export interface Agent {
  name: string;
  title: string;
  image: string;
  deals: number;
  volume: string;
  bio: string;
  phone: string;
  email: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export interface FilterState {
  query: string;
  type: string;
  status: string;
  priceRange: string;
}
