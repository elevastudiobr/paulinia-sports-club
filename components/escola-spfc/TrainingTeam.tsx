"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  GraduationCap,
  ShieldCheck,
  Target,
  Users,
  UsersRound,
} from "lucide-react";

const trainingDetails = [
  {
    id: "categories",
    icon: UsersRound,
    number: "01",
    title: "Categorias por idade",
    description:
      "Treinamentos organizados de acordo com a etapa de desenvolvimento de cada atleta.",
    details: [
      {
        name: "Sub-5",
        description: "Primeiros contatos com o futebol e atividades lúdicas.",
      },
      {
        name: "Sub-7",
        description:
          "Coordenação motora, familiarização com a bola e fundamentos.",
      },
      {
        name: "Sub-9",
        description:
          "Desenvolvimento técnico e introdução à dinâmica do jogo.",
      },
      {
        name: "Sub-11",
        description: "Aprimoramento dos fundamentos e tomada de decisão.",
      },
      {
        name: "Sub-13",
        description: "Evolução técnica, tática e compreensão coletiva.",
      },
      {
        name: "Sub-15",
        description: "Aprofundamento tático e desenvolvimento competitivo.",
      },
      {
        name: "Sub-17",
        description:
          "Preparação esportiva e evolução individual e coletiva.",
      },
    ],
    note: "Categorias ilustrativas. Consulte a escola para confirmar as turmas disponíveis.",
  },
  {
    id: "schedule",
    icon: CalendarDays,
    number: "02",
    title: "Dias e horários",
    description:
      "Uma rotina de treinamentos pensada para integrar o esporte ao dia a dia dos alunos.",
    details: [
      { name: "Segunda-feira", description: "Horários a consultar." },
      { name: "Terça-feira", description: "Horários a consultar." },
      { name: "Quarta-feira", description: "Horários a consultar." },
      { name: "Quinta-feira", description: "Horários a consultar." },
      { name: "Sexta-feira", description: "Horários a consultar." },
      { name: "Sábado", description: "Horários a consultar." },
    ],
    note: "Consulte a escola para verificar os dias, horários e a disponibilidade de cada categoria.",
  },
  {
    id: "development",
    icon: Target,
    number: "03",
    title: "Desenvolvimento esportivo",
    description:
      "Um trabalho que respeita cada etapa do aprendizado e incentiva a evolução dentro de campo.",
    details: [
      {
        name: "Técnica individual",
        description:
          "Prática de passe, domínio, condução e finalização.",
      },
      {
        name: "Consciência tática",
        description:
          "Aprendizado sobre posicionamento, espaço e tomada de decisão.",
      },
      {
        name: "Evolução contínua",
        description:
          "Estímulo à confiança, à dedicação e ao desenvolvimento de cada atleta.",
      },
    ],
    note: "As atividades são adaptadas à faixa etária e à etapa de desenvolvimento dos alunos.",
  },
];

const methodology = [
  {
    icon: Award,
    number: "01",
    title: "Fundamentos do futebol",
    description:
      "Desenvolvimento de passe, domínio, condução, finalização e outras habilidades essenciais.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Leitura de jogo",
    description:
      "Estímulo à percepção de espaço, à tomada de decisão e à compreensão das situações de jogo.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Disciplina e equipe",
    description:
      "Incentivo ao respeito, à responsabilidade, à cooperação e ao espírito coletivo.",
  },
];

const professionals = [
  {
    number: "01",
    role: "Comissão técnica",
    description:
      "Conheça os profissionais envolvidos na orientação dos treinamentos.",
  },
  {
    number: "02",
    role: "Treinamento em campo",
    description:
      "Acompanhamento das atividades e do desenvolvimento dos atletas.",
  },
  {
    number: "03",
    role: "Formação esportiva",
    description:
      "Incentivo ao aprendizado, à disciplina e à evolução dentro e fora de campo.",
  },
];

