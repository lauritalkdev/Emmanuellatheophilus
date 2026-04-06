import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#F7F4EF] text-[#0E0E0E] px-6 md:px-14 py-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-7 h-[1px] bg-[#B8924A]" />
        <span className="text-[#B8924A] text-[10px] font-semibold tracking-[0.26em] uppercase">The WordBuilt Story</span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-12">Built for the people who are good <span className="italic text-[#B8924A]">and still invisible.</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="w-full h-[500px] relative rounded-sm overflow-hidden">
          <Image src="/images/emmanuella.jpeg" alt="Emmanuella Theophilus" fill className="object-cover object-top" />
        </div>
        <div>
          <blockquote className="font-serif text-xl md:text-2xl font-light italic text-[#0E0E0E] border-l-2 border-[#B8924A] pl-6 mb-8">There is a kind of frustration that comes from knowing you are good at what you do, and watching less experienced people get the recognition you deserve.</blockquote>
          <p className="text-base font-light leading-relaxed text-[#0E0E0E]/65 mb-5">Emmanuella Theophilus built WordBuilt for the people who feel that frustration every time they scroll their feed. As a ghostwriter and content strategist, she works with founders, executives, and corporations to close the gap between the expertise they have and the visibility they deserve.</p>
          <p className="text-base font-light leading-relaxed text-[#0E0E0E]/65 mb-5">Her approach blends deep strategy with impeccable writing. Every post, article, and piece of content is engineered to position her clients as the <strong className="font-semibold text-[#0E0E0E]">obvious authority in their space.</strong></p>
          <p className="text-base font-light leading-relaxed text-[#0E0E0E]/65">WordBuilt is not just a ghostwriting service. It is what happens when someone finally decides their story deserves to be told well.</p>
        </div>
      </div>
    </section>
  );
}