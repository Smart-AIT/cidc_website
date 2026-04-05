import TeamMemberCard from "./TeamMemberCard";

const TEAM_MEMBERS = [
  {
    ref_id: "Secretary_01",
    iconBg: "bg-[#008080]",
    iconColor: "text-[#e3fffe]",
    icon: "terminal",
    name: "Jagdish Singh",
    role: "Frontend Lead",
    description:
      "Expert in complex UI state machines and high-performance React architectures. Bridging the gap between design spec and browser execution.",
    link1Icon: "alternate_email",
    link2Icon: "code",
  },
  {
    ref_id: "Secretary_02",
    iconBg: "bg-[#fe807d]",
    iconColor: "text-[#74181d]",
    icon: "database",
    name: "Ebha Mollick",
    role: "Backend & DB",
    description:
      "Managing distributed systems and data integrity for high-concurrency applications. Focus on Rust and PostgreSQL optimization.",
    link1Icon: "alternate_email",
    link2Icon: "data_object",
  },
  {
    ref_id: "TE_Member_01",
    iconBg: "bg-[#e3e2e0]",
    iconColor: "text-[#1A1C1A]",
    icon: "cloud",
    name: "Mohit Kumar Sharma",
    role: "Cloud & Infra",
    description:
      "Scalability architect specializing in Kubernetes, AWS, and serverless edge computing. Designing resilient digital foundations.",
    link1Icon: "alternate_email",
    link2Icon: "dns",
  },
  {
    ref_id: "TE_Member_02",
    iconBg: "bg-[#006565]",
    iconColor: "text-white",
    icon: "token",
    name: "Shreya Prasad",
    role: "Web3 Architect",
    description:
      "Blockchain engineer focusing on smart contract security and decentralized governance models. Building the trustless web.",
    link1Icon: "alternate_email",
    link2Icon: "link",
  },
  {
    ref_id: "Joint_Secretary_01",
    iconBg: "bg-[#1A1C1A]",
    iconColor: "text-[#faf9f6]",
    icon: "view_quilt",
    name: "Pradeep Kumar",
    role: "Lead UI/UX",
    description:
      "Synthesizing brutalist aesthetics with functional accessibility. Rejecting the standard for the intentional.",
    link1Icon: "alternate_email",
    link2Icon: "brush",
  },
  {
    ref_id: "Joint_Secretary_02",
    iconBg: "bg-[#A33B3C]",
    iconColor: "text-white",
    icon: "layers",
    name: "Abhay Singh",
    role: "Graphics",
    description:
      "Creating visual assets that exist on the edge of technical documentation and abstract expressionism. 3D and 2D fusion.",
    link1Icon: "alternate_email",
    link2Icon: "palette",
  },
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

      {/* Team Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", border: "2px solid #1A1C1A", marginBottom: "48px" }}>
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.ref_id} {...member} />
        ))}
      </div>

      {/* Chapter Banner */}
      <div style={{ backgroundColor: "#006565", border: "2px solid #1A1C1A", padding: "48px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "32px" }}>
        <div>
          <h3 style={{ fontSize: "32px", fontWeight: "900", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "12px" }}>CIDC STUDENT CHAPTER</h3>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", maxWidth: "500px", lineHeight: "1.6" }}>We are always scouting for engineers and visual thinkers. Share your ideas, showcase your project. Join us to build the AIT smart, ping us builders. </p>
        </div>
        <a href="#contact" style={{ backgroundColor: "#1A1C1A", color: "white", padding: "16px 32px", fontWeight: "bold", textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.1em", border: "2px solid white", textDecoration: "none", display: "inline-block", transition: "all 0.2s ease", cursor: "pointer" }}>
          JOIN
        </a>
      </div>
    </section>
  );
}
