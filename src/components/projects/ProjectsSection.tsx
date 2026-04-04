import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="dot-grid py-12 sm:py-24 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 sm:mb-24">
          <div className="w-12 sm:w-16 h-2 bg-[#A33B3C] mb-6 sm:mb-8" />
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-4 sm:mb-6">
            Active<br />Manifesto<br />
            <span className="text-[#006565] italic">Projects</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#6e7979] max-w-md">
            A collection of real-world projects built by CIDC community. Focused
            on learning, building, and delivering impactful solutions.
            <br />
            <span className="mt-2 block">System version 0.4</span>
          </p>
        </header>

        {/* Project Grid — stacks fully on mobile */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:grid lg:grid-cols-12 lg:gap-0">
          {/* Project 1: Campus Nav App */}
          <div className="lg:col-span-7 lg:pr-12 lg:mb-48">
            <article className="group relative bg-[#faf9f6] border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] sm:shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[0.65rem] sm:text-[0.75rem] font-mono uppercase tracking-widest text-[#A33B3C] z-10">
                REF_001_NAV
              </div>
              <div className="aspect-[16/10] overflow-hidden border-b-2 border-[#1A1C1A]">
                <Image
                  src="/screen.png"
                  alt="CAMPUS NAV APP"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-3xl font-black uppercase mb-3 sm:mb-4 leading-none">
                  CAMPUS NAV APP
                </h3>
                <div className="w-1/3 h-0.5 bg-[#A33B3C] mb-4 sm:mb-6" />
                <p className="text-sm text-[#3e4949] mb-6 sm:mb-8 leading-relaxed">
                  Spatial orientation for chaotic environments. Real-time
                  pathfinding utilizing sub-grid mapping and decentralized node
                  validation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest font-bold group-hover:text-[#006565] transition-colors"
                >
                  Initialize Protocol{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </article>
          </div>

          {/* Project 2: Algo-Trading Bot */}
          <div className="lg:col-span-5 lg:pt-32 lg:mb-48">
            <article className="group relative bg-[#e9e8e5] border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(163,59,60,1)] sm:shadow-[8px_8px_0px_0px_rgba(163,59,60,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[0.65rem] sm:text-[0.75rem] font-mono uppercase tracking-widest text-[#1A1C1A] z-10">
                REF_002_FIN
              </div>
              <div className="aspect-[4/3] sm:aspect-square relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXx6Gcgk_6mBKvufeewSsH2QiwHenO1sXJ1PYV5_ljG8ByxdsU44AxaJhxCjiaLrW_ZWPug6GoaR5tNx2FoJEI-t4lANw0wcF8JPzuE5HIqqYPiUZie4U38_9ThiL6LX1Hdvyv8kP5AXhb9brv4oJmA8U8PNCqSRr19nTdgGX0T5uRfIgEH8PbyFhmPyn4tLki74t2fvSf9TT6FdUl5wqibD2KtsG8YXAsBTqimAzAr-jRYeu7Y5BDUWsJup2ppe54bWsiesif7E"
                  alt="ALGO-TRADING BOT"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-all group-hover:opacity-100"
                />
              </div>
              <div className="p-5 sm:p-8 bg-[#faf9f6]">
                <h3 className="text-xl sm:text-3xl font-black uppercase mb-3 sm:mb-4 leading-none">
                  ALGO-TRADING BOT
                </h3>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-tighter text-[#A33B3C] mb-4 sm:mb-6">
                  Status: Autonomous // Active
                </p>
                <p className="text-sm text-[#3e4949] mb-6 sm:mb-8 leading-relaxed">
                  High-frequency execution engine. Optimized for low-latency
                  market manipulation detection and arbitrage identification.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tabular-nums font-mono text-[#6e7979]">
                    LATENCY: 0.002ms
                  </span>
                  <span className="material-symbols-outlined text-[#006565]">
                    terminal
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Project 3: Decentralized Voting */}
          <div className="lg:col-span-6 lg:col-start-2 lg:mb-48">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-24 h-24 border-4 border-[#A33B3C] opacity-20 hidden lg:block" />
              <article className="group relative bg-[#faf9f6] border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] sm:shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[0.65rem] sm:text-[0.75rem] font-mono uppercase tracking-widest text-[#1A1C1A] z-10">
                  REF_003_GOV
                </div>
                <div
                  className="p-5 sm:p-8 border-b-2 border-[#1A1C1A] bg-[#006565] text-white"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                >
                  <h3 className="text-2xl sm:text-4xl font-black uppercase leading-none italic">
                    DECENTRALIZED
                    <br />
                    VOTING
                  </h3>
                </div>
                <div className="aspect-[21/9] overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6NRA-45FitA6cVsaa9PgfhpDDuM1Uxg3w6Tcl_vJbJ2ejAwh3hspKym5kSeWml6P1aOmUIZpIYL_AYHAEzUKty3pVe4FNBfU1gzoXbvHMtMPb0NL_8wZZRDkd4yQNk9xzGdtKIhEUXM7yFWoVs8Lk9hgCIJaCA8-VDQctNAy-cliIzgjJpoDij576vLBpEE0zhTLJ54iS3UUDr-jAfRqeSllzwbtK7I9abRxbAtnUuMbDmnCCaC_Vbqcc91IC_1IWW4LxH_IVSNo"
                    alt="DECENTRALIZED VOTING"
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 sm:p-8">
                  <p className="text-sm text-[#3e4949] mb-4 sm:mb-6 leading-relaxed">
                    Cryptographic consensus for the digital agora. Ensuring
                    sovereign participation through zero-knowledge proofs and
                    immutable ledgers.
                  </p>
                  <button
                    type="button"
                    className="bg-[#006565] text-white px-5 sm:px-6 py-3 font-mono uppercase font-bold tracking-widest text-xs flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    ACCESS NODE
                  </button>
                </div>
              </article>
            </div>
          </div>

          {/* Project 4: Algorithmic Jazz */}
          <div className="lg:col-span-5 lg:col-start-8 lg:-mt-24">
            <article className="group relative bg-[#1A1C1A] text-white border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(163,59,60,1)] sm:shadow-[8px_8px_0px_0px_rgba(163,59,60,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1">
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[0.65rem] sm:text-[0.75rem] font-mono uppercase tracking-widest text-[#A33B3C] z-10">
                REF_004_SONIC
              </div>
              <div className="aspect-[3/4] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#A33B3C]/20 mix-blend-overlay z-10" />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5CXTD-3UWBl-F5aQ9Lr4V4P0jcUmmovMiJrlK7t31zih039psCmTEZT6e_6xba9cc5Uzk8ly1l4dmrH3CSzLSc3TK75IzkWOHDkyF8Z91Bn5Q6FFZl8QyRAVMmwSf5hnK3zhYK3WiZxcJpxebCexPCDpUl6TTTA7Aymfj3pZBiE2Tct2uh_Qx_5Nhe-Dc7PZ6tT46cb-HsUPv6CKHLkVg9PfsOVdJEdakE2dji4UzPuVDXf16K1_8c3tahO_MoXr-ne1HDB6LBnc"
                  alt="ALGORITHMIC JAZZ"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl sm:text-3xl font-black uppercase mb-2">
                    ALGORITHMIC JAZZ
                  </h3>
                  <p className="text-[0.6rem] sm:text-xs font-mono uppercase tracking-widest opacity-70 italic">
                    Generative Sonic Structures
                  </p>
                </div>
              </div>
              <div className="p-5 sm:p-8 border-t-2 border-white/10">
                <p className="text-xs sm:text-sm text-white/60 mb-4 sm:mb-6 leading-relaxed">
                  Neural network trained on Coltrane and Davis. Producing
                  infinite, non-repeating improvisations in real-time. Sound as
                  data.
                </p>
                <div className="flex gap-2 items-end">
                  <div className="h-8 w-1 bg-[#A33B3C] animate-pulse" />
                  <div className="h-5 w-1 bg-[#A33B3C]/50" />
                  <div className="h-10 w-1 bg-[#A33B3C]" />
                  <div className="h-6 w-1 bg-[#A33B3C]/30" />
                  <div className="h-9 w-1 bg-[#A33B3C]" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
