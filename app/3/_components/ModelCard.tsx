import Image from "next/image";
import type { Model } from "../_lib/models";
import { DEALER_URL } from "../_lib/models";

export default function ModelCard({ model }: { model: Model }) {
  const featured = !!model.featured;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-transform duration-200 ease-out ${
        featured
          ? "border-2 border-brand-orange-dark shadow-[0_24px_60px_rgba(255,80,22,0.22)] md:-translate-y-1 md:scale-[1.03] hover:md:-translate-y-2"
          : "border border-line-subtle hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(10,10,10,0.08)]"
      }`}
    >
      {featured && (
        <span className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full bg-brand-gradient px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-white shadow-sm">
          Mest populær
        </span>
      )}

      <div
        className={`relative aspect-[5/4] w-full overflow-hidden ${
          featured
            ? "bg-[radial-gradient(120%_90%_at_50%_30%,#fff4ec_0%,#f6efe5_60%,#efe6d6_100%)]"
            : "bg-[radial-gradient(120%_90%_at_50%_30%,#f7f4ee_0%,#efeae0_100%)]"
        }`}
      >
        <Image
          src={model.image}
          alt={model.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 280px"
          className="object-contain p-4 transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[23px] font-bold leading-tight tracking-[-0.015em] text-ink-primary">
            {model.name}
          </h3>
          <span className="shrink-0 rounded-full bg-[#fff1ea] px-2.5 py-1 text-[11px] font-semibold text-brand-orange-dark">
            {model.area}
          </span>
        </div>

        <p className="mt-1.5 text-[13px] leading-snug text-ink-secondary">
          {model.useCase}
        </p>

        <ul className="mt-5 flex-1 space-y-2 text-[14px] leading-[1.45] text-ink-secondary">
          {model.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange-dark"
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-line-subtle pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-tertiary">
            Pris inkl. moms
          </p>
          <p
            className="mt-1 text-[26px] font-bold leading-none tracking-[-0.01em] text-ink-primary"
            style={{
              whiteSpace: "nowrap",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {model.priceDkk}
          </p>
          {/* TODO: financing line e.g. "Eller fra X kr./md." if dealer supports it */}
          <a
            href={DEALER_URL}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-brand-gradient px-4 py-3 text-[13.5px] font-semibold text-white transition hover:brightness-110"
          >
            Vælg {model.name}
          </a>
        </div>
      </div>
    </article>
  );
}
