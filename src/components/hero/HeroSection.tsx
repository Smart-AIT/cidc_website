import HeroStats from "./HeroStats";

export default function HeroSection() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
      {/* Main Hero Card */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#1A1C1A] bg-[#faf9f6] overflow-hidden shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] sm:shadow-[8px_8px_0px_0px_rgba(26,28,26,1)]">
        {/* Left Branding Column */}
        <div className="lg:col-span-7 p-5 sm:p-8 md:p-16 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1A1C1A] relative">
          {/* Label */}
          <div className="font-mono text-[0.65rem] sm:text-[0.75rem] tracking-widest opacity-40 uppercase mb-2">
            &gt;&gt;git_init_cidc
          </div>

          {/* Headline */}
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] leading-[0.95] font-black tracking-tighter mb-4 sm:mb-8 uppercase">
            INNOVATION{" "}
            <span className="text-[#006565] italic">THROUGH</span>
            <br />
            DEVELOPMENT_
          </h1>

          {/* Accent bar */}
          <div className="w-16 sm:w-24 h-2 bg-[#A33B3C] mb-4 sm:mb-8" />

          {/* Description */}
          <p className="text-sm sm:text-lg max-w-lg mb-6 sm:mb-12 leading-relaxed text-[#1A1C1A]">
            CIDC follows a project-based learning approach to give members real
            production and practical exposure while contributing to the
            college&apos;s overall development. This helps students build strong
            technical and collaboration skills early, while also giving them
            opportunities to actively contribute to meaningful college
            initiatives.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/cidc_aitpune"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006565] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all active:translate-x-0 active:translate-y-0 text-center text-sm sm:text-base"
            >
              @cidc_aitpune
            </a>
            <a
              href="#contact"
              className="bg-[#faf9f6] text-[#1A1C1A] px-6 sm:px-8 py-3 sm:py-4 font-bold border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all active:translate-x-0 active:translate-y-0 text-center text-sm sm:text-base"
            >
              Join us
            </a>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-5 bg-[#e3e2e0] relative min-h-[250px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Halftone pattern */}
          <div
            className="absolute inset-0 opacity-20 text-[#6e7979]"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />

          {/* CIDC Logo */}
          <div className="relative z-10">
            <div className="flex flex-col items-center">
              <div className="text-[5rem] sm:text-[8rem] md:text-[10rem] font-black text-[#1A1C1A] leading-none select-none relative tracking-tighter">
                CIDC
                <span className="text-[#A33B3C] animate-pulse">_</span>
                {/* Abstract overlay */}
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#006565] opacity-20 translate-x-2 translate-y-2" />
              </div>
            </div>
          </div>

          {/* Floating labels */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-right">
            <div className="font-mono text-[0.55rem] sm:text-[0.65rem] tracking-tighter text-[#A33B3C] font-bold">
              STATUS: OPERATIONAL
            </div>
            <div className="font-mono text-[0.55rem] sm:text-[0.65rem] tracking-tighter text-[#1A1C1A] uppercase">
              COLLEGE INNOVATION &amp; DEVELOPMENT
            </div>
          </div>
        </div>
      </div>

      {/* Stats bento */}
      <HeroStats />
    </section>
  );
}
