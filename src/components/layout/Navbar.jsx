"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react"; // Imported PhoneCall here

export default function Navbar({ onScrollToSection, activeSection = "projects" }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
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
      {/* Reduced Overall Navbar Padding */}
      <nav className="w-full max-w-3xl relative rounded-full bg-gradient-to-b from-neutral-900 to-black border border-neutral-800/80 shadow-[0_0_25px_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.7)] flex items-center justify-between px-6 py-2 backdrop-blur-md">
        
        {/* Desktop Links Container */}
        <div className="hidden md:flex items-center justify-between w-full relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isCTA = item.id === "contact";

            // Render your specific custom button structure for the contact CTA
            if (isCTA) {
              return (
                <div key={item.id} className="relative group">
                  {/* Glowing Top Indicator Line over the button */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-1/2 -translate-x-1/2 w-8 h-[3px]  bg-white rounded-b-sm shadow-[0_0_12px_#fff,0_0_20px_rgba(255,255,255,0.9)] -top-[11px] z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <button
                    onClick={() => handleNavigation("contact")}
                    className="premium-call-btn relative font-medium text-[11px] tracking-widest uppercase select-none"
                  >
                    <div className="premium-call-blob" />
                    <div className="premium-call-inner">
                      <span className="flex items-center gap-2">
                        <span className="hidden md:inline">Book a Call</span>
                        <PhoneCall
                          className="w-3.5 h-3.5 text-[var(--color-lime)] transition-colors duration-300"
                        />
                      </span>
                    </div>
                  </button>
                </div>
              );
            }

            // Render normal text navigation items
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative font-medium text-[11px] tracking-widest transition-all duration-300 uppercase select-none py-2 ${
                  isActive 
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" 
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {/* Glowing Top Indicator Line over normal tabs */}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white rounded-b-sm shadow-[0_0_12px_#fff,0_0_20px_rgba(255,255,255,0.9)] -top-[11px]"
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
              {navItems.map((item) => {
                const isCTA = item.id === "contact";
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`text-left font-medium text-sm px-4 py-3 rounded-xl transition-colors uppercase tracking-widest ${
                      activeSection === item.id
                        ? "bg-neutral-900 text-white font-semibold border-l-2 border-white"
                        : "text-neutral-400 hover:bg-neutral-900/50 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center justify-between w-full">
                      {item.label}
                      {isCTA && <PhoneCall className="w-4 h-4 text-[var(--color-lime)]" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}