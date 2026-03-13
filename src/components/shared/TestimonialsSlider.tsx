"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    location: "Summerlin, NV",
    review:
      "Working with Paola was an absolute pleasure. Her expertise in luxury real estate is unmatched, and she helped us find our dream home in record time. The attention to detail and personalized service exceeded all expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jennifer Williams",
    location: "Seven Hills, NV",
    review:
      "Paola's professionalism and market knowledge are truly exceptional. She guided us through every step of selling our property and achieved a result far beyond what we anticipated. Highly recommend her services.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Rodriguez",
    location: "Henderson, NV",
    review:
      "From our first meeting to closing day, Paola was outstanding. Her negotiation skills saved us hundreds of thousands, and her network of contacts made the entire process seamless. A true luxury real estate expert.",
    rating: 5,
  },
  {
    id: 4,
    name: "Amanda Thompson",
    location: "The Lakes, NV",
    review:
      "I cannot say enough good things about working with Paola. She understood exactly what we were looking for and found us the perfect property. Her dedication and availability were remarkable throughout the journey.",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Kim",
    location: "Anthem, NV",
    review:
      "Paola's sophisticated approach to luxury real estate is refreshing. She provided invaluable insights into the market and helped us secure an exceptional investment property. Her service is truly world-class.",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "fill-luxury-gold text-luxury-gold"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Testimonial Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 overflow-hidden">
        {/* Decorative Quote Icon */}
        <div className="absolute top-8 right-8 opacity-5">
          <Quote className="w-32 h-32 text-luxury-gold" />
        </div>

        {/* Content Container with Slide Animation */}
        <div className="relative z-10 w-full min-h-[400px] md:min-h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full px-4 md:px-12"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center space-x-1 mb-8">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-center mb-10">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic font-light">
                  &ldquo;{testimonials[currentIndex].review}&rdquo;
                </p>
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                {/* Client Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/40 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-2xl font-bold text-luxury-gold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-2xl font-bold text-luxury-black mb-2">
                  {testimonials[currentIndex].name}
                </h3>

                {/* Location */}
                <p className="text-gray-600 font-medium">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-all duration-300 group z-20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-luxury-black group-hover:text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-all duration-300 group z-20"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-luxury-black group-hover:text-white" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center space-x-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-12 h-3 bg-luxury-gold"
                : "w-3 h-3 bg-gray-300 hover:bg-luxury-gold/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar (Optional) */}
      {isAutoPlaying && (
        <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden max-w-md mx-auto">
          <div
            className="h-full bg-luxury-gold transition-all duration-[5000ms] ease-linear"
            style={{
              width: "100%",
              animation: "progress 5s linear infinite",
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
