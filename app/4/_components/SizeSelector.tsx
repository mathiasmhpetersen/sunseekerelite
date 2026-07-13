"use client";

import { useState } from "react";
import Image from "next/image";
import type { Gen1Model } from "../_lib/campaign";
import { DEALER_URL, SILVER_FILTER, gen1Models } from "../_lib/campaign";

type SizeKey = "under2000" | "2000to3000" | "3000to6000";

type Option = {
  key: SizeKey;
  label: string;
  modelId: "x5" | "x7" | "x7plus";
  helper?: string;
};

const OPTIONS: Option[] = [
  {
    key: "under2000",
    label: "Under 2.000 m²",
    modelId: "x5",
    helper:
      "Har du en mindre have end 2.000 m²? X5 er stadig det rigtige valg — eller spørg din forhandler om X3.",
  },
  {
    key: "2000to3000",
    label: "2.000–3.000 m²",
    modelId: "x7",
  },
  {
    key: "3000to6000",
    label: "3.000–6.000 m²",
    modelId: "x7plus",
  },
];

const modelsById: Record<string, Gen1Model> = Object.fromEntries(
  gen1Models.map((m) => [m.id, m]),
);

export default function SizeSelector() {
  // In-memory state only — no localStorage/sessionStorage (brief rule).
  const [selected, setSelected] = useState<SizeKey>("under2000");

  const option = OPTIONS.find((o) => o.key === selected)!;
  const model = modelsById[option.modelId];

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
            Vælg dit areal, så anbefaler vi den rigtige model — matchet til dit
            behov, ikke den dyreste.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1fr] md:items-center lg:gap-12">
          <div>
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
                        active
                          ? "border-brand-orange-dark"
                          : "border-line-subtle"
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
          </div>

          <div className="rounded-3xl border border-line-subtle bg-[#faf7f1] p-6 lg:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange-dark">
              Vores anbefaling
            </p>
            <div className="mt-4 flex items-center gap-5">
              <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl bg-[radial-gradient(120%_90%_at_50%_30%,#f4f6f8_0%,#e3e8ec_100%)]">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  sizes="112px"
                  className="object-contain p-2"
                  style={{ filter: SILVER_FILTER }}
                />
              </div>
              <div>
                <h3 className="text-[22px] font-bold leading-tight tracking-[-0.01em] text-ink-primary">
                  {model.name}
                </h3>
                <p className="text-[13px] text-ink-secondary">{model.area}</p>
                <p
                  className="mt-1 text-[22px] font-bold leading-none tracking-[-0.01em] text-ink-primary"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {model.nu}
                  <span className="ml-2 align-middle text-[13px] font-medium text-ink-tertiary line-through">
                    {model.foer}
                  </span>
                </p>
              </div>
            </div>

            {option.helper && (
              <p className="mt-5 text-[13.5px] leading-[1.5] text-ink-secondary">
                {option.helper}
              </p>
            )}

            <a
              href={DEALER_URL}
              className="mt-6 flex w-full items-center justify-center rounded-full bg-brand-gradient px-4 py-3 text-[14px] font-semibold text-white transition hover:brightness-110"
            >
              Find forhandler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
