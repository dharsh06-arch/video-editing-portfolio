"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ onScrollToSection, activeSection = "projects" }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Book a Call" }, 
  ];

  const handleNavigation = (id) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      {/* Reduced Overall Navbar Padding (py-2 instead of py-5) */}
      <nav className="w-full max-w-3xl relative rounded-full bg-gradient-to-b from-neutral-900 to-black border border-neutral-800/80 shadow-[0_0_25px_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.7)] flex items-center justify-between px-6 py-2 backdrop-blur-md">
        
        {/* Desktop Links Container */}
        <div className="hidden md:flex items-center justify-between w-full relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isCTA = item.id === "contact";

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative font-medium text-[11px] tracking-widest transition-all duration-300 uppercase select-none ${
                  isCTA 
                    ? `px-6 py-2.5 rounded-full border ${
                        isActive 
                          ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]" 
                          : "border-neutral-700 bg-neutral-800/80 text-neutral-200 hover:bg-neutral-700 hover:text-white"
                      }`
                    : isActive 
                      ? "text-white py-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" 
                      : "text-neutral-400 py-2 hover:text-neutral-200"
                }`}
              >
                {/* Glowing Top Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className={`absolute left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white rounded-b-sm shadow-[0_0_12px_#fff,0_0_20px_rgba(255,255,255,0.9)] ${
                      isCTA ? "-top-[11px]" : "-top-[11px]"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Navbar Elements */}
        <div className="md:hidden flex items-center w-full justify-between py-1.5">
          <span className="text-white font-bold text-xs tracking-widest uppercase">Menu</span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-400 hover:text-white p-1 focus:outline-none">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[65px] left-4 right-4 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-850 p-5 flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left font-medium text-sm px-4 py-3 rounded-xl transition-colors uppercase tracking-widest ${
                    activeSection === item.id
                      ? "bg-neutral-900 text-white font-semibold border-l-2 border-white"
                      : "text-neutral-400 hover:bg-neutral-900/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}