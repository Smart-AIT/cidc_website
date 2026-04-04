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
  return (
    <div className="bg-[#faf9f6] p-5 sm:p-8 border border-[#1A1C1A] hover:bg-[#efeeeb] transition-colors duration-75 relative group overflow-hidden">
      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 font-mono text-[0.6rem] sm:text-[0.65rem] text-[#6e7979]">
        {ref_id}
      </span>

      {/* Icon */}
      <div className="mb-6 sm:mb-12 flex justify-start">
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 ${iconBg} flex items-center justify-center border-2 border-[#1A1C1A] shadow-[3px_3px_0px_0px_rgba(26,28,26,1)] sm:shadow-[4px_4px_0px_0px_rgba(26,28,26,1)]`}
          style={{
            backgroundImage:
              "radial-gradient(circle, #0000001a 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        >
          <span className={`material-symbols-outlined ${iconColor} text-2xl sm:text-4xl`}>
            {icon}
          </span>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-1 uppercase tracking-tight">
        {name}
      </h3>
      <p className="text-[#006565] font-bold uppercase text-[0.65rem] sm:text-xs tracking-widest mb-3 sm:mb-4">
        {role}
      </p>
      <div className="h-[2px] bg-[#A33B3C] w-1/3 mb-4 sm:mb-6" />
      <p className="text-xs sm:text-sm text-[#3e4949] mb-6 sm:mb-8 leading-snug">{description}</p>

      {/* Action buttons */}
      <div className="flex gap-3 sm:gap-4">
        <button
          type="button"
          className="bg-[#006565] text-white p-2 border-2 border-[#1A1C1A] shadow-[2px_2px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform"
        >
          <span className="material-symbols-outlined text-sm">{link1Icon}</span>
        </button>
        <button
          type="button"
          className="bg-[#faf9f6] text-[#1A1C1A] p-2 border-2 border-[#1A1C1A] shadow-[2px_2px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform"
        >
          <span className="material-symbols-outlined text-sm">{link2Icon}</span>
        </button>
      </div>
    </div>
  );
}
