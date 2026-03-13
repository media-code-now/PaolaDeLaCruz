import { Bed, Bath, Square, Maximize, Calendar, Home } from "lucide-react";

interface PropertyDetailsProps {
  property: {
    bedrooms: number;
    bathrooms: number;
    halfBathrooms?: number;
    sqft: number;
    lotSize: number;
    yearBuilt: number;
    propertyType: string;
  };
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const details = [
    {
      icon: Bed,
      label: "Bedrooms",
      value: property.bedrooms.toString(),
    },
    {
      icon: Bath,
      label: "Bathrooms",
      value: property.halfBathrooms
        ? `${property.bathrooms}.${property.halfBathrooms}`
        : property.bathrooms.toString(),
    },
    {
      icon: Square,
      label: "Square Feet",
      value: property.sqft.toLocaleString(),
    },
    {
      icon: Maximize,
      label: "Lot Size",
      value: `${property.lotSize.toLocaleString()} sqft`,
    },
    {
      icon: Calendar,
      label: "Year Built",
      value: property.yearBuilt.toString(),
    },
    {
      icon: Home,
      label: "Property Type",
      value: property.propertyType,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md animate-fade-in">
      <h2 className="text-3xl font-bold text-luxury-black mb-8 font-serif">
        Property Details
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0">
              <detail.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">{detail.label}</div>
              <div className="text-xl font-bold text-luxury-black">
                {detail.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
