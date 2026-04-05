// Individual team member card
interface TeamMemberProps {
  ref_id: string;
  name: string;
  role: string;
  instagram: string;
  email: string;
}

export default function TeamMemberCard({
  ref_id,
  name,
  role,
  instagram,
  email,
}: TeamMemberProps) {
  return (
    <div style={{ backgroundColor: "#faf9f6", padding: "16px", border: "2px solid #1A1C1A", position: "relative", display: "flex", flexDirection: "column", width: "240px", flexShrink: 0, gap: "16px", boxShadow: "4px 4px 0px 0px rgba(26,28,26,0.1)" }}>
      {/* Photo Placeholder */}
      <div style={{ width: "100%", aspectRatio: "1/1", backgroundColor: "#e3e2e0", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {/* Top-Right Ref ID Badge */}
        <div style={{ position: "absolute", top: "8px", right: "8px", backgroundColor: "#faf9f6", border: "1px solid #1A1C1A", padding: "2px 6px" }}>
          <span style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1A1C1A", fontWeight: "bold" }}>
            {ref_id}
          </span>
        </div>
        <span style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(26,28,26,0.3)", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "0.1em" }}>PHOTO_SPACE</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#1A1C1A", textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0, lineHeight: 1.2 }}>
          {name}
        </h3>
        <p style={{ color: "#006565", fontWeight: "900", textTransform: "uppercase", fontSize: "10px", letterSpacing: "0.1em", margin: 0 }}>
          {role}
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "auto", paddingTop: "8px" }}>
        <a href={instagram} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#1A1C1A", color: "white", flex: 1, padding: "8px", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", textDecoration: "none", transition: "all 0.2s ease" }} className="hover:bg-[#A33B3C] hover:-translate-y-1">
          <span style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>INSTA</span>
        </a>
        <a href={`mailto:${email}`} style={{ backgroundColor: "white", color: "#1A1C1A", flex: 1, padding: "8px", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", textDecoration: "none", transition: "all 0.2s ease" }} className="hover:bg-[#e3e2e0] hover:-translate-y-1">
          <span style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>EMAIL</span>
        </a>
      </div>
    </div>
  );
}
