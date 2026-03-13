"use client";

import { useState } from "react";
import Link from "next/link";
import PropertyCard from "@/components/shared/PropertyCard";
import { Search, SlidersHorizontal, MapPin, Home, DollarSign, Bed, TrendingUp } from "lucide-react";

const properties = [
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
    title: "Luxury Estate with Pool",
    location: "Summerlin, NV",
    price: 1325000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 6200,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800",
    featured: false,
    status: "For Sale" as const,
  },
];

export default function ExploreHomesPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/70" />
        
        <div className="container-luxury relative z-10 text-white text-center">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
            <span className="text-luxury-gold-light text-sm font-semibold">
              LUXURY PROPERTIES
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Explore Las Vegas Homes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover your perfect property in Las Vegas&apos;s most prestigious neighborhoods
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-luxury-gray-light">
        <div className="container-luxury">
          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by location, property type, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-6 py-3 bg-luxury-black text-white rounded-xl hover:bg-luxury-gray-dark transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Filters
              </button>
              <button className="px-8 py-3 luxury-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all">
                Search
              </button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                      <option>$1M - $2M</option>
                      <option>$2M - $3M</option>
                      <option>$3M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Bed className="inline w-4 h-4 mr-1" />
                      Bedrooms
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                      <option>5+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Home className="inline w-4 h-4 mr-1" />
                      Property Type
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                      <option>All Types</option>
                      <option>Single Family</option>
                      <option>Condo</option>
                      <option>Townhouse</option>
                      <option>Penthouse</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-luxury-black mb-1">
                {properties.length} Properties Available
              </h2>
              <p className="text-gray-600">
                Showing luxury homes in Las Vegas and surrounding areas
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold text-sm">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Square Feet</option>
              </select>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {properties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-luxury-black to-luxury-gray-dark text-white rounded-2xl p-12 text-center">
            <TrendingUp className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4 font-serif">
              Looking for Something Specific?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let me help you find your perfect Las Vegas property. I have access to 
              off-market listings and exclusive opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 luxury-gradient text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Contact Pay
              <Search className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
