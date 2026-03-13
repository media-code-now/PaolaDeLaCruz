import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-black mb-6 leading-tight">
          Let&apos;s start a conversation about your real estate goals.
        </h2>
        
        <p className="text-xl text-brand-gray-600 mb-12 max-w-2xl mx-auto">
          Whether you&apos;re considering a move, exploring investment opportunities, or positioning 
          a property for sale, I&apos;m here to provide strategic guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-white font-medium hover:bg-brand-gray-800 transition-colors group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-black text-brand-black font-medium hover:bg-brand-black hover:text-white transition-colors"
          >
            Learn More About Pay
          </Link>
        </div>
      </div>
    </section>
  );
}
