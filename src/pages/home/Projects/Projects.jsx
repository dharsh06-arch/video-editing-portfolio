"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Eye } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import { NoiseTexture } from "@/components/ui/NoiseTexture";

// Local helper component for each Coverflow Card to manage dynamic video playing state
function CoverflowCard({ project, isActive, distance, onClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      // Reset and play the video
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play failed (usually browser autoplay restrictions)
        });
      }
    } else {
      // Pause and reset when not active
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      onClick={onClick}
      className={`relative w-[280px] sm:w-[320px] h-[400px] sm:h-[450px] rounded-[10px] overflow-hidden border transition-all duration-500  flex flex-col justify-end p-6 select-none cursor-pointer ${isActive
          ? "border-amber-500 shadow-[0_0_30px_rgba(245, 158, 11,0.25)]"
          : "border-white/10 hover:border-amber-500/30"
        }`}
    >
      {/* Media Content */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none bg-neutral-900">
        {/* Video Preview - Paused poster frame when inactive, full playback when active */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Blur & Darken Overlay for inactive cards */}
        <div 
          className="absolute inset-0 transition-all duration-700 pointer-events-none z-10"
          style={{
            backgroundColor: isActive ? 'transparent' : 'rgba(0, 0, 0, 0.45)',
            backdropFilter: isActive ? 'blur(0px)' : `blur(${distance === 1 ? 2 : distance >= 2 ? 3 : 0}px)`
          }}
        />
      </div>

      {/* Fade overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" /> */}

      {/* Top Right Play indicator */}
      {!isActive && (
        <div className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-white/75 hover:scale-105 transition-transform">
          <Play className="w-3 h-3 fill-current" />
        </div>
      )}

      {/* Card Details (Text and Stats) */}
      <div className="relative z-20 text-left space-y-2 mt-auto">

        {/* Stats text */}
        <div className={`text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 transition-colors duration-500 ${isActive ? "text-amber-400" : "text-[#8e938f]"
          }`}>
          <Eye className="w-3.5 h-3.5 shrink-0" />
          <span>{project.stats}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-black text-white leading-tight font-sans">
          {project.title}
        </h3>

        {/* Dynamic Description Drawer */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-slate-300 leading-relaxed font-sans font-medium line-clamp-3 pt-1 border-t border-white/10"
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayTimerRef = useRef(null);

  // Auto-scroll loop
  useEffect(() => {
    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section
      id="projects"
      className="relative z-20 py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-amber-500/10 overflow-hidden"
    >

      <div className="absolute inset-0 bg-grid-pattern  pointer-events-none z-0" />

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

      {/* Top Lamp Light */}
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[300px] bg-amber-600/20 blur-[120px] pointer-events-none z-0 rounded-full" />

      {/* Center Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[700px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Bottom Lamp Light */}
      <div className="absolute -bottom-[150px] left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[300px] bg-amber-600/20 blur-[120px] pointer-events-none z-0 rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <h1 className="text-4xl md:text-5xl text-white leading-[1.05] tracking-tight">
            Featured Project Tracks
          </h1>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-amber-400 hover:text-amber-400 hover:bg-white/10 transition-colors duration-300 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-amber-400 hover:text-amber-400 hover:bg-white/10 transition-colors duration-300 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Coverflow Container */}
        <div className="relative h-[480px] sm:h-[530px] w-full flex items-center justify-center overflow-visible py-8 perspective-[1200px]">
          <div className="relative w-full max-w-[900px] h-full flex items-center justify-center overflow-visible transform-style-3d">

            {projects.map((proj, idx) => {
              const length = projects.length;

              // Calculate wrapped distance in loop
              let diff = idx - activeIndex;
              if (diff < -length / 2) diff += length;
              if (diff > length / 2) diff -= length;

              const isCenter = diff === 0;

              // Calculate position using strict CoverFlow math for perfect stacking
              const getXPosition = () => {
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                if (diff === 0) return 0;

                // Distance of the first side card from center
                const baseOffset = isMobile ? 140 : 280;
                // Distance between stacked side cards
                const stackOffset = isMobile ? 60 : 100;

                const x = baseOffset + (Math.abs(diff) - 1) * stackOffset;
                return diff > 0 ? x : -x;
              };

              return (
                <motion.div
                  key={proj.title}
                  className="absolute origin-center transform-style-3d pointer-events-auto"
                  style={{
                    zIndex: 10 - Math.abs(diff)
                  }}
                  animate={{
                    x: getXPosition(),
                    scale: diff === 0 ? 1.05 : Math.max(0.65, 1.0 - Math.abs(diff) * 0.15),
                    rotateY: 0,
                    z: diff === 0 ? 150 : -Math.abs(diff) * 120,
                    opacity: 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24
                  }}
                >
                  <CoverflowCard 
                    project={proj} 
                    isActive={isCenter} 
                    distance={Math.abs(diff)}
                    onClick={() => setActiveIndex(idx)}
                  />
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Dot Indicators */}
        {/* <div className="flex justify-center items-center gap-2.5">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${activeIndex === idx
                  ? "w-8 bg-amber-500"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
            />
          ))}
        </div> */}

      </div>
    </section>
  );
}
