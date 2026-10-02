import Hero from "@/components/home/Hero";
import Space from "@/components/home/Space";
import Booking from "@/components/home/Booking";
import Structure from "@/components/home/Structure";
import Gallery from "@/components/home/Gallery";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="bg-[#050817] text-white">
      <Hero />
      <Space />
      <Booking />
      <Structure />
      <Gallery />
      <FinalCTA />
    </main>
  );
}