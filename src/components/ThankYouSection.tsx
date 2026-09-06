"use client";

import React from "react";
import { Heart, ArrowUp, Sparkles, MailOpen } from "lucide-react";
import {
  GROOM_NAME,
  BRIDE_NAME,
  WEDDING_DATE_DISPLAY,
  VENUE_CITY,
  VENUE_STATE,
  HASHTAG,
} from "@/lib/wedding-config";

interface ThankYouSectionProps {
  onReopenEnvelope?: () => void;
}

export default function ThankYouSection({ onReopenEnvelope }: ThankYouSectionProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="thankyou"
      className="relative min-h-[85vh] flex flex-col items-center justify-between py-20 sm:py-28 px-4 text-center overflow-hidden border-t border-[#C9A46A]/20"
      style={{
        backgroundImage: `radial-gradient(ellipse at 50% 60%, rgba(201, 164, 106, 0.16) 0%, rgba(248, 245, 240, 1) 75%)`,
      }}
    >
      {/* Decorative Traditional Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] opacity-[0.05] pointer-events-none -z-10 animate-[spin_100s_linear_infinite]">
        <svg viewBox="0 0 400 400" className="w-full h-full fill-none stroke-[#C9A46A]" strokeWidth="1.5">
          <circle cx="200" cy="200" r="180" />
          <circle cx="200" cy="200" r="140" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="100" />
          {[...Array(16)].map((_, i) => (
            <path
              key={i}
              d="M200 20 C 220 100, 220 100, 200 200 C 180 100, 180 100, 200 20"
              transform={`rotate(${i * 22.5} 200 200)`}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-2xl mx-auto my-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Forever In Our Hearts
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
        </div>

        <h2 className="font-cormorant text-4xl sm:text-6xl text-[#2D2622] font-medium leading-tight">
          Thank You For Celebrating With Us
        </h2>

        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] max-w-md mx-auto leading-relaxed">
          We cannot wait to embrace you in {VENUE_CITY}, dance with all our hearts, and embark upon this sacred journey surrounded by your love.
        </p>

        {/* Names */}
        <div className="pt-2">
          <p className="font-great-vibes text-5xl sm:text-7xl text-[#2D2622]">
            {GROOM_NAME}
            <span className="inline-flex items-center justify-center mx-3 align-middle">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#B76E79] fill-[#B76E79]" />
            </span>
            {BRIDE_NAME}
          </p>
          <p className="font-cormorant text-lg sm:text-xl text-[#A37E3E] tracking-widest uppercase font-semibold mt-2">
            {WEDDING_DATE_DISPLAY} • {VENUE_CITY}, {VENUE_STATE}
          </p>
        </div>

        {/* Action Buttons: Re-experience envelope & Scroll to top */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          {onReopenEnvelope && (
            <button
              onClick={onReopenEnvelope}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FCFAF7] border border-[#C9A46A] text-[#2D2622] font-poppins text-xs font-medium shadow-sm transition-all"
            >
              <MailOpen className="w-4 h-4 text-[#C9A46A]" />
              <span>Replay Invitation Envelope</span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D2622] text-white hover:bg-[#4A4540] font-poppins text-xs font-medium shadow-md transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* Bottom Copyright & Design Credit */}
      <div className="w-full pt-10 text-center border-t border-[#C9A46A]/10 text-[11px] font-poppins text-[#7F8D70]">
        <p>Crafted with endless love for {GROOM_NAME} &amp; {BRIDE_NAME} • {HASHTAG}</p>
      </div>
    </footer>
  );
}
