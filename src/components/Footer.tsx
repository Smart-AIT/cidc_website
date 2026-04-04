export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full px-4 sm:px-8 py-8 sm:py-12 flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between items-start sm:items-end bg-[#FAF9F6] border-t-4 border-[#1A1C1A] mt-8 sm:mt-12 tabular-nums text-[0.65rem] sm:text-[0.75rem] tracking-widest uppercase"
    >
      {/* Left: Brand + Copyright */}
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="text-base sm:text-lg font-black text-[#1A1C1A]">CIDC_COLLECTIVE</div>
        <div className="text-[#1A1C1A]/60 text-[0.6rem] sm:text-[0.75rem] leading-relaxed">
          ©2026 COLLEGE INNOVATION<br className="sm:hidden" /> &amp; DEVELOPMENT CLUB<br className="sm:hidden" /> // SYSTEM_STATUS: OPERATIONAL
        </div>
      </div>

      {/* Right: Links + Status */}
      <div className="flex gap-4 sm:gap-8 items-end">
        <div className="flex flex-col gap-2 items-start sm:items-end">
          <a
            href="#"
            className="text-[#1A1C1A]/60 hover:text-[#A33B3C] underline decoration-2 underline-offset-4 transition-colors"
          >
            REF_001_TERMS
          </a>
          <a
            href="#"
            className="text-[#1A1C1A]/60 hover:text-[#A33B3C] underline decoration-2 underline-offset-4 transition-colors"
          >
            REF_002_PRIVACY
          </a>
          <a
            href="#"
            className="text-[#1A1C1A]/60 hover:text-[#A33B3C] underline decoration-2 underline-offset-4 transition-colors"
          >
            STATION_MAP
          </a>
        </div>
        <div className="w-px h-12 sm:h-16 bg-[#1A1C1A]/20" />
        <div className="text-[#006565] text-right font-black text-[0.6rem] sm:text-[0.75rem]">
          CIDC_04<br />JOIN US TODAY
        </div>
      </div>
    </footer>
  );
}
