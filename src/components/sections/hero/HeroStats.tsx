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
    <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "40px", marginBottom: "0px" }}>
      <div style={{ width: "98%", maxWidth: "1400px", border: "2px solid #1A1C1A", boxShadow: "8px 8px 0px 0px #1A1C1A", backgroundColor: "white", position: "relative", borderRadius: "4px", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: "2px solid #1A1C1A" }}>
            {/* Stat 1 */}
            <div style={{ padding: "50px 40px", borderRight: "2px solid #1A1C1A" }}>
              <h3 style={{ fontWeight: "900", fontSize: "54px", marginBottom: "12px", lineHeight: "1", color: "#1A1C1A" }}>
                24/7<span style={{ color: "#A33B3C", fontSize: "24px", marginLeft: "8px" }}>UP</span>
              </h3>
              <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "bold", color: "#1A1C1A", opacity: "0.5", marginTop: "8px" }}>
                Innovation Lab
              </p>
            </div>
            {/* Stat 2 */}
            <div style={{ padding: "50px 40px", borderRight: "2px solid #1A1C1A" }}>
              <h3 style={{ fontWeight: "900", fontSize: "54px", marginBottom: "12px", lineHeight: "1", color: "#1A1C1A" }}>
                02<span style={{ color: "#006565", fontSize: "54px", marginLeft: "8px" }}>+</span>
              </h3>
              <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "bold", color: "#1A1C1A", opacity: "0.5", marginTop: "8px" }}>
                Active Projects
              </p>
            </div>
            {/* Stat 3 */}
            <div style={{ padding: "50px 40px" }}>
              <h3 style={{ fontWeight: "900", fontSize: "54px", marginBottom: "12px", lineHeight: "1", color: "#1A1C1A" }}>
                <span style={{ color: "#1A1C1A" }}>012</span>
                <span style={{ color: "#A33B3C", fontSize: "24px", marginLeft: "8px" }}>BUILDERS</span>
              </h3>
              <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "bold", color: "#1A1C1A", opacity: "0.5", marginTop: "8px" }}>
                Community
              </p>
            </div>
          </div>

          {/* Terminal Strip */}
          <div style={{ padding: "50px 40px", borderTop: "2px dashed #1A1C1A", backgroundColor: "#faf9f6" }}>
            <div style={{ fontFamily: "monospace", fontSize: "12px", color: "#1A1C1A", opacity: "0.7", lineHeight: "1.6" }}>
              <p style={{ margin: "0 0 12px 0" }}>
                {displayedLine1}
                {displayedLine1.length < fullLine1.length && <span className="animate-pulse">|</span>}
              </p>
              <p style={{ margin: "0 0 12px 0" }}>
                {displayedLine2}
                {displayedLine2.length < fullLine2.length && <span className="animate-pulse">|</span>}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2px", paddingTop: "12px" }}>
                <p style={{ margin: "0" }}>&gt;&gt; cidc --version</p>
                <p style={{ margin: "0", fontWeight: "900", color: "#1A1C1A" }}>CIDC_v4.0 | Building Developers, Not Just Coders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
