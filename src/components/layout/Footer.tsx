"use client";

import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaMicrosoft,
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
      if (phase === 0) { // Typing phase
        currentIndex++;
        if (currentIndex > fullText.length) {
          phase = 1; // Switch to wrap-up phase
          currentIndex = fullText.length;
        } else {
          setDisplayedText(fullText.substring(0, currentIndex));
        }
      } else if (phase === 1) { // Wrap-up phase
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
    <footer
      id="footer"
      className="w-full bg-[#FAF9F6] border-t-2 border-[#1A1C1A] mt-24 flex justify-center"
    >
      <div className="w-[98%] max-w-[1400px] px-6 sm:px-10 lg:px-12 py-20">
        {/* Header Section */}
        <div style={{ marginBottom: "35px", marginTop: "40px" }}>
          <div style={{ display: "inline-block", backgroundColor: "#A33B3C", color: "white", padding: "5px 8px", marginBottom: "24px" }}>
            <span style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: "900", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              SYSTEM_ACCESS: EXTERNAL_COMMUNICATION
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "900", textTransform: "uppercase", lineHeight: "0.9", letterSpacing: "-0.02em" }}>
              INITIATE
              <br />
              <span style={{ color: "#006565" }}>CONNECTION_</span>
            </h2>

            {/* <p className="text-sm sm:text-base font-medium leading-relaxed text-[#1A1C1A] max-w-md">
              Our technical node is open for collaboration, inquiries, and glitch
              reporting. Choose your preferred channel to interface with the collective.
            </p> */}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mb-20">
          
          {/* Address */}
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "900", textTransform: "uppercase", marginBottom: "0px" }}>Address</h3>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#A33B3C", marginBottom: "24px" }}></div>

            <p className="text-lg font-semibold leading-relaxed mb-5">
              411015,
              <br />
              Alandi Road, Dighi
              <br />
              Army Institute of Technology
            </p>

            {/* <a
              href="https://maps.google.com/?q=Army+Institute+of+Technology+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black text-[#006565] hover:text-[#A33B3C] uppercase tracking-[0.1em]"
            >
              <FaMapMarkerAlt className="w-4 h-4" />
              View Direction
            </a> */}
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "900", textTransform: "uppercase", marginBottom: "0px" }}>Contact</h3>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#A33B3C", marginBottom: "24px" }}></div>

            <div className="flex flex-col gap-3">
              {[
                { icon: FaPhone, text: "+917983957734", href: "tel:+917983957734" },
                { icon: FaEnvelope, text: "cidcaitpune@gmail.com", href: "mailto:cidcaitpune@gmail.com" },
                { icon: FaMicrosoft, text: "cidc@aitpune.edu.in", href: "mailto:cidc@aitpune.edu.in" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 group"
                >
                  <item.icon className="w-5 h-5 text-[#1A1C1A] group-hover:text-[#A33B3C]" />
                  <span className="text-base font-black group-hover:text-[#A33B3C] break-all">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "900", textTransform: "uppercase", marginBottom: "0px" }}>Quick</h3>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#A33B3C", marginBottom: "24px" }}></div>

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

          {/* Social */}
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "900", textTransform: "uppercase", marginBottom: "0px" }}>
              Connect
            </h3>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#A33B3C", marginBottom: "24px" }}></div>

            <div className="flex items-center gap-5">
              {[
                { Icon: FaInstagram, href: "#" },
                { Icon: FaLinkedin, href: "#" },
                { Icon: FaGithub, href: "https://github.com/Smart-AIT" },
                { Icon: FaMapMarkerAlt, href: "https://maps.google.com/?q=Army+Institute+of+Technology+Pune" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1C1A] hover:text-[#A33B3C] transition-transform hover:scale-110"
                >
                  <item.Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "2px solid #1A1C1A", paddingTop: "1px", marginTop: "25px", display: "flex", justifyContent: "center" }}>
          <style>{`
            @keyframes gradient-flow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .ait-cidc-container:hover h4 {
              background: linear-gradient(90deg, #D4D4D4, #707070, #707070, #D4D4D4);
              background-size: 200% 200%;
              animation: gradient-flow 2s ease-in-out infinite;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>
          <div className="ait-cidc-container">
            <h4 style={{ 
              fontSize: "clamp(4rem, 25vw, 12rem)", 
              fontWeight: "900", 
              textTransform: "uppercase", 
              letterSpacing: "0.05em", 
              color: "#D4D4D4", 
              cursor: "pointer", 
              transition: "all 0.6s ease"
            }}>
              {displayedText}
              {displayedText.length < fullText.length && <span className="animate-pulse">|</span>}
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
