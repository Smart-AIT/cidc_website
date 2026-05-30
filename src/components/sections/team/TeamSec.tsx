"use client";
import { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";

// B.E. Mentors - Complete Combined List
const BE_MEMBERS = [
  {
    ref_id: 1,
    name: "Jagdish Singh",
    role: "Frontend Lead",
    instagram: "https://www.instagram.com/jagdishpawar._/",
    linkedin: "https://www.linkedin.com/in/jagdish-singh-007113288/",
    image: "/image/jaggu.jpeg",
  },
  {
    ref_id: 2,
    name: "Ebha Mollick",
    role: "DBMS Lead",
    instagram: "https://www.instagram.com/ebha_mollick/",
    linkedin: "https://www.linkedin.com/in/ebha-mollick-936152289/",
    image: "/image/ebbha.jpeg",
  },
  {
    ref_id: 3,
    name: "Mohit Sharma",
    role: "Backend Lead",
    instagram: "https://www.instagram.com/its._mohit.sharma/",
    linkedin: "https://www.linkedin.com/in/its-mohitsharma/",
    image: "/image/mohit.jpeg",
  },
  {
    ref_id: 4,
    name: "Shreya Prasad",
    role: "Cloud Lead",
    instagram: "https://www.instagram.com/_shreya05prasad_/",
    linkedin: "https://www.linkedin.com/in/shreya-prasad-5b1567289/",
    image: "/image/shreya.jpeg",
  },
  {
    ref_id: 5,
    name: "Ayush Badoni",
    role: "Networking Head",
    instagram: "https://www.instagram.com/ayush_ab190/",
    linkedin: "https://www.linkedin.com/in/ayyushx/",
    image: "/image/ayush.jpeg",
  },
];

// T.E. Council - Complete Combined List
const TE_MEMBERS = [
  {
    ref_id: 6,
    name: "Ritika",
    role: "Frontend Developer",
    instagram: "https://www.instagram.com/ritikagautam375/",
    linkedin: "https://www.linkedin.com/in/ritika-gautam-361867325/",
    image: "/image/ritika.jpg",
  },
  {
    ref_id: 7,
    name: "Simran Singh",
    role: "Frontend Developer",
    instagram: "https://www.instagram.com/heysimmi_19/",
    linkedin: "https://www.linkedin.com/in/simran-singh-921a83295/",
    image: "/image/simran.png",
  },
  {
    ref_id: 8,
    name: "Pradeep Kumar",
    role: "Mobile & Backend Developer",
    instagram: "https://www.instagram.com/pradeepkumar0805/",
    linkedin: "https://www.linkedin.com/in/pradeep-kumar-10p/",
    image: "/image/pradeep.jpg",
  },
  {
    ref_id: 9,
    name: "Abhay Singh (Secretary)",
    role: "Backend, GenAI Developer",
    instagram: "https://www.instagram.com/abhaysingh22_/",
    linkedin: "https://www.linkedin.com/in/abhaysingh22/",
    image: "/image/abhay.jpeg",
    badge: "Secretary",
  },
  {
    ref_id: 10,
    name: "Omendra Naharwal",
    role: "Graphics, Problem Solver",
    instagram: "https://www.instagram.com/omendranaharwal/",
    linkedin: "https://www.linkedin.com/in/omendra-naharwal/",
    image: "/image/omendra.png",
  },
  {
    ref_id: 11,
    name: "Rishab Bhamboo",
    role: "Graphics, Problem Solver",
    instagram: "https://instagram.com/cidc_aitpune",
    linkedin: "https://www.linkedin.com/in/rishabh-singh-bhambhoo-99b389321/",
    image: "/image/rishab.png",
  },
];

// S.E. Council - Updated with Google Sheet Responses & Image paths
const SE_MEMBERS = [
  {
    ref_id: 12,
    name: "Ashish Gupta",
    role: "Full Stack Developer",
    instagram: "https://www.instagram.com/rohit_pimpale_7/",
    linkedin: "https://www.linkedin.com/in/rohitpimpale/",
    image: "/image/As6.jpeg",
  },
  {
    ref_id: 13,
    name: "Mahima",
    role: "Frontend Developer",
    instagram: "https://www.instagram.com/mahima.singh.19",
    linkedin: "https://www.linkedin.com/in/mahima-singh-ait/",
    image: "/image/Mahima.jpg",
  },
  {
    ref_id: 12,
    name: "ROHIT PIMPALE",
    role: "Flutter Developer",
    instagram: "https://www.instagram.com/rohit_pimpale_7/",
    linkedin: "https://www.linkedin.com/in/rohitpimpale/",
    image: "/image/Rohit.jpeg",
  },
  {
    ref_id: 14,
    name: "Abhinay Singh",
    role: "Full stack developer",
    instagram: "https://www.instagram.com/abhinay_singh_/",
    linkedin: "https://www.linkedin.com/in/abhinay-singh-221b/",
    image: "/image/Abhinay.jpg",
  },
  {
    ref_id: 15,
    name: "SHSHANK KUMAR",
    role: "Embedded + Frontend Developer",
    instagram: "https://www.instagram.com/shashank_kumar_/",
    linkedin: "https://in.linkedin.com/in/shashank-kumar-ait",
    image: "/image/Shashank.jpg",
  },
  {
    ref_id: 16,
    name: "Prince Singh",
    role: "Full Stack Developer",
    instagram: "https://www.instagram.com/prince_singh_/",
    linkedin: "https://www.linkedin.com/in/prince-singh-web/",
    image: "/image/Prince.jpg",
  },
  {
    ref_id: 17,
    name: "Yashwanth Thota",
    role: "Frontend, Problem Solver",
    instagram: "https://www.instagram.com/yashwanth_thota/",
    linkedin: "https://www.linkedin.com/in/yashwanth-thota-/",
    image: "/image/Tota.jpeg",
  },
  {
    ref_id: 19,
    name: "Sajal Rawat",
    role: "Full Stack Developer",
    instagram: "https://www.instagram.com/sajalrwt/",
    linkedin: "https://www.linkedin.com/in/sajal-rawat/",
    image: "/image/sajal.jpeg",
  },
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"BE" | "TE" | "SE">("BE");

  // Dynamic selector for single row configuration
  const getActiveList = () => {
    switch (activeTab) {
      case "BE":
        return BE_MEMBERS;
      case "TE":
        return TE_MEMBERS;
      case "SE":
        return SE_MEMBERS;
    }
  };

  const currentList = getActiveList();

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
          gap: 24px;
          flex-shrink: 0;
          padding-right: 24px;
          animation: marqueeScrollLeft 30s linear infinite;
        }

        .team-marquee-container:hover .single-marquee-track {
          animation-play-state: paused;
        }

        .team-marquee-container {
          z-index: 10;
          transition: z-index 0.2s;
        }
        .team-marquee-container:hover {
          z-index: 40;
        }

        .team-section-root {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding: 60px 40px;
          border-top: 2px solid #1A1C1A;
        }

        /* Nav Interface Controllers */
        .tab-controller-container {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
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

        @media (max-width: 640px) {
          .team-section-root {
            padding: 40px 16px;
          }
          .tab-controller-container {
            gap: 10px;
          }
          .mechanical-tab-btn {
            font-size: 11px;
            padding: 8px 16px;
            flex-grow: 1;
            text-align: center;
          }
          .team-chapter-banner {
            flex-direction: column;
            gap: 20px;
            padding: 24px 20px;
            text-align: center;
            align-items: center;
          }
          .team-chapter-title {
            font-size: 22px;
          }
          .team-chapter-desc {
            font-size: 13px;
          }
          .single-marquee-track {
            gap: 16px;
            padding-right: 16px;
          }
        }
      `,
        }}
      />

      <section id="team" className="team-section-root">
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

        {/* Interactive Tab Controller */}
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

        {/* Clean Single Line Endless Marquee Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "80px",
          }}
        >
          <div
            className="team-marquee-container"
            style={{
              display: "flex",
              overflow: "visible",
              position: "relative",
              width: "100%",
              paddingBottom: "24px",
              paddingTop: "24px",
            }}
          >
            {[0, 1].map((trackIndex) => (
              <div
                key={trackIndex}
                className="single-marquee-track"
                aria-hidden={trackIndex !== 0}
                style={{ overflow: "visible" }}
              >
                {currentList.map((member, i) => (
                  <TeamMemberCard
                    key={`${activeTab}-single-${member.ref_id}-${i}`}
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
