import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="dot-grid py-12 sm:py-24 px-4 sm:px-12 border-t-2 border-[#1A1C1A]">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <header className="mb-12 sm:mb-24">
          <div className="w-12 sm:w-16 h-2 bg-[#A33B3C] mb-8" />
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
            ACTIVE<br />MANIFESTO<br />
            <span className="text-[#006565]">PROJECTS</span>
          </h2>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1A1C1A]/40 max-w-sm">
            A COLLECTION OF REAL-WORLD PROJECTS BUILT BY CIDC COMMUNITY. FOCUSED ON LEARNING, BUILDING, AND DELIVERING IMPACTFUL SOLUTIONS.
            <br />
            <span className="mt-2 block">System version 0.4</span>
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Project 1: Campus Nav App */}
          <div className="flex flex-col">
            <article className="group relative bg-[#faf9f6] border-2 border-[#1A1C1A] hover:-translate-x-1 hover:-translate-y-1 transition-transform">
              <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-[#A33B3C] z-10">
                REF_001_NAV
              </div>
              <div className="aspect-[16/10] overflow-hidden border-b-2 border-[#1A1C1A]">
                <Image
                  src="/screen.png"
                  alt="CAMPUS NAV APP"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black uppercase mb-4 leading-none">
                  CAMPUS NAV APP
                </h3>
                <p className="text-sm text-[#1A1C1A]/70 mb-8 leading-relaxed font-medium">
                  Spatial orientation for chaotic environments. Real-time pathfinding utilizing sub-grid mapping and decentralized node validation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-black text-[#1A1C1A] group-hover:text-[#006565] transition-colors"
                >
                  INITIALIZE PROTOCOL{" "}
                  <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </a>
              </div>
            </article>
          </div>

          {/* Project 2: Algo-Trading Bot */}
          <div className="flex flex-col lg:mt-32">
            <article className="group relative bg-[#e9e8e5] border-2 border-[#1A1C1A] hover:-translate-x-1 hover:-translate-y-1 transition-transform">
              <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-[#1A1C1A]/40 z-10">
                REF_002_FIN
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXx6Gcgk_6mBKvufeewSsH2QiwHenO1sXJ1PYV5_ljG8ByxdsU44AxaJhxCjiaLrW_ZWPug6GoaR5tNx2FoJEI-t4lANw0wcF8JPzuE5HIqqYPiUZie4U38_9ThiL6LX1Hdvyv8kP5AXhb9brv4oJmA8U8PNCqSRr19nTdgGX0T5uRfIgEH8PbyFhmPyn4tLki74t2fvSf9TT6FdUl5wqibD2KtsG8YXAsBTqimAzAr-jRYeu7Y5BDUWsJup2ppe54bWsiesif7E"
                  alt="ALGO-TRADING BOT"
                  className="w-full h-full object-cover grayscale brightness-90 mix-blend-multiply"
                />
              </div>
              <div className="p-8 bg-white border-t-2 border-[#1A1C1A]">
                <h3 className="text-3xl font-black uppercase mb-2 leading-none">
                  ALGO-TRADING BOT
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#A33B3C] mb-6 font-bold">
                  STATUS: AUTONOMOUS // ACTIVE
                </p>
                <p className="text-sm text-[#1A1C1A]/70 mb-8 leading-relaxed font-medium">
                  High-frequency execution engine. Optimized for low-latency market manipulation detection and arbitrage identification.
                </p>
                <div className="flex justify-between items-center text-[#1A1C1A]/40 font-mono text-[9px] font-bold uppercase tracking-widest">
                  <span>LATENCY: 0.002ms</span>
                  <span className="p-2 border border-[#1A1C1A]">REF_002_BOT</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
