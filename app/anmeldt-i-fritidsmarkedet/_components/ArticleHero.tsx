export default function ArticleHero() {
  return (
    <section className="bg-white px-4 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-prose text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[--text-secondary]">
          Presseomtale · Fritidsmarkedet 2025
        </p>
        <h1 className="mt-5 text-balance font-bold leading-[1.1] text-[--text-primary]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
          Sunseeker Elite X5 fremhævet i Fritidsmarkedet som pålidelig
          robotplæneklipper til rigtige græsplæner
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[--text-secondary]">
          I en uafhængig anmeldelse beskriver Fritidsmarkedet, hvordan
          Sunseeker Elite X5 leverer præcis kantklipning, smart navigation
          og pålidelig drift på komplekse plæner – og giver robotten{" "}
          <span className="font-semibold text-[--text-primary]">9,5 / 10</span>.
        </p>
        <p className="mt-6 text-sm italic text-[--text-secondary]">
          Skrevet af Sunseeker Elite · Opdateret maj 2026
        </p>
      </div>
    </section>
  );
}
