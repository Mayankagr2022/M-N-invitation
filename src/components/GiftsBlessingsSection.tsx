"use client";

import React, { useState } from "react";
import { Sparkles, Heart, Gift, QrCode, Copy, Check } from "lucide-react";
import { UPI_ID } from "@/lib/wedding-config";

export default function GiftsBlessingsSection() {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="blessings-gift" className="relative py-20 sm:py-24 px-4 max-w-4xl mx-auto text-center">
      {/* Section Container */}
      <div className="glass-card rounded-3xl p-8 sm:p-14 border border-[#C9A46A]/35 shadow-xl relative overflow-hidden">
        {/* Top Gold Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A46A] to-transparent" />

        <div className="w-14 h-14 rounded-full bg-[#DFBE85]/20 border border-[#C9A46A]/40 flex items-center justify-center mx-auto mb-6 text-[#A37E3E]">
          <Gift className="w-7 h-7" />
        </div>

        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
          With Gratitude &amp; Humility
        </span>

        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium mt-2 mb-4">
          Your Presence Is Our Greatest Gift
        </h2>

        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] max-w-lg mx-auto leading-relaxed">
          Having you celebrate by our side, sharing laughs, memories, and prayers for our future, is more meaningful to us than anything else in the world.
        </p>

        {/* Traditional No Boxed Gifts Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-[#A8B59A]/40 text-xs font-poppins text-[#7F8D70] shadow-sm my-6">
          <Heart className="w-3.5 h-3.5 text-[#B76E79] fill-[#B76E79]" />
          <span>Blessings Only • No Boxed Gifts Please</span>
        </div>

        {/* Optional Shagun Blessing QR Toggle */}
        <div className="mt-4">
          <button
            onClick={() => setShowQR(!showQR)}
            className="text-xs font-poppins text-[#A37E3E] hover:text-[#2D2622] transition-colors underline underline-offset-4 inline-flex items-center gap-1.5"
          >
            <QrCode className="w-4 h-4" />
            <span>{showQR ? "Hide Traditional Shagun Option" : "Optional Traditional Shagun / Ashirwad"}</span>
          </button>

          {showQR && (
            <div className="mt-6 p-6 rounded-2xl bg-[#FCFAF7] border border-[#C9A46A]/30 max-w-xs mx-auto shadow-inner animate-fadeIn">
              <div className="w-40 h-40 bg-white rounded-xl border-2 border-[#C9A46A]/30 p-2 mx-auto flex items-center justify-center shadow-sm">
                {/* Clean Vector QR Placeholder with Couple Initials */}
                <div className="w-full h-full border border-dashed border-[#DFBE85] rounded-lg flex flex-col items-center justify-center text-center p-2">
                  <QrCode className="w-16 h-16 text-[#C9A46A] mb-1" />
                  <span className="font-great-vibes text-sm text-[#2D2622]">M &amp; N</span>
                  <span className="text-[9px] font-mono text-[#7F8D70]">{UPI_ID}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="font-mono text-xs text-[#2D2622]">{UPI_ID}</span>
                <button
                  onClick={handleCopyUPI}
                  className="p-1.5 rounded-lg bg-white border border-[#C9A46A]/30 hover:bg-[#FCFAF7] text-[#C9A46A] transition-colors"
                  aria-label="Copy UPI ID"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-[10px] font-poppins text-[#7F8D70] mt-2">
                For elder relatives wishing to bestow sacred contactless Shagun.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
