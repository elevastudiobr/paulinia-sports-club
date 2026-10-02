"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const images = Array.from({ length: 15 }, (_, index) => ({
  src: `/images/home/galeria/img-${index + 1}.webp`,
  alt: `Paulínia Sports Club - imagem ${index + 1}`,
}));

const layouts = [
  {
    width: "w-[280px] sm:w-[340px]",
    height: "h-[350px] sm:h-[420px]",
    offset: "translate-y-8",
  },
  {
    width: "w-[210px] sm:w-[260px]",
    height: "h-[270px] sm:h-[320px]",
    offset: "-translate-y-4",
  },
  {
    width: "w-[290px] sm:w-[350px]",
    height: "h-[300px] sm:h-[360px]",
    offset: "translate-y-14",
  },
  {
    width: "w-[230px] sm:w-[280px]",
    height: "h-[390px] sm:h-[460px]",
    offset: "-translate-y-8",
  },
  {
    width: "w-[300px] sm:w-[370px]",
    height: "h-[290px] sm:h-[350px]",
    offset: "translate-y-5",
  },
  {
    width: "w-[220px] sm:w-[270px]",
    height: "h-[350px] sm:h-[420px]",
    offset: "-translate-y-6",
  },
  {
    width: "w-[290px] sm:w-[340px]",
    height: "h-[270px] sm:h-[330px]",
    offset: "translate-y-12",
  },
  {
    width: "w-[240px] sm:w-[290px]",
    height: "h-[380px] sm:h-[450px]",
    offset: "-translate-y-10",
  },
  {
    width: "w-[300px] sm:w-[360px]",
    height: "h-[310px] sm:h-[370px]",
    offset: "translate-y-6",
  },
  {
    width: "w-[220px] sm:w-[270px]",
    height: "h-[300px] sm:h-[360px]",
    offset: "-translate-y-5",
  },
  {
    width: "w-[290px] sm:w-[350px]",
    height: "h-[390px] sm:h-[470px]",
    offset: "translate-y-10",
  },
  {
    width: "w-[230px] sm:w-[280px]",
    height: "h-[280px] sm:h-[340px]",
    offset: "-translate-y-7",
  },
  {
    width: "w-[300px] sm:w-[360px]",
    height: "h-[330px] sm:h-[400px]",
    offset: "translate-y-12",
  },
  {
    width: "w-[220px] sm:w-[270px]",
    height: "h-[380px] sm:h-[450px]",
    offset: "-translate-y-9",
  },
  {
    width: "w-[290px] sm:w-[350px]",
    height: "h-[290px] sm:h-[350px]",
    offset: "translate-y-4",
  },
];

