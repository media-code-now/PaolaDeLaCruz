"use client";

import Link from "next/link";
import { Search, MapPin, Home, DollarSign, Bed, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search data:", searchData);
    // Navigate to listings page with search params
    window.location.href = `/listings?location=${searchData.location}&type=${searchData.propertyType}&price=${searchData.priceRange}&beds=${searchData.bedrooms}`;
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Full Width Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2400')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/90 via-luxury-black/75 to-luxury-black/60" />
        <div className="absolute inset-0 bg-luxury-black/40" />
      </div>

      {/* Centered Content */}
      <div className="container-luxury relative z-10 text-white py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-10 px-8 py-3 glass-effect rounded-full animate-fade-in">
            <span className="text-luxury-gold-light text-sm md:text-base font-bold tracking-widest uppercase">
              Strategic Real Estate Advisor
            </span>
          </div>

          {/* Headline - Large Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold mb-6 leading-[1.1] animate-slide-up">
            Paola De La Cruz
            <span className="block text-gradient mt-4">Strategic Guidance for Las Vegas Real Estate</span>
          </h1>

          {/* Short Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto animate-slide-up animation-delay-200 leading-relaxed font-light">
            Relocation. Investment. Market Positioning.
          </p>

          {/* Property Search Bar - Smooth Fade Animation */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl max-w-6xl mx-auto animate-slide-up animation-delay-400 backdrop-blur-sm">
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {/* Location */}
                <div className="relative group">
                  <label className="block text-xs font-bold text-gray-600 mb-2.5 uppercase tracking-wide">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-luxury-gold transition-colors" />
                    <input
                      type="text"
                      placeholder="City or Neighborhood"
                      value={searchData.location}
                      onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-gray-800 font-medium placeholder:text-gray-400 focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 transition-all"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="relative group">
                  <label className="block text-xs font-bold text-gray-600 mb-2.5 uppercase tracking-wide">
                    Price Range
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-luxury-gold transition-colors" />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select
                      value={searchData.priceRange}
                      onChange={(e) => setSearchData({ ...searchData, priceRange: e.target.value })}
                      className="w-full pl-12 pr-10 py-4 border-2 border-gray-200 rounded-xl text-gray-800 font-medium focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Any Price</option>
                      <option value="0-5">Under $5M</option>
                      <option value="5-10">$5M - $10M</option>
                      <option value="10-15">$10M - $15M</option>
                      <option value="15-20">$15M - $20M</option>
                      <option value="20+">$20M+</option>
                    </select>
                  </div>
                </div>

                {/* Property Type */}
                <div className="relative group">
                  <label className="block text-xs font-bold text-gray-600 mb-2.5 uppercase tracking-wide">
                    Property Type
                  </label>
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-luxury-gold transition-colors" />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select
                      value={searchData.propertyType}
                      onChange={(e) => setSearchData({ ...searchData, propertyType: e.target.value })}
                      className="w-full pl-12 pr-10 py-4 border-2 border-gray-200 rounded-xl text-gray-800 font-medium focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">All Types</option>
                      <option value="house">Single Family</option>
                      <option value="villa">Villa</option>
                      <option value="estate">Estate</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="condo">Luxury Condo</option>
                    </select>
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="relative group">
                  <label className="block text-xs font-bold text-gray-600 mb-2.5 uppercase tracking-wide">
                    Bedrooms
                  </label>
                  <div className="relative">
                    <Bed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-luxury-gold transition-colors" />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select
                      value={searchData.bedrooms}
                      onChange={(e) => setSearchData({ ...searchData, bedrooms: e.target.value })}
                      className="w-full pl-12 pr-10 py-4 border-2 border-gray-200 rounded-xl text-gray-800 font-medium focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Any</option>
                      <option value="1">1+ Bed</option>
                      <option value="2">2+ Beds</option>
                      <option value="3">3+ Beds</option>
                      <option value="4">4+ Beds</option>
                      <option value="5">5+ Beds</option>
                      <option value="6">6+ Beds</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end sm:col-span-2 lg:col-span-1">
                  <button
                    type="submit"
                    className="w-full luxury-gradient text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group transform hover:scale-105"
                  >
                    <Search className="w-6 h-6" />
                    <span className="text-lg">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 animate-slide-up animation-delay-600">
            <Link
              href="/contact"
              className="group px-10 py-5 bg-white text-luxury-black font-bold text-lg rounded-xl hover:bg-luxury-gray-light transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-luxury-gold/20 transform hover:scale-105"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/listings"
              className="group px-10 py-5 bg-transparent backdrop-blur-md border-2 border-white/40 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center justify-center shadow-2xl transform hover:scale-105"
            >
              <span>View All Properties</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
