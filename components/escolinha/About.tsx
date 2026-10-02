import Image from "next/image";

const highlights = [
  {
    number: "04–16",
    title: "Faixa etária",
    description: "Formação de jovens atletas dos 4 aos 16 anos.",
  },
  {
    number: "01",
    title: "Escola Oficial",
    description: "Metodologia e experiência ligadas ao São Paulo FC.",
  },
  {
    number: "∞",
    title: "Desenvolvimento",
    description: "Evolução dentro e fora de campo, em cada etapa.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#050507] py-24 sm:py-32 lg:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/escolinha/about/about-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/95 via-[#050507]/65 to-[#050507]/35" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(190,20,35,0.25),transparent_42%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-[#180508]/85 via-[#120507]/35 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-[260px] bg-gradient-to-b from-[#050817] via-[#050817]/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent to-[#050817]" />

        <div className="pointer-events-none absolute -right-[15%] top-[25%] h-[600px] w-[600px] rounded-full bg-red-700/[0.12] blur-[180px]" />

        <div className="pointer-events-none absolute -left-[20%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-red-900/[0.10] blur-[160px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                Sobre a escola
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Mais do que
              <br />
              <span className="text-white/55">treinar futebol.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-8 text-white/75 sm:text-lg">
              A Escola Oficial São Paulo FC em Paulínia foi pensada para
              acompanhar jovens atletas em diferentes etapas da formação,
              unindo futebol, disciplina e desenvolvimento.
            </p>

            <p className="mt-5 text-base leading-8 text-white/55">
              Dos 4 aos 16 anos, os alunos vivenciam uma rotina de treinamento
              e competição, com participação em campeonatos e experiências
              que podem contribuir para o desenvolvimento de cada atleta
              dentro do futebol.
            </p>
          </div>
        </div>

        {/* CARDS DE VIDRO */}
        <div className="mt-12 grid grid-cols-3 gap-2.5 sm:mt-20 sm:gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group relative min-h-[165px] overflow-hidden rounded-2xl border border-white/[0.15] bg-white/[0.018] p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.24] hover:bg-white/[0.035] hover:shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:min-h-[250px] sm:rounded-[28px] sm:p-8 md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-red-500/[0.018]" />

              <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent sm:inset-x-8" />

              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/[0.035] blur-3xl transition-all duration-700 group-hover:bg-red-500/[0.05] sm:-right-20 sm:-top-20 sm:h-48 sm:w-48" />

              <div className="pointer-events-none absolute -bottom-16 -left-12 h-32 w-32 rounded-full bg-red-600/[0.025] blur-3xl sm:-bottom-24 sm:-left-16 sm:h-44 sm:w-44" />

              {index !== 0 && (
                <div className="absolute left-0 top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent md:block sm:top-10 sm:h-[calc(100%-80px)]" />
              )}

              <div className="relative z-10 flex h-full flex-col">
                <span className="block text-[23px] font-medium leading-none tracking-[-0.05em] text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)] sm:text-4xl">
                  {item.number}
                </span>

                <div className="mt-auto pt-6 sm:pt-14">
                  <div className="mb-2 h-px w-5 bg-red-500/70 sm:mb-4 sm:w-8" />

                  {item.title === "Desenvolvimento" ? (
                    <h3 className="text-[10px] font-medium leading-[1.15] tracking-[-0.01em] text-white sm:text-xl">
                      Desenvol
                      <br />
                      vimento
                    </h3>
                  ) : (
                    <h3 className="text-[12px] font-medium leading-[1.15] tracking-[-0.01em] text-white sm:text-xl">
                      {item.title}
                    </h3>
                  )}

                  <p className="mt-1.5 w-full max-w-[125px] text-[8px] leading-[1.5] text-white/50 sm:mt-3 sm:max-w-xs sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPETIÇÃO */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="group relative min-h-[350px] overflow-hidden rounded-[26px] border border-white/[0.12] bg-black/40 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:min-h-[420px] sm:rounded-[30px]">
            <Image
              src="/images/escolinha/about/about-2.webp"
              alt="Atletas da Escola Oficial São Paulo FC"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(200,20,40,0.18),transparent_45%)]" />

            <div className="absolute bottom-0 left-0 z-10 p-6 sm:p-10">
              <div className="h-px w-10 bg-red-600 transition-all duration-500 group-hover:w-16" />

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                Competir também faz parte da formação. Os alunos têm a
                oportunidade de participar de campeonatos e colocar em prática
                o que desenvolvem nos treinamentos.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              Caminho no futebol
            </span>

            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              Evolução que pode
              <br />
              <span className="text-white/50">abrir novos caminhos.</span>
            </h3>

            <p className="mt-6 text-base leading-7 text-white/60">
              A vivência em treinamentos e competições permite que cada atleta
              desenvolva suas habilidades, ganhe experiência e conheça melhor
              o ambiente do futebol competitivo.
            </p>

            <p className="mt-5 text-base leading-7 text-white/45">
              Para quem demonstra evolução e potencial, a trajetória também
              pode proporcionar oportunidades de desenvolvimento e observação
              dentro do futebol, sempre respeitando o processo individual de
              cada atleta.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 z-10 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-red-950/[0.20] blur-[150px]" />
    </section>
  );
}