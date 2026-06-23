"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { testimonials } from "@/data/testimonials";

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
    setStartIndex((prev) => (prev + 1) % testimonials.length);
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
      const idx = (startIndex + i) % testimonials.length;
      cards.push({ ...testimonials[idx], slotIndex: i });
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



      {/* Edge glow beams (purple lamp light) */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(245, 158, 11,0.55), 0 0 120px 20px rgba(245, 158, 11,0.20)" }} />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(245, 158, 11,0.55), 0 0 120px 20px rgba(245, 158, 11,0.20)" }} />

      {/* Glowing Lighting Blends */}
      <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">

        {/* Header Block */}
        <div className="space-y-4">
          
          <div className="inline-block px-4 py-1.5 rounded-full border-2 border-black bg-[#fca014] text-black font-black text-xs font-sans uppercase tracking-widest shadow-[3px_3px_0px_#000000] transform -rotate-1">
            Feedbacks
          </div>
          <h2 className="text-4xl md:text-7xl text-white tracking-tight leading-[1.05] pt-2">
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
                const bg = isLime ? "bg-[#F9B501]" : "bg-white";

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
          <div className="absolute -right-4 sm:-right-6 md:-right-8 z-40">
            <button
              onClick={handleNext}
              className="p-3 sm:p-3.5 md:p-4 rounded-full border-2 border-black bg-white hover:bg-[#fca501] text-black shadow-[3px_3px_0px_#000000] sm:shadow-[4px_4px_0px_#000000] active:translate-y-0.5 active:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}