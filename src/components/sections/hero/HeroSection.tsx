"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [displayedStatus, setDisplayedStatus] = useState("");
  const fullText = ">>GIT_INIT_CIDC";
  const fullStatus = "STATUS: OPERATIONAL";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > fullText.length) {
        currentIndex = 0;
      }
      setDisplayedText(fullText.substring(0, currentIndex));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > fullStatus.length) {
        currentIndex = 0;
      }
      setDisplayedStatus(fullStatus.substring(0, currentIndex));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.16;
          background-image: url('/topography.avif');
          background-repeat: repeat;
          z-index: 10;
        }
        .hero-left-col {
          padding: 60px 40px 60px 80px;
        }
        .hero-label-topleft {
          position: absolute;
          top: 24px;
          left: 40px;
        }
        @media (max-width: 1024px) {
          .hero-status-container {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            width: 100% !important;
            max-width: 440px !important;
            text-align: center !important;
            margin-top: 40px !important;
            padding: 0 16px !important;
          }
          .hero-status-labels {
            text-align: center !important;
          }
        }
        @media (max-width: 640px) {
          .hero-left-col {
            padding: 48px 20px 40px 20px;
          }
          .hero-label-topleft {
            left: 20px;
            top: 16px;
          }
          .hero-desc {
            font-size: 15px !important;
            margin-bottom: 32px !important;
            margin-top: 12px !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btn {
            padding: 12px 20px !important;
            font-size: 11px !important;
            width: 100% !important;
            min-width: unset !important;
          }
        }
        .hero-btn {
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align: center;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          transition: all 0.2s ease;
          border-radius: 12px;
          border: 1px solid rgba(26, 28, 26, 0.2);
          box-shadow: 0px 4px 12px rgba(26, 28, 26, 0.08);
          padding: 14px 28px;
          font-size: 12px;
        }
        .hero-btn-primary {
          background-color: #006565;
          color: white;
          min-width: 180px;
        }
        .hero-btn-secondary {
          background-color: white;
          color: #1A1C1A;
          min-width: 150px;
        }
        .hero-btn-primary:hover, .hero-btn-secondary:hover {
          box-shadow: 0px 6px 16px rgba(26, 28, 26, 0.15);
          transform: translateY(-1px);
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-left-col {
            padding: 48px 40px 48px 40px;
          }
          .hero-label-topleft {
            left: 40px;
          }
        }
      `}</style>

      <section
        id="home"
        className="relative w-full flex justify-center bg-transparent overflow-hidden"
        style={{ marginTop: "0px", marginBottom: "20px" }}
      >
        {/* Main Hero Card Container Layer */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 w-[98%] max-w-[1400px] border border-[#1A1C1A]/30 shadow-[0px_12px_40px_rgba(0,0,0,0.06)] bg-white/70 backdrop-blur-md overflow-hidden z-10 my-4"
          style={{ borderRadius: "12px" }}
        >
          <div className="hero-bg-overlay"></div>
          {/* Left Branding Column */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start justify-center border-t border-t-[#1A1C1A]/15 lg:border-t-0 lg:border-r border-r-[#1A1C1A]/15 relative z-20 bg-transparent hero-left-col">
            {/* Label */}
            <div className="hero-label-topleft font-mono text-[10px] sm:text-xs tracking-widest text-[#1A1C1A]/40 uppercase font-bold">
              {displayedText}
              {displayedText.length < fullText.length && (
                <span className="animate-pulse">|</span>
              )}
            </div>

            {/* Headline */}
            <h1
              className="uppercase"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 4.8rem)",
                lineHeight: "0.95",
                fontWeight: "900",
                letterSpacing: "-0.04em",
                color: "#1A1C1A",
                marginTop: "40px",
                marginBottom: "32px",
              }}
            >
              INNOVATION <br />
              <span style={{ color: "#006565" }}>THROUGH</span>
              <br />
              DEVELOPMENT_
            </h1>

            <div
              style={{
                width: "100px",
                height: "8px",
                backgroundColor: "#A33B3C",
                marginBottom: "40px",
                borderRadius: "2px"
              }}
            ></div>

            {/* Description */}
            <p
              className="hero-desc"
              style={{
                fontSize: "17px",
                maxWidth: "580px",
                lineHeight: "1.6",
                color: "#1A1C1A",
                opacity: "0.8",
                fontWeight: "500",
                marginTop: "20px",
                marginBottom: "60px",
              }}
            >
              CIDC follows a project-based learning approach to give members
              real production and practical exposure while contributing to the
              college&apos;s overall development. This helps students build
              strong technical and collaboration skills early, while also giving
              them opportunities to actively contribute to meaningful college
              initiatives.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-row flex flex-col sm:flex-row gap-5 sm:gap-6 w-full sm:w-auto"
              style={{ marginLeft: "0" }}
            >
              <a
                href="https://www.instagram.com/cidc_aitpune"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-primary"
              >
                @cidc_aitpune
              </a>
              <a
                href="#footer"
                onClick={(e) => handleSmoothScroll(e, "#footer")}
                className="hero-btn hero-btn-secondary"
              >
                Join us
              </a>
            </div>
          </div>

          {/* Right Visual Column - Keeps the CIDC box strictly center-aligned */}
          <div className="order-1 lg:order-2 lg:col-span-5 bg-transparent relative min-h-[450px] lg:min-h-[650px] flex flex-col items-center justify-center p-8 sm:p-12 z-20">
            
            {/* CIDC Geometric Logo Setup - Locked in Center */}
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[440px] aspect-[16/10] flex flex-col justify-center items-center border border-[#006565]/20 bg-white/40 backdrop-blur-md rounded-lg">
              {/* The Text */}
              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-black text-[#1A1C1A] leading-none tracking-tighter z-20 relative">
                ｛／｝
              </h1>
              <h2 className="text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] font-black text-[#1A1C1A] leading-none tracking-tighter z-20 relative">
                CIDC
              </h2>
              {/* Decorative Red Box on Bottom Right */}
              <div className="absolute -bottom-1 -right-1 w-16 h-3 bg-[#A33B3C] z-30 rounded-sm"></div>
              {/* Soft backdrop glow */}
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-110 z-0"></div>
            </div>

            {/* Status Container - Aligned precisely at buttons horizontal height and matching CIDC width limit */}
            <div className="hero-status-container lg:absolute lg:bottom-[60px] lg:right-0 w-full lg:max-w-[440px] lg:px-0 text-right z-20">
              <div className="hero-status-labels sm:text-right space-y-1 w-full">
                <div className="font-mono text-[10px] sm:text-[12px] tracking-widest text-[#A33B3C] font-bold uppercase whitespace-nowrap">
                  {displayedStatus}
                  {displayedStatus.length < fullStatus.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] lg:text-[12px] tracking-tight sm:tracking-widest text-[#1A1C1A]/60 uppercase font-bold">
                  COLLEGE INNOVATION &amp; DEVELOPMENT
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}