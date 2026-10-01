export default function About() {
    return (
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                A escolinha
              </p>
  
              <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
                Muito mais do que aprender a jogar.
              </h2>
            </div>
  
            <div>
              <p className="text-lg leading-8 text-white/60">
                A Escolinha de Futebol São Paulo recebe crianças e adolescentes
                de 4 a 16 anos, criando um ambiente para aprender, evoluir e
                viver experiências dentro do futebol.
              </p>
  
              <p className="mt-6 text-lg leading-8 text-white/60">
                Os treinamentos são acompanhados por profissionais e fazem parte
                de uma jornada que também envolve competição e desenvolvimento
                esportivo.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }