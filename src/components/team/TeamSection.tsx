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
    <section id="team" className="max-w-full mx-auto px-4 sm:px-12 py-12 sm:py-24 border-t-2 border-[#1A1C1A]">
      {/* Header */}
      <header className="mb-12 sm:mb-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A33B3C] mb-4">
          CIDC_VERSION_04
        </p>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
          TEAM<br />
          <span className="text-[#006565]">MODULES</span>
        </h2>
        <p className="text-base sm:text-lg max-w-xl text-[#1A1C1A] font-medium leading-tight">
          A multidisciplinary collective of engineers and designers operating at
          the intersection of technical rigidity and digital entropy.
        </p>
      </header>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-[#1A1C1A]">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.ref_id} {...member} />
        ))}
      </div>

      {/* Chapter Banner */}
      <div className="mt-12 bg-[#006565] border-2 border-[#1A1C1A] p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">CIDC STUDENT CHAPTER</h3>
          <p className="text-white/80 text-sm max-w-lg">We are always scouting for engineers and visual thinkers. Share your ideas, showcase your project. Join us to build the AIT smart, ping us builders. </p>
        </div>
        <a href="#contact" className="bg-[#1A1C1A] text-white px-10 py-4 font-bold uppercase tracking-widest text-xs border-2 border-[#1A1C1A] hover:bg-white hover:text-[#1A1C1A] transition-colors">
          JOIN
        </a>
      </div>
    </section>
  );
}
