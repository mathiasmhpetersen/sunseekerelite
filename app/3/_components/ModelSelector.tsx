import { models } from "../_lib/models";
import ModelCard from "./ModelCard";

export default function ModelSelector() {
  return (
    <section
      id="modeller"
      className="bg-white text-ink-primary scroll-mt-24"
    >
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Modeller
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Vælg din model
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.55] text-ink-secondary">
            Samme grundsystem. Forskellen er areal, terrænevne og klippebredde.
          </p>
          <p className="mt-2 text-[14.5px] leading-[1.55] text-ink-tertiary">
            Vælg efter din havestørrelse — fra små byhaver til 6.000 m².
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((m) => (
            <ModelCard key={m.id} model={m} />
          ))}
        </div>

        <p className="mt-10 max-w-[680px] text-[14px] leading-[1.55] text-ink-secondary">
          Slip for ugentlig manuel klipning — året rundt. Ingen kabler, ingen
          antennemast.
        </p>
      </div>
    </section>
  );
}