const whatsappUrl =
  "https://wa.me/5519999812525?text=" +
  encodeURIComponent(
    "Olá! Gostaria de agendar uma aula experimental na Escola Oficial São Paulo FC em Paulínia. Poderiam me informar os horários disponíveis?"
  );

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TrainingTeam() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const shouldReduceMotion = useReducedMotion();

  const revealInitial = shouldReduceMotion ? false : "hidden";
  const revealTransition = {
    duration: shouldReduceMotion ? 0 : 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  function toggleCard(id: string) {
    if (expandedCard === id) {
      setExpandedCard(null);

      requestAnimationFrame(() => {
        cardRefs.current[id]?.scrollIntoView({
          behavior: shouldReduceMotion ? "auto" : "smooth",
          block: "center",
        });
      });

      return;
    }

    setExpandedCard(id);
  }

  return (
    <section
      id="treinamentos"
      className="relative isolate overflow-hidden bg-[#10050B] text-white"
    >
      {/* IMAGEM DE FUNDO */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/images/escolinha/training/training.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* IMAGEM MAIS CLARA E ATMOSFERA AVERMELHADA */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#16040A]/35" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#10040A]/65 via-[#17040B]/25 to-[#10040A]/45" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#12040A]/35 via-[#17040B]/35 to-[#10050B]/95" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(220,25,50,0.28),transparent_48%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(150,10,35,0.22),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        {/* CABEÇALHO */}
        <motion.div
          initial={revealInitial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={revealTransition}
          className="mb-8 max-w-4xl sm:mb-10"
        >
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#10050B]/45 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/85 sm:text-xs">
              Treinamentos e equipe
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Formação dentro de campo.
            <span className="mt-1 block text-white/75">
              Evolução para a vida.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            Uma experiência esportiva que une aprendizado, desenvolvimento
            técnico e valores que acompanham os atletas dentro e fora de campo.
          </p>

          <div className="mt-5 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
        </motion.div>

        {/* CARDS EXPANSÍVEIS */}
        <motion.div
          initial={revealInitial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
              },
            },
          }}
          className="grid gap-4 lg:grid-cols-3 lg:gap-5"
        >
          {trainingDetails.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedCard === item.id;

            return (
              <motion.div
                key={item.id}
                variants={reveal}
                transition={revealTransition}
                ref={(element) => {
                  cardRefs.current[item.id] = element;
                }}
                className={`group relative flex h-fit flex-col overflow-hidden rounded-2xl border bg-[#100811]/75 p-5 backdrop-blur-xl transition-all duration-300 sm:p-6 ${
                  isExpanded
                    ? "border-red-500/55 shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
                    : "border-white/10 hover:border-red-400/35"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-300/40 to-transparent" />

                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10 text-red-300">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-[60px] text-sm leading-6 text-white/70">
                  {item.description}
                </p>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => toggleCard(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`details-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold transition-colors hover:text-red-300"
                  >
                    <span>{isExpanded ? "Ver menos" : "Ver mais"}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-red-400/50">
                      {isExpanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  </button>
                </div>

                {isExpanded && (
                  <motion.div
                    id={`details-${item.id}`}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: -8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.3,
                      ease: "easeOut",
                    }}
                    className="mt-5"
                  >
                    <div className="space-y-3">
                      {item.details.map((detail, index) => (
                        <motion.div
                          key={detail.name}
                          initial={
                            shouldReduceMotion
                              ? { opacity: 1 }
                              : { opacity: 0, y: 8 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.25,
                            delay: shouldReduceMotion ? 0 : index * 0.035,
                          }}
                          className="flex gap-3 border-b border-white/[0.07] pb-3 last:border-0 last:pb-0"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-red-400"
                          />

                          <div>
                            <h4 className="text-sm font-medium text-white/90">
                              {detail.name}
                            </h4>
                            <p className="mt-1 text-xs leading-5 text-white/65">
                              {detail.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <p className="mt-4 rounded-lg border border-white/[0.08] bg-white/[0.035] p-3 text-xs leading-5 text-white/60">
                      {item.note}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* PROFISSIONAIS */}
        <div className="mt-12 sm:mt-14">
          <motion.div
            initial={revealInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={revealTransition}
            className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:items-end"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                Quem acompanha sua evolução
              </span>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Profissionais que fazem a diferença.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                Conheça a equipe que participa da formação e do desenvolvimento
                dos nossos atletas.
              </p>
            </div>

            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-red-500/10 text-red-200 sm:flex">
              <Users size={19} strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.div
            initial={revealInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.14,
                },
              },
            }}
            className="grid gap-4 md:grid-cols-3"
          >
            {professionals.map((professional) => (
              <motion.article
                key={professional.number}
                variants={reveal}
                transition={revealTransition}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#100811]/75 backdrop-blur-xl transition-all duration-300 hover:border-red-400/35"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-[#35101D] via-[#1A0B17] to-[#100811]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,25,50,0.2),transparent_65%)]" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/45 transition-all duration-300 group-hover:border-red-400/40 group-hover:text-red-300">
                    <UsersRound size={30} strokeWidth={1.2} />
                  </div>

                  <span className="absolute left-4 top-4 text-xs tracking-[0.2em] text-white/45">
                    {professional.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#100811] to-transparent" />
                </div>

                <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-300">
                    <span className="h-px w-5 bg-red-500" />
                    Equipe técnica
                  </div>

                  <h4 className="text-lg font-semibold tracking-tight">
                    {professional.role}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {professional.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-white/50">
                    <Award size={14} />
                    <span>Formação e acompanhamento esportivo</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* METODOLOGIA */}
        <div className="mt-12 border-t border-white/10 pt-10 sm:mt-14 sm:pt-12">
          <motion.div
            initial={revealInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={revealTransition}
            className="mb-7 max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
              Nossa metodologia
            </span>

            <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Mais do que jogar futebol.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              O esporte como ferramenta de desenvolvimento, aprendizado e
              construção de valores para cada etapa da formação.
            </p>
          </motion.div>

          <motion.div
            initial={revealInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.12,
                },
              },
            }}
            className="grid gap-6 md:grid-cols-3 md:gap-8"
          >
            {methodology.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={reveal}
                  transition={revealTransition}
                  className="relative"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10 text-red-300">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <span className="text-xs tracking-[0.2em] text-white/35">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold sm:text-xl">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.description}
                  </p>

                  <div className="mt-4 h-px w-full bg-gradient-to-r from-red-500/60 via-white/10 to-transparent" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* CTA — AULA EXPERIMENTAL */}
        <motion.div
          initial={revealInitial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={revealTransition}
          className="relative mt-10 overflow-hidden rounded-2xl border border-red-300/20 bg-gradient-to-br from-[#42101F]/95 via-[#210B18]/95 to-[#100811]/95 p-6 backdrop-blur-xl sm:p-8 lg:p-9"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-red-600/20 blur-3xl" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(220,25,50,0.10),transparent_60%)]" />

          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                <Clock3 size={14} />
                Sua primeira experiência em campo
              </div>

              <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Que tal dar o primeiro passe?
                <span className="mt-1 block text-white/75">
                  Agende uma aula experimental.
                </span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
                Venha conhecer de perto os treinamentos, sentir a experiência
                dentro de campo e dar o primeiro passo na sua jornada com a
                Escola Oficial São Paulo FC.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#190710] transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              Agendar aula experimental
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}