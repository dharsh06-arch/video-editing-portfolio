"use client";

import { RotateCw, MessageCircle, Zap } from "lucide-react";
import AboutPhone from "./AboutPhone";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { CountUp } from "@/components/ui/CountUp";

export default function About() {
  // const features = [
  //   {
  //     title: "Revisions",
  //     desc: "Not happy? We'll fix it. Every project comes with multiple revision rounds.",
  //     icon: RotateCw,
  //   },
  //   {
  //     title: "Active Support",
  //     desc: "Questions don't wait, and neither do we. Our team is always just a message away.",
  //     icon: MessageCircle,
  //   },
  //   {
  //     title: "Fast Delivery",
  //     desc: "Zero compromise on speed. Your content, delivered on time, every time.",
  //     icon: Zap,
  //   }
  // ];

  return (
    <div>
      <section
        id="about"
        className="relative z-20 min-h-[100svh] flex flex-col justify-center py-24 px-6 md:px-12 bg-gradient-to-r from-[#111a14] via-[#080d0a] to-[#050806] overflow-hidden shadow-[0_20px_50px_rgba(5,8,6,0.9)]"
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

        {/* Wavy Ribbon Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
          <svg
            className="absolute top-[35%] left-0 h-[600px] overflow-visible w-[5600px]"
            viewBox="0 0 5600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="ribbonPath"
              d="M 0 200 Q 350 40, 700 200 T 1400 200 T 2100 200 T 2800 200 T 3500 200 T 4200 200 T 4900 200 T 5600 200"
              fill="none"
              stroke="#a855f7"
              strokeWidth="54"
              strokeLinecap="round"
            />
            <text className="font-black uppercase text-[16px] fill-[#fff] tracking-[0.2em] select-none" dominantBaseline="middle">
              <textPath href="#ribbonPath" startOffset="0" textLength="4800" lengthAdjust="spacing">
                <animate attributeName="startOffset" from="0" to="-2400" dur="20s" repeatCount="indefinite" />
                • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING • PORTFOLIO • IMPACT • VISUALS • STORYTELLING
              </textPath>
            </text>
          </svg>
        </div>

        {/* Glowing Lighting Blends */}
        <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Content, Stats, and Features */}
          <div className="lg:col-span-7 space-y-12">

            {/* Header / Content */}
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[rgba(20,28,23,0.6)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-white)] relative z-10">
                  THE ABOUT
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                High-impact narrative. <br className="hidden md:block" />
                <span className="font-normal text-amber-400 lowercase">Strategic video delivery.</span>
              </h2>
              <div className="w-16 h-1 bg-amber-500 rounded-full mt-4" />
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans mt-4 max-w-xl">
                I am a dedicated video editor helping creators and modern brands build a commanding online presence. By pairing high-end cinematic aesthetics with retention-focused editing strategies, I turn passive viewers into a dedicated audience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-6 border-y border-white/5">
              <div>
                <div className="text-4xl md:text-5xl text-amber-400 tracking-tighter">
                  <CountUp to={100} suffix="+" duration={2.5} />
                </div>
                <p className="mt-2 text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">Videos Edited for Clients</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl text-amber-400 tracking-tighter">
                  <CountUp to={200} suffix="+" duration={2.5} />
                </div>
                <p className="mt-2 text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">Reviews from Happy Creators</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl text-amber-400 tracking-tighter">
                  <CountUp to={100} prefix="₹" suffix="K+" duration={2.5} />
                </div>
                <p className="mt-2 text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">Generated in Client Revenue</p>
              </div>
            </div>

            {/* Features (No Boxes Layout) */}
            {/* <div className="space-y-8 text-left pt-2">
              {features.map((feature, i) => (
                <div key={i} className="group relative pl-8 border-l-2 border-white/10 hover:border-amber-400 transition-colors duration-300">
                  <div className="absolute left-[-6px] top-1.5 w-[10px] h-[10px] rounded-full bg-white/20 group-hover:bg-amber-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-amber-500/50" />

                  <h3 className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-amber-400/70 group-hover:text-amber-400 transition-colors duration-300" />
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 font-sans leading-relaxed max-w-xl">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div> */}

          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 w-full h-full flex justify-center lg:justify-end relative">
            <AboutPhone />
          </div>

        </div>
      </section>
    </div>
  );
}