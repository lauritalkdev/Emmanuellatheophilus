import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GhostwritersAskQuestions() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#F7F4EF]">
      <Navbar />
      <article className="px-6 md:px-14 pt-36 pb-20 max-w-4xl">
        <a href="/portfolio" className="text-[#B8924A] text-[11px] font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity duration-200 flex items-center gap-2 mb-12">← Back to Portfolio</a>
        <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase mb-4">Ghostwriting</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">If you think ghostwriters are paid to write, <span className="italic text-[#B8924A]">then you're mistaken.</span></h1>
        <div className="flex items-center gap-4 mb-16 pb-8 border-b border-[#B8924A]/20">
          <div className="w-8 h-8 rounded-full bg-[#B8924A] flex items-center justify-center font-serif text-sm font-semibold text-[#0E0E0E]">E</div>
          <div>
            <div className="text-sm font-semibold">Emmanuella Theophilus</div>
            <div className="text-xs text-[#7A7570]">Ghostwriter & Content Strategist</div>
          </div>
        </div>

        <div className="space-y-6 text-[#F7F4EF]/80 font-light leading-relaxed text-base">

          <p className="font-serif text-2xl italic text-[#F7F4EF]/90 border-l-2 border-[#B8924A] pl-6">They're paid to ask the questions their clients don't know how to ask themselves.</p>

          <p>Having worked with some founders, I noticed that some of them rarely lack ideas, instead they lack the words to explain them.</p>
          <p>As a ghostwriter, I changed my strategy then and began asking better questions.</p>
          <p>Some clients have brilliant thoughts in their heads.</p>
          <p>But when they try to explain it, everything comes out scattered.</p>
          <p>So instead of waiting for clarity, I create it.</p>

          <p className="font-semibold text-[#F7F4EF]">These are the 4 types of questions I use to unlock clarity:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-6 hover:border-[#B8924A] transition-colors duration-200">
              <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-3">Context Questions</div>
              <p className="text-sm text-[#F7F4EF]/70 leading-relaxed">E.g. Why are we saying this now? What triggered this thought?</p>
            </div>
            <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-6 hover:border-[#B8924A] transition-colors duration-200">
              <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-3">Perspective Questions</div>
              <p className="text-sm text-[#F7F4EF]/70 leading-relaxed">E.g. What do you believe that most people get wrong?</p>
            </div>
            <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-6 hover:border-[#B8924A] transition-colors duration-200">
              <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-3">Emotion Questions</div>
              <p className="text-sm text-[#F7F4EF]/70 leading-relaxed">E.g. What frustrated you about this? What excites you about it?</p>
            </div>
            <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-6 hover:border-[#B8924A] transition-colors duration-200">
              <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-3">Specificity Questions</div>
              <p className="text-sm text-[#F7F4EF]/70 leading-relaxed">E.g. Can you give a real example? What actually happened?</p>
            </div>
          </div>

          <p>Now, this is how ghostwriters turn scattered thoughts into authority content.</p>

          <div className="bg-[#B8924A]/10 border border-[#B8924A]/30 rounded-sm p-6">
            <p className="font-serif text-xl text-[#F7F4EF]">The quality of your writing will always be limited by the quality of your questions.</p>
          </div>

          <p>And the best ghostwriters are not just writers, they're investigators.</p>

          <div className="border-t border-[#B8924A]/20 pt-10 mt-10">
            <p className="text-sm text-[#7A7570] mt-4">— Ella, Ghostwriter and Content Strategist</p>
            <a href="https://wa.me/2348100856025" target="_blank" rel="noreferrer" className="inline-block mt-8 bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-colors duration-200">Work With Emmanuella</a>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}