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
    <section id="events" className="dot-grid py-12 sm:py-24 px-4 sm:px-12 border-t-2 border-[#1A1C1A]">
      <div className="max-w-full mx-auto">
        {/* Hero Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          <div className="w-full md:w-2/3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A33B3C] mb-4">
              SYSTEM_SCHEDULE // YEAR_2026
            </p>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.8] uppercase mb-8">
              UPCOMING
              <br />
              <span className="text-[#006565]">OPERATIONS</span>
            </h2>
            <div className="w-16 sm:w-24 h-2 bg-[#1A1C1A] mb-8" />
            <p className="max-w-xl text-base sm:text-lg leading-tight text-[#1A1C1A] font-medium">
              Scheduled transmissions, community builds, and technical
              deep-dives. We operate at the intersection of analog grit and
              digital precision. Sync your calendars to the collective
              frequency.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="border-2 border-[#1A1C1A] p-2 bg-[#faf9f6]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDr43MXaxqbFUZiaCtpvC8SCdIKjeRgYXWNIzwpXHhkqXHnE2GcBczaEBAPQ_IereXQ9yLqa6-ySXzKWkSsdq6zcj6D3q-xTJbXaBxuDCtyzzf9ARfM-ovKsMrdGm2LFi4UbsXc8l4hmjxlFXzWP4D_Pez4OwjaO4Rsj-OfqVl0td9h85WmFtqtbHU82bKocxm-J66uR6CQncZrm0KctmRuJiKXZ_aLWRC6-tzdYfYfL9dHR1j4YFgGHbOukw-sDwJsk-wF67zi2A"
                alt="Events visual"
                className="w-full grayscale"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, center on desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#1A1C1A] -translate-x-1/2 hidden md:block" />

          {EVENTS.map((event, index) => (
            <div
              key={`${event.title}-${index}`}
              className={`relative mb-24 flex flex-col md:flex-row w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="w-full md:w-[45%]">
                <EventCard {...event} />
              </div>

              {/* Timeline markers */}
              <div className="absolute left-1/2 top-10 w-4 h-4 bg-[#A33B3C] border-2 border-[#1A1C1A] -translate-x-1/2 hidden md:block" />
              {index < EVENTS.length - 1 && (
                <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-[#e3e2e0] rounded-full border-2 border-[#1A1C1A] -translate-x-1/2 -translate-y-1/2 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Announcements Footer */}
        <div className="mt-24 border-2 border-[#1A1C1A] p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-[#faf9f6]">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A33B3C] mb-2">ANNOUNCEMENTS</p>
            <h3 className="text-3xl font-black uppercase tracking-tighter">STAY TUNED TO THE<br />FREQUENCY</h3>
            <p className="text-[10px] font-mono mt-2 text-[#1A1C1A]/60">BE THE PART OF SYSTEM. JOIN THE NETWORK.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-0 w-full md:w-auto">
            <input type="text" placeholder=">> Fill you calendars" className="bg-[#e3e2e0] border-2 border-[#1A1C1A] px-6 py-4 font-mono text-sm w-full md:w-64 focus:outline-none" />
            <button className="bg-[#1A1C1A] text-white px-8 py-4 font-black uppercase tracking-widest text-xs border-2 border-[#1A1C1A] hover:bg-white hover:text-[#1A1C1A] transition-colors whitespace-nowrap">
              JOIN_US_FOR_COOKIE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
