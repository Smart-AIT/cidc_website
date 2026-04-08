"use client";

import { useRef, useState, useEffect } from "react";
import EventCard from "./EventCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EVENTS = [
  {
    ref_id: "REF_LOG",
    status: "Upcoming" as const,
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
    status: "Upcoming" as const,
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
    status: "Upcoming" as const,
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
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");
  const fullPlaceholder = ">> Fill you calendars";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > fullPlaceholder.length) {
        currentIndex = 0;
      }
      setDisplayedPlaceholder(fullPlaceholder.substring(0, currentIndex));
    }, 300);

    return () => clearInterval(interval);
  }, []);

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

    // Add reveal/hide effect to event cards based on scroll
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
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            end: "top 20%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  });

  return (
    <>
      <style>{`
        .events-section-root {
          width: 100%;
          padding: 60px 40px;
          border-top: 2px solid #1A1C1A;
          background-color: #faf9f6;
        }
        .events-hero-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          align-items: flex-start;
          margin-bottom: 80px;
        }
        /* Desktop timeline: alternating left/right */
        .events-timeline-item {
          position: relative;
          margin-bottom: 96px;
          display: flex;
          width: 100%;
          z-index: 2;
        }
        .events-timeline-card-wrap {
          width: 45%;
        }
        .events-timeline-dot {
          position: absolute;
          left: 50%;
          top: 40px;
          width: 16px;
          height: 16px;
          background-color: #A33B3C;
          border: 2px solid #1A1C1A;
          transform: translateX(-50%);
          z-index: 3;
        }
        .events-timeline-circle {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 32px;
          height: 32px;
          background-color: #e3e2e0;
          border-radius: 50%;
          border: 2px solid #1A1C1A;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        .events-timeline-line-bg {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: rgba(26, 28, 26, 0.2);
          transform: translateX(-50%);
          z-index: 0;
        }
        .events-timeline-line-progress {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background-color: #A33B3C;
          transform: translateX(-50%);
          transform-origin: top;
          z-index: 1;
        }
        .events-announcements {
          margin-top: 96px;
          border: 2px solid #1A1C1A;
          padding: 25px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
          background-color: #faf9f6;
          border-radius: 8px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .events-announcements-input-group {
          display: flex;
          gap: 0;
        }
        .events-announcements-input {
          flex: 1;
          background-color: #e3e2e0;
          border: 2px solid #1A1C1A;
          padding: 16px 24px;
          font-family: monospace;
          font-size: 14px;
          outline: none;
          border-radius: 12px 0 0 12px;
          min-width: 0;
        }
        .events-announcements-btn {
          background-color: #1A1C1A;
          color: white;
          padding: 16px 32px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 12px;
          border: 2px solid #1A1C1A;
          cursor: pointer;
          white-space: nowrap;
          border-radius: 0 12px 12px 0;
        }

        @media (max-width: 768px) {
          .events-section-root {
            padding: 40px 16px;
          }
          .events-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 48px;
          }
          /* Mobile timeline: full-width stacked, left-aligned line */
          .events-timeline-item {
            justify-content: flex-end !important;
            margin-bottom: 48px;
            padding-left: 36px;
          }
          .events-timeline-card-wrap {
            width: 100%;
          }
          .events-timeline-dot {
            left: 0;
            transform: translateX(0);
          }
          .events-timeline-circle {
            left: 0;
            transform: translate(-25%, -50%);
          }
          .events-timeline-line-bg,
          .events-timeline-line-progress {
            left: 8px;
            transform: translateX(0);
          }
          .events-announcements {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px 16px;
            margin-top: 48px;
          }
          .events-announcements-input-group {
            flex-direction: column;
          }
          .events-announcements-input {
            border-radius: 12px;
            padding: 10px 14px;
            font-size: 11px;
          }
          .events-announcements-btn {
            border-radius: 12px;
            padding: 10px 16px;
            font-size: 10px;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .events-section-root {
            padding: 48px 24px;
          }
          .events-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .events-timeline-card-wrap {
            width: 42%;
          }
          .events-announcements {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
          }
        }
      `}</style>
      <section ref={containerRef} id="events" className="events-section-root">
        <div style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}>
          {/* Hero Header */}
          <div className="events-hero-grid">
            <div>
              <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.2em", color: "#A33B3C", marginBottom: "16px", fontWeight: "bold" }}>
                SYSTEM_SCHEDULE // YEAR_2026
              </p>
              <h2 style={{ fontSize: "clamp(2.5rem, 12vw, 5.5rem)", fontWeight: "900", lineHeight: "0.85", textTransform: "uppercase", marginBottom: "32px" }}>
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
                  src="https://i.pinimg.com/originals/be/81/df/be81dfb06285a3f7b455d1d708e3d6b0.gif"
                  alt="Events visual"
                  style={{ width: "100%", filter: "grayscale(1)" }}
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} style={{ position: "relative" }}>
            {/* Vertical line - background */}
            <div className="events-timeline-line-bg" />
            
            {/* Vertical line - progress bar */}
            <div ref={progressLineRef} className="events-timeline-line-progress" />

            {EVENTS.map((event, index) => (
              <div
                key={`${event.title}-${index}`}
                ref={(el) => {
                  eventCardsRef.current[index] = el;
                }}
                className="events-timeline-item"
                style={{ justifyContent: index % 2 === 0 ? "flex-start" : "flex-end" }}
              >
                <div className="events-timeline-card-wrap">
                  <EventCard {...event} />
                </div>

                {/* Timeline marker main dot */}
                <div className="events-timeline-dot" />
                
                {/* Optional connector/spacer circles */}
                {index < EVENTS.length && (
                  <div className="events-timeline-circle" />
                )}
              </div>
            ))}
          </div>

          {/* Announcements Footer */}
          <div className="events-announcements">
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: "#A33B3C", marginBottom: "8px", fontWeight: "bold" }}>ANNOUNCEMENTS</p>
              <h3 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.01em", color: "#1A1C1A" }}>STAY TUNED TO THE<br />FREQUENCY</h3>
              <p style={{ fontSize: "10px", fontFamily: "monospace", marginTop: "8px", color: "#1A1C1A", opacity: "0.6", fontWeight: "bold", letterSpacing: "0.08em" }}>BE THE PART OF SYSTEM. JOIN THE NETWORK.</p>
            </div>
            <div className="events-announcements-input-group">
              <input type="text" placeholder={displayedPlaceholder} className="events-announcements-input" />
              <button className="events-announcements-btn">
                JOIN_US_FOR_COOKIE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
