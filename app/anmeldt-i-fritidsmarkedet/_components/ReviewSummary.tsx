const points: { title: string; body: string }[] = [
  {
    title: "Kabelfri opsætning under én time",
    body: "Fritidsmarkedet beskriver, hvordan AONavi-systemet kombinerer RTK-GNSS og VSLAM, så plænen kortlægges via app uden afgrænsningskabler. Opsætningen kræver ifølge anmeldelsen ingen teknisk ekspertise.",
  },
  {
    title: "Vision AI registrerer over 200 objekttyper",
    body: "I testen identificerede plæneklipperen blandt andet et tyggelegetøj efterladt i haven. Systemet bruger et 3D-kikkertkamera og en 5TOPS AI-chip til at navigere uden om forhindringer.",
  },
  {
    title: "Ride-on-Edge kantklipning",
    body: "Anmeldelsen fremhæver, at X5 trimmer helt op til kanter og hegn, så der ikke står uklippede strimler tilbage.",
  },
  {
    title: "Floating Cut System",
    body: "Klippehøjden justeres midt på ruten, hvilket ifølge Fritidsmarkedet minimerer skalpering på ujævne overflader.",
  },
];

function Check() {
  return (
    <span
      aria-hidden
      className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </span>
  );
}

export default function ReviewSummary() {
  return (
    <section className="bg-white px-4 pt-24 lg:px-8">
      <div className="mx-auto max-w-[680px]">
        <h2 className="h2-display text-ink-primary">
          Derfor giver Fritidsmarkedet Sunseeker Elite X5 topkarakter
        </h2>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-primary">
          I anmeldelsen tester Fritidsmarkedet X5 på en 1.700 m² plæne med
          skråninger, skyggefulde områder og forhindringer som bålplads og
          grøntsagsbed. Konklusionen er klar: robotplæneklipperen håndterer
          kompleksiteten uden manuel indgriben. Fire elementer fremhæves
          særligt:
        </p>

        <ul className="mt-8 space-y-6">
          {points.map((p) => (
            <li key={p.title} className="flex items-start gap-3">
              <Check />
              <p className="text-[17px] leading-relaxed text-ink-primary">
                <span className="font-bold">{p.title}</span>
                <span className="text-ink-secondary"> — {p.body}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
