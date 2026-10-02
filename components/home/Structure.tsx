import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Câmeras",
    description:
      "Registre gols, jogadas e os melhores momentos da sua partida.",
    image: "/images/home/estrutura/cameras.webp",
    large: true,
  },
  {
    number: "02",
    title: "Banco de reserva",
    description:
      "Mais organização e conforto para quem está esperando a próxima partida.",
    image: "/images/home/estrutura/banco.webp",
    large: true,
  },
  {
    number: "03",
    title: "Vestiários",
    description:
      "Espaço para se preparar antes e depois do jogo.",
    image: "/images/home/estrutura/vestiarios.webp",
    large: false,
  },
  {
    number: "04",
    title: "Churrasqueira",
    description:
      "Depois do jogo, a resenha continua em um espaço preparado para isso.",
    image: "/images/home/estrutura/churrasqueira.webp",
    large: false,
  },
  {
    number: "05",
    title: "Lanchonete",
    description:
      "Tenha praticidade para aproveitar o espaço sem precisar sair.",
    image: "/images/home/estrutura/lanchonete.webp",
    large: false,
  },
  {
    number: "06",
    title: "Estacionamento",
    description:
      "Mais de 50 vagas para você chegar, jogar e aproveitar o espaço com tranquilidade.",
    image: "/images/home/estrutura/estacionamento.webp",
    large: false,
  },
];

export default function Structure() {
  return (
    <section
      id="estrutura"
      className="relative overflow-hidden bg-[#07100b] py-24 sm:py-32 lg:py-40"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <Image
          src="/images/home/galeria/img-7.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover blur-[2px]"
        />

        <div className="absolute inset-0 bg-black/25" />

        {/* GRADIENTE VERDE — TOPO */}

        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#0d3825] via-[#164d32]/65 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-[650px] bg-gradient-to-b from-[#0d3825]/55 via-[#0b2d1b]/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06150c]/55 via-transparent to-[#06150c]/50" />

        {/* GRADIENTE INFERIOR */}

        <div className="absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-t from-[#07100b] via-[#07100b]/55 to-transparent" />

        {/* BRILHOS VERDES */}

        <div className="pointer-events-none absolute -left-[15%] top-[5%] h-[600px] w-[600px] rounded-full bg-emerald-500/[0.16] blur-[170px]" />

        <div className="pointer-events-none absolute -right-[15%] top-[18%] h-[650px] w-[650px] rounded-full bg-green-500/[0.12] blur-[180px]" />

        <div className="pointer-events-none absolute left-[28%] top-[35%] h-[600px] w-[700px] rounded-full bg-emerald-400/[0.07] blur-[180px]" />

        <div className="pointer-events-none absolute -left-[15%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-600/[0.14] blur-[170px]" />

        <div className="pointer-events-none absolute -right-[10%] bottom-[-5%] h-[650px] w-[650px] rounded-full bg-green-500/[0.12] blur-[175px]" />

        {/* VINHETA */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,8,5,0.38)_100%)]" />

        {/* Textura discreta */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:100px_100px]" />
      </div>

      {/* CONTEÚDO */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* CABEÇALHO */}

        <div className="mb-10 max-w-3xl sm:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-300/70" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
              Estrutura
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            Tudo para você
            <br />
            <span className="text-white/55">
              aproveitar o jogo.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm font-medium leading-6 text-white/65 sm:mt-7 sm:text-lg sm:leading-7">
            Uma estrutura completa para que você aproveite cada momento,
            desde a chegada até depois da partida.
          </p>
        </div>

        {/* CARDS GRANDES */}

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-2">
          {features
            .filter((feature) => feature.large)
            .map((feature) => (
              <div
                key={feature.number}
                className="group relative min-h-[230px] overflow-hidden rounded-3xl border border-white/15 bg-[#10261b]/70 shadow-[0_25px_80px_rgba(0,0,0,0.30)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_30px_90px_rgba(0,0,0,0.40)] sm:min-h-[530px] sm:rounded-[30px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 50vw"
                    className="object-cover opacity-[0.88] transition-all duration-700 group-hover:scale-[1.045] group-hover:opacity-95"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#06130c]/85 via-[#06130c]/25 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/[0.10] via-transparent to-[#03150c]/20" />

                <div className="pointer-events-none absolute inset-[1px] rounded-[23px] border border-white/[0.10] sm:rounded-[29px]" />

                <span className="absolute right-3 top-1 text-6xl font-medium leading-none tracking-[-0.10em] text-white/[0.11] transition-all duration-500 group-hover:text-white/[0.16] sm:right-10 sm:top-5 sm:text-[150px]">
                  {feature.number}
                </span>

                <div className="relative flex min-h-[230px] flex-col justify-end p-4 sm:min-h-[530px] sm:p-10">
                  <div className="max-w-xl">
                    <div className="mb-3 h-px w-7 bg-white/45 transition-all duration-500 group-hover:w-16 group-hover:bg-emerald-300/80 sm:mb-5 sm:w-10" />

                    <h3 className="text-lg font-medium leading-tight tracking-[-0.025em] text-white sm:text-4xl">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-[1.45] text-white/75 sm:mt-4 sm:text-base sm:leading-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CARDS PEQUENOS */}

        <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features
            .filter((feature) => !feature.large)
            .map((feature) => (
              <div
                key={feature.number}
                className="group relative min-h-[170px] overflow-hidden rounded-3xl border border-white/15 bg-[#10261b]/70 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:min-h-[370px] sm:rounded-[28px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-[0.86] transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-95"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#06130c]/90 via-[#06130c]/35 to-[#06130c]/5" />

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/[0.08] via-transparent to-[#03150c]/15" />

                <div className="pointer-events-none absolute inset-[1px] rounded-[23px] border border-white/[0.10] sm:rounded-[27px]" />

                <span className="absolute right-2 top-1 text-5xl font-medium leading-none tracking-[-0.09em] text-white/[0.11] transition-all duration-500 group-hover:text-white/[0.16] sm:right-5 sm:top-3 sm:text-7xl">
                  {feature.number}
                </span>

                <div className="relative flex min-h-[170px] flex-col justify-end p-4 sm:min-h-[370px] sm:p-7">
                  <div className="max-w-sm">
                    <div className="mb-2 h-px w-6 bg-white/40 transition-all duration-500 group-hover:w-14 group-hover:bg-emerald-300/80 sm:mb-4 sm:w-8" />

                    <h3 className="text-[14px] font-medium leading-tight tracking-[-0.015em] text-white sm:text-[22px]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-[9px] leading-[1.45] text-white/70 sm:mt-3 sm:text-sm sm:leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* TEXTO FINAL */}

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-16 sm:pt-8">
          <p className="max-w-xl text-xs font-medium leading-5 text-white/45 sm:text-sm sm:leading-6">
            Cada detalhe foi pensado para tornar sua experiência melhor
            antes, durante e depois da partida.
          </p>
        </div>
      </div>

      {/* TRANSIÇÃO FINAL */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[280px] bg-gradient-to-b from-transparent via-[#102c1c]/25 to-[#07100b]" />

      <div className="pointer-events-none absolute bottom-[-100px] left-1/2 z-20 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-900/[0.18] blur-[150px]" />
    </section>
  );
}