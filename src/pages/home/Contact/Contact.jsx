"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calendar, Heart, MessageSquare } from "lucide-react";
import PhoneMockup from "@/components/shared/PhoneMockup";
import { NoiseTexture } from "@/components/ui/NoiseTexture";

export default function Contact() {
  const liveFeedMetrics = [
    { text: "90% CVR", icon: <TrendingUp className="w-3.5 h-3.5" /> },
    { text: "50+ Bookings", icon: <Calendar className="w-3.5 h-3.5" /> },
    { text: "10K+ Likes", icon: <Heart className="w-3.5 h-3.5" /> },
    { text: "1k+ Comments", icon: <MessageSquare className="w-3.5 h-3.5" /> },
  ];

  const infiniteScrollItems = [...liveFeedMetrics, ...liveFeedMetrics, ...liveFeedMetrics];

  return (
    <section
      id="contact"
      className="relative z-20 py-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-amber-500/10"
    >
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <NoiseTexture
        frequency={0.65}
        octaves={5}
        slope={0.75}
        noiseOpacity={0.35}
        className=""
      />

      <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-600/20 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Side */}
        <div className="lg:col-span-6 space-y-8 text-left">

          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 text-black text-xs font-bold tracking-wide shadow-sm">
              Ready To Grow?
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight">
              Take Your Content <br className="hidden md:block" /> To The Next <br className="hidden md:block" /> Level Today.
            </h2>

            <p className="text-sm md:text-base text-slate-300 max-w-[420px] leading-relaxed font-medium">
              Start with a free 30-minute discovery call and see how strategic video editing can elevate your brand and accelerate your growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Book a Free Call */}
            <a
              href="#book"
              className="px-8 py-3.5 bg-white rounded-full text-black font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(245, 158, 11,0.3)] hover:shadow-[0_0_40px_rgba(245, 158, 11,0.5)]"
            >
              Book a Free Call
            </a>

            {/* Ask a Question */}
            <a
              href="#ask"
              className="px-8 py-3.5 bg-black rounded-full border border-white/40 hover:border-white text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white/5"
            >
              Ask a Question
            </a>
          </div>
        </div>

        {/* Right Side - Floating Metrics + Clean Phone */}
        <div className="lg:col-span-6 relative flex items-center justify-center h-[420px] overflow-visible">

          {/* Floating Live Feed */}
          <div className="absolute left-[-50px] md:left-4 min-w-[300px] inset-y-0 w-[45%] z-20 pointer-events-none overflow-hidden hidden lg:block py-8">
            <motion.div
              animate={{ y: ["0%", "-33.333333%"] }}
              transition={{
                ease: "linear",
                duration: 15,
                repeat: Infinity,
              }}
              className="flex flex-col gap-5 pb-5"
            >
              {infiniteScrollItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: [0.9, 1, 0.92],
                    x: [-4, 2, -5]
                  }}
                  transition={{
                    duration: 3,
                    delay: (i % liveFeedMetrics.length) * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={`
                    flex items-center gap-2.5 p-1.5 w-fit rounded-sm 
                    bg-white/90 text-black font-bold text-xs tracking-wide 
                    shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/50 backdrop-blur-md
                    ${i % 2 === 0 ? 'ml-5' : 'ml-10'} 
                    ${i % 3 === 0 ? 'ml-7' : ''}
                  `}
                  style={{ transform: `rotate(${i % 2 === 0 ? '-1.5' : '1.5'}deg)` }}
                >
                  <div className="w-6 h-6 flex items-center justify-center bg-amber-600 text-white rounded-full flex-shrink-0 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="whitespace-nowrap pr-2">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Fade Masks */}
            {/* <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-30" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-30" /> */}
          </div>

          {/* Clean Phone Mockup */}
          <div className="relative z-10 w-full flex justify-center pl-24 md:pl-32">
            <PhoneMockup
              backCards={[]}
              playlist={["https://res.cloudinary.com/ds61pb9ku/video/upload/Fushion_Japan_1_yxz6po.mp4"]}
              songNames={["FUSION_JAPAN.MP4"]}
            />
          </div>

        </div>

      </div>
    </section>
  );
}