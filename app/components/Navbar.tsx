"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={scrolled ? "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-14 py-4 bg-[#0E0E0E] border-b border-[#B8924A]/20 transition-all duration-300" : "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-14 py-7 transition-all duration-300"}>
      <Link href="/" className="flex items-center gap-3">
        <div className="w-[3px] h-9 bg-[#B8924A] rounded-sm" />
        <div className="flex flex-col">
          <div className="font-serif text-2xl leading-none">
            <span className="font-bold text-[#F7F4EF]">Word</span>
            <span className="font-semibold italic text-[#B8924A]">Built</span>
          </div>
          <div className="text-[8px] font-semibold tracking-[0.22em] uppercase text-[#7A7570]">
            Ghostwriting · Content Strategy
          </div>
        </div>
      </Link>

      <ul className="hidden md:flex items-center gap-9 list-none">
        <li>
          <a href="#about" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">
            Services
          </a>
        </li>
        <li>
          <a href="#packages" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">
            Packages
          </a>
        </li>
        <li>
          <a href="#results" className="text-[#F7F4EF] opacity-65 hover:text-[#B8924A] text-sm tracking-wider transition-colors duration-200">
            Results
          </a>
        </li>
        <li>
          <a href="#contact" className="bg-[#B8924A] hover:bg-[#D4AD72] text-[#0E0E0E] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm transition-colors duration-200">
            Book a Call
          </a>
        </li>
      </ul>
    </nav>
  );
}