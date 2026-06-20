"use client";

export default function Footer() {
  return (
    <footer className="relative z-20 py-8 px-6 md:px-12 bg-[#050806] border-t border-lime/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-300 font-extrabold uppercase tracking-wider">
      <div>
        © {new Date().getFullYear()} Verdant. All Rights Reserved.
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-lime transition-colors">Privacy Module</a>
        <a href="#" className="hover:text-lime transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-lime transition-colors">Protocol Log</a>
      </div>
    </footer>
  );
}
