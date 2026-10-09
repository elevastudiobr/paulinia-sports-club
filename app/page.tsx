import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Space from "@/components/home/Space";
import Differentials from "@/components/home/Differentials";
import Booking from "@/components/home/Booking";
import Structure from "@/components/home/Structure";
import Gallery from "@/components/home/Gallery";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Paulínia Sports Club | Locação de Quadras",
  description:
    "Conheça o Paulínia Sports Club em Paulínia. Quadras esportivas e estrutura completa para reunir os amigos e viver uma ótima experiência jogando futebol.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paulínia Sports Club | Locação de Quadras",
    description:
      "Alugue sua quadra no Paulínia Sports Club em Paulínia e aproveite uma estrutura completa para jogar futebol.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function Home() {
  return (
    <main className="bg-[#050817] text-white">
      <Hero />
      <Space />
      <Differentials />
      <Booking />
      <Structure />
      <Gallery />
      <FinalCTA />
    </main>
  );
}