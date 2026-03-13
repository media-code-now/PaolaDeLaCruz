import Link from "next/link";
import { Download, FileText, TrendingUp, Map } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Market Reports",
    description: "Quarterly insights and data-driven analysis",
    link: "/resources#reports",
  },
  {
    icon: TrendingUp,
    title: "Investment Guide",
    description: "Strategic framework for property investment",
    link: "/resources#investment-guide",
  },
  {
    icon: Map,
    title: "Neighborhood Profiles",
    description: "In-depth area analysis and lifestyle guides",
    link: "/resources#neighborhoods",
  },
];

export default function Resources() {
  return (
    <section className="py-24 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-black mb-6">
              Strategic Resources
            </h2>
            <p className="text-lg text-brand-gray-600 leading-relaxed mb-8">
              Knowledge is power in real estate. Access curated guides, market data, and insights 
              designed to help you make informed decisions.
            </p>
            
            <Link
              href="/resources"
              className="inline-flex items-center px-8 py-4 border-2 border-brand-black text-brand-black font-medium hover:bg-brand-black hover:text-white transition-colors"
            >
              Browse All Resources
            </Link>
          </div>

          {/* Right - Resource Cards */}
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <Link
                key={resource.title}
                href={resource.link}
                className="flex items-start space-x-4 p-6 bg-white border border-brand-gray-200 hover:border-brand-gold transition-colors group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <resource.icon className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-black mb-1 group-hover:text-brand-gold transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-brand-gray-600 text-sm">
                    {resource.description}
                  </p>
                </div>
                <Download className="w-5 h-5 text-brand-gray-400 group-hover:text-brand-gold transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
