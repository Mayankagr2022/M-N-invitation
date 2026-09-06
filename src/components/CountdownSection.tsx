"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";
import { Calendar, Clock, Sparkles, Heart } from "lucide-react";
import {
  WEDDING_DATETIME_ISO,
  WEDDING_DATE_DISPLAY,
  WEDDING_CALENDAR_DATES,
  GROOM_NAME,
  BRIDE_NAME,
  VENUE_FULL_ADDRESS,
  VENUE_CITY,
  VENUE_STATE,
  TAGLINE,
  VENUE_NAME,
} from "@/lib/wedding-config";

// ─── Confetti Burst ────────────────────────────────────────────────────────────
function fireWeddingConfetti() {
  // Our palette: champagne gold, rose gold, ivory, sage
  const colors = ["#C9A46A", "#DFBE85", "#B76E79", "#F8F5F0", "#A8B59A", "#E7C98C", "#fff"];

  const base = { colors, ticks: 300, gravity: 0.9, scalar: 1.1 };

  // Left cannon
  confetti({ ...base, particleCount: 90, angle: 60, spread: 70, origin: { x: 0, y: 0.55 } });
  // Right cannon
  confetti({ ...base, particleCount: 90, angle: 120, spread: 70, origin: { x: 1, y: 0.55 } });

  // Delayed second volley from centre-top
  setTimeout(() => {
    confetti({ ...base, particleCount: 60, angle: 90, spread: 120, origin: { x: 0.5, y: 0.3 }, startVelocity: 28 });
  }, 250);

  // Trailing sparkle shower
  setTimeout(() => {
    confetti({ ...base, particleCount: 40, angle: 60, spread: 55, origin: { x: 0.1, y: 0.5 } });
    confetti({ ...base, particleCount: 40, angle: 120, spread: 55, origin: { x: 0.9, y: 0.5 } });
  }, 500);
}

// ─── Scratch Card ──────────────────────────────────────────────────────────────
const SCRATCH_THRESHOLD = 0.50;

interface ScratchCardProps {
  onReveal: () => void;
}

