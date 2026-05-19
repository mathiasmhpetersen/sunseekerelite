const stats: { value: string; label: string }[] = [
  { value: "30°", label: "skråninger håndteret uden problemer" },
  { value: "200+", label: "objekttyper genkendt af Vision AI" },
  { value: "9,5 / 10", label: "bedømmelse fra Fritidsmarkedet" },
];

export default function StatsGrid() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-prose">
        <h2 className="text-balance text-3xl font-bold leading-tight text-[--text-primary] sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
          Hvorfor danske plæner kræver mere end en standard robotplæneklipper
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[--text-secondary]">
          Anmeldelsen blev udført på en typisk dansk plæne på 1.700 m² med
          skråninger, skyggefulde områder og forhindringer som bålplads og
          grøntsagsbed. Resultatet bekræfter, at moderne robotplæneklippere
          kan håndtere kompleksitet, hvor ældre modeller gav op.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-content gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-[#F0EDE4] p-6 text-center"
          >
            <div className="text-[44px] font-bold leading-none tracking-tight text-[--text-primary] sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-3 text-sm italic text-[--text-secondary]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
