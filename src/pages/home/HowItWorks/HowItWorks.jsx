"use client";

import { motion } from "framer-motion";
import { Layers, Target, BarChart3, TrendingUp } from "lucide-react";

// SectionTitle component definition
const SectionTitle = ({ tag, title, highlightTitle }) => (
  <div className="text-center space-y-3 mb-16">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#baf35e] block">
      {tag}
    </span>
    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
      {title}
    </h2>
    <div className="flex items-center justify-center gap-3 mt-2">
      <div className="w-12 h-0.5 bg-[#baf35e]" />
      <span className="text-sm font-bold uppercase tracking-widest text-white/60">
        {highlightTitle}
      </span>
      <div className="w-12 h-0.5 bg-[#baf35e]" />
    </div>
  </div>
);

const frameworkSteps = [
  {
    number: "01",
    icon: <Layers className="w-5 h-5 text-[#baf35e]" />,
    title: "Foundation",
    description: "Tracking, creatives, audiences & offer clarity.",
  },
  {
    number: "02",
    icon: <Target className="w-5 h-5 text-[#baf35e]" />,
    title: "Validation",
    description: "Prove what converts before scaling.",
  },
  {
    number: "03",
    icon: <BarChart3 className="w-5 h-5 text-[#baf35e]" />,
    title: "Optimization",
    description: "Refine, cut waste, and improve roads.",
  },
  {
    number: "04",
    icon: <TrendingUp className="w-5 h-5 text-[#baf35e]" />,
    title: "Scale",
    description: "Increase budget only on winners.",
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-20 py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-[rgba(186,243,94,0.1)] overflow-hidden">

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(186, 243, 94, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(186, 243, 94, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '-1px -1px'
        }}
      />

      {/* Large radial gradient glow centered behind the main object. */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-centered-glow rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Ambient Light Beams */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(186,243,94,0.06)] rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[rgba(139,92,246,0.06)] rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header Block - Exact match to image */}
        <SectionTitle
          tag="[WORKFLOW]"
          title="HOW IT WORKS"
          highlightTitle="PROCESS"
        />

        {/* Roadmap Layout */}
        <div className="relative">

          {/* Timeline Path (SVG remains background) */}
          <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 1000 800" fill="none" preserveAspectRatio="none" className="overflow-visible">
              <defs>
                <linearGradient id="roadmapGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#baf35e" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#baf35e" stopOpacity="0.8" />
                </linearGradient>
                <filter id="roadmapShadow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M 500,20 C 150,100 150,200 500,250 C 850,300 850,400 500,450 C 150,500 150,600 500,700"
                stroke="url(#roadmapGlow)"
                strokeWidth="3"
                strokeDasharray="8 10"
                filter="url(#roadmapShadow)"
                opacity="0.4"
              />

              <circle cx="500" cy="20" r="6" fill="#baf35e" opacity="0.8" />
              <circle cx="500" cy="250" r="6" fill="#baf35e" opacity="0.8" />
              <circle cx="500" cy="450" r="6" fill="#baf35e" opacity="0.8" />
              <circle cx="500" cy="700" r="6" fill="#baf35e" opacity="0.8" />
            </svg>
          </div>

          {/* Steps */}
          <div className="space-y-20 md:space-y-28 relative z-10 flex flex-col items-center">
            {frameworkSteps.map((step, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center max-w-2xl w-full"
                >
                  {/* Content Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="
                      p-6 rounded-2xl bg-white/[0.03] border border-white/5 
                      hover:border-[#baf35e]/30 transition-all duration-300 group
                      w-full text-center
                    "
                  >
                    {/* Step Number */}
                    <div className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">
                      {step.number}
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 justify-center mt-2">
                      <div className="p-2 rounded-lg bg-[#baf35e]/10 border border-[#baf35e]/20 flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mt-2 text-center">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Decorative Line */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#baf35e]/30 to-transparent" />
        </div>

      </div>
    </section>
  );
}
