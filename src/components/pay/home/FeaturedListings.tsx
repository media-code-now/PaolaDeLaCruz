import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const listings = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
    price: "$2,450,000",
    address: "2847 Ashwood Lane",
    location: "West Hollywood, CA",
    beds: 4,
    baths: 3.5,
    sqft: "3,200",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    price: "$1,875,000",
    address: "512 Maple Drive",
    location: "Beverly Hills, CA",
    beds: 3,
    baths: 2.5,
    sqft: "2,800",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    price: "$3,200,000",
    address: "1924 Canyon Road",
    location: "Los Angeles, CA",
    beds: 5,
    baths: 4,
    sqft: "4,100",
  },
];

export default function FeaturedListings() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-black mb-4">
              Featured Listings
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl">
              A curated selection of exceptional properties. Each represents quality, value, and opportunity.
            </p>
          </div>
          
          <Link
            href="/explore-homes"
            className="hidden md:inline-flex items-center text-brand-black hover:text-brand-gold transition-colors font-medium group"
          >
            View All Homes
            <ArrowUpRight className="ml-1 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <Link
              key={listing.id}
              href={`/explore-homes/${listing.id}`}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 mb-6 overflow-hidden bg-brand-gray-100">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${listing.image})` }}
                ></div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-serif text-2xl text-brand-black mb-1">
                      {listing.price}
                    </p>
                    <p className="text-brand-gray-600 font-medium">
                      {listing.address}
                    </p>
                    <p className="text-brand-gray-500 text-sm">
                      {listing.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-brand-gray-600 pt-2 border-t border-brand-gray-200">
                  <span>{listing.beds} Bed</span>
                  <span>•</span>
                  <span>{listing.baths} Bath</span>
                  <span>•</span>
                  <span>{listing.sqft} SF</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/explore-homes"
            className="inline-flex items-center text-brand-black hover:text-brand-gold transition-colors font-medium"
          >
            View All Homes
            <ArrowUpRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
