"use client";

import Image from "next/image";
import {
  ArrowRight,
  Camera,
  Trophy,
  Users,
  QrCode,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const whatsappUrl =
  "https://wa.me/5511974670706?text=" +
  encodeURIComponent(
    "Olá! Gostaria de agendar uma quadra no Paulínia Sports Club."
  );

const experiences = [
  {
    number: "02",
    icon: Trophy,
    category: "CAMPEONATO INTERNO",
    title: "Gol do Mês",
    subtitle: "O seu lance pode virar destaque.",
    description:
      "Um golaço merece ser lembrado. O Gol do Mês é o campeonato interno que dá destaque aos grandes momentos vividos nas quadras do Paulínia Sports Club.",
    image: "/images/home/differentials/gol-do-mes.webp",
    imageAlt:
      "Jogadores comemorando um gol durante uma partida de futebol",
  },
  {
    number: "03",
    icon: Users,
    category: "EXPERIÊNCIA",
    title: "Nossa comunidade",
    subtitle: "Muito além de uma partida.",
    description:
      "O futebol aproxima pessoas. É reunir os amigos, criar rivalidades saudáveis, comemorar cada gol e construir histórias que continuam depois do apito final.",
    image: "/images/home/differentials/comunidade.webp",
    imageAlt: "Amigos reunidos depois de uma partida de futebol",
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

export default function Differentials() {
  const shouldReduceMotion = useReducedMotion();

  const revealTransition = {
    duration: shouldReduceMotion ? 0 : 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="experiencias"
      className="relative isolate overflow-hidden bg-[#050817] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/home/differentials/background-differentials.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[#050817]/55" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050817]/75 via-[#050817]/45 to-[#050817]" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050817]/65 via-transparent to-[#050817]/45" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-14"
        >
          <motion.div
            variants={revealVariants}
            transition={revealTransition}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-emerald-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300 sm:text-xs">
              Mais que futebol
            </span>
          </motion.div>

          <motion.h2
            variants={revealVariants}
            transition={revealTransition}
            className="max-w-2xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-5xl"
          >
            O jogo vai além
            <br className="hidden sm:block" /> dos quatro tempos.
          </motion.h2>

          <motion.p
            variants={revealVariants}
            transition={revealTransition}
            className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8"
          >
            Tecnologia, competição e amizade fazem parte da experiência.
            Descubra o que torna cada partida no Paulínia Sports Club
            ainda mais especial.
          </motion.p>
        </motion.div>

        {/* Resenha Fut */}
        <motion.article
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            ...revealTransition,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#080d1b]/75 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            {/* Image */}
            <div className="relative min-h-[250px] overflow-hidden sm:min-h-[320px] lg:min-h-[390px]">
              <Image
                src="/images/home/differentials/resenha-fut.webp"
                alt="Jogadores disputando uma partida de futebol na quadra"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050817]/55 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#050817]/70 px-3 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                <Camera size={14} className="text-emerald-300" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[10px]">
                  Tecnologia nas quadras
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-medium tabular-nums text-emerald-300">
                  01
                </span>

                <span className="h-px w-7 bg-white/20" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Resenha Fut
                </span>
              </div>

              <h3 className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl lg:text-[34px]">
                Cada lance tem
                <br className="hidden sm:block" /> uma história.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/65 sm:text-[15px] sm:leading-8">
                Com o Resenha Fut, a emoção do jogo não precisa terminar
                quando a bola entra. O sistema de câmeras registra os
                momentos das partidas para que você possa reviver aquele
                gol, aquela defesa ou a jogada que valeu a resenha.
              </p>

              {/* QR Code */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
                <QrCode
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-300"
                />

                <div>
                  <p className="text-sm font-medium text-white">
                    Seu gol, em vídeo.
                  </p>

                  <p className="mt-1 text-xs leading-6 text-white/60 sm:text-sm">
                    As placas com QR Code nas quadras facilitam o acesso
                    ao Resenha Fut. Escaneie o código para acessar o
                    sistema e encontrar o vídeo do seu lance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Gol do Mês e Nossa Comunidade */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  ...revealTransition,
                  delay: shouldReduceMotion ? 0 : index * 0.14,
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080d1b]/80 backdrop-blur-sm"
              >
                {/* Image */}
                <div className="relative min-h-[210px] overflow-hidden sm:min-h-[240px]">
                  <Image
                    src={experience.image}
                    alt={experience.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1b] via-[#080d1b]/15 to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#050817]/70 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                    <Icon size={13} className="text-emerald-300" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[10px]">
                      {experience.category}
                    </span>
                  </div>

                  <span className="absolute bottom-4 right-5 text-xs tabular-nums text-white/55 sm:right-6">
                    {experience.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col px-5 pb-6 sm:px-7 sm:pb-7">
                  <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                    {experience.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-emerald-300">
                    {experience.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {experience.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ...revealTransition,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="mt-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-7 sm:mt-12 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
              O próximo jogo pode ser o seu.
            </p>

            <p className="mt-2 text-sm leading-6 text-white/55">
              Venha conhecer as quadras e viver essa experiência de perto.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full border border-white/15 bg-white/[0.06] px-5 text-sm font-medium text-white transition-all duration-300 hover:border-emerald-300/40 hover:bg-emerald-300/10 sm:self-auto"
          >
            Agende um Horario
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}