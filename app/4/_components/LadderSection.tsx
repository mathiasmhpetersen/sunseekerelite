type Step = {
  name: string;
  price: string;
  spar: string;
  copy: string;
};

const STEPS: Step[] = [
  {
    name: "X5",
    price: "9.999 kr.",
    spar: "4.000",
    copy: "Har du op til 2.000 m²? Start her.",
  },
  {
    name: "X7",
    price: "13.999 kr.",
    spar: "5.000",
    copy: "Får du: 35 cm dobbelt knivdisk, elektrisk højdejustering (20–100 mm) og op til 3.000 m².",
  },
  {
    name: "X7 Plus",
    price: "17.999 kr.",
    spar: "6.000",
    copy: "Får du: op til 6.000 m² og 24 måneders tyverisikring inkluderet.",
  },
];

function Delta() {
  return (
    <div className="flex shrink-0 items-center justify-center md:flex-col">
      <span
        aria-hidden="true"
        className="text-[20px] font-bold text-brand-orange-light md:rotate-0"
      >
        →
      </span>
      <span className="ml-2 rounded-full border border-brand-orange-dark/40 bg-brand-orange-dark/10 px-3 py-1 text-[12px] font-bold text-brand-orange-light md:ml-0 md:mt-2">
        +4.000 kr.
      </span>
    </div>
  );
}

export default function LadderSection() {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Sådan vælger du
          </p>
          <h2
            className="mt-4 text-balance text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]"
            style={{
              textShadow:
                "0 0 28px rgba(255, 138, 40, 0.18), 0 0 70px rgba(255, 80, 22, 0.10)",
            }}
          >
            Jo større model, jo mere sparer du
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.6] text-white/75">
            Kun 4.000 kr. skiller hvert trin — og tilbuddet giver størst rabat
            på den største model.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-stretch">
          {STEPS.map((step, i) => (
            <div
              key={step.name}
              className="flex flex-col gap-4 md:flex-1 md:flex-row md:items-center"
            >
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[22px] font-bold leading-tight tracking-[-0.01em] text-white">
                    {step.name}
                  </h3>
                  <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[10.5px] font-bold text-white">
                    SPAR {step.spar}
                  </span>
                </div>
                <p
                  className="mt-2 text-[24px] font-bold leading-none tracking-[-0.01em] text-white"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {step.price}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.5] text-white/70">
                  {step.copy}
                </p>
              </div>
              {i < STEPS.length - 1 && <Delta />}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <p className="text-[15px] text-white/75">
            Ikke sikker på størrelsen? Find din plæne herunder.
          </p>
          <a
            href="#havestorrelse"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-[14px] font-semibold text-white transition hover:border-white hover:bg-white/5"
          >
            Find din model →
          </a>
        </div>
      </div>
    </section>
  );
}
