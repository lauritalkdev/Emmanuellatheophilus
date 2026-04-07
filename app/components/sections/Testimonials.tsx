const testimonials = [
  { quote: "The last post you sent me got me two leads I am working on. Working with you has helped my brand a lot. Thank you for being the best.", name: "Solomon T", tag: "Founder", initials: "A", wide: true },
  { quote: "You did not tell me you are this good with writing. See how you just captured my mind in my own voice. I highly recommend you!", name: "Ijeoma O", tag: "Professional", initials: "B", wide: false },
  { quote: "The writing was so good. You understood what I wanted so well. I promise to always recommend you.", name: "Chukwuebuka N", tag: "Brand Owner", initials: "C", wide: false },
  { quote: "You make working with you so so easy. Thank you for not stressing me and also helping out when my mind seems blank. The world needs more of you.", name: "Godwill A", tag: "Executive", initials: "D", wide: true },
  { quote: "You are always intentional in anything you set your mind to do. Keep soaring.", name: "Onyenakazi C", tag: "SME Owner", initials: "E", wide: false },
];

export default function Testimonials() {
  return (
    <section id="results" className="bg-[#F7F4EF] text-[#0E0E0E] px-6 md:px-14 py-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-7 h-[1px] bg-[#B8924A]" />
        <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">Client Results</span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-12">What happens when your story is <span className="italic text-[#B8924A]">finally told well.</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className={`bg-[#EDE9E1] border border-[#B8924A]/15 hover:border-[#B8924A] rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 ${t.wide ? "md:col-span-2" : "md:col-span-1"}`}>
            <div className="flex gap-1 mb-5">
              {[1,2,3,4,5].map((s) => <span key={s} className="text-[#B8924A] text-sm">★</span>)}
            </div>
            <p className="font-serif text-lg italic font-light leading-relaxed text-[#0E0E0E] mb-6">"{t.quote}"</p>
            <div className="border-t border-[#0E0E0E]/10 pt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#B8924A] flex items-center justify-center font-serif text-base font-semibold text-[#0E0E0E]">{t.initials}</div>
              <div>
                <div className="text-sm font-semibold text-[#0E0E0E]">{t.name}</div>
                <div className="text-xs text-[#7A7570]">{t.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}