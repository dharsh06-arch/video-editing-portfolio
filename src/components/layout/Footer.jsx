"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Aurora from "@/components/ui/Aurora";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full bg-[#362828] px-4 sm:px-6 md:px-14 py-8 md:py-16 overflow-hidden">
      {/* Aurora Background - Full coverage */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Aurora
          colorStops={["#f59e0b", "#fbbf24", "#f59e0b"]}
          blend={0.5}
          amplitude={0.8}
          speed={0.6}
        />
      </div>

      {/* GRID PATTERN - White dots (smaller on mobile) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />

      {/* Secondary larger dots - hidden on mobile */}
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden md:block"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          backgroundPosition: "25px 25px",
        }}
      />

      {/* Center Glow - reduced on mobile */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[70%] max-w-[800px] h-[300px] md:h-[500px] rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Row: Brand + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-14">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white pb-1">
              Sakthi
            </h2>
            <p className="text-[#f59e0b] text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
              Visual Storyteller
            </p>
            <p className="text-[#8a8f8b] text-xs md:text-sm mt-3 md:mt-4 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Capture moments, create moments through light, motion, and
              perspective.
            </p>
          </div>
        </div>

        {/* Middle: Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-x-8 gap-y-2 md:gap-y-3 mb-8 md:mb-12 text-xs md:text-sm font-medium text-[#8a8f8b] border-b border-white/5 pb-6 md:pb-8">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Services", href: "#services" },
            { label: "Reviews", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#f59e0b] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Bottom: Contact + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Contact */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center sm:items-center gap-2 md:gap-x-6 gap-y-1.5 md:gap-y-2 text-xs md:text-sm text-[#8a8f8b]">
            <a
              href="tel:+918807820580"
              className="hover:text-white transition-colors"
            >
              +91 88078 20580
            </a>
            <span className="text-white/10 hidden sm:inline">|</span>
            <a
              href="mailto:sakthivelsugumaran98@gmail.com"
              className="hover:text-white transition-colors text-center sm:text-left"
            >
              sakthivelsugumaran98@gmail.com
            </a>
            <span className="text-white/10 hidden sm:inline">|</span>
            <span className="text-[#5a5f5b]">Karaikudi, Tamil Nadu, IN</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://www.instagram.com/_sakthimaran_/"
              className="group flex items-center gap-1.5 md:gap-2 text-[#8a8f8b] hover:text-white transition-colors"
            >
              <FaInstagram className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:text-[#f59e0b] transition-colors" />
              <span className="text-[10px] md:text-xs font-medium">
                Instagram
              </span>
            </a>
            <a
              href="https://wa.me/918807820580"
              className="group flex items-center gap-1.5 md:gap-2 text-[#8a8f8b] hover:text-white transition-colors"
            >
              <FaWhatsapp className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:text-[#f59e0b] transition-colors" />
              <span className="text-[10px] md:text-xs font-medium">
                WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3 text-[10px] md:text-xs">
          <p className="text-[#4a4f4b] text-center">
            Copyright © {currentYear} Sakthivel S. All rights reserved.
          </p>
          <p className="text-[#5a5f5b] tracking-[0.15em] text-center">
            Photographer • Cinematographer • Video Editor
          </p>
        </div>
      </div>
    </footer>
  );
}
