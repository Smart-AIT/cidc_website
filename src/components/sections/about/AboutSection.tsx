import AboutVision from "./AboutVision";
import ScrollStack, { ScrollStackItem } from "../../sections/projects/ScrollStack";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [displayedAboutText, setDisplayedAboutText] = useState("");
  const fullAboutText = "ABOUT US";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > fullAboutText.length) {
        currentIndex = 0;
      }
      setDisplayedAboutText(fullAboutText.substring(0, currentIndex));
    }, 300);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <style>{`
        .about-section-root {
          width: 100%;
          padding: 80px 40px 60px 40px;
          border-top: 2px solid #1A1C1A;
          background-color: #faf9f6;
        }
        .about-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1000px;
        }
        .about-mission-grid {
          background-color: #fff;
          border: 2px solid #1A1C1A;
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 0;
        }
        .about-mission-left {
          padding: 64px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #faf9f6;
          border-right: 2px solid #1A1C1A;
        }
        .about-mission-right {
          padding: 64px 56px;
        }
        .about-mission-details {
          border-top: 2px solid rgba(26, 28, 26, 0.08);
          padding-top: 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .about-upcoming-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: center;
        }

        @media (max-width: 640px) {
          .about-section-root {
            padding: 40px 16px 40px 16px;
          }
          .about-header-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-mission-grid {
            grid-template-columns: 1fr;
          }
          .about-mission-left {
            padding: 32px 20px;
            border-right: none;
            border-bottom: 2px solid #1A1C1A;
          }
          .about-mission-right {
            padding: 32px 20px;
          }
          .about-mission-details {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-upcoming-header {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .about-section-root {
            padding: 60px 24px 48px 24px;
          }
          .about-header-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-mission-grid {
            grid-template-columns: 1fr;
          }
          .about-mission-left {
            border-right: none;
            border-bottom: 2px solid #1A1C1A;
            padding: 40px 32px;
          }
          .about-mission-right {
            padding: 40px 32px;
          }
        }
      `}</style>
      <section id="about" className="about-section-root">

        {/* ── Hero Header ── */}
        <header style={{ marginBottom: "80px", maxWidth: "100%" }}>
          <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #A33B3C, #d4505f)", borderRadius: "2px", marginBottom: "32px" }} />
          <h2 style={{ fontSize: "clamp(2rem, 12vw, 5.5rem)", fontWeight: "900", lineHeight: "0.85", letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: "40px", color: "#1A1C1A" }}>
            WANT TO<br />KNOW {displayedAboutText.substring(0, 6)}<span style={{ color: "#006565" }}>{displayedAboutText.substring(6)}</span>{displayedAboutText.length < fullAboutText.length && displayedAboutText.length > 0 && <span className="animate-pulse">|</span>} ?
          </h2>
          <div className="about-header-grid">
            <p style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.8", color: "#2a2c2a", margin: "0" }}>
              CIDC is a student-driven development community focused on building
              real-world systems for the college ecosystem.
              We follow a project-based learning approach where students don&apos;t just
              learn — they <strong>build, deploy, and solve actual problems</strong>{" "}
              within the institute.
            </p>
            <p style={{ fontSize: "16px", fontWeight: "450", lineHeight: "1.8", color: "#2a2c2a", margin: "0" }}>
              From day one, members are exposed to practical development workflows,
              collaborative environments, and production-level thinking.
              Every contribution matters and every line of code ships.
            </p>
          </div>
        </header>

        {/* ── Bento Grid: Vision + Image + Stats ── */}
        <ScrollStack gap={500}>
          <ScrollStackItem>
            <div style={{ border: "2px solid #1A1C1A", borderRadius: "16px", overflow: "hidden" }}>
              <AboutVision />
            </div>
          </ScrollStackItem>

          {/* ── Mission Statement ── */}
          <ScrollStackItem>
            <div className="about-mission-grid">

              {/* Left: Icon + Label */}
              <div className="about-mission-left">
                <span className="material-symbols-outlined" style={{ fontSize: "clamp(4rem, 14vw, 8rem)", color: "#1A1C1A", marginBottom: "24px" }}>
                  track_changes
                </span>
                <span style={{ fontFamily: "monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#A33B3C", fontWeight: "700" }}>
                  OPERATIONAL_MISSION
                </span>
              </div>

              {/* Right: Content */}
              <div className="about-mission-right">
                <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "900", textTransform: "uppercase", marginBottom: "28px", lineHeight: "1", color: "#1A1C1A" }}>
                  CIDC Precision
                </h2>
                <p style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.8", marginBottom: "40px", color: "#2a2c2a", maxWidth: "560px" }}>
                  Focuses on execution. Builds production systems. Delivers working solutions.
                  <br /><br />
                  <span style={{ color: "#555" }}>
                    It is not just a club—it&apos;s a development ecosystem contributing
                    directly to the college&apos;s digital growth.
                  </span>
                </p>

                <div className="about-mission-details">
                  <div>
                    <p style={{ fontFamily: "monospace", fontSize: "12px", textTransform: "uppercase", fontWeight: "900", marginBottom: "10px", color: "#006565" }}>01. INTENTIONALITY</p>
                    <p style={{ fontSize: "14px", color: "#2a2c2a", fontWeight: "450", lineHeight: "1.7" }}>Every pixel on our grid serves a structural purpose. We reject decorative fluff.</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "monospace", fontSize: "12px", textTransform: "uppercase", fontWeight: "900", marginBottom: "10px", color: "#006565" }}>02. PERSISTENCE</p>
                    <p style={{ fontSize: "14px", color: "#2a2c2a", fontWeight: "450", lineHeight: "1.7" }}>Designing for longevity through heavy weights and high-contrast accessibility.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>

        {/* Upcoming Section Footer */}
        <div style={{ marginTop: "96px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="about-upcoming-header">
            <h3 style={{ fontSize: "clamp(20px, 4vw, 28px)", fontWeight: "900", textTransform: "uppercase", marginBottom: "0px", letterSpacing: "-0.01em", color: "#1A1C1A" }}>UPCOMING PROJECTS</h3>
            <button style={{ backgroundColor: "#006565", color: "white", padding: "8px 20px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "10px", border: "2px solid #1A1C1A", cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap", height: "fit-content" }} className="hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1A1C1A]">
              WANT TO CONTRIBUTE ?
            </button>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .marquee-track {
              display: flex;
              gap: 24px;
              flex-shrink: 0;
              padding-right: 24px; /* Matches the gap so both tracks connect seamlessly */
              animation: marqueeScroll 25s linear infinite;
            }
            .about-marquee-card {
              width: 280px;
              flex-shrink: 0;
              padding: 24px;
              border: 2px solid #1A1C1A;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              gap: 12px;
              box-shadow: 4px 4px 0px 0px rgba(26,28,26,0.1);
            }
            @media (max-width: 640px) {
              .about-marquee-card {
                width: 220px;
                padding: 16px;
              }
              .marquee-track {
                gap: 16px;
                padding-right: 16px;
              }
            }
          `}} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
            
            <div className="marquee-container" style={{ display: "flex", overflow: "hidden", position: "relative", width: "100%", paddingBottom: "12px" }}>
              {[0, 1].map((trackIndex) => (
                <div key={trackIndex} className="marquee-track" aria-hidden={trackIndex !== 0}>
                  {[
                    { name: "Digital Leave & Outpass System", desc: "Streamlining digital approvals for hostel leaves with robust QR tracking." },
                    { name: "Feedback & Grievance System", desc: "Anonymous reporting platform for logging campus issues and resolution tracking." },
                    { name: "Lost & Found Management", desc: "Centralized campus repository for quickly logging found and missing items." },
                    { name: "Hostel Room Management", desc: "Automated room allocations, status monitoring, and complaint ticketing log." },
                    { name: "Student Idea & Innovation Portal", desc: "Where students submit concepts, find collab teams, and receive R&D funding." },
                    { name: "Laundry Management System", desc: "Digital tracking for student laundry cycles, pickups, and capacity limits." }
                  ].map((proj, i) => (
                    <div key={i} className="about-marquee-card">
                      <div style={{ width: "24px", height: "4px", backgroundColor: "#A33B3C" }}></div>
                      <h4 style={{ fontSize: "16px", fontWeight: "900", textTransform: "uppercase", color: "#1A1C1A", lineHeight: "1.2" }}>{proj.name}</h4>
                      <p style={{ fontSize: "11px", color: "rgba(26,28,26,0.7)", fontWeight: "bold", fontFamily: "monospace", letterSpacing: "0.05em", lineHeight: "1.5" }}>{proj.desc}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ backgroundColor: "#006565", padding: "20px 24px", color: "white", minWidth: "280px", maxWidth: "100%" }}>
                <h3 style={{ fontSize: "11px", fontWeight: "900", textTransform: "uppercase", marginBottom: "12px", letterSpacing: "0.15em", opacity: "0.7" }}>SYSTEM STATUS</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "monospace", fontSize: "9px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  <div>&gt; PROJECT_PIPELINE: ACTIVE</div>
                  <div>&gt; STUDENT_MODULE_RESERVED</div>
                  <div>&gt; MENTORSHIP_LAYER: ON</div>
                  <div>&gt; STATUS: STABLE</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
