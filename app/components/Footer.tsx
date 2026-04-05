export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#B8924A]/20 px-6 md:px-14 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-[2px] h-7 bg-[#B8924A] rounded-sm" />
          <div className="font-serif text-xl leading-none">
            <span className="font-bold text-[#F7F4EF]">Word</span>
            <span className="font-semibold italic text-[#B8924A]">Built</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs text-[#7A7570] tracking-wider">© 2026 WordBuilt · Emmanuella Theophilus · All rights reserved.</p>
          <p className="text-[10px] text-[#7A7570]/40 tracking-widest uppercase">Designed & Built by <a href="https://www.ebongeric.com" target="_blank" rel="noreferrer" className="hover:text-[#B8924A] transition-colors duration-200">Ebong Eric</a></p>
        </div>
        <ul className="flex flex-wrap justify-center gap-6 list-none">
          <li><a href="#about" className="text-[11px] text-[#7A7570] hover:text-[#B8924A] tracking-widest uppercase transition-colors duration-200">About</a></li>
          <li><a href="#services" className="text-[11px] text-[#7A7570] hover:text-[#B8924A] tracking-widest uppercase transition-colors duration-200">Services</a></li>
          <li><a href="#results" className="text-[11px] text-[#7A7570] hover:text-[#B8924A] tracking-widest uppercase transition-colors duration-200">Results</a></li>
          <li><a href="#contact" className="text-[11px] text-[#7A7570] hover:text-[#B8924A] tracking-widest uppercase transition-colors duration-200">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}