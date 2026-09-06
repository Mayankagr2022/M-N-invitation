"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, Sparkles, Film } from "lucide-react";

export default function VideoSection() {
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  return (
    <section id="video" className="relative py-20 sm:py-28 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <Film className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Cinematic Teaser
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          Our Invitation Film
        </h2>
        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] mt-2">
          Watch the visual story of our journey leading to our royal celebration in Udaipur.
        </p>
      </div>

      {/* Video Poster Card */}
      <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A46A]/40 group cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop"
          alt="Mayank & Nikita Wedding Film Poster"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
          sizes="(max-width: 1024px) 100vw, 900px"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        {/* Central Play Button */}
        <button
          onClick={() => setIsPlayingModal(true)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center group-hover:scale-110 transition-transform"
          aria-label="Play Wedding Invitation Film"
        >
          {/* Pulsing ring */}
          <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#DFBE85]/40 animate-ping opacity-70" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#C9A46A] via-[#DFBE85] to-[#FCFAF7] p-1 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#2D2622]/80 backdrop-blur-md flex items-center justify-center">
              <Play className="w-8 h-8 sm:w-9 sm:h-9 text-[#DFBE85] fill-[#DFBE85] ml-1" />
            </div>
          </div>
        </button>

        {/* Bottom Banner inside Poster */}
        <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-white">
          <div>
            <p className="font-great-vibes text-2xl sm:text-3xl text-[#DFBE85]">
              Mayank &amp; Nikita
            </p>
            <p className="font-poppins text-xs tracking-wider text-white/90">
              The Royal Wedding Film Teaser • Udaipur 2027
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-poppins">
            <span>HD • 4K</span>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlayingModal && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsPlayingModal(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-[#C9A46A]/50 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPlayingModal(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors border border-white/20"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded Video Teaser */}
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-couple-in-traditional-clothing-dancing-slowly-43093-large.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
