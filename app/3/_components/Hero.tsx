import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 65% 55%, #1c1c1c 0%, #0a0a0a 55%, #000000 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-content gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:items-center md:gap-8 md:pb-24 md:pt-20 lg:gap-14 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="md:order-1">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            X Gen 2-serien
          </p>
          <h1
            className="mt-5 text-balance font-sans font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              textShadow:
                "0 0 32px rgba(255, 138, 40, 0.22), 0 0 80px rgba(255, 80, 22, 0.12)",
            }}
          >
            Ledningsfri. Antennefri. Bygget til hele haven.
          </h1>
          <p className="mt-6 max-w-[520px] text-[16.5px] leading-[1.55] text-white/75">
            Fire modeller fra 800 til 6.000 m². AONavi 2.0 kortlægger plænen
            digitalt — uden afgrænsningskabler og uden fast antenne. Vælg
            modellen, der passer til din have.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3">
            <a
              href="#modeller"
              className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(255,80,22,0.35)] transition hover:brightness-110"
            >
              Se hele serien →
            </a>
            <p className="text-[13.5px] font-medium text-white/85">
              Fra <span className="font-bold text-white">7.999 kr.</span>{" "}
              <span className="text-white/55">inkl. moms</span>
            </p>
            <p className="text-[12.5px] text-white/55">
              Anmeldt 9,5/10 · Ledningsfri · Antennefri
            </p>
          </div>
        </div>

        <div className="relative md:order-2">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[600px]">
            {/* TODO: replace with hero-lineup.jpg (4 mowers in a row at dusk) */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(55% 50% at 50% 48%, rgba(255, 138, 40, 0.18) 0%, rgba(40, 28, 20, 0.55) 35%, rgba(0, 0, 0, 0) 75%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-[8%] bottom-[6%] h-[14%] rounded-[50%] blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(0,0,0,0.85), transparent 70%)",
              }}
            />
            <Image
              src="/X3_Gen_21s.png"
              alt="Sunseeker X Gen 2 robotplæneklipper"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 600px"
              className="relative object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div>
      <div id="sticky-buy-bar-sentinel" aria-hidden="true" className="h-px" />
    </section>
  );
}
