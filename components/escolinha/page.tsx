import Hero from "@/components/escolinha/Hero";
import About from "@/components/escolinha/About";
import Competitions from "@/components/escolinha/Competitions";
import FinalCTA from "@/components/escolinha/FinalCTA";

export default function EscolinhaPage() {
  return (
    <main className="bg-[#050817] text-white">
      <Hero />
      <About />
      <Competitions />
      <FinalCTA />
    </main>
  );
}