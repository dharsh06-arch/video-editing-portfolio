"use client";

import FeatureCard from "@/components/ui/FeatureCard";

export default function TestimonialCard({ stars = 5, quote, name, role, initial }) {
  return (
    <FeatureCard className="p-8 text-left space-y-6 bg-[#141c17]/35 border border-lime/12" glowColor="rgba(245, 158, 11, 0.12)">
      <div className="flex items-center gap-1 text-lime">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-md">★</span>
        ))}
      </div>
      <p className="text-sm text-slate-200 leading-relaxed font-sans font-medium italic">
        &ldquo;{quote}&rdquo;
      </p>  
      <div className="flex items-center gap-3 border-t border-lime/12 pt-4">
        <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center text-lime font-black">
          {initial}
        </div>
        <div>
          <div className="text-sm font-bold text-white font-sans">{name}</div>
          <div className="text-[10px] text-lime uppercase tracking-wider font-extrabold font-sans">{role}</div>
        </div>
      </div>
    </FeatureCard>
  );
}
