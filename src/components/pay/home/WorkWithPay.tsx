import Link from "next/link";
import { ArrowRight, Home, TrendingUp, MapPin } from "lucide-react";

const pathways = [
  {
    icon: MapPin,
    title: "Relocation Strategy",
    description: "Moving to Las Vegas? Navigate neighborhoods, lifestyle fit, and market timing with expert local knowledge.",
    features: ["Neighborhood Analysis", "Market Timing", "Lifestyle Matching"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Build wealth through strategic real estate. Data-driven insights for short-term gains and long-term portfolio growth.",
    features: ["ROI Analysis", "Market Trends", "Portfolio Strategy"],
  },
  {
    icon: Home,
    title: "Market Positioning",
    description: "Selling your property? Position for maximum value with pricing strategy, staging guidance, and targeted marketing.",
    features: ["Pricing Strategy", "Marketing Plan", "Expert Negotiation"],
  },
];

export default function WorkWithPay() {
  return (
    <section className="bg-brand-gray-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-brand-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
            Strategic Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-black mb-6">
            Work With Pay
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl leading-relaxed">
            Three strategic pathways to real estate success in Las Vegas. 
            Each tailored to your unique goals, backed by market intelligence and premium service.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.title}
              className="bg-white border border-brand-gray-200 p-8 hover:border-brand-gold transition-all group"
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                <pathway.icon className="w-6 h-6 text-brand-gold group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-2xl text-brand-black mb-4 group-hover:text-brand-gold transition-colors">
                {pathway.title}
              </h3>
              
              <p className="text-brand-gray-600 leading-relaxed mb-6">
                {pathway.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {pathway.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-brand-gray-500">
                    <div className="w-1 h-1 bg-brand-gold mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/work-with-pay"
            className="inline-flex items-center text-brand-black hover:text-brand-gold transition-colors font-medium group"
          >
            View Full Services & Process
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
