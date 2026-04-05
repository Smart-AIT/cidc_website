"use client";

import { useRef } from "react";
import EventCard from "./EventCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EVENTS = [
  {
    ref_id: "REF_LOG",
    status: "UPCOMING" as const,
    title: "SYSTEM DESIGN BATTLE",
    date: "Dates: coming soon",
    description:
      "A deep-dive into system design concepts. Teams will be given a real-world system design problem inspired by large tech platforms.",
    ctaLabel: "Join_Battle",
    side: "left",
    variant: "default" as const,
  },
  {
    ref_id: "REF_LOG",
    status: "UPCOMING" as const,
    title: "AGENTIC ARENA HACKATHON",
    date: "Dates: coming soon",
    description:
      "Build for the void. 24 hours of collaborative technical friction. No excuses, no shortcuts. Just raw execution and zero sleep to build autonomous AI agents based on real-world scenarios.",
    ctaLabel: "JOIN_Arena",
    side: "right",
    variant: "light" as const,
  },
  {
    ref_id: "REF_LOG",
    status: "UPCOMING" as const,
    title: "CAMPUS CATALYST",
    date: "Dates: coming soon",
    description:
      "Physical interface exchange. Bring your modified synthesizers, pitch your ideas, get approvals, start working on it to contribute in college innovation and make AIT smarter.",
    ctaLabel: "Join_Catalyst",
    side: "left",
    variant: "light" as const,
  },
];

export default function EventsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const eventCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!timelineRef.current || !progressLineRef.current) return;

    // Fix progress bar animation
    gsap.fromTo(
      progressLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    // Add reveal effect to event cards
    eventCardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });
  });

  return (
    <section ref={containerRef} id="events" style={{ width: "100%", paddingTop: "60px", paddingBottom: "60px", paddingLeft: "40px", paddingRight: "40px", borderTop: "2px solid #1A1C1A", backgroundColor: "#faf9f6" }}>
      <div style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}>
        {/* Hero Header */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "48px", alignItems: "flex-start", marginBottom: "80px" }}>
          <div>
            <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.2em", color: "#A33B3C", marginBottom: "16px", fontWeight: "bold" }}>
              SYSTEM_SCHEDULE // YEAR_2026
            </p>
            <h2 style={{ fontSize: "clamp(3rem, 12vw, 5.5rem)", fontWeight: "900", lineHeight: "0.85", textTransform: "uppercase", marginBottom: "32px" }}>
              UPCOMING
              <br />
              <span style={{ color: "#006565" }}>OPERATIONS</span>
            </h2>
            <div style={{ width: "120px", height: "4px", backgroundColor: "#1A1C1A", marginBottom: "32px" }} />
            <p style={{ maxWidth: "600px", fontSize: "16px", lineHeight: "1.6", color: "#1A1C1A", fontWeight: "500" }}>
              Scheduled transmissions, community builds, and technical
              deep-dives. We operate at the intersection of analog grit and
              digital precision. Sync your calendars to the collective
              frequency.
            </p>
          </div>
          <div>
            <div style={{ border: "2px solid #1A1C1A", padding: "8px", backgroundColor: "#faf9f6" }}>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=500&fit=crop"
                alt="Events visual"
                style={{ width: "100%", filter: "grayscale(1)" }}
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} style={{ position: "relative" }}>
          {/* Vertical line - background */}
          <div style={{ position: "absolute", left: "50%", top: "0", bottom: "0", width: "2px", backgroundColor: "rgba(26, 28, 26, 0.2)", transform: "translateX(-50%)", zIndex: 0 }} />
          
          {/* Vertical line - progress bar */}
          <div ref={progressLineRef} style={{ position: "absolute", left: "50%", top: "0", bottom: "0", width: "4px", backgroundColor: "#A33B3C", transform: "translateX(-50%)", transformOrigin: "top", zIndex: 1 }} />

          {EVENTS.map((event, index) => (
            <div
              key={`${event.title}-${index}`}
              ref={(el) => {
                eventCardsRef.current[index] = el;
              }}
              style={{ position: "relative", marginBottom: "96px", display: "flex", width: "100%", justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", zIndex: 2 }}
            >
              <div style={{ width: "45%" }}>
                <EventCard {...event} />
              </div>

              {/* Timeline marker main dot */}
              <div style={{ position: "absolute", left: "50%", top: "40px", width: "16px", height: "16px", backgroundColor: "#A33B3C", border: "2px solid #1A1C1A", transform: "translateX(-50%)", zIndex: 3 }} />
              
              {/* Optional connector/spacer circles */}
              {index < EVENTS.length - 1 && (
                <div style={{ position: "absolute", left: "50%", top: "50%", width: "32px", height: "32px", backgroundColor: "#e3e2e0", borderRadius: "50%", border: "2px solid #1A1C1A", transform: "translate(-50%, -50%)", zIndex: 2 }} />
              )}
            </div>
          ))}
        </div>

        {/* Announcements Footer */}
        <div style={{ marginTop: "96px", border: "2px solid #1A1C1A", padding: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "center", backgroundColor: "#faf9f6" }}>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: "#A33B3C", marginBottom: "8px", fontWeight: "bold" }}>ANNOUNCEMENTS</p>
            <h3 style={{ fontSize: "28px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.01em", color: "#1A1C1A" }}>STAY TUNED TO THE<br />FREQUENCY</h3>
            <p style={{ fontSize: "10px", fontFamily: "monospace", marginTop: "8px", color: "#1A1C1A", opacity: "0.6", fontWeight: "bold", letterSpacing: "0.08em" }}>BE THE PART OF SYSTEM. JOIN THE NETWORK.</p>
          </div>
          <div style={{ display: "flex", gap: "0" }}>
            <input type="text" placeholder=">> Fill you calendars" style={{ flex: "1", backgroundColor: "#e3e2e0", border: "2px solid #1A1C1A", padding: "16px 24px", fontFamily: "monospace", fontSize: "14px", outline: "none" }} />
            <button style={{ backgroundColor: "#1A1C1A", color: "white", padding: "16px 32px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "12px", border: "2px solid #1A1C1A", cursor: "pointer", whiteSpace: "nowrap" }}>
              JOIN_US_FOR_COOKIE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
