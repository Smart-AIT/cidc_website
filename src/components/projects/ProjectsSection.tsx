import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const PROJECT_LIST = [
  { name: "CAMPUS NAV APP", desc: "Spatial orientation for chaotic environments. Real-time pathfinding utilizing sub-grid mapping and decentralized node validation." },
  { name: "ALGO-TRADING BOT", desc: "High-frequency execution engine. Optimized for low-latency market manipulation detection and arbitrage identification." },
  { name: "DIGITAL LEAVE & OUTPASS", desc: "Streamlining digital approvals for hostel leaves with robust QR tracking and multi-tier verification protocols." },
  { name: "FEEDBACK & GRIEVANCE", desc: "Anonymous reporting platform for logging campus issues and resolution tracking using encrypted channels." },
  { name: "LOST & FOUND MANAGEMENT", desc: "Centralized campus repository for quickly logging found and missing items via crowdsourced tagging." },
  { name: "LAUNDRY MANAGEMENT", desc: "Digital tracking for student laundry cycles, pickups, and capacity limits integrated with smart IoT machines." }
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ width: "100%", paddingTop: "60px", paddingBottom: "120px", paddingLeft: "40px", paddingRight: "40px", borderTop: "2px solid #1A1C1A", backgroundColor: "#faf9f6" }}>
      <div style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}>
        {/* Header */}
        <header style={{ marginBottom: "80px" }}>
          <div style={{ width: "80px", height: "4px", backgroundColor: "#A33B3C", marginBottom: "32px" }} />
          <h2 style={{ fontSize: "clamp(2.5rem, 12vw, 5.5rem)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: "0.85", marginBottom: "32px", color: "#1A1C1A" }}>
            ACTIVE<br />MANIFESTO<br />
            <span style={{ color: "#006565" }}>PROJECTS</span>
          </h2>
          <p style={{ fontSize: "14px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em", color: "#1A1C1A", maxWidth: "600px", lineHeight: "1.8" }}>
            A COLLECTION OF REAL-WORLD PROJECTS BUILT BY CIDC COMMUNITY. FOCUSED ON LEARNING, BUILDING, AND DELIVERING IMPACTFUL SOLUTIONS.
            <br />
            <span style={{ marginTop: "16px", display: "block" }}>System version 0.4</span>
          </p>
        </header>

        {/* Scroll Stack */}
        <div style={{ marginTop: "80px" }}>
          <ScrollStack gap={500}>
            {PROJECT_LIST.map((proj, i) => (
              <ScrollStackItem key={i}>
                {/* Title and description on top */}
                <div className="scroll-stack-card-title">{proj.name}</div>
                <div className="scroll-stack-card-divider" />
                <div className="scroll-stack-card-desc">{proj.desc}</div>

                {/* Full-width image block below */}
                <div className="scroll-stack-card-image" style={{ marginTop: "40px", marginBottom: "0" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "14px", color: "rgba(26,28,26,0.25)", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "0.15em" }}>PROJECT_IMAGE_{String(i + 1).padStart(2, "0")}</span>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

      </div>
    </section>
  );
}
