const stats: { value: string; label: string }[] = [
  { value: "30°", label: "maks. skråning håndteret" },
  { value: "200+", label: "objekttyper i Vision AI" },
  { value: "9,5 / 10", label: "Fritidsmarkedets bedømmelse" },
];

export default function StatsGrid() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-wide">
        <div className="max-w-[680px]">
          <h2 className="section-heading text-ink-primary">Tre tal fra testen</h2>
          <p className="max-w-[600px] text-[17px] leading-relaxed text-ink-secondary">
            Anmeldelsen blev gennemført på en 1.700 m² plæne med
            almindelige danske haveforhold over en periode.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="stat-box">
              <div className="stat-box__number">{s.value}</div>
              <div className="stat-box__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
