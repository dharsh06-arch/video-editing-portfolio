"use client";

import { useState } from "react";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { motion } from "framer-motion";
import { CheckCircle2, Scissors, Palette, Clapperboard, AudioWaveform, MonitorPlay, Film } from "lucide-react";

const services = [
  {
    id: "shortForm",
    title: "Short Form Editing",
    desc: "Platform-ready short-form content with clean cuts & pacing to help you grow.",
    bullets: ["Optimized for all platforms", "Captions & transitions included", "Delivered within 48–72 hours"],
    icon: Scissors,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "colorGrading",
    title: "Color Grading",
    desc: "Every frame color-treated to feel intentional and premium.",
    bullets: ["Custom color profile", "LUT & skin correction", "Consistent across all edits"],
    icon: Palette,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "longForm",
    title: "Long Form Editing",
    desc: "Crafted long-form videos with storytelling to keep viewers engaged.",
    bullets: ["Optimized for YouTube", "Seamless cuts & flow", "Delivered within 48–72 hours"],
    icon: Clapperboard,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "motion",
    title: "Motion Graphics",
    desc: "Professional motion design that makes your brand unforgettable.",
    bullets: ["Custom intros & outros", "On-brand text overlays", "Any video format compatible"],
    icon: MonitorPlay,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "audio",
    title: "Audio Finetuning",
    desc: "We balance and enhance your audio so every word lands.",
    bullets: ["Noise removal & cleanup", "EQ & volume balancing", "Music & SFX mixing"],
    icon: AudioWaveform,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "clipping",
    title: "Clipping",
    desc: "Repurpose your long-form content without lifting a finger.",
    bullets: ["Long-form to short-form", "Best-moment extraction", "Ready-to-post formatting"],
    icon: Film,
    colSpan: "md:col-span-1 lg:col-span-1",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
};

export default function Services() {
  return (
    <section id="services" className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24 min-h-[800px] flex flex-col items-center overflow-hidden">

      {/* Radial Faded Grid Background */}
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

      {/* Edge glow beams */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px z-10" style={{ boxShadow: "0 0 60px 6px rgba(245, 158, 11,0.55), 0 0 120px 20px rgba(245, 158, 11,0.20)" }} />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full z-0" />

      <div className="w-full relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border-2 border-black bg-[#9F5255] text-white font-black text-xs font-sans uppercase tracking-widest shadow-[3px_3px_0px_#000000] transform -rotate-1">
            THE SERVICES
          </div>

          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter drop-shadow-md">
            WHY CHOOSE US?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            We don't just edit videos. We build complete, high-end visual pipelines tailored to your content strategy. Discover our premium services below.
          </p>
        </div>


        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative border border-white/70 flex flex-col justify-between overflow-hidden rounded-sm bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-amber-500/40 hover:shadow-[0_15px_40px_rgba(245, 158, 11,0.15)] ${service.colSpan}`}
    >
      {/* Dynamic Cursor Spotlight Beam */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 space-y-6">
        {/* Icon & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-black border border-amber-500 group-hover:border-amber-500/50 shadow-inner transition-colors duration-300">
            <Icon className="h-6 w-6 text-white group-hover:text-amber-400 transition-colors duration-300" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base leading-relaxed text-white/60 font-medium max-w-sm">
          {service.desc}
        </p>
      </div>

      {/* Bullets */}
      <div className="relative z-10 mt-8 space-y-3 pt-6 border-t border-white/5">
        {service.bullets.map((bullet, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-amber-400 opacity-80 shrink-0" />
            <span className="text-sm md:text-base font-medium text-white/80">{bullet}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
