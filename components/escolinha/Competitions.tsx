export default function Competitions() {
    return (
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Dentro de campo
          </p>
  
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            Treinar, competir e buscar novos caminhos.
          </h2>
  
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 p-8 md:p-10">
              <p className="text-sm uppercase tracking-widest text-white/40">
                Competições
              </p>
  
              <h3 className="mt-4 text-2xl font-medium">
                A experiência de competir.
              </h3>
  
              <p className="mt-4 leading-7 text-white/60">
                Os alunos têm a oportunidade de participar de campeonatos e
                colocar em prática tudo aquilo que desenvolvem nos treinamentos.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 p-8 md:p-10">
              <p className="text-sm uppercase tracking-widest text-white/40">
                Oportunidades
              </p>
  
              <h3 className="mt-4 text-2xl font-medium">
                Evolução que pode abrir portas.
              </h3>
  
              <p className="mt-4 leading-7 text-white/60">
                A formação também pode proporcionar oportunidades relacionadas
                ao futebol de base do São Paulo, de acordo com os critérios e
                processos do clube.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }