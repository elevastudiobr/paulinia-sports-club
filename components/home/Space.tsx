import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Space() {
  return (
    <section
      id="espaco"
      className="relative overflow-hidden bg-[#03050b] py-24 sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/quadras/background-1.png"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover blur-[5px]"
        />

        {/* Escurecimento leve */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Gradient lateral */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03050b]/85 via-[#03050b]/35 to-transparent" />

        {/* Gradient inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050b]/80 via-[#03050b]/15 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Cabeçalho */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-white/50" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/65">
              O espaço
            </span>
          </div>

          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Um espaço feito
            <br />
            <span className="text-white/70">
              para jogar de verdade.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Cinco quadras, estrutura completa e um espaço pensado para
            transformar cada partida em uma experiência melhor.
          </p>
        </div>

        {/* Galeria */}
        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">

          {/* Imagem principal */}
          <div className="group relative min-h-[480px] overflow-hidden rounded-3xl border border-white/15 sm:min-h-[620px]">
            <Image
              src="/images/home/quadras/quadra-1.jpg"
              alt="Visão geral das quadras do Paulínia Sports Club"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 sm:bottom-10 sm:left-10">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                Paulínia Sports Club
              </p>

              <h3 className="mt-2 max-w-xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Cinco quadras. Um espaço completo para jogar.
              </h3>
            </div>
          </div>

          {/* Imagens secundárias */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

            {/* Quadra descoberta */}
            <div className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/15 sm:min-h-[340px] lg:h-[calc(50%-10px)]">
              <Image
                src="/images/home/quadras/quadra-2.jpg"
                alt="Quadra descoberta do Paulínia Sports Club"
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                  Quadra
                </p>

                <h3 className="mt-1 text-xl font-medium text-white sm:text-2xl">
                  Estrutura para jogar de verdade.
                </h3>
              </div>
            </div>

            {/* Quadra coberta */}
            <div className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/15 sm:min-h-[340px] lg:h-[calc(50%-10px)]">
              <Image
                src="/images/home/quadras/quadra-3.jpg"
                alt="Quadra coberta do Paulínia Sports Club"
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                  Quadra coberta
                </p>

                <h3 className="mt-1 text-xl font-medium text-white sm:text-2xl">
                  Jogue com mais possibilidades.
                </h3>
              </div>
            </div>

          </div>
        </div>

        {/* Informações */}
        <div className="mt-5 grid gap-5 md:grid-cols-[1fr_auto_auto]">

          {/* Localização */}
          <div className="flex items-center gap-4 rounded-3xl border border-white/15 bg-black/20 p-6 backdrop-blur-md sm:p-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08]">
              <MapPin
                size={19}
                strokeWidth={1.8}
                className="text-white/80"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Paulínia, SP
              </p>

              <p className="mt-1 text-xs text-white/50">
                Um espaço pensado para quem gosta de jogar.
              </p>
            </div>
          </div>

          {/* 5 quadras */}
          <div className="rounded-3xl border border-white/15 bg-black/20 px-7 py-6 backdrop-blur-md">
            <span className="text-3xl font-medium tracking-tight text-white">
              05
            </span>

            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/50">
              Quadras
            </p>
          </div>

          {/* 1 coberta */}
          <div className="rounded-3xl border border-white/15 bg-black/20 px-7 py-6 backdrop-blur-md">
            <span className="text-3xl font-medium tracking-tight text-white">
              01
            </span>

            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/50">
              Coberta
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}