import { Home, TrendingUp, Map, FileText } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Map,
    title: "Relocation Strategy",
    description: "Navigate your move with confidence. From market research to neighborhood selection, I ensure your relocation aligns with your lifestyle and goals.",
    link: "/work-with-pay#relocation",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Make informed decisions. I provide data-driven insights and market analysis to maximize your real estate investment potential.",
    link: "/work-with-pay#investment",
  },
  {
    icon: Home,
    title: "Market Positioning",
    description: "Sell strategically. Position your property for maximum value with expert pricing, staging consultation, and targeted marketing.",
    link: "/work-with-pay#positioning",
  },
  {
    icon: FileText,
    title: "Strategic Resources",
    description: "Access curated guides, market reports, and exclusive insights designed to empower your real estate decisions.",
    link: "/resources",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-black mb-6">
            How I Work
          </h2>
          <p className="text-lg text-brand-gray-600 leading-relaxed">
            Real estate is personal. My approach is strategic, tailored, and focused on your unique needs—
            not one-size-fits-all templates or pressure tactics.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.link}
              className="group border border-brand-gray-200 p-8 hover:border-brand-gold transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <service.icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif text-2xl text-brand-black mb-4 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-brand-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              
              <span className="inline-flex items-center text-sm font-medium text-brand-gold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
