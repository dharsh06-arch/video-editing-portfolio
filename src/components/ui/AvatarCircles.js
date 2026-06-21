"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function AvatarCircles({
  numPeople = 0,
  className = "",
  avatarUrls = []
}) {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <img
            className="h-10 w-10 rounded-full border-2 border-surface object-cover bg-[#050806]"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {numPeople > 0 && (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface bg-[#9F5255] text-center text-xs font-black text-black hover:bg-lime-light cursor-pointer shadow-lg select-none"
        >
          +{numPeople}
        </div>
      )}
    </div>
  );
}
