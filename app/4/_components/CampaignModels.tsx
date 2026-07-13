import { gen1Models } from "../_lib/campaign";
import Gen1Card from "./Gen1Card";

export default function CampaignModels() {
  return (
    <section id="kampagne" className="bg-white text-ink-primary scroll-mt-[112px]">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Modeller
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Vælg din model — nu på sommertilbud
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.55] text-ink-secondary">
            Samme kabelfri grundsystem. Forskellen er areal, terræn og
            klippebredde.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {gen1Models.map((m) => (
            <Gen1Card key={m.id} model={m} />
          ))}
        </div>

        <p className="mt-10 max-w-[680px] text-[13px] leading-[1.55] text-ink-tertiary">
          Tilbudspriser gælder Gen 1 (X5 / X7 / X7 Plus) frem til 31. august
          2026 — så længe lager haves. Priser er inkl. moms.
        </p>
      </div>
    </section>
  );
}
