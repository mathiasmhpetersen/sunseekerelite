import Image from "next/image";
import {
  columns,
  specGroups,
  specRows,
  DEALER_URL,
  SILVER_FILTER,
} from "../_lib/campaign";

const rowsByLabel = new Map(specRows.map((r) => [r.label, r]));

// Label column + 7 model columns (3 Gen 1 tilbud + 4 Gen 2, incl. X3 Gen 2).
const GRID = "grid-cols-[168px_repeat(7,minmax(122px,1fr))]";

export default function ComparisonTable() {
  return (
    <section
      id="sammenlign"
      className="bg-[#faf7f1] text-ink-primary scroll-mt-[112px]"
    >
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Sammenlign
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Sammenlign hele serien
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.55] text-ink-secondary">
            Hele serien side om side — Gen 1 på sommertilbud og hele Gen 2-serien
            (inkl. X3 Gen 2 til mindre haver) i nyeste generation.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[1200px]">
            {/* Sticky model header */}
            <div
              className={`sticky top-[92px] z-20 -mx-1 grid ${GRID} gap-2 rounded-2xl border border-line-subtle bg-white/90 p-3 shadow-[0_8px_30px_rgba(10,10,10,0.05)] backdrop-blur md:top-[100px]`}
            >
              <div className="hidden self-center pl-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-tertiary md:block">
                Specifikation
              </div>
              {columns.map((c) => (
                <div key={c.id} className="flex flex-col items-center text-center">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.06em] ${
                      c.gen === 1
                        ? "bg-[#eef1f3] text-ink-secondary"
                        : "bg-[#fff1ea] text-brand-orange-dark"
                    }`}
                  >
                    {c.gen === 1 ? "Gen 1 · Tilbud" : "Gen 2"}
                  </span>
                  <div
                    className={`relative mt-2 aspect-square w-full max-w-[92px] overflow-hidden rounded-xl ${
                      c.gen === 1
                        ? "bg-[radial-gradient(120%_90%_at_50%_30%,#f1f4f6_0%,#e0e5e9_100%)]"
                        : "bg-[radial-gradient(120%_90%_at_50%_30%,#f7f4ee_0%,#efeae0_100%)]"
                    }`}
                  >
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="100px"
                      className="object-contain p-2"
                      style={c.gen === 1 ? { filter: SILVER_FILTER } : undefined}
                    />
                  </div>
                  <p className="mt-2 text-[13px] font-bold leading-tight tracking-[-0.01em] text-ink-primary">
                    {c.name}
                  </p>
                  <span className="mt-0.5 text-[10px] text-ink-tertiary">
                    {c.area}
                  </span>
                  <div
                    className="mt-1 leading-tight"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {c.foer && (
                      <span className="block text-[10.5px] text-ink-tertiary line-through">
                        {c.foer} kr.
                      </span>
                    )}
                    <span className="block text-[13px] font-bold text-ink-primary">
                      {c.price}
                    </span>
                  </div>
                  <a
                    href={DEALER_URL}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-gradient px-3 py-1.5 text-[11px] font-semibold text-white transition hover:brightness-110"
                  >
                    Vælg
                  </a>
                </div>
              ))}
            </div>

            {/* Grouped spec body */}
            <div
              className="mt-4 overflow-hidden rounded-2xl border border-line-subtle bg-white"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {specGroups.map((group) => (
                <section
                  key={group.title}
                  className="border-b border-line-subtle last:border-b-0"
                >
                  <header className="flex items-center gap-2 bg-[#faf7f1] px-5 py-3">
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-1.5 rounded-full bg-brand-orange-dark"
                    />
                    <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-primary">
                      {group.title}
                    </h3>
                  </header>
                  <dl>
                    {group.rowLabels.map((label, i) => {
                      const row = rowsByLabel.get(label);
                      if (!row) return null;
                      return (
                        <div
                          key={label}
                          className={`grid ${GRID} items-start gap-2 px-5 py-3.5 text-[13px] ${
                            i % 2 === 0 ? "bg-white" : "bg-[#fbfaf7]"
                          }`}
                        >
                          <dt className="font-medium text-ink-secondary">
                            {label}
                          </dt>
                          {columns.map((c) => (
                            <dd
                              key={c.id}
                              className="text-center text-ink-primary"
                            >
                              {row.values[c.id]}
                            </dd>
                          ))}
                        </div>
                      );
                    })}
                  </dl>
                </section>
              ))}

              {/* Price row */}
              <section className="border-t border-line-subtle">
                <header className="flex items-center gap-2 bg-[#faf7f1] px-5 py-3">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-brand-orange-dark"
                  />
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-primary">
                    Pris (inkl. moms)
                  </h3>
                </header>
                <div className={`grid ${GRID} items-start gap-2 px-5 py-4`}>
                  <dt className="font-medium text-ink-secondary">Pris</dt>
                  {columns.map((c) => (
                    <dd
                      key={c.id}
                      className="text-center"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {c.foer && (
                        <span className="block text-[11px] text-ink-tertiary line-through">
                          {c.foer} kr.
                        </span>
                      )}
                      <span className="block text-[14px] font-bold text-ink-primary">
                        {c.price}
                      </span>
                    </dd>
                  ))}
                </div>
              </section>
            </div>

            {/* CTA footer row */}
            <div
              className={`mt-4 grid ${GRID} items-center gap-2 rounded-2xl border border-line-subtle bg-white p-3`}
            >
              <div className="pl-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-tertiary">
                Køb
              </div>
              {columns.map((c) => (
                <div key={c.id} className="flex justify-center">
                  <a
                    href={DEALER_URL}
                    className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-3 py-1.5 text-[11.5px] font-semibold text-white transition hover:brightness-110"
                  >
                    Vælg
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-[820px] text-[12px] leading-[1.55] text-ink-tertiary">
          Priser er vejledende udsalgspriser inkl. moms og kan variere mellem
          forhandlere. Tilbudspriser gælder Gen 1 (X5 / X7 / X7 Plus) frem til
          31. august 2026, så længe lager haves. Gen 1 kører i dagtilstand;
          nat-syn, iToF og inkluderet tyverisikring er Gen 2 (X5 / X7 / X7 Plus).
          Entry-modellen X3 Gen 2 er dog dagdrift uden nat-syn/iToF. På X5 og X7
          (Gen 1) er 4G-modul + tyverisikring et tilkøb.
        </p>
      </div>
    </section>
  );
}
