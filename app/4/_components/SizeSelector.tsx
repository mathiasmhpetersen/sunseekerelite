"use client";

import { useState } from "react";
import Image from "next/image";
import type { Gen1Model, Gen2Model, Gen1Id, Gen2Id } from "../_lib/campaign";
import {
  DEALER_URL,
  SILVER_FILTER,
  gen1Models,
  gen2Models,
} from "../_lib/campaign";

type SizeKey = "under800" | "under2000" | "2000to3000" | "3000to6000";

type Option = {
  key: SizeKey;
  label: string;
  // Some brackets have no Gen 1 campaign model (the campaign starts at X5),
  // so gen1Id is optional. gen2Id is always present.
  gen1Id?: Gen1Id;
  gen2Id: Gen2Id;
};

const OPTIONS: Option[] = [
  {
    key: "under800",
    label: "Under 800 m²",
    gen2Id: "x3g2", // X3 Gen 2 is rated op til 800 m²; no Gen 1 campaign model this small
  },
  {
    key: "under2000",
    label: "800–2.000 m²",
    gen1Id: "x5",
    gen2Id: "x5g2",
  },
  {
    key: "2000to3000",
    label: "2.000–3.000 m²",
    gen1Id: "x7",
    gen2Id: "x7g2",
  },
  {
    key: "3000to6000",
    label: "3.000–6.000 m²",
    gen1Id: "x7plus",
    gen2Id: "x7plusg2",
  },
];

const gen1ById: Record<string, Gen1Model> = Object.fromEntries(
  gen1Models.map((m) => [m.id, m]),
);
const gen2ById: Record<string, Gen2Model> = Object.fromEntries(
  gen2Models.map((m) => [m.id, m]),
);

export default function SizeSelector() {
  // In-memory state only — no localStorage/sessionStorage (brief rule).
  const [selected, setSelected] = useState<SizeKey>("under2000");

  const option = OPTIONS.find((o) => o.key === selected)!;
  const gen1 = option.gen1Id ? gen1ById[option.gen1Id] : undefined;
  const gen2 = gen2ById[option.gen2Id];
  // X3 Gen 2 is daytime-only; the larger Gen 2 models add nat-syn + iToF.
  const gen2Sub =
    gen2.id === "x3g2"
      ? `${gen2.area} · dagdrift`
      : `${gen2.area} · nat-syn + iToF`;

  return (
    <section
      id="havestorrelse"
      className="bg-white text-ink-primary scroll-mt-[112px]"
    >
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Find din model
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Hvor stor er din plæne?
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.55] text-ink-secondary">
            Vælg dit areal, så anbefaler vi den rigtige model i begge
            generationer — tilbuddet på Gen 1 og den nyeste Gen 2.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start lg:gap-12">
          <div
            role="radiogroup"
            aria-label="Vælg havestørrelse"
            className="flex flex-col gap-3"
          >
            {OPTIONS.map((o) => {
              const active = o.key === selected;
              return (
                <button
                  key={o.key}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(o.key)}
                  className={`flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                    active
                      ? "border-brand-orange-dark bg-[#fff7ec] shadow-[0_10px_30px_rgba(255,80,22,0.12)]"
                      : "border-line-subtle bg-white hover:border-ink-tertiary"
                  }`}
                >
                  <span className="text-[16px] font-semibold text-ink-primary">
                    {o.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      active ? "border-brand-orange-dark" : "border-line-subtle"
                    }`}
                  >
                    {active && (
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-gradient" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Left slot: Gen 1 campaign card, or an explainer when the
                campaign doesn't cover this (small) size. */}
            {gen1 ? (
              <article className="flex flex-col rounded-3xl border-2 border-brand-orange-dark/40 bg-[#fff7ec] p-5 lg:p-6">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-brand-orange-dark">
                    Tilbud · Gen 1
                  </p>
                  <span className="rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-bold text-white">
                    SPAR {gen1.spar}
                  </span>
                </div>
                <div className="relative mt-3 h-28 w-full overflow-hidden rounded-2xl bg-[radial-gradient(120%_90%_at_50%_30%,#f1f4f6_0%,#e0e5e9_100%)]">
                  <Image
                    src={gen1.image}
                    alt={gen1.name}
                    fill
                    sizes="(max-width: 640px) 90vw, 240px"
                    className="object-contain p-3"
                    style={{ filter: SILVER_FILTER }}
                  />
                </div>
                <h3 className="mt-4 text-[18px] font-bold leading-tight tracking-[-0.01em] text-ink-primary">
                  {gen1.name}
                </h3>
                <p className="text-[12.5px] text-ink-secondary">
                  {gen1.area} · dagdrift
                </p>
                <p
                  className="mt-2 text-[22px] font-bold leading-none tracking-[-0.01em] text-ink-primary"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {gen1.nu}
                  <span className="ml-1.5 align-middle text-[12px] font-medium text-ink-tertiary line-through">
                    {gen1.foer}
                  </span>
                </p>
                <a
                  href={DEALER_URL}
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-brand-gradient px-4 py-2.5 text-[13.5px] font-semibold text-white transition hover:brightness-110"
                >
                  Find forhandler
                </a>
              </article>
            ) : (
              <article className="flex flex-col justify-center rounded-3xl border border-dashed border-line-subtle bg-[#faf7f1] p-5 lg:p-6">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-tertiary">
                  Sommertilbud
                </p>
                <p className="mt-3 text-[14px] leading-[1.55] text-ink-secondary">
                  Sommertilbuddet på Gen 1 starter ved X5 (op til 2.000 m²). Til
                  helt små haver er{" "}
                  <span className="font-semibold text-ink-primary">
                    X3 Gen 2
                  </span>{" "}
                  — nyeste generation — det rette valg.
                </p>
              </article>
            )}

            {/* Right slot: the recommended Gen 2 model. */}
            <article className="flex flex-col rounded-3xl border border-line-subtle bg-[#faf7f1] p-5 lg:p-6">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-secondary">
                  Nyeste generation · Gen 2
                </p>
              </div>
              <div className="relative mt-3 h-28 w-full overflow-hidden rounded-2xl bg-[radial-gradient(120%_90%_at_50%_30%,#f7f4ee_0%,#efeae0_100%)]">
                <Image
                  src={gen2.image}
                  alt={gen2.name}
                  fill
                  sizes="(max-width: 640px) 90vw, 240px"
                  className="object-contain p-3"
                />
              </div>
              <h3 className="mt-4 text-[18px] font-bold leading-tight tracking-[-0.01em] text-ink-primary">
                {gen2.name}
              </h3>
              <p className="text-[12.5px] text-ink-secondary">{gen2Sub}</p>
              <p
                className="mt-2 text-[22px] font-bold leading-none tracking-[-0.01em] text-ink-primary"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {gen2.pris}
              </p>
              <a
                href={DEALER_URL}
                className="mt-4 flex w-full items-center justify-center rounded-full border border-ink-primary/15 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-ink-primary transition hover:border-ink-primary"
              >
                Find forhandler
              </a>
            </article>
          </div>
        </div>

        <p className="mt-8 max-w-[720px] text-[13px] leading-[1.55] text-ink-tertiary">
          Alle modeller er kabelfri. Gen 1 er på sommertilbud og kører i
          dagtilstand; Gen 2 er nyeste generation med nat-syn, iToF-kamera og
          inkluderet tyverisikring (X3 Gen 2 er dog dagdrift).
        </p>
      </div>
    </section>
  );
}
