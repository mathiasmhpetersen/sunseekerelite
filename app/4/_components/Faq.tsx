const FAQS = [
  {
    q: "Hvad er forskellen på Gen 1 og Gen 2?",
    a: "Gen 1 er forrige generation: AONavi (RTK+VSLAM), Vision AI og dagdrift. Gen 2 er nyeste generation: AONavi 2.0, Vision AI 2.0 med iToF-kamera og nat-syn, inkluderet tyverisikring og dobbelt så mange knive. Begge er kabelfri.",
  },
  {
    q: "Skal jeg nedgrave kabler?",
    a: "Nej. X-serien kortlægges digitalt via appen — ingen afgrænsningskabler.",
  },
  {
    q: "Hvornår slutter tilbuddet?",
    a: "31. august 2026, så længe lager haves. Tilbuddet gælder Gen 1 (X5, X7 og X7 Plus).",
  },
  {
    q: "Kører den om natten?",
    a: "Gen 2 kører også om natten med iToF-kamera. Gen 1 er dagdrift.",
  },
  {
    q: "Kan den klare skråninger?",
    a: "X5 klarer 60% (30°). X7 og X7 Plus klarer 70% (35°) — samme på både Gen 1 og Gen 2.",
  },
  {
    q: "Hvilken model passer til min have?",
    a: "Brug havestørrelse-vælgeren ovenfor: X5 op til 2.000 m², X7 op til 3.000 m², X7 Plus op til 6.000 m². Eller spørg din forhandler.",
  },
  {
    q: "Kan jeg få hjælp til opsætning?",
    a: "Ja — din lokale Texas-forhandler kan hjælpe. Opsætningen tager typisk under én time.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white text-ink-primary scroll-mt-[112px]">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            FAQ
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Ofte stillede spørgsmål
          </h2>
        </div>

        <div className="mt-10 max-w-[820px] divide-y divide-line-subtle border-y border-line-subtle">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              className="group py-5"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <h3 className="text-[16.5px] font-semibold text-ink-primary md:text-[17.5px]">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-subtle text-ink-secondary transition group-open:rotate-45 group-open:border-brand-orange-dark group-open:text-brand-orange-dark"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="6" y1="2" x2="6" y2="10" />
                    <line x1="2" y1="6" x2="10" y2="6" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-[680px] text-[15px] leading-[1.6] text-ink-secondary">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
