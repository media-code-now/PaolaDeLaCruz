"use client";

import Link from "next/link";
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";
import { useState } from "react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 animate-scale-in hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <Link href={`/listings/${property.id}`} className="relative block h-72 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-125"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-luxury-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-luxury-gold text-luxury-gold" : "text-luxury-black"
            }`}
          />
        </button>

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 px-3 py-1.5 luxury-gradient text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-4 left-4 px-4 py-2 glass-effect rounded-lg">
          <div className="text-white font-bold text-xl">
            {formatPrice(property.price)}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/listings/${property.id}`}>
          <h3 className="text-xl font-semibold text-luxury-black mb-2 group-hover:text-luxury-gold transition-colors line-clamp-1">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-luxury-gold" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-1 text-gray-700">
            <Bed className="w-4 h-4" />
            <span className="text-sm font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-700">
            <Bath className="w-4 h-4" />
            <span className="text-sm font-medium">{property.bathrooms}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-700">
            <Square className="w-4 h-4" />
            <span className="text-sm font-medium">{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
