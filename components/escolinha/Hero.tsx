"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5519999812525?text=" +
  encodeURIComponent(
    "Olá! Tenho interesse em agendar uma aula na Escola Oficial São Paulo FC em Paulínia. Poderiam me passar mais informações?"
  );

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#050507]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/escolinha/hero/hero-1.webp"
          alt="Escola Oficial São Paulo FC Paulínia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Escurecimento geral */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Gradiente para leitura do conteúdo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />

        {/* Vermelho lateral sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(190,20,35,0.22),transparent_42%)]" />

        {/* Vermelho na região inferior */}
        <div className="absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-t from-[#30070d]/55 via-[#180508]/20 to-transparent" />

        {/* Transição para a próxima seção */}
        <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent to-[#050817]" />

        {/* Linha vermelha decorativa */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-red-600/70 to-transparent" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            {/* IDENTIFICAÇÃO */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                Escola Oficial São Paulo FC
              </p>
            </div>

            {/* TÍTULO */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              Formando atletas.
              <br />
              <span className="text-white/65">
                Formando histórias.
              </span>
            </h1>

            {/* TEXTO */}
            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Futebol, formação e experiências que acompanham cada etapa
              da jornada de jovens atletas dos 4 aos 16 anos.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-white/90"
              >
                Agendar aula

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="#sobre"
                className="flex items-center justify-center rounded-full border border-red-500/35 bg-red-600/[0.08] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-red-500/60 hover:bg-red-600/[0.14]"
              >
                Conhecer a escola
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}