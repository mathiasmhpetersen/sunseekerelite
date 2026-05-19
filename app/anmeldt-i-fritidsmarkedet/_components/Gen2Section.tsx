import Image from "next/image";
import CtaButton from "./CtaButton";

const upgrades: { title: string; body: string }[] = [
  {
    title: "AONavi™ 2.0:",
    body: "Network RTK + VSLAM 2.0 med 4G-GPS. Helt antennefri opsætning.",
  },
  {
    title: "Vision AI 2.0:",
    body: "Dag- og nattedrift med iToF-kamera. Klipper sikkert døgnet rundt.",
  },
  {
    title: "10 TOPS AI-chip:",
    body: "Dobbelt så hurtig behandling som Gen 1.",
  },
  {
    title: "Kortlægning op til 6000 m²",
    body: "uden afgrænsningskabler.",
  },
  {
    title: "Tre modeller:",
    body: "X3 Gen 2, X5 Gen 2 og X7 Gen 2 / X7 Gen 2 Plus.",
  },
];

export default function Gen2Section() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-prose">
        <h3 className="text-balance text-2xl font-bold leading-tight text-[--text-primary] sm:text-3xl" style={{ letterSpacing: "-0.02em" }}>
          En ny generation er ude: Sunseeker Elite X Gen 2
        </h3>
        <p className="mt-6 text-lg leading-relaxed text-[--text-secondary]">
          Den anmeldte X5 tilhører første generation. I 2026 lancerede
          Sunseeker Elite næste generation – <strong className="text-[--text-primary]">X Gen 2-serien</strong> – med en
          række opgraderinger, der bygger videre på de styrker,
          Fritidsmarkedet fremhævede:
        </p>

        <ul className="mt-8 space-y-3">
          {upgrades.map((u) => (
            <li key={u.title} className="text-base leading-relaxed">
              <span className="font-semibold text-[--text-primary]">{u.title}</span>{" "}
              <span className="text-[--text-secondary]">{u.body}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-lg leading-relaxed text-[--text-secondary]">
          For dig der overvejede X5 efter at have læst anmeldelsen, er X Gen
          2-serien det naturlige skridt videre – samme pålidelige fundament,
          men med næste generations teknologi.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-content">
        <div className="relative overflow-hidden rounded-2xl bg-[#f6f6f6]">
          <Image
            src="/X3_Gen_27s.png"
            alt="Sunseeker Elite X Gen 2"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton href="https://sunseekerelite.com/dk/x-gen-2-series" size="lg">
          Se Sunseeker Elite X Gen 2 →
        </CtaButton>
      </div>
    </section>
  );
}
