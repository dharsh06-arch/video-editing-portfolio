"use client";

import { RotateCw, MessageCircle, Zap } from "lucide-react";
import AboutPhone from "./AboutPhone";

export default function About() {
  const features = [
    {
      title: "Revisions",
      desc: "Not happy? We'll fix it. Every project comes with multiple revision rounds.",
      icon: RotateCw,
    },
    {
      title: "Active Support",
      desc: "Questions don't wait, and neither do we. Our team is always just a message away.",
      icon: MessageCircle,
    },
    {
      title: "Fast Delivery",
      desc: "Zero compromise on speed. Your content, delivered on time, every time.",
      icon: Zap,
    }
  ];

  return (
    <div className="w-full bg-[#050806] px-4 md:px-8 py-12">
      <section
        id="about"
        className="relative z-20 py-24 px-6 md:px-12 lg:px-24 rounded-[48px] md:rounded-[64px] bg-gradient-to-r from-[#111a14] via-[#080d0a] to-[#050806] border border-lime/10 overflow-hidden shadow-[0_20px_50px_rgba(5,8,6,0.9)]"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

        {/* Wavy Ribbon Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80">
          <svg
            className="absolute top-[20%] left-0 w-[200%] min-w-[1400px] h-[600px] overflow-visible"
            viewBox="0 0 1400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="ribbonPath"
              d="M -100 200 C 200 40, 500 360, 800 200 C 1100 40, 1300 360, 1600 200"
              fill="none"
              stroke="#baf35e"
              strokeWidth="54"
              strokeLinecap="round"
            />
            <text className="font-black uppercase tracking-[0.2em] text-[16px] fill-[#0c120e] select-none">
              <textPath href="#ribbonPath" startOffset="0%">
                • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING
              </textPath>
            </text>
          </svg>
        </div>

        {/* Glowing Lighting Blends */}
        <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lime/10 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-lime-light/10 blur-[150px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Content, Stats, and Features */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Header / Content */}
            <div className="space-y-4 text-left">
          <div className="shimmer-pill inline-flex items-center justify-center px-6 py-3 rounded-full bg-[rgba(20,28,23,0.6)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl">
  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-white)] relative z-10">
    THE ABOUT
  </span>
</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                High-impact narrative. <br className="hidden md:block" />
                <span className="font-serif italic font-normal text-lime lowercase">Strategic video delivery.</span>
              </h2>
              <div className="w-16 h-1 bg-lime rounded-full mt-4" />
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans mt-4 max-w-xl">
                I am a dedicated video editor helping creators and modern brands build a commanding online presence. By pairing high-end cinematic aesthetics with retention-focused editing strategies, I turn passive viewers into a dedicated audience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-6 border-y border-white/5">
              <div>
                <div className="text-4xl md:text-5xl font-black text-lime tracking-tighter">100+</div>
                <p className="mt-2 text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">Videos Edited for Clients</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-lime tracking-tighter">200+</div>
                <p className="mt-2 text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">Reviews from Happy Creators</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-lime tracking-tighter">₹100K+</div>
                <p className="mt-2 text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">Generated in Client Revenue</p>
              </div>
            </div>

            {/* Features (No Boxes Layout) */}
            <div className="space-y-8 text-left pt-2">
              {features.map((feature, i) => (
                <div key={i} className="group relative pl-8 border-l-2 border-white/10 hover:border-lime transition-colors duration-300">
                  {/* Glowing bullet dot */}
                  <div className="absolute left-[-6px] top-1.5 w-[10px] h-[10px] rounded-full bg-white/20 group-hover:bg-lime group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-lime/50" />
                  
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-lime transition-colors duration-300 flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-lime/70 group-hover:text-lime transition-colors duration-300" />
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 font-sans leading-relaxed max-w-xl">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <AboutPhone />
          </div>

        </div>
      </section>
    </div>
  );
}