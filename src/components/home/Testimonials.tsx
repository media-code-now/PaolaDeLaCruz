"use client";

import { Star } from "lucide-react";
import TestimonialsSlider from "@/components/shared/TestimonialsSlider";

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 px-5 py-2.5 bg-luxury-gold/10 rounded-full">
            <Star className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
            <span className="text-luxury-gold text-sm font-bold tracking-wide uppercase">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-black mb-6 leading-tight">
            What Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients
            have to say about their experience.
          </p>
        </div>

        {/* Testimonials Slider */}
        <TestimonialsSlider />
      </div>
    </section>
  );
}

