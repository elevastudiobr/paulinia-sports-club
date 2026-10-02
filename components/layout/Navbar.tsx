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
            ? "border-white/10 bg-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* LOGO */}
          <button
            type="button"
            onClick={goToHome}
            aria-label="Voltar para o início"
            className="flex items-center"
          >
            <div className="relative h-16 w-[72px] shrink-0 sm:h-[72px] sm:w-20">
              <Image
                src="/images/logo.webp"
                alt="Paulínia Sports Club"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="relative ml-0 h-11 w-52 sm:ml-1 sm:h-12 sm:w-60">
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
              {/* INÍCIO */}
              <button
                type="button"
                onClick={goToHome}
                className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                Início
              </button>

              {/* LINKS DA HOME */}
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

              {/* ESCOLA */}
              <button
                type="button"
                onClick={goToSchool}
                className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                Escola Oficial SPFC
              </button>
            </div>

            {/* CTA */}
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
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={goToSchool}
              className="text-xs font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              Escola Oficial SPFC
            </button>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              {menuOpen ? <X size={19} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#050817]/90 px-5 py-5 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto max-w-7xl">
              {/* INÍCIO */}
              <button
                type="button"
                onClick={goToHome}
                className="block w-full border-b border-white/10 py-4 text-left text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Início
              </button>

              {/* LINKS DA HOME */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className="block w-full border-b border-white/10 py-4 text-left text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </button>
              ))}

              {/* ESCOLA */}
              <button
                type="button"
                onClick={goToSchool}
                className="block w-full border-b border-white/10 py-4 text-left text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Escola Oficial SPFC
              </button>

              {/* CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                <CalendarDays size={17} />
                {whatsappLabel}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}