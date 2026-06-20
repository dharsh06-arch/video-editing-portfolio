"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { HexagonPattern } from "@/components/ui/HexagonPattern";

const packageDetails = {
  shortForm: {
    title: "Short Form Editing",
    desc: "Platform-ready short-form content with clean cuts & pacing to help you grow.",
    bullets: ["Optimized for all platforms", "Captions & transitions included", "Delivered within 48–72 hours"],
  },
  colorGrading: {
    title: "Color Grading",
    desc: "Every frame color-treated to feel intentional and premium.",
    bullets: ["Custom color profile", "LUT & skin correction", "Consistent across all edits"],
  },
  longForm: {
    title: "Long Form Editing",
    desc: "Crafted long-form videos with storytelling to keep viewers engaged.",
    bullets: ["Optimized for YouTube", "Seamless cuts & cinematic flow", "Delivered within 48–72 hours"],
  },
  audio: {
    title: "Audio Finetuning",
    desc: "We balance and enhance your audio so every word lands.",
    bullets: ["Noise removal & cleanup", "EQ & volume balancing", "Music & SFX mixing"],
  },
  motion: {
    title: "Motion Graphics",
    desc: "Professional motion design that makes your brand unforgettable.",
    bullets: ["Custom intros & outros", "On-brand text overlays", "Any video format compatible"],
  },
  clipping: {
    title: "Clipping",
    desc: "Repurpose your long-form content without lifting a finger.",
    bullets: ["Long-form to short-form", "Best-moment extraction", "Ready-to-post formatting"],
  }
};

const pills = [
  { id: "shortForm", text: "Short Form Editing", y: -180, x: -160, delay: 0, scale: 1, blur: false },
  { id: "longForm", text: "Long Form Editing", y: -200, x: 180, delay: 0.2, scale: 1.1, blur: false },
  { id: "motion", text: "Motion Graphics", y: -120, x: -80, delay: 0.4, scale: 0.95, blur: false },
  { id: "colorGrading", text: "Color Grading", y: -130, x: 120, delay: 0.1, scale: 0.9, blur: false },
  { id: "audio", text: "Audio Finetuning", y: 10, x: -100, delay: 0.3, scale: 1.05, blur: false },
  { id: "clipping", text: "Clipping", y: 30, x: 100, delay: 0.6, scale: 0.95, blur: false },
  { id: "none1", text: "Visual Effects", y: -60, x: 0, delay: 0.5, scale: 0.8, blur: true },
  { id: "none2", text: "Voice Over", y: -80, x: -220, delay: 0.7, scale: 0.7, blur: true },
  { id: "none3", text: "Thumbnails", y: -100, x: 250, delay: 0.2, scale: 0.8, blur: true },
  { id: "none4", text: "Social Media", y: 0, x: 220, delay: 0.8, scale: 0.75, blur: true },
];

