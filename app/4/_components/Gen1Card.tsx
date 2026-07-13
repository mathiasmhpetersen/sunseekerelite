import Image from "next/image";
import type { Gen1Model } from "../_lib/campaign";
import { DEALER_URL, SILVER_FILTER } from "../_lib/campaign";

export default function Gen1Card({ model }: { model: Gen1Model }) {
  const featured = model.ribbon === "MEST POPULÆR";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-transform duration-200 ease-out ${
        featured
          ? "border-2 border-brand-orange-dark shadow-[0_24px_60px_rgba(255,80,22,0.22)] md:-translate-y-1 md:scale-[1.03] hover:md:-translate-y-2"
          : "border border-line-subtle hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(10,10,10,0.08)]"
      }`}
    >
      {model.ribbon && (
        <span className="absolute left-1/2 top-3 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-gradient px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white shadow-sm">
          {model.ribbon}
        </span>
      )}

      <div className="relative aspect-[5/4] w-full overflow-hidden bg-[radial-gradient(120%_90%_at_50%_30%,#f4f6f8_0%,#e9edf0_60%,#dfe4e8_100%)]">
        {/* TODO: swap for silver Gen 1 campaign render; filter is a stand-in. */}
        <Image
          src={model.image}
          alt={model.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 360px"
          className="object-contain p-4 transition-transform duration-300 ease-out group-hover:scale-[1.04]"
          style={{ filter: SILVER_FILTER }}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-ink-primary">
            {model.name}
          </h3>
          <span className="shrink-0 rounded-full bg-[#fff1ea] px-2.5 py-1 text-[11px] font-semibold text-brand-orange-dark">
            {model.area}
          </span>
        </div>

        <p className="mt-1.5 text-[13px] leading-snug text-ink-secondary">
          {model.tagline}
        </p>

        <ul className="mt-5 flex-1 space-y-2 text-[14px] leading-[1.45] text-ink-secondary">
          {model.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange-dark"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-line-subtle pt-5">
          <div
            className="flex items-baseline gap-2.5"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            <span className="text-[15px] font-medium text-ink-tertiary line-through">
              <span className="sr-only">Førpris </span>
              {model.foer}
            </span>
            <span className="rounded-full bg-[#fff1ea] px-2 py-0.5 text-[11px] font-bold text-brand-orange-dark">
              SPAR {model.spar}
            </span>
          </div>
          <p
            className="mt-1 text-[28px] font-bold leading-none tracking-[-0.01em] text-ink-primary"
            style={{ whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}
          >
            {model.nu}
          </p>
          <p className="mt-1 text-[11.5px] text-ink-tertiary">
            inkl. moms · kampagnepris
          </p>
          <a
            href={DEALER_URL}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-brand-gradient px-4 py-3 text-[13.5px] font-semibold text-white transition hover:brightness-110"
          >
            Find forhandler
          </a>
          <a
            href="#generationer"
            className="mt-3 flex items-center justify-center gap-1 text-[12.5px] font-semibold text-ink-secondary transition hover:text-brand-orange-dark"
          >
            Findes også som Gen 2 — nyeste generation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
