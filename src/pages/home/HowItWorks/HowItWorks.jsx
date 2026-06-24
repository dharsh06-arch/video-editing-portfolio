"use client";

import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { motion } from "framer-motion";
import Image from "next/image";

const workflowSteps = [
  {
    number: "01",
    title: "Discovery call",
    description: "I learn about your brand, goals, and content needs to make sure we're the perfect fit.",
    image: "/workflow_discovery_call.png",
  },
  {
    number: "02",
    title: "Client Onboarding",
    description: "I set up your workflow, gather your assets, and align on style preferences and deadlines.",
    image: "/workflow_client_onboarding.png",
  },
  {
    number: "03",
    title: "Editing & Sound Design",
    description: "Your raw footage is transformed into a high-retention video with precise pacing and premium foley.",
    image: "/workflow_editing_sound.png",
  },
  {
    number: "04",
    title: "Review & Delivery",
    description: "We go through necessary revisions, ensuring the final asset exceeds your expectations before final handover.",
    image: "/workflow_review_delivery.png",
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-20 py-24 px-6 md:px-12 lg:px-24 bg-[#0a0510] overflow-hidden">

      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 [background-size:50px_50px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]"
        />
        {/* Radial gradient mask for faded edge look */}
        <div className="absolute inset-0 bg-[#050806] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>



      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Ambient Purple Glows */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">

        {/* Header Block */}
        <div className="text-center space-y-5 mb-24 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-full border-2 border-black bg-[#9F5255] text-white font-black text-xs font-sans uppercase tracking-widest shadow-[3px_3px_0px_#000000] transform -rotate-1">
            How It Works
          </div>
          <h2 className="pt-2 text-4xl md:text-7xl text-white tracking-tight leading-[1.05]">
            My Workflow
          </h2>
          <p className="text-lg text-white/70 max-w-lg mx-auto leading-relaxed">
            From first contact to final delivery, here's exactly how I handle everything.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-16 w-full flex flex-col items-center">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="relative w-full max-w-[900px] h-auto md:h-[320px] bg-[#030105] rounded-xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-white/5"
            >
              {/* Text Side (Left) */}
              <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center relative z-20">
                <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">
                  {step.title}
                </h3>

                {/* Fading Separator */}
                <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-6" />

                <p className="text-white/70 text-lg leading-relaxed">
                  {step.description}
                </p>

                {/* Big Number watermark */}
                <div className="absolute bottom-[-10px] left-6 text-[140px] font-black text-amber-600/20 leading-none select-none pointer-events-none">
                  {step.number}
                </div>
              </div>

              {/* Image Side (Right) */}
              <div className="w-full md:w-[45%] h-[250px] md:h-full relative">
                {/* Blend gradient on desktop */}
                <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030105] to-transparent z-10" />
                {/* Blend gradient on mobile */}
                <div className="block md:hidden absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030105] to-transparent z-10" />

                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
