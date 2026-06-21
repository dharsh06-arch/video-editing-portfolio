"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full bg-black px-4 md:px-14 pb-12 pt-6 font-sans overflow-hidden">
      
      {/* Underlying layout grid matching the section texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none z-0" />

      {/* 
        EXTERNAL ORANGE/AMBER GLOW ACCENT FLUID RADIATING OUTSIDE THE PANEL:
        Perfectly replicates the intense violet color spread spill behavior behind the frame in image_1135ab.jpg
      */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3 w-[90%] max-w-[1200px] h-[350px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.16)_0%,rgba(245,158,11,0.04)_45%,transparent_70%)] blur-[40px] pointer-events-none z-0" />

      {/* Centered Premium Glass Panel Wrapper */}
      <div className="w-full rounded-2xl p-8 md:py-16 md:px-12 glass-panel-dark bg-gradient-to-b from-[#0a0f12]/95 via-[#070a0d]/98 to-[#040608]/99 shadow-2xl relative overflow-hidden flex flex-col items-center text-center border border-white/[0.03] z-10">
        
        {/* Subtle, soft interior orange bloom inside the glass panel for depth balance */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-48 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="flex flex-col items-center relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="text-center">
              {/* Premium Header Branding */}
              <h2 className="text-4xl font-bold tracking-tighter text-white pb-1">
                Sakthi
              </h2>
              <p className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase opacity-90">
                Visual Storyteller
              </p>
            </div>
          </div>

          <p className="max-w-md text-slate-400 leading-relaxed mb-12 text-[15px]">
            Capturing moments, crafting emotions through light, motion, and perspective.
          </p>
        </div>

        {/* Primary Horizontal Navigation Row */}
        <nav className="relative z-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-10 text-sm font-semibold tracking-wide text-slate-400 border-b border-white/5 pb-8 w-full max-w-4xl">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Services", href: "#services" },
            { name: "Reviews", href: "#reviews" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-2 px-2 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {/* Top Line Micro-Glow Accent Reveal on Hover using Amber highlight */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(245,158,11,0.6)]" />

              <span>{link.name}</span>

              {/* Micro sliding icon indicator */}
              <span className="w-3.5 h-3.5 relative overflow-hidden scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out shrink-0 text-[#f59e0b]">
                <ArrowUpRight className="w-3.5 h-3.5 absolute transition-transform duration-300 ease-in-out button__icon-svg group-hover:translate-x-4 group-hover:-translate-y-4" />
                <ArrowUpRight className="w-3.5 h-3.5 absolute transition-transform duration-300 ease-in-out button__icon-svg--copy translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
              </span>
            </Link>
          ))}
        </nav>

        {/* Contact Interactivity Row */}
        <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-12 gap-y-4 mb-10 text-sm font-medium text-slate-400">
          <a
            href="tel:+918807820580"
            className="group flex items-center gap-1.5 hover:text-white transition-colors tracking-wide"
          >
            <span>+91 88078 20580</span>
            <span className="w-3.5 h-3.5 relative overflow-hidden scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 shrink-0 text-[#f59e0b]">
              <ArrowUpRight className="w-3.5 h-3.5 absolute button__icon-svg group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />
              <ArrowUpRight className="w-3.5 h-3.5 absolute button__icon-svg--copy translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
            </span>
          </a>

          <a
            href="mailto:sakthivelsugumaran98@gmail.com"
            className="group flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>sakthivelsugumaran98@gmail.com</span>
            <span className="w-3.5 h-3.5 relative overflow-hidden scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 shrink-0 text-[#f59e0b]">
              <ArrowUpRight className="w-3.5 h-3.5 absolute button__icon-svg group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />
              <ArrowUpRight className="w-3.5 h-3.5 absolute button__icon-svg--copy translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
            </span>
          </a>

          <span className="text-white/10 hidden sm:inline">|</span>

          <p className="tracking-wide text-slate-500">Karaikudi, Tamil Nadu, IN</p>
        </div>

        {/* Social Sub-Menu Links */}
        <div className="relative z-10 flex items-center justify-center gap-8 mb-12 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <a
            href="#"
            className="group flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Instagram</span>
            <span className="w-3 h-3 relative overflow-hidden scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 shrink-0 text-[#f59e0b]">
              <ArrowUpRight className="w-3 h-3 absolute button__icon-svg group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />
              <ArrowUpRight className="w-3 h-3 absolute button__icon-svg--copy translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
            </span>
          </a>
          <a
            href="#"
            className="group flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>WhatsApp</span>
            <span className="w-3 h-3 relative overflow-hidden scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 shrink-0 text-[#f59e0b]">
              <ArrowUpRight className="w-3 h-3 absolute button__icon-svg group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />
              <ArrowUpRight className="w-3 h-3 absolute button__icon-svg--copy translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* Bottom Metadata Container */}
        <div className="relative z-10 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-medium text-slate-600 order-2 md:order-1">
            Copyright © {currentYear} Sakthivel S. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.25em] font-bold uppercase text-slate-500 order-1 md:order-2">
            Photographer &bull; Cinematographer &bull; Video Editor
          </p>
        </div>
      </div>
    </footer>
  );
}