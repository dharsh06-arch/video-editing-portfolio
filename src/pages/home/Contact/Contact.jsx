"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calendar, Heart, MessageSquare } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import PhoneMockup from "@/components/shared/PhoneMockup";

export default function Contact() {
  const liveFeedMetrics = [
    { text: "90% CVR", icon: <TrendingUp className="w-4 h-4" /> },
    { text: "50+ Bookings", icon: <Calendar className="w-4 h-4" /> },
    { text: "10K+ Likes", icon: <Heart className="w-4 h-4" /> },
    { text: "1k+ Comments", icon: <MessageSquare className="w-4 h-4" /> },
    { text: "2.4x RETENTION", icon: <TrendingUp className="w-4 h-4" /> },
    { text: "15M+ IMPRESSIONS", icon: <Calendar className="w-4 h-4" /> },
  ];

  const infiniteScrollItems = [...liveFeedMetrics, ...liveFeedMetrics];

  return (
    <section 
      id="contact" 
      className="relative z-20 py-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-[rgba(186,243,94,0.1)]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(139,92,246,0.15)] rounded-full blur-[140px] mix-blend-screen pointer-events-none z-0 animate-pulse" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div>
            <SectionTitle 
              tag="READY TO GROW? "
              // title="Take Your Content To The Next Level Today."
              highlightTitle="Take Your Content To The Next Level Today.."
              align="left"
              description="Start with a free 30-minute discovery call and see how strategic premium video editing can elevate your brand equity and accelerate your viewer growth curves."
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Premium Book a Free Call - Enhanced with BG + Glow */}
            <a 
              href="#book" 
              className="premium-call-btn group relative"
            >
              <div className="premium-call-inner flex items-center gap-2 text-base font-bold">
                Book a Free Call
              </div>
              {/* Extra Outline Glow Layer */}
              <div className="absolute -inset-[2px] rounded-[999px] bg-gradient-to-r from-[#baf35e] via-[#d2f78c] to-[#baf35e] opacity-40 blur-sm -z-10" />
            </a>

            {/* Ask a Question - Clean Secondary Style */}
            <a 
              href="#ask" 
              className="px-8 py-3.5 bg-[#F1F3E0] rounded-full border border-white/30 hover:border-[#baf35e] hover:text-[#baf35e] text-black font-bold text-sm tracking-wide transition-all duration-300 hover:bg-green-400/5"
            >
              Ask a Question
            </a>
          </div>
        </div>

        {/* Right Side - Compact Live Feed + Clean Phone */}
        <div className="lg:col-span-6 relative flex items-center justify-center h-[520px] md:h-[620px] overflow-hidden">
          
          {/* Compact Live Feed */}
          <div className="absolute left-4 md:left-8 inset-y-0 w-[38%] z-20 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 24,
                repeat: Infinity,
              }}
              className="flex flex-col gap-3 py-8"
            >
              {infiniteScrollItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: [0.9, 1, 0.92], 
                    x: [-6, 3, -3] 
                  }}
                  transition={{
                    duration: 3.2,
                    delay: (i % liveFeedMetrics.length) * 0.22,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={`
                    flex items-center gap-2.5 px-4 py-2 w-fit rounded-3xl 
                    bg-[#EDEDCE] text-black font-medium text-sm tracking-wide 
                    shadow-xl border border-white/70 backdrop-blur-xl
                    ${i % 2 === 0 ? 'ml-0' : 'ml-5'} 
                    ${i % 3 === 0 ? 'ml-2' : ''}
                  `}
                  style={{ transform: `rotate(${i % 2 === 0 ? '-1' : '1.5'}deg)` }}
                >
                  <div className="w-5 h-5 flex items-center justify-center bg-[#8AA624] text-white rounded-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="whitespace-nowrap pr-1">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Fade Masks */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-30" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-30" />
          </div>

          {/* Clean Phone Mockup */}
          <div className="relative z-10 w-full flex justify-center pl-24 md:pl-32">
            <PhoneMockup 
              backCards={[]} 
              playlist={[]} 
              songNames={[]}
            />
          </div>

        </div>

      </div>
    </section>
  );
}