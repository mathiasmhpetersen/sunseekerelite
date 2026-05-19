const stats: { value: string; label: string }[] = [
  { value: "30°", label: "maks. skråning håndteret" },
  { value: "200+", label: "objekttyper i Vision AI" },
  { value: "9,5 / 10", label: "bedømmelse fra Fritidsmarkedet" },
];

export default function StatsGrid() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-wide">
        <div className="max-w-[680px]">
          <h2 className="h2-display text-ink-primary">Hvad anmeldelsen viste</h2>
          <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-ink-secondary">
            Anmeldelsen blev gennemført over en testperiode på en 1.700 m²
            plæne med almindelige danske haveforhold. Tre tal opsummerer
            testen:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-bg-stat px-6 py-8 text-center"
            >
              <div
                className="font-extrabold text-ink-primary"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div className="mt-4 text-[14px] font-medium text-ink-secondary">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
