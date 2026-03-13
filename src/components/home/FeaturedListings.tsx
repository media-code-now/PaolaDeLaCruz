"use client";

import Link from "next/link";
import PropertyCard from "@/components/shared/PropertyCard";
import { ArrowRight, TrendingUp } from "lucide-react";

const featuredProperties = [
  {
    id: 1,
    title: "Modern Architectural Masterpiece",
    location: "Summerlin, NV",
    price: 1450000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
  },
  {
    id: 2,
    title: "Resort-Style Estate",
    location: "Seven Hills, NV",
    price: 2950000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
  },
  {
    id: 3,
    title: "Contemporary Luxury Residence",
    location: "Henderson, NV",
    price: 1275000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
  },
  {
    id: 4,
    title: "Spanish Colonial Revival",
    location: "The Lakes, NV",
    price: 1150000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
    featured: true,
    status: "Sold" as const,
  },
  {
    id: 5,
    title: "Modern Desert Sanctuary",
    location: "Red Rock, NV",
    price: 3600000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
  },
  {
    id: 6,
    title: "Luxury Penthouse Suite",
    location: "Downtown Las Vegas, NV",
    price: 850000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
  },
  {
    id: 7,
    title: "Mediterranean Villa",
    location: "Anthem, NV",
    price: 1850000,
    bedrooms: 6,
    bathrooms: 8,
    sqft: 9200,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
  },
  {
    id: 8,
    title: "Mountain View Estate",
    location: "The Ridges, NV",
    price: 4200000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7800,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    featured: true,
    status: "Sold" as const,
  },
];

export default function FeaturedListings() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 px-5 py-2.5 bg-luxury-gold/10 rounded-full">
            <TrendingUp className="w-4 h-4 text-luxury-gold" />
            <span className="text-luxury-gold text-sm font-bold tracking-wide uppercase">
              Featured Properties
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-black mb-6 leading-tight">
            Exclusive Luxury Listings
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover our hand-picked selection of exceptional properties that
            define luxury living at its finest.
          </p>
        </div>

        {/* Property Grid - 3-4 per row, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {featuredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/listings"
            className="inline-flex items-center space-x-2 px-10 py-5 luxury-gradient text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl group"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
