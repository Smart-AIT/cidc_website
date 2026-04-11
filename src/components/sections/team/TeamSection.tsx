import TeamMemberCard from "./TeamMemberCard";


const TEAM_MEMBERS = [
  { ref_id: 6, name: "Ritika", role: "Frontend Developer", instagram: "https://www.instagram.com/ritikagautam375/", linkedin: "https://www.linkedin.com/in/ritika-gautam-361867325/", image: "/image/ritika.jpg" },
  { ref_id: 7, name: "Simran Singh", role: "Frontend Developer", instagram: "https://www.instagram.com/heysimmi_19/", linkedin: "https://www.linkedin.com/in/simran-singh-921a83295/", image: "/image/simran.png" },
  { ref_id: 8, name: "Pradeep Kumar", role: "Mobile & Backend Developer", instagram: "https://www.instagram.com/pradeepkumar0805/", linkedin: "https://www.linkedin.com/in/pradeep-kumar-10p/", image: "/image/pradeep.jpg" },
  { ref_id: 9, name: "Abhay Singh", role: "Backend, GenAI Developer", instagram: "https://www.instagram.com/abhaysingh22_/", linkedin: "https://www.linkedin.com/in/abhaysingh22/", image: "/image/abhay.jpeg" },
  { ref_id: 10, name: "Omendra Naharwal", role: "Graphics, Problem Solver", instagram: "https://www.instagram.com/omendranaharwal/", linkedin: "https://www.linkedin.com/in/omendra-naharwal/", image: "/image/omendra.png" },
  { ref_id: 11, name: "Rishab Bhamboo", role: "Graphics, Problem Solver", instagram: "https://instagram.com/cidc_aitpune", linkedin: "https://www.linkedin.com/in/rishabh-singh-bhambhoo-99b389321/", image: "/image/rishab.png" },
];

const TE_MEMBERS = [
  { ref_id: 1, name: "Jagdish Singh (Secretary)", role: "Frontend Lead", instagram: "https://www.instagram.com/jagdishpawar._/", linkedin: "https://www.linkedin.com/in/jagdish-singh-007113288/", image: "/image/jaggu.jpeg" },
  { ref_id: 2, name: "Ebha Mollick (Secretary)", role: "DBMS Lead", instagram: "https://www.instagram.com/ebha_mollick/", linkedin: "https://www.linkedin.com/in/ebha-mollick-936152289/", image: "/image/ebbha.jpeg" },
  { ref_id: 3, name: "Mohit Kr Sharma", role: "Backend Lead", instagram: "https://www.instagram.com/its._mohit.sharma/", linkedin: "https://www.linkedin.com/in/its-mohitsharma/", image: "/image/mohit.jpeg" },
  { ref_id: 4, name: "Shreya Prasad", role: "Cloud Lead", instagram: "https://www.instagram.com/_shreya05prasad_/", linkedin: "https://www.linkedin.com/in/shreya-prasad-5b1567289/", image: "/image/shreya.jpeg" },
  { ref_id: 5, name: "Ayush Badoni", role: "Networking Head", instagram: "https://www.instagram.com/a.v.1909/", linkedin: "https://www.linkedin.com/in/ayyushx/", image: "/image/ayush.jpeg" },
]

export default function TeamSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marqueeScrollRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        .marquee-track-right {
          display: flex;
          gap: 24px;
          flex-shrink: 0;
          padding-right: 24px; 
          animation: marqueeScrollRight 25s linear infinite;
        }
        .marquee-track-left {
          display: flex;
          gap: 24px;
          flex-shrink: 0;
          padding-right: 24px;
          animation: marqueeScrollLeft 25s linear infinite;
        }

        .team-marquee-container:hover .marquee-track-left,
        .team-marquee-container:hover .marquee-track-right {
          animation-play-state: paused;
        }

        .team-section-root {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding: 60px 40px;
          border-top: 2px solid #1A1C1A;
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
          .marquee-track-right,
          .marquee-track-left {
            gap: 16px;
            padding-right: 16px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .team-section-root {
            padding: 48px 24px;
          }
          .team-chapter-banner {
            flex-direction: column;
            gap: 24px;
            padding: 24px;
            text-align: center;
          }
          .team-chapter-title {
            font-size: 26px;
          }
        }
      `}} />

      <section id="team" className="team-section-root">
        {/* Header */}
        <header style={{ marginBottom: "80px" }}>
          <p style={{ fontFamily: "monospace", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#A33B3C", marginBottom: "16px" }}>
            CIDC_VERSION_04
          </p>
          <h2 style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: "0.8", marginBottom: "32px", color: "#1A1C1A" }}>
            TEAM<br />
            <span style={{ color: "#006565" }}>MODULES</span>
          </h2>
          <div style={{ width: "80px", height: "4px", backgroundColor: "#1A1C1A", marginBottom: "32px" }}></div>
          <p style={{ fontSize: "16px", maxWidth: "600px", color: "#1A1C1A", fontWeight: "500", lineHeight: "1.6" }}>
            A multidisciplinary collective of engineers and designers operating at
            the intersection of technical rigidity and digital entropy.
          </p>
        </header>

        {/* Team Infinite Marquees */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "80px" }}>

          {/* Above row (Scrolls Right) */}
          <div className="team-marquee-container" style={{ display: "flex", overflow: "hidden", position: "relative", width: "100%", paddingBottom: "12px", paddingTop: "4px" }}>
            {[0, 1].map((trackIndex) => (
              <div key={trackIndex} className="marquee-track-right" aria-hidden={trackIndex !== 0}>
                {TE_MEMBERS.map((member, i) => (
                  <TeamMemberCard key={`above-${member.ref_id}-${i}`} {...member} />
                ))}
              </div>
            ))}
          </div>

          {/* Below row (Scrolls Left) */}
          <div className="team-marquee-container" style={{ display: "flex", overflow: "hidden", position: "relative", width: "100%", paddingBottom: "12px" }}>
            {[0, 1].map((trackIndex) => (
              <div key={trackIndex} className="marquee-track-left" aria-hidden={trackIndex !== 0}>
                {TEAM_MEMBERS.map((member, i) => (
                  <TeamMemberCard key={`below-${member.ref_id}-${i}`} {...member} />
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* Chapter Banner */}
        <div className="team-chapter-banner">
          <div>
            <h3 className="team-chapter-title">CIDC STUDENT CHAPTER</h3>
            <p className="team-chapter-desc">We are always scouting for engineers and visual thinkers. Share your ideas, showcase your project. Join us to build the AIT smart, ping us builders. </p>
          </div>
          <a href="#footer" style={{ backgroundColor: "#1A1C1A", color: "white", padding: "8px 20px", fontWeight: "900", textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.1em", border: "2px solid white", textDecoration: "none", display: "inline-block", transition: "all 0.2s ease", cursor: "pointer", borderRadius: "12px", whiteSpace: "nowrap" }} >
            JOIN
          </a>
        </div>
      </section>
    </>
  );
}
