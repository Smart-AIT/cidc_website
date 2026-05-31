"use client";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  role: string;
  instagram: string;
  linkedin: string;
  image: string;
  isFaculty?: boolean; // Prop to visually alter faculty card wrapper
}

export default function TeamMemberCard({
  image,
  name,
  role,
  instagram,
  linkedin,
  isFaculty = false,
}: TeamMemberProps) {
  return (
    <div 
      style={{ 
        backgroundColor: "#FAF9F6", 
        padding: "24px 16px 16px 16px", 
        border: isFaculty ? "1.5px solid rgba(26, 28, 26, 0.15)" : "2px solid #1A1C1A", 
        display: "flex", 
        flexDirection: "column", 
        width: "240px", 
        flexShrink: 0, 
        gap: "12px", 
        borderRadius: "12px", 
        position: "relative",
        boxShadow: isFaculty ? "none" : "6px 6px 0px #1A1C1A", // Faculty box-shadow disabled
        transition: "none" 
      }}
    >
      {/* Mac Style Window Controls - Now visible on ALL cards (including Faculty) */}
      <div style={{ position: "absolute", top: "10px", left: "14px", display: "flex", gap: "6px" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
      </div>

      {/* Photo Frame Container */}
      <div 
        style={{ 
          width: "100%", 
          height: "200px", 
          borderRadius: "8px", 
          overflow: "hidden", 
          position: "relative", 
          border: isFaculty ? "1px solid rgba(26, 28, 26, 0.2)" : "1px solid #1A1C1A", 
          marginTop: "4px" // Kept uniform spacing for Mac buttons context
        }}
      >
        <Image
          src={image}
          alt={`${name}'s photo`}
          fill
          sizes="240px"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content Details */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#1A1C1A", textTransform: "uppercase", margin: 0, lineHeight: 1.2 }}>
          {name}
        </h3>
        <p style={{ color: "#006565", fontFamily: "monospace", fontSize: "9px", fontWeight: "bold", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {role}
        </p>
      </div>

      {/* Social Footer */}
      <div style={{ display: "flex", gap: "12px", marginTop: "auto", paddingTop: "4px" }}>
        {/* Instagram Icon - Shows ONLY if it is NOT a faculty card */}
        {!isFaculty && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#1A1C1A", opacity: 0.6 }} className="hover:opacity-100 transition-opacity">
            <FaInstagram className="w-4 h-4" />
          </a>
        )}
        
        {/* LinkedIn Icon - Shows for everyone */}
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#1A1C1A", opacity: 0.6 }} className="hover:opacity-100 transition-opacity">
          <FaLinkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}