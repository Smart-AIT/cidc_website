// About section: Vision card with compass icon
export default function AboutVision() {
  return (
    <section className="md:col-span-7 border-2 border-[#1A1C1A] bg-[#FAF9F6] p-5 sm:p-8 md:p-12 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] sm:shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] relative overflow-hidden">
      {/* Halftone accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-10 text-[#008080] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="flex justify-between items-start mb-6 sm:mb-12">
        <div>
          <span className="text-[0.65rem] sm:text-[0.75rem] uppercase tracking-widest text-[#006565] mb-2 block font-mono">
            CORE_VISION
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight">
            The Approach
          </h2>
        </div>
        <div className="p-3 sm:p-4 bg-[#006565] text-white flex-shrink-0">
          <span className="material-symbols-outlined text-2xl sm:text-4xl">explore</span>
        </div>
      </div>

      {/* Accent line */}
      <div className="w-1/3 h-1 bg-[#A33B3C] mb-6 sm:mb-8" />

      <p className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight mb-6 sm:mb-8">
        First-year students are directly involved in{" "}
        <strong>live, innovative projects</strong> that address real
        institutional needs.
        <br />
        Every project is guided by experienced TE and BE students, ensuring
        structured mentorship and strong peer learning.
      </p>

      <div className="space-y-2 text-[#3e4949] font-medium font-mono text-xs sm:text-sm">
        <p>~This creates a system where:</p>
        <p>&gt;&gt;Beginners learn by doing</p>
        <p>&gt;&gt;Seniors lead by building</p>
        <p>&gt;&gt;Teams deliver real outcomes</p>
      </div>
    </section>
  );
}
