// About section: Vision card with compass icon
export default function AboutVision() {
  return (
    <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>

      {/* Left: Vision Content */}
      <div style={{ padding: "64px 56px", backgroundColor: "#faf9f6", borderRight: "2px solid #1A1C1A", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ width: "48px", height: "48px", backgroundColor: "#006565", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>explore</span>
          </div>
          <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#006565", fontFamily: "monospace", fontWeight: "700" }}>
            CORE_VISION
          </span>
        </div>

        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#1A1C1A", marginBottom: "24px", lineHeight: "1" }}>
          The Approach
        </h2>

        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #A33B3C, #d4505f)", borderRadius: "2px", marginBottom: "32px" }} />

        <p style={{ fontSize: "18px", fontWeight: "500", lineHeight: "1.7", marginBottom: "40px", color: "#2a2c2a", maxWidth: "520px" }}>
          First-year students are directly involved in{" "}
          <strong style={{ color: "#1A1C1A" }}>live, innovative projects</strong> that address real
          institutional needs.
          <br /><br />
          Every project is guided by experienced TE and BE
          students, ensuring structured mentorship and strong peer learning.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontFamily: "monospace", fontSize: "13px", fontWeight: "600", color: "#1A1C1A", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          <p style={{ margin: "0", color: "#006565" }}>~ This creates a system where:</p>
          <p style={{ margin: "0", paddingLeft: "16px" }}>&gt;&gt; Beginners learn by doing</p>
          <p style={{ margin: "0", paddingLeft: "16px" }}>&gt;&gt; Seniors lead by building</p>
          <p style={{ margin: "0", paddingLeft: "16px" }}>&gt;&gt; Teams deliver real outcomes</p>
        </div>
      </div>

      {/* Right: Image + Core Stats */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Image */}
        <div style={{ flex: "1", position: "relative", overflow: "hidden", minHeight: "320px", backgroundColor: "#d0d0d0" }}>
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
            alt="Visionary Tech"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.6) contrast(1.1)" }}
          />
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, transparent 50%, rgba(26,28,26,0.6) 100%)" }} />
          <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white", fontFamily: "monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600" }}>
            IMAGE_SOURCE_CIDC
          </div>
        </div>

        {/* Core System Stats */}
        {/* <div style={{ backgroundColor: "#006565", padding: "20px 24px", color: "white" }}>
          <h3 style={{ fontSize: "11px", fontWeight: "900", textTransform: "uppercase", marginBottom: "12px", letterSpacing: "0.15em", opacity: "0.7" }}>SYSTEM STATUS</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "monospace", fontSize: "9px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            <div>&gt; PROJECT_PIPELINE: ACTIVE</div>
            <div>&gt; STUDENT_MODULE_RESERVED</div>
            <div>&gt; MENTORSHIP_LAYER: ON</div>
            <div>&gt; STATUS: STABLE</div>
          </div>
        </div> */}
      </div>

    </div>
  );
}
