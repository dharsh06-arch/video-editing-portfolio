"use client";

import { Aperture } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-[#050806] px-4 md:px-14 pt-12">
      {/* Light gray card sitting inside the dark background */}
      <div className="w-full rounded-xl bg-radial from-[#f0f0f4] via-[#e0e0e5] to-amber-500 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo Section */}
          <div className="flex items-start gap-3">
            <div className="bg-amber-900 p-1.5 rounded-full flex items-center justify-center">
              <Aperture className="w-5 h-5 text-white" />
            </div>
            <span className="text-[1.15rem] font-bold tracking-tight text-black mt-0.5">
              Videographer
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-amber-900">Quick links</h3>
            <div className="flex flex-col gap-3 text-[15px] font-medium text-black/80">
              <Link href="#projects" className="hover:text-amber-700 transition-colors cursor-pointer">Projects</Link>
              <Link href="#about" className="hover:text-amber-700 transition-colors cursor-pointer">About</Link>
              <Link href="#services" className="hover:text-amber-700 transition-colors cursor-pointer">Services</Link>
              <Link href="#reviews" className="hover:text-amber-700 transition-colors cursor-pointer">Reviews</Link>
              <Link href="#contact" className="hover:text-amber-700 transition-colors cursor-pointer">Contact</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-amber-900">Contact Us</h3>
            <div className="flex flex-col gap-3 text-[15px] font-medium text-black/80">
              <a href="mailto:contact@yourdomain.com" className="hover:text-amber-700 transition-colors">contact@yourdomain.com</a>
              <a href="#" className="hover:text-amber-700 transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-amber-700 transition-colors">Instagram</a>
              <a href="tel:+15551234567" className="hover:text-amber-700 transition-colors">+1 (555) 123-4567</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 pt-6 border-t border-[#2d0a66]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-semibold text-black/70">
            Copyright © {new Date().getFullYear()}
          </p>
          
        </div>

      </div>
    </footer>
  );
}
