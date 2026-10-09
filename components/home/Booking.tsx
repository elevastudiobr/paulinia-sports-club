"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays, Repeat2, Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const options = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Locação avulsa",
    description:
      "Reserve uma quadra para sua partida e escolha o horário que melhor funciona para o seu grupo.",
    detail: "1 hora ou 1 hora e 30 minutos",
    whatsappMessage:
      "Olá! Tenho interesse na locação avulsa de uma quadra no Paulínia Sports Club. Poderiam me passar os horários disponíveis?",
  },
  {
    icon: Repeat2,
    number: "02",
    title: "Locação mensal",
    description:
      "Mantenha um horário fixo toda semana e reúna seu grupo para jogar regularmente.",
    detail: "Horário recorrente toda semana",
    whatsappMessage:
      "Olá! Tenho interesse na locação mensal de uma quadra no Paulínia Sports Club. Gostaria de saber como funcionam os horários fixos e quais opções estão disponíveis.",
  },
];

const schedule = [
  { day: "Segunda-feira", hours: "Consultar disponibilidade" },
  { day: "Terça-feira", hours: "Consultar disponibilidade" },
  { day: "Quarta-feira", hours: "Consultar disponibilidade" },
  { day: "Quinta-feira", hours: "Consultar disponibilidade" },
  { day: "Sexta-feira", hours: "Consultar disponibilidade" },
  { day: "Sábado", hours: "Consultar disponibilidade" },
  { day: "Domingo", hours: "Consultar disponibilidade" },
];

const generalWhatsappMessage =
  "Olá! Gostaria de agendar um horário para jogar no Paulínia Sports Club. Poderiam me passar as opções de horários disponíveis?";

const generalWhatsappUrl =
  "https://wa.me/5511974670706?text=" +
  encodeURIComponent(generalWhatsappMessage);

export default function Booking() {
  const shouldReduceMotion = useReducedMotion();

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
      },
    },
  };

  return (
    <section
      id="locacao"
      className="relative isolate overflow-hidden bg-[#03050b] py-24 text-white sm:py-32 lg:py-36"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home/quadras/background-2.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />

        <div className="absolute inset-0 bg-[#03050b]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03050b]/90 via-[#03050b]/65 to-[#03050b]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03050b]/40 via-[#03050b]/35 to-[#03050b]/90" />

        <div className="absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-b from-transparent via-[#0a2d1e]/30 to-[#0d3825]/90" />

        <div className="absolute -bottom-48 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* CABEÇALHO */}
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={revealVariants}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-emerald-300/70" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/65">
              Locação
            </span>
          </motion.div>

          <motion.h2
            variants={revealVariants}
            className="text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
          >
            Quem joga toda semana
            <br />
            <span className="text-white/60">
              não fica caçando horário.
            </span>
          </motion.h2>

          <motion.p
            variants={revealVariants}
            className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
          >
            Para uma partida com os amigos ou para quem joga toda semana,
            encontre a forma que melhor combina com você.
          </motion.p>
        </motion.div>

        {/* OPÇÕES DE LOCAÇÃO */}
        <motion.div
          className="grid gap-4 lg:grid-cols-2 lg:gap-6"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {options.map((option) => {
            const Icon = option.icon;

            const whatsappUrl =
              "https://wa.me/5511974670706?text=" +
              encodeURIComponent(option.whatsappMessage);

            return (
              <motion.a
                key={option.number}
                variants={revealVariants}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Agendar ${option.title}`}
                className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-black/30 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200/30 hover:bg-black/40 sm:min-h-[310px] sm:p-9"
              >
                {/* NÚMERO DECORATIVO */}
                <span className="pointer-events-none absolute -right-1 -top-7 text-8xl font-medium tracking-[-0.09em] text-white/[0.045] transition-colors duration-500 group-hover:text-white/[0.08] sm:right-5 sm:top-0 sm:text-[150px]">
                  {option.number}
                </span>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] transition-colors duration-500 group-hover:border-emerald-200/30 group-hover:bg-emerald-300/[0.08]">
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      className="text-emerald-200"
                    />
                  </div>

                  <h3 className="mt-7 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {option.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                    {option.description}
                  </p>
                </div>

                <div className="relative mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="text-xs font-medium uppercase leading-5 tracking-[0.12em] text-white/55 sm:text-sm sm:tracking-[0.15em]">
                    {option.detail}
                  </span>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* HORÁRIOS */}
        <motion.div
          className="mt-6 overflow-hidden rounded-3xl border border-white/15 bg-[#050a0b]/65 backdrop-blur-xl sm:mt-8"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* INTRODUÇÃO DOS HORÁRIOS */}
            <div className="relative overflow-hidden border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/[0.08] blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08]">
                  <Clock3
                    size={21}
                    strokeWidth={1.6}
                    className="text-emerald-200"
                  />
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-emerald-200/75">
                  Funcionamento
                </p>

                <h3 className="mt-3 text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">
                  Consulte os horários da sua próxima partida.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                  A disponibilidade pode variar conforme o dia e o tipo de locação.
                </p>
              </div>
            </div>

            {/* LISTA DE DIAS */}
            <motion.div
              className="p-5 sm:p-8 lg:p-10"
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="grid sm:grid-cols-2 sm:gap-x-8">
                {schedule.map((item) => (
                  <motion.div
                    key={item.day}
                    variants={revealVariants}
                    className="flex min-h-[66px] flex-col justify-center gap-1.5 border-b border-white/[0.08] py-3 sm:min-h-[76px]"
                  >
                    <span className="text-sm font-medium text-white/85">
                      {item.day}
                    </span>

                    <span className="text-xs text-white/45">
                      {item.hours}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-white/40">
                Consulte a equipe para confirmar os horários disponíveis para sua partida.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-5 flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.045] p-6 backdrop-blur-xl sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:p-9"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <p className="text-lg font-medium text-white sm:text-xl">
              Já sabe quando quer jogar?
            </p>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Consulte os horários disponíveis e agende sua quadra.
            </p>
          </div>

          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:bg-emerald-100 sm:w-auto"
          >
            Agendar horário

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}