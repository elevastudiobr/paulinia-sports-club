import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050817] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            href="/"
            className="text-sm font-bold tracking-[0.18em]"
          >
            PAULÍNIA SPORTS CLUB
          </Link>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
            Quadras, futebol e uma experiência completa para quem ama jogar.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-white/50">
          <Link href="/">Início</Link>
          <Link href="/#espaco">O Espaço</Link>
          <Link href="/#locacao">Locação</Link>
          <Link href="/#galeria">Galeria</Link>
          <Link href="/escolinha">Escolinha</Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Paulínia Sports Club. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}