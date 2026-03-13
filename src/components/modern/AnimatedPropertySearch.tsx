"use client";

import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

export default function AnimatedPropertySearch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    beds: "",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchData);
    // Handle search logic
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Collapsed State - Search Bar */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full flex items-center gap-3 px-6 py-4 bg-white border-2 border-luxury-gold/20 hover:border-luxury-gold rounded-full shadow-lg hover:shadow-xl transition-all group"
        >
          <Search className="w-5 h-5 text-luxury-gold" />
          <span className="text-gray-600 group-hover:text-luxury-gold transition-colors">
            Search properties by location, price, type...
          </span>
        </button>
      )}

      {/* Expanded State - Full Search Form */}
      {isExpanded && (
        <div className="bg-white border-2 border-luxury-gold rounded-2xl shadow-2xl p-6 animate-fade-in">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Location */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 text-luxury-gold" />
                  Location
                </label>
                <input
                  type="text"
                  value={searchData.location}
                  onChange={(e) =>
                    setSearchData({ ...searchData, location: e.target.value })
                  }
                  placeholder="City, ZIP, or Neighborhood"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>

              {/* Property Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Home className="w-4 h-4 text-luxury-gold" />
                  Property Type
                </label>
                <select
                  value={searchData.propertyType}
                  onChange={(e) =>
                    setSearchData({ ...searchData, propertyType: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  <option value="">Any Type</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 text-luxury-gold" />
                  Price Range
                </label>
                <select
                  value={searchData.priceRange}
                  onChange={(e) =>
                    setSearchData({ ...searchData, priceRange: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  <option value="">Any Price</option>
                  <option value="0-300000">Under $300K</option>
                  <option value="300000-500000">$300K - $500K</option>
                  <option value="500000-750000">$500K - $750K</option>
                  <option value="750000-1000000">$750K - $1M</option>
                  <option value="1000000+">$1M+</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Home className="w-4 h-4 text-luxury-gold" />
                  Bedrooms
                </label>
                <select
                  value={searchData.beds}
                  onChange={(e) =>
                    setSearchData({ ...searchData, beds: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-luxury-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-luxury-gold/90 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search Properties
              </button>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
