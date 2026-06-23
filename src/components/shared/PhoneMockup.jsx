"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, Send, Music, Volume2, VolumeX, Loader2 } from "lucide-react";

const PLAYLIST = [
  "https://player.vimeo.com/external/384761655.sd.mp4?s=3829dece4e79ad3cd8247f01261d75d140e800c9&profile_id=165",
  "https://player.vimeo.com/external/435674703.sd.mp4?s=7fdf317e0892015df36c2ef6cf4cd94895ccbe44&profile_id=165",
  "https://player.vimeo.com/external/459389137.sd.mp4?s=887d19c72c2197ef432d56a29e46a7be7c0bf269&profile_id=165"
];

const SONG_NAMES = [
  "CINEMATIC.MOV",
  "HYP_SPORTS.MP4",
  "AMBIENT_VIBE.MOV"
];

export default function PhoneMockup({
  backCards = [],
  playlist = PLAYLIST,
  songNames = SONG_NAMES
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Auto-cycle video index every 6 seconds
  useEffect(() => {
    // Only auto-cycle if there are multiple videos
    if (playlist.length <= 1) return;

    const timer = setInterval(() => {
      setIsLoading(true);
      // Trigger a fake loading buffer transition
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % playlist.length);
        setIsLoading(false);
        setProgress(0);
      }, 700);
    }, 6500);

    return () => clearInterval(timer);
  }, [playlist]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentIdx]);

  return (
    <div className="relative w-full max-w-[400px] aspect-[9/19.5] mx-auto flex items-center justify-center py-8">
      
      {/* Background stacked cards fanned out behind the phone */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {backCards.map((card, idx) => {
          const rotation = idx === 0 ? "-rotate-12 -translate-x-1/3 scale-90" : "rotate-12 translate-x-1/3 scale-90";
          return (
            <motion.div
              key={idx}
              className={`absolute w-[220px] aspect-[9/16] rounded-md overflow-hidden glass-panel shadow-2xl opacity-40 ${rotation}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * idx }}
              whileHover={{ scale: 0.95, opacity: 0.7, rotate: idx === 0 ? -6 : 6 }}
            >
              <img
                src={card.imageUrl}
                alt="Stacked background clip"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 to-transparent">
                <div className="text-[10px] text-lime font-bold uppercase tracking-wider">{card.category}</div>
                <div className="text-xs text-slate-100 font-semibold line-clamp-1">{card.title}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main iPhone container with floating animation */}
      <motion.div
        className="relative z-10 w-full max-w-[310px] sm:max-w-[330px] rounded-[52px] bg-black p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),_0_0_50px_rgba(245, 158, 11,0.18)] transition-colors duration-500"
        // animate={{
        //   y: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : [-12, 12, -12],
        // }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Device Frame Inner Rim */}
        <div className="relative w-full rounded-[38px] overflow-hidden aspect-[9/19.2] bg-black">
          
          {/* Dynamic Island */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-between px-4 text-[9px] text-white/85 font-medium select-none shadow-md">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse shrink-0" />
            <span className="truncate max-w-[65px] text-center tracking-wide font-sans uppercase font-bold text-lime">{songNames[currentIdx]}</span>
            <div className="flex gap-0.5 items-end h-2.5 w-3">
              <span className="w-0.5 bg-lime animate-bounce h-2" style={{ animationDelay: '0.1s' }} />
              <span className="w-0.5 bg-lime animate-bounce h-3" style={{ animationDelay: '0.3s' }} />
              <span className="w-0.5 bg-lime animate-bounce h-1.5" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Screen Side Reflections */}
          {/* <div className="absolute inset-0 pointer-events-none z-40 bg-gradient-to-tr from-transparent via-white/5 to-transparent mix-blend-overlay" /> */}

          {/* Video Player */}
          <div className="absolute inset-0 w-full h-full bg-neutral-950" onClick={togglePlay}>
            <video
              key={currentIdx}
              ref={(el) => {
                videoRef.current = el;
                if (el && isPlaying) {
                  el.play().catch(e => console.log("Autoplay prevented:", e));
                }
              }}
              src={playlist[currentIdx]}
              loop
              muted={isMuted}
              playsInline
              autoPlay
              crossOrigin="anonymous"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          {/* Dynamic Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/75 backdrop-blur-[4px] pointer-events-none">
              <Loader2 className="w-8 h-8 text-lime animate-spin mb-2" />
              <span className="text-[9px] font-bold text-lime uppercase tracking-widest animate-pulse">LOADING CLIP...</span>
            </div>
          )}

          {/* Play/Pause Overlay Indicator */}
          {!isPlaying && !isLoading && (
            <div
              className="absolute inset-0 z-35 flex items-center justify-center bg-black/35 pointer-events-none"
              onClick={togglePlay}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="p-5 rounded-full bg-black/60 border border-lime/30 text-lime shadow-lg"
              >
                <Play className="w-8 h-8 fill-lime" />
              </motion.div>
            </div>
          )}

          {/* Reels UI Overlay - Gradient Removed */}
          <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-end p-4">
            
            {/* Top Sound Toggle */}
            <div className="absolute top-16 right-4 pointer-events-auto">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/40 border border-white/10 text-white hover:bg-black/60 transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-lime" /> : <Volume2 className="w-4 h-4 text-lime" />}
              </button>
            </div>

            {/* Right Side Actions Panel (Reels style) */}
            <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 pointer-events-auto">
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="p-2 rounded-full bg-black/40 border border-white/10 text-white group-hover:bg-surface group-hover:text-white transition-all duration-300">
                  <Heart className="w-4 h-4 fill-transparent group-hover:fill-white" />
                </div>
                <span className="text-[10px] text-white/85 mt-1 font-semibold">12K</span>
              </div>
              
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="p-2 rounded-full bg-black/40 border border-white/10 text-white group-hover:bg-lime group-hover:text-black transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-white/85 mt-1 font-semibold">348</span>
              </div>

              <div className="flex flex-col items-center cursor-pointer group">
                <div className="p-2 rounded-full bg-black/40 border border-white/10 text-white group-hover:bg-lime group-hover:text-black transition-all duration-300">
                  <Send className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-white/85 mt-1 font-semibold">Share</span>
              </div>
            </div>

            {/* Left Side Details Panel */}
            {/* <div className="w-[80%] bg-linear-to-t from-transparent to-black text-left select-none mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full border border-lime bg-surface overflow-hidden shrink-0 flex items-center justify-center text-[10px] font-bold text-white">
                  V
                </div>
                <span className="text-xs font-bold text-white tracking-wide">@cinematic_editor</span>
                <span className="text-[9px] bg-lime/90 text-black px-1.5 py-0.5 rounded font-black shrink-0">PRO</span>
              </div>
              <p className="text-[10px] text-white/90 leading-normal line-clamp-2 mb-2 font-sans">
                Cinematic pacing, color grading, & sound design that drives high engagement. ✨🎬 #videoediting #premierepro #colorgrading
              </p>
              <div className="flex items-center gap-1.5 text-[9px] text-lime font-semibold uppercase tracking-wider">
                <Music className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
            </div> */}

            {/* Bottom Progress Bar */}
            {/* <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-1">
              <div
                className="h-full bg-gradient-to-r from-surface to-lime transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div> */}

          </div>

        </div>
      </motion.div>
      
    </div>
  );
}
