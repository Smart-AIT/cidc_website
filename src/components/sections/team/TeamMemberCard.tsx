// Individual team member card
"use client";
import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  instagram: string;
  linkedin: string;
  image: string;
  badge?: string;
}

export default function TeamMemberCard({
  image,
  name,
  role,
  instagram,
  linkedin,
  badge,
}: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -12,
        scale: 1.03,
        zIndex: 50,
        borderColor: "#006565",
        boxShadow: "10px 10px 0px 0px #006565",
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 20,
      }}
      className="group"
      style={{
        backgroundColor: "#faf9f6",
        padding: "16px",
        border: "2px solid #1A1C1A",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "260px",
        flexShrink: 0,
        gap: "14px",
        borderRadius: "0px", // Strict sharp corners from Stitch design
        cursor: "pointer",
        boxShadow: "4px 4px 0px 0px #1A1C1A",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* Floating Badge (Centered at top edge, matching Stitch design) */}
      {badge && (
        <span
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#A33B3C",
            color: "white",
            fontFamily: "monospace",
            fontSize: "8px",
            fontWeight: 900,
            padding: "3px 10px",
            border: "2px solid #1A1C1A",
            borderRadius: "0px", // Strict sharp corners
            textTransform: "uppercase",
            zIndex: 50,
            boxShadow: "2px 2px 0px 0px #1A1C1A",
            whiteSpace: "nowrap",
          }}
        >
          {badge}
        </span>
      )}

      {/* 1. Card Header Chrome (Window controls style from Stitch design) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingBottom: "4px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          {/* OS-style header dots */}
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#A33B3C",
              border: "1px solid #1A1C1A",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#d48c50",
              border: "1px solid #1A1C1A",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#006565",
              border: "1px solid #1A1C1A",
            }}
          />
        </div>
        <span
          className="group-hover:text-[#006565] transition-colors"
          style={{
            fontFamily: "monospace",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "#6e7979",
          }}
        >
          // CIDC_NODE_SYS
        </span>
      </div>

      {/* Internal Image Frame with solid perimeters & hover effects */}
      <div
        style={{
          borderTop: "2px solid #1A1C1A",
          paddingTop: "14px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            border: "2px solid #1A1C1A",
            backgroundColor: "#e3e2de",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            height: "240px",
            borderRadius: "0px", // Strict sharp corners
          }}
        >
          <motion.div
            animate={{ scale: isHovered ? 1.04 : 1 }}
            transition={{ duration: 0.25 }}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              filter: isHovered ? "grayscale(0%)" : "grayscale(30%)",
              transition: "filter 0.5s ease",
            }}
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
      </div>

      {/* Identity Details Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h3
          style={{
            fontSize: "19px",
            fontWeight: "900",
            color: "#1A1C1A",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {name}
        </h3>

        {/* Role Chip with indicator dot */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              border: "1.5px solid #1A1C1A",
              padding: "3px 8px",
              backgroundColor: "#006565",
              color: "white",
              borderRadius: "0px", // Strict sharp corners
              boxShadow: "1px 1px 0px 0px #1A1C1A",
            }}
          >
            <p
              style={{
                fontWeight: "900",
                textTransform: "uppercase",
                fontSize: "9px",
                letterSpacing: "0.08em",
                margin: 0,
              }}
            >
              {role}
            </p>
          </div>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#1A1C1A",
            }}
          />
        </div>
      </div>

      {/* Footer Interface Actions */}
      <div
        style={{
          display: "flex",
          gap: "14px",
          marginTop: "auto",
          paddingTop: "12px",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "2px solid #1A1C1A",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1C1A] hover:text-[#A33B3C] transition-all hover:-translate-y-0.5"
          >
            <FaInstagram className="w-4.5 h-4.5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1C1A] hover:text-[#006565] transition-all hover:-translate-y-0.5"
          >
            <FaLinkedin className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* Location badge from Stitch */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div
            style={{ width: "6px", height: "6px", backgroundColor: "#6e7979" }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "8px",
              color: "#6e7979",
              fontWeight: "bold",
              letterSpacing: "0.1em",
            }}
          >
            LOC_AITP
          </span>
        </div>
      </div>
    </motion.div>
  );
}
