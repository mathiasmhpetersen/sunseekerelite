"use client";

import { useRef } from "react";
import Image from "next/image";

type Review = {
  href: string;
  thumbnail: string;
  title: string;
  author: string;
  date?: string;
  isVideo?: boolean;
};

const REVIEWS: Review[] = [
  {
    href: "https://www.youtube.com/watch?v=rLWXrdUoay8",
    thumbnail: "/reviews/youtube-rLWXrdUoay8.jpg",
    title: "Min test af Sunseeker Elite X3 🌱🤖 | Robotplæneklipper test 2025",
    author: "John G ♡ MereMobil",
    isVideo: true,
  },
  {
    href: "https://meremobil.dk/2025/09/sunseeker-elite-x3-ny/",
    thumbnail: "/reviews/meremobil-sunseeker-elite-x3.png",
    title:
      "Sunseeker Elite X3: Ny robotplæneklipper-spiller – pengene værd?",
    author: "MereMobil.dk",
    date: "25. september 2025",
  },
  {
    href: "https://www.youtube.com/watch?v=bwz4UqUTPBE",
    thumbnail: "/reviews/youtube-bwz4UqUTPBE.jpg",
    title:
      "Sunseeker Elite X7 Gen 2 – robotplæneklipper til meget STORE haver | TEST",
    author: "John G ♡ MereMobil",
    isVideo: true,
  },
  {
    href: "https://www.fritidsmarkedet.dk/artikel/127709-min-maalte-erfaring-med-sunseeker-elite-x5-en-paalidelig-robotplaneklipper-til-rigtige-grasplaner",
    thumbnail: "/sunseeker/fritidsmarkedet-article-hero.png",
    title:
      "Min målte erfaring med Sunseeker Elite X5: En pålidelig robotplæneklipper til rigtige græsplæner",
    author: "Fritidsmarkedet.dk",
    date: "7. maj 2025",
  },
];

function PlayIcon() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition group-hover:scale-105"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#0a0a0a"
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export default function ReviewsCarousel() {
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
              Anmeldelser
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[44px]">
              Se hvad andre siger
            </h2>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Forrige"
              onClick={() => scrollBy(-380)}
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
              onClick={() => scrollBy(380)}
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
          className="mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:-mx-8 lg:px-8"
        >
          {REVIEWS.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener"
              className="group flex w-[82vw] shrink-0 snap-start flex-col gap-4 transition duration-200 ease-out hover:-translate-y-1 sm:w-[360px] md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-black">
                <Image
                  src={r.thumbnail}
                  alt={r.title}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 360px, 280px"
                  className="object-cover transition duration-200 ease-out group-hover:scale-[1.03]"
                />
                {r.isVideo && <PlayIcon />}
              </div>
              <div className="flex flex-col gap-2">
                <p className="line-clamp-2 text-[15.5px] font-semibold leading-[1.35] text-ink-primary">
                  {r.title}
                </p>
                <p className="text-[13px] text-ink-secondary">
                  <span className="font-semibold text-ink-primary">
                    {r.author}
                  </span>
                  {r.date && (
                    <>
                      <span className="mx-1.5 text-ink-tertiary">·</span>
                      <span>{r.date}</span>
                    </>
                  )}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-[13.5px] font-semibold text-brand-orange-dark">
                  Læs mere
                  <span
                    aria-hidden="true"
                    className="transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
