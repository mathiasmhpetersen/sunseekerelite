import { models, specRows } from "../_lib/models";

export default function SpecTable() {
  return (
    <section className="bg-white text-ink-primary">
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
                    <td
                      key={m.id}
                      className="px-5 py-3.5 text-ink-primary"
                    >
                      {row.values[m.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
