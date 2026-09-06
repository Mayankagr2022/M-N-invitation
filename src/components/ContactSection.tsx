"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  Sparkles,
  ChevronDown,
  User,
} from "lucide-react";
import { CONTACT_GROOM_SIDE, CONTACT_BRIDE_SIDE } from "@/lib/wedding-config";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What will the weather in Udaipur be like in February?",
    answer:
      "February in Udaipur is idyllic and pleasant! Daytime temperatures range from 22°C to 26°C with sunny blue skies, and drop to a cool 12°C to 16°C at night. A light shawl, blazer, or pashmina is ideal for evening lawn ceremonies.",
  },
  {
    question: "Is transport arranged from Udaipur Airport (UDR) or Railway Station?",
    answer:
      "Yes! Our dedicated hospitality team has arranged luxury shuttle transfers for all confirmed guests arriving at Udaipur Airport and Udaipur Junction. Please share your flight or train itinerary on WhatsApp with our concierge.",
  },
  {
    question: "Are accommodations booked at the venue?",
    answer:
      "Yes, guest suites are arranged at the palace resort for out-of-town guests from 10th to 14th February. Check-in is at 12:00 PM on 10th February.",
  },
  {
    question: "Are special dietary requirements accommodated?",
    answer:
      "All meals feature extensive culinary stations including Pure Vegetarian, Jain Vegetarian, and Continental selections prepared in separate hygienic kitchens.",
  },
];

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contacts = [
    { data: CONTACT_GROOM_SIDE, side: "Groom", accentClass: "text-[#A37E3E]", badgeClass: "text-[#A37E3E] bg-[#DFBE85]/15" },
    { data: CONTACT_BRIDE_SIDE, side: "Bride", accentClass: "text-[#B76E79]", badgeClass: "text-[#B76E79] bg-[#B76E79]/15" },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Here To Assist You
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          Wedding Concierge &amp; Contacts
        </h2>
        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] mt-2">
          Have questions about travel, logistics, or accommodations? Our family coordinators are at your service.
        </p>
      </div>

      {/* Two Elegant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {contacts.map(({ data, side, accentClass, badgeClass }) => (
          <div
            key={side}
            className="glass-card glass-card-hover rounded-3xl p-8 border border-[#C9A46A]/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs uppercase tracking-widest font-poppins font-semibold px-3 py-1 rounded-full ${badgeClass}`}
                >
                  {side}&apos;s Side Coordinator
                </span>
                <div className={`w-10 h-10 rounded-full bg-white border border-[#C9A46A]/30 flex items-center justify-center ${accentClass}`}>
                  <User className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-cormorant text-2xl text-[#2D2622] font-semibold">
                {data.name}
              </h3>
              <p className="font-poppins text-xs text-[#7F8D70] mb-4">
                {data.role}
              </p>
              <p className="font-poppins text-xs text-[#5C524A] leading-relaxed mb-6">
                {data.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#C9A46A]/15">
              <a
                href={`tel:${data.phone}`}
                className="flex-1 py-2.5 px-3 rounded-full bg-white hover:bg-[#FCFAF7] border border-[#C9A46A] text-[#2D2622] font-poppins text-xs font-medium flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A46A]" />
                <span>Call</span>
              </a>
              <a
                href={`https://wa.me/${data.phone.replace("+", "")}?text=${encodeURIComponent(data.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#1E7E34] font-poppins text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${data.email}`}
                className="py-2.5 px-3 rounded-full bg-white hover:bg-[#FCFAF7] border border-stone-200 text-[#5C524A] font-poppins text-xs font-medium flex items-center justify-center"
                aria-label={`Email ${data.name}`}
              >
                <Mail className="w-3.5 h-3.5 text-[#7F8D70]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
