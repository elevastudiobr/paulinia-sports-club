"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isSchoolPage = pathname === "/escolinha";

  const instagramUrl = isSchoolPage
    ? "https://www.instagram.com/spfcpaulinia/"
    : "https://www.instagram.com/pauliniasportsclub/";

  const whatsappUrl = isSchoolPage
    ? "https://wa.me/5519999812525?text=" +
      encodeURIComponent(
        "Olá! Tenho interesse em agendar uma aula na Escola Oficial São Paulo FC em Paulínia. Poderiam me passar mais informações?"
      )
    : "https://wa.me/5511974670706?text=" +
      encodeURIComponent(
        "Olá! Gostaria de agendar um horário para jogar no Paulínia Sports Club. Poderiam me passar as opções disponíveis?"
      );

  const instagramLabel = isSchoolPage
    ? "Instagram da Escola Oficial São Paulo FC"
    : "Instagram do Paulínia Sports Club";

  const whatsappLabel = isSchoolPage
    ? "WhatsApp da Escola Oficial São Paulo FC"
    : "WhatsApp do Paulínia Sports Club";

  return (
    <footer
      className={`relative overflow-hidden px-6 py-7 text-white sm:py-8 ${
        isSchoolPage
          ? "border-t border-white/[0.08] bg-[#050817]"
          : "border-t border-white/10 bg-[#050817]"
      }`}
    >
      {/* TRANSIÇÃO DA CTA PARA O FOOTER — ESCOLINHA */}
      {isSchoolPage && (
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-64">
          <div className="absolute inset-0 bg-gradient-to-b from-[#170507] via-[#0b0710]/80 to-[#050817]" />

          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_center,rgba(150,15,30,0.16),transparent_70%)]" />
        </div>
      )}

      {/* GLOW SUTIL */}
      {isSchoolPage && (
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[700px] -translate-x-1/2 rounded-full bg-red-950/[0.10] blur-[120px]" />
      )}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* ESQUERDA */}
        <div className="flex items-center gap-6">
          <p className="text-sm text-white/45 sm:text-[15px]">
            © 2026 Paulínia Sports Club. Todos os direitos reservados.
          </p>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-4">
            {/* INSTAGRAM */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={instagramLabel}
              className="text-white/55 transition-all duration-300 hover:scale-110 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[23px] w-[23px]"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={whatsappLabel}
              className="text-white/55 transition-all duration-300 hover:scale-110 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[23px] w-[23px]"
              >
                <path
                  d="M20.5 11.7C20.5 16.4 16.7 20.2 12 20.2C10.5 20.2 9.1 19.8 7.9 19.2L3.5 20.5L4.8 16.2C4.1 15 3.7 13.6 3.7 12C3.7 7.3 7.5 3.5 12.2 3.5C16.8 3.5 20.5 7.2 20.5 11.7Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M8.5 8.5C8.8 8.2 9.2 8.2 9.5 8.6L10.5 9.8C10.7 10.1 10.7 10.4 10.5 10.7L10 11.2C10.6 12.4 11.6 13.4 12.8 14L13.3 13.5C13.6 13.3 13.9 13.3 14.2 13.5L15.4 14.5C15.8 14.8 15.8 15.2 15.5 15.5L15.1 15.9C14.6 16.4 13.8 16.5 13.2 16.2C10.7 15.1 8.7 13.1 7.6 10.6C7.3 10 7.4 9.2 7.9 8.7L8.5 8.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ELEVA */}
        <div className="flex items-center gap-2 border-l border-white/10 pl-5">
          <span className="text-[10px] uppercase tracking-[0.16em] text-white/25">
            Desenvolvido por
          </span>

          <Link
            href="https://eleva-studio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eleva Studio"
            className="relative h-[18px] w-[54px] opacity-65 transition-opacity duration-300 hover:opacity-100"
          >
            <Image
              src="/images/logo-eleva.webp"
              alt="Eleva Studio"
              fill
              sizes="54px"
              className="object-contain object-left"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}