// Hero Bento Stats Strip
export default function HeroStats() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "40px", marginBottom: "0px" }}>
      <div style={{ width: "98%", maxWidth: "1400px", border: "2px solid #1A1C1A", boxShadow: "8px 8px 0px 0px #1A1C1A", backgroundColor: "white", position: "relative" }}>
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
              <p style={{ margin: "0 0 12px 0" }}>&gt;&gt; cat mission.txt &quot;Learn. Build. Ship. Repeat...&quot; [CONSTANT]</p>
              <p style={{ margin: "0 0 12px 0" }}>&gt;&gt; establishing dev community... [ACTIVE]</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", paddingTop: "12px" }}>
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
