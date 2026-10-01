export default function Hero() {
    return (
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/50">
            Escolinha de Futebol São Paulo
          </p>
  
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            O futebol começa aqui.
          </h1>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Formação esportiva para crianças e adolescentes de 4 a 16 anos,
            dentro de um ambiente pensado para desenvolver quem ama futebol.
          </p>
  
          <a
            href="#escolinha-contato"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black"
          >
            Conhecer a escolinha
          </a>
        </div>
      </section>
    );
  }