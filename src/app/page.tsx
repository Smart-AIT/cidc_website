import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/team/TeamSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import EventsSection from "@/components/events/EventsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TeamSection />
        <ProjectsSection />
        <AboutSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
