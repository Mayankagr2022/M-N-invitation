"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Sun,
  Flame,
  Music2,
  HeartHandshake,
  Wine,
} from "lucide-react";
import {
  WEDDING_EVENTS,
  GROOM_NAME,
  BRIDE_NAME,
  type WeddingEventConfig,
} from "@/lib/wedding-config";

const ICON_MAP: Record<WeddingEventConfig["iconName"], React.ReactNode> = {
  Sun: <Sun className="w-5 h-5 text-amber-500" />,
  Flame: <Flame className="w-5 h-5 text-emerald-600" />,
  Music2: <Music2 className="w-5 h-5 text-indigo-600" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-rose-600" />,
  Wine: <Wine className="w-5 h-5 text-amber-600" />,
};

export default function WeddingEvents() {
  const addToCalendar = (ev: WeddingEventConfig) => {
    const title = encodeURIComponent(`${GROOM_NAME} & ${BRIDE_NAME} — ${ev.title}`);
    const details = encodeURIComponent(
      `${ev.subTitle}\nTheme: ${ev.theme}\nDress Code: ${ev.dressCode}\nVenue: ${ev.venue}`
    );
    const location = encodeURIComponent(ev.venue);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${ev.calendarDates}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  return (
    <section id="events" className="relative py-20 sm:py-28 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Celebrations &amp; Festivities
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          Wedding Itinerary
        </h2>
        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] mt-2">
          Join us for three unforgettable days of music, love, tradition, and timeless joy.
        </p>
      </div>

      {/* Events Alternating Grid */}
      <div className="space-y-12 sm:space-y-16">
        {WEDDING_EVENTS.map((ev, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-10 border border-[#C9A46A]/30 flex flex-col md:flex-row gap-8 items-center ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Event Themed Image */}
              <div className="w-full md:w-1/2 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-[#C9A46A]/25 group">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Date Badge inside image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C9A46A]/40 flex items-center gap-2 text-xs font-poppins text-[#2D2622] font-medium shadow">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A46A]" />
                  <span>{ev.date}</span>
                </div>
              </div>

              {/* Event Content Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-xl bg-white border border-[#C9A46A]/30 shadow-sm">
                      {ICON_MAP[ev.iconName]}
                    </div>
                    <span
                      className={`text-[11px] font-poppins font-medium px-3 py-1 rounded-full border ${ev.badgeBg}`}
                    >
                      {ev.theme}
                    </span>
                  </div>

                  <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2D2622] font-semibold">
                    {ev.title}
                  </h3>
                  <p className="font-cormorant text-base sm:text-lg text-[#A37E3E] italic mb-4">
                    {ev.subTitle}
                  </p>

                  <p className="font-poppins text-xs sm:text-sm text-[#5C524A] leading-relaxed mb-6">
                    {ev.description}
                  </p>

                  {/* Key Metadata Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs font-poppins text-[#2D2622]">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/60 border border-[#C9A46A]/20">
                      <Clock className="w-4 h-4 text-[#C9A46A]" />
                      <span>{ev.time}</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/60 border border-[#C9A46A]/20">
                      <Sparkles className="w-4 h-4 text-[#B76E79]" />
                      <span className="truncate">Attire: {ev.dressCode}</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/60 border border-[#C9A46A]/20 sm:col-span-2">
                      <MapPin className="w-4 h-4 text-[#7F8D70]" />
                      <span className="truncate">{ev.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Calendar Button */}
                <div>
                  <button
                    onClick={() => addToCalendar(ev)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FCFAF7] border border-[#C9A46A] text-[#2D2622] font-poppins text-xs font-medium tracking-wide shadow-sm hover:shadow-md transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C9A46A]" />
                    <span>Add {ev.title.split(" ")[0]} to Calendar</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
