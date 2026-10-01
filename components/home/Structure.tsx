import Image from "next/image";
import {
  Camera,
  Armchair,
  Shirt,
  Flame,
  Coffee,
  CarFront,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    number: "01",
    title: "Câmeras",
    description:
      "Registre gols, jogadas e os melhores momentos da sua partida.",
    image: "/images/home/estrutura/cameras.png",
    large: true,
  },
  {
    icon: Armchair,
    number: "02",
    title: "Banco de reserva",
    description:
      "Mais organização e conforto para quem está esperando a próxima partida.",
    image: "/images/home/estrutura/banco.png",
    large: true,
  },
  {
    icon: Shirt,
    number: "03",
    title: "Vestiários",
    description:
      "Espaço para se preparar antes e depois do jogo.",
    image: "/images/home/estrutura/vestiarios.png",
    large: false,
  },
  {
    icon: Flame,
    number: "04",
    title: "Churrasqueira",
    description:
      "Depois do jogo, a resenha continua em um espaço preparado para isso.",
    image: "/images/home/estrutura/churrasqueira.png",
    large: false,
  },
  {
    icon: Coffee,
    number: "05",
    title: "Lanchonete",
    description:
      "Tenha praticidade para aproveitar o espaço sem precisar sair.",
    image: "/images/home/estrutura/lanchonete.png",
    large: false,
  },
  {
    icon: CarFront,
    number: "06",
    title: "Estacionamento",
    description:
      "Mais de 50 vagas para você chegar, jogar e aproveitar o espaço com tranquilidade.",
    image: "/images/home/estrutura/estacionamento.png",
    large: false,
  },
];

export default function Structure() {
  return (
    <section
      id="estrutura"
      className="relative overflow-hidden bg-[#06120d] py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Verde claro principal */}
      <div className="pointer-events-none absolute -left-[18%] -top-[15%] h-[850px] w-[850px] rounded-full bg-emerald-400/[0.18] blur-[190px]" />

      {/* Verde médio */}
      <div className="pointer-events-none absolute left-[35%] top-[15%] h-[650px] w-[650px] rounded-full bg-emerald-500/[0.10] blur-[180px]" />

      {/* Verde escuro */}
      <div className="pointer-events-none absolute -right-[20%] bottom-[-10%] h-[850px] w-[850px] rounded-full bg-green-950/[0.85] blur-[100px]" />

      {/* Gradient principal */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#123f2b_0%,#0b291d_30%,#06170f_65%,#020906_100%)]" />

      {/* Luz verde atravessando o fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(52,211,153,0.16)_0%,transparent_38%,rgba(6,78,59,0.16)_72%,transparent_100%)]" />

      {/* Glow central */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(74,222,128,0.14),transparent_38%)]" />

      {/* Escurecimento inferior */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020906]/45 via-transparent to-transparent" />

      {/* Textura sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =====================================================
            CABEÇALHO
        ====================================================== */}

        <div className="mb-14 max-w-3xl sm:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-300/80" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-200/75">
              Estrutura
            </span>
          </div>

          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            Tudo para você
            <br />
            <span className="text-white/55">
              aproveitar o jogo.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Uma estrutura completa para que você aproveite cada momento,
            desde a chegada até depois da partida.
          </p>
        </div>

        {/* =====================================================
            CARDS PRINCIPAIS
        ====================================================== */}

        <div className="grid gap-5 lg:grid-cols-2">
          {features
            .filter((feature) => feature.large)
            .map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/10 bg-[#07100d] transition-all duration-500 hover:border-emerald-400/30"
                >
                  {/* Imagem */}
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Overlay da imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />

                  {/* Verde sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-transparent" />

                  {/* Número */}
                  <span className="absolute right-7 top-4 text-[120px] font-medium leading-none tracking-[-0.09em] text-white/[0.08] sm:right-10 sm:text-[150px]">
                    {feature.number}
                  </span>

                  {/* Conteúdo */}
                  <div className="relative flex min-h-[500px] flex-col justify-end p-8 sm:p-10">

                    {/* Ícone */}
                    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/20 backdrop-blur-md">
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        className="text-white"
                      />
                    </div>

                    {/* Título */}
                    <h3 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                      {feature.title}
                    </h3>

                    {/* Descrição */}
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                      {feature.description}
                    </p>

                    {/* Rodapé */}
                    <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">
                        Paulínia Sports Club
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition-all duration-300 group-hover:border-emerald-300/40 group-hover:bg-emerald-400/10">
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.6}
                          className="text-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* =====================================================
            CARDS SECUNDÁRIOS
        ====================================================== */}

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features
            .filter((feature) => !feature.large)
            .map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="group relative min-h-[390px] overflow-hidden rounded-[26px] border border-white/10 bg-[#07100d] transition-all duration-500 hover:border-emerald-400/30"
                >
                  {/* Imagem */}
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>

                  {/* Overlay da imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                  {/* Verde sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-transparent" />

                  {/* Número */}
                  <span className="absolute right-5 top-2 text-7xl font-medium leading-none tracking-[-0.08em] text-white/[0.08]">
                    {feature.number}
                  </span>

                  {/* Conteúdo */}
                  <div className="relative flex min-h-[390px] flex-col justify-end p-7 sm:p-8">

                    {/* Ícone */}
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/20 backdrop-blur-md transition-all duration-300 group-hover:border-emerald-300/30 group-hover:bg-emerald-400/10">
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        className="text-white transition-colors duration-300 group-hover:text-emerald-300"
                      />
                    </div>

                    {/* Título */}
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {feature.title}
                    </h3>

                    {/* Descrição */}
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      {feature.description}
                    </p>

                    {/* Indicador */}
                    <div className="mt-6 flex items-center gap-2">
                      <span className="h-px w-6 bg-emerald-400/60 transition-all duration-300 group-hover:w-10" />

                      <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                        Estrutura
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* =====================================================
            FINAL
        ====================================================== */}

        <div className="mt-16 border-t border-white/[0.10] pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-xl text-sm leading-6 text-white/40">
              Cada detalhe foi pensado para tornar sua experiência melhor
              antes, durante e depois da partida.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                Estrutura completa
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}