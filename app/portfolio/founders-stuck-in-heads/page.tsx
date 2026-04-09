import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FoundersStuckInHeads() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#F7F4EF]">
      <Navbar />
      <article className="px-6 md:px-14 pt-36 pb-20 max-w-4xl">
        <a href="/portfolio" className="text-[#B8924A] text-[11px] font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity duration-200 flex items-center gap-2 mb-12">← Back to Portfolio</a>
        <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase mb-4">Founders</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">After months of ghostwriting on LinkedIn, <span className="italic text-[#B8924A]">one pattern keeps showing up.</span></h1>
        <div className="flex items-center gap-4 mb-16 pb-8 border-b border-[#B8924A]/20">
          <div className="w-8 h-8 rounded-full bg-[#B8924A] flex items-center justify-center font-serif text-sm font-semibold text-[#0E0E0E]">E</div>
          <div>
            <div className="text-sm font-semibold">Emmanuella Theophilus</div>
            <div className="text-xs text-[#7A7570]">Ghostwriter & Content Strategist</div>
          </div>
        </div>

        <div className="space-y-8 text-[#F7F4EF]/80 font-light leading-relaxed text-base">

          <p className="font-serif text-2xl italic text-[#F7F4EF]/90 border-l-2 border-[#B8924A] pl-6">Most founders are not bad at content. They are just stuck in their own heads.</p>

          <p>In the past 6 months of ghostwriting on LinkedIn, I have noticed something interesting. Founders do not struggle with ideas. They struggle with articulation. They know what they think. They know what they have learned building their companies. But when it is time to turn those thoughts into content, everything suddenly feels messy.</p>

          <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-8 space-y-4">
            <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-2">The Pattern I Keep Seeing</div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#B8924A] mt-2 flex-shrink-0" />
              <p className="text-sm text-[#F7F4EF]/70">Founders do not struggle with ideas — they struggle with articulation.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#B8924A] mt-2 flex-shrink-0" />
              <p className="text-sm text-[#F7F4EF]/70">They know what they think, but turning it into content feels messy.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#B8924A] mt-2 flex-shrink-0" />
              <p className="text-sm text-[#F7F4EF]/70">That gap between thinking and communicating is exactly where ghostwriters come in.</p>
            </div>
          </div>

          <p>Ghostwriters do not just write posts. We help founders untangle their thinking and turn it into something people can read, understand, and learn from.</p>

          <p>So if you have ever had ideas but just do not know how to say them — that is exactly why I am here. You do not have to figure it out alone.</p>

          <div className="border-t border-[#B8924A]/20 pt-10 mt-10">
            <p className="font-serif text-xl italic text-[#F7F4EF]/70">Let us turn your thoughts into content that actually speaks.</p>
            <p className="text-sm text-[#7A7570] mt-4">— Ella, Ghostwriter and Content Strategist</p>
            <a href="https://wa.me/2348100856025" target="_blank" rel="noreferrer" className="inline-block mt-8 bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-colors duration-200">Connect With Emmanuella</a>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}