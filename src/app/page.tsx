"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

const Page = () => {
  // Initialize with null to avoid hydration mismatch
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Move all browser API usage inside useEffect
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const savedTheme = localStorage.getItem("theme");

      setIsDarkMode(savedTheme === "dark" || (!savedTheme && userPrefersDark));
    }
  }, []);

  useEffect(() => {
    // Only run after initial value is set
    if (isDarkMode === null) return;

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "");
    }
  }, [isDarkMode]);

  // Show nothing until client-side code runs
  if (isDarkMode === null) {
    return null;
  }

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About isDarkMode={isDarkMode} />
      <Skills />
      <Services />
      <Work isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Page;
