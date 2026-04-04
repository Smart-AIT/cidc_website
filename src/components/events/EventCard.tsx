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
  const statusBg =
    status === "ACTIVE"
      ? "bg-[#006565] text-white"
      : status === "PENDING"
        ? "border border-[#1A1C1A] text-[#1A1C1A]"
        : "bg-[#A33B3C] text-white";

  const cardBg =
    variant === "teal"
      ? "bg-[#008080] border-2 border-[#1A1C1A] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:-translate-y-1 hover:-translate-x-1 transition-transform group relative overflow-hidden"
      : variant === "light"
        ? "bg-[#f4f3f1] border-2 border-[#1A1C1A] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:-translate-y-1 hover:-translate-x-1 transition-transform group"
        : "bg-[#faf9f6] border-2 border-[#1A1C1A] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:-translate-y-1 hover:-translate-x-1 transition-transform group";

  const textColor = variant === "teal" ? "text-white" : "text-[#1A1C1A]";
  const subTextColor = variant === "teal" ? "text-[#e3fffe]" : "text-[#3e4949]";
  const dateColor =
    variant === "teal"
      ? "text-[#e3fffe]"
      : status === "ACTIVE"
        ? "text-[#A33B3C]"
        : "text-[#006565]";

  const ctaBg =
    variant === "teal"
      ? "w-full bg-white text-[#006565] py-3 font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:bg-[#A33B3C] hover:text-white transition-all"
      : status === "ACTIVE"
        ? "w-full bg-[#006565] text-white py-3 font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        : "w-full border-2 border-[#1A1C1A] text-[#1A1C1A] py-3 font-bold uppercase tracking-widest text-xs sm:text-sm shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:bg-[#1A1C1A] hover:text-white transition-all";

  return (
    <div className={cardBg}>
      {variant === "teal" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#1a1c1a 10%, transparent 10%)",
            backgroundSize: "10px 10px",
            opacity: 0.05,
          }}
        />
      )}
      <div className={`relative z-10`}>
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <span className={`text-[0.6rem] sm:text-[0.65rem] font-bold font-mono uppercase ${variant === "teal" ? "text-white/70" : "text-[#3e4949]"}`}>
            {ref_id}
          </span>
          <span className={`text-[0.6rem] sm:text-[0.65rem] font-bold px-2 py-1 uppercase tracking-widest ${statusBg}`}>
            {status}
          </span>
        </div>
        <h3 className={`text-xl sm:text-3xl font-black uppercase mb-2 transition-colors ${textColor}`}>
          {title}
        </h3>
        <p className={`font-bold mb-4 sm:mb-6 font-mono text-xs sm:text-sm ${dateColor}`}>{date}</p>
        <p className={`mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base ${subTextColor}`}>{description}</p>
        <div className={`h-[2px] w-1/3 mb-4 sm:mb-6 ${variant === "teal" ? "bg-white" : status === "ACTIVE" ? "bg-[#A33B3C]" : "bg-[#1A1C1A]"}`} />
        <button type="button" className={ctaBg}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
