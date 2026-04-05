import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Packages from "./components/sections/Packages";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#F7F4EF]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}