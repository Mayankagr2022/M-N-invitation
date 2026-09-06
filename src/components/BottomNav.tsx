"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  BookOpen,
  CalendarDays,
  Image as GalleryIcon,
  HeartHandshake,
  PhoneCall,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: <Home className="w-4 h-4" /> },
  { id: "story", label: "Story", icon: <BookOpen className="w-4 h-4" /> },
  { id: "events", label: "Events", icon: <CalendarDays className="w-4 h-4" /> },
  { id: "gallery", label: "Gallery", icon: <GalleryIcon className="w-4 h-4" /> },
  // { id: "rsvp", label: "RSVP", icon: <HeartHandshake className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <PhoneCall className="w-4 h-4" /> },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none pb-safe"
    >
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full glass-nav border border-[#C9A46A]/35 shadow-2xl transition-all max-w-md w-full justify-between">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 sm:px-3 rounded-full transition-all duration-300 relative group ${
                isActive
                  ? "text-[#2D2622] font-semibold"
                  : "text-[#5C524A] hover:text-[#C9A46A]"
              }`}
            >
              {/* Active pill background */}
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-[#DFBE85]/25 border border-[#C9A46A]/40 -z-10 animate-fadeIn" />
              )}

              <div
                className={`transition-transform duration-300 ${
                  isActive ? "scale-110 text-[#C9A46A]" : "group-hover:scale-105"
                }`}
              >
                {item.icon}
              </div>

              <span className="text-[10px] sm:text-[11px] font-poppins tracking-wider mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
