"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, Music, Sparkles } from "lucide-react";

interface MusicPlayerProps {
  shouldAutoStart?: boolean;
}

export default function MusicPlayer({ shouldAutoStart = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolume, setShowVolume] = useState(false);
  const [trackName, setTrackName] = useState("Shehnai & Flute Wedding Raag");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{ isRunning: boolean; stop: () => void } | null>(null);
  const autoStartedRef = useRef(false);

  // Soft Indian classical melodic synthesis fallback (Tanpura drone + Flute arpeggiation)
  const startSyntheticMusic = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = synthCtxRef.current || new AudioCtx();
      synthCtxRef.current = ctx;

      if (ctx.state === "suspended") {
        ctx.resume();
      }

      if (synthNodesRef.current?.isRunning) return;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.35, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Tanpura Drone frequencies (Sa - Pa - Sa)
      const droneFrequencies = [146.83, 220.0, 293.66, 440.0]; // D3, A3, D4, A4
      const droneOscs: OscillatorNode[] = [];

      droneFrequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx % 2 === 0 ? "sawtooth" : "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(600, ctx.currentTime);

        gain.gain.setValueAtTime(0.04, ctx.currentTime);

        // Gentle tremolo
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.015, ctx.currentTime);
        lfo.connect(lfoGain.gain);
        lfo.start();

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        osc.start();
        droneOscs.push(osc);
      });

      // Flute / Melodic bell arpeggiator notes (Raag Yaman / Bhupali: D, E, F#, A, B)
      const scale = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33, 659.25, 739.99];
      let noteIndex = 0;
      let timer: NodeJS.Timeout;

      const playMelodicNote = () => {
        if (!synthNodesRef.current?.isRunning) return;
        const freq = scale[noteIndex % scale.length];
        noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % scale.length;

        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = "bandpass";
        filter.frequency.setValueAtTime(freq * 1.5, ctx.currentTime);
        filter.Q.setValueAtTime(3, ctx.currentTime);

        const now = ctx.currentTime;
        noteGain.gain.setValueAtTime(0.0001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.08, now + 0.3);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 2.5);

        const nextInterval = 800 + Math.random() * 900;
        timer = setTimeout(playMelodicNote, nextInterval);
      };

      synthNodesRef.current = {
        isRunning: true,
        stop: () => {
          synthNodesRef.current = { isRunning: false, stop: () => {} };
          clearTimeout(timer);
          droneOscs.forEach((o) => {
            try {
              o.stop();
              o.disconnect();
            } catch {}
          });
          masterGain.disconnect();
        },
      };

      playMelodicNote();
    } catch (e) {
      console.warn("Synthesizer audio init failed", e);
    }
  }, [volume]);

  const stopSyntheticMusic = useCallback(() => {
    if (synthNodesRef.current?.isRunning) {
      synthNodesRef.current.stop();
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSyntheticMusic();
      setIsPlaying(false);
    } else {
      // Try HTML5 audio file first (ambient wedding track)
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If mp3 is unavailable or blocked, use graceful synthetic wedding melody
            startSyntheticMusic();
            setIsPlaying(true);
          });
      } else {
        startSyntheticMusic();
        setIsPlaying(true);
      }
    }
  }, [isPlaying, volume, startSyntheticMusic, stopSyntheticMusic]);

  // Listen to auto start triggered by envelope
  useEffect(() => {
    if (shouldAutoStart && !autoStartedRef.current) {
      autoStartedRef.current = true;
      if (!isPlaying) {
        togglePlay();
      }
    }
  }, [shouldAutoStart, isPlaying, togglePlay]);

  // Adjust volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <>
      {/* Hidden audio element with royalty-free traditional Indian wedding instrumental */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-meditation-ambient-flute-112191.mp3"
        loop
        preload="auto"
        onError={() => {
          // If remote track fails, fallback smoothly to web audio synthesizer
          if (isPlaying) {
            startSyntheticMusic();
          }
        }}
      />

      {/* Floating Music Control Bar */}
      <div
        className="fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2"
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
      >
        {/* Track Title Indicator on Hover */}
        {showVolume && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-nav text-xs font-poppins text-[#2D2622] border border-[#C9A46A]/30 shadow-lg animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A46A] animate-pulse" />
            <span>{trackName}</span>
          </div>
        )}

        {/* Play / Mute Toggle Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
          className={`relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border transition-all duration-300 shadow-xl ${
            isPlaying
              ? "bg-[#FCFAF7] border-[#C9A46A] text-[#C9A46A] shadow-[#C9A46A]/30 ring-2 ring-[#C9A46A]/20"
              : "bg-white/90 border-[#A8B59A] text-[#7F8D70] hover:border-[#C9A46A] hover:text-[#C9A46A]"
          }`}
        >
          {/* Subtle spinning vinyl ring when playing */}
          {isPlaying && (
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#C9A46A]/40 animate-spin [animation-duration:8s] pointer-events-none" />
          )}

          {/* Equalizer animation when playing */}
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-5">
              <span className="w-[3px] bg-[#C9A46A] rounded-full animate-[bounce_1.1s_infinite_ease-in-out] h-3" />
              <span className="w-[3px] bg-[#DFBE85] rounded-full animate-[bounce_0.8s_infinite_ease-in-out_0.2s] h-5" />
              <span className="w-[3px] bg-[#C9A46A] rounded-full animate-[bounce_1.3s_infinite_ease-in-out_0.4s] h-4" />
            </div>
          ) : (
            <VolumeX className="w-5 h-5 transition-transform group-hover:scale-110" />
          )}

          {/* Glowing pulse ring */}
          {isPlaying && (
            <span className="absolute -inset-1 rounded-full bg-[#C9A46A]/15 blur-sm animate-pulse -z-10" />
          )}
        </button>
      </div>
    </>
  );
}