export default function Services() {
  const [activePill, setActivePill] = useState(null);

  return (
    <section id="services" className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24 rounded-[48px] md:rounded-[64px] min-h-[800px] flex items-center bg-black overflow-hidden border-t border-lime/10">

      {/* Hexagon grid background */}
      <div className="absolute inset-0 z-0 text-lime/[0.06] pointer-events-none py-24 px-6 md:px-12 lg:px-24 rounded-[48px] md:rounded-[64px] ">
        <HexagonPattern gap={12} radius={28} x={-1} y={-1} />
      </div>

      {/* Edge glow beams */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(186,243,94,0.55), 0 0 120px 20px rgba(186,243,94,0.20)" }} />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(186,243,94,0.55), 0 0 120px 20px rgba(186,243,94,0.20)" }} />
      <div className="pointer-events-none absolute left-0 inset-y-0 w-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(186,243,94,0.4), 0 0 120px 20px rgba(186,243,94,0.15)" }} />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(186,243,94,0.4), 0 0 120px 20px rgba(186,243,94,0.15)" }} />

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

        {/* LEFT COLUMN: Stable Header + Dynamic content area */}
        <div className="flex flex-col justify-center min-h-[450px]">
          
          {/* This section is completely stable and NEVER shifts when toggling pills */}
          <div className="space-y-6 mb-8">
            <span className="text-lime font-bold tracking-widest uppercase text-sm">
              Inside the Box
            </span>
            <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none flex flex-col">
              <span>WHY</span>
              <span 
                className="text-transparent mt-1" 
                style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.85)" }}
              >
                CHOOSE US?
              </span>
            </h2>
          </div>

          {/* Wrapper with a reserved minimum height to handle dynamic cross-fading text */}
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              {!activePill ? (
                <motion.div
                  key="default-overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                    We don&apos;t just edit videos. We build complete, high-end visual pipelines tailored to your content strategy. Select an interactive deck feature on the right to unpack our exact methodology.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activePill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-lime font-bold tracking-widest uppercase text-xs cursor-pointer hover:underline"
                        onClick={() => setActivePill(null)}
                      >
                        &larr; Reset Layout
                      </span>
                      <span className="text-white/30 text-xs">•</span>
                      <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">Currently viewing</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight pt-1">
                      {packageDetails[activePill].title}
                    </h3>
                    <p className="text-slate-300 text-base md:text-lg max-w-md leading-relaxed">
                      {packageDetails[activePill].desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10 max-w-md">
                    {packageDetails[activePill].bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-lime shrink-0" />
                        <span className="text-white font-medium text-sm md:text-base">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN: Retains original layout exactly as requested */}
        <div className="relative w-full h-[600px] flex flex-col items-center justify-end mt-12 lg:mt-0">

          {/* The Volumetric Light Beam */}
          <div
            className="absolute bottom-[10%] w-[120%] lg:w-full h-[500px] pointer-events-none origin-bottom z-10"
            style={{
              background: "linear-gradient(to top, rgba(186, 243, 94, 0.8) 0%, rgba(186, 243, 94, 0.1) 40%, transparent 100%)",
              clipPath: "polygon(20% 0, 80% 0, 55% 100%, 45% 100%)",
              filter: "blur(20px)"
            }}
          />
          <div className="absolute bottom-[10%] w-[120px] h-[30px] bg-lime rounded-[100%] blur-[15px] z-10" />

          {/* Floating Pills */}
          <div className="absolute top-0 w-full h-[400px] z-20">
            <div className="relative w-full h-full flex items-center justify-center">
              {pills.map((pill, idx) => {
                const isActive = activePill === pill.id;
                const canClick = !pill.blur;

                return (
                  <motion.div
                    key={idx}
                    onClick={() => canClick && setActivePill(pill.id)}
                    className={`absolute flex items-center justify-center px-6 py-3 rounded-[24px] bg-gradient-to-b transition-colors duration-300 ${isActive
                        ? 'from-white to-[#baf35e] border-white shadow-[0_0_30px_rgba(186,243,94,0.8)]'
                        : pill.blur
                          ? 'from-lime/40 to-lime/20 border-lime/20 blur-[3px]'
                          : 'from-[#73f55b] to-[#4ade3d] border-white/20 shadow-[0_10px_30px_rgba(74,222,61,0.5)] hover:shadow-[0_10px_40px_rgba(74,222,61,0.8)] cursor-pointer'
                      } border backdrop-blur-md whitespace-nowrap`}
                    style={{
                      x: pill.x,
                      y: pill.y,
                      scale: isActive ? pill.scale * 1.1 : pill.scale,
                      zIndex: isActive ? 50 : pill.blur ? 10 : 30
                    }}
                    animate={{
                      y: [pill.y, pill.y - 15, pill.y],
                      rotate: isActive ? 0 : [0, 1, -1, 0]
                    }}
                    transition={{
                      y: { duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: pill.delay },
                      rotate: { duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: pill.delay }
                    }}
                  >
                    <span className={`font-semibold tracking-tight ${isActive ? 'text-black font-extrabold' : pill.blur ? 'text-black/50' : 'text-black'} text-sm md:text-base transition-colors duration-300`}>
                      {pill.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* The Open Box SVG Illustration */}
          <div className="relative w-[300px] h-[200px] z-30 flex flex-col items-center justify-end drop-shadow-[0_0_30px_rgba(186,243,94,0.15)]">
            <svg viewBox="0 0 300 200" width="100%" height="100%" className="overflow-visible z-10">
              <polygon points="70,80 230,80 210,60 90,60" fill="#4ade3d" className="blur-[2px]" />
              <polygon points="70,80 230,80 210,60 90,60" fill="#baf35e" />
              <polygon points="90,60 210,60 230,20 70,20" fill="#080e0a" stroke="#1a2b20" strokeWidth="1.5" strokeLinejoin="round" />
              <polygon points="90,60 70,80 15,65 35,45" fill="#060b08" stroke="#1a2b20" strokeWidth="1.5" strokeLinejoin="round" />
              <polygon points="210,60 230,80 285,65 265,45" fill="#060b08" stroke="#1a2b20" strokeWidth="1.5" strokeLinejoin="round" />
              <rect x="70" y="80" width="160" height="100" fill="#050906" stroke="#1a2b20" strokeWidth="1.5" rx="3" />
              <text x="150" y="130" textAnchor="middle" fill="#3b5e43" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.1em" className="opacity-80">our premium</text>
              <text x="150" y="146" textAnchor="middle" fill="#517d59" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.1em" className="opacity-80">services</text>
            </svg>
            <div className="absolute bottom-[100px] w-[150px] h-[30px] bg-lime rounded-full blur-[20px] mix-blend-screen pointer-events-none z-20" />
            <div className="absolute bottom-[90px] w-[100px] h-[20px] bg-white rounded-full blur-[15px] mix-blend-screen pointer-events-none z-20" />
          </div>

        </div>
      </div>
    </section>
  );
}
