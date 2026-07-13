"use client";

import { useState } from "react";
import Image from "next/image";
import type { Gen1Model, Gen2Model } from "../_lib/campaign";
import {
  DEALER_URL,
  SILVER_FILTER,
  genPairs,
  gen1Models,
  gen2Models,
  gen2Upgrades,
  gen1Keeps,
} from "../_lib/campaign";

const gen1ById: Record<string, Gen1Model> = Object.fromEntries(
  gen1Models.map((m) => [m.id, m]),
);
const gen2ById: Record<string, Gen2Model> = Object.fromEntries(
  gen2Models.map((m) => [m.id, m]),
);

export default function GenerationsSection() {
  const [active, setActive] = useState(0);
  const pair = genPairs[active];
  const g1 = gen1ById[pair.gen1];
  const g2 = gen2ById[pair.gen2];

  // Upgrade list = shared items + this pair's per-model security line.
  const upgrades = [pair.securityNote, ...gen2Upgrades];

  return (
    <section
      id="generationer"
      className="bg-[#0a0a0a] text-white scroll-mt-[112px]"
    >
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[720px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Nyeste generation
          </p>
          <h2
            className="mt-4 text-balance text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]"
            style={{
              textShadow:
                "0 0 28px rgba(255, 138, 40, 0.18), 0 0 70px rgba(255, 80, 22, 0.10)",
            }}
          >
            Vil du have den nyeste generation?
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.6] text-white/75">
            Gen 1 giver dig alt det vigtige — nu på sommertilbud. Gen 2 er
            nyeste generation med nat-syn, iToF-kamera og inkluderet
            tyverisikring.
          </p>
        </div>

        {/* Real Gen 2 proof shot — the LED light bar running at night. */}
        <figure className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-black md:aspect-[21/9]">
          <Image
            src="/gen2/x5-gen2-night.jpg"
            alt="Sunseeker X5 Gen 2 klipper i haven om natten med tændt LED-lysbjælke"
            fill
            sizes="(max-width: 768px) 90vw, 1080px"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
          />
          <figcaption className="absolute inset-x-5 bottom-4 md:inset-x-7 md:bottom-6">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-orange-light">
              Gen 2 · kører også om natten
            </p>
            <p className="mt-1 max-w-[520px] text-[14px] font-medium leading-[1.4] text-white/90">
              iToF-kamera og nat-syn lader Gen 2 klippe efter mørkets frembrud.
              Gen 1 kører i dagtilstand.
            </p>
          </figcaption>
        </figure>

        {/* Model toggle */}
        <div
          role="tablist"
          aria-label="Vælg model"
          className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 p-1"
        >
          {genPairs.map((p, i) => {
            const on = i === active;
            return (
              <button
                key={p.gen1}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2 text-[13.5px] font-semibold transition ${
                  on
                    ? "bg-brand-gradient text-white shadow-sm"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* Gen 1 — campaign */}
          <div className="flex flex-col rounded-3xl border border-white/12 bg-white/[0.04] p-6 lg:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
                Gen 1 · Kampagne
              </p>
              <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[10.5px] font-bold text-white">
                SPAR {g1.spar}
              </span>
            </div>
            <div className="relative mt-4 aspect-[5/4] w-full overflow-hidden rounded-2xl bg-[radial-gradient(120%_90%_at_50%_30%,#e8ecef_0%,#cfd6db_100%)]">
              <Image
                src={g1.image}
                alt={g1.name}
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-contain p-4"
                style={{ filter: SILVER_FILTER }}
              />
            </div>
            <h3 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.01em] text-white">
              {g1.name}
            </h3>
            <p
              className="mt-1 text-[26px] font-bold leading-none tracking-[-0.01em] text-white"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {g1.nu}
              <span className="ml-2 align-middle text-[14px] font-medium text-white/45 line-through">
                {g1.foer}
              </span>
            </p>
            <p className="mt-2 text-[13px] text-white/60">
              {g1.area} · Dagdrift · kabelfri
            </p>
            <a
              href={DEALER_URL}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/25 px-4 py-3 text-[14px] font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Find forhandler
            </a>
          </div>

          {/* Gen 2 — full price + upgrade list */}
          <div className="flex flex-col rounded-3xl border-2 border-brand-orange-dark/60 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(255,80,22,0.14)] lg:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange-light">
                Gen 2 · Nyeste generation
              </p>
              <span className="rounded-full border border-brand-orange-dark/50 bg-brand-orange-dark/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-orange-light">
                Anbefalet
              </span>
            </div>
            <div className="relative mt-4 aspect-[5/4] w-full overflow-hidden rounded-2xl bg-[radial-gradient(120%_90%_at_50%_30%,#2a2018_0%,#0f0b08_100%)]">
              <Image
                src={g2.image}
                alt={g2.name}
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-contain p-4"
              />
            </div>
            <h3 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.01em] text-white">
              {g2.name}
            </h3>
            <p
              className="mt-1 text-[26px] font-bold leading-none tracking-[-0.01em] text-white"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {g2.pris}
            </p>
            <p className="mt-2 text-[13px] font-semibold text-brand-orange-light">
              Det får du med Gen 2:
            </p>
            <ul className="mt-3 flex-1 space-y-2 text-[14px] leading-[1.45] text-white/80">
              {upgrades.map((u) => (
                <li key={u} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange-light"
                  />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
            <a
              href={DEALER_URL}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-gradient px-4 py-3 text-[14px] font-semibold text-white transition hover:brightness-110"
            >
              Find forhandler
            </a>
          </div>
        </div>

        {/* Honest counter-note */}
        <p className="mt-6 flex items-start gap-2.5 text-[13.5px] italic leading-[1.5] text-white/60">
          <span aria-hidden="true" className="mt-0.5 not-italic">
            ↺
          </span>
          <span>Gen 1 beholder {gen1Keeps}.</span>
        </p>
      </div>
    </section>
  );
}
