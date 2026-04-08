// Hero Bento Stats Strip
import { useState, useEffect } from "react";

export default function HeroStats() {
  const [displayedLine1, setDisplayedLine1] = useState("");
  const [displayedLine2, setDisplayedLine2] = useState("");
  
  const fullLine1 = '>> cat mission.txt "Learn. Build. Ship. Repeat..." [CONSTANT]';
  const fullLine2 = ">> establishing dev community... [ACTIVE]";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > fullLine1.length) {
        currentIndex = 0;
      }
      setDisplayedLine1(fullLine1.substring(0, currentIndex));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > fullLine2.length) {
        currentIndex = 0;
      }
      setDisplayedLine2(fullLine2.substring(0, currentIndex));
    }, 250);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <style>{`
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 2px solid #1A1C1A;
        }
        .hero-stat-cell {
          padding: 50px 40px;
        }
        .hero-stat-number {
          font-weight: 900;
          font-size: 54px;
          margin-bottom: 12px;
          line-height: 1;
          color: #1A1C1A;
        }
        .hero-stat-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: bold;
          color: #1A1C1A;
          opacity: 0.5;
          margin-top: 8px;
        }
        .hero-terminal-strip {
          padding: 50px 40px;
        }
        .hero-terminal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2px;
          padding-top: 12px;
        }
        @media (max-width: 768px) {
          .hero-stats-grid {
            grid-template-columns: 1fr;
          }
          .hero-stat-cell {
            padding: 28px 24px;
            border-bottom: 1px solid rgba(26, 28, 26, 0.15);
          }
          .hero-stat-cell:last-child {
            border-bottom: none;
          }
          .hero-stat-cell-border-r {
            border-right: none !important;
          }
          .hero-stat-number {
            font-size: 36px;
          }
          .hero-terminal-strip {
            padding: 28px 24px;
          }
          .hero-terminal-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-stat-cell {
            padding: 36px 28px;
          }
          .hero-stat-number {
            font-size: 40px;
          }
          .hero-terminal-strip {
            padding: 36px 28px;
          }
        }
      `}</style>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "40px", marginBottom: "0px" }}>
        <div style={{ width: "98%", maxWidth: "1400px", border: "2px solid #1A1C1A", boxShadow: "8px 8px 0px 0px #1A1C1A", backgroundColor: "white", position: "relative", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Stats Grid */}
            <div className="hero-stats-grid">
              {/* Stat 1 */}
              <div className="hero-stat-cell hero-stat-cell-border-r" style={{ borderRight: "2px solid #1A1C1A" }}>
                <h3 className="hero-stat-number">
                  24/7<span style={{ color: "#A33B3C", fontSize: "clamp(16px, 2.5vw, 24px)", marginLeft: "8px" }}>UP</span>
                </h3>
                <p className="hero-stat-label">
                  Innovation Lab
                </p>
              </div>
              {/* Stat 2 */}
              <div className="hero-stat-cell hero-stat-cell-border-r" style={{ borderRight: "2px solid #1A1C1A" }}>
                <h3 className="hero-stat-number">
                  02<span style={{ color: "#006565", fontSize: "clamp(36px, 4vw, 54px)", marginLeft: "8px" }}>+</span>
                </h3>
                <p className="hero-stat-label">
                  Active Projects
                </p>
              </div>
              {/* Stat 3 */}
              <div className="hero-stat-cell">
                <h3 className="hero-stat-number">
                  <span style={{ color: "#1A1C1A" }}>012</span>
                  <span style={{ color: "#A33B3C", fontSize: "clamp(16px, 2.5vw, 24px)", marginLeft: "8px" }}>BUILDERS</span>
                </h3>
                <p className="hero-stat-label">
                  Community
                </p>
              </div>
            </div>

            {/* Terminal Strip */}
            <div className="hero-terminal-strip" style={{ borderTop: "2px dashed #1A1C1A", backgroundColor: "#faf9f6" }}>
              <div style={{ fontFamily: "monospace", fontSize: "12px", color: "#1A1C1A", opacity: "0.7", lineHeight: "1.6", overflowWrap: "break-word", wordBreak: "break-word" }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  {displayedLine1}
                  {displayedLine1.length < fullLine1.length && <span className="animate-pulse">|</span>}
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  {displayedLine2}
                  {displayedLine2.length < fullLine2.length && <span className="animate-pulse">|</span>}
                </p>
                <div className="hero-terminal-footer">
                  <p style={{ margin: "0" }}>&gt;&gt; cidc --version</p>
                  <p style={{ margin: "0", fontWeight: "900", color: "#1A1C1A" }}>CIDC_v4.0 | Building Developers, Not Just Coders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
