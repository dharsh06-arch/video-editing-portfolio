"use client";

import React, { useRef, useState } from "react";

export default function Button({
  children,
  onClick,
  className = "",
  primary = false,
  glowing = false,
  icon: Icon = null,
  type = "button",
  bgColor = "",      // Tailwind class (e.g. 'bg-amber-600') or raw hex color (e.g. '#8a5cff')
  textColor = "",    // Tailwind class (e.g. 'text-white') or raw hex color (e.g. '#fff')
  borderColor = "",  // Tailwind class or raw hex
  glowColor = "#f59e0b" // Glow color value
}) {
  const buttonRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Check if props are Tailwind classes or raw color styles
  const isTailwindBg = bgColor && bgColor.startsWith("bg-");
  const isTailwindText = textColor && textColor.startsWith("text-");
  const isTailwindBorder = borderColor && borderColor.startsWith("border-");

  const bgStyle = bgColor
    ? (isTailwindBg ? bgColor : "")
    : (primary ? "bg-[#f59e0b]" : "hover:bg-[#f59e0b]/10");

  const textStyle = textColor
    ? (isTailwindText ? textColor : "")
    : (primary ? "text-black" : "text-[#f59e0b]");

  const borderStyle = borderColor
    ? (isTailwindBorder ? borderColor : "border")
    : (primary ? "" : "border border-[#f59e0b]");

  // Inline custom variables context
  const customVariables = {
    "--clr": glowColor
  };

  return (
    <div 
      className={`relative group inline-block ${className.includes("w-full") ? "w-full" : ""}`}
      style={customVariables}
    >
      {/* GLOWING BORDER EFFECT: Triggers if glowing prop is active */}
      {glowing && (
        <>
          {/* Ambient outer glow */}
          <div 
            className="absolute -inset-1.5 rounded-full opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-500 animate-pulse pointer-events-none z-0" 
            style={{ backgroundColor: glowColor }}
          />
          {/* Thin sharp glowing border border backplate */}
          <div 
            className="absolute -inset-[1.5px] rounded-full opacity-90 group-hover:opacity-100 blur-[1px] transition duration-300 pointer-events-none z-0" 
            style={{ background: `linear-gradient(90deg, ${glowColor}, #ffffff, ${glowColor})` }}
          />
        </>
      )}

      {/* GLOW LAYER 1: Ambient Background Pulse Aura (Only maps if primary button and not glowing) */}
      {primary && !glowing && (
        <div 
          className="absolute -inset-1.5 rounded-full opacity-35 blur-xl group-hover:opacity-90 group-hover:blur-2xl transition duration-500 group-hover:duration-200 animate-pulse pointer-events-none z-0" 
          style={{ backgroundColor: glowColor }}
        />
      )}

      {/* GLOW LAYER 2: Core Contour Backlit Glass Border Rim (Only maps if primary button and not glowing) */}
      {primary && !glowing && (
        <div 
          className="absolute -inset-[1px] rounded-full opacity-25 group-hover:opacity-100 blur-[2px] transition duration-500 pointer-events-none z-0" 
          style={{ background: `linear-gradient(90deg, ${glowColor}, rgba(255,255,255,0.4), ${glowColor})` }}
        />
      )}

      {/* CORE ACTION BUTTON */}
      <button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        type={type}
        className={`relative z-10 block overflow-hidden rounded-full px-8 py-3 text-sm font-black uppercase tracking-widest transition-all duration-300 cursor-pointer active:scale-95 ${bgStyle} ${textStyle} ${borderStyle} ${className} ${
          glowing
            ? "hover:scale-[1.02]"
            : primary
            ? "group-hover:scale-[1.02]"
            : "hover:scale-105 shadow-lg"
        }`}
        style={{
          backgroundColor: isTailwindBg ? undefined : (bgColor || undefined),
          color: isTailwindText ? undefined : (textColor || undefined),
          borderColor: isTailwindBorder ? undefined : (borderColor || undefined),
          boxShadow: glowing ? `0 0 35px ${glowColor}` : (primary ? `0 0 25px ${glowColor}55` : undefined)
        }}
      >
        {/* Dynamic Interactive Flash Flare */}
        {isHovered && (
          <span
            className="pointer-events-none absolute inset-0 block transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.45), transparent 80%)`,
            }}
          />
        )}
        
        {/* Label Container Context */}
        <span className="relative z-20 flex items-center justify-center gap-3 font-sans">
          <span>{children}</span>
          {Icon && (
            <div className="button__icon-wrapper">
              <Icon className="button__icon-svg w-3.5 h-3.5" />
              <Icon className="button__icon-svg button__icon-svg--copy w-3.5 h-3.5" />
            </div>
          )}
        </span>
      </button>
    </div>
  );
}