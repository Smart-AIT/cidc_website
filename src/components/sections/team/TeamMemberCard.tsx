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
        border: "1px solid rgba(26, 28, 26, 0.15)", 
        display: "flex", 
        flexDirection: "column", 
        width: "240px", 
        flexShrink: 0, 
        gap: "12px", 
        borderRadius: "16px", 
        position: "relative",
        boxShadow: isFaculty ? "none" : "0px 8px 24px rgba(26, 28, 26, 0.04)", // Moti shadow ko patla aur soft kiya
        transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease" 
      }}
      className="hover:-translate-y-1 hover:shadow-md"
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
        <p style={{ color: "#006565", fontFamily: "monospace", fontSize: "10px", fontWeight: "bold", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {role}
        </p>
      </div>

      {/* Social Footer */}
      <div style={{ display: "flex", gap: "12px", marginTop: "auto", paddingTop: "4px" }}>
        {/* Instagram Icon */}
        {!isFaculty && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#1A1C1A", opacity: 0.6 }} className="hover:opacity-100 transition-opacity">
            <FaInstagram className="w-4 h-4" />
          </a>
        )}
        
        {/* LinkedIn Icon */}
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#1A1C1A", opacity: 0.6 }} className="hover:opacity-100 transition-opacity">
          <FaLinkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}