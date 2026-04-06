import TeamMemberCard from "./TeamMemberCard";

const TEAM_MEMBERS = [
  { name: "Jagdish Singh", role: "Frontend Lead", instagram: "https://instagram.com/cidc_aitpune", email: "jagdish@example.com" },
  {  name: "Ebha Mollick", role: "Backend & DB", instagram: "https://instagram.com/cidc_aitpune", email: "ebha@example.com" },
  {  name: "Mohit Kr Sharma", role: "Cloud & Infra", instagram: "https://instagram.com/cidc_aitpune", email: "mohit@example.com" },
  {  name: "Shreya Prasad", role: "Web3 Architect", instagram: "https://instagram.com/cidc_aitpune", email: "shreya@example.com" },
  {  name: "Pradeep Kumar", role: "Lead UI/UX", instagram: "https://instagram.com/cidc_aitpune", email: "pradeep@example.com" },
  {  name: "Abhay Singh", role: "Graphics", instagram: "https://instagram.com/cidc_aitpune", email: "abhay@example.com" },
];

export default function TeamSection() {
  return (
    <section id="team" style={{ width: "100%", marginLeft: "auto", marginRight: "auto", paddingLeft: "40px", paddingRight: "40px", paddingTop: "60px", paddingBottom: "60px", borderTop: "2px solid #1A1C1A" }}>
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
      <style dangerouslySetInnerHTML={{__html: `
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
      `}} />

      <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "80px" }}>
        
        {/* Above row (Scrolls Right) */}
        <div className="team-marquee-container" style={{ display: "flex", overflow: "hidden", position: "relative", width: "100%", paddingBottom: "12px", paddingTop: "4px" }}>
          {[0, 1].map((trackIndex) => (
            <div key={trackIndex} className="marquee-track-right" aria-hidden={trackIndex !== 0}>
              {TEAM_MEMBERS.map((member, i) => (
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
      <div style={{ backgroundColor: "#006565", border: "2px solid #1A1C1A", padding: "16px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "48px", borderRadius: "12px", boxShadow: "8px 8px 0px 0px rgba(26,28,26,0.15)", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
        <div>
          <h3 style={{ fontSize: "32px", fontWeight: "900", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "8px" }}>CIDC STUDENT CHAPTER</h3>
          <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "14px", maxWidth: "500px", lineHeight: "1.8", fontWeight: "500" }}>We are always scouting for engineers and visual thinkers. Share your ideas, showcase your project. Join us to build the AIT smart, ping us builders. </p>
        </div>
        <a href="#contact" style={{ backgroundColor: "#1A1C1A", color: "white", padding: "8px 20px", fontWeight: "900", textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.1em", border: "2px solid white", textDecoration: "none", display: "inline-block", transition: "all 0.2s ease", cursor: "pointer", borderRadius: "12px", whiteSpace: "nowrap" }} >
          JOIN
        </a>
      </div>
    </section>
  );
}
