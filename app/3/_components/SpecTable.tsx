import Image from "next/image";
import {
  models,
  specRows,
  specGroups,
  DEALER_URL,
} from "../_lib/models";

export default function SpecTable() {
  const rowsByLabel = new Map(specRows.map((r) => [r.label, r]));

  return (
    <section
      id="specifikationer"
      className="bg-[#faf7f1] text-ink-primary scroll-mt-24"
    >
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Specifikationer
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Sammenlign hele serien
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.55] text-ink-secondary">
            Alle fire Gen 2-modeller side om side — vælg efter areal, terræn og
            klippebredde.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[860px]">
            {/* Sticky model header */}
            <div className="sticky top-14 z-20 -mx-1 grid grid-cols-[200px_repeat(4,1fr)] gap-3 rounded-2xl border border-line-subtle bg-white/90 p-3 shadow-[0_8px_30px_rgba(10,10,10,0.05)] backdrop-blur">
              <div className="hidden self-center pl-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-tertiary md:block">
                Specifikation
              </div>
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center text-center">
                  <span className="rounded-full bg-[#fff1ea] px-2.5 py-1 text-[10.5px] font-semibold text-brand-orange-dark">
                    {m.area}
                  </span>
                  <div className="relative mt-2 aspect-square w-full max-w-[110px] overflow-hidden rounded-xl bg-[radial-gradient(120%_90%_at_50%_30%,#f7f4ee_0%,#efeae0_100%)]">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="120px"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <p className="text-[13.5px] font-bold leading-tight tracking-[-0.01em] text-ink-primary">
                      {m.name}
                    </p>
                    {m.featured && (
                      <span className="rounded-full bg-brand-gradient px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white">
                        Populær
                      </span>
                    )}
                  </div>
                  <a
                    href={DEALER_URL}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-gradient px-3 py-1.5 text-[11.5px] font-semibold text-white transition hover:brightness-110"
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
                <section key={group.title} className="border-b border-line-subtle last:border-b-0">
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
                          className={`grid grid-cols-[200px_repeat(4,1fr)] items-start gap-3 px-5 py-4 text-[14px] ${
                            i % 2 === 0 ? "bg-white" : "bg-[#fbfaf7]"
                          }`}
                        >
                          <dt className="font-medium text-ink-secondary">
                            {label}
                          </dt>
                          {models.map((m) => (
                            <dd key={m.id} className="text-ink-primary">
                              <span className="block">
                                {row.values[m.id]}
                              </span>
                              {row.subline && (
                                <span className="mt-1 block text-[11.5px] italic text-ink-tertiary">
                                  {row.subline}
                                </span>
                              )}
                            </dd>
                          ))}
                        </div>
                      );
                    })}
                  </dl>
                </section>
              ))}
            </div>

            {/* Sticky CTA footer row */}
            <div className="mt-4 grid grid-cols-[200px_repeat(4,1fr)] items-center gap-3 rounded-2xl border border-line-subtle bg-white p-3">
              <div className="pl-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-tertiary">
                Køb
              </div>
              {models.map((m) => (
                <div key={m.id} className="flex justify-center">
                  <a
                    href={DEALER_URL}
                    className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-3.5 py-2 text-[12.5px] font-semibold text-white transition hover:brightness-110"
                  >
                    Vælg {m.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-[820px] text-[12px] leading-[1.55] text-ink-tertiary">
          Priser er vejledende udsalgspriser inkl. moms og kan variere mellem
          forhandlere. * Verificér fornyelsesprisen for nRTK + tyverisikring hos
          forhandleren før køb.
        </p>
      </div>
    </section>
  );
}
