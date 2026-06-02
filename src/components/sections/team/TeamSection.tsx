"use client";
import { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";

// ==========================================
// 1. FACULTY INCHARGES DATA
// ==========================================
const FACULTY_INCHARGES = [
  {
    ref_id: 101,
    name: "Dr. Dipika Birari",
    role: "Faculty Incharge ",
    instagram: "#",
    linkedin: "#",
    image: "/image/Dipika_Mam.jpeg",
  },
  {
    ref_id: 102,
    name: "Dr. Rupali Bagate",
    role: "Faculty Incharge",
    instagram: "#",
    linkedin: "#",
    image: "/image/Rupali_Mam.jpeg",
  },
];

// ==========================================
// 2. B.E. MENTORS
// ==========================================
const BE_MEMBERS = [
  { ref_id: 1, name: "Jagdish Singh", role: "Frontend Lead", instagram: "https://www.instagram.com/jagdishpawar._/", linkedin: "https://www.linkedin.com/in/jagdish-singh-007113288/", image: "/image/jaggu.jpeg" },
  { ref_id: 2, name: "Ebha Mollick", role: "DBMS Lead", instagram: "https://www.instagram.com/ebha_mollick/", linkedin: "https://www.linkedin.com/in/ebha-mollick-936152289/", image: "/image/ebbha.jpeg" },
  { ref_id: 3, name: "Mohit Sharma", role: "Backend Lead", instagram: "https://www.instagram.com/its._mohit.sharma/", linkedin: "https://www.linkedin.com/in/its-mohitsharma/", image: "/image/mohit.jpeg" },
  { ref_id: 4, name: "Shreya Prasad", role: "Cloud Lead", instagram: "https://www.instagram.com/_shreya05prasad_/", linkedin: "https://www.linkedin.com/in/shreya-prasad-5b1567289/", image: "/image/shreya.jpeg" },
  { ref_id: 5, name: "Ayush Badoni", role: "Networking Head", instagram: "https://www.instagram.com/ayush_ab190/", linkedin: "https://www.linkedin.com/in/ayyushx/", image: "/image/ayush.jpeg" },
];

// ==========================================
// 3. T.E. COUNCIL
// ==========================================
const TE_MEMBERS = [
  { ref_id: 9, name: "Abhay Singh (Secretary)", role: "Backend, GenAI Dev", instagram: "https://www.instagram.com/abhaysingh22_/", linkedin: "https://www.linkedin.com/in/abhaysingh22/", image: "/image/abhay.jpeg", badge: "Secretary" },
  { ref_id: 8, name: "Pradeep Kumar", role: "Mobile & Backend", instagram: "https://www.instagram.com/pradeepkumar0805/", linkedin: "https://www.linkedin.com/in/pradeep-kumar-10p/", image: "/image/pradeep.jpg" },
  { ref_id: 7, name: "Simran Singh", role: "Frontend Developer", instagram: "https://www.instagram.com/heysimmi_19/", linkedin: "https://www.linkedin.com/in/simran-singh-921a83295/", image: "/image/simran.png" },
  { ref_id: 10, name: "Omendra Naharwal", role: "Graphics Specialist", instagram: "https://www.instagram.com/omendranaharwal/", linkedin: "https://www.linkedin.com/in/omendra-naharwal/", image: "/image/omendra.png" },
  { ref_id: 6, name: "Ritika", role: "Frontend Developer", instagram: "https://www.instagram.com/ritikagautam375/", linkedin: "https://www.linkedin.com/in/ritika-gautam-361867325/", image: "/image/ritika.jpg" },
  { ref_id: 11, name: "Rishab Bhamboo", role: "Graphics Designer", instagram: "https://instagram.com/cidc_aitpune", linkedin: "https://www.linkedin.com/in/rishabh-singh-bhambhoo-99b389321/", image: "/image/rishab.png" },
];

// ==========================================
// 4. S.E. COUNCIL
// ==========================================
const SE_MEMBERS = [
  { ref_id: 13, name: "Ashish Gupta", role: "Full Stack Dev", instagram: "https://www.instagram.com/ashish61779?igsh=NmdqNDI1Z3h1c2J2", linkedin: "https://www.linkedin.com/in/ashish-gupta-228598374/", image: "/image/As6.jpeg" },
  { ref_id: 14, name: "Mahima", role: "Frontend Developer", instagram: "https://www.instagram.com/mahima_anchra/#", linkedin: "https://linkedin.com/in/mahima-anchra-978b5b376", image: "/image/Mahima.jpg" },
  { ref_id: 16, name: "ROHIT PIMPALE", role: "Flutter Developer", instagram: "https://www.instagram.com/_.rohit_p._/", linkedin: "https://www.linkedin.com/in/rohit-sharad-pimpale-581929374/", image: "/image/Rohit.jpeg" },
  { ref_id: 12, name: "Abhinay Singh", role: "Full Stack Dev", instagram: "https://www.instagram.com/hueehuiii?utm_source=qr&igsh=eThyeGd1MGFiOHhz", linkedin: "https://www.linkedin.com/in/abhinay-singh-791975379?utm_source=share_via&utm_content=profile&utm_medium=member_android", image: "/image/Abhinay.jpg" },
  { ref_id: 15, name: "Prince Singh", role: "Full Stack Dev", instagram: "https://www.instagram.com/prince_sin1729?igsh=azd2MTltZzFvZmhj", linkedin: "https://www.linkedin.com/in/prince-singh-645365377?utm_source=share_via&utm_content=profile&utm_medium=member_android", image: "/image/Prince.jpg" },
  { ref_id: 17, name: "SHSHANK KUMAR", role: "Embedded Systems", instagram: "https://www.instagram.com/_mobile.pixels_?igsh=MWFrc3ZjYWswdjZtbg==", linkedin: "https://in.linkedin.com/in/shshank-kumar-a639b1373", image: "/image/Shashank.jpg" },
  { ref_id: 18, name: "Yashwanth Thota", role: "Frontend Developer", instagram: "https://www.instagram.com/yashellno/", linkedin: "https://www.linkedin.com/in/yashwanth-thota-aba68a388/", image: "/image/Tota.jpeg" },
  { ref_id: 19, name: "Sajal Rawat", role: "Full Stack Dev", instagram: "https://www.instagram.com/sajalrwt/", linkedin: "https://www.linkedin.com/in/sajal-rawat/", image: "/image/sajal.jpeg" },
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"BE" | "TE" | "SE">("BE");

  // Filter dynamic logic for split flows
  const allCurrentMembers = activeTab === "BE" ? BE_MEMBERS : activeTab === "TE" ? TE_MEMBERS : SE_MEMBERS;
  
  // Isolate secretaries from the active dataset
  const fixedSecretaries = allCurrentMembers.filter(
    (m) => m.name.includes("Secretary") || ('badge' in m && m.badge === "Secretary")
  );
  
  // Group scrolling list members
  const scrollingMembers = allCurrentMembers.filter(
    (m) => !m.name.includes("Secretary") && !('badge' in m && m.badge === "Secretary")
  );

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .single-marquee-track {
          display: flex;
          gap: 28px;
          flex-shrink: 0;
          padding-right: 28px;
          animation: marqueeScrollLeft 32s linear infinite;
          overflow: visible !important;
        }

        .team-marquee-container {
          display: flex;
          overflow: hidden;
          position: relative;
          width: 100%;
          z-index: 10;
        }

        /* Hover on marquee stops scrolling */
        .team-marquee-container:hover .single-marquee-track {
          animation-play-state: paused;
        }

        .team-section-root {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding: 60px 40px;
          border-top: 2px solid #1A1C1A;
        }

        .tab-controller-container {
          display: flex;
          justify-content: center; 
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
          width: 100%;
        }
        
        .mechanical-tab-btn {
          background-color: #faf9f6;
          color: #1A1C1A;
          border: 2px solid #1A1C1A;
          padding: 10px 24px;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 6px;
          box-shadow: 4px 4px 0px 0px #1A1C1A;
          transition: all 0.15s ease-in-out;
        }
        .mechanical-tab-btn:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px 0px #1A1C1A;
        }
        .mechanical-tab-btn.active {
          background-color: #006565;
          color: white;
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px 0px #1A1C1A;
        }

        /* Pure Static Non-Clickable Label styled identical to unclicked buttons */
        .mechanical-static-label {
          background-color: #faf9f6;
          color: #1A1C1A;
          border: 2px solid #1A1C1A;
          padding: 10px 24px;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 6px;
          box-shadow: 4px 4px 0px 0px #1A1C1A;
          user-select: none;
        }

        .faculty-grid-container {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 60px;
          padding: 15px 10px;
        }
        
        .faculty-wrapper-card {
          position: relative;
        }
        
        .faculty-badge-tag {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #A33B3C;
          color: white;
          font-family: monospace;
          font-size: 9px;
          font-weight: 900;
          padding: 2px 8px;
          border: 1px solid #1A1C1A;
          border-radius: 4px;
          text-transform: uppercase;
          z-index: 50;
          white-space: nowrap;
        }

        .team-chapter-banner {
          background-color: #006565;
          border: 2px solid #1A1C1A;
          padding: 16px 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 48px;
          border-radius: 12px;
          box-shadow: 8px 8px 0px 0px rgba(26,28,26,0.15);
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .team-chapter-title {
          font-size: 32px;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }
        .team-chapter-desc {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          max-width: 500px;
          line-height: 1.8;
          font-weight: 500;
        }

        /* Hybrid Split Row wrapper */
        .hybrid-split-wrapper {
          display: flex;
          flex-direction: row;
          gap: 28px;
          width: 100%;
          align-items: flex-start;
        }
        
        .fixed-secretaries-panel {
          display: flex;
          gap: 28px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .hybrid-split-wrapper {
            flex-direction: column;
            align-items: center;
          }
          .fixed-secretaries-panel {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 640px) {
          .team-section-root { padding: 40px 16px; }
          .tab-controller-container { gap: 10px; }
          .mechanical-tab-btn, .mechanical-static-label { font-size: 11px; padding: 8px 16px; flex-grow: 1; text-align: center; }
          .faculty-grid-container { gap: 24px; }
          .team-chapter-banner { flex-direction: column; gap: 20px; padding: 24px 20px; text-align: center; align-items: center; }
          .team-chapter-title { font-size: 22px; }
          .single-marquee-track { gap: 16px; padding-right: 16px; }
        }
      `,
        }}
      />

      <section
        id="team"
        className="team-section-root"
        style={{ overflow: "visible" }}
      >
        {/* Header */}
        <header style={{ marginBottom: "60px" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#A33B3C",
              marginBottom: "16px",
            }}
          >
            CIDC_VERSION_04
          </p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 10vw, 5rem)",
              fontWeight: "900",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: "0.8",
              marginBottom: "32px",
              color: "#1A1C1A",
            }}
          >
            TEAM
            <br />
            <span style={{ color: "#006565" }}>MODULES</span>
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#1A1C1A",
              marginBottom: "32px",
            }}
          ></div>
          <p
            style={{
              fontSize: "16px",
              maxWidth: "600px",
              color: "#1A1C1A",
              fontWeight: "500",
              lineHeight: "1.6",
            }}
          >
            A multidisciplinary collective of engineers and designers operating
            at the intersection of technical rigidity and digital entropy.
          </p>
        </header>

        {/* Faculty Incharge Grid Section */}
        <div style={{ marginBottom: "50px" }}>
          
          {/* Static White Label mimicking the unclicked button structure */}
          <div className="tab-controller-container">
            <div className="mechanical-static-label">
              // Faculty Incharge
            </div>
          </div>

          <div className="faculty-grid-container">
            {FACULTY_INCHARGES.map((faculty) => (
              <div key={faculty.ref_id} className="faculty-wrapper-card">
                <span className="faculty-badge-tag">FACULTY INCHARGE</span>
                <TeamMemberCard {...faculty} isFaculty={true} />
              </div>
            ))}
          </div>
        </div>

        <hr
          style={{
            border: "0",
            height: "2px",
            backgroundColor: "#1A1C1A",
            opacity: "0.1",
            marginBottom: "60px",
          }}
        />

        {/* Dynamic Navigation Buttons */}
        <div className="tab-controller-container">
          <button
            className={`mechanical-tab-btn ${activeTab === "BE" ? "active" : ""}`}
            onClick={() => setActiveTab("BE")}
          >
            // B.E. Mentors
          </button>
          <button
            className={`mechanical-tab-btn ${activeTab === "TE" ? "active" : ""}`}
            onClick={() => setActiveTab("TE")}
          >
            // T.E. Council
          </button>
          <button
            className={`mechanical-tab-btn ${activeTab === "SE" ? "active" : ""}`}
            onClick={() => setActiveTab("SE")}
          >
            // S.E. Council
          </button>
        </div>

        {/* Hybrid Split Framework layout container */}
        <div className="hybrid-split-wrapper" style={{ marginBottom: "80px" }}>
          
          {/* FIXED LEFT BLOCK */}
          {fixedSecretaries.length > 0 && (
            <div className="fixed-secretaries-panel">
              {fixedSecretaries.map((sec) => (
                <TeamMemberCard key={`fixed-sec-${sec.ref_id}`} {...sec} />
              ))}
              {/* Center dividing pipeline border */}
              <div className="hidden lg:block" style={{ width: "2px", backgroundColor: "#1A1C1A", opacity: 0.15, alignSelf: "stretch", margin: "0 4px" }} />
            </div>
          )}

          {/* INFINITE SCROLLING TRACK */}
          <div className="team-marquee-container">
            {[0, 1].map((trackIndex) => (
              <div
                key={trackIndex}
                className="single-marquee-track"
                aria-hidden={trackIndex !== 0}
                style={{ overflow: "visible" }}
              >
                {scrollingMembers.map((member, i) => (
                  <TeamMemberCard
                    key={`${activeTab}-scroll-${member.ref_id}-${i}`}
                    {...member}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* Chapter Banner */}
        <div className="team-chapter-banner">
          <div>
            <h3 className="team-chapter-title">CIDC STUDENT CHAPTER</h3>
            <p className="team-chapter-desc">
              We are always scouting for engineers and visual thinkers. Share
              your ideas, showcase your project. Join us to build the AIT smart,
              ping us builders.{" "}
            </p>
          </div>
          <a
            href="#footer"
            style={{
              backgroundColor: "#1A1C1A",
              color: "white",
              padding: "8px 20px",
              fontWeight: "900",
              textTransform: "uppercase",
              fontSize: "12px",
              letterSpacing: "0.1em",
              border: "2px solid white",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.2s ease",
              cursor: "pointer",
              borderRadius: "12px",
              whiteSpace: "nowrap",
            }}
          >
            JOIN
          </a>
        </div>
      </section>
    </>
  );
}