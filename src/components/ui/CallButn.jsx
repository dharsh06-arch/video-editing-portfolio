"use client";

import { Calendar } from "lucide-react";

export default function CallButn({ onScrollToSection }) {
  const buttonText = "BOOK A CONSULTATION";

  return (
    <div className="uiverse-dexter-wrapper">
      <a
        href="tel:+918807820580"
        className="btn-dexter"
      >
        {/* Lucid Icon Replacement for custom inline SVGs */}
        <Calendar className="btn-svg" />
        
        {/* Automated Text Splitter Shell */}
        <span className="inline-flex tracking-[0.15rem]">
          {buttonText.split("").map((char, index) => (
            <span
              key={index}
              className="btn-letter"
              // Keeps accurate spacing intact for blank spaces
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
        </span>
      </a>
    </div>
  );
}