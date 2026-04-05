const services = [
  { num: "01", name: "LinkedIn & X Ghostwriting", sub: "Your voice. Their feed. Every day.", desc: "Done-for-you posts written entirely in your voice, crafted to build authority and attract inbound opportunities without you spending a single hour writing." },
  { num: "02", name: "Content Strategy", sub: "Stop guessing. Start growing.", desc: "A full blueprint for what to post, who to target, and why. Content pillars, positioning, audience psychology, and a 90-day calendar all mapped out for you." },
  { num: "03", name: "Brand Voice Development", sub: "Sound like yourself. Only sharper.", desc: "A deep-dive session that captures how you think and communicate, documented into a Brand Voice Guide so everything written for you sounds unmistakably like you." },
  { num: "04", name: "Thought Leadership Strategy", sub: "From expert to industry authority.", desc: "For leaders who want to own a conversation in their industry, covering your narrative, market positioning, and the fastest path to getting there." },
  { num: "05", name: "Long-Form Articles & Newsletters", sub: "Depth that builds trust. Writing that compounds.", desc: "In-depth articles, LinkedIn newsletters, and op-eds in your voice, designed to establish credibility and drive profile visits." },
  { num: "06", name: "Content Audit & Repositioning", sub: "Find out exactly what your content is costing you.", desc: "A detailed review of your LinkedIn or X presence, what is working, what is invisible, and what is quietly hurting your brand, with a clear action plan to fix it." },
  { num: "07", name: "Executive Content Retainer", sub: "Full-service thought leadership. Handled.", desc: "A fully managed monthly content service for senior executives and corporations. Strategy, writing, calendars, performance reviews, and dedicated support." },
  { num: "08", name: "Onboarding & Brand Setup", sub: "The right foundation changes everything.", desc: "The session every new client begins with. Brand voice, positioning, content pillars, and your first month calendar all delivered within one week." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#161614] text-[#F7F4EF] px-6 md:px-14 py-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-7 h-[1px] bg-[#B8924A]" />
        <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">What I Offer</span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-12">Eight ways to turn your voice <span className="italic text-[#B8924A]">into authority.</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[1px] md:bg-[#B8924A]/20">
        {services.map((s) => (
          <div key={s.num} className="bg-[#0E0E0E] p-8 border border-[#B8924A]/20 md:border-0 rounded-sm md:rounded-none hover:bg-[#111110] transition-colors duration-300">
            <div className="text-[#B8924A] text-[11px] tracking-[0.22em] mb-5 opacity-55">{s.num}</div>
            <div className="font-serif text-xl font-semibold mb-2">{s.name}</div>
            <div className="font-serif text-sm italic text-[#D4AD72] mb-4">{s.sub}</div>
            <div className="text-sm font-light text-[#F7F4EF]/50 leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}