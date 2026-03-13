import MobileBottomNav from "@/components/modern/MobileBottomNav";
import AnimatedPropertySearch from "@/components/modern/AnimatedPropertySearch";
import MLSListingGrid from "@/components/modern/MLSListingGrid";
import StickyFilterBar from "@/components/modern/StickyFilterBar";
import InteractiveMapSearch from "@/components/modern/InteractiveMapSearch";
import SavedListingsUI from "@/components/modern/SavedListingsUI";
import ModernMortgageCalculator from "@/components/modern/ModernMortgageCalculator";

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-luxury-black text-white py-16 md:py-24">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              Modern Real Estate Experience
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Explore cutting-edge features designed for luxury home search
            </p>
          </div>
        </div>
      </section>

      {/* Animated Property Search */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-black mb-4 font-serif">
              Animated Property Search
            </h2>
            <p className="text-gray-600 text-lg">
              Expandable search bar with smooth animations
            </p>
          </div>
          <AnimatedPropertySearch />
        </div>
      </section>

      {/* Sticky Filter Bar Demo */}
      <section className="py-16 bg-gray-50">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-black mb-4 font-serif">
              Sticky Filter Bar
            </h2>
            <p className="text-gray-600 text-lg">
              Scroll down to see the filter bar stick to the top
            </p>
          </div>
          <StickyFilterBar />
          <div className="mt-8">
            <MLSListingGrid />
          </div>
        </div>
      </section>

      {/* Interactive Map Search */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-black mb-4 font-serif">
              Interactive Map Search
            </h2>
            <p className="text-gray-600 text-lg">
              Click on price markers to view property details
            </p>
          </div>
          <InteractiveMapSearch />
        </div>
      </section>

      {/* Saved Listings UI */}
      <section className="py-16 bg-gray-50">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-black mb-4 font-serif">
              Saved Properties
            </h2>
            <p className="text-gray-600 text-lg">
              Manage your favorite listings with ease
            </p>
          </div>
          <SavedListingsUI />
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-16 bg-white">
        <div className="container-luxury max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-black mb-4 font-serif">
              Mortgage Calculator
            </h2>
            <p className="text-gray-600 text-lg">
              Calculate your monthly payments instantly
            </p>
          </div>
          <ModernMortgageCalculator />
        </div>
      </section>

      {/* Mobile Bottom Nav (visible on mobile only) */}
      <MobileBottomNav />
    </div>
  );
}
