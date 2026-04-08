"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <>
      <style>{`
        .contact-section-root {
          width: 100%;
          padding: 60px 40px;
          border-top: 2px solid #1A1C1A;
          background-color: #faf9f6;
        }
        .contact-bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          border: 2px solid #1A1C1A;
          margin-bottom: 80px;
        }
        .contact-bento-left {
          grid-column: span 4;
          display: flex;
          flex-direction: column;
          border-right: 2px solid #1A1C1A;
        }
        .contact-bento-center {
          grid-column: span 5;
          background-color: #006565;
          color: white;
          padding: 48px;
          border-right: 2px solid #1A1C1A;
          display: flex;
          flex-direction: column;
        }
        .contact-bento-right {
          grid-column: span 3;
          display: flex;
          flex-direction: column;
        }
        .contact-form-grid {
          margin-top: 80px;
          display: grid;
          grid-template-columns: 2fr 1.5fr;
          gap: 48px;
        }

        @media (max-width: 768px) {
          .contact-section-root {
            padding: 40px 16px;
          }
          .contact-bento-grid {
            grid-template-columns: 1fr;
            margin-bottom: 40px;
          }
          .contact-bento-left {
            grid-column: span 1;
            border-right: none;
            border-bottom: 2px solid #1A1C1A;
          }
          .contact-bento-center {
            grid-column: span 1;
            border-right: none;
            border-bottom: 2px solid #1A1C1A;
            padding: 32px 20px;
          }
          .contact-bento-right {
            grid-column: span 1;
          }
          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-top: 40px;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-section-root {
            padding: 48px 24px;
          }
          .contact-bento-grid {
            grid-template-columns: 1fr 1fr;
          }
          .contact-bento-left {
            grid-column: span 1;
            border-right: 2px solid #1A1C1A;
          }
          .contact-bento-center {
            grid-column: span 1;
            border-right: none;
            border-bottom: 2px solid #1A1C1A;
            padding: 36px;
          }
          .contact-bento-right {
            grid-column: span 2;
          }
          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            margin-top: 48px;
          }
        }
      `}</style>
      <section id="contact" className="contact-section-root">
        <div style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}>
          {/* Hero Header */}
          <header style={{ marginBottom: "80px" }}>
            <div style={{ display: "inline-block", backgroundColor: "#A33B3C", color: "white", padding: "6px 12px", marginBottom: "16px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "900" }}>
              SYSTEM_ACCESS: EXTERNAL_COMMUNICATION
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 12vw, 5.5rem)", fontWeight: "900", lineHeight: "0.85", letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: "32px" }}>
              INITIATE
              <br />
              <span style={{ color: "#006565" }}>CONNECTION_</span>
            </h2>
            <div style={{ width: "120px", height: "4px", backgroundColor: "#1A1C1A", marginBottom: "32px" }}></div>
            <p style={{ maxWidth: "600px", fontSize: "14px", fontWeight: "500", lineHeight: "1.7", color: "#1A1C1A" }}>
              Our technical node is open for collaboration, inquiries, and glitch
              reporting. Choose your preferred channel to interface with the
              collective.
            </p>
          </header>

          {/* Contact Bento Grid */}
          <div className="contact-bento-grid">
            {/* Phone & WhatsApp Group */}
            <div className="contact-bento-left">
              {/* Phone */}
              <div style={{ padding: "32px", borderBottom: "2px solid #1A1C1A", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "32px", color: "#006565" }}>phone_in_talk</span>
                  <span style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(26, 28, 26, 0.4)", fontWeight: "bold" }}>REF_001</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px", color: "#1A1C1A" }}>Phone Number</h3>
                <div style={{ width: "100px", height: "3px", backgroundColor: "#A33B3C", marginBottom: "16px" }}></div>
                <p style={{ fontWeight: "900", fontSize: "16px", color: "#1A1C1A" }}>+91 7983957734</p>
              </div>
              
              {/* WhatsApp */}
              <div style={{ padding: "32px", display: "flex", flexDirection: "column", backgroundColor: "#f4f3f1" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "32px", color: "#006565" }}>chat</span>
                  <span style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(26, 28, 26, 0.4)", fontWeight: "bold" }}>REF_003</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px", color: "#1A1C1A" }}>WhatsApp</h3>
                <p style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", fontWeight: "bold", color: "#A33B3C", marginBottom: "8px", letterSpacing: "0.08em" }}>SECURE_ENCRYPTED_LINE</p>
                <p style={{ fontWeight: "900", fontSize: "16px", color: "#1A1C1A" }}>+91 96XXXXX</p>
              </div>
            </div>

            {/* Email (featured) */}
            <div className="contact-bento-center">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "40px", color: "white" }}>mail</span>
                <span style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255, 255, 255, 0.4)", fontWeight: "bold" }}>MAR_390</span>
              </div>
              <h3 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "900", textTransform: "uppercase", marginBottom: "16px", lineHeight: "1", color: "white" }}>DIRECT_INBOX</h3>
              <p style={{ fontSize: "clamp(14px, 2vw, 18px)", fontWeight: "900", marginBottom: "48px", color: "white", wordBreak: "break-all" }}>cidcaitpune@gmail.com</p>
              <a
                href="mailto:cidcaitpune@gmail.com"
                style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", justifyContent: "space-between", border: "2px solid white", padding: "16px 32px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "12px", backgroundColor: "white", color: "#006565", textDecoration: "none", cursor: "pointer", gap: "8px" }}
              >
                SEND MESSAGE
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_outward</span>
              </a>
            </div>

            {/* Instagram & Source Code Group */}
            <div className="contact-bento-right">
              {/* Instagram */}
              <div style={{ padding: "32px", borderBottom: "2px solid #1A1C1A", display: "flex", flexDirection: "column", backgroundColor: "white" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "32px", color: "#A33B3C" }}>alternate_email</span>
                  <span style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(26, 28, 26, 0.4)", fontWeight: "bold" }}>REF_INSTA</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px", color: "#1A1C1A" }}>INSTAGRAM</h3>
                <p style={{ fontWeight: "900", color: "#1A1C1A" }}>@cidc_aitpune</p>
              </div>
              
              {/* Source Code */}
              <div style={{ padding: "32px", display: "flex", flexDirection: "column", backgroundColor: "#1A1C1A", color: "white", flex: "1" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "32px", color: "white" }}>code</span>
                  <span style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255, 255, 255, 0.4)", fontWeight: "bold" }}>REF_G_HUB</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px", color: "white" }}>SOURCE_CODE</h3>
                <p style={{ fontWeight: "900", fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.08em" }}>GITHUB.COM/smartAIT</p>
              </div>
            </div>
          </div>

          {/* Send Transmission Form Section */}
          <div className="contact-form-grid">
            {/* Form */}
            <div>
              <h3 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: "900", textTransform: "uppercase", marginBottom: "48px", letterSpacing: "-0.01em", color: "#1A1C1A" }}>SEND_TRANSMISSION</h3>
              <form style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.2em", color: "#A33B3C" }}>NAME_</label>
                  <input type="text" placeholder="USER_IDENTIFIER" style={{ width: "100%", backgroundColor: "#f4f3f1", border: "2px solid #1A1C1A", padding: "16px", fontFamily: "monospace", fontSize: "14px", outline: "none" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.2em", color: "#A33B3C" }}>EMAIL_</label>
                  <input type="email" placeholder="RETURN_COORDINATES" style={{ width: "100%", backgroundColor: "#f4f3f1", border: "2px solid #1A1C1A", padding: "16px", fontFamily: "monospace", fontSize: "14px", outline: "none" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.2em", color: "#A33B3C" }}>MESSAGE_DATA_</label>
                  <textarea placeholder="ENTER_PLAINTEXT_HERE..." style={{ width: "100%", backgroundColor: "#f4f3f1", border: "2px solid #1A1C1A", padding: "16px", fontFamily: "monospace", fontSize: "14px", outline: "none", resize: "none", minHeight: "120px" }} />
                </div>
                <button style={{ backgroundColor: "#006565", color: "white", padding: "16px 48px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "12px", border: "2px solid #1A1C1A", cursor: "pointer" }}>
                  EXECUTE_SEND
                </button>
              </form>
            </div>

            {/* Location UI */}
            <div>
              <div style={{ border: "2px solid #1A1C1A", display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}>
                <div style={{ padding: "16px", borderBottom: "2px solid #1A1C1A", fontFamily: "monospace", fontSize: "10px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", justifyContent: "space-between", color: "#1A1C1A" }}>
                  <span>LOCATION_COORDINATES</span>
                </div>
                <div style={{ backgroundColor: "#e3e2e0", flex: "1", minHeight: "350px", position: "relative" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1572020519256-cad5b133e90d?w=800&h=600&fit=crop" 
                    alt="Location Context" 
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }}
                  />
                  <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", backgroundColor: "white", border: "2px solid #1A1C1A", padding: "24px", boxShadow: "8px 8px 0px 0px rgba(26, 28, 26, 1)" }}>
                    <h4 style={{ fontWeight: "900", textTransform: "uppercase", marginBottom: "4px", color: "#1A1C1A" }}>AIT_PUNE</h4>
                    <p style={{ fontSize: "10px", fontWeight: "500", color: "rgba(26, 28, 26, 0.6)", fontFamily: "monospace", marginBottom: "16px" }}>411015, Alandi Road, Dighi Army Institute of Technology</p>
                    <a href="#" style={{ fontSize: "10px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "underline", color: "#A33B3C" }}>MAP_INTERFACE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
