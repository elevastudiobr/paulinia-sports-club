"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Trees,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const whatsappUrl =
  "https://wa.me/5511974670706?text=" +
  encodeURIComponent(
    "Olá! Gostaria de saber os horários e os valores para alugar uma quadra no Paulínia Sports Club."
  );

const clubAddress =
  "Av. Dr. Heitor Nascimento, 809, Paulínia - SP, 13140-262";

const mapsUrl =
  "https://www.google.com/maps/place/Paul%C3%ADnia+Sports+Club/@-22.769574,-47.1462332,17z/data=!4m10!1m2!2m1!1sPaul%C3%ADnia+Sports+Club,+Av.+Dr.+Heitor+Nascimento,+809,+Paul%C3%ADnia+-+SP,+13140-262!3m6!1s0x94c8bf1df3a9b969:0xbc27b699af87c5d8!8m2!3d-22.769574!4d-47.1417271!15sClBQYXVsw61uaWEgU3BvcnRzIENsdWIsIEF2LiBEci4gSGVpdG9yIE5hc2NpbWVudG8sIDgwOSwgUGF1bMOtbmlhIC0gU1AsIDEzMTQwLTI2MpIBDHNvY2Nlcl9maWVsZOABAA!16s%2Fg%2F11fb134p62?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D";

const courts = [
  {
    image: "/images/home/quadras/quadra-1.webp",
    alt: "Quadras do Paulínia Sports Club",
    label: "05 quadras",
    title: "Nenhuma desculpa pra faltar no jogo",
    description:
      "Espaço de sobra pra reunir o time e transformar qualquer dia em dia de jogo.",
    type: "Nossa estrutura",
  },
  {
    image: "/images/home/quadras/quadra-2.webp",
    alt: "Quadras descobertas do Paulínia Sports Club",
    label: "04 descobertas",
    title: "O jogo acontece aqui",
    description:
      "Chame os amigos, monte seu time e aproveite cada partida ao ar livre.",
    type: "Quadras descobertas",
  },
  {
    image: "/images/home/quadras/quadra-3.webp",
    alt: "Quadra coberta do Paulínia Sports Club",
    label: "01 coberta",
    title: "A partida não para",
    description:
      "Uma opção coberta pra você reunir o time e manter a bola rolando.",
    type: "Quadra coberta",
  },
];

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Space() {
  return (
    <section
      id="espaco"
      className="relative overflow-hidden bg-[#03050b] py-24 text-white sm:py-32 lg:py-36"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/quadras/background-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover blur-[6px]"
        />

        <div className="absolute inset-0 bg-[#03050b]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03050b]/65 via-[#03050b]/70 to-[#03050b]" />

        <div className="absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-blue-500/[0.08] blur-[150px]" />
        <div className="absolute -right-40 top-[45%] h-[480px] w-[480px] rounded-full bg-[#142D72]/[0.06] blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* HEADER */}
        <Reveal className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-300/80" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-200/80">
              Conheça nossa estrutura
            </span>
          </div>

          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            Cinco quadras.
            <br />
            <span className="text-white/50">
              Nenhuma desculpa pra faltar no jogo.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Cinco quadras, espaço para reunir seu time e uma estrutura
            preparada para quem leva cada partida a sério. Confira os detalhes
            e consulte a disponibilidade para jogar.
          </p>

          {/* QUICK INFO */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5">
              <Trees size={15} className="text-emerald-300" />
              <span className="text-xs text-white/75">5 quadras</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5">
              <ShieldCheck size={15} className="text-emerald-300" />
              <span className="text-xs text-white/75">1 quadra coberta</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5">
              <MapPin size={15} className="text-emerald-300" />
              <span className="text-xs text-white/75">Paulínia, SP</span>
            </div>
          </div>
        </Reveal>

        {/* COURTS GALLERY */}
        <div className="grid gap-4 md:grid-cols-3">
          {courts.map((court, index) => (
            <Reveal key={court.label} delay={index * 0.12}>
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
                <div className="relative h-[260px] overflow-hidden sm:h-[300px]">
                  <Image
                    src={court.image}
                    alt={court.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                    {court.type}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                      {court.label}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-sm leading-6 text-white/55">
                    {court.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* PRICING */}
        <Reveal delay={0.05} className="mt-6">
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 sm:p-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.08]">
                <CalendarDays size={20} className="text-emerald-300" />
              </div>

              <h3 className="mt-6 text-2xl font-medium tracking-tight">
                Sua próxima partida começa aqui.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
                Consulte os valores da locação, escolha o melhor horário para
                seu grupo e combine os detalhes diretamente com nossa equipe.
              </p>

              <p className="mt-6 text-sm font-medium text-emerald-200">
                Valores sob consulta
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90 md:w-auto"
            >
              Consultar valores no WhatsApp

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>

        {/* ADDRESS */}
        <Reveal delay={0.05} className="mt-6">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.08]">
                <MapPin size={20} className="text-emerald-300" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Onde estamos
                </p>

                <h3 className="mt-2 text-lg font-medium">
                  Paulínia Sports Club
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                  {clubAddress}
                </p>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium transition hover:border-white/30 hover:bg-white/[0.1]"
            >
              Abrir no Google Maps

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}