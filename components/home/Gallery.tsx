export default function Gallery() {
    return (
      <section id="galeria" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Galeria
          </p>
  
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
            Conheça o espaço.
          </h2>
  
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="aspect-[4/5] rounded-3xl bg-white/5" />
            <div className="aspect-[4/5] rounded-3xl bg-white/5" />
            <div className="aspect-[4/5] rounded-3xl bg-white/5" />
          </div>
        </div>
      </section>
    );
  }