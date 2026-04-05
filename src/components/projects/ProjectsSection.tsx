import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ width: "100%", paddingTop: "60px", paddingBottom: "60px", paddingLeft: "40px", paddingRight: "40px", borderTop: "2px solid #1A1C1A", backgroundColor: "#faf9f6" }}>
      <div style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}>
        {/* Header */}
        <header style={{ marginBottom: "80px" }}>
          <div style={{ width: "80px", height: "4px", backgroundColor: "#A33B3C", marginBottom: "32px" }} />
          <h2 style={{ fontSize: "clamp(2.5rem, 12vw, 5.5rem)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: "0.85", marginBottom: "32px", color: "#1A1C1A" }}>
            ACTIVE<br />MANIFESTO<br />
            <span style={{ color: "#006565" }}>PROJECTS</span>
          </h2>
          <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.2em", color: "#1A1C1A", opacity: "0.4", maxWidth: "500px", lineHeight: "1.8" }}>
            A COLLECTION OF REAL-WORLD PROJECTS BUILT BY CIDC COMMUNITY. FOCUSED ON LEARNING, BUILDING, AND DELIVERING IMPACTFUL SOLUTIONS.
            <br />
            <span style={{ marginTop: "16px", display: "block" }}>System version 0.4</span>
          </p>
        </header>

        {/* Project Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          {/* Project 1: Campus Nav App */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <article style={{ position: "relative", backgroundColor: "#faf9f6", border: "2px solid #1A1C1A", transition: "transform 0.2s ease" }}>
              <div style={{ position: "absolute", top: "16px", right: "16px", fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "#A33B3C", fontWeight: "bold", zIndex: "10" }}>
                REF_001_NAV
              </div>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderBottom: "2px solid #1A1C1A", backgroundColor: "#e0e0e0" }}>
                <Image
                  src="/screen.png"
                  alt="CAMPUS NAV APP"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.25)" }}
                />
              </div>
              <div style={{ padding: "32px" }}>
                <h3 style={{ fontSize: "28px", fontWeight: "900", textTransform: "uppercase", marginBottom: "16px", lineHeight: "1", color: "#1A1C1A" }}>
                  CAMPUS NAV APP
                </h3>
                <div style={{ width: "80px", height: "2px", backgroundColor: "#1A1C1A", marginBottom: "16px" }}></div>
                <p style={{ fontSize: "14px", color: "#1A1C1A", opacity: "0.7", marginBottom: "24px", lineHeight: "1.6", fontWeight: "500" }}>
                  Spatial orientation for chaotic environments. Real-time pathfinding utilizing sub-grid mapping and decentralized node validation.
                </p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "900", color: "#1A1C1A", textDecoration: "none", transition: "color 0.2s ease" }}>
                  INITIALIZE PROTOCOL{" "}
                  <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_right_alt</span>
                </a>
              </div>
            </article>
          </div>

          {/* Project 2: Algo-Trading Bot */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "120px" }}>
            <article style={{ position: "relative", backgroundColor: "#e9e8e5", border: "2px solid #1A1C1A", transition: "transform 0.2s ease" }}>
              <div style={{ position: "absolute", top: "16px", right: "16px", fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1A1C1A", opacity: "0.4", fontWeight: "bold", zIndex: "10" }}>
                REF_002_FIN
              </div>
              <div style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden", backgroundColor: "#d0d0d0" }}>
                <img
                  src="https://images.unsplash.com/photo-1533241749-bc0146e1f1c9?w=800&h=600&fit=crop"
                  alt="ALGO-TRADING BOT"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.9)", mixBlendMode: "multiply" }}
                />
              </div>
              <div style={{ padding: "32px", backgroundColor: "white", borderTop: "2px solid #1A1C1A" }}>
                <h3 style={{ fontSize: "28px", fontWeight: "900", textTransform: "uppercase", marginBottom: "12px", lineHeight: "1", color: "#1A1C1A" }}>
                  ALGO-TRADING BOT
                </h3>
                <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "#A33B3C", marginBottom: "16px", fontWeight: "bold" }}>
                  STATUS: AUTONOMOUS // ACTIVE
                </p>
                <p style={{ fontSize: "14px", color: "#1A1C1A", opacity: "0.7", marginBottom: "24px", lineHeight: "1.6", fontWeight: "500" }}>
                  High-frequency execution engine. Optimized for low-latency market manipulation detection and arbitrage identification.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#1A1C1A", opacity: "0.4", fontFamily: "monospace", fontSize: "9px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  <span>LATENCY: 0.002ms</span>
                  <span style={{ padding: "8px", border: "1px solid #1A1C1A" }}>REF_002_BOT</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
