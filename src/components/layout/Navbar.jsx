"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Home, 
  User, 
  Briefcase, 
  FolderGit2, 
  PhoneCall,
  HelpCircle,
  MessageSquare
} from "lucide-react";

export default function Navbar({
  onScrollToSection,
  activeSection = "home",
}) {
  const [isHidden, setIsHidden] = useState(false);

  // Monitor scroll behavior to hide/show navbar dynamically
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide navbar when scrolling down past 120px, reveal when scrolling up
    if (latest > previous && latest > 120) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "how-it-works", label: "How It Works", icon: HelpCircle },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  ];

  const handleNavigation = (id) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    onScrollToSection(id);
  };

  return (
    <motion.div 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          flex items-center gap-1
          glass-panel-dark
          rounded-full
          p-2
          shadow-[0_20px_50px_rgba(0,0,0,0.6)]
          backdrop-blur-md
        "
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                relative
                flex items-center gap-2
                px-4
                py-2.5
                rounded-full
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                transition-colors
                duration-300
                cursor-pointer
                outline-none
                ${
                  isActive
                    ? "text-white"
                    : "text-[var(--color-grey)] hover:text-white"
                }
              `}
            >
              {/* Animated active pill tracker */}
              {isActive && (
                <motion.div
                  layoutId="activeNavPill"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[rgba(5,8,6,0.8)]
                    border
                    border-[rgba(186,243,94,0.12)]
                    shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]
                  "
                />
              )}

              {/* Dynamic Icon */}
              <Icon className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${isActive ? "scale-110 text-white" : ""}`} />

              <span className="relative z-10 hidden sm:inline">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Divider */}
        <div className="mx-2 h-5 w-px bg-[rgba(186,243,94,0.12)]" />

        {/* Premium CTA */}
        <button
          onClick={() => onScrollToSection("contact")}
          className="premium-call-btn"
        >
          <div className="premium-call-blob" />

          <div className="premium-call-inner">
            <span className="flex items-center gap-2">
              <span className="hidden md:inline">Book a Call</span>

              <PhoneCall
                className="
                  w-3.5
                  h-3.5
                  text-[var(--color-lime)]
                  transition-colors
                  duration-300
                "
              />
            </span>
          </div>
        </button>
      </motion.nav>
    </motion.div>
  );
}