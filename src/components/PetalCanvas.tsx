"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: "petal" | "gold";
}

export default function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Number of particles based on screen size
    const isMobile = width < 768;
    const count = isMobile ? 24 : 45;

    const colors = [
      "rgba(244, 187, 194, ", // Soft rose
      "rgba(255, 218, 185, ", // Peach
      "rgba(235, 175, 150, ", // Warm blush
      "rgba(255, 230, 160, ", // Marigold shimmer
    ];

    const petals: Petal[] = [];

    for (let i = 0; i < count; i++) {
      const isGold = Math.random() > 0.65;
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isGold ? Math.random() * 2.5 + 1 : Math.random() * 8 + 6,
        speedX: (Math.random() - 0.5) * 0.7 + 0.3,
        speedY: Math.random() * 0.8 + 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.5 + 0.25,
        color: isGold
          ? "rgba(201, 164, 106, "
          : colors[Math.floor(Math.random() * colors.length)],
        type: isGold ? "gold" : "petal",
      });
    }

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.type === "petal") {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.65, 0, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.fill();

          // Subtle center rib of petal
          ctx.beginPath();
          ctx.moveTo(-p.size * 0.7, 0);
          ctx.lineTo(p.size * 0.7, 0);
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else {
          // Gold sparkle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity * 0.9})`;
          ctx.shadowColor = "#C9A46A";
          ctx.shadowBlur = 4;
          ctx.fill();
        }

        ctx.restore();

        // Motion physics
        p.x += p.speedX + Math.sin(p.y * 0.005) * 0.5;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Wrap around boundaries
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