export default function Gallery() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const loopImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  useEffect(() => {
    const element = carouselRef.current;

    if (!element) return;

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;

      lastTime = currentTime;

      /*
        Velocidade do carrossel.

        Mobile:
        bem mais rápido para mostrar mais imagens.

        Desktop:
        também mais rápido que antes, mas um pouco
        mais controlado para manter a composição visual.
      */
      const isMobile = window.innerWidth < 640;

      const speed = isMobile ? 0.30 : 0.12;

      if (!isDraggingRef.current) {
        element.scrollLeft += delta * speed;
      }

      /*
        Loop infinito usando as imagens duplicadas.
      */
      const singleSetWidth = element.scrollWidth / 5;

      if (element.scrollLeft < singleSetWidth) {
        element.scrollLeft += singleSetWidth * 2;
      }

      if (element.scrollLeft > singleSetWidth * 4) {
        element.scrollLeft -= singleSetWidth * 2;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    requestAnimationFrame(() => {
      if (element) {
        element.scrollLeft = (element.scrollWidth / 5) * 2;
      }
    });

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const element = carouselRef.current;

    if (!element) return;

    isDraggingRef.current = true;

    setIsDragging(true);

    hasDraggedRef.current = false;

    startXRef.current = event.clientX;

    scrollStartRef.current = element.scrollLeft;

    element.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const element = carouselRef.current;

    if (!element || !isDraggingRef.current) return;

    const distance = event.clientX - startXRef.current;

    if (Math.abs(distance) > 6) {
      hasDraggedRef.current = true;
    }

    element.scrollLeft = scrollStartRef.current - distance;
  };

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const element = carouselRef.current;

    isDraggingRef.current = false;

    setIsDragging(false);

    if (
      element &&
      element.hasPointerCapture(event.pointerId)
    ) {
      element.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerCancel = () => {
    isDraggingRef.current = false;

    setIsDragging(false);
  };

  const handleImageClick = (index: number) => {
    if (hasDraggedRef.current) return;

    setSelectedIndex((current) =>
      current === index ? null : index,
    );
  };

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#07100b] py-24 sm:py-32 lg:py-40"
    >
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0">
        <Image
          src="/images/home/galeria/img-3.webp"
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover"
        />

        <div className="absolute inset-0 bg-[#07100b]/45" />

        <div className="absolute inset-x-0 top-0 h-[440px] bg-gradient-to-b from-[#f1f5f1] via-[#d1dfd4]/70 via-[#809b89]/35 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-transparent via-[#365442]/18 to-[#07100b]/10" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07100b]/75 via-[#07100b]/40 to-[#07100b]/15" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07100b]/15 to-[#07100b]/90" />

        <div className="absolute -left-[15%] -top-[10%] h-[650px] w-[650px] rounded-full bg-emerald-400/[0.16] blur-[180px]" />

        <div className="absolute -right-[12%] top-[8%] h-[700px] w-[700px] rounded-full bg-green-500/[0.14] blur-[190px]" />

        <div className="absolute left-[30%] top-[30%] h-[650px] w-[700px] rounded-full bg-emerald-400/[0.09] blur-[190px]" />

        <div className="absolute -bottom-[25%] left-[5%] h-[650px] w-[900px] rounded-full bg-emerald-500/[0.10] blur-[210px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,rgba(0,0,0,0.20)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050817] via-[#050817]/35 to-transparent" />
      </div>

      {/* =========================
          HEADER
      ========================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-300/70" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-200/80">
              Galeria
            </span>
          </div>

          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            Veja o espaço
            <br />
            <span className="text-white/55">
              de perto.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            Um pouco do espaço, das quadras e dos momentos
            que fazem parte da experiência no Paulínia Sports Club.
          </p>
        </div>
      </div>

      {/* =========================
          CARROSSEL
      ========================== */}

      <div
        ref={carouselRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        className={`relative z-10 flex h-[540px] touch-pan-y select-none items-center gap-4 overflow-x-hidden overflow-y-hidden px-6 sm:h-[600px] sm:gap-5 sm:px-8 lg:px-10 ${
          isDragging
            ? "cursor-grabbing"
            : "cursor-grab"
        }`}
      >
        {loopImages.map((image, index) => {
          const originalIndex = index % images.length;
          const layout = layouts[originalIndex];
          const isSelected = selectedIndex === index;

          return (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => handleImageClick(index)}
              aria-label={`Ver imagem ${originalIndex + 1}`}
              className={`
                group relative shrink-0 overflow-hidden rounded-[26px] border text-left outline-none
                transition-all duration-700 ease-out
                ${layout.width}
                ${layout.height}
                ${layout.offset}
                ${
                  isSelected
                    ? "z-50 scale-[1.14] border-white/60 shadow-[0_40px_120px_rgba(0,0,0,0.70)]"
                    : "z-10 border-white/[0.12] shadow-[0_25px_80px_rgba(0,0,0,0.32)] hover:z-30 hover:scale-[1.025] hover:border-white/25"
                }
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 300px, 390px"
                draggable={false}
                className={`
                  object-cover transition-all duration-700 ease-out
                  ${
                    isSelected
                      ? "scale-[1.06]"
                      : "group-hover:scale-[1.06]"
                  }
                `}
              />

              <div
                className={`
                  absolute inset-0 transition-all duration-700
                  ${
                    isSelected
                      ? "bg-black/0"
                      : "bg-gradient-to-t from-black/35 via-transparent to-white/[0.04]"
                  }
                `}
              />

              <div
                className={`
                  pointer-events-none absolute inset-0 transition-all duration-700
                  ${
                    isSelected
                      ? "bg-emerald-300/[0.07] opacity-100"
                      : "opacity-0"
                  }
                `}
              />

              <div
                className={`
                  pointer-events-none absolute inset-[1px] rounded-[25px] border transition-all duration-700
                  ${
                    isSelected
                      ? "border-white/20"
                      : "border-white/[0.08]"
                  }
                `}
              />

              {isSelected && (
                <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-white/20" />
              )}
            </button>
          );
        })}
      </div>

      {/* =========================
          FOOTER DA GALERIA
      ========================== */}

      <div className="relative z-10 mx-auto mt-4 max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-emerald-400/50" />

            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
              Arraste para explorar
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.18em] text-white/30">
            Paulínia Sports Club
          </p>
        </div>
      </div>
    </section>
  );
}