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
          src="/images/home/quadras/background-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover blur-[5px]"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03050b]/85 via-[#03050b]/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03050b]/80 via-[#03050b]/15 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Cabeçalho */}
        <div className="mb-10 max-w-2xl sm:mb-14">
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

          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg">
            Cinco quadras, estrutura completa e um espaço pensado para
            transformar cada partida em uma experiência melhor.
          </p>
        </div>

        {/* GALERIA */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.5fr_1fr]">
          {/* IMAGEM 1 */}
          <div className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/15 sm:min-h-[620px]">
            <Image
              src="/images/home/quadras/quadra-1.webp"
              alt="Visão geral das quadras do Paulínia Sports Club"
              fill
              sizes="(max-width: 1024px) 60vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/70 sm:text-xs">
                Paulínia Sports Club
              </p>

              <h3 className="mt-2 max-w-xl text-lg font-medium tracking-tight text-white sm:text-3xl">
                Cinco quadras. Um espaço completo para jogar.
              </h3>
            </div>
          </div>

          {/* IMAGENS 2 E 3 */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1">
            {/* IMAGEM 2 */}
            <div className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/15 sm:min-h-[340px] lg:h-[calc(50%-10px)]">
              <Image
                src="/images/home/quadras/quadra-2.webp"
                alt="Quadra descoberta do Paulínia Sports Club"
                fill
                sizes="(max-width: 1024px) 40vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                  Quadra
                </p>

                <h3 className="mt-1 text-sm font-medium text-white sm:text-2xl">
                  Estrutura para jogar de verdade.
                </h3>
              </div>
            </div>

            {/* IMAGEM 3 */}
            <div className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/15 sm:min-h-[340px] lg:h-[calc(50%-10px)]">
              <Image
                src="/images/home/quadras/quadra-3.webp"
                alt="Quadra coberta do Paulínia Sports Club"
                fill
                sizes="(max-width: 1024px) 40vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                  Quadra coberta
                </p>

                <h3 className="mt-1 text-sm font-medium text-white sm:text-2xl">
                  Jogue com mais possibilidades.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* INFORMAÇÕES */}
        <div className="mt-4 grid grid-cols-[1fr_auto_auto] gap-2 sm:mt-5 sm:gap-5 md:grid-cols-[1fr_auto_auto]">
          {/* CTA / LOCALIZAÇÃO */}
          <div className="flex min-w-0 items-center gap-2 rounded-3xl border border-white/15 bg-black/20 p-3 backdrop-blur-md sm:gap-4 sm:p-7">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] sm:h-11 sm:w-11">
              <MapPin
                size={17}
                strokeWidth={1.8}
                className="text-white/80"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-white sm:text-sm">
                Paulínia, SP
              </p>

              <p className="mt-1 hidden text-xs text-white/50 sm:block">
                Um espaço pensado para quem gosta de jogar.
              </p>
            </div>
          </div>

          {/* 05 QUADRAS */}
          <div className="rounded-3xl border border-white/15 bg-black/20 px-3 py-3 backdrop-blur-md sm:px-7 sm:py-6">
            <span className="text-xl font-medium tracking-tight text-white sm:text-3xl">
              05
            </span>

            <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/50 sm:text-[11px]">
              Quadras
            </p>
          </div>

          {/* 01 COBERTA */}
          <div className="rounded-3xl border border-white/15 bg-black/20 px-3 py-3 backdrop-blur-md sm:px-7 sm:py-6">
            <span className="text-xl font-medium tracking-tight text-white sm:text-3xl">
              01
            </span>

            <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/50 sm:text-[11px]">
              Coberta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}