"use client";

export default function SectionTitle({ tag, title, description, align = "left", highlightTitle }) {
  const isCenter = align === "center";
  
  return (
    <div className={`space-y-4 max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"}`}>
      {tag && (
        <span className="text-xs font-bold uppercase tracking-widest text-lime block">
          {tag}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
        {title} {highlightTitle && <span className="font-serif uppercase italic font-normal text-lime lowercase">{highlightTitle}</span>}
      </h2>
      <div className={`w-16 h-1 bg-lime rounded-full ${isCenter ? "mx-auto" : "mr-auto"} mt-4`} />
      {description && (
        <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans mt-4 max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
