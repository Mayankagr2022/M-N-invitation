"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import { GALLERY_PHOTOS, GROOM_NAME, BRIDE_NAME, WEDDING_YEAR, VENUE_CITY } from "@/lib/wedding-config";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeFilter === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  const openLightbox = (idx: number) => {
    setSelectedPhotoIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showNext = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Memories in Motion
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          Captured Moments
        </h2>
        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] mt-2">
          Glimpses of laughter, stolen glances, and our journey from friends to soulmates.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: "all", label: `All Moments (${GALLERY_PHOTOS.length})` },
          { id: "pre-wedding", label: "Pre-Wedding" },
          { id: "proposal", label: "The Proposal" },
          { id: "celebrations", label: "Celebrations & Decor" },
          { id: "moments", label: "Candids" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveFilter(tab.id);
              setSelectedPhotoIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-xs font-poppins transition-all ${
              activeFilter === tab.id
                ? "bg-[#C9A46A] text-white shadow-md font-semibold"
                : "bg-white/80 text-[#5C524A] hover:bg-white border border-[#C9A46A]/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry Columns Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 border border-[#C9A46A]/20"
          >
            <div className={`relative w-full ${photo.aspect}`}>
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-cormorant text-lg font-semibold drop-shadow-sm">
                      {photo.title}
                    </p>
                    <p className="text-[10px] uppercase font-poppins text-[#DFBE85] tracking-wider">
                      {photo.category}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-4 inset-x-4 flex items-center justify-between z-50 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-poppins">
              {selectedPhotoIndex + 1} / {filteredPhotos.length}
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <h3 className="font-cormorant text-2xl font-medium">
                {filteredPhotos[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs uppercase font-poppins text-[#DFBE85] tracking-widest mt-0.5">
                {GROOM_NAME} ❤️ {BRIDE_NAME} • {VENUE_CITY} {WEDDING_YEAR}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
