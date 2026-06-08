import Image from "next/image";
import type { Model } from "../_lib/models";
import { DEALER_URL } from "../_lib/models";

export default function ModelCard({ model }: { model: Model }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line-subtle bg-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(10,10,10,0.07)]">
      <div className="relative aspect-[5/4] w-full bg-[#f4efe6]">
        <Image
          src={model.image}
          alt={model.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 280px"
          className="object-contain p-6"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[22px] font-bold leading-tight tracking-[-0.01em] text-ink-primary">
            {model.name}
          </h3>
          <span className="shrink-0 rounded-full bg-[#fff1ea] px-2.5 py-1 text-[11px] font-semibold text-brand-orange-dark">
            {model.area}
          </span>
        </div>

        <ul className="mt-4 space-y-1.5 text-[14px] text-ink-secondary">
          {model.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-orange-dark"
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between gap-4 pt-4 border-t border-line-subtle">
          <div>
            <p className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-ink-tertiary">
              Pris inkl. moms
            </p>
            <p className="mt-1 text-[22px] font-bold text-ink-primary">
              {model.priceDkk}
            </p>
          </div>
          <a
            href={DEALER_URL}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gradient px-4 py-2.5 text-[13px] font-semibold text-white transition hover:brightness-110"
          >
            Vælg {model.name}
          </a>
        </div>
      </div>
    </article>
  );
}
