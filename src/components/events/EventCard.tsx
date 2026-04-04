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
  
  return (
    <div className={`border-2 border-[#1A1C1A] flex flex-col ${isTeal ? "bg-[#008080]" : "bg-[#faf9f6]"}`}>
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="font-mono text-[9px] uppercase tracking-widest text-[#1A1C1A]/40">
            {ref_id}
          </div>
          <div className={`px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest border border-[#1A1C1A] ${
            status === "ACTIVE" ? "bg-[#006565] text-white" : 
            status === "PENDING" ? "bg-white text-[#1A1C1A]/40" : 
            "bg-[#A33B3C] text-white"
          }`}>
            {status}
          </div>
        </div>
        
        <h3 className={`text-2xl sm:text-3xl font-black uppercase mb-2 tracking-tight ${isTeal ? "text-white" : "text-[#1A1C1A]"}`}>
          {title}
        </h3>
        <p className={`font-mono text-[10px] uppercase tracking-widest mb-6 ${isTeal ? "text-white/60" : "text-[#006565]"} font-bold`}>
          Dates: {date}
        </p>
        <p className={`text-xs mb-8 leading-relaxed font-medium ${isTeal ? "text-white/80" : "text-[#1A1C1A]/70"}`}>
          {description}
        </p>
        
        <button className={`w-full py-4 border-2 border-[#1A1C1A] font-black uppercase tracking-widest text-xs transition-colors ${
          isTeal ? "bg-transparent text-white hover:bg-white hover:text-[#008080]" : 
          status === "ACTIVE" ? "bg-transparent text-[#1A1C1A] hover:bg-[#006565] hover:text-white" :
          "bg-white text-[#1A1C1A] hover:bg-[#1A1C1A] hover:text-white"
        }`}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
