import React from 'react';

export const testimonials = [
  {
    id: 1,
    username: "anand_kumar",
    avatarContent: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0c120e]">
        <circle cx="50" cy="50" r="50" />
        <path d="M 50,25 C 60,25 70,30 70,40 C 70,55 50,75 50,75 C 50,75 30,55 30,40 C 30,30 40,25 50,25 Z" fill="#fbbf24" />
        <path d="M 25,65 Q 50,45 75,65 Q 50,90 25,65" fill="#f5f7f6" />
      </svg>
    ),
    comment: "Anand here from Chennai. Eliza transformed our raw cinematography cuts into sheer magic. The color grading for our Tamil traditional wedding teaser is absolute top-tier work!",
  },
  {
    id: 2,
    username: "priya_krishnan",
    avatarContent: (
      <div className="w-full h-full bg-[#141c17] flex items-center justify-center text-white font-black text-sm border border-amber-500/30 rounded-full">
        🎬
      </div>
    ),
    comment: "Super fast delivery! Sent folder links of a short film shot in Ooty and within 2 days, she delivered a master edit with flawless audio foley sync. Highly recommended across TN.",
  },
  {
    id: 3,
    username: "karthik_rajan",
    avatarContent: (
      <div className="w-full h-full bg-black rounded-full flex items-center justify-center border-2 border-[#fbbf24] text-[#fbbf24] font-extrabold text-lg">
        K
      </div>
    ),
    comment: "Excellent frame pacing and sound effects mapping for our independent music video project. Our audience retention graph instantly spiked up on the channel!",
  },
  {
    id: 4,
    username: "meena_selvam",
    avatarContent: (
      <div className="w-full h-full bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center text-white font-bold text-sm rounded-full">
        M
      </div>
    ),
    comment: "The vertical Instagram reels Eliza edited for our Chennai photography campaign generated massive traction. Sharp subtitle transitions, punchy sound drops, and zero revisions needed.",
  },
  {
    id: 5,
    username: "dhinesh_clint",
    avatarContent: (
      <div className="w-full h-full bg-gradient-to-br from-[#fbbf24] to-emerald-600 flex items-center justify-center text-black font-extrabold text-sm rounded-full">
        D
      </div>
    ),
    comment: "Brilliant attention to narrative transitions. Working from Madurai, coordinating scripts and timeline notes with her was completely seamless. Flawless output.",
  },
  {
    id: 6,
    username: "suresh_raina",
    avatarContent: (
      <div className="w-full h-full bg-[#1e293b] flex items-center justify-center text-[#fbbf24] font-bold text-sm rounded-full border border-[#fbbf24]/20">
        📸
      </div>
    ),
    comment: "The sound design mapping she did for our documentary sequence in Coimbatore was outstanding. Every atmospheric hum and step felt entirely real and immersive.",
  },
  {
    id: 7,
    username: "divya_bharathi",
    avatarContent: (
      <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-sm rounded-full">
        DB
      </div>
    ),
    comment: "Managed to stitch our travel vlogs with cinematic flair. Pacing matched the music beats perfectly. Can't wait to send over our next project from Kanyakumari!",
  },
  {
    id: 8,
    username: "vijay_narayan",
    avatarContent: (
      <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center border border-white/40 text-white font-semibold text-xs">
        VN
      </div>
    ),
    comment: "Incredibly fast response time. I needed a high-end teaser draft within 24 hours for a brand pitch in Trichy, and Eliza hit it out of the park on the very first try.",
  },
  {
    id: 9,
    username: "shrinidhi_s",
    avatarContent: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-emerald-950">
        <circle cx="50" cy="50" r="50" />
        <path d="M 30,70 Q 50,40 70,70" stroke="#fbbf24" strokeWidth="4" fill="none" />
        <circle cx="50" cy="40" r="10" fill="#f5f7f6" />
      </svg>
    ),
    comment: "Our dynamic food promo videos got an average view duration boost of 45% on YouTube. The jump cuts and text tracking treatments are brilliantly clean.",
  },
  {
    id: 10,
    username: "aravind_sam",
    avatarContent: (
      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm rounded-full">
        A
      </div>
    ),
    comment: "Top-notch multi-camera sequencing work. We shot an acoustic music session live in Salem, and her arrangement kept the visual rhythm completely engaging throughout.",
  },
  {
    id: 11,
    username: "kavitha_m",
    avatarContent: (
      <div className="w-full h-full bg-[#121212] flex items-center justify-center text-[#fbbf24] font-black text-xs border-2 border-dashed border-[#fbbf24] rounded-full">
        VLOG
      </div>
    ),
    comment: "Eliza has an exceptional eye for color correction. She balanced our overexposed outdoor afternoon footage shot in Thanjavur flawlessly into beautiful warm tones.",
  },
  {
    id: 12,
    username: "rajesh_sekhar",
    avatarContent: (
      <div className="w-full h-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-extrabold text-sm rounded-full">
        RS
      </div>
    ),
    comment: "Her subtitle styling and kinetic typography options matched our fast-paced tech review format perfectly. Highly structured workflow, making coordination totally painless.",
  },
  {
    id: 13,
    username: "sanjay_ram",
    avatarContent: (
      <div className="w-full h-full bg-[#0d1520] flex items-center justify-center rounded-full p-2.5 border border-amber-500/20">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fbbf24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75h1.5m16.5 0h1.5M12 2.25v1.5m0 16.5v1.5M4.5 4.5l1.06 1.06m12.88 12.88l1.06 1.06M19.5 4.5l-1.06 1.06M5.56 18.44l-1.06 1.06M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        </svg>
      </div>
    ),
    comment: "The social media marketing campaign managed for Godfather Restaurant completely packed out our dining tables. Our Instagram food reels went viral locally, bringing in massive foot traffic through targeted digital ads!",
  }
];