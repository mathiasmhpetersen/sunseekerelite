const points: { title: string; body: string }[] = [
  {
    title: "Opsætningen tog under én time.",
    body: "RTK-antennen blev sat op, og plænen blev kortlagt ved at køre X5 rundt om området én gang via appen. Ingen afgrænsningskabler.",
  },
  {
    title: "Vision AI undgik et tyggelegetøj.",
    body: "Et legetøj efterladt på plænen blev genkendt og undgået. Systemet kan ifølge anmeldelsen identificere over 200 objekttyper.",
  },
  {
    title: "Klippebanerne var rene og ensartede.",
    body: "Selv på milde skråninger holdt X5 lige linjer. Floating Cut System justerede klippehøjden midt på ruten og minimerede skalpering på ujævne overflader.",
  },
  {
    title: "Da det begyndte at regne, kørte den hjem.",
    body: "Midt i en session opdagede X5 regnen, vendte tilbage til ladestationen og fortsatte, hvor den slap, da vejret var bedre.",
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
          Det fremhæver Fritidsmarkedet i testen
        </h2>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-primary">
          Testplænen var hverken flad eller åben. 1.700 m² med skråninger,
          skyggefulde områder, bålplads og grøntsagsbed — det, anmeldelsen
          kalder en „rigtig” dansk plæne. Fire ting trækker Fritidsmarkedet
          frem efter testperioden:
        </p>

        <ul className="mt-8 space-y-6">
          {points.map((p) => (
            <li key={p.title} className="flex items-start gap-3">
              <Check />
              <p className="text-[17px] leading-relaxed text-ink-primary">
                <span className="font-bold">{p.title}</span>
                <span className="text-ink-secondary"> {p.body}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
