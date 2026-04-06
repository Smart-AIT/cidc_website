// Individual event card
interface EventCardProps {
  ref_id: string;
  status: "ACTIVE" | "PENDING" | "Upcoming";
  title: string;
  date: string;
  description: string;
  ctaLabel: string;
  variant?: "default" | "light" | "teal";
}

export default function EventCard({
  ref_id,
  status,
  title,
  date,
  description,
  ctaLabel,
  variant = "default",
}: EventCardProps) {
  const isDark = variant === "default";
  const isTeal = variant === "teal";
  
  const bgColor = isTeal ? "#008080" : "#faf9f6";
  const textColor = isTeal ? "white" : "#1A1C1A";
  const dateColor = isTeal ? "rgba(255, 255, 255, 0.6)" : "#006565";
  const descriptionColor = isTeal ? "rgba(255, 255, 255, 0.8)" : "rgba(26, 28, 26, 0.7)";
  
  const statusBgColor = 
    status === "ACTIVE" ? "#006565" :
    status === "PENDING" ? "white" :
    "#A33B3C";
  const statusTextColor =
    status === "ACTIVE" ? "white" :
    status === "PENDING" ? "rgba(26, 28, 26, 0.4)" :
    "white";
  
  return (
    <div style={{ border: "2px solid #1A1C1A", display: "flex", flexDirection: "column", backgroundColor: bgColor }}>
      <div style={{ padding: "32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(26, 28, 26, 0.4)" }}>
            {ref_id}
          </div>
          <div style={{ padding: "4px 8px", fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", border: "1px solid #1A1C1A", backgroundColor: statusBgColor, color: statusTextColor, fontWeight: "bold" }}>
            {status}
          </div>
        </div>
        
        <h3 style={{ fontSize: "24px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "-0.01em", color: textColor }}>
          {title}
        </h3>
        
        <div style={{ width: "120px", height: "3px", backgroundColor: "#A33B3C", marginBottom: "16px" }}></div>
        
        <p style={{ fontFamily: "monospace", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px", color: dateColor, fontWeight: "bold" }}>
          {date}
        </p>
        <p style={{ fontSize: "13px", marginBottom: "32px", lineHeight: "1.6", fontWeight: "500", color: descriptionColor }}>
          {description}
        </p>
        
        <button style={{ padding: "10px 24px", border: "2px solid #1A1C1A", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "12px", cursor: "pointer", backgroundColor: isTeal ? "transparent" : status === "ACTIVE" ? "#006565" : "white", color: isTeal ? "white" : status === "ACTIVE" ? "white" : "#1A1C1A", borderRadius: "12px", display: "inline-block" }}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
