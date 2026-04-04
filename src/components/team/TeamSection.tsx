import TeamMemberCard from "./TeamMemberCard";

const TEAM_MEMBERS = [
  {
    ref_id: "Secretary_01",
    iconBg: "bg-[#008080]",
    iconColor: "text-[#e3fffe]",
    icon: "terminal",
    name: "Jagdish Singh",
    role: "Frontend Lead",
    description:
      "Expert in complex UI state machines and high-performance React architectures. Bridging the gap between design spec and browser execution.",
    link1Icon: "alternate_email",
    link2Icon: "code",
  },
  {
    ref_id: "Secretary_02",
    iconBg: "bg-[#fe807d]",
    iconColor: "text-[#74181d]",
    icon: "database",
    name: "Ebha Mollick",
    role: "Backend & DB",
    description:
      "Managing distributed systems and data integrity for high-concurrency applications. Focus on Rust and PostgreSQL optimization.",
    link1Icon: "alternate_email",
    link2Icon: "data_object",
  },
  {
    ref_id: "TE_Member_01",
    iconBg: "bg-[#e3e2e0]",
    iconColor: "text-[#1A1C1A]",
    icon: "cloud",
    name: "Mohit Kumar Sharma",
    role: "Cloud & Infra",
    description:
      "Scalability architect specializing in Kubernetes, AWS, and serverless edge computing. Designing resilient digital foundations.",
    link1Icon: "alternate_email",
    link2Icon: "dns",
  },
  {
    ref_id: "TE_Member_02",
    iconBg: "bg-[#006565]",
    iconColor: "text-white",
    icon: "token",
    name: "Shreya Prasad",
    role: "Web3 Architect",
    description:
      "Blockchain engineer focusing on smart contract security and decentralized governance models. Building the trustless web.",
    link1Icon: "alternate_email",
    link2Icon: "link",
  },
  {
    ref_id: "Joint_Secretary_01",
    iconBg: "bg-[#1A1C1A]",
    iconColor: "text-[#faf9f6]",
    icon: "view_quilt",
    name: "Pradeep Kumar",
    role: "Lead UI/UX",
    description:
      "Synthesizing brutalist aesthetics with functional accessibility. Rejecting the standard for the intentional.",
    link1Icon: "alternate_email",
    link2Icon: "brush",
  },
  {
    ref_id: "Joint_Secretary_02",
    iconBg: "bg-[#A33B3C]",
    iconColor: "text-white",
    icon: "layers",
    name: "Abhay Singh",
    role: "Graphics",
    description:
      "Creating visual assets that exist on the edge of technical documentation and abstract expressionism. 3D and 2D fusion.",
    link1Icon: "alternate_email",
    link2Icon: "palette",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-24">
      {/* Header */}
      <header className="mb-12 sm:mb-20">
        <p className="font-mono text-[0.75rem] uppercase tracking-widest text-[#A33B3C] mb-2">
          cidc_version_04
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-4 sm:mb-6">
          TEAM<br />
          <span className="text-[#006565]">MODULES</span>
        </h2>
        <div className="w-16 sm:w-24 h-2 bg-[#1A1C1A] mb-6 sm:mb-8" />
        <p className="text-base sm:text-xl max-w-2xl text-[#3e4949] leading-relaxed">
          A multidisciplinary collective of engineers and designers operating at
          the intersection of technical rigidity and digital entropy.
        </p>
      </header>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border-2 border-[#1A1C1A] bg-[#1A1C1A] shadow-[4px_4px_0px_0px_rgba(0,101,101,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,101,101,1)]">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.ref_id} {...member} />
        ))}
      </div>

      {/* CTA Banner */}
      <section className="mt-12 sm:mt-24 border-2 sm:border-4 border-[#1A1C1A] p-6 sm:p-12 bg-[#008080] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0000001a 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#e3fffe] mb-2 sm:mb-4">
              cidc student chapter
            </h2>
            <p className="text-[#e3fffe] max-w-xl opacity-90 text-sm sm:text-base">
              We are always scouting for engineers and visual thinkers. Share
              your ideas, showcase your project, join us to build AIT smarter.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-[#1A1C1A] text-[#faf9f6] px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-sm border-2 border-[#faf9f6] shadow-[4px_4px_0px_0px_rgba(163,59,60,1)] sm:shadow-[8px_8px_0px_0px_rgba(163,59,60,1)] hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0 transition-all flex-shrink-0"
          >
            JOIN
          </a>
        </div>
      </section>
    </section>
  );
}
