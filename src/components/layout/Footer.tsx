"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "AIT_CIDC";

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let currentIndex = 0;
    let phase = 0; // 0: typing, 1: wrapping up

    const interval = setInterval(() => {
      if (phase === 0) {
        // Typing phase
        currentIndex++;
        if (currentIndex > fullText.length) {
          phase = 1; // Switch to wrap-up phase
          currentIndex = fullText.length;
        } else {
          setDisplayedText(fullText.substring(0, currentIndex));
        }
      } else if (phase === 1) {
        // Wrap-up phase
        currentIndex--;
        if (currentIndex < 0) {
          phase = 0; // Switch back to typing phase
          currentIndex = 0;
          setDisplayedText("");
        } else {
          setDisplayedText(fullText.substring(0, currentIndex));
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .footer-container {
          position: relative;
          width: 100%;
          background-color: #FAF9F6;
          border-top: 1px solid rgba(26,28,26,0.15);
          margin-top: 96px;
          display: flex;
          justify-content: center;
          overflow: hidden;
        }
        .footer-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.16;
          background-image: url('/topography.png');
          background-repeat: repeat;
        }
        .footer-root {
          position: relative;
          z-index: 10;
          width: 98%;
          max-width: 1400px;
          padding: 20px 48px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px 40px;
          margin-bottom: 80px;
        }
        .footer-header-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 640px) {
          .footer-root {
            padding: 20px 16px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 48px;
          }
          .footer-header-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .footer-root {
            padding: 20px 24px;
          }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }
      `}</style>
      <footer id="footer" className="footer-container">
        <div className="footer-bg"></div>
        <div className="footer-root">
          {/* Header Section */}
          <div style={{ marginBottom: "35px", marginTop: "40px" }}>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#A33B3C",
                color: "white",
                padding: "5px 12px",
                marginBottom: "24px",
                borderRadius: "6px"
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  fontWeight: "900",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                SYSTEM_ACCESS: EXTERNAL_COMMUNICATION
              </span>
            </div>

            <div className="footer-header-grid">
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  lineHeight: "0.9",
                  letterSpacing: "-0.02em",
                }}
              >
                INITIATE
                <br />
                <span style={{ color: "#006565" }}>CONNECTION_</span>
              </h2>
            </div>
          </div>

          {/* Grid */}
          <div className="footer-grid">
            {/* Address */}
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  marginBottom: "0px",
                }}
              >
                Address
              </h3>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#A33B3C",
                  marginBottom: "24px",
                  borderRadius: "1px"
                }}
              ></div>

              <p className="text-lg font-semibold leading-relaxed mb-5">
                411015,
                <br />
                Alandi Road, Dighi
                <br />
                Army Institute of Technology
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  marginBottom: "0px",
                }}
              >
                Quick
              </h3>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#A33B3C",
                  marginBottom: "24px",
                  borderRadius: "1px"
                }}
              ></div>

              <nav className="grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Events", href: "#events" },
                  { name: "Project", href: "#projects" },
                  { name: "Team", href: "#team" },
                  { name: "About us", href: "#about" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 text-base font-semibold uppercase tracking-[0.05em] w-fit group"
                  >
                    <span className="text-[#1A1C1A]/30 group-hover:text-[#A33B3C]">
                      →
                    </span>
                    <span className="group-hover:text-[#A33B3C]">
                      {link.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  marginBottom: "0px",
                }}
              >
                Contact
              </h3>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#A33B3C",
                  marginBottom: "24px",
                  borderRadius: "1px"
                }}
              ></div>

              <div className="flex flex-col gap-3">
                {/* 1. Phone Option with High Quality Dial Icon */}
                <a href="tel:+917983957734" className="flex items-center gap-3 group">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.55C2 5.86 2.12 5.21 2.36 4.61C2.61 4 3 3.44 3.52 2.94C4.15 2.31 4.81 2 5.5 2C5.75 2 5.99 2.05 6.22 2.16C6.46 2.27 6.67 2.44 6.84 2.68L9.39 6.27C9.55 6.5 9.66 6.72 9.72 6.94C9.79 7.15 9.82 7.36 9.82 7.57C9.82 7.84 9.74 8.11 9.58 8.37C9.43 8.63 9.21 8.89 8.92 9.17L8.02 10.1C7.89 10.23 7.82 10.39 7.82 10.58C7.82 10.68 7.84 10.77 7.88 10.86C7.92 10.95 7.97 11.03 8.02 11.1C8.23 11.48 8.53 11.91 8.92 12.39C9.31 12.87 9.74 13.35 10.22 13.84C10.72 14.33 11.2 14.77 11.69 15.17C12.18 15.56 12.6 15.85 12.96 16.05C13.04 16.1 13.12 16.14 13.21 16.17C13.3 16.2 13.39 16.21 13.48 16.21C13.68 16.21 13.84 16.14 13.97 16.01L14.85 15.12C15.15 14.82 15.42 14.6 15.68 14.45C15.94 14.29 16.21 14.21 16.49 14.21C16.7 14.21 16.91 14.24 17.13 14.31C17.35 14.37 17.57 14.48 17.8 14.64L21.38 17.19C21.62 17.36 21.78 17.56 21.87 17.79C21.94 18.01 21.97 18.19 21.97 18.33Z" fill="#1A1C1A" className="group-hover:fill-[#A33B3C] transition-colors" />
                  </svg>
                  <span className="text-sm sm:text-base font-black group-hover:text-[#A33B3C] break-all">
                    +917983957734
                  </span>
                </a>

                {/* 2. Official Colorful Gmail Logo */}
                <a href="mailto:cidcaitpune@gmail.com" className="flex items-center gap-3 group">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4H20Z" fill="#EAEAEA" />
                    <path d="M22 6V18C22 19.1 21.1 20 20 20H18V8.5L12 13L6 8.5V20H4C2.9 20 2 19.1 2 18V6C2 5.2 2.5 4.5 3.2 4.2L12 11L20.8 4.2C21.5 4.5 22 5.2 22 6Z" fill="#EA4335" />
                    <path d="M2 6V7C2 5.9 2.9 5 4 5H20C21.1 5 22 5.9 22 7V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6Z" fill="#4285F4" />
                    <path d="M18 20H20C21.1 20 22 19.1 22 18V17H18V20Z" fill="#34A853" />
                    <path d="M4 20H2C0.9 20 0 19.1 0 18V17H4V20Z" fill="#FBBC05" />
                  </svg>
                  <span className="text-sm sm:text-base font-black group-hover:text-[#A33B3C] break-all">
                    cidcaitpune@gmail.com
                  </span>
                </a>

                {/* 3. Official Blue Outlook Logo */}
                <a href="mailto:cidc@aitpune.edu.in" className="flex items-center gap-3 group">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 1H6.5C5.67 1 5 1.67 5 2.5V6.5H1.5C0.67 6.5 0 7.17 0 8V16C0 16.83 0.67 17.5 1.5 17.5H5V21.5C5 22.33 5.67 23 6.5 23H21.5C22.33 23 23 22.33 23 21.5V2.5C23 1.67 22.33 1 21.5 1Z" fill="#0078D4" />
                    <path d="M21.5 1H6.5C5.67 1 5 1.67 5 2.5V6.5H1.5C0.67 6.5 0 7.17 0 8V16C0 16.83 0.67 17.5 1.5 17.5H5V21.5C5 22.33 5.67 23 6.5 23H21.5C22.33 23 23 22.33 23 21.5V2.5C23 1.67 22.33 1 21.5 1Z" fill="#0078D4" />
                    <path d="M5 6.5L13.5 2.5V6.5H5Z" fill="#28A8EA" />
                    <path d="M23 2.5V12L13.5 16.5V6.5L23 2.5Z" fill="#1460AA" />
                    <path d="M13.5 16.5L23 12V21.5L13.5 16.5Z" fill="#004B87" />
                    <path d="M5 17.5L13.5 21.5V16.5H5Z" fill="#3B8CCB" />
                    <path d="M1.5 6.5H8.5V17.5H1.5C0.67 17.5 0 16.83 0 16V8C0 7.17 0.67 6.5 1.5 6.5Z" fill="#005A9E" />
                    <path d="M3 9H7V10.5H3V9ZM3 12H7V13.5H3V12Z" fill="white" />
                  </svg>
                  <span className="text-sm sm:text-base font-black group-hover:text-[#A33B3C] break-all">
                    cidc@aitpune.edu.in
                  </span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  marginBottom: "0px",
                }}
              >
                Connect
              </h3>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#A33B3C",
                  marginBottom: "24px",
                  borderRadius: "1px"
                }}
              ></div>

              <div className="flex items-center gap-5">
                {[
                  {
                    Icon: FaInstagram,
                    href: "https://www.instagram.com/cidc.ait/",
                    colorClass: "text-[#E1306C]",
                  },
                  {
                    Icon: FaLinkedin,
                    href: "https://www.linkedin.com/search/results/all/?keywords=AIT%20College%20Innovation%20and%20Development%20Club&origin=RICH_QUERY_SUGGESTION&heroEntityKey=urn%3Ali%3Aorganization%3A116164080&position=0",
                    colorClass: "text-[#0A66C2]",
                  },
                  { 
                    Icon: FaGithub, 
                    href: "https://github.com/Smart-AIT",
                    colorClass: "text-[#181717]"
                  },
                  {
                    Icon: FaMapMarkerAlt,
                    href: "https://maps.google.com/?q=Army+Institute+of+Technology+Pune",
                    colorClass: "text-[#EA4335]",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${item.colorClass} transition-transform hover:scale-110`}
                  >
                    <item.Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider & Branded Dynamic Big Text */}
          <div
            style={{
              borderTop: "1px solid rgba(26, 28, 26, 0.12)",
              paddingTop: "1px",
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <style>{`
              @keyframes gradient-flow {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              /* Perfect watermark blend - signature green background tint */
              .ait-cidc-container h4 {
                background: linear-gradient(90deg, #D4D4D4, #707070, #707070, #D4D4D4);
                background-size: 200% 200%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: gradient-flow 4s ease-in-out infinite;
              }
              .ait-cidc-container:hover h4, .ait-cidc-container:active h4 {
                animation: gradient-flow 1.5s ease-in-out infinite;
              }
            `}</style>
            <div className="ait-cidc-container">
              <h4
                style={{
                  fontSize: "clamp(3rem, 20vw, 12rem)",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  color: '#D4D4D4',
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "all 0.6s ease",
                }}
              >
                {displayedText}
                {displayedText.length < fullText.length && (
                  <span className="animate-pulse ">|</span>
                )}
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}