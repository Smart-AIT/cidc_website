// About section: Vision card with compass icon
export default function AboutVision() {
  return (
    <section style={{ gridColumn: "span 7", padding: "48px", position: "relative", overflow: "hidden", backgroundColor: "#faf9f6", border: "2px solid #1A1C1A" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
        <div>
          <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#1A1C1A", marginBottom: "16px", display: "block", fontFamily: "monospace" }}>
            CORE_VISION
          </span>
          <h2 style={{ fontSize: "44px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.01em", color: "#1A1C1A" }}>
            The Approach
          </h2>
        </div>
        <div style={{ width: "48px", height: "48px", backgroundColor: "#006565", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
          <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>explore</span>
        </div>
      </div>

      <div style={{ width: "120px", height: "3px", backgroundColor: "#A33B3C", marginBottom: "32px" }}></div>

      <p style={{ fontSize: "24px", fontWeight: "bold", lineHeight: "1.3", marginBottom: "32px", color: "#1A1C1A" }}>
        First-year students are directly involved in{" "}
        <strong>live, innovative projects</strong> that address real
        institutional needs.
        <br />
        Every project is guided by experienced Third Year (TE) and Final Year (BE) 
        students, ensuring structured mentorship and strong peer learning.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontFamily: "monospace", fontSize: "11px", fontWeight: "bold", color: "#1A1C1A", opacity: "0.6", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        <p style={{ margin: "0" }}>~This creates a system where:</p>
        <p style={{ margin: "0" }}>&gt;&gt;Beginners learn by doing</p>
        <p style={{ margin: "0" }}>&gt;&gt;Seniors lead by building</p>
        <p style={{ margin: "0" }}>&gt;&gt;Teams deliver real outcomes</p>
      </div>
    </section>
  );
}
