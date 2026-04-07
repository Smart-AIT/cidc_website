import { image, object } from "framer-motion/client";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import Image from "next/image";

const PROJECT_LIST = [
  { name: "AIT Website", desc: "Official website of Army Institute of Technology (AIT), providing information about academics, admissions, campus life, events, and resources for students and faculty.", image: "/projects/ait.png", style: { objectFit: "cover" } },
  { name: "Sniffi", desc: "A home veterinary service platform that provides expert pet healthcare at your doorstep, including consultations, vaccinations, wellness checkups, and diagnostics—making pet care convenient, stress-free, and personalized.", image: "/projects/sniffi2.png", style: { objectFit: "cover" } },
  { name: "PROJAK", desc: "A business consulting and technology solutions platform that helps organizations grow through data-driven analysis, expert guidance, strategic planning, and result-oriented execution to maximize efficiency and performance.", image: "/projects/projak.png", style: { objectFit: "cover" } },
  { name: "SUGGEST", desc: "A book discovery platform that helps users explore, review, and recommend books through video reviews, AI-powered summaries, and community-driven insights, making reading more interactive and engaging.", image: "/projects/suggest.png", style: { objectFit: "contain" } },
  { name: "AIT Smart Labs", desc: "A smart lab management system that enables users to create, organize, and manage QR codes for lab resources, helping streamline access, tracking, and digital interaction within laboratory environments.", image: "/projects/aitsmartlab.png", style: { objectFit: "contain" } },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ width: "100%", paddingTop: "60px", paddingBottom: "120px", paddingLeft: "40px", paddingRight: "40px", borderTop: "2px solid #1A1C1A", backgroundColor: "#faf9f6" }}>
      <div style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}>
        {/* Header */}
        <header style={{ marginBottom: "80px" }}>
          <div style={{ width: "80px", height: "4px", backgroundColor: "#A33B3C", marginBottom: "32px" }} />
          <h2 style={{ fontSize: "clamp(2.5rem, 12vw, 5.5rem)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: "0.85", marginBottom: "32px", color: "#1A1C1A" }}>
            ACTIVE<br />MANIFESTO<br />
            <span style={{ color: "#006565" }}>PROJECTS</span>
          </h2>
          <p style={{ fontSize: "14px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em", color: "#1A1C1A", maxWidth: "600px", lineHeight: "1.8" }}>
            A COLLECTION OF REAL-WORLD PROJECTS BUILT BY CIDC COMMUNITY. FOCUSED ON LEARNING, BUILDING, AND DELIVERING IMPACTFUL SOLUTIONS.
            <br />
            <span style={{ marginTop: "16px", display: "block" }}>System version 0.4</span>
          </p>
        </header>

        {/* Scroll Stack */}
        <div style={{ marginTop: "80px" }}>
          <ScrollStack gap={500}>
            {PROJECT_LIST.map((proj, i) => (
              <ScrollStackItem key={i}>
                {/* Title and description on top */}
                <div className="scroll-stack-card-title">{proj.name}</div>
                <div className="scroll-stack-card-divider" />
                <div className="scroll-stack-card-desc">{proj.desc}</div>

                {/* Full-width image block below */}
                <div className="scroll-stack-card-image relative" style={{ marginTop: "40px", marginBottom: "0" }}>
                  {/* <span style={{ fontFamily: "monospace", fontSize: "14px", color: "rgba(26,28,26,0.25)", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "0.15em" }}>PROJECT_IMAGE_{String(i + 1).padStart(2, "0")}</span> */}
                  <img src={proj.image} alt={proj.name}  className={proj.style?.objectFit === "contain" ? "w-full h-full object-contain" : "w-full h-full object-cover"} />
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

      </div>
    </section>
  );
}
