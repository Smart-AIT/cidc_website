// Individual team member card
interface TeamMemberProps {
  ref_id: string;
  iconBg: string;
  iconColor: string;
  icon: string;
  name: string;
  role: string;
  description: string;
  link1Icon: string;
  link2Icon: string;
}

export default function TeamMemberCard({
  ref_id,
  iconBg,
  iconColor,
  icon,
  name,
  role,
  description,
  link1Icon,
  link2Icon,
}: TeamMemberProps) {
  const bgColorMap: Record<string, string> = {
    "bg-[#008080]": "#008080",
    "bg-[#fe807d]": "#fe807d",
    "bg-[#e3e2e0]": "#e3e2e0",
    "bg-[#006565]": "#006565",
    "bg-[#1A1C1A]": "#1A1C1A",
    "bg-[#A33B3C]": "#A33B3C"
  };

  const colorMap: Record<string, string> = {
    "text-[#e3fffe]": "#e3fffe",
    "text-[#74181d]": "#74181d",
    "text-[#1A1C1A]": "#1A1C1A",
    "text-white": "white"
  };

  const bgColor = bgColorMap[iconBg] || "#1A1C1A";
  const textColor = colorMap[iconColor] || "white";

  return (
    <div style={{ backgroundColor: "#faf9f6", padding: "32px", border: "2px solid #1A1C1A", position: "relative", display: "flex", flexDirection: "column" }}>
      <span style={{ position: "absolute", top: "16px", right: "16px", fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1A1C1A", opacity: "0.4" }}>
        {ref_id}
      </span>

      {/* Icon */}
      <div style={{ marginBottom: "40px", display: "flex", justifyContent: "flex-start" }}>
        <div style={{ width: "56px", height: "56px", backgroundColor: bgColor, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #1A1C1A" }}>
          <span className="material-symbols-outlined" style={{ color: textColor, fontSize: "24px", fontWeight: "400" }}>
            {icon}
          </span>
        </div>
      </div>

      <h3 style={{ fontSize: "20px", fontWeight: "900", color: "#1A1C1A", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
        {name}
      </h3>
      <p style={{ color: "#006565", fontWeight: "900", textTransform: "uppercase", fontSize: "10px", letterSpacing: "0.15em", marginBottom: "16px" }}>
        {role}
      </p>
      <p style={{ fontSize: "12px", color: "#1A1C1A", opacity: "0.7", marginBottom: "32px", lineHeight: "1.6", fontWeight: "500", flex: "1" }}>
        {description}
      </p>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button type="button" style={{ backgroundColor: "#006565", color: "white", width: "40px", height: "40px", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s ease" }}>
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>{link1Icon}</span>
        </button>
        <button type="button" style={{ backgroundColor: "white", color: "#1A1C1A", width: "40px", height: "40px", border: "2px solid #1A1C1A", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s ease" }}>
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>{link2Icon}</span>
        </button>
      </div>
    </div>
  );
}
