import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto grid max-w-content gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:items-center md:gap-8 md:pb-24 md:pt-20 lg:gap-14 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="md:order-1">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            X Gen 2-serien
          </p>
          <h1
            className="mt-5 text-balance font-sans font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Ledningsfri. Antennefri. Bygget til hele haven.
          </h1>
          <p className="mt-6 max-w-[520px] text-[16.5px] leading-[1.55] text-white/75">
            Fire modeller fra 800 til 6.000 m². AONavi 2.0 kortlægger plænen
            digitalt — uden afgrænsningskabler og uden fast antenne. Vælg
            modellen, der passer til din have.
          </p>
          <div className="mt-9">
            <a
              href="#modeller"
              className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(255,80,22,0.35)] transition hover:brightness-110"
            >
              Se hele serien →
            </a>
          </div>
        </div>

        <div className="relative md:order-2">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px]">
            <Image
              src="/X3_Gen_21s.png"
              alt="Sunseeker X Gen 2 robotplæneklipper"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 560px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
