"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Share2, ChevronUp, ChevronDown } from "lucide-react";

const videos = [
  "/videos/v1.mp4",
  "/videos/v2.mp4"
];

const slideVariants = {
  enter: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    y: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9
  })
};

export default function AboutPhone() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextVideo = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const timer = setInterval(nextVideo, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-20 w-[240px] h-[480px] md:w-[300px] md:h-[600px] rounded-[44px] bg-[#0c120e] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.9),_0_0_30px_rgba(186,243,94,0.12)] border-[4px] border-surface/60 hover:border-lime/30 transition-all duration-500 flex-shrink-0">
      {/* Inner Screen */}
      <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black border border-surface/40">
        
        {/* Dynamic island notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-black rounded-full z-30" />
        
        {/* Video Slider */}
        <div className="absolute inset-0 z-10 overflow-hidden bg-black">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <video 
                src={videos[currentIndex]}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-95"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* HUD Interface Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between select-none">
          
          {/* Top HUD */}
          <div className="flex justify-between items-center text-[8px] md:text-[10px] text-lime font-bold tracking-widest bg-black/40 px-3 py-1.5 rounded-md backdrop-blur-sm mt-8 mx-3">
            <span>REC • STBY</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-lime animate-pulse" />
          </div>

          {/* Bottom HUD & Interactions */}
          <div className="p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between w-full pb-6">
            
            

            {/* Right Side Controls */}
            <div className="flex flex-col items-center gap-4 pointer-events-auto">
              {/* Actions */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-lime transition-colors cursor-pointer">
                  <Heart className="w-5 h-5 text-white group-hover:text-lime group-hover:fill-lime transition-all" />
                </div>
                <span className="text-[10px] font-bold text-white shadow-black drop-shadow-md">12.4K</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-lime transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5 text-white group-hover:text-lime transition-all" />
                </div>
                <span className="text-[10px] font-bold text-white shadow-black drop-shadow-md">382</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-lime transition-colors cursor-pointer">
                  <Share2 className="w-5 h-5 text-white group-hover:text-lime transition-all" />
                </div>
                <span className="text-[10px] font-bold text-white shadow-black drop-shadow-md">924</span>
              </div>

              {/* Navigation Arrows */}
              <div className="flex flex-col gap-2 mt-2">
                <button 
                  onClick={prevVideo}
                  className="w-8 h-8 rounded-full bg-lime/10 cursor-pointer backdrop-blur-md flex items-center justify-center border border-lime/30 hover:bg-lime/30 hover:scale-110 transition-all text-lime"
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextVideo}
                  className="w-8 h-8 rounded-full bg-lime/10 cursor-pointer backdrop-blur-md flex items-center justify-center border border-lime/30 hover:bg-lime/30 hover:scale-110 transition-all text-lime"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
