"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Aperture, Menu, X } from "lucide-react";

export default function Navbar({ onScrollToSection, activeSection = "home" }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigation = (id) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      {/* Desktop Navbar */}
      <nav className="w-full max-w-6xl relative rounded-md bg-linear-to-r from-white/90 via-purple-200/90 to-gray-100/80 border border-white/40 flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation("home")}>
          <Aperture className="w-6 h-6 text-[#1e1040]" />
          <span className="font-extrabold text-[#1e1040] text-lg tracking-tight">Vickey freelance</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-[#1e1040] font-medium text-sm hover:text-purple-700 transition-colors ${activeSection === item.id ? "text-purple-800 font-bold" : ""
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavigation("contact")}
            className="px-6 py-2.5 rounded-full bg-white text-[#1e1040] font-medium text-sm border-2 border-amber-600/80 shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#1e1040] p-1 focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-md shadow-2xl border border-purple-100/50 p-6 flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left font-medium text-lg px-4 py-3 rounded-xl transition-colors ${activeSection === item.id
                      ? "bg-purple-50 text-purple-700"
                      : "text-[#1e1040] hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavigation("contact")}
              className="mt-2 w-full px-6 py-4 rounded-full bg-white text-[#1e1040] font-bold text-center border-2 border-amber-600 shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:bg-purple-50 transition-colors"
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}