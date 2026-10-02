import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Navigation } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5511974670706?text=" +
  encodeURIComponent(
    "Olá! Gostaria de agendar um horário para jogar no Paulínia Sports Club. Poderiam me passar as opções de horários disponíveis?"
  );

const mapsUrl =
  "https://www.google.com/maps/place/paulinia+sport+club/data=!4m2!3m1!1s0x94c8bf1df3a9b969:0xbc27b699af87c5d8?sa=X&ved=1t:242&ictx=111";

const mapsEmbedUrl =
  "https://www.google.com/maps?q=Paul%C3%ADnia%20Sport%20Club&output=embed";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#050817] py-24 sm:py-32 lg:py-40"
    >
      {/* =========================
          BACKGROUND
      ========================== */}
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

        {/* Luz verde esquerda */}
        <div className="absolute -left-[15%] top-[10%] h-[600px] w-[600px] rounded-full bg-emerald-500/[0.14] blur-[170px]" />

        {/* Luz verde direita */}
        <div className="absolute -right-[12%] top-[30%] h-[650px] w-[650px] rounded-full bg-green-500/[0.12] blur-[180px]" />

        {/* Luz central */}
        <div className="absolute left-1/2 top-[45%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-400/[0.07] blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.30)_100%)]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050817]/80 via-[#050817]/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050817] via-[#050817]/45 to-transparent" />
      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* =========================
              LEFT
          ========================== */}
          <div className="max-w-3xl">
            {/* LABEL */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-300/80" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-200/80">
                Paulínia Sports Club
              </span>
            </div>

            {/* TITLE */}
            <h2 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Seu próximo jogo
              <br />
              <span className="text-white/55">começa aqui.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Escolha seu horário, reúna seu time e venha viver a experiência
              do Paulínia Sports Club.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                href="/escolinha"
                className="flex w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.12] sm:w-auto"
              >
                Conhecer a Escola Oficial SPFC
              </a>
            </div>
          </div>

          {/* =========================
              MAP
          ========================== */}
          <div className="relative">
            <div className="overflow-hidden rounded-[30px] border border-white/15 bg-black/30 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.40)] backdrop-blur-md">
              {/* MAP HEADER */}
              <div className="flex items-center justify-between px-3 py-3.5 sm:px-5 sm:py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 sm:h-10 sm:w-10">
                    <MapPin
                      size={17}
                      className="text-emerald-300 sm:size-[18px]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Paulínia Sports Club
                    </p>

                    <p className="mt-0.5 text-xs text-white/45">
                      Localização
                    </p>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAP */}
              <div className="relative overflow-hidden rounded-[22px]">
                <iframe
                  src={mapsEmbedUrl}
                  title="Localização do Paulínia Sports Club"
                  width="100%"
                  height="390"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[250px] w-full grayscale-[0.15] contrast-[1.05] sm:h-[390px]"
                />

                {/* FADE */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent sm:h-24" />
              </div>

              {/* MAP BUTTON */}
              <div className="px-3 py-3.5 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-4">
                {/* TEXTO */}
                <div className="mb-2.5 flex items-center gap-2 text-[11px] text-white/45 sm:mb-0 sm:text-xs">
                  <Navigation
                    size={13}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />

                  <span>Encontre o clube</span>
                </div>

                {/* BOTÃO */}
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
          </div>
        </div>
      </div>
    </section>
  );
}