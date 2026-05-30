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
        y: -12, // Card smoothly lift hoga marquee ke andar hi
        scale: 1.05, // Halka sa zoom
        zIndex: 50, // Baaki chalte hue cards ke upar tairne lagega
        borderColor: "#006565", // Border ka rang teal ho jayega
        boxShadow: "12px 12px 0px 0px rgba(0, 101, 101, 1)" // Black shadow teal shadow ban jayegi
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 22 
      }}
      style={{ 
        backgroundColor: "#faf9f6", 
        padding: "16px", 
        border: "2px solid #1A1C1A", 
        position: "relative", 
        display: "flex", 
        flexDirection: "column", 
        width: "240px", 
        flexShrink: 0, 
        gap: "16px", 
        borderRadius: "6px",
        cursor: "pointer",
        boxShadow: "4px 4px 0px 0px rgba(26,28,26,0.15)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease"
      }}
    >
      {/* Photo Container */}
      <div style={{ width: "100%", height: "208px", backgroundColor: "#e3e2de", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        
        {/* Hover par image frame ke andar halki si scale hogi (Google AI studio style) */}
        <motion.div 
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={image}
            alt={`${name}'s photo`}
            fill
            sizes="240px"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
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
    </motion.div>
  );
}