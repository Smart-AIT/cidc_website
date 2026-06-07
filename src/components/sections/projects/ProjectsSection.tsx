import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_LIST = [
  {
    name: "AIT Website",
    desc: "The official web portal of the Army Institute of Technology, Pune. Built to streamline institutional resources, student portals, and academic listings in a unified modern interface, serving over 1500+ active campus nodes daily.",
    image: "/projects/ait.webp",
    style: { objectFit: "cover" },
  },
  {
    name: "Sniffi",
    desc: "A high-performance home veterinary service platform that delivers expert pet healthcare directly to your doorstep. It manages real-time scheduling, vaccinations, wellness checkups, and medical diagnostics, providing a stress-free experience for pet owners.",
    image: "/projects/sniffi2.webp",
    style: { objectFit: "cover" },
  },
  {
    name: "PROJAK",
    desc: "An enterprise-grade consulting and technology platform engineered to accelerate organizational growth. Leveraging data-driven diagnostics, advanced insights, and strategic execution modules to optimize complex corporate and academic workflows.",
    image: "/projects/projak.webp",
    style: { objectFit: "cover" },
  },
  {
    name: "SUGGEST",
    desc: "A modern social book discovery engine powered by short-form video reviews, interactive AI summaries, and community-driven reader insights. Designed to optimize and transform reading list curation for digital bibliophiles.",
    image: "/projects/suggest.webp",
    style: { objectFit: "contain" },
  },
  {
    name: "AIT Smart Labs",
    desc: "A comprehensive IoT and QR-driven laboratory management system. Streamlines hardware tracking, student attendance, equipment access logs, and safety verification across all department labs.",
    image: "/projects/aitsmartlab.webp",
    style: { objectFit: "contain" },
  },
  {
    name: "SendBox",
    desc: "An automated enterprise WhatsApp outreach engine. Built to broadcast personalized announcements, event schedules, and well wishes to staff, alumni, and students with robust API rate-limiting.",
    image: "/projects/sendbox.webp",
    style: { objectFit: "contain" },
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PROJECT_LIST.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PROJECT_LIST.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Auto-scroll every 2 seconds
    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  const currentProject = PROJECT_LIST[currentIndex];

  return (
    <>
      <style>{`
        .projects-section-root {
          width: 100%;
          padding: 80px 40px 120px 40px;
          border-top: 1px solid rgba(26, 28, 26, 0.15);
          background-color: transparent;
        }
        @media (max-width: 640px) {
          .projects-section-root {
            padding: 40px 16px 80px 16px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .projects-section-root {
            padding: 48px 24px 100px 24px;
          }
        }

        /* Carousel Styles softened to modern look */
        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1350px;
          margin: 0 auto;
          border: 1px solid rgba(26, 28, 26, 0.15);
          background: #fff;
          border-radius: 16px;
          box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          display: grid;
          grid-template-columns: 3fr 7fr;
          min-height: 650px;
        }

        @media (max-width: 900px) {
          .carousel-wrapper {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .carousel-content {
            order: 2;
          }
          .carousel-image-container {
            order: 1;
          }
        }

        .carousel-content {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid rgba(26, 28, 26, 0.12);
          background-color: #faf9f6;
        }

        @media (max-width: 900px) {
          .carousel-content {
            border-right: none;
            border-top: 1px solid rgba(26, 28, 26, 0.12);
            padding: 32px 24px;
          }
        }

        .carousel-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 480px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        @media (max-width: 900px) {
          .carousel-image-container {
            min-height: 300px;
          }
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .carousel-nav-buttons {
          display: flex;
          gap: 12px;
        }

        .carousel-nav-btn {
          background-color: #faf9f6;
          color: #1A1C1A;
          border: 1px solid rgba(26, 28, 26, 0.2);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 12px;
          box-shadow: 0px 4px 12px rgba(26, 28, 26, 0.05);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 14px;
        }

        .carousel-nav-btn:hover {
          transform: translateY(-2px);
          background-color: #ffffff;
          box-shadow: 0px 6px 20px rgba(26, 28, 26, 0.08);
          border-color: rgba(26, 28, 26, 0.3);
        }

        .carousel-nav-btn:active {
          transform: translateY(0px);
          background-color: #f4f3f0;
        }

        .carousel-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid rgba(26, 28, 26, 0.2);
          background-color: #e3e2de;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .carousel-dot.active {
          background-color: #006565;
          border-color: #006565;
          transform: scale(1.25);
        }
      `}</style>
      <section id="projects" className="projects-section-root">
        <div
          style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
        >
          {/* Header */}
          <header style={{ marginBottom: "80px" }}>
            <div
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#A33B3C",
                marginBottom: "32px",
                borderRadius: "2px"
              }}
            />
            <h2
              style={{
                fontSize: "clamp(2.5rem, 12vw, 5.5rem)",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: "0.85",
                marginBottom: "32px",
                color: "#1A1C1A",
              }}
            >
              ACTIVE
              <br />
              MANIFESTO
              <br />
              <span style={{ color: "#006565" }}>PROJECTS</span>
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(26, 28, 26, 0.7)",
                maxWidth: "600px",
                lineHeight: "1.8",
              }}
            >
              A COLLECTION OF REAL-WORLD PROJECTS BUILT BY CIDC COMMUNITY.
              FOCUSED ON LEARNING, BUILDING, AND DELIVERING IMPACTFUL SOLUTIONS.
              <br />
              <span style={{ marginTop: "16px", display: "block", color: "#A33B3C", fontWeight: "bold" }}>
                System version 1.0
              </span>
            </p>
          </header>

          {/* Carousel Wrapper */}
          <div
            className="carousel-wrapper"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Left Content Column */}
            <div className="carousel-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* ID Badge Node Label */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1.5px dashed rgba(26,28,26,0.12)",
                      paddingBottom: "12px",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "11px",
                        fontWeight: "900",
                        letterSpacing: "0.15em",
                        color: "#006565",
                      }}
                    >
                      // PROJECT_{String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "10px",
                        color: "#A33B3C",
                        fontWeight: "bold",
                        letterSpacing: "0.05em",
                      }}
                    >
                      STATUS: ACTIVE_DEPL
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                      fontWeight: "900",
                      textTransform: "uppercase",
                      color: "#1A1C1A",
                      marginTop: "16px",
                      marginBottom: "8px",
                      lineHeight: "1.1",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {currentProject.name}
                  </h3>
                  <div
                    style={{
                      width: "80px",
                      height: "4px",
                      background: "linear-gradient(90deg, #a33b3c, #d4505f)",
                      borderRadius: "2px",
                      marginBottom: "8px",
                    }}
                  />

                  <p
                    style={{
                      fontSize: "17px",
                      color: "#2a2c2a",
                      lineHeight: "1.6",
                      fontWeight: "450",
                      margin: 0,
                    }}
                  >
                    {currentProject.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="carousel-controls">
                {/* Dots indicator */}
                <div className="carousel-dots">
                  {PROJECT_LIST.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`carousel-dot ${currentIndex === i ? "active" : ""}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Left/Right Nav Buttons */}
                <div className="carousel-nav-buttons">
                  <button
                    onClick={prevSlide}
                    className="carousel-nav-btn"
                    aria-label="Previous project"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="carousel-nav-btn"
                    aria-label="Next project"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="carousel-image-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <Image
                    src={currentProject.image}
                    alt={currentProject.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 70vw"
                    style={{
                      objectFit: "contain",
                      padding: "32px",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}