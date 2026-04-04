"use client";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 bg-[#FAF9F6] border-2 border-[#1A1C1A] mx-2 sm:mx-4 mt-2 sm:mt-4 flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)]"
    >
      {/* Logo */}
      <div className="text-sm sm:text-xl font-black tracking-tight text-[#1A1C1A] uppercase leading-none">
        College Innovation<br />
        <span className="text-[#006565]">&amp; Development Club</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setActiveLink(link.label)}
            className={`uppercase tracking-[0.05em] text-xs transition-transform duration-75 hover:-translate-x-1 hover:-translate-y-1 ${
              activeLink === link.label
                ? "text-[#006565] border-b-2 border-[#A33B3C]"
                : "text-[#1A1C1A]"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 border-2 border-[#1A1C1A]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        type="button"
      >
        <span className="material-symbols-outlined">
          {menuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FAF9F6] border-2 border-[#1A1C1A] border-t-0 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] flex flex-col lg:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMenuOpen(false);
              }}
              className={`px-6 sm:px-8 py-4 uppercase tracking-[0.05em] text-xs border-b border-[#1A1C1A]/20 transition-colors hover:bg-[#efeeeb] ${
                activeLink === link.label
                  ? "text-[#006565] font-bold"
                  : "text-[#1A1C1A]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
