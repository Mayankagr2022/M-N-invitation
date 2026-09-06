"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { GROOM_FAMILY, BRIDE_FAMILY } from "@/lib/wedding-config";

export default function BlessingSection() {
  return (
    <section
      id="blessings"
      className="relative py-20 sm:py-28 px-4 max-w-5xl mx-auto text-center"
    >
      {/* Traditional Auspicious Ganesha / Vedic Invocation */}
      <div className="mb-10">
        <div className="inline-flex items-center justify-center mb-3">
          <span className="font-cormorant text-base sm:text-lg text-[#A37E3E] font-semibold tracking-widest px-4 py-1 border-b border-[#C9A46A]/40">
            || श्री गणेशाय नमः ||
          </span>
        </div>
        <p className="font-cormorant text-sm sm:text-base text-[#5C524A] italic max-w-xl mx-auto">
          &ldquo;वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥&rdquo;
        </p>
        <p className="font-poppins text-[11px] sm:text-xs text-[#7F8D70] mt-1 tracking-wider">
          May Lord Ganesha remove all obstacles and bless this sacred union with boundless joy, love, and longevity.
        </p>
      </div>

      {/* Section Heading with Decorative Floral Flourish */}
      <div className="relative mb-14">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#A37E3E] font-poppins font-medium">
          With Reverence &amp; Love
        </p>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium mt-1">
          Together With Our Families
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#C9A46A]" />
          <span className="text-[#C9A46A] text-sm">❦</span>
          <Sparkles className="w-4 h-4 text-[#C9A46A]" />
          <span className="text-[#C9A46A] text-sm">❦</span>
          <span className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#C9A46A]" />
        </div>
      </div>

      {/* Parents Cards (Two Symmetrical Luxury Glass Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
        {/* Groom's Family Card */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 relative overflow-hidden text-center border border-[#C9A46A]/30">
          {/* Subtle Arch Decor Top */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#DFBE85] via-[#C9A46A] to-[#DFBE85]" />
          <div className="inline-block px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#C9A46A]/30 text-[11px] uppercase tracking-widest text-[#A37E3E] font-poppins mb-4">
            Groom&apos;s Family
          </div>

          <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2D2622] font-semibold mb-2">
            The {GROOM_FAMILY.surname} Family
          </h3>
          <p className="font-poppins text-xs text-[#7F8D70] uppercase tracking-wider mb-6">
            Cordially Invite You
          </p>

          <div className="space-y-3 py-3 border-y border-[#C9A46A]/15 my-4">
            <div>
              <p className="text-xs text-[#5C524A] font-poppins uppercase tracking-widest">
                Loving Parents
              </p>
              <p className="font-cormorant text-xl sm:text-2xl text-[#2D2622] font-medium mt-0.5">
                {GROOM_FAMILY.parents}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5C524A] font-poppins uppercase tracking-widest">
                With Blessings Of
              </p>
              <p className="font-cormorant text-lg sm:text-xl text-[#5C524A] italic">
                {GROOM_FAMILY.grandparents}
              </p>
            </div>
          </div>

          <p className="font-poppins text-xs text-[#7F8D70] italic">
            &ldquo;{GROOM_FAMILY.message}&rdquo;
          </p>
        </div>

        {/* Bride's Family Card */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 relative overflow-hidden text-center border border-[#C9A46A]/30">
          {/* Subtle Arch Decor Top */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#DFBE85] via-[#C9A46A] to-[#DFBE85]" />
          <div className="inline-block px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#C9A46A]/30 text-[11px] uppercase tracking-widest text-[#A37E3E] font-poppins mb-4">
            Bride&apos;s Family
          </div>

          <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2D2622] font-semibold mb-2">
            The {BRIDE_FAMILY.surname} Family
          </h3>
          <p className="font-poppins text-xs text-[#7F8D70] uppercase tracking-wider mb-6">
            Cordially Invite You
          </p>

          <div className="space-y-3 py-3 border-y border-[#C9A46A]/15 my-4">
            <div>
              <p className="text-xs text-[#5C524A] font-poppins uppercase tracking-widest">
                Loving Parents
              </p>
              <p className="font-cormorant text-xl sm:text-2xl text-[#2D2622] font-medium mt-0.5">
                {BRIDE_FAMILY.parents}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5C524A] font-poppins uppercase tracking-widest">
                With Blessings Of
              </p>
              <p className="font-cormorant text-lg sm:text-xl text-[#5C524A] italic">
                {BRIDE_FAMILY.grandparents}
              </p>
            </div>
          </div>

          <p className="font-poppins text-xs text-[#7F8D70] italic">
            &ldquo;{BRIDE_FAMILY.message}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
