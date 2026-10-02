"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  "/images/escolinha/galeria/img-1.webp",
  "/images/escolinha/galeria/img-2.webp",
  "/images/escolinha/galeria/img-3.webp",
  "/images/escolinha/galeria/img-4.webp",
  "/images/escolinha/galeria/img-5.webp",
  "/images/escolinha/galeria/img-6.webp",
  "/images/escolinha/galeria/img-7.webp",
  "/images/escolinha/galeria/img-8.webp",
  "/images/escolinha/galeria/img-9.webp",
  "/images/escolinha/galeria/img-10.webp",
  "/images/escolinha/galeria/img-11.webp",
  "/images/escolinha/galeria/img-12.webp",
  "/images/escolinha/galeria/img-13.webp",
];

const mural = [
  {
    image: images[0],
    width: 300,
    height: 360,
    top: 65,
  },
  {
    image: images[1],
    width: 430,
    height: 300,
    top: 0,
  },
  {
    image: images[2],
    width: 250,
    height: 330,
    top: 185,
  },
  {
    image: images[3],
    width: 390,
    height: 290,
    top: 35,
  },
  {
    image: images[4],
    width: 330,
    height: 390,
    top: 145,
  },
  {
    image: images[5],
    width: 450,
    height: 300,
    top: 0,
  },
  {
    image: images[6],
    width: 270,
    height: 345,
    top: 190,
  },
  {
    image: images[7],
    width: 400,
    height: 310,
    top: 25,
  },
  {
    image: images[8],
    width: 310,
    height: 370,
    top: 150,
  },
  {
    image: images[9],
    width: 450,
    height: 300,
    top: 0,
  },
  {
    image: images[10],
    width: 275,
    height: 350,
    top: 185,
  },
  {
    image: images[11],
    width: 410,
    height: 295,
    top: 35,
  },
  {
    image: images[12],
    width: 325,
    height: 375,
    top: 145,
  },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const positionRef = useRef(0);

  const velocityRef = useRef(-5.0);

  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPositionRef = useRef(0);

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const updateVelocity = () => {
      const isMobile = window.innerWidth < 640;

      // Movimento muito mais rápido no mobile
      velocityRef.current = isMobile ? -5.0 : -0.42;
    };

    updateVelocity();

    window.addEventListener("resize", updateVelocity);

    const animate = () => {
      if (!draggingRef.current) {
        positionRef.current += velocityRef.current;
      }

      const loopWidth = track.scrollWidth / 2;

      if (positionRef.current <= -loopWidth) {
        positionRef.current += loopWidth;
      }

      if (positionRef.current > 0) {
        positionRef.current -= loopWidth;
      }

      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateVelocity);

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    draggingRef.current = true;

    startXRef.current = event.clientX;
    startPositionRef.current = positionRef.current;

    event.currentTarget.style.cursor = "grabbing";

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!draggingRef.current) return;

    const movement = event.clientX - startXRef.current;

    positionRef.current = startPositionRef.current + movement;
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    draggingRef.current = false;

    event.currentTarget.style.cursor = "grab";

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#050817] py-24 sm:py-32 lg:py-40"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/escolinha/galeria/galeria-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050817]/95 via-[#050817]/50 to-[#050817]/85" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(190,20,35,0.20),transparent_42%)]" />

        <div className="absolute inset-x-0 top-0 h-[260px] bg-gradient-to-b from-[#050817] via-[#050817]/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-t from-[#050817] via-[#050817]/55 to-transparent" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.45)_100%)]" />

        <div className="pointer-events-none absolute -right-[15%] top-[25%] h-[600px] w-[600px] rounded-full bg-red-700/[0.10] blur-[180px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-red-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Galeria
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            Futebol que se vive
            <br />
            <span className="text-white/45">
              dentro e fora de campo.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Treinos, jogos, campeonatos e momentos que fazem parte da jornada
            de cada atleta.
          </p>
        </div>
      </div>

      {/* MURAL */}
      <div className="relative z-10 mt-12 h-[410px] w-full overflow-hidden sm:mt-16 sm:h-[600px]">
        <div
          ref={trackRef}
          className="absolute left-0 top-0 flex w-max select-none gap-2 pl-2 sm:gap-3 sm:pl-5 lg:gap-4 lg:pl-6"
          style={{
            touchAction: "pan-y",
            willChange: "transform",
            cursor: "grab",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={(event) => {
            draggingRef.current = false;
            event.currentTarget.style.cursor = "grab";
          }}
          onLostPointerCapture={(event) => {
            draggingRef.current = false;
            event.currentTarget.style.cursor = "grab";
          }}
        >
          {[...mural, ...mural].map((item, index) => (
            <div
              key={`${item.image}-${index}`}
              className="relative shrink-0"
              style={{
                width: `clamp(${Math.round(item.width * 0.78)}px, ${item.width}px, ${item.width}px)`,
                height: `clamp(${Math.round(item.height * 0.78)}px, ${item.height}px, ${item.height}px)`,
                marginTop: `${item.top * 0.72}px`,
              }}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-[18px] border border-white/[0.12] bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.40)] sm:rounded-[22px] sm:shadow-[0_25px_80px_rgba(0,0,0,0.40)]">
                <Image
                  src={item.image}
                  alt="Momentos da Escola Oficial São Paulo FC"
                  fill
                  sizes="450px"
                  draggable={false}
                  className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/[0.05] sm:rounded-[22px]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INDICADOR */}
      <div className="relative z-10 mx-auto mt-1 max-w-7xl px-6 sm:mt-2 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between border-t border-white/[0.10] pt-4 sm:pt-5">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="h-px w-5 shrink-0 bg-red-600/80 sm:w-8" />

            <span className="truncate text-[9px] font-medium uppercase tracking-[0.20em] text-white/40 sm:text-[10px] sm:tracking-[0.25em]">
              Momentos da escola
            </span>
          </div>

          <div className="ml-4 flex shrink-0 items-center gap-2">
            <span className="hidden h-px w-4 bg-white/15 sm:block" />

            <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/25 sm:text-[10px] sm:tracking-[0.25em]">
              Arraste para explorar
            </span>
          </div>
        </div>
      </div>

      {/* GLOW INFERIOR */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 z-10 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-red-950/[0.16] blur-[150px]" />
    </section>
  );
}