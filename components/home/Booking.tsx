import Image from "next/image";
import { ArrowRight, CalendarDays, Repeat2 } from "lucide-react";

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

const generalWhatsappMessage =
  "Olá! Gostaria de agendar um horário para jogar no Paulínia Sports Club. Poderiam me passar as opções de horários disponíveis?";

const generalWhatsappUrl =
  "https://wa.me/5511974670706?text=" +
  encodeURIComponent(generalWhatsappMessage);

export default function Booking() {
  return (
    <section
      id="locacao"
      className="relative overflow-hidden bg-[#03050b] py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0">
        <Image
          src="/images/home/quadras/background-2.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />

        {/* Escurecimento geral */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Escurecimento lateral para leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03050b]/90 via-[#03050b]/50 to-[#03050b]/15" />

        {/* Escurecimento inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050b]/80 via-transparent to-[#03050b]/20" />

        {/* =================================================
            TRANSIÇÃO VERDE PARA STRUCTURE
        ================================================== */}

        <div className="absolute inset-x-0 bottom-0 h-[360px] bg-gradient-to-b from-transparent via-[#0a2d1e]/35 to-[#0d3825]" />

        <div className="absolute -bottom-48 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-emerald-500/[0.055] blur-[170px]" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#0d3825]/70" />
      </div>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =================================================
            CABEÇALHO
        ================================================== */}

        <div className="mb-14 max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-white/50" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/70">
              Locação
            </span>
          </div>

          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Escolha como
            <br />
            <span className="text-white/75">
              você quer jogar.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Para uma partida com os amigos ou para quem joga toda semana,
            encontre a forma que melhor combina com você.
          </p>
        </div>

        {/* =================================================
            OPÇÕES
        ================================================== */}

        <div className="grid gap-5 md:grid-cols-2">
          {options.map((option) => {
            const Icon = option.icon;

            const whatsappUrl =
              "https://wa.me/5511974670706?text=" +
              encodeURIComponent(option.whatsappMessage);

            return (
              <a
                key={option.number}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Agendar ${option.title}`}
                className="group relative block overflow-hidden rounded-3xl border border-white/15 bg-black/30 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-black/40 sm:p-9"
              >
                {/* Número gigante */}

                <span className="pointer-events-none absolute right-7 top-4 text-8xl font-medium tracking-[-0.08em] text-white/[0.06] transition-all duration-500 group-hover:text-white/[0.09] sm:right-9 sm:text-9xl">
                  {option.number}
                </span>

                <div className="relative">
                  {/* Ícone */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] transition-all duration-500 group-hover:border-white/25 group-hover:bg-white/[0.12]">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-white/90"
                    />
                  </div>

                  {/* Título */}

                  <h3 className="mt-9 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {option.title}
                  </h3>

                  {/* Descrição */}

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                    {option.description}
                  </p>

                  {/* Detalhe + seta */}

                  <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                      {option.detail}
                    </span>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/65 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                      <ArrowRight
                        size={17}
                        strokeWidth={1.8}
                        className="transition-transform duration-500 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* =================================================
            CTA
        ================================================== */}

        <div className="mt-5 flex flex-col gap-6 rounded-3xl border border-white/15 bg-black/30 p-7 backdrop-blur-md sm:p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-medium text-white">
              Já sabe quando quer jogar?
            </p>

            <p className="mt-1 text-sm text-white/65">
              Consulte os horários disponíveis e agende sua quadra.
            </p>
          </div>

          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90"
          >
            Agendar horário

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}