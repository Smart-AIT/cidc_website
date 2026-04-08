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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    e.preventDefault();
    setActiveLink(label);
    setMobileOpen(false);
    
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
        ul.desktop-links {
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

        /* ── Hamburger Button ── */
        .mobile-menu-trigger {
          display: none;
        }
        .nav-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 24px;
          height: 24px;
          background: none;
          border: none;
          padding: 0;
        }
        .nav-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background-color: white;
          transition: all 0.3s ease;
        }
        .nav-hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nav-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .nav-hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ── Mobile Menu Dropdown ── */
        .mobile-nav-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          background-color: #000000;
          border-radius: 32px;
          padding: 24px 40px;
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: transform 0.3s ease, opacity 0.3s ease;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          z-index: 1000;
        }
        .mobile-nav-dropdown.open {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .mobile-nav-dropdown .nav-link {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        .mobile-nav-dropdown .nav-link-item {
          display: none; /* Only show items that are hidden from desktop */
        }

        /* ── Responsive Progressive Disclosure ── */
        @media (max-width: 1100px) {
          .mobile-menu-trigger {
            display: flex;
            align-items: center;
            gap: 16px;
            cursor: pointer;
          }
          .black-nav-pill {
            padding-left: 40px;
            padding-right: 40px;
            gap: 40px;
            justify-content: space-between;
          }
          .desktop-links li:nth-child(n+5) { display: none; }
          .mobile-nav-dropdown .nav-link-item:nth-child(n+5) { display: block; }
          .mobile-nav-dropdown { display: flex; }
        }

        @media (max-width: 950px) {
          .black-nav-pill {
            gap: 30px;
          }
          .desktop-links li:nth-child(n+3) { display: none; }
          .mobile-nav-dropdown .nav-link-item:nth-child(n+3) { display: block; }
        }

        @media (max-width: 768px) {
          .black-nav-pill {
            padding-left: 28px;
            padding-right: 28px;
            gap: 24px;
            height: 60px;
            border-bottom-left-radius: 32px;
            border-bottom-right-radius: 32px;
            justify-content: space-between;
          }
          .black-nav-pill .nav-link {
            font-size: 15px;
          }
          .desktop-links li:nth-child(n+2) { display: none; }
          .mobile-nav-dropdown .nav-link-item:nth-child(n+2) { display: block; }
        }
      `}</style>

      <header className="nav-entry z-50" style={{ width: "100%", margin: 0, padding: 0 }} data-purpose="navigation-header">
        <div className="nav-tab-container">
          <nav className="black-nav-pill" data-purpose="primary-links-container">
            <ul className="desktop-links">
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
            <div className="mobile-menu-trigger" onClick={() => setMobileOpen(!mobileOpen)}>
              <button
                className={`nav-hamburger ${mobileOpen ? "open" : ""}`}
                aria-label="Toggle navigation menu"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </nav>
          
          {/* Mobile dropdown menu */}
          <div className={`mobile-nav-dropdown ${mobileOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.label, link.href)}
                className="nav-link nav-link-item"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
