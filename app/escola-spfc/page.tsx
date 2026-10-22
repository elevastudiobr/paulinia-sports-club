
import type { Metadata } from "next";

import Hero from "@/components/escola-spfc/Hero";
import About from "@/components/escola-spfc/About";
import Benefits from "@/components/escola-spfc/Benefits";
import TrainingTeam from "@/components/escola-spfc/TrainingTeam";
import Gallery from "@/components/escola-spfc/Gallery";
import FinalCTA from "@/components/escola-spfc/FinalCTA";

export const metadata: Metadata = {
  title: "Escola Oficial São Paulo FC em Paulínia",
  description:
    "Conheça a Escola Oficial São Paulo FC em Paulínia. Formação esportiva, desenvolvimento de jovens atletas e paixão pelo futebol.",
  alternates: {
    canonical: "/escola-spfc",
  },
  openGraph: {
    title: "Escola Oficial São Paulo FC em Paulínia",
    description:
      "Conheça a Escola Oficial São Paulo FC em Paulínia e saiba mais sobre a formação de jovens atletas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function EscolaSPFCPage() {
  return (
    <main className="bg-[#050817] text-white">
      <Hero />
      <About />
      <Benefits />
      <TrainingTeam />
      <Gallery />
      <FinalCTA />
    </main>
  );
}
