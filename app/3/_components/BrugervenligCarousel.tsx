"use client";

import { useRef } from "react";
import Image from "next/image";

type Card = {
  title: string;
  image: string;
  todo?: string;
};

const CARDS: Card[] = [
  {
    title: "Smart LCD-skærm",
    image: "/X3_Gen_28s.png",
    todo: "replace with uv-lcd.jpg",
  },
  {
    title: "Automatisk regnsensor",
    image: "/X3_Gen_23s.png",
    todo: "replace with uv-rain.jpg",
  },
  {
    title: "Vandtæt IPX5",
    image: "/X3_Gen_24s.png",
    todo: "replace with uv-ipx5.jpg",
  },
  {
    title: "Støjsvag drift ved 60 dB",
    image: "/X3_Gen_25s.png",
    todo: "replace with uv-60db.jpg",
  },
  {
    title: "Alexa / Google Assistant",
    image: "/X3_Gen_26s.png",
    todo: "replace with uv-voice.jpg",
  },
  {
    title: "OTA-opdatering",
    image: "/X3_Gen_27s.png",
    todo: "replace with uv-ota.jpg",
  },
];

export default function BrugervenligCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dx: number) => {
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <section className="bg-white text-ink-primary">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-[680px]">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
              Brugervenlig
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[44px]">
              Designet til at glemme
            </h2>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Forrige"
              onClick={() => scrollBy(-360)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-subtle bg-white text-ink-primary transition hover:border-ink-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Næste"
              onClick={() => scrollBy(360)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-subtle bg-white text-ink-primary transition hover:border-ink-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:-mx-8 lg:px-8"
        >
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="group relative aspect-[3/4] w-[260px] shrink-0 snap-start overflow-hidden rounded-3xl bg-black transition duration-200 ease-out hover:-translate-y-1 sm:w-[300px] lg:w-[320px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 55% at 50% 45%, #2a2018 0%, #110d0a 55%, #000000 100%)",
                }}
              />
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 640px) 260px, 320px"
                className="object-cover transition duration-200 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
              />
              <h3 className="absolute inset-x-5 bottom-5 text-[18px] font-bold leading-tight text-white">
                {c.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
