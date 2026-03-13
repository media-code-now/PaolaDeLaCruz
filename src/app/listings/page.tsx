"use client";

import { useState } from "react";
import PropertyCard from "@/components/shared/PropertyCard";
import { Search, SlidersHorizontal, MapPin, Home, DollarSign } from "lucide-react";

const allProperties = [
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
  },
  {
    id: 9,
    title: "Contemporary Smart Home",
    location: "Henderson, NV",
    price: 975000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800",
  },
  {
    id: 10,
    title: "Tuscan-Inspired Estate",
    location: "Summerlin, NV",
    price: 1625000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7500,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800",
  },
  {
    id: 11,
    title: "Golf Course Villa",
    location: "Southern Highlands, NV",
    price: 2100000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5800,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800",
  },
  {
    id: 12,
    title: "Modern Farmhouse",
    location: "Summerlin, NV",
    price: 1185000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5400,
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=800",
  },
  {
    id: 13,
    title: "Elegant Traditional Home",
    location: "The Lakes, NV",
    price: 925000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4800,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800",
  },
  {
    id: 14,
    title: "Ultra-Modern Luxury Villa",
    location: "MacDonald Highlands, NV",
    price: 3850000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8200,
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=800",
    featured: true,
  },
  {
    id: 15,
    title: "Desert Contemporary",
    location: "Red Rock, NV",
    price: 2750000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6200,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
  },
  {
    id: 16,
    title: "Luxury Condo with Strip Views",
    location: "Downtown Las Vegas, NV",
    price: 725000,
    bedrooms: 2,
    bathrooms: 3,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800",
  },
  {
    id: 17,
    title: "Hillside Estate with Panoramic Views",
    location: "Anthem, NV",
    price: 1450000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6400,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    id: 18,
    title: "Ranch-Style Luxury Home",
    location: "Henderson, NV",
    price: 1095000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5600,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
  },
];

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-luxury-gray-light">
      {/* Hero Section */}
      <section className="bg-luxury-black text-white py-20 mt-16 lg:mt-20">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 glass-effect rounded-full">
              <span className="text-luxury-gold-light text-sm font-semibold">
                LUXURY PROPERTIES
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Exclusive Listings
            </h1>
            <p className="text-xl text-gray-300">
              Discover 18 exceptional luxury properties across Las Vegas&apos;s most prestigious neighborhoods
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-md sticky top-20 z-40">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, property type, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-medium">Filters</span>
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-6 p-6 bg-luxury-gray-light rounded-lg grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Location
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                  <option>All Locations</option>
                  <option>Summerlin</option>
                  <option>Henderson</option>
                  <option>Seven Hills</option>
                  <option>The Lakes</option>
                  <option>Anthem</option>
                  <option>Red Rock</option>
                  <option>The Ridges</option>
                  <option>MacDonald Highlands</option>
                  <option>Southern Highlands</option>
                  <option>Downtown Las Vegas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="inline w-4 h-4 mr-1" />
                  Price Range
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                  <option>Any Price</option>
                  <option>Under $1M</option>
                  <option>$1M - $1.5M</option>
                  <option>$1.5M - $2M</option>
                  <option>$2M - $3M</option>
                  <option>$3M - $4M</option>
                  <option>$4M+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Home className="inline w-4 h-4 mr-1" />
                  Bedrooms
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                  <option>Any</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                  <option>5+</option>
                  <option>6+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                  <option>All Types</option>
                  <option>Single Family</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Estate</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-luxury-black">
              {allProperties.length} Properties Available
            </h2>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold">
              <option>Featured First</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
