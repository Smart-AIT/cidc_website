// Hero Bento Stats Strip
export default function HeroStats() {
  return (
    <div className="w-full mt-10 sm:mt-12 border-2 border-[#1A1C1A] shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] bg-white relative">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#1A1C1A]">
          {/* Stat 1 */}
          <div className="p-10 sm:p-12 md:p-14">
            <h3 className="font-black text-4xl sm:text-5xl mb-2 tabular-nums leading-none">
              24/7<span className="text-[#A33B3C] uppercase text-2xl ml-1">UP</span>
            </h3>
            <p className="text-[11px] sm:text-[12px] uppercase tracking-widest font-bold text-[#1A1C1A]/50 mt-2">
              Innovation Lab
            </p>
          </div>
          {/* Stat 2 */}
          <div className="p-10 sm:p-12 md:p-14">
            <h3 className="font-black text-4xl sm:text-5xl mb-2 tabular-nums text-[#1A1C1A] leading-none">
              02<span className="text-[#006565] text-4xl ml-1">+</span>
            </h3>
            <p className="text-[11px] sm:text-[12px] uppercase tracking-widest font-bold text-[#1A1C1A]/50 mt-2">
              Active Projects
            </p>
          </div>
          {/* Stat 3 */}
          <div className="p-10 sm:p-12 md:p-14">
            <h3 className="font-black text-4xl sm:text-5xl mb-2 tabular-nums leading-none">
              <span className="text-[#1A1C1A]">012</span>
              <span className="text-[#A33B3C] text-2xl ml-1">BUILDERS</span>
            </h3>
            <p className="text-[11px] sm:text-[12px] uppercase tracking-widest font-bold text-[#1A1C1A]/50 mt-2">
              Community
            </p>
          </div>
        </div>

        {/* Terminal strip */}
        <div className="p-6 sm:p-10 border-t-2 border-[#1A1C1A] border-dashed bg-[#faf9f6]">
          <div className="font-mono text-[11px] sm:text-[12px] text-[#1A1C1A]/70 space-y-1.5">
            <p>&gt;&gt; cat mission.txt &quot;Learn. Build. Ship. Repeat...&quot; [CONSTANT]</p>
            <p>&gt;&gt; establishing dev community... [ACTIVE]</p>
            <div className="flex justify-between items-center pt-2">
              <p>&gt;&gt; cidc --version</p>
              <p className="font-black text-[#1A1C1A]">CIDC_v4.0 | Building Developers, Not Just Coders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
