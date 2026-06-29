"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Scissors,
  Monitor,
  Layers,
  Volume2,
  VolumeX,
  Maximize,
  MousePointer2,
  Star,
} from "lucide-react";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import CallButn from "@/components/ui/CallButn";
import { AvatarCircles } from "@/components/ui/AvatarCircles";

// IMPORTANT: filenames with spaces must be URL-encoded or some browsers/dev
// servers will fail to fetch them reliably, causing stuck/delayed playback.
const HERO_VIDEO_SRC = encodeURI(
  "/WhatsApp Video 2026-06-27 at 1.37.28 PM_1.mp4",
);

export default function Hero({ onScrollToSection }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const controls = useAnimation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      controls.start({
        x: ["0%", "100%"],
        transition: { duration: 10, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [isPlaying, controls]);

  // Robust autoplay: wait for the video to actually be ready instead of
  // firing play() immediately on mount (which can silently fail / hang
  // on slower connections or when the element hasn't buffered yet).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const tryPlay = async () => {
      try {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        await video.play();
        if (!cancelled) setVideoReady(true);
      } catch (error) {
        console.warn("Hero video autoplay failed:", error);
        // Retry once the browser says it can actually play
        const retry = () => {
          video.play().catch(() => {});
        };
        video.addEventListener("canplay", retry, { once: true });
      }
    };

    if (video.readyState >= 3) {
      // HAVE_FUTURE_DATA or better — safe to play now
      tryPlay();
    } else {
      const onCanPlay = () => {
        if (!cancelled) tryPlay();
      };
      video.addEventListener("canplay", onCanPlay, { once: true });
      video.addEventListener("loadeddata", onCanPlay, { once: true });
      // Force the browser to start loading in case preload didn't kick in
      video.load();
    }

    // Fallback: if the video stalls/errors mid-stream, attempt to recover
    const onStalled = () => {
      console.warn("Hero video stalled, attempting recovery...");
      video.load();
      video.play().catch(() => {});
    };
    const onError = (e) => {
      console.error("Hero video error:", e);
    };

    video.addEventListener("stalled", onStalled);
    video.addEventListener("error", onError);

    return () => {
      cancelled = true;
      video.removeEventListener("stalled", onStalled);
      video.removeEventListener("error", onError);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const MOCK_AVATARS = [
    {
      imageUrl: "/images/Digital-toppers-academy-logo.jpg-Photoroom.png",
      bgColor: "#E6EEC9", // Deep dark navy to contrast the blue & red "Digital Toppers" text
    },
    {
      imageUrl: "/images/kalinga-Photoroom.png",
      bgColor: "#DCEEF1", // Clean dark gray to make the black/red Kalinga logo pop cleanly
    },
    {
      imageUrl: "/images/sakthi doc-Photoroom.png",
      bgColor: "#0a0a0c", // Pure deep black so the bright white "SAKTHI HOSPITAL" text shines
    },
    {
      imageUrl: "/images/vlcsnap-2026-06-14-17h01m56s157-Photoroom.png",
      bgColor: "#171717", // Neutral dark backing for the orange accent graphics
    },
    {
      imageUrl: "/images/vlcsnap-2026-06-14-17h12m41s462-Photoroom.png",
      bgColor: "#0e1726", // Subtle blue-tinted dark base for the yellow accents
    },
    {
      imageUrl: "/images/vlcsnap-2026-06-14-17h17m42s499.png",
      bgColor: "#ffffff", // Pure solid white to perfectly preserve that clean red logo badge
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#050505] text-white font-sans selection:bg-amber-500/30"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Purple Lamp Lights */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-600/30 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-yellow-500/40 rounded-[100%] blur-[100px] pointer-events-none mix-blend-screen" />
        {/* Ambient bottom glow */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vh] bg-blue-900/10 rounded-full blur-[120px]" />

        {/* Prominent grid pattern for "workspace" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 flex flex-col items-center">
        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-14 md:mt-10"
        >
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-6 max-w-4xl mx-auto">
            Crafting Cinematic <br className="hidden md:block" />
            <span className="text-gradient-green">Masterpieces.</span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            We transform raw footage into compelling narratives. Expert video
            editing, color grading, and visual effects that command attention.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-col sm:flex-row items-center justify-center mt-2 md:mt-4 mb-6 gap-3"
          >
            <AvatarCircles avatarUrls={MOCK_AVATARS} numPeople={"50+"} />

            <div className="flex flex-col sm:flex-row items-center gap-2">
              {/* Premium 5-Star Rating */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.05 + i * 0.05,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Star className="w-4.5 h-4.5 text-amber-400 fill-amber-400 [filter:drop-shadow(0_0_3px_rgba(251,191,36,0.3))] transition-transform hover:scale-110 cursor-default" />
                  </motion.div>
                ))}
              </div>

              <span className="text-sm text-white/60 font-medium">
                Trusted by 100+ creators
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl">
            <div className="uiverse-glass-wrap w-full sm:w-auto flex justify-center">
              <div className="button-shadow" />
              <button
                onClick={() => onScrollToSection?.("projects")}
                className="glass-btn w-full sm:w-auto min-w-[220px]"
              >
                <span className="label-span justify-center inline-flex tracking-[0.15rem]">
                  View Showreel
                  <Play className="w-3.5 h-3.5 fill-current text-[var(--color-lime-light)] drop-shadow-[0_0_3px_rgba(255,165,0,0.4)]" />
                </span>
              </button>
            </div>
            <div className="w-full sm:w-auto flex justify-center">
              <CallButn onScrollToSection={onScrollToSection} />
            </div>
          </div>
        </motion.div>

        {/* Video Editor UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 w-full max-w-[1100px] bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/5 flex flex-col"
        >
          {/* Editor Header */}
          <div className="h-10 border-b border-white/10 bg-[#141414] flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-xs font-medium text-white/40">
                Portfolio_Main_Edit_v3.prproj
              </span>
            </div>
            <div className="flex items-center gap-4 text-white/40">
              <Monitor className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
              <Layers className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-auto lg:h-[400px]">
            {/* Preview Window Area */}
            <div className="flex-1 lg:w-1/2 p-4 lg:p-6 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0a0a0a]">
              {/* Fake Video Player */}
              <div className="w-full h-[200px] md:h-[280px] lg:h-full bg-black rounded-lg overflow-hidden relative border border-white/5 shadow-inner group">
                {/* Simulated Video Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 mix-blend-overlay pointer-events-none z-10" />

                {/* Loading state shown until the video reports it's actually playable */}
                {!videoReady && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
                    <div className="w-6 h-6 border-2 border-white/20 border-t-amber-400 rounded-full animate-spin" />
                  </div>
                )}

                <video
                  ref={videoRef}
                  src={HERO_VIDEO_SRC}
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  autoPlay
                  onCanPlay={() => setVideoReady(true)}
                  onPlaying={() => setVideoReady(true)}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Safe Margins */}
                <div className="absolute inset-6 border border-white/20 border-dashed rounded-sm pointer-events-none opacity-30" />

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/80 to-transparent flex items-end px-3 pb-2 justify-between">
                  <div className="text-[10px] font-mono text-white/70">
                    00:01:24:12
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="text-white/70 hover:text-white transition-colors cursor-pointer"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <Maximize className="w-3 h-3 text-white/70" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Effects Panel (Right Side) */}
            <div className="hidden lg:flex w-1/4 min-w-[250px] bg-[#0f0f0f] flex-col">
              <div className="px-4 py-3 border-b border-white/10 text-xs font-semibold text-white/60 tracking-wider">
                LUMETRI COLOR
              </div>
              <div className="p-4 flex flex-col gap-5 flex-1 overflow-y-auto custom-scrollbar">
                {/* Sliders Mockups */}
                {[
                  { label: "Exposure", val: "75%" },
                  { label: "Contrast", val: "60%" },
                  { label: "Highlights", val: "45%" },
                  { label: "Shadows", val: "80%" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-[10px] text-white/50 font-medium">
                      <span>{item.label}</span>
                      <span>{item.val}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.val }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm"
                        style={{ left: `calc(${item.val} - 5px)` }}
                      />
                    </div>
                  </div>
                ))}

                {/* Color Wheels Mockup */}
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full border-[3px] border-gradient-to-br from-amber-500 via-green-500 to-blue-500 relative bg-[#1a1a1a]">
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                        style={{ transform: "translate(-30%, -60%)" }}
                      />
                    </div>
                    <span className="text-[9px] text-white/40 uppercase">
                      Midtones
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full border-[3px] border-gradient-to-br from-yellow-500 via-cyan-500 to-amber-500 relative bg-[#1a1a1a]">
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                        style={{ transform: "translate(40%, 20%)" }}
                      />
                    </div>
                    <span className="text-[9px] text-white/40 uppercase">
                      Shadows
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section (Bottom) */}
          <div className="h-[250px] bg-[#141414] flex flex-col border-t border-white/10 relative">
            {/* Timeline Toolbar */}
            <div className="h-9 border-b border-white/5 flex items-center px-4 justify-between bg-[#111]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-white/40">
                  <MousePointer2 className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
                  <Scissors className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
                </div>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <div className="flex items-center gap-2">
                  <SkipBack className="w-3.5 h-3.5 text-white/50 hover:text-white cursor-pointer" />
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-5 h-5 rounded-sm bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-3 h-3 text-white" />
                    ) : (
                      <Play className="w-3 h-3 text-white ml-0.5" />
                    )}
                  </button>
                  <SkipForward className="w-3 h-3 text-white/50 hover:text-white cursor-pointer" />
                </div>
                <span className="text-[10px] font-mono text-amber-400 ml-2 bg-amber-500/10 px-1.5 py-0.5 rounded">
                  00:01:24:12
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1">
                <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-white/30 rounded-full" />
                </div>
              </div>
            </div>

            {/* Tracks Area */}
            <div className="flex-1 overflow-hidden relative flex">
              {/* Track Headers (Left sidebar) */}
              <div className="w-[80px] sm:w-[120px] bg-[#1a1a1a] border-r border-white/10 flex flex-col z-10 shrink-0">
                <div className="h-6 border-b border-white/5" />{" "}
                {/* Timecode header spacer */}
                {/* V3 */}
                <div className="h-[40px] border-b border-white/5 flex items-center px-2 group">
                  <span className="text-[10px] font-bold text-white/30 group-hover:text-white/70 transition-colors">
                    V3
                  </span>
                </div>
                {/* V2 */}
                <div className="h-[40px] border-b border-white/5 flex items-center px-2 group">
                  <span className="text-[10px] font-bold text-white/30 group-hover:text-white/70 transition-colors">
                    V2
                  </span>
                </div>
                {/* V1 */}
                <div className="h-[50px] border-b border-white/5 flex items-center px-2 bg-white/[0.02] group">
                  <span className="text-[10px] font-bold text-blue-400/50 group-hover:text-blue-400 transition-colors">
                    V1
                  </span>
                </div>
                {/* A1 */}
                <div className="h-[40px] border-b border-white/5 flex items-center px-2 mt-1 group">
                  <span className="text-[10px] font-bold text-green-400/50 group-hover:text-green-400 transition-colors">
                    A1
                  </span>
                </div>
              </div>

              {/* Tracks Content */}
              <div className="flex-1 relative bg-[#0f0f0f] overflow-x-hidden group/timeline">
                {/* Timecode Ruler */}
                <div className="h-6 border-b border-white/5 bg-[#141414] flex items-end px-2 whitespace-nowrap overflow-hidden">
                  <div className="w-[150%] h-full flex items-end opacity-40">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-start h-full justify-end border-l border-white/20 pl-0.5"
                      >
                        <span className="text-[8px] text-white/60 mb-0.5 select-none">{`00:0${Math.floor(i / 10)}:0${i % 10}:00`}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Grid / Timeline Space */}
                <div className="absolute top-6 bottom-0 left-0 w-[150%] flex">
                  {/* Grid lines */}
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 border-l border-white/[0.02] h-full"
                    />
                  ))}

                  {/* Playhead Line */}
                  <motion.div
                    animate={controls}
                    initial={{ x: "0%" }}
                    className="absolute top-0 bottom-0 w-px bg-amber-500 z-50 pointer-events-none"
                    style={{ left: "20%" }} // Base offset if needed
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-amber-500" />
                    <div className="absolute top-0 bottom-0 w-px bg-amber-500 shadow-[0_0_10px_rgba(245, 158, 11,0.8)]" />
                  </motion.div>

                  {/* --- CLIPS --- */}
                  <div className="absolute inset-0">
                    {/* V3 Track - Text/Adjustment Layers (Pinkish) */}
                    <div className="absolute top-[0px] w-full h-[40px] flex items-center">
                      <motion.div
                        initial={{ opacity: 0, width: "0%" }}
                        animate={{ opacity: 1, width: "12%" }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute left-[15%] h-[26px] bg-pink-500/30 border border-pink-400/50 rounded-sm flex items-center px-2 overflow-hidden hover:bg-pink-500/40 cursor-pointer transition-colors"
                      >
                        <span className="text-[9px] text-pink-200 font-medium whitespace-nowrap truncate">
                          Text: Cinematic Intro
                        </span>
                      </motion.div>
                    </div>

                    {/* V2 Track - B-Roll / Overlays (Cyan) */}
                    <div className="absolute top-[40px] w-full h-[40px] flex items-center">
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.4, delay: 1 }}
                        className="absolute left-[25%] w-[18%] h-[26px] bg-cyan-600/30 border border-cyan-400/50 rounded-sm flex items-center px-2 overflow-hidden hover:bg-cyan-600/40 cursor-pointer origin-bottom"
                      >
                        <span className="text-[9px] text-cyan-200 font-medium truncate">
                          B-Roll_Drone_01.mp4
                        </span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.4, delay: 1.2 }}
                        className="absolute left-[50%] w-[15%] h-[26px] bg-cyan-600/30 border border-cyan-400/50 rounded-sm flex items-center px-2 overflow-hidden hover:bg-cyan-600/40 cursor-pointer origin-bottom"
                      >
                        <span className="text-[9px] text-cyan-200 font-medium truncate">
                          LightLeak_Overlay
                        </span>
                      </motion.div>
                    </div>

                    {/* V1 Track - Main Video (Blue) */}
                    <div className="absolute top-[80px] w-full h-[50px] flex items-center bg-blue-500/[0.02]">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="absolute left-[5%] w-[35%] h-[34px] bg-blue-600/40 border border-blue-400/60 rounded-sm flex items-center px-2 overflow-hidden shadow-sm hover:bg-blue-600/50 cursor-pointer"
                      >
                        {/* Fake thumbnails inside clip */}
                        <div className="absolute inset-y-0 left-0 w-8 bg-black/20 border-r border-blue-400/20 flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=50&h=30&fit=crop"
                            alt=""
                            className="opacity-50 h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-[10px] text-white font-medium ml-10 truncate z-10 drop-shadow-md">
                          A_Cam_Interview.braw
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="absolute left-[41%] w-[25%] h-[34px] bg-blue-600/40 border border-blue-400/60 rounded-sm flex items-center px-2 overflow-hidden shadow-sm hover:bg-blue-600/50 cursor-pointer"
                      >
                        <div className="absolute inset-y-0 left-0 w-8 bg-black/20 border-r border-blue-400/20 flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=50&h=30&fit=crop"
                            alt=""
                            className="opacity-50 h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-[10px] text-white font-medium ml-10 truncate z-10 drop-shadow-md">
                          A_Cam_Action.braw
                        </span>
                      </motion.div>
                    </div>

                    {/* A1 Track - Audio (Green) */}
                    <div className="absolute top-[134px] w-full h-[40px] flex items-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="absolute left-[5%] w-[35%] h-[26px] bg-emerald-600/30 border border-emerald-400/40 rounded-sm flex items-center justify-center overflow-hidden hover:bg-emerald-600/40 cursor-pointer"
                      >
                        {/* Simulated Waveform */}
                        <div className="w-full h-full flex items-center justify-around px-1 opacity-50">
                          {Array.from({ length: 40 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-[1.5px] bg-emerald-300 rounded-full"
                              style={{
                                height: `${Math.max(10, (i * 13) % 90)}%`,
                              }}
                            />
                          ))}
                        </div>
                        <span className="absolute left-2 text-[9px] text-emerald-100 font-medium bg-black/40 px-1 rounded truncate">
                          A_Cam_Audio.wav
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                        className="absolute left-[41%] w-[25%] h-[26px] bg-emerald-600/30 border border-emerald-400/40 rounded-sm flex items-center justify-center overflow-hidden hover:bg-emerald-600/40 cursor-pointer"
                      >
                        {/* Simulated Waveform */}
                        <div className="w-full h-full flex items-center justify-around px-1 opacity-50">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-[1.5px] bg-emerald-300 rounded-full"
                              style={{
                                height: `${Math.max(10, (i * 17) % 90)}%`,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
