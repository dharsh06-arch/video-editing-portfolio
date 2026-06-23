"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calendar, Heart, MessageSquare, PhoneCall, MessageCircle } from "lucide-react";
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
      className="relative z-20 py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-amber-500/10"
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-16 items-center relative z-10">

        {/* Left Side Container */}
        <div className="col-span-1 lg:col-span-6 space-y-8 text-left">
          <div className="space-y-6">
           
             <div className="inline-block px-4 py-1.5 rounded-full border-2 border-black bg-[#FEF3E2] text-black font-black text-xs font-sans uppercase tracking-widest shadow-[3px_3px_0px_#000000] transform -rotate-1">
            Ready To Grow?
          </div>

            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight">
              Take Your Content <br className="hidden md:block" /> To The Next <br className="hidden md:block" /> Level Today.
            </h2>

            <p className="text-sm md:text-base text-slate-300 max-w-[420px] leading-relaxed font-medium">
              Start with a free 30-minute discovery call and see how strategic video editing can elevate your brand and accelerate your growth.
            </p>
          </div>

          {/* MOBILE & TABLET HORIZONTAL TICKER: Shows dynamically beneath paragraphs to save space */}
          <div className="relative w-full overflow-hidden py-2 mask-linear-x lg:hidden">
            <motion.div
              animate={{ x: ["0%", "-33.333333%"] }}
              transition={{
                ease: "linear",
                duration: 12,
                repeat: Infinity,
              }}
              className="flex gap-4 w-max"
            >
              {infiniteScrollItems.map((item, i) => (
                <div
                  key={`mobile-${i}`}
                  className="flex items-center gap-2 p-1.5 rounded-sm bg-white/95 text-black font-bold text-xs tracking-wide shadow-md border border-white/50 whitespace-nowrap"
                >
                  <div className="w-5 h-5 flex items-center justify-center bg-amber-600 text-white rounded-full flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="pr-1">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

     <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
  {/* Premium Style: Book a Free Call */}
  <a
    href="tel:+918807820580"
    className="premium-call-btn relative font-bold text-sm tracking-wide uppercase select-none group block sm:inline-block text-center w-full sm:w-auto"
  >
    {/* Animated fluid blur backdrop layer */}
    <div className="premium-call-blob absolute inset-0 rounded-full" />
    
    {/* Inner layout text layer */}
    <div className="premium-call-inner relative z-10 flex items-center justify-center gap-2 px-8 py-3.5 bg-black border border-white/10 text-white rounded-full transition-all duration-300 transform group-hover:scale-[1.02] shadow-[0_0_30px_rgba(245,158,11,0.2)] w-full h-full min-h-[48px]">
      <span>Book a Free Call</span>
      <PhoneCall
        className="w-4 h-4 text-[var(--color-lime)] transition-colors duration-300" 
      />
    </div>
  </a>

  {/* Border Style: Ask a Question */}
  <a
    href="mailto:sakthivelsugumaran98@gmail.com"
    className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-black rounded-full border border-white/40 hover:border-white text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white/5 text-center min-h-[48px] w-full sm:w-auto"
  >
    <span>Ask a Question</span>
    <MessageCircle 
      className="w-4 h-4 text-white/70 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:scale-110" 
    />
  </a>
</div>
        </div>

        {/* Right Side - Optimized for no cut-offs on tablet and no empty space gaps on mobile */}
        <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] overflow-visible mt-6 lg:mt-0">
          
          {/* VERTICAL LIVE FEED: Only active on Desktop layout matching image_10c82d.jpg */}
          <div className="absolute left-0 xl:left-8 top-1/2 -translate-y-1/2 min-w-[260px] h-[80%] z-20 pointer-events-none overflow-hidden hidden lg:block py-4">
            <motion.div
              animate={{ y: ["0%", "-33.333333%"] }}
              transition={{
                ease: "linear",
                duration: 18,
                repeat: Infinity,
              }}
              className="flex flex-col gap-5 pb-5"
            >
              {infiniteScrollItems.map((item, i) => (
                <motion.div
                  key={`desktop-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: [0.9, 1, 0.92],
                    x: [-2, 3, -3]
                  }}
                  transition={{
                    duration: 3.5,
                    delay: (i % liveFeedMetrics.length) * 0.25,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={`
                    flex items-center gap-2.5 p-1.5 w-fit rounded-sm 
                    bg-white/95 text-black font-bold text-xs tracking-wide 
                    shadow-[0_10px_35px_rgba(0,0,0,0.6)] border border-white/50 backdrop-blur-md
                    ${i % 2 === 0 ? 'ml-2' : 'ml-8'} 
                  `}
                  style={{ transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)` }}
                >
                  <div className="w-6 h-6 flex items-center justify-center bg-amber-600 text-white rounded-full flex-shrink-0 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="whitespace-nowrap pr-2">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Clean Responsive Phone Mockup Frame wrapper */}
          <div className="relative z-10 w-full max-w-[290px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] flex justify-center lg:mr-4">
            <PhoneMockup
              backCards={[]}
              playlist={["https://res.cloudinary.com/dtw1xyztu/video/upload/v1782212545/Hashtag_creators_academy_2nd_video_before_and_after_lowbitrate_1_dzftah.mp4"]}
              songNames={["FUSION_JAPAN.MP4"]}
            />
          </div>

        </div>

      </div>
    </section>
  );
}