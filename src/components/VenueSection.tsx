"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Navigation, Phone, Sparkles, Car, Plane } from "lucide-react";
import {
  VENUE_NAME,
  VENUE_CITY,
  VENUE_STATE,
  VENUE_FULL_ADDRESS,
  VENUE_MAPS_EMBED_SRC,
  VENUE_IMAGE_URL,
  CONCIERGE_PHONE,
} from "@/lib/wedding-config";

export default function VenueSection() {
  const query = encodeURIComponent(`${VENUE_FULL_ADDRESS}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section id="venue" className="relative py-20 sm:py-28 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Destination &amp; Hospitality
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          The Royal Venue
        </h2>
        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] mt-2">
          A timeless heritage sanctuary where royal Rajasthani architecture meets starlit romantic celebrations.
        </p>
      </div>

      {/* Luxury Venue Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#C9A46A]/35 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Venue Image & Highlights */}
          <div className="space-y-6">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#C9A46A]/30 shadow-md group">
              <Image
                src={VENUE_IMAGE_URL}
                alt={`${VENUE_NAME} Venue`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 500px"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2622]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest font-poppins text-[#DFBE85]">
                  {VENUE_CITY}, {VENUE_STATE}
                </span>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold mt-0.5">
                  {VENUE_NAME}
                </h3>
              </div>
            </div>

            {/* Logistics & Connectivity Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/70 border border-[#C9A46A]/20 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#DFBE85]/15 text-[#A37E3E]">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins text-xs font-semibold text-[#2D2622]">
                    Airport Connectivity
                  </h4>
                  <p className="font-poppins text-[11px] text-[#5C524A] mt-0.5">
                    25 mins from {VENUE_CITY} Airport (UDR). Chauffeured shuttles available.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-[#C9A46A]/20 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#DFBE85]/15 text-[#A37E3E]">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins text-xs font-semibold text-[#2D2622]">
                    Valet &amp; Parking
                  </h4>
                  <p className="font-poppins text-[11px] text-[#5C524A] mt-0.5">
                    Complimentary 24/7 valet parking and golf buggy services across palace lawns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed & Quick Action Buttons */}
          <div className="flex flex-col h-full justify-between">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#C9A46A]/30 shadow-inner">
              <iframe
                title="Wedding Venue Location Map"
                src={VENUE_MAPS_EMBED_SRC}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />
            </div>

            {/* Address & Direct CTA Buttons */}
            <div className="mt-6 pt-6 border-t border-[#C9A46A]/20">
              <p className="font-poppins text-xs text-[#5C524A] flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#C9A46A] flex-shrink-0" />
                <span>{VENUE_NAME}</span>
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] py-3 px-4 rounded-full bg-gradient-to-r from-[#C9A46A] via-[#DFBE85] to-[#B58742] text-[#2D2622] font-poppins text-xs font-semibold tracking-wide shadow-md hover:shadow-[#C9A46A]/30 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${CONCIERGE_PHONE}`}
                  className="flex-1 min-w-[130px] py-3 px-4 rounded-full bg-white hover:bg-[#FCFAF7] border border-[#C9A46A] text-[#2D2622] font-poppins text-xs font-medium tracking-wide shadow-sm hover:shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A46A]" />
                  <span>Call Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
