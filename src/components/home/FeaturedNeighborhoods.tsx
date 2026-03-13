"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const neighborhoods = [
  {
    id: 1,
    name: "Summerlin",
    averagePrice: 1200000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
    description: "Master-planned luxury",
  },
  {
    id: 2,
    name: "Henderson",
    averagePrice: 950000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    description: "Family-friendly estates",
  },
  {
    id: 3,
    name: "The Lakes",
    averagePrice: 1500000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    description: "Waterfront living",
  },
  {
    id: 4,
    name: "Seven Hills",
    averagePrice: 1800000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
    description: "Guard-gated community",
  },
  {
    id: 5,
    name: "Anthem",
    averagePrice: 850000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
    description: "Resort-style living",
  },
  {
    id: 6,
    name: "Santa Monica",
    averagePrice: 7500000,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
    description: "Beach city living",
  },
];

export default function FeaturedNeighborhoods() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 mb-6 px-5 py-2.5 bg-luxury-gold/10 rounded-full">
            <MapPin className="w-4 h-4 text-luxury-gold" />
            <span className="text-luxury-gold text-sm font-bold tracking-wide uppercase">
              Prime Locations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-black mb-6 leading-tight">
            Featured Neighborhoods
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Discover the most exclusive neighborhoods and luxury communities
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <Link
              key={neighborhood.id}
              href={`/neighborhoods/${neighborhood.name.toLowerCase().replace(" ", "-")}`}
              className="group relative h-[280px] md:h-[350px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${neighborhood.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

              {/* Content - Positioned at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 z-10 transform transition-transform duration-500">
                {/* Description Badge */}
                <div className="mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-block px-4 py-2 bg-luxury-gold/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                    {neighborhood.description}
                  </span>
                </div>

                {/* Neighborhood Name */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 font-serif group-hover:text-luxury-gold transition-colors duration-300">
                  {neighborhood.name}
                </h3>

                {/* Average Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-300 mb-1 uppercase tracking-wide">
                      Avg. Home Price
                    </div>
                    <div className="text-2xl font-bold text-luxury-gold">
                      {formatPrice(neighborhood.averagePrice)}
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="flex items-center space-x-2 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="text-lg">Explore Homes</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Top Corner Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16 animate-fade-in">
          <Link
            href="/neighborhoods"
            className="inline-flex items-center space-x-3 px-10 py-5 luxury-gradient text-white text-lg font-bold rounded-full hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            <span>View All Neighborhoods</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

