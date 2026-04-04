export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full px-4 sm:px-12 py-12 flex flex-col gap-12 sm:gap-0 sm:flex-row justify-between items-end bg-[#FAF9F6] border-t-2 border-[#1A1C1A] mt-24 tabular-nums text-[9px] font-black tracking-[0.2em] uppercase"
    >
      {/* Left: Brand + Copyright */}
      <div className="flex flex-col gap-4">
        <div className="text-sm font-black text-[#1A1C1A]">CIDC_SLITCH</div>
        <div className="text-[#1A1C1A]/40 leading-relaxed font-bold">
          ©2026 // SYSTEM_STATUS: ACTIVE
        </div>
      </div>

      {/* Right: Links + Status */}
      <div className="flex gap-12 items-end">
        <div className="flex flex-col gap-2 items-end">
          <a
            href="#"
            className="text-[#1A1C1A]/40 hover:text-[#A33B3C] transition-colors"
          >
            REF_001_TERMS
          </a>
          <a
            href="#"
            className="text-[#1A1C1A]/40 hover:text-[#A33B3C] transition-colors"
          >
            REF_002_PRIVACY
          </a>
          <a
            href="#"
            className="text-[#1A1C1A] underline decoration-2 underline-offset-4"
          >
            STATION_MAP
          </a>
        </div>
        <div className="text-right flex flex-col items-end">
          <span className="text-[#1A1C1A]/40">REF_003_v4.0</span>
          <span className="text-[#A33B3C]">CIDC_04</span>
          <span className="text-[#1A1C1A]">JOIN US TODAY</span>
        </div>
      </div>
    </footer>
  );
}
