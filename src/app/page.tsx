"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero/HeroSection";
import HeroStats from "@/components/hero/HeroStats";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/team/TeamSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import EventsSection from "@/components/events/EventsSection";
import ContactSection from "@/components/contact/ContactSection";
import ParticleLoader from "@/components/ParticleLoader";

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
    <div className="max-w-[1520px] mx-auto p-4 sm:p-8 md:p-10 xl:p-12 pb-0 flex flex-col gap-10 sm:gap-12 lg:gap-14">
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


