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
  },
  {
    icon: Repeat2,
    number: "02",
    title: "Locação mensal",
    description:
      "Mantenha um horário fixo toda semana e reúna seu grupo para jogar regularmente.",
    detail: "Horário recorrente toda semana",
  },
];

export default function Booking() {
  return (
    <section
      id="locacao"
      className="relative overflow-hidden bg-[#03050b] py-24 sm:py-32 lg:py-40"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/quadras/background-2.png"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover blur-[2px]"
        />

        {/* Escurecimento geral */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Gradient horizontal */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03050b]/85 via-[#03050b]/45 to-[#03050b]/15" />

        {/* Gradient vertical */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050b]/75 via-transparent to-[#03050b]/35" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Cabeçalho */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-white/40" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
              Locação
            </span>
          </div>

          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Escolha como
            <br />
            <span className="text-white/65">
              você quer jogar.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Para uma partida com os amigos ou para quem joga toda semana,
            encontre a forma que melhor combina com você.
          </p>
        </div>

        {/* Opções */}
        <div className="grid gap-5 md:grid-cols-2">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.number}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/30 p-7 backdrop-blur-md transition-all duration-500 hover:border-white/25 hover:bg-black/40 sm:p-9"
              >
                {/* Número decorativo */}
                <span className="absolute right-7 top-4 text-8xl font-medium tracking-[-0.08em] text-white/[0.05] sm:right-9 sm:text-9xl">
                  {option.number}
                </span>

                <div className="relative">
                  {/* Ícone */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.08]">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-white/85"
                    />
                  </div>

                  {/* Título */}
                  <h3 className="mt-9 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {option.title}
                  </h3>

                  {/* Descrição */}
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                    {option.description}
                  </p>

                  {/* Detalhe */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                      {option.detail}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-5 flex flex-col gap-6 rounded-3xl border border-white/15 bg-black/30 p-7 backdrop-blur-md sm:p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-medium text-white">
              Já sabe quando quer jogar?
            </p>

            <p className="mt-1 text-sm text-white/60">
              Consulte os horários disponíveis e agende sua quadra.
            </p>
          </div>

          <a
            href="#contato"
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