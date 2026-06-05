import AboutVision from "./AboutVision";
import ScrollStack, {
  ScrollStackItem,
} from "../../sections/projects/ScrollStack";
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
          border-top: 1px solid rgba(26, 28, 26, 0.15);
          background: linear-gradient(rgba(250, 249, 246, 0.84), rgba(250, 249, 246, 0.84)), url('/topography.avif') repeat;
        }
        .about-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1000px;
        }
        .about-mission-grid {
          background-color: #fff;
          border: 1px solid rgba(26, 28, 26, 0.2);
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          text-align: center;
          padding: 24px 20px;
          box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.04);
        }
        .about-mission-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .about-mission-right h2 {
          max-width: 760px;
        }
        .about-mission-right p {
          max-width: 700px;
          margin: 0 auto 40px;
        }
        .about-mission-details {
          border-top: 1px solid rgba(26, 28, 26, 0.08);
          padding-top: 16px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          justify-items: center;
        }
        .about-mission-details > div {
          max-width: 250px;
          text-align: left;
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
            border-bottom: 1px solid rgba(26, 28, 26, 0.15);
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
            border-bottom: 1px solid rgba(26, 28, 26, 0.15);
            padding: 40px 32px;
          }
          .about-mission-right {
            padding: 40px 32px;
          }
          .about-mission-details {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
      <section id="about" className="about-section-root">
        {/* ── Hero Header ── */}
        <header style={{ marginBottom: "80px", maxWidth: "100%" }}>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #A33B3C, #d4505f)",
              borderRadius: "2px",
              marginBottom: "32px",
            }}
          />
          <h2
            style={{
              fontSize: "clamp(2rem, 12vw, 5.5rem)",
              fontWeight: "900",
              lineHeight: "0.85",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              marginBottom: "40px",
              color: "#1A1C1A",
            }}
          >
            WANT TO
            <br />
            KNOW {displayedAboutText.substring(0, 6)}
            <span style={{ color: "#006565" }}>
              {displayedAboutText.substring(6)}
            </span>
            {displayedAboutText.length < fullAboutText.length &&
              displayedAboutText.length > 0 && (
                <span className="animate-pulse">|</span>
              )}{" "}
            ?
          </h2>
          <div className="about-header-grid">
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "1.8",
                color: "#2a2c2a",
                margin: "0",
              }}
            >
              CIDC is a student-driven development community focused on building
              real-world systems for the college ecosystem. We follow a
              project-based learning approach where students don&apos;t just
              learn — they{" "}
              <strong>build, deploy, and solve actual problems</strong> within
              the institute.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "450",
                lineHeight: "1.8",
                color: "#2a2c2a",
                margin: "0",
              }}
            >
              From day one, members are exposed to practical development
              workflows, collaborative environments, and production-level
              thinking. Every contribution matters and every line of code ships.
            </p>
          </div>
        </header>

        {/* ── Bento Grid: Vision + Image + Shadows Lighted ── */}
        <ScrollStack gap={500} animationType="flip-horizontal">
          <ScrollStackItem>
            <div
              style={{
                border: "1px solid rgba(26, 28, 26, 0.2)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 12px 40px rgba(0,0,0,0.04)",
                height: "100%"
              }}
            >
              <AboutVision />
            </div>
          </ScrollStackItem>

          {/* ── Mission Statement ── */}
          <ScrollStackItem>
            <div className="about-mission-grid" style={{ height: "100%" }}>
              <div className="about-mission-right">
                {/* Top content group */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "16px",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#006565",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px" }}
                      >
                        ads_click
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: "#006565",
                        fontFamily: "monospace",
                        fontWeight: "700",
                      }}
                    >
                      CORE_PRECISION
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(1.8rem, 4vw, 3rem)",
                      fontWeight: "900",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      color: "#1A1C1A",
                      marginBottom: "12px",
                      lineHeight: "1",
                    }}
                  >
                    Precision
                  </h2>

                  <div
                    style={{
                      width: "80px",
                      height: "4px",
                      background: "linear-gradient(90deg, #A33B3C, #d4505f)",
                      borderRadius: "2px",
                      marginBottom: "16px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />

                  <p
                    style={{
                      fontSize: "clamp(14px, 1.8vw, 16px)",
                      fontWeight: "500",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                      color: "#2a2c2a",
                      maxWidth: "520px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    CIDC operates as an engineering hub focused on stable, high-performance web systems. Rather than simulated code exercises, we deliver production-level infrastructure that drives the digital evolution of our campus.
                  </p>
                </div>

                {/* Bottom details block */}
                <div className="about-mission-details" style={{ width: "100%" }}>
                  <div>
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: "900",
                        marginBottom: "6px",
                        color: "#006565",
                      }}
                    >
                      01. FUNCTIONAL INTENT
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#2a2c2a",
                        fontWeight: "450",
                        lineHeight: "1.6",
                      }}
                    >
                      Every line of code and UI pixel serves an active system requirement. We design without unnecessary bulk.
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: "900",
                        marginBottom: "6px",
                        color: "#006565",
                      }}
                    >
                      02. RESILIENT ARCHITECTURE
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#2a2c2a",
                        fontWeight: "450",
                        lineHeight: "1.6",
                      }}
                    >
                      Engineering for longevity, ensuring secure data models, high availability, and long-term maintainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>

        {/* Upcoming Section Footer */}
        <div
          style={{
            marginTop: "96px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div className="about-upcoming-header">
            <h3
              style={{
                fontSize: "clamp(20px, 4vw, 28px)",
                fontWeight: "900",
                textTransform: "uppercase",
                marginBottom: "0px",
                letterSpacing: "-0.01em",
                color: "#1A1C1A",
              }}
            >
              UPCOMING PROJECTS
            </h3>
            <a
              href="#footer"
              style={{
                backgroundColor: "#006565",
                color: "white",
                padding: "10px 24px",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "11px",
                border: "1px solid rgba(26, 28, 26, 0.15)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                height: "fit-content",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "12px",
                boxShadow: "0px 4px 12px rgba(0, 101, 101, 0.15)"
              }}
              className="hover:translate-x-1"
            >
              WANT TO CONTRIBUTE ?
            </a>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .marquee-track {
              display: flex;
              gap: 24px;
              flex-shrink: 0;
              padding-right: 24px;
              animation: marqueeScroll 25s linear infinite;
            }
            .about-marquee-card {
              width: 280px;
              flex-shrink: 0;
              padding: 24px;
              border: 1px solid rgba(26, 28, 26, 0.15);
              background-color: #fff;
              display: flex;
              flex-direction: column;
              gap: 12px;
              border-radius: 12px;
              box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
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
          `,
            }}
          />

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}
          >
            <div
              className="marquee-container"
              style={{
                display: "flex",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                paddingBottom: "12px",
              }}
            >
              {[0, 1].map((trackIndex) => (
                <div
                  key={trackIndex}
                  className="marquee-track"
                  aria-hidden={trackIndex !== 0}
                >
                  {[
                    {
                      name: "Digital Leave & Outpass System",
                      desc: "Streamlining digital approvals for hostel leaves with robust QR tracking.",
                    },
                    {
                      name: "Feedback & Grievance System",
                      desc: "Anonymous reporting platform for logging campus issues and resolution tracking.",
                    },
                    {
                      name: "Lost & Found Management",
                      desc: "Centralized campus repository for quickly logging found and missing items.",
                    },
                    {
                      name: "Hostel Room Management",
                      desc: "Automated room allocations, status monitoring, and complaint ticketing log.",
                    },
                    {
                      name: "Student Idea & Innovation Portal",
                      desc: "Where students submit concepts, find collab teams, and receive R&D funding.",
                    },
                    {
                      name: "Laundry Management System",
                      desc: "Digital tracking for student laundry cycles, pickups, and capacity limits.",
                    },
                  ].map((proj, i) => (
                    <div key={i} className="about-marquee-card">
                      <div
                        style={{
                          width: "24px",
                          height: "4px",
                          backgroundColor: "#A33B3C",
                          borderRadius: "2px"
                        }}
                      ></div>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "900",
                          textTransform: "uppercase",
                          color: "#1A1C1A",
                          lineHeight: "1.2",
                        }}
                      >
                        {proj.name}
                      </h4>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "rgba(26,28,26,0.6)",
                          fontWeight: "bold",
                          fontFamily: "monospace",
                          letterSpacing: "0.05em",
                          lineHeight: "1.5",
                        }}
                      >
                        {proj.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  backgroundColor: "#006565",
                  padding: "20px 24px",
                  color: "white",
                  minWidth: "280px",
                  maxWidth: "100%",
                  borderRadius: "12px",
                  boxShadow: "0px 8px 30px rgba(0, 101, 101, 0.15)"
                }}
              >
                <h3
                  style={{
                    fontSize: "11px",
                    fontWeight: "900",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                    letterSpacing: "0.15em",
                    opacity: "0.7",
                  }}
                >
                  SYSTEM STATUS
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    fontFamily: "monospace",
                    fontSize: "9px",
                    fontWeight: "600",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
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