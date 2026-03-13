import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="text-brand-gold text-sm font-medium uppercase tracking-widest">
                Strategic Real Estate Advisor
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-brand-black">
              Paola De La Cruz
            </h1>
            
            <div className="h-px w-24 bg-brand-gold"></div>
            
            <p className="text-xl md:text-2xl text-brand-gray-600 font-light leading-relaxed max-w-xl">
              Relocation. Investment. Market Positioning.
            </p>
            
            <p className="text-lg text-brand-gray-500 leading-relaxed max-w-xl">
              I partner with discerning clients to navigate complex real estate decisions with intelligence, 
              strategy, and precision. Whether relocating, investing, or positioning assets, you deserve more 
              than a transaction—you deserve strategic guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/work-with-pay"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-white font-medium hover:bg-brand-gray-800 transition-colors group"
              >
                Work With Pay
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/explore-homes"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-black text-brand-black font-medium hover:bg-brand-black hover:text-white transition-colors"
              >
                Explore Homes
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[600px] lg:h-[700px] animate-fade-in animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-200 to-brand-gray-100"></div>
            {/* Placeholder for professional headshot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-brand-gray-400">
                <p className="text-sm uppercase tracking-wider">Professional Portrait</p>
                <p className="text-xs mt-2">Replace with high-quality image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
