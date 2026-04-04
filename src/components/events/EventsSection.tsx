import EventCard from "./EventCard";

const EVENTS = [
  {
    ref_id: "REF_LOG",
    status: "ACTIVE" as const,
    title: "SYSTEM DESIGN BATTLE",
    date: "Dates will be declared soon",
    description:
      "A deep-dive into system design concepts. Teams will be given a real-world system design problem inspired by large tech platforms.",
    ctaLabel: "RSVP_LINK",
    side: "left",
    variant: "default" as const,
  },
  {
    ref_id: "REF_LOG",
    status: "PENDING" as const,
    title: "AGENTIC ARENA HACKATHON",
    date: "Dates: coming soon",
    description:
      "Build for the void. 24 hours of collaborative technical friction. No excuses, no shortcuts. Just raw execution and zero sleep to build autonomous AI agents based on real-world scenarios.",
    ctaLabel: "JOIN_WAITLIST",
    side: "right",
    variant: "light" as const,
  },
  {
    ref_id: "REF_LOG",
    status: "Upcoming" as const,
    title: "CAMPUS CATALYST",
    date: "Dates: coming soon",
    description:
      "Physical interface exchange. Bring your modified synthesizers, pitch your ideas, get approvals, start working on it to contribute in college innovation and make AIT smarter.",
    ctaLabel: "REGISTER_UNIT",
    side: "left",
    variant: "teal" as const,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="dot-grid py-12 sm:py-24 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start mb-12 sm:mb-24">
          <div className="w-full md:w-2/3">
            <p className="text-[0.65rem] sm:text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[#A33B3C] mb-3 sm:mb-4">
              SYSTEM_SCHEDULE // year_2026
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black leading-none uppercase -ml-0.5 sm:-ml-1 mb-6 sm:mb-8">
              UPCOMING
              <br />
              <span className="text-[#006565] italic">OPERATIONS</span>
            </h2>
            <div className="w-16 sm:w-24 h-2 bg-[#1A1C1A] mb-6 sm:mb-8" />
            <p className="max-w-xl text-sm sm:text-lg leading-relaxed text-[#3e4949]">
              Scheduled transmissions, community builds, and technical
              deep-dives. We operate at the intersection of analog grit and
              digital precision. Sync your calendars to the collective
              frequency.
            </p>
          </div>
          <div className="w-full md:w-1/3 relative">
            <div className="border-2 border-[#1A1C1A] p-2 shadow-[4px_4px_0px_0px_rgba(163,59,60,1)] sm:shadow-[8px_8px_0px_0px_rgba(163,59,60,1)] bg-[#faf9f6] relative z-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDr43MXaxqbFUZiaCtpvC8SCdIKjeRgYXWNIzwpXHhkqXHnE2GcBczaEBAPQ_IereXQ9yLqa6-ySXzKWkSsdq6zcj6D3q-xTJbXaBxuDCtyzzf9ARfM-ovKsMrdGm2LFi4UbsXc8l4hmjxlFXzWP4D_Pez4OwjaO4Rsj-OfqVl0td9h85WmFtqtbHU82bKocxm-J66uR6CQncZrm0KctmRuJiKXZ_aLWRC6-tzdYfYfL9dHR1j4YFgGHbOukw-sDwJsk-wF67zi2A"
                alt="Events visual"
                className="w-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 border border-[#bdc9c8] opacity-30 pointer-events-none hidden sm:block" />
          </div>
        </div>

        {/* Timeline — simplified for mobile */}
        <div className="relative pl-6 sm:pl-0">
          {/* Center vertical line — left on mobile, center on desktop */}
          <div className="absolute left-0 sm:left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#3e4949]/20 md:-translate-x-1/2" />

          {EVENTS.map((event, index) => (
            <div
              key={`${event.title}-${index}`}
              className={`relative mb-12 sm:mb-24 flex flex-col w-full items-start ${
                event.side === "right"
                  ? "md:flex-row md:justify-end"
                  : "md:flex-row"
              }`}
            >
              <div
                className={`w-full ${
                  event.side === "left"
                    ? "md:w-1/2 md:pr-16"
                    : "md:w-1/2 md:pl-16"
                }`}
              >
                <EventCard {...event} />
              </div>

              {/* Timeline dot */}
              <div
                className={`absolute left-[-6px] md:left-1/2 top-8 sm:top-10 w-3 h-3 md:-translate-x-1/2 ring-4 ring-[#faf9f6] ${
                  event.status === "ACTIVE"
                    ? "bg-[#A33B3C]"
                    : event.status === "PENDING"
                      ? "bg-[#1A1C1A]"
                      : "bg-[#006565]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <section className="mt-12 sm:mt-24 max-w-4xl mx-auto">
          <div className="border-2 sm:border-4 border-[#1A1C1A] p-6 sm:p-12 relative">
            <div className="absolute -top-5 sm:-top-6 left-6 sm:left-12 bg-[#faf9f6] px-3 sm:px-4 text-xs sm:text-sm font-bold tracking-widest text-[#A33B3C]">
              ANNOUNCEMENTS
            </div>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start md:items-center">
              <div className="flex-1">
                <h3 className="text-xl sm:text-3xl font-black uppercase mb-3 sm:mb-4 leading-none">
                  STAY TUNED TO THE FREQUENCY
                </h3>
                <p className="text-[#3e4949] font-mono text-xs sm:text-sm uppercase">
                  Be the part of system, join the network.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <input
                    type="email"
                    placeholder=">> Fill your calendars"
                    className="w-full bg-[#e3e2e0] border-0 border-b-2 border-[#1A1C1A] focus:ring-0 focus:border-[#006565] font-mono py-3 sm:py-4 px-0 outline-none text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    className="bg-[#1A1C1A] text-white py-3 sm:py-4 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-sm shadow-[4px_4px_0px_0px_rgba(0,101,101,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all duration-75"
                  >
                    JOIN_US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
