"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import MagicRings from "@/components/shared/MagicRings";
import Highlighter from "@/components/ui/Highlighter";
import LightRays from "@/components/shared/LightRays";
import { AvatarCircles } from "@/components/ui/AvatarCircles";
import { NoiseTexture } from "@/components/ui/NoiseTexture";

const MOCK_AVATARS = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=compress&cs=tinysrgb&w=150",
    profileUrl: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&w=150",
    profileUrl: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=150",
    profileUrl: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=compress&cs=tinysrgb&w=150",
    profileUrl: "#",
  },
];

export default function Hero({ onScrollToSection }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-[#050806] w-full overflow-hidden font-sans text-white flex flex-col items-center justify-start pt-28 pb-20 px-6">
      {/* Background Layer Group */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 1. Deep Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#baf35e]/5 via-transparent to-transparent" />

        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-gradient-to-b from-[#baf35e]/12 to-transparent blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#84cc16]/8 blur-[180px]" />

        {/* 2. MAGIC RINGS BACKGROUND */}
        <div className="absolute inset-0 opacity-85 mix-blend-screen">
          <MagicRings
            color="#baf35e"
            colorTwo="#84cc16"
            ringCount={6}
            speed={0.5}
            attenuation={10}
            lineThickness={2}
            baseRadius={0.3}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={0.8}
            blur={0}
            noiseAmount={0.08}
            rotation={isMobile ? 90 : 10}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={true}
            mouseInfluence={0.25}
            hoverScale={1.15}
            parallax={0.08}
            clickBurst={true}
          />
        </div>

        {/* 3. Light Rays (Re-enabled with better balance) */}
        {/* <div className="absolute inset-0 opacity-65 mix-blend-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#baf35e"
            raysSpeed={0.9}
            lightSpread={0.85}
            rayLength={2.1}
            followMouse={true}
            mouseInfluence={0.25}
            noiseAmount={0.06}
            distortion={0.04}
          />
        </div> */}

        {/* 4. Noise Texture - Added here for subtle film grain over everything */}
        <NoiseTexture
          frequency={0.65}
          octaves={5}
          slope={0.75}
          noiseOpacity={0.35}
          className="mix-blend-soft-light opacity-80"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <AvatarCircles avatarUrls={MOCK_AVATARS} numPeople={120} />
          <span className="text-sm text-white/60 font-medium">
            Trusted by 100+ global creators
          </span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-6 w-full max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tighter leading-[0.95]"
          >
            THE FUTURE OF VIDEO
            <br />
            <span className="font-serif italic font-normal text-lime">
              <Highlighter
                action="highlight"
                color="#3e44b8ff"
                strokeWidth={3}
                animationDuration={1000}
                isView={true}
              >
                storytelling
              </Highlighter>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            From viral short-form reels to premium brand commercials — every
            frame is designed to capture attention and drive results.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={() => onScrollToSection("contact")}
            primary
            glowing={true}
            icon={ArrowRight}
            className="rounded-full text-sm font-black uppercase tracking-widest transition-all hover:-translate-y-0.5"
          >
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
