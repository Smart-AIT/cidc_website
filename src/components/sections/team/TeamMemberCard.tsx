"use client";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  role: string;
  instagram: string;
  linkedin: string;
  image: string;
  isFaculty?: boolean;
}

export default function TeamMemberCard({
  image,
  name,
  role,
  instagram,
  linkedin,
  isFaculty = false,
}: TeamMemberProps) {
  // Strict case-insensitive uniform matching
  const normalizedName = name.trim().toUpperCase();
  
  // SECRETARY BADGE LOGIC
  const isSecretary = normalizedName.includes("(SECRETARY)") || normalizedName.includes("ABHAY SINGH");
  
  // EX-SECRETARY BADGE LOGIC
  const isExSecretary = normalizedName.includes("JAGDISH SINGH") || normalizedName.includes("EBHA MOLLICK");
  
  // Render hone waala original name bina parenthesis text ke clean karega
  const cleanedName = normalizedName.includes("(SECRETARY)")
    ? name.replace(/\s*\(secretary\)\s*/i, "").trim() 
    : name;

  return (
    <div 
      style={{ 
        position: "relative", 
        display: "inline-block",
        marginTop: "0px", 
        paddingTop: "16px" 
      }}
    >
      {/* Top Capsule Badge for Active Secretary (Abhay Singh) */}
      {isSecretary && (
        <div
          style={{
            position: "absolute",
            top: "0px", 
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#A33B3C",
            color: "white",
            padding: "4px 12px",
            borderRadius: "6px",
            fontSize: "9px",
            fontWeight: "900",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
            zIndex: 10,
            border: "1px solid #1A1C1A",
            boxShadow: "0px 4px 10px rgba(163, 59, 60, 0.2)"
          }}
        >
          SECRETARY
        </div>
      )}

      {/* Top Capsule Badge for Ex-Secretaries (Jagdish Singh & Ebha Mollick) */}
      {isExSecretary && (
        <div
          style={{
            position: "absolute",
            top: "0px", 
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#A33B3C",
            color: "white",
            padding: "4px 12px",
            borderRadius: "6px",
            fontSize: "9px",
            fontWeight: "900",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
            zIndex: 10,
            border: "1px solid #1A1C1A",
            boxShadow: "0px 4px 10px rgba(163, 59, 60, 0.2)"
          }}
        >
          EX-SECRETARY
        </div>
      )}

      <div 
        style={{ 
          backgroundColor: "#FAF9F6", 
          padding: "24px 16px 16px 16px", 
          border: "1px solid rgba(26, 28, 26, 0.15)", 
          display: "flex", 
          flexDirection: "column", 
          width: "240px", 
          flexShrink: 0, 
          gap: "12px", 
          borderRadius: "16px", 
          position: "relative",
          boxShadow: isFaculty ? "none" : "0px 8px 24px rgba(26, 28, 26, 0.04)"
          /* REMOVED: Blinking aur jumpy transform/transition rules yahan se hataye gaye hain */
        }}
      >
        {/* Mac Style Window Controls */}
        <div style={{ position: "absolute", top: "12px", left: "14px", display: "flex", gap: "6px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF5F56", opacity: 0.85 }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFBD2E", opacity: 0.85 }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#27C93F", opacity: 0.85 }} />
        </div>

        {/* Photo Frame Container */}
        <div 
          style={{ 
            width: "100%", 
            height: "200px", 
            borderRadius: "10px", 
            overflow: "hidden", 
            position: "relative", 
            border: "1px solid rgba(26, 28, 26, 0.1)", 
            marginTop: "4px" 
          }}
        >
          <Image
            src={image}
            alt={`${cleanedName}'s photo`}
            fill
            sizes="240px"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Content Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#1A1C1A", textTransform: "uppercase", margin: 0, lineHeight: 1.2 }}>
            {cleanedName}
          </h3>
          <p style={{ color: "#006565", fontFamily: "monospace", fontSize: "10px", fontWeight: "bold", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {role}
          </p>
        </div>

        {/* Social Footer */}
        <div style={{ display: "flex", gap: "14px", marginTop: "auto", paddingTop: "4px" }}>
          {/* LinkedIn Icon */}
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#0A66C2] hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          {/* Instagram Icon */}
          {!isFaculty && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E1306C] hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}