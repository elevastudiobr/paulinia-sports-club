import Image from "next/image";
import { ArrowRight } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5519999812525?text=" +
  encodeURIComponent(
    "Olá! Tenho interesse em agendar uma aula na Escola Oficial São Paulo FC em Paulínia. Poderiam me passar mais informações?"
  );

const instagramUrl = "https://www.instagram.com/spfcpaulinia/";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#050817] py-24 sm:py-32 lg:py-40"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/escolinha/cta/cta-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(190,20,35,0.28),transparent_45%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-t from-[#170507]/80 via-[#100406]/30 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-[#050817] via-[#050817]/65 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent to-[#050817]" />

        <div className="pointer-events-none absolute -right-[15%] top-[25%] h-[600px] w-[600px] rounded-full bg-red-700/[0.14] blur-[180px]" />

        <div className="pointer-events-none absolute -left-[20%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-red-900/[0.10] blur-[160px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.48)_100%)]" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          {/* EYEBROW */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-red-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Escola Oficial São Paulo FC
            </span>
          </div>

          {/* TÍTULO */}
          <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            O próximo capítulo
            <br />
            <span className="text-white/55">
              começa dentro de campo.
            </span>
          </h2>

          {/* TEXTO */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            Faça parte da Escola Oficial São Paulo FC em Paulínia e descubra
            uma experiência de futebol pensada para acompanhar cada etapa da
            formação.
          </p>

          {/* BOTÕES */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_15px_50px_rgba(0,0,0,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
            >
              Agendar uma aula

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-red-600/[0.10]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[17px] w-[17px] text-white/80 transition-colors duration-300 group-hover:text-red-400"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>

              Conheça nosso Instagram
            </a>
          </div>
        </div>
      </div>

      {/* GLOW FINAL */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 z-10 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-red-950/[0.18] blur-[150px]" />
    </section>
  );
}