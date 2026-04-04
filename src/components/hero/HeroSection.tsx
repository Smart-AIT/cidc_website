import HeroStats from "./HeroStats";

export default function HeroSection() {
  return (
    <section id="home" className="w-full">
      {/* Main Hero Card */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#1A1C1A] shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] bg-[#faf9f6] overflow-hidden">
        {/* Left Branding Column */}
        <div className="lg:col-span-12 xl:col-span-7 p-10 sm:p-16 md:p-20 xl:p-28 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1A1C1A] relative z-20 bg-[#faf9f6]">
          {/* Label */}
          <div className="font-mono text-xs sm:text-sm tracking-widest text-[#1A1C1A]/40 uppercase mb-8 sm:mb-12 font-bold">
            &gt;&gt;GIT_INIT_CIDC
          </div>

          {/* Headline */}
          <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] xl:text-[6.5rem] leading-[0.85] font-black tracking-[-0.04em] mb-8 sm:mb-10 uppercase text-[#1A1C1A]">
            INNOVATION{" "}
            <br />
            <span className="text-[#006565]">THROUGH</span>
            <br />
            DEVELOPMENT_
          </h1>

          <div className="w-20 sm:w-24 h-2.5 bg-[#A33B3C] mb-10 lg:mb-12"></div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[540px] mb-16 sm:mb-20 leading-relaxed text-[#1A1C1A]/80 font-medium">
            CIDC follows a project-based learning approach to give members real
            production and practical exposure while contributing to the
            college&apos;s overall development. This helps students build strong
            technical and collaboration skills early, while also giving them
            opportunities to actively contribute to meaningful college
            initiatives.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-auto lg:mt-0">
            <a
              href="https://www.instagram.com/cidc_aitpune"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006565] text-white px-8 py-3.5 font-bold border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[3px_3px_0px_0px_rgba(26,28,26,1)] transition-all text-center text-[10px] sm:text-xs uppercase tracking-widest"
            >
              @cidc_aitpune
            </a>
            <a
              href="#contact"
              className="bg-white text-[#1A1C1A] px-10 py-3.5 font-black border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[3px_3px_0px_0px_rgba(26,28,26,1)] transition-all text-center text-[10px] sm:text-xs uppercase tracking-widest"
            >
              Join us
            </a>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-12 xl:col-span-5 bg-[#e1e2de] relative min-h-[450px] lg:min-h-[650px] flex flex-col items-center justify-center p-12 sm:p-20 z-10">
          
          {/* CIDC Geometric Logo Setup */}
          <div className="relative w-full max-w-[400px] sm:max-w-[480px] aspect-[16/10] flex justify-center items-center border-[1.5px] border-[#006565]/25 -mt-10 lg:mt-0">
            {/* The Text */}
            <h2 className="text-[6.5rem] sm:text-[8.5rem] lg:text-[10rem] font-black text-[#1A1C1A] leading-none tracking-tighter z-20 relative">
              CIDC
            </h2>
            {/* Decorative Red Box on Bottom Right */}
            <div className="absolute -bottom-3 -right-3 w-16 h-4 bg-[#A33B3C] z-30"></div>
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-110 z-0"></div>
          </div>

          {/* Bottom right floating status labels */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 text-right z-20 space-y-1.5">
            <div className="font-mono text-[11px] sm:text-[12px] tracking-widest text-[#A33B3C] font-bold uppercase">
              STATUS: OPERATIONAL
            </div>
            <div className="font-mono text-[11px] sm:text-[12px] tracking-widest text-[#1A1C1A]/60 uppercase font-bold">
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
