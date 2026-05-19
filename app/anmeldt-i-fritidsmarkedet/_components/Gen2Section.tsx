const upgrades: { title: string; body: string }[] = [
  {
    title: "AONavi™ 2.0",
    body: "Network RTK + VSLAM 2.0 med 4G-GPS. Antennefri opsætning.",
  },
  {
    title: "Vision AI 2.0",
    body: "Dag- og nattedrift med iToF-kamera.",
  },
  {
    title: "10 TOPS AI-chip",
    body: "dobbelt så hurtig behandling som Gen 1.",
  },
  {
    title: "Kortlægning op til 6000 m²",
    body: "uden afgrænsningskabler.",
  },
  {
    title: "Tre modeller",
    body: "X3 Gen 2, X5 Gen 2 og X7 Gen 2 / X7 Gen 2 Plus.",
  },
];

export default function Gen2Section() {
  return (
    <section className="bg-white px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-[680px]">
        <h3 className="h3-display text-ink-primary">
          Den anmeldte X5 er Gen 1 — Sunseeker Elite X Gen 2 er nu ude
        </h3>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-primary">
          Anmeldelsen fra Fritidsmarkedet dækker første generation af X5. I
          2026 lancerede Sunseeker Elite næste generation af serien — X Gen 2
          — der bygger videre på det fundament, Fritidsmarkedet roste, og
          introducerer:
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
          For dig der overvejede X5 efter at have læst anmeldelsen, er X Gen
          2-serien det naturlige skridt videre — samme fundament, men med
          næste generations teknologi.
        </p>
      </div>
    </section>
  );
}
