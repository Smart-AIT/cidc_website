// Individual team member card
"use client";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  instagram: string;
  linkedin: string;
  image: string;
}

export default function TeamMemberCard({
  image,
  name,
  role,
  instagram,
  linkedin,
}: TeamMemberProps) {
  return (
    <motion.div 
      whileHover={{ 
        y: -14, // Smooth dynamic vertical float
        scale: 1.04, 
        zIndex: 50, 
        borderColor: "#006565", 
        boxShadow: "10px 10px 0px 0px rgba(0, 101, 101, 1)" // Hard neo shadow transition
      }}
      transition={{ 
        type: "spring", 
        stiffness: 450, 
        damping: 20 
      }}
      className="group" // Tailwind group for triggering children state on hover
      style={{ 
        backgroundColor: "#faf9f6", 
        padding: "16px", 
        border: "2px solid #1A1C1A", 
        position: "relative", 
        display: "flex", 
        flexDirection: "column", 
        width: "250px", // Card size thoda clean wrap ke liye adjust kiya
        flexShrink: 0, 
        gap: "14px", 
        borderRadius: "4px", // Custom neo sharpness
        cursor: "pointer",
        boxShadow: "4px 4px 0px 0px rgba(26,28,26,1)", // Default strong dark shadow
        transition: "border-color 0.2s ease, box-shadow 0.2s ease"
      }}
    >
      {/* 1. Cyber Header Bar (ID Badge Pattern) */}
      <div style={{ display: "flex", justifyContent: "between", alignItems: "center", width: "100%", borderBottom: "1.5px dashed #1A1C1A", paddingBottom: "8px", opacity: 0.8 }}>
        <div style={{ display: "flex", gap: "5px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1A1C1A" }}></span>
          <span className="group-hover:bg-[#006565] transition-colors" style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#A33B3C" }}></span>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#e3e2de" }}></span>
        </div>
        <span className="group-hover:text-[#006565] transition-colors" style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: "8px", fontWeight: 900, letterSpacing: "0.05em", color: "#1A1C1A" }}>
          // CIDC_NODE_SYS
        </span>
      </div>

      {/* Photo Container */}
      <div style={{ width: "100%", height: "210px", backgroundColor: "#e3e2de", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", borderRadius: "2px" }}>
        
        {/* Soft layout overlay gradient effect */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(26,28,26,0.15) 100%)", zIndex: 10, pointerEvents: "none" }} />

        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25 }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={image}
            alt={`${name}'s photo`}
            fill
            sizes="250px"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>

      {/* Text Context Structure */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h3 style={{ fontSize: "17px", fontWeight: "900", color: "#1A1C1A", textTransform: "uppercase", letterSpacing: "-0.02em", margin: 0, lineHeight: 1.15 }}>
          {name}
        </h3>
        
        {/* Modern Custom Badge Block for Role */}
        <div style={{ display: "inline-flex", alignSelf: "flex-start", border: "1.5px solid #1A1C1A", padding: "2px 8px", backgroundColor: "#006565", color: "white", borderRadius: "4px" }}>
          <p style={{ fontWeight: "900", textTransform: "uppercase", fontSize: "9px", letterSpacing: "0.08em", margin: 0 }}>
            {role}
          </p>
        </div>
      </div>

      {/* Footer Interface Actions */}
      <div style={{ display: "flex", gap: "14px", marginTop: "auto", paddingTop: "8px", justifyContent: "space-between", alignItems: "center", borderTop: "1.5px dashed rgba(26,28,26,0.1)" }}>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-[#1A1C1A] hover:text-[#A33B3C] transition-all hover:-translate-y-0.5">
            <FaInstagram className="w-4.5 h-4.5" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1A1C1A] hover:text-[#006565] transition-all hover:-translate-y-0.5">
            <FaLinkedin className="w-4.5 h-4.5" />
          </a>
        </div>
        
        {/* Subtle decorative graphic */}
        <span style={{ fontFamily: "monospace", fontSize: "9px", color: "#1A1C1A", opacity: 0.3, fontWeight: "bold" }}>
          ■ LOC_AITP
        </span>
      </div>
    </motion.div>
  );
}