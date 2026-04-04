// Hero Bento Stats Strip
export default function HeroStats() {
  return (
    <div className="mt-8 sm:mt-24 border-2 border-[#1A1C1A] p-4 sm:p-8 bg-white relative shadow-[4px_4px_0px_0px_rgba(26,28,26,1)]">
      <div className="flex flex-col h-full justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Stat 1 */}
          <div>
            <h3 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-4 tabular-nums">
              24/7<span className="text-[#A33B3C]">UP</span>
            </h3>
            <p className="text-xs uppercase tracking-widest opacity-60">
              Innovation Lab
            </p>
          </div>
          {/* Stat 2 */}
          <div>
            <h3 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-4 tabular-nums">
              02<span className="text-[#006565]">+</span>
            </h3>
            <p className="text-xs uppercase tracking-widest opacity-60">
              Active Projects
            </p>
          </div>
          {/* Stat 3 */}
          <div>
            <h3 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-4 tabular-nums">
              <span className="text-[#1A1C1A]">012</span>
              <span className="text-[#A33B3C]">BUILDERS</span>
            </h3>
            <p className="text-xs uppercase tracking-widest opacity-60">
              Community
            </p>
          </div>
        </div>

        {/* Terminal strip */}
        <div className="mt-6 sm:mt-12 p-4 sm:p-6 border-t-2 border-[#1A1C1A] border-dashed overflow-x-auto">
          <p className="font-mono text-[0.65rem] sm:text-xs text-[#3e4949] whitespace-nowrap sm:whitespace-normal">
            {">> "}cat mission.txt &quot;Learn. Build. Ship. Repeat...&quot;[CONSTANT]
            <br />
            {">> "}establishing dev community... [ACTIVE]
            <br />
            {">> "}cidc --version
            <br />
            CIDC v4.0 | Building Developers, Not Just Coders
          </p>
        </div>
      </div>
    </div>
  );
}
