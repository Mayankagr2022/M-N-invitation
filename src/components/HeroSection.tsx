"use client";

import React from "react";
import Image from "next/image";
import { Heart, Calendar, Sparkles, ChevronDown } from "lucide-react";
import {
  GROOM_NAME,
  BRIDE_NAME,
  TAGLINE,
  WEDDING_DATE_DISPLAY,
  COUPLE_PORTRAIT_URL,
} from "@/lib/wedding-config";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between pt-16 sm:pt-20 pb-28 sm:pb-24 px-4 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(ellipse at 50% 30%, rgba(201, 164, 106, 0.12) 0%, rgba(248, 245, 240, 1) 70%)`,
      }}
    >
      {/* Background Rotating Decorative Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] opacity-[0.04] pointer-events-none -z-10 animate-[spin_120s_linear_infinite]">
        <svg viewBox="0 0 500 500" className="w-full h-full fill-none stroke-[#C9A46A]" strokeWidth="1.5">
          <circle cx="250" cy="250" r="240" />
          <circle cx="250" cy="250" r="200" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="160" />
          <circle cx="250" cy="250" r="120" strokeDasharray="2 2" />
          <circle cx="250" cy="250" r="80" />
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d="M250 10 C 270 120, 270 120, 250 250 C 230 120, 230 120, 250 10"
              transform={`rotate(${i * 30} 250 250)`}
            />
          ))}
        </svg>
      </div>

      {/* Top Header Badge */}
      <div className="text-center max-w-2xl mx-auto pt-4 sm:pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="font-poppins text-[11px] sm:text-xs tracking-[0.25em] text-[#A37E3E] uppercase font-medium">
            Save The Date • Royal Wedding
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
        </div>

        <p className="font-cormorant text-lg sm:text-xl text-[#5C524A] tracking-wider italic">
          Together with our families, we invite you to celebrate the wedding of
        </p>

        {/* Couple Names */}
        <div className="relative py-2 my-1">
          <h1 className="font-great-vibes text-6xl sm:text-7xl md:text-8xl text-[#2D2622] tracking-normal leading-tight drop-shadow-sm">
            {GROOM_NAME}
            <span className="inline-flex items-center justify-center mx-3 sm:mx-4 align-middle">
              <Heart className="w-7 h-7 sm:w-10 sm:h-10 text-[#B76E79] fill-[#B76E79] animate-pulse" />
            </span>
            {BRIDE_NAME}
          </h1>
        </div>

        {/* Tagline */}
        <p className="font-cormorant text-lg sm:text-2xl text-[#C9A46A] tracking-wide font-medium mt-1">
          &ldquo;{TAGLINE}&rdquo;
        </p>
      </div>

      {/* Centerpiece Couple Portrait in Royal Arch / Jharokha Framing */}
      <div className="relative my-6 sm:my-8 w-full max-w-[320px] sm:max-w-[400px] aspect-[4/5] mx-auto group">
        {/* Outer Glow */}
        <div className="absolute -inset-2 rounded-t-[140px] rounded-b-3xl bg-gradient-to-b from-[#DFBE85]/30 to-[#A8B59A]/20 blur-md group-hover:blur-lg transition-all" />

        {/* Outer Arch Border */}
        <div className="relative w-full h-full rounded-t-[140px] rounded-b-3xl p-2.5 bg-gradient-to-b from-[#DFBE85] via-[#C9A46A] to-[#FCFAF7] shadow-2xl">
          <div className="relative w-full h-full rounded-t-[130px] rounded-b-2xl overflow-hidden border-2 border-white/80">
            <Image
              src={COUPLE_PORTRAIT_URL}
              alt={`${GROOM_NAME} and ${BRIDE_NAME}`}
              fill
              priority
              className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 320px, 400px"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2622]/60 via-transparent to-black/10" />

            {/* Bottom Inset Date in Portrait */}
            <div className="absolute bottom-4 inset-x-0 text-center text-white">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-xs font-poppins tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-[#DFBE85]" />
                {WEDDING_DATE_DISPLAY}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative corner florets */}
        <div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-[#FCFAF7] border border-[#C9A46A] shadow-md flex items-center justify-center text-[#C9A46A] text-xs">
          ✦
        </div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-[#FCFAF7] border border-[#C9A46A] shadow-md flex items-center justify-center text-[#C9A46A] text-xs">
          ✦
        </div>
      </div>

      {/* Action Buttons & Countdown Glance */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-4 z-20">
        <div className="flex items-center justify-center gap-4 w-full px-4">
          <button
            onClick={() => scrollTo("story")}
            className="flex-1 py-3 px-5 rounded-full bg-white/80 hover:bg-white text-[#2D2622] border border-[#C9A46A]/50 font-poppins text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all text-center"
          >
            Our Story
          </button>
          {/* <button
            onClick={() => scrollTo("rsvp")}
            className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#C9A46A] via-[#DFBE85] to-[#B58742] text-[#2D2622] font-poppins text-xs sm:text-sm font-semibold tracking-wider shadow-lg hover:shadow-[#C9A46A]/40 transition-all text-center"
          >
            RSVP Now
          </button> */}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo("blessings")}
          aria-label="Scroll to blessings section"
          className="mt-2 text-[#7F8D70] hover:text-[#C9A46A] transition-colors flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-widest uppercase font-poppins">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
