import { models, specRows, DEALER_URL } from "../_lib/models";

export default function SpecTable() {
  return (
    <section
      id="specifikationer"
      className="bg-white text-ink-primary scroll-mt-24"
    >
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Specifikationer
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Specifikationer
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.55] text-ink-secondary">
            Sammenlign alle fire Gen 2-modeller.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-line-subtle">
          <table className="w-full min-w-[760px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="bg-[#fafafa] text-[13px] uppercase tracking-[0.08em] text-ink-tertiary">
                <th
                  scope="col"
                  className="sticky left-0 z-10 min-w-[180px] bg-[#fafafa] px-5 py-4 font-semibold"
                >
                  Specifikation
                </th>
                {models.map((m) => (
                  <th
                    key={m.id}
                    scope="col"
                    className="px-5 py-4 text-[13px] font-semibold text-ink-primary"
                  >
                    {m.name}
                    {m.featured && (
                      <span className="ml-2 inline-block rounded-full bg-brand-gradient px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em] text-white">
                        Populær
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}
                >
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 px-5 py-3.5 font-medium text-ink-secondary ${
                      i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                    }`}
                  >
                    {row.label}
                  </th>
                  {models.map((m) => (
                    <td key={m.id} className="px-5 py-3.5 text-ink-primary">
                      {row.values[m.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-line-subtle bg-white">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-white px-5 py-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary"
                >
                  Køb
                </th>
                {models.map((m) => (
                  <td key={m.id} className="px-5 py-5 align-top">
                    <a
                      href={DEALER_URL}
                      className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-3.5 py-2 text-[12.5px] font-semibold text-white transition hover:brightness-110"
                    >
                      Vælg {m.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
