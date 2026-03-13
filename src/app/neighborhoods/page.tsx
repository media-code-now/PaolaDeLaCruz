import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp, Users, Home } from "lucide-react";

const neighborhoods = [
  {
    name: "Summerlin",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    description: "Premier master-planned community with resort-style amenities and mountain views",
    averagePrice: "$950K",
    properties: 145,
    highlights: ["Master-Planned", "Golf Courses", "Top Schools"],
  },
  {
    name: "Henderson",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=800",
    description: "Family-friendly communities with excellent schools and amenities",
    averagePrice: "$780K",
    properties: 178,
    highlights: ["Family Friendly", "Parks", "Great Schools"],
  },
  {
    name: "Seven Hills",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    description: "Guard-gated luxury community with stunning city and mountain views",
    averagePrice: "$1.6M",
    properties: 68,
    highlights: ["Guard-Gated", "City Views", "Luxury Estates"],
  },
  {
    name: "The Lakes",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
    description: "Waterfront living with tree-lined streets and resort-style amenities",
    averagePrice: "$895K",
    properties: 92,
    highlights: ["Waterfront", "Golf Course", "Gated"],
  },
  {
    name: "Anthem",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    description: "Elevated community offering panoramic valley views and modern homes",
    averagePrice: "$725K",
    properties: 124,
    highlights: ["Valley Views", "Parks", "Community Center"],
  },
  {
    name: "Red Rock Country Club",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
    description: "Exclusive guard-gated community with championship golf and mountain backdrop",
    averagePrice: "$2.8M",
    properties: 45,
    highlights: ["Golf Course", "Guard-Gated", "Mountain Views"],
  },
];

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/70" />
        
        <div className="container-luxury relative z-10 text-white text-center">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
            <span className="text-luxury-gold-light text-sm font-semibold">
              EXPLORE COMMUNITIES
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Neighborhood Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the finest luxury communities and find your perfect location
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="section-padding bg-luxury-gray-light">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <div
                key={neighborhood.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${neighborhood.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
                  
                  {/* Property Count Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 glass-effect rounded-lg">
                    <div className="text-white text-sm font-semibold">
                      {neighborhood.properties} Properties
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-serif font-bold text-luxury-black">
                      {neighborhood.name}
                    </h3>
                    <div className="text-luxury-gold font-semibold">
                      {neighborhood.averagePrice}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {neighborhood.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-luxury-gray-light text-luxury-black text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* View Properties Link */}
                  <Link
                    href="/listings"
                    className="flex items-center justify-between text-luxury-gold hover:text-luxury-gold-dark transition-colors group/link"
                  >
                    <span className="font-semibold">View Properties</span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-luxury-black text-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Market Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Current insights into luxury real estate markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                value: "580+",
                label: "Active Listings",
                change: "+15%",
              },
              {
                icon: TrendingUp,
                value: "$1.4M",
                label: "Median Price",
                change: "+11%",
              },
              {
                icon: Users,
                value: "32",
                label: "Avg Days on Market",
                change: "-8%",
              },
              {
                icon: MapPin,
                value: "6",
                label: "Prime Locations",
                change: "Stable",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400 mb-2">{stat.label}</div>
                <div className="text-luxury-gold text-sm font-semibold">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mb-6">
              Ready to Explore?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Schedule a personalized tour of these exclusive neighborhoods
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 luxury-gradient text-white font-semibold rounded-md hover:opacity-90 transition-opacity group"
            >
              <span>Schedule a Tour</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
