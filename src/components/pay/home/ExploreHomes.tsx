import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    price: "$1,250,000",
    location: "Summerlin",
    type: "Luxury Estate",
    beds: 5,
    baths: 4,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
    price: "$875,000",
    location: "Henderson",
    type: "Modern Home",
    beds: 4,
    baths: 3,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
    price: "$2,100,000",
    location: "The Ridges",
    type: "Golf Course Estate",
    beds: 6,
    baths: 5,
  },
];

export default function ExploreHomes() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-brand-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
              Current Listings
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-black">
              Explore Homes
            </h2>
          </div>
          
          <Link
            href="/explore-homes"
            className="hidden md:inline-flex items-center text-brand-black hover:text-brand-gold transition-colors font-medium group"
          >
            View All Properties
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((home) => (
            <Link
              key={home.id}
              href={`/explore-homes/${home.id}`}
              className="group"
            >
              {/* Image */}
              <div className="relative h-80 mb-6 overflow-hidden bg-brand-gray-100">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${home.image})` }}
                ></div>
                
                {/* Overlay Label */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider">
                    {home.type}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-3xl text-brand-black group-hover:text-brand-gold transition-colors">
                    {home.price}
                  </h3>
                  <span className="text-sm text-brand-gray-500 uppercase tracking-wider">
                    {home.location}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-brand-gray-600 pt-3 border-t border-brand-gray-200">
                  <span>{home.beds} Beds</span>
                  <span>•</span>
                  <span>{home.baths} Baths</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/explore-homes"
            className="inline-flex items-center text-brand-black hover:text-brand-gold transition-colors font-medium"
          >
            View All Properties
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
