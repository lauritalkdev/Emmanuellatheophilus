import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#F7F4EF]">
      <Navbar />
      <section className="px-6 md:px-14 pt-36 pb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-7 h-[1px] bg-[#B8924A]" />
          <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">Portfolio</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6">Words that <span className="italic text-[#B8924A]">work.</span></h1>
        <p className="text-base font-light text-[#F7F4EF]/60 max-w-2xl mb-20">A selection of articles and posts that demonstrate the strategy, voice, and depth behind every piece of content WordBuilt produces.</p>

        {/* ARTICLES */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-7 h-[1px] bg-[#B8924A]" />
            <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">Long-Form Articles</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ARTICLE 1 */}
            <div className="bg-[#161614] border border-[#B8924A]/20 hover:border-[#B8924A] rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-6">
              <div>
                <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase mb-4">X Growth Strategy</div>
                <h2 className="font-serif text-2xl font-semibold leading-snug mb-4">The Part of the X Growth Strategy Nobody Talks About (Until Now)</h2>
                <p className="text-sm font-light text-[#F7F4EF]/55 leading-relaxed">A deep-dive into sustainable X growth, from building impressions without virality to protecting your energy as you scale. Raw, strategic, and built from real experience hitting 1 million impressions.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["X Strategy", "Growth", "Monetization", "Engagement"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold tracking-widest uppercase text-[#B8924A] bg-[#B8924A]/10 px-3 py-1 rounded-sm">{tag}</span>
                ))}
              </div>
              <a href="/portfolio/x-growth-strategy" className="self-start border border-[#B8924A]/30 hover:border-[#B8924A] hover:text-[#B8924A] text-[#F7F4EF] text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-sm transition-colors duration-200">Read Article</a>
            </div>

            {/* ARTICLE 2 */}
            <div className="bg-[#161614] border border-[#B8924A]/20 hover:border-[#B8924A] rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-6">
              <div>
                <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase mb-4">Ghostwriting Career</div>
                <h2 className="font-serif text-2xl font-semibold leading-snug mb-4">The Ghostwriting Blueprint That Turns Your Writing Talent Into a High-Income Career</h2>
                <p className="text-sm font-light text-[#F7F4EF]/55 leading-relaxed">The complete career guide for writers ready to turn their talent into a professional ghostwriting business — covering pricing, process, niching, and building a reputation that pays for itself.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Ghostwriting", "Career", "LinkedIn", "Strategy"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold tracking-widest uppercase text-[#B8924A] bg-[#B8924A]/10 px-3 py-1 rounded-sm">{tag}</span>
                ))}
              </div>
              <a href="/portfolio/ghostwriting-blueprint" className="self-start border border-[#B8924A]/30 hover:border-[#B8924A] hover:text-[#B8924A] text-[#F7F4EF] text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-sm transition-colors duration-200">Read Article</a>
            </div>

          </div>
        </div>

        {/* POSTS */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-7 h-[1px] bg-[#B8924A]" />
            <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">LinkedIn Posts</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* POST 1 */}
            <div className="bg-[#161614] border border-[#B8924A]/20 hover:border-[#B8924A] rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5">
              <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase">Ghostwriting</div>
              <h3 className="font-serif text-xl font-semibold leading-snug">If you think ghostwriters are paid to write, you are mistaken.</h3>
              <p className="text-sm font-light text-[#F7F4EF]/55 leading-relaxed flex-1">They are paid to ask the questions their clients do not know how to ask themselves. The 4 question types that unlock clarity from scattered thoughts.</p>
              <a href="/portfolio/ghostwriters-ask-questions" className="self-start border border-[#B8924A]/30 hover:border-[#B8924A] hover:text-[#B8924A] text-[#F7F4EF] text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-sm transition-colors duration-200">Read Post</a>
            </div>

            {/* POST 2 */}
            <div className="bg-[#161614] border border-[#B8924A]/20 hover:border-[#B8924A] rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5">
              <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase">Founders</div>
              <h3 className="font-serif text-xl font-semibold leading-snug">After months of ghostwriting on LinkedIn, one pattern keeps showing up.</h3>
              <p className="text-sm font-light text-[#F7F4EF]/55 leading-relaxed flex-1">Most founders are not bad at content. They are stuck in their own heads. How ghostwriters help untangle thinking into content that speaks.</p>
              <a href="/portfolio/founders-stuck-in-heads" className="self-start border border-[#B8924A]/30 hover:border-[#B8924A] hover:text-[#B8924A] text-[#F7F4EF] text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-sm transition-colors duration-200">Read Post</a>
            </div>

            {/* POST 3 */}
            <div className="bg-[#161614] border border-[#B8924A]/20 hover:border-[#B8924A] rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5">
              <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase">Corporate Writers</div>
              <h3 className="font-serif text-xl font-semibold leading-snug">This is why many corporate writers struggle to win on LinkedIn.</h3>
              <p className="text-sm font-light text-[#F7F4EF]/55 leading-relaxed flex-1">It is not a writing problem. It is a translation problem. Why boardroom writing kills LinkedIn posts and how to fix it.</p>
              <a href="/portfolio/corporate-writers-linkedin" className="self-start border border-[#B8924A]/30 hover:border-[#B8924A] hover:text-[#B8924A] text-[#F7F4EF] text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-sm transition-colors duration-200">Read Post</a>
            </div>

          </div>
        </div>

      </section>
      <Footer />
    </main>
  );
}