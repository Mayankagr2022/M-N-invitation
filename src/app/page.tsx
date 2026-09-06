"use client";

import React, { useState } from "react";
import EnvelopeSplash from "@/components/EnvelopeSplash";
import PetalCanvas from "@/components/PetalCanvas";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/HeroSection";
import BlessingSection from "@/components/BlessingSection";
import CountdownSection from "@/components/CountdownSection";
import OurStoryTimeline from "@/components/OurStoryTimeline";
import WeddingEvents from "@/components/WeddingEvents";
import VenueSection from "@/components/VenueSection";
import DressCodeSection from "@/components/DressCodeSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import RSVPSection from "@/components/RSVPSection";
import GiftsBlessingsSection from "@/components/GiftsBlessingsSection";
import ContactSection from "@/components/ContactSection";
import ThankYouSection from "@/components/ThankYouSection";
import BottomNav from "@/components/BottomNav";

export default function WeddingPage() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [shouldAutoStartMusic, setShouldAutoStartMusic] = useState(false);

  const handleOpenEnvelope = () => {
    setShouldAutoStartMusic(true);
    setEnvelopeOpened(true);
  };

  const handleReopenEnvelope = () => {
    setEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#F8F5F0] text-[#2D2622] selection:bg-[#DFBE85]/30">
      {/* 1. Interactive Luxury 3D Envelope Splash Screen */}
      <EnvelopeSplash
        isOpen={envelopeOpened}
        onOpen={handleOpenEnvelope}
      />

      {/* Floating Petal & Gold Shimmer Canvas Background */}
      <PetalCanvas />

      {/* Floating Royal Indian Instrumental Music Player */}
      <MusicPlayer shouldAutoStart={shouldAutoStartMusic} />

      {/* 1. Live Countdown Section */}
      <CountdownSection />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Blessing Section */}
      <BlessingSection />

      {/* 4. Our Story Timeline */}
      <OurStoryTimeline />

      {/* 5. Wedding Events Showcase */}
      <WeddingEvents />

      {/* 6. Royal Venue & Google Maps */}
      <VenueSection />

      {/* 7. Dress Code & Pastel Palette */}
      {/* <DressCodeSection /> */}

      {/* 8. 30-Photo Masonry Lightbox Gallery */}
      <GallerySection />

      {/* 9. Cinematic Wedding Invitation Film */}
      <VideoSection />

      {/* 10. Luxury RSVP System */}
      {/* <RSVPSection /> */}

      {/* 11. Gift & Blessings */}
      {/* <GiftsBlessingsSection /> */}

      {/* 12. Contact & Concierge */}
      <ContactSection />

      {/* 13. Thank You Screen */}
      <ThankYouSection onReopenEnvelope={handleReopenEnvelope} />

      {/* Sticky Floating Bottom Navigation */}
      <BottomNav />
    </main>
  );
}
