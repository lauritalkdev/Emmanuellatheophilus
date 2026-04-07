export default function Hero() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] flex items-center px-6 md:px-14 pt-32 pb-20">
      <div className="text-[#F7F4EF]">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-9 h-[1px] bg-[#B8924A]" />
          <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">Ghostwriting · Content Strategy · Brand Authority</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight tracking-tight mb-8">Your expertise deserves to be <span className="italic text-[#B8924A]">heard.</span></h1>
        <p className="font-serif text-lg md:text-2xl font-light italic text-[#F7F4EF]/60 border-l-2 border-[#B8924A] pl-6 mb-12 max-w-xl">I build content systems that turn visibility into authority and authority into demand.</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a href="https://calendly.com/emmanuellatheophilus1/free-30-min-content-strategy-call" target="_blank" rel="noreferrer" className="bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-colors duration-200">Book a Call</a>
          <a href="#services" className="border border-[#F7F4EF]/20 hover:border-[#B8924A] text-[#F7F4EF] hover:text-[#B8924A] text-xs font-medium tracking-widest uppercase px-8 py-4 rounded-sm transition-colors duration-200">Explore Services</a>
        </div>
      </div>
    </div>
  );
}