function ScratchCard({ onReveal }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const revealed = useRef(false);
  const [done, setDone] = useState(false);
  const [hinted, setHinted] = useState(false);

  // Draw the dark-navy + gold-star scratch overlay (matches screenshots)
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    // Deep navy background
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#1B2A4A");
    bg.addColorStop(0.5, "#152039");
    bg.addColorStop(1, "#0F1728");
    ctx.fillStyle = bg;
    ctx.beginPath();
    ctx.roundRect(0, 0, W, H, 20);
    ctx.fill();

    // Scattered gold sparkle dots
    const starColors = ["rgba(223,190,133,0.9)", "rgba(201,164,106,0.7)", "rgba(255,255,255,0.5)"];
    for (let i = 0; i < 55; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = Math.random() * 1.8 + 0.5;
      const sc = starColors[Math.floor(Math.random() * starColors.length)];
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = sc;
      ctx.fill();
    }

    // Gold border
    ctx.strokeStyle = "rgba(201,164,106,0.7)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(2, 2, W - 4, H - 4, 18);
    ctx.stroke();

    // ── Top label: ✦ SCRATCH TO REVEAL ✦
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#DFBE85";
    ctx.font = "600 11px 'Poppins', sans-serif";
    ctx.fillText("✦  SCRATCH TO REVEAL  ✦", W / 2, H / 2 - 20);

    ctx.fillStyle = "rgba(223,190,133,0.6)";
    ctx.font = "italic 10px 'Poppins', sans-serif";
    ctx.fillText("✦ our special day", W / 2, H / 2 - 4);

    // Finger / scratch icon
    ctx.font = "22px serif";
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    initCanvas();
    const t = setTimeout(() => setHinted(true), 900);
    return () => clearTimeout(t);
  }, [initCanvas]);

  const checkThreshold = useCallback(() => {
    if (revealed.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] < 100) transparent++;

    if (transparent / (canvas.width * canvas.height) > SCRATCH_THRESHOLD) {
      revealed.current = true;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setDone(true);
      onReveal();
    }
  }, [onReveal]);

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ("touches" in e) {
      return { x: (e.touches[0].clientX - rect.left) * scaleX, y: (e.touches[0].clientY - rect.top) * scaleY };
    }
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
  };

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 48;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.beginPath();
    ctx.moveTo(lastPos.current ? lastPos.current.x : x, lastPos.current ? lastPos.current.y : y);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastPos.current = { x, y };
    checkThreshold();
  };

  const onStart = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (done) return;
    e.preventDefault();
    isDrawing.current = true;
    lastPos.current = null;
    scratch(...Object.values(getPos(e)) as [number, number]);
  };

  const onMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || done) return;
    e.preventDefault();
    scratch(...Object.values(getPos(e)) as [number, number]);
  };

  const onEnd = () => { isDrawing.current = false; lastPos.current = null; checkThreshold(); };

  if (done) return null; // fully revealed — parent shows date card

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full rounded-2xl touch-none select-none transition-[filter] duration-200 ${hinted ? "animate-[scratchHint_2s_ease-in-out_1]" : ""
        }`}
      style={{ cursor: "pointer" }}
      onMouseDown={onStart}
      onMouseMove={onMove}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onTouchStart={onStart}
      onTouchMove={onMove}
      onTouchEnd={onEnd}
    />
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function CountdownSection() {
  const weddingDate = new Date(WEDDING_DATETIME_ISO).getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const diff = weddingDate - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [weddingDate]);

  const handleReveal = useCallback(() => {
    setRevealed(true);
    fireWeddingConfetti();
  }, []);

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent(`${GROOM_NAME} ❤️ ${BRIDE_NAME} Wedding Celebration`);
    const details = encodeURIComponent(
      `Together with our families, we invite you to celebrate the wedding of ${GROOM_NAME} & ${BRIDE_NAME} on ${WEDDING_DATE_DISPLAY}. ${TAGLINE}`
    );
    const location = encodeURIComponent(VENUE_FULL_ADDRESS);
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${WEDDING_CALENDAR_DATES}&details=${details}&location=${location}`,
      "_blank"
    );
  };

  const counterItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative py-20 sm:py-24 px-4 max-w-5xl mx-auto text-center overflow-hidden"
    >
      {/* Section header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <Clock className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Counting Down Every Moment
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          Until We Say &ldquo;I Do&rdquo;
        </h2>
        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] max-w-md mx-auto mt-2">
          The Auspicious Wedding Muhurat
        </p>
      </div>

      {/* ── Scratch / Reveal Card ─────────────────────────────── */}
      <div className="mx-auto max-w-md">
        {/* The container is always rendered; canvas sits on top until removed */}
        <div className="relative rounded-2xl overflow-hidden" style={{ height: 130 }}>

          {/* ── BEHIND: date content — always visible so it peeks through while scratching ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #FFFDF8 0%, #FDF7EC 100%)",
              border: "1.5px solid rgba(201,164,106,0.35)",
            }}
          >
            <span className="font-poppins text-[10px] tracking-[0.3em] uppercase text-[#A37E3E] font-semibold">
              Save the Date
            </span>
            <p className="font-great-vibes text-4xl sm:text-5xl text-[#2D2622] leading-tight">
              {WEDDING_DATE_DISPLAY}
            </p>
            <span className="font-poppins text-[10px] tracking-[0.2em] uppercase text-[#7F8D70]">
              {VENUE_NAME}, {VENUE_CITY}
            </span>
          </div>


          {/* ── ABOVE: scratch canvas (self-removes on reveal) ── */}
          <ScratchCard onReveal={handleReveal} />
        </div>
      </div>

      {/* ── THE COUNTDOWN BEGINS label + timers (animate in after reveal) ── */}
      <div
        className={`mt-10 transition-all duration-700 ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
          }`}
      >
        {/* Divider label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C9A46A]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#A37E3E] font-poppins font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" /> The Countdown Begins <Sparkles className="w-3 h-3" />
          </span>
          <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C9A46A]" />
        </div>

        {/* Counter tiles */}
        <div className="glass-card rounded-3xl border border-[#C9A46A]/30 shadow-xl max-w-xl mx-auto px-6 py-6 sm:px-10 sm:py-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-6">
            {counterItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 group"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <span
                  className={`font-cormorant text-4xl sm:text-6xl font-bold text-[#2D2622] leading-none tracking-tight transition-transform ${item.label === "Secs" && mounted ? "group-hover:scale-110" : ""
                    }`}
                >
                  {mounted ? item.value.toString().padStart(2, "0") : "--"}
                </span>
                <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
                  {item.label}
                </span>
                {/* Divider between items (not after last) */}
                {idx < counterItems.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-[#C9A46A]/20 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          {/* Live pulse indicator */}
          {mounted && (
            <div className="flex items-center justify-center gap-1.5 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A46A] animate-ping" />
              <span className="text-[10px] font-poppins text-[#7F8D70] tracking-wider uppercase">Live</span>
            </div>
          )}
        </div>

        {/* Tagline */}
        <p className="font-great-vibes text-2xl sm:text-3xl text-[#2D2622] mt-6 flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-[#B76E79] fill-[#B76E79]" />
          Until our forever begins
          <Heart className="w-4 h-4 text-[#B76E79] fill-[#B76E79]" />
        </p>

        {/* Add to Calendar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleGoogleCalendar}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#FCFAF7] border border-[#C9A46A] text-[#2D2622] font-poppins text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all"
          >
            <Calendar className="w-4 h-4 text-[#C9A46A]" />
            <span>Add to Google Calendar</span>
          </button>
        </div>
      </div>
    </section>
  );
}
