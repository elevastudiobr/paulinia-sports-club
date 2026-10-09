"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const slides = [
  {
    image: "/images/home/hero/hero-1.webp",
    alt: "Quadras do Paulínia Sports Club",
  },
  {
    image: "/images/home/hero/hero-2.webp",
    alt: "Espaço do Paulínia Sports Club",
  },
  {
    image: "/images/home/hero/hero-3.webp",
    alt: "Quadra do Paulínia Sports Club",
  },
];

const whatsappUrl =
  "https://wa.me/5511974670706?text=" +
  encodeURIComponent(
    "Olá! Gostaria de alugar uma quadra no Paulínia Sports Club. Poderiam me passar os horários disponíveis?"
  );

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#050817]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-[1800ms] ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[7000ms] ${
                index === currentSlide ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-black/20" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.65,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-white/60" />

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/70">
                Paulínia Sports Club
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              Quantos golaços seus
              <br />
              <span className="text-white/75">
                ficaram sem prova?
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-lg text-base leading-7 text-white/70 sm:text-lg"
            >
              Aqui toda partida é gravada. Escolha a quadra, chame o time e
              leve o lance pra casa.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90"
              >
                Alugar uma quadra

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/escola-spfc"
                className="flex items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Conhecer a Escola Oficial SPFC
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : 0.8,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Ir para imagem ${index + 1}`}
              aria-pressed={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 bg-white"
                  : "w-6 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}