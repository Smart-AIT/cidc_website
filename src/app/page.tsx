"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/hero/HeroSection";
import HeroStats from "@/components/sections/hero/HeroStats";
import AboutSection from "@/components/sections/about/AboutSection";
import TeamSection from "@/components/sections/team/TeamSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import EventsSection from "@/components/sections/events/EventsSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import ParticleLoader from "@/components/loaders/ParticleLoader";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
  }, [entered]);

  // Simulate loader completion after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!entered) {
    return (
      <ParticleLoader
        isLoaded={isLoaded}
        onEnter={() => setEntered(true)}
        title="AIT CIDC"
        subtitle="%"
      />
    );
  }

  return (
    <div className="max-w-[1520px] mx-auto p-4 sm:p-8 md:p-10 xl:p-12 pb-0 flex flex-col gap-10 sm:gap-12 lg:gap-14 overflow-x-clip">
      <Navbar />
      <main className="flex flex-col gap-12 sm:gap-16 w-full">
        <HeroSection />
        <HeroStats />
        <TeamSection />
        <ProjectsSection />
        <AboutSection />
        <EventsSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}


