// About section: Vision card with compass icon
export default function AboutVision() {
  return (
    <section className="md:col-span-7 p-8 md:p-12 relative overflow-hidden bg-[#faf9f6]">
      <div className="flex justify-between items-start mb-12">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A1C1A] mb-4 block font-mono">
            CORE_VISION
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#1A1C1A]">
            The Approach
          </h2>
        </div>
        <div className="w-12 h-12 bg-[#006565] border-2 border-[#1A1C1A] flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-2xl">explore</span>
        </div>
      </div>

      <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-12 text-[#1A1C1A]">
        First-year students are directly involved in{" "}
        <strong>live, innovative projects</strong> that address real
        institutional needs.
        <br />
        Every project is guided by experienced Third Year (TE) and Final Year (BE) 
        students, ensuring structured mentorship and strong peer learning.
      </p>

      <div className="space-y-3 font-mono text-[11px] font-bold text-[#1A1C1A]/60 uppercase tracking-widest">
        <p>~This creates a system where:</p>
        <p>&gt;&gt;Beginners learn by doing</p>
        <p>&gt;&gt;Seniors lead by building</p>
        <p>&gt;&gt;Teams deliver real outcomes</p>
      </div>
    </section>
  );
}
