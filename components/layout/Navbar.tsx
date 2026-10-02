"use client";

import Image from "next/image";
import { CalendarDays, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Locação", id: "locacao" },
  { label: "Estrutura", id: "estrutura" },
];

const homeWhatsappUrl =
  "https://wa.me/5511974670706?text=" +
  encodeURIComponent(
    "Olá! Gostaria de agendar um horário para jogar no Paulínia Sports Club. Poderiam me passar as opções disponíveis?"
  );

const schoolWhatsappUrl =
  "https://wa.me/5519999812525?text=" +
  encodeURIComponent(
    "Olá! Tenho interesse em agendar uma aula na Escola Oficial São Paulo FC em Paulínia. Poderiam me passar mais informações?"
  );

export default function Navbar() {
  const pathname = usePathname();

  const isSchoolPage = pathname === "/escolinha";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappUrl = isSchoolPage
    ? schoolWhatsappUrl
    : homeWhatsappUrl;

  const whatsappLabel = isSchoolPage
    ? "Agendar aula"
    : "Agendar horário";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToHome = () => {
    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      window.location.href = "/";
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToSection = (id: string) => {
    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToSchool = () => {
    setMenuOpen(false);

    if (window.location.pathname === "/escolinha") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    window.location.href = "/escolinha";
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/25 backdrop-blur-xl"
            : "border-transparent bg-transparent backdrop-blur-0"
        }`}
      >
        {/* BARRA PRINCIPAL */}
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-8 lg:px-10">
          {/* LOGO */}
          <button
            type="button"
            onClick={goToHome}
            aria-label="Voltar para o início"
            className="flex shrink-0 items-center"
          >
            <div className="relative h-[52px] w-[58px] sm:h-16 sm:w-[72px]">
              <Image
                src="/images/logo.webp"
                alt="Paulínia Sports Club"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="relative ml-0 hidden h-11 w-52 sm:ml-1 sm:block sm:h-12 sm:w-60">
              <Image
                src="/images/logo-text.webp"
                alt="Paulínia Sports Club"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </button>

          {/* DESKTOP */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-14">
              <button
                type="button"
                onClick={goToHome}
                className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                Início
              </button>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={goToSchool}
                className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                Escola Oficial SPFC
              </button>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-14 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-black/20 transition-all duration-200 hover:scale-[1.03] hover:bg-white/90"
            >
              <CalendarDays size={17} strokeWidth={2.1} />
              {whatsappLabel}
            </a>
          </div>

          {/* MOBILE */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-md transition-all duration-200 hover:border-white/25 hover:bg-white/10"
            >
              {menuOpen ? <X size={19} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-[#050817]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[520px] opacity-100"
              : "max-h-0 border-t-transparent opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 pb-5 sm:px-8">
            {/* INÍCIO */}
            <button
              type="button"
              onClick={goToHome}
              className="flex w-full items-center border-b border-white/10 py-4 text-left text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              Início
            </button>

            {/* LOCAÇÃO */}
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className="flex w-full items-center border-b border-white/10 py-4 text-left text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}

            {/* ESCOLA */}
            <button
              type="button"
              onClick={goToSchool}
              className="flex w-full items-center border-b border-white/10 py-4 text-left text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              Escola Oficial SPFC
            </button>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black shadow-lg shadow-black/10 transition-all duration-200 hover:bg-white/90"
            >
              <CalendarDays size={17} strokeWidth={2} />
              {whatsappLabel}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}