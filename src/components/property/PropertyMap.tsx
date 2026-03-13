"use client";

import { MapPin } from "lucide-react";

interface PropertyMapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
}

export default function PropertyMap({ coordinates, address }: PropertyMapProps) {
  // In production, integrate with Google Maps, Mapbox, or similar
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${coordinates.lat},${coordinates.lng}&zoom=15`;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md animate-fade-in">
      <h2 className="text-3xl font-bold text-luxury-black mb-6 font-serif">
        Location
      </h2>

      <div className="flex items-center space-x-3 mb-6 text-gray-700">
        <MapPin className="w-5 h-5 text-luxury-gold" />
        <span className="text-lg">{address}</span>
      </div>

      {/* Map Container - Replace with actual map integration */}
      <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden relative group">
        {/* Placeholder - In production, use Google Maps or Mapbox */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
            <p className="text-gray-600 font-medium mb-2">
              Interactive Map View
            </p>
            <p className="text-sm text-gray-500">
              {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
            </p>
            <a
              href={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 luxury-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        * To enable interactive maps, add your Google Maps API key in the configuration
      </p>
    </div>
  );
}
