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
    <div className="bg-[#faf9f6] p-8 border border-[#1A1C1A] hover:bg-[#efeeeb] transition-colors duration-75 relative group">
      <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-widest text-[#1A1C1A]/40">
        {ref_id}
      </span>

      {/* Icon */}
      <div className="mb-10 flex justify-start">
        <div
          className={`w-14 h-14 ${iconBg} flex items-center justify-center border-2 border-[#1A1C1A]`}
        >
          <span className={`material-symbols-outlined ${iconColor} text-3xl`}>
            {icon}
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-black text-[#1A1C1A] mb-1 uppercase tracking-tight">
        {name}
      </h3>
      <p className="text-[#006565] font-black uppercase text-[10px] tracking-[0.15em] mb-4">
        {role}
      </p>
      <p className="text-xs text-[#1A1C1A]/70 mb-8 leading-relaxed font-medium">
        {description}
      </p>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-[#006565] text-white w-10 h-10 border-2 border-[#1A1C1A] flex items-center justify-center hover:bg-[#1A1C1A] transition-colors"
        >
          <span className="material-symbols-outlined text-sm">{link1Icon}</span>
        </button>
        <button
          type="button"
          className="bg-white text-[#1A1C1A] w-10 h-10 border-2 border-[#1A1C1A] flex items-center justify-center hover:bg-[#1A1C1A] hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-sm">{link2Icon}</span>
        </button>
      </div>
    </div>
  );
}
