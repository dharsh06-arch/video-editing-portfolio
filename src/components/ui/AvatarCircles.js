"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function AvatarCircles({
  numPeople = null, // Changed from 0 to null to safely check for strings or numbers
  className = "",
  avatarUrls = [] 
}) {
  return (
    <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse items-center", className)}>
      {avatarUrls.map((avatar, index) => {
        const imageUrl = typeof avatar === "string" ? avatar : avatar.imageUrl;
        const profileUrl = typeof avatar === "object" ? avatar.profileUrl : undefined;
        const customBg = typeof avatar === "object" && avatar.bgColor ? avatar.bgColor : "transparent";

        const content = (
          <img
            className="h-10 w-10 rounded-full border border-white/80 object-cover p-0.5 shadow-lg"
            src={imageUrl}
            style={{ backgroundColor: customBg }}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        );

        return profileUrl ? (
          <a
            key={index}
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200 ease-out z-20 hover:z-30"
          >
            {content}
          </a>
        ) : (
          <div key={index} className="hover:scale-110 transition-transform duration-200 ease-out z-20 hover:z-30">
            {content}
          </div>
        );
      })}
      
      {/* 🚀 FIX: Checks if numPeople exists (not null/undefined/0) so strings like "50+" render perfectly */}
      {numPeople !== null && numPeople !== 0 && numPeople !== "" && (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-[#7B2525] text-center text-[10px] font-black text-white tracking-tighter hover:bg-[#6D28D9] transition-colors duration-200 cursor-pointer shadow-lg select-none z-10"
        >
          +{String(numPeople).replace("+", "")}
        </div>
      )}
    </div>
  );
}