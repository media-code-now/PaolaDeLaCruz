import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[500px] lg:h-[600px] bg-brand-gray-100">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-brand-gray-400">
                  <p className="text-sm uppercase tracking-wider">Professional Portrait</p>
                  <p className="text-xs mt-2">Paola De La Cruz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-brand-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
              About Pay
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-black mb-6">
              Strategic Advisor,<br />
              Not Just Agent
            </h2>
            
            <div className="space-y-6 text-brand-gray-600 leading-relaxed mb-8">
              <p>
                With over 12 years navigating the Las Vegas real estate market, 
                I've built my practice on a simple philosophy: real estate decisions 
                deserve strategic thinking, not sales pressure.
              </p>
              
              <p>
                Whether you're relocating from out of state, building an investment 
                portfolio, or positioning a property for sale, I provide the market 
                intelligence and tailored guidance you need to make confident decisions.
              </p>
              
              <p>
                My clients value clarity, data, and a partnership approach. 
                No templates. No rush. Just strategic real estate advisory.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="border-l-2 border-brand-gold pl-6 mb-8">
              <ul className="space-y-2 text-sm text-brand-gray-600">
                <li>• Licensed Nevada Real Estate Professional</li>
                <li>• Certified Luxury Home Marketing Specialist</li>
                <li>• Relocation & Investment Advisory Expert</li>
                <li>• Las Vegas Market Specialist (12+ Years)</li>
              </ul>
            </div>
            
            <Link
              href="/about"
              className="inline-flex items-center text-brand-black hover:text-brand-gold transition-colors font-medium group"
            >
              Read Full Bio & Credentials
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
