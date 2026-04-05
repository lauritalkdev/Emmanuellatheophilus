const packages = [
  { tier: "Starter", name: "The Presence Plan", desc: "For professionals who are ready to show up consistently and start building an online presence that gets noticed.", featured: false },
  { tier: "Most Popular", name: "The Authority Plan", desc: "For founders and executives who want to move from visible to credible, positioning themselves as the go-to voice in their space.", featured: true },
  { tier: "Premium", name: "The Dominance Plan", desc: "For leaders who want to fully own their industry narrative. Full-service, high-touch, built for brands that refuse to be second.", featured: false },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-[#0E0E0E] text-[#F7F4EF] px-6 md:px-14 py-20 border-t border-[#B8924A]/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-7 h-[1px] bg-[#B8924A]" />
        <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">Plans</span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-12">Three levels of <span className="italic text-[#B8924A]">transformation.</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div key={p.name} className={`rounded-sm p-8 md:p-10 border transition-all duration-300 hover:-translate-y-1 ${p.featured ? "border-[#B8924A] bg-[#161614]" : "border-[#B8924A]/20 bg-[#161614] hover:border-[#B8924A]"}`}>
            {p.featured && <div className="inline-block bg-[#B8924A] text-[#0E0E0E] text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-sm mb-4">Most Popular</div>}
            <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase mb-4">{p.tier}</div>
            <div className="font-serif text-3xl font-semibold mb-5">{p.name}</div>
            <div className="text-sm font-light text-[#F7F4EF]/55 leading-relaxed mb-8">{p.desc}</div>
            <div className="h-[1px] bg-[#B8924A]/20 mb-8" />
            <a href={"mailto:emmanuellatheophilus1@gmail.com?subject=Enquiry - " + p.name} className={`block text-center text-[11px] font-bold tracking-[0.14em] uppercase px-6 py-3 rounded-sm transition-colors duration-200 ${p.featured ? "bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E]" : "border border-[#B8924A]/30 hover:border-[#B8924A] text-[#F7F4EF] hover:text-[#B8924A]"}`}>Request Details</a>
          </div>
        ))}
      </div>
    </section>
  );
}