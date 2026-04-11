// Individual team member card
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface TeamMemberProps {
  // ref_id: number;
  name: string;
  role: string;
  instagram: string;
  linkedin: string;
  image: string;
}

export default function TeamMemberCard({
  // ref_id,
  image,
  name,
  role,
  instagram,
  linkedin,
}: TeamMemberProps) {
  return (
    <div style={{ backgroundColor: "#faf9f6", padding: "16px", border: "2px solid #1A1C1A", position: "relative", display: "flex", flexDirection: "column", width: "240px", flexShrink: 0, gap: "16px", boxShadow: "4px 4px 0px 0px rgba(26,28,26,0.1)", borderRadius: "6px" }}>
      {/* Photo Placeholder */}
      <div style={{ width: "100%", height: "208px", backgroundColor: "#e3e2de", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {/* Top-Right Ref ID Badge */}
        {/* <div style={{ position: "absolute", top: "8px", right: "8px", backgroundColor: "#faf9f6", border: "1px solid #1A1C1A", padding: "2px 6px", zIndex: 1 }}> */}
          {/* <span style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1A1C1A", fontWeight: "bold" }}>
            {ref_id}
          </span> */}
        {/* </div> */}
        {/* <span style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(26,28,26,0.3)", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "0.1em" }}>PHOTO_SPACE</span> */}
        <Image
          src={image}
          alt={`${name}'s photo`}
          fill
          sizes="240px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#1A1C1A", textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0, lineHeight: 1.2 }}>
          {name}
        </h3>
        <p style={{ color: "#006565", fontWeight: "900", textTransform: "uppercase", fontSize: "10px", letterSpacing: "0.1em", margin: 0 }}>
          {role}
        </p>
      </div>

      <div style={{ display: "flex", gap: "16px", marginTop: "auto", paddingTop: "8px", justifyContent: "flex-start" }}>
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-[#1A1C1A] hover:text-[#A33B3C] transition-transform hover:scale-110">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1A1C1A] hover:text-[#A33B3C] transition-transform hover:scale-110">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
