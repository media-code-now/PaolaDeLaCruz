"use client";

import { useState } from "react";
import { Home, TrendingUp, MapPin, Bed, Bath, Maximize } from "lucide-react";

export default function HomeValueEstimator() {
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [squareFeet, setSquareFeet] = useState(2500);
  const [neighborhood, setNeighborhood] = useState("Summerlin");
  const [yearBuilt, setYearBuilt] = useState(2015);
  const [showResults, setShowResults] = useState(false);

  // Las Vegas neighborhoods with avg price per sqft
  const neighborhoodData: Record<string, number> = {
    "Summerlin": 560,
    "Henderson": 520,
    "Seven Hills": 680,
    "The Lakes": 490,
    "Anthem": 580,
    "Red Rock": 750,
    "Downtown": 420,
    "Paradise": 380,
  };

  const calculateValue = () => {
    // Base calculation on neighborhood price per sqft
    const basePricePerSqft = neighborhoodData[neighborhood] || 500;
    let estimatedValue = squareFeet * basePricePerSqft;

    // Adjust for bedrooms
    const bedroomAdjustment = (bedrooms - 3) * 25000;
    estimatedValue += bedroomAdjustment;

    // Adjust for bathrooms
    const bathroomAdjustment = (bathrooms - 2) * 15000;
    estimatedValue += bathroomAdjustment;

    // Adjust for age
    const age = 2026 - yearBuilt;
    if (age < 5) {
      estimatedValue *= 1.1; // 10% premium for new construction
    } else if (age > 20) {
      estimatedValue *= 0.95; // 5% reduction for older homes
    }

    return estimatedValue;
  };

  const estimatedValue = calculateValue();
  const lowRange = estimatedValue * 0.95;
  const highRange = estimatedValue * 1.05;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="luxury-gradient p-8 text-white">
        <div className="flex items-center mb-4">
          <Home className="w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold font-serif">Home Value Estimator</h2>
        </div>
        <p className="text-white/90">
          Get an instant estimate of your Las Vegas property&apos;s market value
        </p>
      </div>

      <form onSubmit={handleEstimate} className="p-8">
        {/* Input Fields */}
        <div className="space-y-6 mb-8">
          {/* Address */}
          <div>
            <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
              <MapPin className="w-4 h-4 mr-1 text-luxury-gold" />
              Property Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main St, Las Vegas, NV"
              className="w-full px-4 py-3 rounded-xl border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none text-luxury-black"
              required
            />
          </div>

          {/* Neighborhood */}
          <div>
            <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
              <MapPin className="w-4 h-4 mr-1 text-luxury-gold" />
              Neighborhood
            </label>
            <select
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none text-luxury-black"
            >
              {Object.keys(neighborhoodData).map((hood) => (
                <option key={hood} value={hood}>
                  {hood}
                </option>
              ))}
            </select>
          </div>

          {/* Square Feet */}
          <div>
            <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
              <Maximize className="w-4 h-4 mr-1 text-luxury-gold" />
              Square Feet
            </label>
            <input
              type="number"
              value={squareFeet}
              onChange={(e) => setSquareFeet(Number(e.target.value))}
              min="500"
              max="20000"
              step="100"
              className="w-full px-4 py-3 rounded-xl border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none text-luxury-black text-xl font-semibold"
            />
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
                <Bed className="w-4 h-4 mr-1 text-luxury-gold" />
                Bedrooms
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setBedrooms(num)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      bedrooms === num
                        ? "luxury-gradient text-white"
                        : "bg-luxury-gray-light text-luxury-black hover:bg-luxury-gold/10"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
                <Bath className="w-4 h-4 mr-1 text-luxury-gold" />
                Bathrooms
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setBathrooms(num)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      bathrooms === num
                        ? "luxury-gradient text-white"
                        : "bg-luxury-gray-light text-luxury-black hover:bg-luxury-gold/10"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Year Built */}
          <div>
            <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
              <TrendingUp className="w-4 h-4 mr-1 text-luxury-gold" />
              Year Built
            </label>
            <input
              type="number"
              value={yearBuilt}
              onChange={(e) => setYearBuilt(Number(e.target.value))}
              min="1950"
              max="2026"
              className="w-full px-4 py-3 rounded-xl border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none text-luxury-black text-xl font-semibold"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 luxury-gradient text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider"
        >
          Get Instant Estimate
        </button>

        {/* Results */}
        {showResults && (
          <div className="mt-8 bg-luxury-gray-light rounded-2xl p-8 animate-fade-in">
            <h3 className="text-xl font-bold text-luxury-black mb-6 font-serif flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-luxury-gold" />
              Estimated Home Value
            </h3>

            {/* Value Range */}
            <div className="bg-white rounded-xl p-6 border-2 border-luxury-gold/30 mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">Estimated Value Range</div>
                <div className="text-4xl font-bold text-luxury-gold mb-2">
                  {formatCurrency(estimatedValue)}
                </div>
                <div className="text-lg text-gray-600">
                  {formatCurrency(lowRange)} - {formatCurrency(highRange)}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Price per Sq Ft</div>
                <div className="text-xl font-bold text-luxury-black">
                  ${Math.round(estimatedValue / squareFeet)}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Market Avg</div>
                <div className="text-xl font-bold text-luxury-black">
                  ${neighborhoodData[neighborhood]}/sqft
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-luxury-gold/10 rounded-xl p-6 text-center">
              <p className="text-luxury-black font-semibold mb-4">
                Want a more accurate valuation?
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 luxury-gradient text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Professional CMA
              </a>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          * This is an automated estimate based on market data. For an accurate Comparative Market Analysis (CMA),
          contact Paola &quot;Pay&quot; De La Cruz for a professional evaluation.
        </p>
      </form>
    </div>
  );
}
