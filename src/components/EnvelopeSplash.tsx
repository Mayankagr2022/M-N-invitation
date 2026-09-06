"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Heart, Music } from "lucide-react";
import {
  GROOM_NAME,
  BRIDE_NAME,
  TAGLINE,
  WEDDING_DATE_DISPLAY,
  VENUE_CITY,
  VENUE_STATE,
  WEDDING_YEAR,
} from "@/lib/wedding-config";

interface EnvelopeSplashProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function EnvelopeSplash({ onOpen, isOpen }: EnvelopeSplashProps) {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [fadingOut, setFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsOpenState(false);
      setFadingOut(false);
      setIsDone(false);
    }
  }, [isOpen]);

  const handleOpenEnvelope = () => {
    if (isOpenState) return;
    setIsOpenState(true);
    onOpen();

    // Sequence:
    // 0ms: Wax seal breaks & flap rotates 180deg
    // 350ms: Card slides up in front
    // 2100ms: Smooth cinematic fade-out begins
    // 2700ms: Complete transition to hero
    setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        setIsDone(true);
      }, 700);
    }, 2100);
  };

  if (isDone) {
    return null;
  }

  return (
    <div
      onClick={handleOpenEnvelope}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-4 select-none transition-opacity duration-700 cursor-pointer overflow-hidden ${fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      style={{
        background: `radial-gradient(ellipse at 50% 45%, #FDFBF7 0%, #F3EBDD 60%, #E5DAC6 100%)`,
      }}
    >
      {/* Background Rotating Ornate Royal Mandalas */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.06] -z-10">
        <svg
          viewBox="0 0 800 800"
          className="w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] animate-[spin_120s_linear_infinite]"
          fill="none"
          stroke="#C9A46A"
          strokeWidth="1.5"
        >
          <circle cx="400" cy="400" r="380" />
          <circle cx="400" cy="400" r="340" strokeDasharray="6 6" />
          <circle cx="400" cy="400" r="280" />
          <circle cx="400" cy="400" r="220" strokeDasharray="4 4" />
          <circle cx="400" cy="400" r="160" />
          <circle cx="400" cy="400" r="100" />
          {[...Array(24)].map((_, i) => (
            <path
              key={i}
              d="M400 20 C 430 200, 430 200, 400 400 C 370 200, 370 200, 400 20"
              transform={`rotate(${i * 15} 400 400)`}
            />
          ))}
        </svg>
      </div>

      {/* Ornate Gold Filigree Corner Frames */}
      <div className="absolute top-5 left-5 w-24 sm:w-36 h-24 sm:h-36 border-t-2 border-l-2 border-[#C9A46A]/70 rounded-tl-[32px] pointer-events-none">
        <span className="absolute top-2 left-2 text-[#C9A46A] text-xs">✦</span>
      </div>
      <div className="absolute top-5 right-5 w-24 sm:w-36 h-24 sm:h-36 border-t-2 border-r-2 border-[#C9A46A]/70 rounded-tr-[32px] pointer-events-none">
        <span className="absolute top-2 right-2 text-[#C9A46A] text-xs">✦</span>
      </div>
      <div className="absolute bottom-5 left-5 w-24 sm:w-36 h-24 sm:h-36 border-b-2 border-l-2 border-[#C9A46A]/70 rounded-bl-[32px] pointer-events-none">
        <span className="absolute bottom-2 left-2 text-[#C9A46A] text-xs">✦</span>
      </div>
      <div className="absolute bottom-5 right-5 w-24 sm:w-36 h-24 sm:h-36 border-b-2 border-r-2 border-[#C9A46A]/70 rounded-br-[32px] pointer-events-none">
        <span className="absolute bottom-2 right-2 text-[#C9A46A] text-xs">✦</span>
      </div>

      {/* Top Auspicious Header Banner */}
      <div className="text-center mb-6 sm:mb-8 animate-fadeIn pointer-events-none">
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/95 border border-[#C9A46A]/50 text-xs tracking-[0.25em] uppercase font-poppins text-[#A37E3E] shadow-md mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span>The Royal Wedding Invitation</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
        </div>
        <h2 className="font-cormorant text-2xl sm:text-4xl text-[#2D2622] font-semibold tracking-wide">
          {GROOM_NAME} <span className="text-[#C9A46A] font-great-vibes text-3xl sm:text-5xl align-middle mx-1">&amp;</span> {BRIDE_NAME}
        </h2>
        <p className="font-poppins text-xs text-[#7F8D70] tracking-[0.2em] uppercase mt-1 font-medium">
          • {VENUE_CITY}, {VENUE_STATE}
        </p>
      </div>

      {/* 3D Envelope & Royal Card Stage */}
      <div className="relative w-[340px] sm:w-[480px] h-[240px] sm:h-[300px] flex items-center justify-center group">
        {/* Soft Golden Halo Ambient Glow */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#DFBE85]/30 via-[#C9A46A]/20 to-[#DFBE85]/30 blur-2xl opacity-80 pointer-events-none" />

        {/* 1. ENVELOPE BASE BACKPLATE */}
        <div className="absolute inset-0 rounded-2xl bg-[#FCFAF5] border-2 border-[#C9A46A] shadow-[0_20px_50px_rgba(163,126,62,0.22)] overflow-hidden z-0">
          <div
            className="w-full h-full opacity-20"
            style={{
              backgroundImage: `radial-gradient(#C9A46A 1.5px, transparent 1.5px)`,
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        {/* 2. TOP ENVELOPE FLAP (3D Fold with gold edge) */}
        <div
          className={`absolute inset-x-0 top-0 h-1/2 rounded-t-2xl origin-top transition-transform duration-700 ease-in-out z-20 ${isOpenState
            ? "-rotate-180 -translate-y-1 shadow-none"
            : "rotate-0 shadow-lg"
            }`}
          style={{
            transformOrigin: "top center",
          }}
        >
          <div
            className="w-full h-full bg-gradient-to-b from-[#EBE0CD] via-[#F4EDE0] to-[#FAF5EB] border-t-2 border-x-2 border-[#C9A46A]"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            }}
          />
        </div>

        {/* 3. ENVELOPE FRONT POUCH (Opaque Luxury Cream) */}
        <div
          className="absolute inset-0 rounded-2xl z-10 pointer-events-none shadow-md"
          style={{
            clipPath: "polygon(0% 0%, 50% 52%, 100% 0%, 100% 100%, 0% 100%)",
            background: "linear-gradient(150deg, #FAF6EE 0%, #EFE7DA 100%)",
            border: "1px solid rgba(201, 164, 106, 0.45)",
          }}
        />
        <div
          className="absolute inset-0 rounded-2xl z-10 pointer-events-none shadow-inner"
          style={{
            clipPath: "polygon(0% 100%, 50% 48%, 100% 100%)",
            background: "linear-gradient(to top, #E7DBC9 0%, #FAF6EE 100%)",
            borderBottom: "2px solid #C9A46A",
          }}
        />

        {/* 4. THE ROYAL INVITATION CARD (Glides Up, Sits Proudly In Front) */}
        <div
          className={`absolute inset-x-2 sm:inset-x-4 top-2 rounded-2xl bg-white border-2 border-[#C9A46A] shadow-[0_25px_60px_-10px_rgba(45,38,34,0.35)] p-5 sm:p-7 flex flex-col items-center justify-between text-center transition-all duration-700 ease-out ${isOpenState
            ? "-translate-y-24 sm:-translate-y-32 scale-105 sm:scale-110 z-40 opacity-100 ring-4 ring-[#DFBE85]/40"
            : "translate-y-2 scale-95 opacity-0 z-0 pointer-events-none"
            }`}
          style={{
            backgroundImage: `radial-gradient(circle at 50% 20%, rgba(201, 164, 106, 0.08) 0%, #FFFFFF 80%)`,
          }}
        >
          {/* Sacred Ganesh Invocation & Filigree */}
          <div className="w-full flex items-center justify-center gap-2 pt-0.5">
            <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#C9A46A]" />
            <span className="font-cormorant text-[11px] sm:text-xs text-[#A37E3E] font-semibold tracking-widest">
              || श्री गणेशाय नमः ||
            </span>
            <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#C9A46A]" />
          </div>

          <div className="my-2">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
              Together With Our Families
            </p>
            <h1 className="font-great-vibes text-4xl sm:text-5xl text-[#2D2622] my-1 font-normal leading-tight drop-shadow-sm">
              {GROOM_NAME} &amp; {BRIDE_NAME}
            </h1>
            <p className="font-cormorant text-xs sm:text-sm text-[#5C524A] italic max-w-[280px] mx-auto">
              &ldquo;{TAGLINE}&rdquo;
            </p>
          </div>

          <div className="w-full border-t border-[#C9A46A]/30 pt-3">
            <p className="text-[11px] text-[#7F8D70] tracking-wider uppercase font-poppins font-medium">
              {VENUE_CITY} • {VENUE_STATE}
            </p>
          </div>
        </div>

        {/* 5. LUXURY ROYAL WAX SEAL (Embossed Monogram & Authentic Wax Rim) */}
        {!isOpenState && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            {/* Ambient Shadow & Glow */}
            <div className="absolute inset-0 rounded-full bg-[#B76E79]/30 blur-lg pointer-events-none" />

            {/* Organic Wax Outer Scalloped Ring */}
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1.5 flex items-center justify-center shadow-[0_12px_30px_rgba(139,30,30,0.35)] transition-all duration-300"
              style={{
                background: "radial-gradient(circle at 35% 30%, #C43D3D 0%, #8E1F1F 65%, #5E0F0F 100%)",
                boxShadow: "inset 0 3px 5px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.5), 0 14px 28px -4px rgba(94,15,15,0.45)",
                border: "1.5px solid rgba(255,215,140,0.35)",
              }}
            >
              {/* Inner Stamped Gold Monogram Plate */}
              <div
                className="w-full h-full rounded-full flex flex-col items-center justify-center text-center relative overflow-hidden"
                style={{
                  background: "radial-gradient(circle at 40% 35%, #9E2424 0%, #6E1212 85%)",
                  boxShadow: "inset 0 3px 6px rgba(0,0,0,0.6), inset 0 -1px 3px rgba(255,255,255,0.3), 0 1px 2px rgba(255,255,255,0.2)",
                  border: "1px dashed rgba(223, 190, 133, 0.55)",
                }}
              >
                {/* Auspicious Filigree Crest Top */}
                <span className="text-[9px] text-[#DFBE85] leading-none mb-0.5 opacity-90">✦ ❦ ✦</span>

                {/* Year Badge */}
                <span className="text-[7.5px] tracking-[0.25em] uppercase font-poppins text-[#DFBE85] font-semibold -mt-1 drop-shadow-sm">
                  {WEDDING_YEAR}
                </span>
              </div>

              {/* Delicate Gold Shimmer Ring */}
              <span className="absolute -inset-1 rounded-full border border-[#DFBE85]/40 animate-pulse pointer-events-none [animation-duration:3s]" />
            </div>
          </div>
        )}
      </div>

      {/* Tap Instruction Prompt Banner */}
      {!isOpenState && (
        <div className="mt-8 sm:mt-10 text-center z-40">
          <div className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A46A] via-[#DFBE85] to-[#B58742] text-[#2D2622] font-poppins text-xs sm:text-sm font-semibold tracking-wide shadow-xl hover:shadow-[#C9A46A]/50 hover:scale-105 transition-all">
            <Sparkles className="w-4 h-4 text-[#2D2622]" />
            <span>Tap Anywhere to Open Invitation</span>
            <Heart className="w-3.5 h-3.5 text-[#B76E79] fill-[#B76E79]" />
          </div>
          <p className="text-[11px] text-[#7F8D70] tracking-wider mt-2.5 font-poppins font-medium flex items-center justify-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-[#C9A46A]" />
            <span>Instrumental music begins upon opening</span>
          </p>
        </div>
      )}
    </div>
  );
}
