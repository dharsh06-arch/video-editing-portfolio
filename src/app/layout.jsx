import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sakthi | Cinematographer & Visual Storyteller",
  description: "Professional Cinematography, Photography, and Video Editing. Crafting cinematic narratives and high-impact visual stories for brands and creators.",
    icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050806] text-[#f5f7f6]">{children}</body>
    </html>
  );
}
