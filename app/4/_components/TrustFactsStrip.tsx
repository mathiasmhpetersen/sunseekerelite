const FACTS: { value: string; label: string }[] = [
  { value: "Texas A/S", label: "Dansk distributør" },
  { value: "Op til 3 år", label: "Garanti (2 år + 1 år ved registrering)" },
  { value: "Verdens 3.", label: "største producent af robotplæneklippere" },
  { value: "Red Dot · iF", label: "Plus X Award 2025 · designpriser" },
  { value: "TÜV Rheinland", label: "Certificeret datasikkerhed" },
];

export default function TrustFactsStrip() {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-content px-5 py-16 lg:px-8 lg:py-20">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
          Tryghed
        </p>
        <h2 className="mt-4 max-w-[680px] text-balance text-[26px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[32px]">
          Bygget på dokumentation — ikke løfter
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
          {FACTS.map((f) => (
            <li key={f.label} className="border-l border-white/12 pl-4">
              <p className="text-[19px] font-bold leading-tight tracking-[-0.01em] text-white">
                {f.value}
              </p>
              <p className="mt-1.5 text-[12.5px] leading-[1.4] text-white/60">
                {f.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
