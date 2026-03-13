"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Pay's strategic approach completely changed how I thought about real estate investment. She didn't just find me a property—she helped me build a portfolio.",
    author: "Michael Chen",
    role: "Real Estate Investor",
  },
  {
    quote: "Relocating from New York was stressful, but Pay made it seamless. Her market knowledge and attention to detail gave me confidence in every decision.",
    author: "Sarah Williams",
    role: "Corporate Executive",
  },
  {
    quote: "What sets Pay apart is her intelligence and clarity. No fluff, no pressure—just expert guidance when I needed it most.",
    author: "David Torres",
    role: "Entrepreneur",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-brand-black text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-brand-gold text-sm font-medium uppercase tracking-widest">
            Client Experiences
          </span>
        </div>

        {/* Testimonial Content */}
        <div className="relative min-h-[300px] flex items-center">
          <div className="space-y-8 animate-fade-in" key={currentIndex}>
            <blockquote className="font-serif text-3xl md:text-4xl font-light leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div>
              <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
              <p className="text-brand-gray-400 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-brand-gray-800">
          <div className="text-sm text-brand-gray-400">
            {currentIndex + 1} / {testimonials.length}
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={prev}
              className="w-12 h-12 border border-brand-gray-700 hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-brand-gray-700 hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
