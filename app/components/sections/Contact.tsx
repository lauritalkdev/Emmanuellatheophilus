export default function Contact() {
  return (
    <section id="contact" className="bg-[#0E0E0E] text-[#F7F4EF] px-14 py-28 border-t border-[#B8924A]/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-7 h-[1px] bg-[#B8924A]" />
        <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">Let's Talk</span>
      </div>
      <h2 className="font-serif text-6xl font-light leading-tight mb-16">Serious about building a brand that <span className="italic text-[#B8924A]">leads its space?</span></h2>
      <div className="grid grid-cols-2 gap-20">
        <div>
          <p className="text-base font-light text-[#F7F4EF]/60 leading-relaxed mb-10">If you are tired of being the best-kept secret in your industry, this is where it changes. Reach out through any of the channels below and let's explore what's possible for your brand.</p>
          <div className="flex flex-col gap-4 mb-10">
            <a href="mailto:emmanuellatheophilus1@gmail.com" className="flex items-center gap-4 p-5 bg-[#161614] border border-[#B8924A]/20 hover:border-[#B8924A] rounded-sm transition-colors duration-200">
              <div className="w-10 h-10 rounded-full border border-[#B8924A]/30 flex items-center justify-center text-base">✉</div>
              <div>
                <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#B8924A] mb-1">Email</span>
                <span className="text-sm font-light text-[#F7F4EF]/70">emmanuellatheophilus1@gmail.com</span>
              </div>
            </a>
            <a href="https://wa.me/2348100856025" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 bg-[#161614] border border-[#B8924A]/20 hover:border-[#B8924A] rounded-sm transition-colors duration-200">
              <div className="w-10 h-10 rounded-full border border-[#B8924A]/30 flex items-center justify-center text-base">💬</div>
              <div>
                <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#B8924A] mb-1">WhatsApp</span>
                <span className="text-sm font-light text-[#F7F4EF]/70">+234 810 085 6025</span>
              </div>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/emmanuella-theophilus-681b0725b" target="_blank" rel="noreferrer" className="border border-[#B8924A]/20 hover:border-[#B8924A] hover:text-[#B8924A] text-[#F7F4EF] text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-sm transition-colors duration-200">LinkedIn</a>
            <a href="https://x.com/emmanuellatheo" target="_blank" rel="noreferrer" className="border border-[#B8924A]/20 hover:border-[#B8924A] hover:text-[#B8924A] text-[#F7F4EF] text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-sm transition-colors duration-200">Twitter / X</a>
          </div>
        </div>
        <form action={`mailto:emmanuellatheophilus1@gmail.com`} method="get" encType="text/plain" className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8924A]">Full Name</label>
              <input type="text" placeholder="Your name" className="bg-[#161614] border border-[#B8924A]/20 focus:border-[#B8924A] text-[#F7F4EF] placeholder-[#7A7570] px-4 py-3 rounded-sm text-sm font-light outline-none transition-colors duration-200" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8924A]">Email</label>
              <input type="email" placeholder="you@company.com" className="bg-[#161614] border border-[#B8924A]/20 focus:border-[#B8924A] text-[#F7F4EF] placeholder-[#7A7570] px-4 py-3 rounded-sm text-sm font-light outline-none transition-colors duration-200" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8924A]">Your Role / Company</label>
            <input type="text" placeholder="e.g. CEO at Acme Corp" className="bg-[#161614] border border-[#B8924A]/20 focus:border-[#B8924A] text-[#F7F4EF] placeholder-[#7A7570] px-4 py-3 rounded-sm text-sm font-light outline-none transition-colors duration-200" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8924A]">Service Interested In</label>
            <select className="bg-[#161614] border border-[#B8924A]/20 focus:border-[#B8924A] text-[#F7F4EF] px-4 py-3 rounded-sm text-sm font-light outline-none transition-colors duration-200">
              <option value="">Select a service</option>
              <option>LinkedIn & X Ghostwriting</option>
              <option>Content Strategy</option>
              <option>Brand Voice Development</option>
              <option>Thought Leadership Strategy</option>
              <option>Long-Form Articles & Newsletters</option>
              <option>Content Audit & Repositioning</option>
              <option>Executive Content Retainer</option>
              <option>The Presence Plan</option>
              <option>The Authority Plan</option>
              <option>The Dominance Plan</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8924A]">Tell Me About Your Brand</label>
            <textarea rows={4} placeholder="What challenge are you solving? What does authority look like for you?" className="bg-[#161614] border border-[#B8924A]/20 focus:border-[#B8924A] text-[#F7F4EF] placeholder-[#7A7570] px-4 py-3 rounded-sm text-sm font-light outline-none transition-colors duration-200 resize-none" />
          </div>
          <button type="submit" className="self-start bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-colors duration-200">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}