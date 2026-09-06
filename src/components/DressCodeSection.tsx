"use client";

import React, { useState } from "react";
import { Sparkles, Shirt, Scissors, Check, Info } from "lucide-react";

interface Swatch {
  name: string;
  hex: string;
  category: "neutral" | "pastel" | "accent";
  description: string;
}

const swatches: Swatch[] = [
  {
    name: "Royal Ivory",
    hex: "#F8F5F0",
    category: "neutral",
    description: "Classic silk sherwanis & organza drapes",
  },
  {
    name: "Champagne Gold",
    hex: "#C9A46A",
    category: "accent",
    description: "Zari brocades & shimmering accents",
  },
  {
    name: "Soft Sage Green",
    hex: "#A8B59A",
    category: "pastel",
    description: "Serene botanical lehengas & kurtas",
  },
  {
    name: "Dusty Rose Pink",
    hex: "#D8A48F",
    category: "pastel",
    description: "Romantic georgette sarees & bandhgalas",
  },
  {
    name: "Warm Beige",
    hex: "#E5D9C5",
    category: "neutral",
    description: "Linen suits & raw silk ensembles",
  },
  {
    name: "Blush Peach",
    hex: "#F7D7C4",
    category: "pastel",
    description: "Delicate Chikankari & organza lehengas",
  },
];

export default function DressCodeSection() {
  const [activeSwatch, setActiveSwatch] = useState<Swatch>(swatches[1]);

  return (
    <section id="dresscode" className="relative py-20 sm:py-28 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Aesthetic &amp; Attire
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          Dress Code: Luxury Pastels
        </h2>
        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] mt-2">
          We invite our cherished guests to embrace soft pastel tones and royal Indian heritage textures.
        </p>
      </div>

      {/* Interactive Color Palette Swatches */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#C9A46A]/30 mb-10 shadow-lg text-center">
        <p className="text-xs uppercase tracking-widest font-poppins text-[#A37E3E] font-medium mb-5">
          Curated Celebration Palette — Tap Swatch to Preview
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {swatches.map((swatch, idx) => {
            const isSelected = activeSwatch.name === swatch.name;

            return (
              <button
                key={idx}
                onClick={() => setActiveSwatch(swatch)}
                className={`group flex flex-col items-center gap-2 p-2 rounded-2xl transition-all ${
                  isSelected
                    ? "scale-110 ring-2 ring-[#C9A46A] bg-white/80 shadow-md"
                    : "hover:scale-105"
                }`}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C9A46A]/40 shadow-inner flex items-center justify-center relative"
                  style={{ backgroundColor: swatch.hex }}
                >
                  {isSelected && (
                    <Check className="w-5 h-5 text-[#2D2622] drop-shadow-sm" />
                  )}
                </div>
                <span className="text-[11px] font-poppins text-[#2D2622] font-medium">
                  {swatch.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Swatch Description Callout */}
        <div className="mt-6 pt-4 border-t border-[#C9A46A]/20">
          <p className="text-xs font-poppins text-[#5C524A]">
            <span className="font-semibold text-[#2D2622]">{activeSwatch.name}</span>:{" "}
            {activeSwatch.description}
          </p>
        </div>
      </div>

      {/* Men & Women Style Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gentlemen */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 border border-[#C9A46A]/30 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#C9A46A]/30 flex items-center justify-center mb-4 shadow-sm text-[#A37E3E]">
              <Shirt className="w-6 h-6" />
            </div>

            <span className="text-[11px] uppercase tracking-widest font-poppins text-[#A37E3E] font-medium">
              Attire Guide
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2D2622] font-semibold mt-1 mb-3">
              For The Gentlemen
            </h3>

            <p className="font-poppins text-xs sm:text-sm text-[#5C524A] leading-relaxed mb-4">
              Ivory, champagne or almond beige **Sherwanis**, tailored **Bandhgalas**, or classic evening **Tuxedos**. Pair with pastel silk pocket squares and mojaris.
            </p>

            <ul className="space-y-2 text-xs font-poppins text-[#2D2622]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A46A]" />
                Day Events: Cotton-silk Kurta sets &amp; Nehru jackets
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A46A]" />
                Evening: Regal Bandhgala or Deep Navy/Ivory Suit
              </li>
            </ul>
          </div>
        </div>

        {/* Ladies */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 border border-[#C9A46A]/30 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#C9A46A]/30 flex items-center justify-center mb-4 shadow-sm text-[#B76E79]">
              <Scissors className="w-6 h-6" />
            </div>

            <span className="text-[11px] uppercase tracking-widest font-poppins text-[#A37E3E] font-medium">
              Attire Guide
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2D2622] font-semibold mt-1 mb-3">
              For The Ladies
            </h3>

            <p className="font-poppins text-xs sm:text-sm text-[#5C524A] leading-relaxed mb-4">
              Pastel **Sarees**, shimmering **Lehengas**, or elegant **Anarkalis** in blush pink, sage green, champagne gold, or lilac, decorated with zari or sequins.
            </p>

            <ul className="space-y-2 text-xs font-poppins text-[#2D2622]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
                Day Events: Breezy florals, organza, &amp; Chikankari
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
                Wedding &amp; Reception: Heavy silk or zardozi lehengas
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footwear & Weather Advisory Note */}
      <div className="mt-8 p-4 rounded-2xl bg-[#FCFAF7] border border-[#A8B59A]/30 flex items-center gap-3 text-xs font-poppins text-[#5C524A]">
        <Info className="w-5 h-5 text-[#7F8D70] flex-shrink-0" />
        <span>
          <strong>Helpful Tip:</strong> Since parts of the ceremonies are on manicured palace lawns, block heels or traditional juttis are recommended over stilettos. Evening breezes in February are pleasantly cool (14°C - 18°C), so a light shawl or stole will keep you cozy!
        </span>
      </div>
    </section>
  );
}
