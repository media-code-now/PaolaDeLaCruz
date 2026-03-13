import { Check } from "lucide-react";

interface PropertyAmenitiesProps {
  features: string[];
}

export default function PropertyAmenities({ features }: PropertyAmenitiesProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md animate-fade-in">
      <h2 className="text-3xl font-bold text-luxury-black mb-6 font-serif">
        Features & Amenities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <div className="w-6 h-6 luxury-gradient rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-base text-gray-800 font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
