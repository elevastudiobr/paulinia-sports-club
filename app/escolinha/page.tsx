import Hero from "@/components/escolinha/Hero";
import About from "@/components/escolinha/About";
import Gallery from "@/components/escolinha/Gallery";
import FinalCTA from "@/components/escolinha/FinalCTA";

export default function EscolinhaPage() {
  return (
    <main className="bg-[#050817] text-white">
      <Hero />
      <About />
      <Gallery />
      <FinalCTA />
    </main>
  );
}