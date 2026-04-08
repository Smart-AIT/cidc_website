"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [displayedStatus, setDisplayedStatus] = useState("");
  const fullText = ">>GIT_INIT_CIDC";
  const fullStatus = "STATUS: OPERATIONAL";

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
        .hero-left-col {
          padding: 60px 80px 60px 80px;
        }
        .hero-label-topleft {
          position: absolute;
          top: 24px;
          left: 40px;
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
          .hero-status-labels {
            bottom: 16px !important;
            left: 20px !important;
            right: auto !important;
            text-align: left !important;
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
          border: 2px solid #1A1C1A;
          box-shadow: 5px 5px 0px 0px #1A1C1A;
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
          box-shadow: 3px 3px 0px 0px rgba(26,28,26,1);
          transform: translate(2px, 2px);
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
      <section id="home" className="w-full flex justify-center" style={{ marginTop: "0px", marginBottom: "0px" }}>
        {/* Main Hero Card */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 w-[98%] max-w-[1400px] border-2 border-[#1A1C1A] shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] bg-[#faf9f6] overflow-hidden" style={{ borderRadius: "4px" }}>
            {/* Left Branding Column */}
            <div className="order-2 xl:order-1 lg:col-span-12 xl:col-span-7 flex flex-col items-start justify-center border-t-2 xl:border-t-0 xl:border-r-2 border-[#1A1C1A] relative z-20 bg-[#faf9f6] hero-left-col">
              {/* Label */}
              <div className="hero-label-topleft font-mono text-[10px] sm:text-xs tracking-widest text-[#1A1C1A]/40 uppercase font-bold">
                {displayedText}
                {displayedText.length < fullText.length && <span className="animate-pulse">|</span>}
              </div>

              {/* Headline */}
              <h1 className="uppercase" style={{ 
                fontSize: "clamp(2.2rem, 8vw, 6rem)", 
                lineHeight: "0.9", 
                fontWeight: "900", 
                letterSpacing: "-0.04em", 
                color: "#1A1C1A",
                marginTop: "40px",
                marginBottom: "32px"
              }}>
                INNOVATION{" "}
                <br />
                <span style={{ color: "#006565" }}>THROUGH</span>
                <br />
                DEVELOPMENT_
              </h1>

              <div style={{ width: "100px", height: "8px", backgroundColor: "#A33B3C", marginBottom: "40px" }}></div>

              {/* Description */}
              <p className="hero-desc" style={{ 
                fontSize: "18px", 
                maxWidth: "600px", 
                lineHeight: "1.6", 
                color: "#1A1C1A", 
                opacity: "0.8",
                fontWeight: "500",
                marginTop: "20px",
                marginBottom: "60px"
              }}>
                CIDC follows a project-based learning approach to give members real
                production and practical exposure while contributing to the
                college&apos;s overall development. This helps students build strong
                technical and collaboration skills early, while also giving them
                opportunities to actively contribute to meaningful college
                initiatives.
              </p>

              {/* CTAs */}
              <div className="hero-cta-row flex flex-col sm:flex-row gap-5 sm:gap-6 w-full sm:w-auto" style={{ marginLeft: "0" }}>
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
                  className="hero-btn hero-btn-secondary"
                >
                  Join us
                </a>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="order-1 xl:order-2 lg:col-span-12 xl:col-span-5 bg-[#e1e2de] relative min-h-[300px] sm:min-h-[400px] lg:min-h-[650px] flex flex-col items-center justify-center p-8 sm:p-12 md:p-20 z-10">
              
              {/* CIDC Geometric Logo Setup */}
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] aspect-[16/10] flex flex-col justify-center items-center border-[1.5px] border-[#006565]/25 -mt-10 lg:mt-0">
                {/* The Text */}
                <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-black text-[#1A1C1A] leading-none tracking-tighter z-20 relative">
                  ｛／｝
                </h1>
                <h2 className="text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] font-black text-[#1A1C1A] leading-none tracking-tighter z-20 relative">
                  CIDC
                </h2>
                {/* Decorative Red Box on Bottom Right */}
                <div className="absolute -bottom-3 -right-3 w-16 h-4 bg-[#A33B3C] z-30"></div>
                {/* Soft backdrop glow */}
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-110 z-0"></div>
              </div>

              {/* Bottom right floating status labels */}
              <div className="hero-status-labels absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12 text-right z-20 space-y-1.5">
                <div className="font-mono text-[10px] sm:text-[12px] tracking-widest text-[#A33B3C] font-bold uppercase">
                  {displayedStatus}
                  {displayedStatus.length < fullStatus.length && <span className="animate-pulse">|</span>}
                </div>
                <div className="font-mono text-[10px] sm:text-[12px] tracking-widest text-[#1A1C1A]/60 uppercase font-bold">
                  COLLEGE INNOVATION &amp; DEVELOPMENT
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
