
"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Trophy,
  Users,
  Star,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    icon: Users,
    eyebrow: "Desenvolvimento esportivo",
    title: "Oportunidades na base",
    description:
      "Avaliações periódicas na escola e nos campeonatos organizados pelo clube criam oportunidades para jovens talentos serem observados.",
    detail: "Avaliações e acompanhamento",
  },
  {
    number: "02",
    icon: Trophy,
    eyebrow: "Experiência Tricolor",
    title: "Copa Tricolor em Cotia",
    description:
      "A oportunidade de participar da Copa Tricolor no Centro de Formação de Atletas do São Paulo FC, em Cotia.",
    detail: "Vivência no ambiente de formação do clube",
  },
  {
    number: "03",
    icon: Star,
    eyebrow: "Uma experiência especial",
    title: "Perto dos jogadores no Morumbi",
    description:
      "Viver a emoção de entrar em campo bem próximo aos jogadores do Tricolor e guardar uma lembrança especial dessa experiência.",
    detail: "Uma experiência para levar para a vida",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative isolate overflow-hidden bg-[#080B16] py-14 text-white sm:py-20 lg:py-32"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/escolinha/beneficios/background-beneficios.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#080B16]/75" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#080B16]/65 via-transparent to-[#080B16]/90" />
      </div>

      {/* BRILHOS AMBIENTAIS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 -z-10 h-64 w-64 rounded-full bg-red-700/[0.12] blur-[100px] sm:-left-48 sm:h-[420px] sm:w-[420px] sm:blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-64 w-64 rounded-full bg-red-600/[0.09] blur-[100px] sm:-right-48 sm:h-[420px] sm:w-[420px] sm:blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-9 max-w-3xl sm:mb-16 lg:mb-20"
        >
          <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
            <span className="h-px w-6 bg-red-500 sm:w-9" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-red-300 sm:text-sm sm:tracking-[0.16em]">
              Vantagens de vestir a nossa camisa
            </span>
          </div>

          <h2 className="max-w-2xl text-[27px] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl sm:leading-tight lg:text-5xl">
            Fazer parte da escola é viver o{" "}
            <span className="text-red-400">São Paulo FC</span> além dos
            treinos.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:mt-5 sm:text-lg sm:leading-8">
            Mais do que aprender futebol, os alunos têm a oportunidade de
            participar de experiências que aproximam sua formação do universo
            Tricolor.
          </p>
        </motion.div>

        {/* CARDS DE BENEFÍCIOS */}
        <div className="grid grid-cols-1 gap-3.5 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex min-w-0 flex-col rounded-xl border border-white/[0.10] bg-[#080B16]/35 p-5 backdrop-blur-[2px] transition-colors duration-300 hover:border-red-500/30 hover:bg-[#080B16]/50 sm:rounded-2xl sm:p-7 lg:p-8"
              >
                <div className="mb-5 flex items-center justify-between sm:mb-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.08] text-red-300 sm:h-11 sm:w-11 sm:rounded-xl">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-medium tabular-nums text-white/35 sm:text-sm">
                    {benefit.number}
                  </span>
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-red-300 sm:text-xs sm:tracking-[0.13em]">
                  {benefit.eyebrow}
                </p>

                <h3 className="mt-2.5 text-lg font-semibold leading-snug tracking-tight text-white sm:mt-3 sm:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-white/65 sm:mt-4 sm:text-base sm:leading-7">
                  {benefit.description}
                </p>

                <div className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4 sm:mt-7 sm:gap-2.5 sm:pt-5">
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0 text-red-400 sm:h-[17px] sm:w-[17px]"
                  />

                  <span className="text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                    {benefit.detail}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ÁREA DO VÍDEO */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 border-t border-white/10 pt-9 sm:mt-20 sm:pt-16 lg:mt-24 lg:pt-20"
        >
          <div className="grid min-w-0 items-center gap-7 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* TEXTO */}
            <div className="min-w-0 max-w-xl">
              <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
                <span className="h-px w-6 bg-red-500 sm:w-8" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-red-300 sm:text-sm sm:tracking-[0.16em]">
                  Uma experiência real
                </span>
              </div>

              <h3 className="text-[25px] font-semibold leading-[1.18] tracking-tight sm:text-3xl sm:leading-tight lg:text-4xl">
                O futebol também é feito de momentos inesquecíveis.
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/65 sm:mt-5 sm:text-base sm:leading-7">
                Estar perto dos jogadores, conhecer de perto o ambiente do
                estádio e sentir a emoção do futebol de outro jeito. São
                experiências que tornam a trajetória dos alunos ainda mais
                especial.
              </p>

              <div className="mt-5 flex items-start gap-3 sm:mt-7">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-300 sm:h-10 sm:w-10">
                  <Play size={15} fill="currentColor" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-white sm:text-base">
                    Uma visita ao Morumbi
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/50 sm:text-sm sm:leading-6">
                    Confira um registro dessa experiência vivida pelos alunos.
                  </p>
                </div>
              </div>
            </div>

            {/* PLAYER VERTICAL */}
            <div className="relative mx-auto w-full max-w-[240px] min-w-0 sm:max-w-[280px] lg:max-w-[300px]">
              <div
                aria-hidden="true"
                className="absolute -inset-2 -z-10 rounded-3xl bg-red-600/[0.07] blur-xl sm:-inset-3 sm:blur-2xl"
              />

              <div className="overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl shadow-black/30 sm:rounded-2xl">
                <video
                  className="block aspect-[9/16] w-full bg-black object-contain"
                  src="/images/escolinha/beneficios/visita-morumbi.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Vídeo vertical da visita dos alunos ao Morumbi"
                >
                  Seu navegador não consegue reproduzir este vídeo.
                </video>
              </div>

              <p className="mt-2.5 text-center text-[10px] leading-5 text-white/40 sm:mt-3 sm:text-xs">
                Registro da visita dos alunos ao Morumbi.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CHAMADA PARA CONTATO */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mt-10 flex min-w-0 flex-col items-start gap-4 rounded-xl border border-white/10 bg-[#080B16]/45 p-5 backdrop-blur-sm sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:rounded-2xl sm:p-8"
        >
          <div className="min-w-0">
            <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              Faça parte dessa história.
            </p>

            <p className="mt-2 text-sm leading-6 text-white/55 sm:text-base">
              Entre em contato e saiba mais sobre a Escola Oficial SPFC em
              Paulínia.
            </p>
          </div>

          <a
            href="#contato"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-500 sm:w-auto sm:shrink-0 sm:px-6 sm:py-3.5"
          >
            Quero saber mais
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
