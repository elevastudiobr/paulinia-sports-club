"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Navigation,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const whatsappUrl =
  "https://wa.me/5511974670706?text=" +
  encodeURIComponent(
    "Olá! Gostaria de agendar um horário para jogar no Paulínia Sports Club. Poderiam me passar as opções de horários disponíveis?"
  );

const clubAddress =
  "Av. Dr. Heitor Nascimento, 809, Paulínia - SP, 13140-262";

// Link direto para a ficha do Paulínia Sports Club no Google Maps
const mapsUrl =
  "https://www.google.com/maps/place/Paul%C3%ADnia+Sports+Club/@-22.769574,-47.1462332,17z/data=!4m10!1m2!2m1!1sPaul%C3%ADnia+Sports+Club,+Av.+Dr.+Heitor+Nascimento,+809,+Paul%C3%ADnia+-+SP,+13140-262!3m6!1s0x94c8bf1df3a9b969:0xbc27b699af87c5d8!8m2!3d-22.769574!4d-47.1417271!15sClBQYXVsw61uaWEgU3BvcnRzIENsdWIsIEF2LiBEci4gSGVpdG9yIE5hc2NpbWVudG8sIDgwOSwgUGF1bMOtbmlhIC0gU1AsIDEzMTQwLTI2MpIBDHNvY2Nlcl9maWVsZOABAA!16s%2Fg%2F11fb134p62?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D";

// Mapa incorporado com a localização exata
const mapsEmbedUrl =
  "https://maps.google.com/maps?q=-22.769574,-47.1417271&z=17&output=embed";

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#050817] py-24 sm:py-32 lg:py-40"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero/hero-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover"
        />

        <div className="absolute inset-0 bg-[#02050a]/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02050a]/85 via-[#02050a]/55 to-[#02050a]/35" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#050817]/70 via-transparent to-[#050817]/95" />

        {/* Luzes de fundo */}
        <div className="absolute -left-[15%] top-[10%] h-[600px] w-[600px] rounded-full bg-emerald-500/[0.14] blur-[170px]" />

        <div className="absolute -right-[12%] top-[30%] h-[650px] w-[650px] rounded-full bg-green-500/[0.12] blur-[180px]" />

        <div className="absolute left-1/2 top-[45%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-400/[0.07] blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.30)_100%)]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050817]/80 via-[#050817]/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050817] via-[#050817]/45 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* LEFT */}
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
            className="max-w-3xl"
          >
            <motion.div
              variants={reveal}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-emerald-300/80" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-200/80">
                Paulínia Sports Club
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Seu time já tem dia.
              <br />
              <span className="text-white/55">
                Só falta a quadra.
              </span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
            >
              Escolha seu horário, reúna seu time e venha viver a experiência
              do Paulínia Sports Club.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={reveal}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black shadow-[0_15px_50px_rgba(0,0,0,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto"
              >
                <CalendarDays size={18} strokeWidth={2} />

                Agendar horário

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/escola-spfc"
                className="flex w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.12] sm:w-auto"
              >
                Conhecer a Escola Oficial SPFC
              </a>
            </motion.div>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[30px] border border-white/15 bg-black/30 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.40)] backdrop-blur-md">
              {/* MAP HEADER */}
              <div className="flex items-start justify-between px-3 py-3.5 sm:px-5 sm:py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 sm:h-10 sm:w-10">
                    <MapPin
                      size={18}
                      className="text-emerald-300"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Paulínia Sports Club
                    </p>

                    <p className="mt-1 max-w-xs text-xs leading-5 text-white/50">
                      {clubAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAP */}
              <div className="relative overflow-hidden rounded-[22px]">
                <iframe
                  src={mapsEmbedUrl}
                  title="Localização do Paulínia Sports Club em Paulínia"
                  width="100%"
                  height="390"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[250px] w-full grayscale-[0.15] contrast-[1.05] sm:h-[390px]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent sm:h-24" />
              </div>

              {/* MAP FOOTER */}
              <div className="px-3 py-3.5 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-4">
                <div className="mb-2.5 flex items-center gap-2 text-[11px] text-white/45 sm:mb-0 sm:text-xs">
                  <Navigation
                    size={13}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />

                  <span>Encontre o clube</span>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] sm:w-auto"
                >
                  Ver no Google Maps

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}