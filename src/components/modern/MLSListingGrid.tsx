"use client";

import { useState } from "react";
import PropertyCard from "@/components/shared/PropertyCard";
import { Grid3x3, LayoutGrid, Map } from "lucide-react";

// Mock MLS data
const mlsListings = [
  {
    id: 1,
    title: "Modern Architectural Masterpiece",
    location: "Summerlin, NV",
    price: 2500000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    featured: true,
    status: "For Sale" as const,
    mlsNumber: "MLS# 26-789456",
    daysOnMarket: 12,
  },
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
    mlsNumber: "MLS# 26-789457",
    daysOnMarket: 5,
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
    mlsNumber: "MLS# 26-789458",
    daysOnMarket: 22,
  },
  {
    id: 4,
    title: "Spanish Colonial Revival",
    location: "The Lakes, NV",
    price: 1900000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
    featured: true,
    status: "Sold" as const,
    mlsNumber: "MLS# 26-789459",
    daysOnMarket: 45,
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
    mlsNumber: "MLS# 26-789460",
    daysOnMarket: 8,
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
    mlsNumber: "MLS# 26-789461",
    daysOnMarket: 3,
  },
];

type ViewMode = "grid-3" | "grid-4" | "map";

export default function MLSListingGrid() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid-3");
  const [sortBy, setSortBy] = useState("newest");

  const gridCols = {
    "grid-3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "grid-4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    map: "grid-cols-1",
  };

  return (
    <div className="space-y-6">
      {/* MLS Header with View Controls */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Results Count */}
          <div>
            <h2 className="text-2xl font-bold text-luxury-black mb-1">
              {mlsListings.length} Properties Found
            </h2>
            <p className="text-gray-600 text-sm">
              Summerlin, Henderson, Seven Hills and surrounding areas
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none bg-white pr-10"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="sqft">Square Feet</option>
              <option value="beds">Bedrooms</option>
            </select>

            {/* View Mode Buttons */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid-3")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid-3"
                    ? "bg-white shadow-md text-luxury-gold"
                    : "text-gray-600 hover:text-luxury-gold"
                }`}
                title="3 Column Grid"
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("grid-4")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid-4"
                    ? "bg-white shadow-md text-luxury-gold"
                    : "text-gray-600 hover:text-luxury-gold"
                }`}
                title="4 Column Grid"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "map"
                    ? "bg-white shadow-md text-luxury-gold"
                    : "text-gray-600 hover:text-luxury-gold"
                }`}
                title="Map View"
              >
                <Map className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MLS Listings Grid */}
      <div className={`grid ${gridCols[viewMode]} gap-6`}>
        {mlsListings.map((property, index) => (
          <div key={property.id} className="relative">
            <PropertyCard property={property} index={index} />
            
            {/* MLS Badge Overlay */}
            <div className="absolute top-20 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-md">
              {property.mlsNumber}
            </div>
            
            {/* Days on Market Badge */}
            {property.status === "For Sale" && (
              <div className="absolute top-20 right-4 z-10 bg-luxury-gold/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md">
                {property.daysOnMarket} days
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-luxury-gold hover:text-luxury-gold transition-all shadow-md hover:shadow-lg">
          Load More Properties
        </button>
      </div>
    </div>
  );
}
