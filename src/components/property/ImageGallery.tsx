"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="w-full h-[600px] grid grid-cols-4 gap-2 bg-luxury-black">
        {/* Main Large Image */}
        <div
          className="col-span-4 md:col-span-2 md:row-span-2 relative overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${images[0]})` }}
          />
          <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-colors" />
        </div>

        {/* Smaller Images */}
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="col-span-2 md:col-span-1 h-[150px] md:h-full relative overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index + 1)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-colors" />
            
            {/* "View All Photos" overlay on last visible image */}
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-luxury-black/70 flex items-center justify-center backdrop-blur-sm group-hover:bg-luxury-black/60 transition-colors">
                <div className="text-center">
                  <div className="text-white text-2xl font-bold mb-1">
                    +{images.length - 5}
                  </div>
                  <div className="text-white text-sm font-medium">
                    More Photos
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-luxury-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Current Image */}
          <div className="relative w-full h-full flex items-center justify-center p-12">
            <img
              src={images[selectedImage]}
              alt={`${title} - Image ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
