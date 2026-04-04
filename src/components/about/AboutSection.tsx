import AboutVision from "./AboutVision";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="dot-grid px-4 sm:px-12 py-12 sm:py-24 border-t-2 border-[#1A1C1A]"
    >
      {/* Hero Header */}
      <header className="mb-24 relative max-w-full mx-auto">
        <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-12 relative z-10 text-[#e3e2e0]/40">
          WANT TO<br />KNOW ABOUT US ?
        </h2>
        <p className="max-w-3xl text-sm sm:text-base font-medium leading-relaxed text-[#1A1C1A] mb-4">
          CIDC is a student-driven development community focused on building
          real-world systems for the college ecosystem.
          <br />
          We follow a project-based learning approach where students don&apos;t just
          learn — they <strong>build, deploy, and solve actual problems</strong>{" "}
          within the institute.
        </p>
        <p className="max-w-3xl text-sm sm:text-base font-medium leading-relaxed text-[#1A1C1A]/60">
          From day one, members are exposed to practical development workflows,
          collaborative environments, and production-level thinking.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-[#1A1C1A]">
        <AboutVision />

        {/* Right Column */}
        <div className="md:col-span-5 flex flex-col border-l-2 border-[#1A1C1A]">
          {/* Circuit board image */}
          <div className="aspect-square relative grayscale border-b-2 border-[#1A1C1A]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoV6PnGKJpTpK3hTzM9In1uLEuZ8KdCSMqcX30SHCMLRJ9Zz4CeKNlfS194EuYguazwVXwpchxXwHr5JMIcpa6G-HKnQ8Wbp-C3F76omFLSJgeUCsp4WdxZcgrrCQKjuk0dEVqDti5Cp9FJBi81PKILPQB0MvDRQesJFuOOMcHAUrIluE6YLAr8r2fA9ogARgAk6d6jDc6_7uFh3wkwfPQZvyYgHJ3FJut-2h4-zbfb4HaxoapoGIYvwjGi_H_l-0tnG85w4G8uws"
              alt="Visionary Tech"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-[#1A1C1A] px-2 py-1 font-mono text-[9px] uppercase tracking-widest border border-[#1A1C1A]">
              IMAGE_SOURCE_404
            </div>
          </div>

          {/* System Architecture card */}
          <div className="bg-[#006565] p-8 text-white flex-1">
            <h3 className="text-2xl font-black uppercase mb-6 tracking-widest">Core</h3>
            <ul className="font-mono text-[10px] space-y-3 font-bold tracking-widest uppercase opacity-80">
              <li>&gt; PROJECT_PIPELINE: ACTIVE</li>
              <li>&gt; STUDENT_MODULE_RESERVED</li>
              <li>&gt; MENTORSHIP_LAYER: ENABLED</li>
              <li>&gt; STATUS: STABLE</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mission Statement — Full width */}
      <div className="mt-12 border-2 border-[#1A1C1A] bg-[#FAF9F6] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 flex justify-center">
          <span className="material-symbols-outlined text-[8rem] md:text-[10rem] text-[#1A1C1A]">
            settings
          </span>
        </div>

        <div className="md:w-2/3 w-full">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A33B3C] mb-4 block">
            OPERATIONAL_MISSION
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase mb-8 leading-none">
            CIDC Precision
          </h2>
          <p className="text-sm sm:text-base font-medium leading-relaxed mb-8 text-[#1A1C1A]">
            focuses on execution
            <br />
            builds production systems
            <br />
            delivers working solutions
            <br />
            <span className="mt-4 block text-[#1A1C1A]/60 font-medium">
              It is not just a club—it&apos;s a development ecosystem contributing
              directly to the college&apos;s digital growth.
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t-2 border-[#1A1C1A]/10">
            <div>
              <p className="font-mono text-[10px] uppercase font-black mb-2">01. INTENTIONALITY</p>
              <p className="text-xs text-[#1A1C1A]/60 font-medium">Every pixel on our grid serves a structural purpose. We reject decorative fluff.</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase font-black mb-2">02. PERSISTENCE</p>
              <p className="text-xs text-[#1A1C1A]/60 font-medium">Designing for longevity through heavy weights and high-contrast accessibility.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Section Footer */}
      <div className="mt-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">UPCOMING PROJECTS</h3>
          <div className="grid grid-cols-2 gap-x-12 gap-y-1 font-mono text-[9px] font-bold uppercase tracking-widest text-[#1A1C1A]/50">
            <p>Digital Leave & Outpass System</p>
            <p>Feedback & Grievance System</p>
            <p>Lost & Found Management</p>
            <p>Hostel Room Management</p>
            <p>Student Idea & Innovation Portal</p>
            <p>Laundry Management System</p>
          </div>
          <button className="mt-8 bg-[#006565] text-white px-8 py-3 font-black uppercase tracking-widest text-xs border-2 border-[#1A1C1A]">
            WANT TO CONTIBUTE ? CLICK
          </button>
        </div>
        <div className="border-2 border-[#1A1C1A] p-4 bg-[#f4f3f1] min-w-[250px]">
          <div className="font-mono text-[9px] space-y-2 uppercase font-bold tracking-widest">
            <div className="flex justify-between"><span>Latest_Log_v04</span></div>
            <div className="flex justify-between"><span>&gt; CIDC_CODE: INITIALIZED</span></div>
            <div className="flex justify-between"><span>&gt; PROJECT_PIPELINE: ACTIVE</span></div>
            <div className="flex justify-between"><span>&gt; TEAM_MODULE_CONNECTED</span></div>
            <div className="flex justify-between"><span>&gt; SYSTEM_STATUS: RUNNING</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
