"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/pages/home/Hero/Hero";
import About from "@/pages/home/About/About";
import Services from "@/pages/home/Services/Services";
import Projects from "@/pages/home/Projects/Projects";
import Testimonials from "@/pages/home/Testimonials/Testimonials";
import HowItWorks from "@/pages/home/HowItWorks/HowItWorks";
import Contact from "@/pages/home/Contact/Contact";
import SplashCursor from "@/components/ui/SplashCursor";

// Dynamically load Aurora component to avoid SSR build errors
const Aurora = dynamic(() => import("@/components/shared/Aurora"), { ssr: false });

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "projects", "how-it-works", "testimonials"];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden select-none">
      
      {/* Premium WebGL Fluid cursor effect */}
      {/* <SplashCursor /> */}

      {/* Global drifting green aurora background */}
      <div className="fixed inset-0 z-0 w-full h-full opacity-40 pointer-events-none">
        <Aurora
          colorStops={["#050806", "#f59e0b", "#141c17"]}
          blend={0.65}
          amplitude={1.1}
          speed={0.4}
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050806]/40 to-[#050806] z-10" />
      </div>

      {/* Nav */}
      <Navbar onScrollToSection={scrollToSection} activeSection={activeSection} />

      {/* Sections */}
      <div className="relative z-10 w-full">
        <Hero onScrollToSection={scrollToSection} />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <HowItWorks />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}
