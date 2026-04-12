"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseClass = "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-14 transition-all duration-300";
  const scrolledClass = "py-4 bg-[#0E0E0E] border-b border-[#B8924A]/20";
  const normalClass = "py-7";
  const navClass = baseClass + " " + (scrolled ? scrolledClass : normalClass);

  return (
    <>
      <nav className={navClass}>
        <Link href="/" className="flex items-center gap-3">
          <div className="w-[3px] h-9 bg-[#B8924A] rounded-sm" />
          <div className="flex flex-col">
            <div className="font-serif text-2xl leading-none tracking-wide">
              <span className="font-bold text-[#F7F4EF]">Word</span>
              <span className="font-semibold italic text-[#B8924A]">Built</span>
            </div>
            <div className="text-[8px] font-semibold tracking-[0.22em] uppercase text-[#7A7570]">
              Ghostwriting · Content Strategy
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-9 list-none">
          <li><a href="#about" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">About</a></li>
          <li><a href="#services" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">Services</a></li>
          <li><a href="#packages" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">Packages</a></li>
          <li><a href="#results" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">Results</a></li>
          <li><a href="/portfolio" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">Portfolio</a></li>
          <li>
            <a href="#contact" className="bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm transition-colors duration-200">
              Book a Call
            </a>
          </li>
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] p-2">
          <span className={`block w-6 h-[2px] bg-[#F7F4EF] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[#F7F4EF] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[#F7F4EF] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#0E0E0E] flex flex-col items-center justify-center gap-8">
          <a href="#about" onClick={() => setMenuOpen(false)} className="font-serif text-4xl font-light text-[#F7F4EF] hover:text-[#B8924A] transition-colors duration-200">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="font-serif text-4xl font-light text-[#F7F4EF] hover:text-[#B8924A] transition-colors duration-200">Services</a>
          <a href="#packages" onClick={() => setMenuOpen(false)} className="font-serif text-4xl font-light text-[#F7F4EF] hover:text-[#B8924A] transition-colors duration-200">Packages</a>
          <a href="#results" onClick={() => setMenuOpen(false)} className="font-serif text-4xl font-light text-[#F7F4EF] hover:text-[#B8924A] transition-colors duration-200">Results</a>
          <a href="/portfolio" onClick={() => setMenuOpen(false)} className="font-serif text-4xl font-light text-[#F7F4EF] hover:text-[#B8924A] transition-colors duration-200">Portfolio</a>67890-[=]
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-sm font-bold tracking-widest uppercase px-10 py-4 rounded-sm transition-colors duration-200">Book a Call</a>
        </div>
      )}
    </>
  );
}