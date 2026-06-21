"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { NoiseTexture } from "@/components/ui/NoiseTexture";

const testimonialsList = [
  {
    id: 1,
    username: "cherokee316",
    avatarContent: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0a1e38]">
        <circle cx="50" cy="50" r="50" />
        <path d="M 50,25 C 60,25 70,30 70,40 C 70,55 50,75 50,75 C 50,75 30,55 30,40 C 30,30 40,25 50,25 Z" fill="white" />
        <path d="M 25,65 Q 50,45 75,65 Q 50,90 25,65" fill="#ffffff" />
      </svg>
    ),
    comment: "Arrived quickly and in perfect condition. seller wrapped it so it wouldn't be damaged.",
  },
  {
    id: 2,
    username: "ericnjay",
    avatarContent: (
      <div className="w-full h-full bg-[#333] flex items-center justify-center text-white font-black text-sm">
        🚚
      </div>
    ),
    comment: "MAHALO fast shipping, perfect packaging and I got what I ordered. Awesome thank you again.",
  },
  {
    id: 3,
    username: "kclivlaughlove",
    avatarContent: (
      <div className="w-full h-full bg-black rounded-full flex items-center justify-center border-2 border-[#baf35e] text-[#baf35e] font-extrabold text-lg">
        L
      </div>
    ),
    comment: "Gr8 deals, excellent variety, entertaining stream, every item received safe & secure in thanks to care in packaging.",
  },
  {
    id: 4,
    username: "ira_creative",
    avatarContent: (
      <div className="w-full h-full bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center text-white font-bold text-sm">
        И
      </div>
    ),
    comment: "Incredibly fast response, high-end pacing, and deep sound effects mapping. Retention grew by 54% in the first week!",
  },
  {
    id: 5,
    username: "vid_grower",
    avatarContent: (
      <div className="w-full h-full bg-gradient-to-br from-[#baf35e] to-emerald-500 flex items-center justify-center text-black font-extrabold text-sm">
        VG
      </div>
    ),
    comment: "Professional foley sync and pacing beats. Eliza is extremely easy to coordinate with, delivering flawless masters.",
  }
];

// 4-pointed sparkle star decoration SVG
const SparkleStar = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={`w-8 h-8 fill-[#ffa500] ${className}`} style={style}>
    <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
  </svg>
);

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimerRef = useRef(null);

  // Cycle forward
  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  // Auto-scroll loop
  useEffect(() => {
    if (isHovered) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isHovered]);

  // Generate 3 currently visible cards in the stack
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const idx = (startIndex + i) % testimonialsList.length;
      cards.push({ ...testimonialsList[idx], slotIndex: i });
    }
    return cards;
  };

  return (
    <section
      id="testimonials"
      className="relative z-20 py-10 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#111a14] via-[#080d0a] to-[#050806] overflow-hidden shadow-[0_20px_50px_rgba(5,8,6,0.9)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 [background-size:50px_50px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]"
        />
        {/* Radial gradient mask for faded edge look */}
        <div className="absolute inset-0 bg-[#050806] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <NoiseTexture
        frequency={0.65}
        octaves={5}
        slope={0.75}
        noiseOpacity={0.35}
        className=""
      />

      {/* Edge glow beams (purple lamp light) */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(245, 158, 11,0.55), 0 0 120px 20px rgba(245, 158, 11,0.20)" }} />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(245, 158, 11,0.55), 0 0 120px 20px rgba(245, 158, 11,0.20)" }} />

      {/* Glowing Lighting Blends */}
      <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">

        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border-2 border-black bg-[#baf35e] text-black font-black text-xs font-sans uppercase tracking-widest shadow-[3px_3px_0px_#000000] transform -rotate-1">
            Feedbacks
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none pt-2">
            What They Say?
          </h2>
        </div>

        {/* Carousel Stack Area */}
        <div className="relative w-full max-w-4xl mx-auto h-[480px] md:h-[520px] flex items-center justify-center mt-12 overflow-visible">

          {/* Sparkles / Stars surrounding the stack */}
          <SparkleStar className="absolute -left-12 top-12 animate-bounce" style={{ animationDuration: '4s' }} />
          <SparkleStar className="absolute -right-8 top-32 animate-pulse scale-90" style={{ animationDuration: '3s' }} />
          <SparkleStar className="absolute -left-10 bottom-24 animate-pulse scale-75" style={{ animationDuration: '5s' }} />
          <SparkleStar className="absolute -right-12 bottom-12 animate-bounce scale-90" style={{ animationDuration: '4.5s' }} />

          {/* Stack wrapper */}
          <div className="relative w-full h-full flex justify-center overflow-visible">
            <AnimatePresence mode="popLayout">
              {getVisibleCards().map((test, index) => {
                // slot parameters
                const y = index * 120;
                const scale = 1 - index * 0.03;
                const zIndex = 30 - index * 10;

                // Colors alternate: Slot 0 (top) and Slot 2 (bottom) are lime green, Slot 1 (middle) is white
                const isLime = index === 0 || index === 2;
                const bg = isLime ? "bg-[#baf35e]" : "bg-white";

                // Rotations alternate left / right
                const rotate = index === 0 ? 2 : index === 1 ? -2.5 : 1.5;
                const xOffset = index === 0 ? 10 : index === 1 ? -10 : 6;

                return (
                  <motion.div
                    key={test.id}
                    layout
                    initial={{ opacity: 0, scale: 0.85, y: y + 100 }}
                    animate={{
                      opacity: 1 - index * 0.1, // slightly fade background cards
                      scale: scale,
                      y: y,
                      x: xOffset,
                      rotate: rotate,
                      zIndex: zIndex
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: 200, y: y - 50 }}
                    transition={{ type: "spring", stiffness: 280, damping: 25 }}
                    className={`absolute w-full p-5 rounded-[28px] border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-4 ${bg} text-black`}
                  >
                    {/* Header: Profile image, Username, star rating pill */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-black bg-neutral-200 shrink-0">
                          {test.avatarContent}
                        </div>
                        <div className="text-left">
                          <h4 className="text-sm font-black tracking-tight leading-tight font-sans text-black">
                            {test.username}
                          </h4>
                          <span className="text-[9px] uppercase font-bold text-black/50 font-sans tracking-widest">VERIFIED CREATOR</span>
                        </div>
                      </div>

                      {/* Stars badge matching design (black pill with star and rating) */}
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.15)] font-sans">
                        <Star className="w-3.5 h-3.5 fill-[#ffa500] stroke-[#ffa500]" />
                        <span className="text-[10px] font-black tracking-wide">5/5</span>
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="text-left font-sans font-semibold text-xs md:text-sm leading-relaxed text-neutral-800">
                      {test.comment}
                    </p>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Overlay Arrow Controller on the right */}
          <div className="absolute -right-8 md:-right-16 z-40">
            <button
              onClick={handleNext}
              className="p-4 rounded-full border-2 border-black bg-white hover:bg-[#baf35e] text-black shadow-[4px_4px_0px_#000000] active:translate-y-0.5 active:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}