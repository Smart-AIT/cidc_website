"use client";
import { useState, useRef } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Contact Us", href: "#footer" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    e.preventDefault();
    setActiveLink(label);
    
    const sectionId = href.replace("#", "");
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
        .nav-tab-container {
          background-color: #f5f5f0;
          position: relative;
          overflow: visible;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 0;
          padding-bottom: 0;
          margin-top: 0;
          margin-bottom: 0;
          width: 100%;
        }
        .black-nav-pill {
          background-color: #000000;
          height: 65px;
          display: flex;
          align-items: center;
          padding-left: 100px;
          padding-right: 120px;
          border-bottom-left-radius: 80px;
          border-bottom-right-radius: 80px;
          gap: 40px;
          margin-top: 0px;
        }
        .nav-link {
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: white;
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s ease;
          white-space: nowrap;
          cursor: pointer;
          border: none;
          background: none;
          padding: 0;
        }
        .nav-link:hover {
          color: #d1d1d1;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 40px;
        }
        li {
          margin: 0;
          padding: 0;
        }
      `}</style>

      <header className="nav-entry z-50" style={{ width: "100%", margin: 0, padding: 0 }} data-purpose="navigation-header">
        <div className="nav-tab-container">
          <nav className="black-nav-pill" data-purpose="primary-links-container">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "40px" }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.label, link.href)}
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
