import AboutVision from "./AboutVision";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="dot-grid min-h-screen px-3 sm:px-6 md:px-12 py-12 sm:py-24"
    >
      {/* Hero Header */}
      <header className="mb-12 sm:mb-24 relative max-w-7xl mx-auto">
        <div className="absolute -top-8 -left-4 sm:-top-12 sm:-left-8 text-[#BDC9C8] font-black text-5xl sm:text-9xl opacity-20 select-none hidden sm:block">
          ABOUT_
        </div>
        <h2 className="text-3xl sm:text-6xl md:text-[8rem] font-extrabold leading-[0.85] tracking-tighter uppercase mb-4 sm:mb-6 relative z-10">
          Want to<br />know about us?
        </h2>
        <div className="w-16 sm:w-24 h-2 bg-[#A33B3C] mb-6 sm:mb-8" />
        <p className="max-w-2xl text-base sm:text-xl md:text-2xl font-medium leading-relaxed">
          CIDC is a student-driven development community focused on building
          real-world systems for the college ecosystem.
          <br />
          We follow a project-based learning approach where students don&apos;t just
          learn — they <strong>build, deploy, and solve actual problems</strong>{" "}
          within the institute.
        </p>
        <p className="max-w-2xl text-base sm:text-xl font-medium leading-relaxed mt-4 text-[#3e4949]">
          From day one, members are exposed to practical development workflows,
          collaborative environments, and production-level thinking.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start max-w-7xl mx-auto">
        <AboutVision />

        {/* Right Column */}
        <div className="md:col-span-5 space-y-6 sm:space-y-8">
          {/* Circuit board image */}
          <div className="border-2 border-[#1A1C1A] aspect-video sm:aspect-square relative grayscale hover:grayscale-0 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(163,59,60,1)] sm:shadow-[8px_8px_0px_0px_rgba(163,59,60,1)] group overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoV6PnGKJpTpK3hTzM9In1uLEuZ8KdCSMqcX30SHCMLRJ9Zz4CeKNlfS194EuYguazwVXwpchxXwHr5JMIcpa6G-HKnQ8Wbp-C3F76omFLSJgeUCsp4WdxZcgrrCQKjuk0dEVqDti5Cp9FJBi81PKILPQB0MvDRQesJFuOOMcHAUrIluE6YLAr8r2fA9ogARgAk6d6jDc6_7uFh3wkwfPQZvyYgHJ3FJut-2h4-zbfb4HaxoapoGIYvwjGi_H_l-0tnG85w4G8uws"
              alt="Visionary Tech"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#006565]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#1A1C1A] text-[#FAF9F6] px-2 py-1 sm:px-3 font-mono text-[0.6rem] sm:text-xs uppercase">
              IMAGE_SOURCE_404
            </div>
          </div>

          {/* System Architecture card */}
          <div className="bg-[#008080] p-5 sm:p-8 text-white relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#1A1C1A] hidden sm:block" />
            <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4 tracking-widest">
              Core
            </h3>
            <ul className="font-mono text-[0.65rem] sm:text-xs space-y-2 opacity-80">
              <li>&gt; PROJECT_PIPELINE: ACTIVE</li>
              <li>&gt; STUDENT_MODULES: ENGAGED</li>
              <li>&gt; MENTORSHIP_LAYER: ENABLED</li>
              <li>&gt; STATUS: STABLE</li>
            </ul>
          </div>
        </div>

        {/* Mission Statement — Full width */}
        <section className="md:col-span-12 border-2 border-[#1A1C1A] bg-[#FAF9F6] p-5 sm:p-8 md:p-16 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] sm:shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] relative overflow-hidden flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
          {/* Gear icon */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#A33B3C]/10 rounded-full blur-3xl" />
              <span className="material-symbols-outlined text-[6rem] sm:text-[8rem] md:text-[12rem] text-[#1A1C1A] relative z-10">
                settings
              </span>
            </div>
          </div>

          <div className="md:w-2/3 w-full">
            <span className="font-mono text-[0.65rem] sm:text-[0.75rem] uppercase tracking-widest text-[#A33B3C] mb-2 block">
              OPERATIONAL_MISSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mb-6 sm:mb-8 leading-none">
              CIDC Precision
            </h2>
            <div className="w-full h-0.5 bg-[#1A1C1A]/10 mb-6 sm:mb-8 flex">
              <div className="w-1/3 h-full bg-[#A33B3C]" />
            </div>
            <p className="text-lg sm:text-2xl font-medium leading-relaxed mb-6 sm:mb-8">
              focuses on execution
              <br />
              builds production systems
              <br />
              delivers working solutions
              <br />
              <span className="text-sm sm:text-base text-[#3e4949]">
                It is not just a club—it&apos;s a development ecosystem contributing
                directly to the college&apos;s digital growth.
              </span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 border-2 border-[#1A1C1A]/20 hover:border-[#006565] transition-colors">
                <h4 className="font-bold uppercase text-[#006565] mb-2 text-sm sm:text-base">
                  01. Intentionality
                </h4>
                <p className="text-xs sm:text-sm opacity-70">
                  Every pixel on our grid serves a structural purpose. We reject
                  decorative fluff.
                </p>
              </div>
              <div className="p-4 sm:p-6 border-2 border-[#1A1C1A]/20 hover:border-[#006565] transition-colors">
                <h4 className="font-bold uppercase text-[#006565] mb-2 text-sm sm:text-base">
                  02. Persistence
                </h4>
                <p className="text-xs sm:text-sm opacity-70">
                  Designing for longevity through heavy weights and high-contrast
                  accessibility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Upcoming Projects CTA */}
      <section className="mt-12 sm:mt-24 border-t-4 border-[#1A1C1A] pt-8 sm:pt-12 flex flex-col md:flex-row justify-between items-start gap-8 max-w-7xl mx-auto">
        <div className="max-w-xl w-full">
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter mb-4 italic">
            upcoming projects
          </h3>
          <ul className="text-sm sm:text-lg mb-6 sm:mb-8 space-y-2 list-disc list-inside text-[#1A1C1A]">
            <li>Digital Leave &amp; Outpass System</li>
            <li>Feedback &amp; Grievance System</li>
            <li>Lost &amp; Found Management</li>
            <li>Hostel Room Management</li>
            <li>Student Idea &amp; Innovation Portal</li>
            <li>Laundry Management System</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-[#006565] text-white px-6 sm:px-10 py-4 sm:py-5 font-bold uppercase tracking-widest text-sm border-2 border-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all"
          >
            Want to contribute? Click
          </a>
        </div>

        {/* Logs widget */}
        <div className="w-full md:w-auto">
          <div className="bg-[#FAF9F6] border-2 border-[#1A1C1A] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(163,59,60,1)]">
            <span className="font-mono text-[0.6rem] sm:text-[0.65rem] block mb-3 sm:mb-4">
              LATEST_LOGS_v.0.4
            </span>
            <div className="space-y-2 font-mono text-[0.6rem] sm:text-[0.7rem] text-[#3e4949]">
              <p className="text-[#006565]">&gt; CIDC_CORE_INITIALIZED</p>
              <p>&gt; PROJECT_MODULES_ACTIVE</p>
              <p>&gt; TEAM_NODES_CONNECTED</p>
              <p className="animate-pulse">&gt; SYSTEM_STATUS: RUNNING...</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
