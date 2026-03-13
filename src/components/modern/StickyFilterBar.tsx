"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, X, DollarSign, Bed, Bath, Maximize } from "lucide-react";

interface FilterBarProps {
  onFilterChange?: (filters: PropertyFilters) => void;
}

interface PropertyFilters {
  priceMin: string;
  priceMax: string;
  beds: string;
  baths: string;
  sqftMin: string;
  sqftMax: string;
}

export default function StickyFilterBar({ onFilterChange }: FilterBarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<PropertyFilters>({
    priceMin: "",
    priceMax: "",
    beds: "",
    baths: "",
    sqftMin: "",
    sqftMax: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFilterChange = (key: keyof PropertyFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearFilters = () => {
    const emptyFilters = {
      priceMin: "",
      priceMax: "",
      beds: "",
      baths: "",
      sqftMin: "",
      sqftMax: "",
    };
    setFilters(emptyFilters);
    if (onFilterChange) {
      onFilterChange(emptyFilters);
    }
  };

  const activeFiltersCount = Object.values(filters).filter((v) => v !== "").length;

  return (
    <>
      {/* Sticky Filter Bar */}
      <div
        className={`${
          isSticky ? "fixed top-20 left-0 right-0" : "relative"
        } bg-white shadow-lg z-30 transition-all duration-300 ${
          isSticky ? "animate-slide-down" : ""
        }`}
      >
        <div className="container-luxury py-4">
          <div className="flex items-center justify-between">
            {/* Quick Filters */}
            <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  showFilters || activeFiltersCount > 0
                    ? "luxury-gradient text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="font-semibold whitespace-nowrap">
                  Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </span>
              </button>

              {/* Quick Filter Pills */}
              <div className="hidden md:flex items-center space-x-2">
                <select
                  value={filters.beds}
                  onChange={(e) => handleFilterChange("beds", e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Beds</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>

                <select
                  value={filters.baths}
                  onChange={(e) => handleFilterChange("baths", e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Baths</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>

                <select
                  value={filters.priceMax}
                  onChange={(e) => handleFilterChange("priceMax", e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Max Price</option>
                  <option value="5000000">$5M</option>
                  <option value="10000000">$10M</option>
                  <option value="15000000">$15M</option>
                  <option value="20000000">$20M</option>
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-luxury-gold transition-colors"
              >
                <X className="w-4 h-4" />
                <span className="font-semibold hidden md:inline">Clear All</span>
              </button>
            )}
          </div>
        </div>

        {/* Expanded Filters Panel */}
        {showFilters && (
          <div className="border-t border-gray-200 bg-gray-50 animate-fade-in">
            <div className="container-luxury py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Min"
                      value={filters.priceMin}
                      onChange={(e) => handleFilterChange("priceMin", e.target.value)}
                      className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Max"
                      value={filters.priceMax}
                      onChange={(e) => handleFilterChange("priceMax", e.target.value)}
                      className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Bedrooms & Bathrooms */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Bed className="w-4 h-4 inline mr-1" />
                    Beds & <Bath className="w-4 h-4 inline mx-1" /> Baths
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={filters.beds}
                      onChange={(e) => handleFilterChange("beds", e.target.value)}
                      className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Beds</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                      <option value="6">6+</option>
                    </select>
                    <select
                      value={filters.baths}
                      onChange={(e) => handleFilterChange("baths", e.target.value)}
                      className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Baths</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                </div>

                {/* Square Footage */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Maximize className="w-4 h-4 inline mr-1" />
                    Square Feet
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Min sqft"
                      value={filters.sqftMin}
                      onChange={(e) => handleFilterChange("sqftMin", e.target.value)}
                      className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Max sqft"
                      value={filters.sqftMax}
                      onChange={(e) => handleFilterChange("sqftMax", e.target.value)}
                      className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
