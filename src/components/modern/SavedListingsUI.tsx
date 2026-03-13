"use client";

import { useState } from "react";
import { Heart, X, Share2, Eye, TrendingUp } from "lucide-react";
import Link from "next/link";

interface SavedListing {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  savedDate: string;
  views: number;
}

const savedListings: SavedListing[] = [
  {
    id: 1,
    title: "Modern Architectural Masterpiece",
    location: "Summerlin, NV",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400",
    savedDate: "2 days ago",
    views: 1245,
  },
  {
    id: 2,
    title: "Resort-Style Estate",
    location: "Seven Hills, NV",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400",
    savedDate: "5 days ago",
    views: 2103,
  },
  {
    id: 3,
    title: "Contemporary Luxury Residence",
    location: "Henderson, NV",
    price: 1750000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
    savedDate: "1 week ago",
    views: 876,
  },
];

export default function SavedListingsUI() {
  const [listings, setListings] = useState(savedListings);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const removeListing = (id: number) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  const shareList listing = (listing: SavedListing) => {
    if (navigator.share) {
      navigator.share({
        title: listing.title,
        text: `Check out this property in ${listing.location}`,
        url: `/listings/${listing.id}`,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-luxury-black mb-2 font-serif">
            Saved Properties
          </h2>
          <p className="text-gray-600">
            {listings.length} {listings.length === 1 ? "property" : "properties"} saved
          </p>
        </div>
        <Heart className="w-8 h-8 fill-luxury-gold text-luxury-gold" />
      </div>

      {/* Listings List */}
      {listings.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Saved Properties
          </h3>
          <p className="text-gray-500 mb-6">
            Start saving properties to keep track of your favorites
          </p>
          <Link
            href="/listings"
            className="inline-block px-6 py-3 luxury-gradient text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Browse Properties
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="group border-2 border-gray-100 rounded-2xl p-4 hover:border-luxury-gold hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                {/* Image */}
                <Link
                  href={`/listings/${listing.id}`}
                  className="relative w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${listing.image})` }}
                  />
                </Link>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Link href={`/listings/${listing.id}`}>
                    <h3 className="text-lg font-bold text-luxury-black mb-1 truncate group-hover:text-luxury-gold transition-colors">
                      {listing.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-2">{listing.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-luxury-gold">
                      {formatPrice(listing.price)}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{listing.views.toLocaleString()}</span>
                      </div>
                      <span>Saved {listing.savedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => shareListing(listing)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-luxury-gold/10 hover:text-luxury-gold transition-all"
                    title="Share"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => removeListing(listing.id)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-all"
                    title="Remove"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats Footer */}
      {listings.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-luxury-gold mb-1">
                {listings.length}
              </div>
              <div className="text-sm text-gray-600">Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-luxury-gold mb-1">
                {listings.reduce((acc, l) => acc + l.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1 text-green-600 mb-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-2xl font-bold">+12%</span>
              </div>
              <div className="text-sm text-gray-600">Avg. Value</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
