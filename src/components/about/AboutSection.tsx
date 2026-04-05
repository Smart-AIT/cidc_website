import AboutVision from "./AboutVision";

export default function AboutSection() {
  return (
    <section style={{ width: "100%", paddingLeft: "40px", paddingRight: "40px", paddingTop: "60px", paddingBottom: "60px", borderTop: "2px solid #1A1C1A", backgroundColor: "#faf9f6" }}>
      {/* Hero Header */}
      <header style={{ marginBottom: "80px", position: "relative", maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontSize: "clamp(2.5rem, 12vw, 5.5rem)", fontWeight: "900", lineHeight: "0.8", letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: "32px", position: "relative", zIndex: "10", color: "#1A1C1A" }}>
          WANT TO<br />KNOW ABOUT US ?
        </h2>
        <div style={{ width: "120px", height: "3px", backgroundColor: "#A33B3C", marginBottom: "32px" }}></div>
        <p style={{ maxWidth: "900px", fontSize: "14px", fontWeight: "500", lineHeight: "1.7", color: "#1A1C1A", marginBottom: "16px" }}>
          CIDC is a student-driven development community focused on building
          real-world systems for the college ecosystem.
          <br />
          We follow a project-based learning approach where students don&apos;t just
          learn — they <strong>build, deploy, and solve actual problems</strong>{" "}
          within the institute.
        </p>
        <p style={{ maxWidth: "900px", fontSize: "14px", fontWeight: "500", lineHeight: "1.7", color: "#1A1C1A", opacity: "0.6" }}>
          From day one, members are exposed to practical development workflows,
          collaborative environments, and production-level thinking.
        </p>
      </header>

      {/* Bento Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "0", border: "2px solid #1A1C1A", marginBottom: "48px" }}>
        <AboutVision />

        {/* Right Column */}
        <div style={{ gridColumn: "span 5", display: "flex", flexDirection: "column", borderLeft: "2px solid #1A1C1A" }}>
          {/* Circuit board image */}
          <div style={{ aspectRatio: "1", position: "relative", filter: "grayscale(1)", borderBottom: "2px solid #1A1C1A", backgroundColor: "#d0d0d0" }}>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop"
              alt="Visionary Tech"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", bottom: "16px", left: "16px", backgroundColor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(4px)", color: "#1A1C1A", padding: "6px 8px", fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", border: "1px solid #1A1C1A" }}>
              IMAGE_SOURCE_404
            </div>
          </div>

          {/* System Architecture card */}
          <div style={{ backgroundColor: "#006565", padding: "32px", color: "white", flex: "1", display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "900", textTransform: "uppercase", marginBottom: "24px", letterSpacing: "0.08em" }}>CORE</h3>
            <ul style={{ fontFamily: "monospace", fontSize: "10px", display: "flex", flexDirection: "column", gap: "12px", fontWeight: "bold", letterSpacing: "0.08em", textTransform: "uppercase", opacity: "0.8", listStyle: "none", padding: "0", margin: "0" }}>
              <li>&gt; PROJECT_PIPELINE: ACTIVE</li>
              <li>&gt; STUDENT_MODULE_RESERVED</li>
              <li>&gt; MENTORSHIP_LAYER: ENABLED</li>
              <li>&gt; STATUS: STABLE</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mission Statement — Full width */}
      <div style={{ marginTop: "48px", border: "2px solid #1A1C1A", backgroundColor: "#FAF9F6", padding: "64px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span className="material-symbols-outlined" style={{ fontSize: "clamp(8rem, 20vw, 10rem)", color: "#1A1C1A" }}>
            settings
          </span>
        </div>

        <div style={{ width: "100%" }}>
          <span style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#A33B3C", marginBottom: "16px", display: "block", fontWeight: "bold" }}>
            OPERATIONAL_MISSION
          </span>
          <h2 style={{ fontSize: "44px", fontWeight: "900", textTransform: "uppercase", marginBottom: "32px", lineHeight: "1", color: "#1A1C1A" }}>
            CIDC Precision
          </h2>
          <p style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.8", marginBottom: "32px", color: "#1A1C1A" }}>
            focuses on execution<br />
            builds production systems<br />
            delivers working solutions<br />
            <span style={{ marginTop: "16px", display: "block", color: "#1A1C1A", opacity: "0.6", fontWeight: "500" }}>
              It is not just a club—it&apos;s a development ecosystem contributing
              directly to the college&apos;s digital growth.
            </span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", paddingTop: "32px", borderTop: "1px solid rgba(26, 28, 26, 0.1)" }}>
            <div>
              <p style={{ fontFamily: "monospace", fontSize: "10px", textTransform: "uppercase", fontWeight: "900", marginBottom: "8px", color: "#1A1C1A" }}>01. INTENTIONALITY</p>
              <p style={{ fontSize: "12px", color: "#1A1C1A", opacity: "0.6", fontWeight: "500" }}>Every pixel on our grid serves a structural purpose. We reject decorative fluff.</p>
            </div>
            <div>
              <p style={{ fontFamily: "monospace", fontSize: "10px", textTransform: "uppercase", fontWeight: "900", marginBottom: "8px", color: "#1A1C1A" }}>02. PERSISTENCE</p>
              <p style={{ fontSize: "12px", color: "#1A1C1A", opacity: "0.6", fontWeight: "500" }}>Designing for longevity through heavy weights and high-contrast accessibility.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Section Footer */}
      <div style={{ marginTop: "96px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "48px", alignItems: "flex-end" }}>
        <div>
          <h3 style={{ fontSize: "28px", fontWeight: "900", textTransform: "uppercase", marginBottom: "16px", letterSpacing: "-0.01em", color: "#1A1C1A" }}>UPCOMING PROJECTS</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "48px", rowGap: "8px", fontFamily: "monospace", fontSize: "9px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1A1C1A", opacity: "0.5" }}>
            <p style={{ margin: "0" }}>Digital Leave & Outpass System</p>
            <p style={{ margin: "0" }}>Feedback & Grievance System</p>
            <p style={{ margin: "0" }}>Lost & Found Management</p>
            <p style={{ margin: "0" }}>Hostel Room Management</p>
            <p style={{ margin: "0" }}>Student Idea & Innovation Portal</p>
            <p style={{ margin: "0" }}>Laundry Management System</p>
          </div>
          <button style={{ marginTop: "32px", backgroundColor: "#006565", color: "white", padding: "12px 32px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "12px", border: "2px solid #1A1C1A", cursor: "pointer" }}>
            WANT TO CONTRIBUTE ? CLICK
          </button>
        </div>
        <div style={{ border: "2px solid #1A1C1A", padding: "16px", backgroundColor: "#f4f3f1", minWidth: "250px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "9px", display: "flex", flexDirection: "column", gap: "8px", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "0.08em", color: "#1A1C1A" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>Latest_Log_v04</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>&gt; CIDC_CODE: INITIALIZED</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>&gt; PROJECT_PIPELINE: ACTIVE</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>&gt; TEAM_MODULE_CONNECTED</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>&gt; SYSTEM_STATUS: RUNNING</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
