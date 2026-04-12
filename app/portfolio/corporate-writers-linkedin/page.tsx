import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CorporateWritersLinkedIn() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#F7F4EF]">
      <Navbar />
      <article className="px-6 md:px-14 pt-36 pb-20 max-w-4xl">
        <a href="/portfolio" className="text-[#B8924A] text-[11px] font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity duration-200 flex items-center gap-2 mb-12">← Back to Portfolio</a>
        <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase mb-4">Corporate Writers</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">This is why many corporate writers <span className="italic text-[#B8924A]">struggle to win on LinkedIn.</span></h1>
        <div className="flex items-center gap-4 mb-16 pb-8 border-b border-[#B8924A]/20">
          <div className="w-8 h-8 rounded-full bg-[#B8924A] flex items-center justify-center font-serif text-sm font-semibold text-[#0E0E0E]">E</div>
          <div>
            <div className="text-sm font-semibold">Emmanuella Theophilus</div>
            <div className="text-xs text-[#7A7570]">Ghostwriter & Content Strategist</div>
          </div>
        </div>

        <div className="space-y-6 text-[#F7F4EF]/80 font-light leading-relaxed text-base">

          <p>It's not because they have nothing to say.</p>
          <p>And it's definitely not because they're bad writers.</p>
          <p>It's because everything they were trained and rewarded for in their careers...</p>

          <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-8 space-y-4">
            {["Formal language", "Structured arguments", "Comprehensive, detailed explanations"].map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-[#B8924A]/10 pb-4 last:border-0 last:pb-0">
                <div className="w-2 h-2 rounded-full bg-[#B8924A] flex-shrink-0" />
                <p className="text-sm text-[#F7F4EF]/70">{item}</p>
              </div>
            ))}
          </div>

          <p>...is exactly what kills a LinkedIn post.</p>
          <p>You spent years mastering how to write for boardrooms.</p>
          <p>But LinkedIn is not a boardroom.</p>
          <p>So when you try to show up here, your words feel stiff, corporate, and like a memo nobody asked for.</p>
          <p>Then you delete it.</p>
          <p>And just like that, another week goes by without you showing up.</p>

          <div className="bg-[#B8924A]/10 border border-[#B8924A]/30 rounded-sm p-8">
            <p className="font-serif text-2xl font-light text-[#F7F4EF]">The truth is that you don't have a writing problem,</p>
            <p className="font-serif text-2xl font-light italic text-[#B8924A] mt-2">but you have a translation problem.</p>
            <p className="text-sm text-[#F7F4EF]/60 mt-4">And that's a completely different thing to fix.</p>
          </div>

          <p>If this sounds like you, send me a DM. I've got the perfect solution for you.</p>

          <div className="border-t border-[#B8924A]/20 pt-10 mt-10">
            <p className="text-sm text-[#7A7570]">I remain Ella,</p>
            <p className="text-sm text-[#7A7570]">Content Strategist & LinkedIn Ghostwriter.</p>
            <a href="https://wa.me/2348100856025" target="_blank" rel="noreferrer" className="inline-block mt-8 bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-colors duration-200">Send Emmanuella a Message</a>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}