"use client";

import { MapPin, Heart, Share2 } from "lucide-react";
import { useState } from "react";

interface PropertyHeaderProps {
  property: {
    title: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    price: number;
    status: "For Sale" | "Sold" | "Pending";
  };
}

export default function PropertyHeader({ property }: PropertyHeaderProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md animate-fade-in">
      <div className="flex items-start justify-between mb-6">
        <div>
          {/* Status Badge */}
          <div className="inline-block mb-4">
            <div
              className={`px-4 py-2 rounded-full text-white text-sm font-bold ${
                property.status === "Sold"
                  ? "bg-gray-900"
                  : property.status === "Pending"
                  ? "bg-luxury-gold"
                  : "bg-green-600"
              }`}
            >
              {property.status}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-luxury-black mb-4 font-serif">
            {property.title}
          </h1>

          {/* Address */}
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="w-5 h-5 text-luxury-gold" />
            <span className="text-lg">
              {property.address}, {property.city}, {property.state}{" "}
              {property.zipCode}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Heart
              className={`w-6 h-6 ${
                isFavorite
                  ? "fill-luxury-gold text-luxury-gold"
                  : "text-luxury-black"
              }`}
            />
          </button>
          <button
            onClick={handleShare}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Share2 className="w-6 h-6 text-luxury-black" />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="pt-6 border-t border-gray-200">
        <div className="text-5xl lg:text-6xl font-bold text-luxury-gold">
          {formatPrice(property.price)}
        </div>
      </div>
    </div>
  );
}
