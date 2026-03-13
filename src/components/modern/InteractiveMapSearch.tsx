"use client";

import { useState } from "react";
import { X, MapPin, Home, DollarSign } from "lucide-react";

interface Property {
  id: number;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  position: { top: string; left: string };
}

const properties: Property[] = [
  {
    id: 1,
    price: "$850,000",
    address: "123 Luxury Ave, Beverly Hills",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    position: { top: "20%", left: "25%" },
  },
  {
    id: 2,
    price: "$1,200,000",
    address: "456 Estate Dr, Malibu",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    position: { top: "45%", left: "60%" },
  },
  {
    id: 3,
    price: "$650,000",
    address: "789 Villa Rd, Santa Monica",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    position: { top: "70%", left: "35%" },
  },
  {
    id: 4,
    price: "$2,500,000",
    address: "321 Ocean Blvd, Newport Beach",
    beds: 6,
    baths: 5,
    sqft: "6,800",
    position: { top: "35%", left: "75%" },
  },
];

export default function InteractiveMapSearch() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
      {/* Map Background - Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <MapPin className="w-32 h-32 text-gray-300" />
        <span className="absolute text-gray-400 text-sm mt-40">
          Interactive Map View
        </span>
      </div>

      {/* Property Markers */}
      {properties.map((property) => (
        <button
          key={property.id}
          onClick={() => setSelectedProperty(property)}
          style={{
            position: "absolute",
            top: property.position.top,
            left: property.position.left,
          }}
          className="group relative"
        >
          {/* Price Marker */}
          <div className="bg-luxury-gold text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-110 cursor-pointer border-2 border-white">
            {property.price}
          </div>

          {/* Hover Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
              <div className="font-semibold">{property.price}</div>
              <div className="text-xs text-gray-300">Click for details</div>
            </div>
            <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1"></div>
          </div>
        </button>
      ))}

      {/* Property Details Popup */}
      {selectedProperty && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Property Image Placeholder */}
            <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 flex items-center justify-center">
              <Home className="w-16 h-16 text-gray-400" />
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold text-luxury-gold">
                    {selectedProperty.price}
                  </span>
                </div>
                <p className="text-gray-600">{selectedProperty.address}</p>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600 py-4 border-y border-gray-200">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-luxury-gold" />
                  <span>{selectedProperty.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-luxury-gold" />
                  <span>{selectedProperty.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-luxury-gold" />
                  <span>{selectedProperty.sqft} sqft</span>
                </div>
              </div>

              <button className="w-full bg-luxury-gold text-white py-3 rounded-lg font-semibold hover:bg-luxury-gold/90 transition-colors">
                View Full Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <span className="text-xl font-bold">+</span>
        </button>
        <button className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <span className="text-xl font-bold">−</span>
        </button>
      </div>
    </div>
  );
}
