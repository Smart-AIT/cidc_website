import { image, object } from "framer-motion/client";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import Image from "next/image";

const PROJECT_LIST = [
  { name: "AIT Website", desc: "Official website of Army Institute of Technology, Pune.", image: "/projects/ait.png", style: { objectFit: "cover" } },
  { name: "Sniffi", desc: "A home veterinary service platform that provides expert pet healthcare at your doorstep, including consultations, vaccinations, wellness checkups, and diagnostics—making pet care convenient, stress-free, and personalized.", image: "/projects/sniffi2.png", style: { objectFit: "cover" } },
  { name: "PROJAK", desc: "A consulting and technology platform that helps organizations grow through data-driven insights and strategic execution.", image: "/projects/projak.png", style: { objectFit: "cover" } },
  { name: "SUGGEST", desc: "A book discovery platform powered by video reviews, AI summaries, and community insights.", image: "/projects/suggest.png", style: { objectFit: "contain" } },
  { name: "AIT Smart Labs", desc: "A smart lab management system for creating and managing QR codes to streamline access and tracking.", image: "/projects/aitsmartlab.png", style: { objectFit: "contain" } },
  { name: "SendBox", desc: "An automated WhatsApp messaging system for sending personalized well wishes to staff and students.", image: "/projects/sendbox.png", style: { objectFit: "contain" } },
];

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        .projects-section-root {
          width: 100%;
          padding: 60px 40px 120px 40px;
          border-top: 2px solid #1A1C1A;
          background-color: #faf9f6;
        }
        @media (max-width: 640px) {
          .projects-section-root {
            padding: 40px 16px 80px 16px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .projects-section-root {
            padding: 48px 24px 100px 24px;
          }
        }
      `}</style>
      <section id="projects" className="projects-section-root">
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
                    <img src={proj.image} alt={proj.name} className="w-full h-full object-cover" />
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

        </div>
      </section>
    </>
  );
}
