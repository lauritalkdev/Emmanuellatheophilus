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

        <div className="space-y-8 text-[#F7F4EF]/80 font-light leading-relaxed text-base">

          <p className="font-serif text-2xl italic text-[#F7F4EF]/90 border-l-2 border-[#B8924A] pl-6">It is not because they have nothing to say. And it is definitely not because they are bad writers.</p>

          <p>It is because everything they were trained and rewarded for in their careers is exactly what kills a LinkedIn post.</p>

          <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-8">
            <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-6">What Corporate Writing Rewards vs What LinkedIn Punishes</div>
            <div className="space-y-4">
              {[
                "Formal language",
                "Structured arguments",
                "Comprehensive, detailed explanations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-[#B8924A]/10 pb-4">
                  <div className="w-2 h-2 rounded-full bg-[#B8924A] flex-shrink-0" />
                  <p className="text-sm text-[#F7F4EF]/70">{item} — rewarded in boardrooms, invisible on LinkedIn.</p>
                </div>
              ))}
            </div>
          </div>

          <p>You spent years mastering how to write for boardrooms. But LinkedIn is not a boardroom. So when you try to show up here, your words feel stiff, corporate, and like a memo nobody asked for. Then you delete it. And just like that, another week goes by without you showing up.</p>

          <div className="bg-[#B8924A]/10 border border-[#B8924A]/30 rounded-sm p-8">
            <p className="font-serif text-2xl font-light text-[#F7F4EF]">The truth is that you do not have a writing problem.</p>
            <p className="font-serif text-2xl font-light italic text-[#B8924A] mt-2">You have a translation problem.</p>
            <p className="text-sm text-[#F7F4EF]/60 mt-4">And that is a completely different thing to fix.</p>
          </div>

          <p>The skills that made you excellent in your career are still valuable. They just need to be translated into a format that LinkedIn audiences can connect with. Shorter sentences. Personal stories. Direct opinions. Human language, not corporate language.</p>

          <div className="border-t border-[#B8924A]/20 pt-10 mt-10">
            <p className="font-serif text-xl italic text-[#F7F4EF]/70">If this sounds like you, I have got the perfect solution.</p>
            <p className="text-sm text-[#7A7570] mt-4">— Ella, Content Strategist & LinkedIn Ghostwriter</p>
            <a href="https://wa.me/2348100856025" target="_blank" rel="noreferrer" className="inline-block mt-8 bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-colors duration-200">Send Emmanuella a Message</a>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}