import ImageGallery from "@/components/property/ImageGallery";
import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyDetails from "@/components/property/PropertyDetails";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyMap from "@/components/property/PropertyMap";
import MortgageCalculator from "@/components/property/MortgageCalculator";
import ContactAgent from "@/components/property/ContactAgent";
import SimilarListings from "@/components/property/SimilarListings";

// Mock data - In production, fetch from API/database
const getPropertyData = (id: string) => {
  return {
    id,
    title: "Modern Architectural Masterpiece",
    address: "1234 Sunset Boulevard",
    city: "Beverly Hills",
    state: "CA",
    zipCode: "90210",
    price: 12500000,
    status: "For Sale" as const,
    bedrooms: 6,
    bathrooms: 7,
    halfBathrooms: 2,
    sqft: 8500,
    lotSize: 15000,
    yearBuilt: 2022,
    propertyType: "Single Family",
    description: `Experience unparalleled luxury in this stunning architectural masterpiece. 
    
    This exceptional property represents the pinnacle of modern design and sophisticated living. Every detail has been meticulously crafted to create a harmonious blend of indoor and outdoor spaces, offering an unmatched lifestyle in one of the world's most prestigious neighborhoods.

    The residence features soaring ceilings, floor-to-ceiling windows that frame breathtaking views, and state-of-the-art smart home technology throughout. The gourmet chef's kitchen is equipped with top-of-the-line appliances, custom cabinetry, and a spacious center island perfect for entertaining.

    The luxurious primary suite is a private retreat featuring a spa-like bathroom with a freestanding soaking tub, oversized shower, dual vanities, and an expansive walk-in closet. Additional bedroom suites offer the same level of quality and attention to detail.

    The outdoor spaces are equally impressive, featuring multiple entertainment areas, an infinity-edge pool and spa, outdoor kitchen, fire features, and meticulously landscaped gardens. This is truly a once-in-a-lifetime opportunity to own an extraordinary property.`,
    features: [
      "Smart Home Technology",
      "Gourmet Chef's Kitchen",
      "Wine Cellar",
      "Home Theater",
      "Fitness Center",
      "Infinity Pool & Spa",
      "Outdoor Kitchen",
      "3-Car Garage",
      "Security System",
      "Central AC & Heating",
      "Hardwood Floors",
      "High Ceilings",
      "Walk-in Closets",
      "Fireplace",
      "Mountain Views",
      "City Lights Views",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1600",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600",
    ],
    coordinates: {
      lat: 34.0736,
      lng: -118.4004,
    },
  };
};

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = getPropertyData(params.id);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <ImageGallery images={property.images} title={property.title} />

      {/* Main Content Container */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Property Header - Price & Address */}
            <PropertyHeader property={property} />

            {/* Property Details Grid */}
            <PropertyDetails property={property} />

            {/* Property Description */}
            <PropertyDescription description={property.description} />

            {/* Amenities List */}
            <PropertyAmenities features={property.features} />

            {/* Map Location */}
            <PropertyMap
              coordinates={property.coordinates}
              address={`${property.address}, ${property.city}, ${property.state} ${property.zipCode}`}
            />

            {/* Mortgage Calculator */}
            <MortgageCalculator price={property.price} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent Form - Sticky */}
            <div className="sticky top-24">
              <ContactAgent property={property} />
            </div>
          </div>
        </div>

        {/* Similar Listings */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <SimilarListings currentPropertyId={property.id} />
        </div>
      </div>
    </main>
  );
}
