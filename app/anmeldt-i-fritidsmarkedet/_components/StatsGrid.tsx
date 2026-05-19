const stats: { value: string; label: string }[] = [
  { value: "30°", label: "maks. skråning håndteret" },
  { value: "200+", label: "objekttyper i Vision AI" },
  { value: "9,5 / 10", label: "Fritidsmarkedets bedømmelse" },
];

export default function StatsGrid() {
  return (
    <section className="stats-section">
      <div className="stats-section__inner">
        <header className="stats-section__header">
          <h2 className="stats-section__title">Tre tal fra testen</h2>
          <p className="stats-section__intro">
            Anmeldelsen blev gennemført på en 1.700 m² plæne med
            almindelige danske haveforhold over en periode.
          </p>
        </header>

        <div className="stats-grid">
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
