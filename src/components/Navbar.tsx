"use client";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "OUR TEAM", href: "#team" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT US", href: "#about" },
  { label: "EVENTS", href: "#events" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("HOME");

  return (
    <div
      className="w-full flex justify-center"
      style={{ marginTop: "20px", marginBottom: "17px" }}
    >
      <nav
        style={{
          paddingTop: "25px",
          paddingBottom: "25px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
        className="w-[95%] max-w-7xl bg-[#F5F4F1] border-[3px] border-black shadow-[6px_6px_0px_black] flex justify-between items-center"
      >
        {/* Logo */}
        <div className="text-xl font-extrabold tracking-[0.02em] text-black">
          COLLEGE INNOVATION & DEVELOPMENT CLUB
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex gap-10 xl:gap-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`relative text-[12px] font-bold tracking-[0.05em] transition duration-200 ${
                activeLink === link.label
                  ? "text-[#2F8F8F]"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {link.label}

              {/* Active underline */}
              {activeLink === link.label && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#A33B3C]"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile button (leave it simple for now) */}
        <button className="lg:hidden border-2 border-black px-2 py-1">
          ☰
        </button>
      </nav>
    </div>
  );
}
