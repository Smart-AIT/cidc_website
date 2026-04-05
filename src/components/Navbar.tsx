"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "TEAM", href: "#team" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "EVENTS", href: "#events" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("HOME");
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const lastProgressRef = useRef(0);

  // Scroll-triggered navbar width animation and logo text change
  useGSAP(() => {
    /* Temporarily disabled navbar compression logic per user request
    const startPoint = window.innerHeight * 0.4;
    const endPoint = window.innerHeight * 0.55;

    gsap.to(navRef.current, {
      maxWidth: "900px",
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: `${startPoint}px top`,
        end: `${endPoint}px top`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const wasCompressed = lastProgressRef.current > 0.5;
          const isNowCompressed = progress > 0.5;

          // Trigger state change only when crossing the 0.5 threshold
          if (wasCompressed !== isNowCompressed) {
            if (isNowCompressed) {
              // Switching to compressed - animate to CIDC
              gsap.to(logoRef.current, {
                text: "CIDC",
                duration: 0.6,
                ease: "power1.inOut",
              });
            } else {
              // Switching to expanded - animate to full text
              gsap.to(logoRef.current, {
                text: "COLLEGE INNOVATION & DEVELOPMENT CLUB",
                duration: 0.6,
                ease: "power1.inOut",
              });
            }
          }

          lastProgressRef.current = progress;
        },
      },
    });
    */
  });



  return (
    <>
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .nav-entry {
          animation: slideDown 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          will-change: transform, opacity;
        }
      `}</style>
      
      <div
        className="relative top-1.5 left-0 right-0 w-full flex justify-center nav-entry z-50"
        style={{ marginTop: "20px", marginBottom: "5px"}}
      >
        <nav
          ref={navRef}
          style={{
            paddingTop: "17px",
            paddingBottom: "17px",
            paddingLeft: "30px",
            paddingRight: "30px",
            borderRadius: "0px",
          }}
          className="w-[98%] max-w-[1400px] bg-[#F5F4F1] border-[3px] border-black shadow-[6px_6px_0px_black] flex justify-between items-center transition-all duration-300 gap-4"
        >
        {/* Logo */}
        <div className="text-xl font-extrabold tracking-[0.02em] text-black flex-shrink-0 overflow-hidden whitespace-nowrap min-w-[50px]">
          <span ref={logoRef}>
            COLLEGE INNOVATION & DEVELOPMENT CLUB
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex gap-4 xl:gap-6 items-center flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`relative text-[11px] font-bold tracking-[0.05em] transition duration-200 whitespace-nowrap ${
                activeLink === link.label
                  ? "text-[#2F8F8F]"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {link.label}

              {/* Active underline */}
              {activeLink === link.label && (
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-[#A33B3C]"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile button (leave it simple for now) */}
        <button className="lg:hidden border-2 border-black px-2 py-1 flex-shrink-0">
          ☰
        </button>
      </nav>
      </div>
    </>
  );
}
