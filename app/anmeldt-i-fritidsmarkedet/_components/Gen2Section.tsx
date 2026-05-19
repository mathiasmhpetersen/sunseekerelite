const upgrades: { title: string; body: string }[] = [
  {
    title: "AONavi™ 2.0",
    body: "Network RTK + VSLAM 2.0 med 4G-GPS.",
  },
  {
    title: "Vision AI 2.0",
    body: "iToF-kamera til dag- og nattedrift.",
  },
  {
    title: "10 TOPS AI-chip",
    body: "dobbelt så hurtig behandling som Gen 1.",
  },
  {
    title: "Op til 6000 m²",
    body: "kortlægning uden afgrænsningskabler.",
  },
  {
    title: "Tre modeller",
    body: "X3, X5 og X7 / X7 Plus.",
  },
];

export default function Gen2Section() {
  return (
    <section className="bg-white px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-[680px]">
        <h3 className="h3-display text-ink-primary">
          En ny generation: Sunseeker Elite X Gen 2
        </h3>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-primary">
          Den anmeldte X5 er første generation. I 2026 lancerede Sunseeker
          Elite næste generation af serien — X Gen 2 — der bygger videre på
          det samme grundsystem og tilføjer:
        </p>

        <ul className="mt-6 space-y-4">
          {upgrades.map((u) => (
            <li key={u.title} className="text-[17px] leading-relaxed">
              <span className="font-bold text-ink-primary">{u.title}</span>{" "}
              <span className="text-ink-secondary">— {u.body}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[17px] leading-relaxed text-ink-primary">
          Anmeldelsen i Fritidsmarkedet dækker Gen 1. X Gen 2 er den nye
          serie i samme produktfamilie.
        </p>
      </div>
    </section>
  );
}
