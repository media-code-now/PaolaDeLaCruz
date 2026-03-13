import PropertyCard from "@/components/shared/PropertyCard";
import { TrendingUp } from "lucide-react";

interface SimilarListingsProps {
  currentPropertyId: string;
}

// Mock similar properties data
const similarProperties = [
  {
    id: 2,
    title: "Resort-Style Estate",
    location: "Seven Hills, NV",
    price: 3200000,
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
    price: 1750000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
  },
  {
    id: 5,
    title: "Modern Desert Sanctuary",
    location: "Red Rock, NV",
    price: 2800000,
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
    price: 1400000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
  },
];

export default function SimilarListings({
  currentPropertyId,
}: SimilarListingsProps) {
  return (
    <div className="animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-8">
        <TrendingUp className="w-8 h-8 text-luxury-gold" />
        <h2 className="text-4xl font-bold text-luxury-black font-serif">
          Similar Properties
        </h2>
      </div>

      <p className="text-gray-600 mb-12 text-lg">
        Explore more luxury properties in this area
      </p>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {similarProperties.map((property, index) => (
          <PropertyCard key={property.id} property={property} index={index} />
        ))}
      </div>
    </div>
  );
}
