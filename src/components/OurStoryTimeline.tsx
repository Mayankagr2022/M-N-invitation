"use client";

import React from "react";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import { STORY_MILESTONES } from "@/lib/wedding-config";

export default function OurStoryTimeline() {
  return (
    <section id="story" className="relative py-20 sm:py-28 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <Heart className="w-3.5 h-3.5 text-[#B76E79] fill-[#B76E79]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Our Chapters
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          How Our Story Unfolded
        </h2>
        <p className="font-cormorant text-lg sm:text-xl text-[#7F8D70] italic mt-2">
          &ldquo;Every love story is beautiful, but ours is our favorite.&rdquo;
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Central Connecting Gold Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DFBE85] via-[#C9A46A] to-[#A8B59A] -translate-x-1/2 opacity-50" />

        {/* Milestones */}
        <div className="space-y-12 sm:space-y-20">
          {STORY_MILESTONES.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-12 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node (Year / Heart Pill) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FCFAF7] border-2 border-[#C9A46A] shadow-lg flex items-center justify-center text-[#A37E3E] font-poppins text-xs font-semibold">
                    <Sparkles className="w-4 h-4 text-[#C9A46A]" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 w-[calc(100%-3rem)]">
                  <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-[#C9A46A]/30 overflow-hidden group">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs uppercase tracking-widest font-poppins text-[#A37E3E] font-medium px-3 py-1 rounded-full bg-[#DFBE85]/15">
                        {item.year} • {item.tag}
                      </span>
                    </div>

                    <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2D2622] font-semibold">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-xs text-[#7F8D70] uppercase tracking-wider mb-4">
                      {item.subtitle}
                    </p>

                    {/* Milestone Image */}
                    <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-4 border border-[#C9A46A]/20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    <p className="font-poppins text-xs sm:text-sm text-[#5C524A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for alignment on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
