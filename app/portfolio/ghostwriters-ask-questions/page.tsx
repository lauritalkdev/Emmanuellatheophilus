import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GhostwritersAskQuestions() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#F7F4EF]">
      <Navbar />
      <article className="px-6 md:px-14 pt-36 pb-20 max-w-4xl">
        <a href="/portfolio" className="text-[#B8924A] text-[11px] font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity duration-200 flex items-center gap-2 mb-12">← Back to Portfolio</a>
        <div className="text-[#B8924A] text-[9px] font-semibold tracking-[0.22em] uppercase mb-4">Ghostwriting</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">If you think ghostwriters are paid to write, <span className="italic text-[#B8924A]">you are mistaken.</span></h1>
        <div className="flex items-center gap-4 mb-16 pb-8 border-b border-[#B8924A]/20">
          <div className="w-8 h-8 rounded-full bg-[#B8924A] flex items-center justify-center font-serif text-sm font-semibold text-[#0E0E0E]">E</div>
          <div>
            <div className="text-sm font-semibold">Emmanuella Theophilus</div>
            <div className="text-xs text-[#7A7570]">Ghostwriter & Content Strategist</div>
          </div>
        </div>

        <div className="space-y-8 text-[#F7F4EF]/80 font-light leading-relaxed text-base">

          <p className="font-serif text-2xl italic text-[#F7F4EF]/90 border-l-2 border-[#B8924A] pl-6">They are paid to ask the questions their clients do not know how to ask themselves.</p>

          <p>Having worked with some founders, I noticed that some of them rarely lack ideas. Instead they lack the words to explain them. As a ghostwriter, I changed my strategy and began asking better questions.</p>

          <p>Some clients have brilliant thoughts in their heads. But when they try to explain them, everything comes out scattered. So instead of waiting for clarity, I create it.</p>

          <h2 className="font-serif text-3xl font-light text-[#F7F4EF] pt-6">The 4 Types of Questions That Unlock Clarity</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-6 hover:border-[#B8924A] transition-colors duration-200">
              <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-3">Context Questions</div>
              <p className="text-sm text-[#F7F4EF]/70 leading-relaxed">Why are we saying this now? What triggered this thought? These questions ground the content in a moment and make it timely and relevant.</p>
            </div>
            <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-6 hover:border-[#B8924A] transition-colors duration-200">
              <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-3">Perspective Questions</div>
              <p className="text-sm text-[#F7F4EF]/70 leading-relaxed">What do you believe that most people get wrong? These questions unlock the bold, original opinions that make content stand out.</p>
            </div>
            <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-6 hover:border-[#B8924A] transition-colors duration-200">
              <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-3">Emotion Questions</div>
              <p className="text-sm text-[#F7F4EF]/70 leading-relaxed">What frustrated you about this? What excites you about it? Emotion is what makes content human and worth reading.</p>
            </div>
            <div className="bg-[#161614] border border-[#B8924A]/20 rounded-sm p-6 hover:border-[#B8924A] transition-colors duration-200">
              <div className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase mb-3">Specificity Questions</div>
              <p className="text-sm text-[#F7F4EF]/70 leading-relaxed">Can you give a real example? What actually happened? Specificity is what separates authority content from generic advice.</p>
            </div>
          </div>

          <p>This is how ghostwriters turn scattered thoughts into authority content. The quality of your writing will always be limited by the quality of your questions.</p>

          <div className="border-t border-[#B8924A]/20 pt-10 mt-10">
            <p className="font-serif text-xl italic text-[#F7F4EF]/70">The best ghostwriters are not just writers. They are investigators.</p>
            <p className="text-sm text-[#7A7570] mt-4">— Ella, Ghostwriter and Content Strategist</p>
            <a href="#contact" className="inline-block mt-8 bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-colors duration-200">Work With Emmanuella</a>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}