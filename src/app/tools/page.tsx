import MortgageCalculator from "@/components/tools/MortgageCalculator";
import HomeValueEstimator from "@/components/tools/HomeValueEstimator";
import { Calculator, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Tools | Paola De La Cruz | Las Vegas Calculators",
  description: "Interactive mortgage calculator, home value estimator, and other real estate tools for Las Vegas buyers and sellers.",
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-luxury-gray-light">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20 lg:mt-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/70" />
        
        <div className="container-luxury relative z-10 text-white text-center">
          <Link 
            href="/resources"
            className="inline-flex items-center text-luxury-gold hover:text-luxury-gold-light mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
            <span className="text-luxury-gold-light text-sm font-semibold">
              FREE TOOLS
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Interactive Calculators
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional tools to help you make informed real estate decisions
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding">
        <div className="container-luxury">
          {/* Quick Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="#mortgage"
              className="px-6 py-3 luxury-gradient text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Mortgage Calculator
            </a>
            <a
              href="#home-value"
              className="px-6 py-3 bg-white text-luxury-black rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center border-2 border-luxury-gold/20"
            >
              <Home className="w-5 h-5 mr-2 text-luxury-gold" />
              Home Value
            </a>
          </div>

          <div className="space-y-16">
            {/* Mortgage Calculator */}
            <div id="mortgage" className="scroll-mt-32">
              <MortgageCalculator />
            </div>

            {/* Home Value Estimator */}
            <div id="home-value" className="scroll-mt-32">
              <HomeValueEstimator />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-luxury-black rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Need Personalized Advice?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              While these tools provide valuable estimates, nothing replaces a professional consultation.
              Let&apos;s discuss your specific situation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 luxury-gradient text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
