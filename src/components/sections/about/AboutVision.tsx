// About section: Vision card with compass icon
export default function AboutVision() {
  return (
    <>
      <style>{`
        .about-vision-grid {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          height: 100%;
        }
        .about-vision-left {
          padding: 40px 24px;
          background-color: #faf9f6;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          height: 100%;
        }
        .about-vision-left > * {
          width: 100%;
          max-width: 700px;
        }
        .about-vision-terminal {
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-family: monospace;
          font-size: 13px;
          font-weight: 600;
          color: #1A1C1A;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          align-items: center;
          width: 100%;
          max-width: 520px;
        }
        .about-vision-terminal p {
          margin: 0;
          width: 100%;
          text-align: center;
          padding-left: 0;
        }

        @media (max-width: 768px) {
          .about-vision-left {
            padding: 32px 20px;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .about-vision-left {
            padding: 40px 32px;
          }
        }
      `}</style>
      <div className="about-vision-grid">
        {/* Vision Content */}
        <div className="about-vision-left">
          {/* Top content group */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#006565",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px" }}
                >
                  explore
                </span>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#006565",
                  fontFamily: "monospace",
                  fontWeight: "700",
                }}
              >
                CORE_VISION
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#1A1C1A",
                marginBottom: "12px",
                lineHeight: "1",
              }}
            >
              The Approach
            </h2>

            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #A33B3C, #d4505f)",
                borderRadius: "2px",
                marginBottom: "16px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />

            <p
              style={{
                fontSize: "clamp(14px, 1.8vw, 16px)",
                fontWeight: "500",
                lineHeight: "1.7",
                marginBottom: "16px",
                color: "#2a2c2a",
                maxWidth: "520px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              We integrate junior developers directly into{" "}
              <strong style={{ color: "#1A1C1A" }}>
                live, production-ready systems
              </strong>{" "}
              designed to solve actual campus challenges.
              <br />
              <br />
              Under the active guidance of senior peer developers (TE and BE leads), juniors gain early hands-on industry exposure while seniors sharpen engineering leadership.
            </p>
          </div>

          <div className="about-vision-terminal">
            <p style={{ color: "#006565" }}>~ A collaborative pipeline where:</p>
            <p>&gt;&gt; JUNIORS OPERATE WITH REAL SYSTEMS</p>
            <p>&gt;&gt; SENIORS ARCHITECT AND LEAD MODULES</p>
            <p>&gt;&gt; PROJECTS YIELD STABLE CAMPUS SOLUTIONS</p>
          </div>
        </div>
      </div>
    </>
  );
}
