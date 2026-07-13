import Image from "next/image";
import { DEALER_URL, SILVER_FILTER } from "../_lib/campaign";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 65% 55%, #1c1c1c 0%, #0a0a0a 55%, #000000 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-content gap-10 px-5 pb-16 pt-12 md:grid-cols-2 md:items-center md:gap-8 md:pb-24 md:pt-16 lg:gap-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="md:order-1">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Sommerkampagne 2026
          </p>
          <h1
            className="mt-5 text-balance font-sans font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              textShadow:
                "0 0 32px rgba(255, 138, 40, 0.22), 0 0 80px rgba(255, 80, 22, 0.12)",
            }}
          >
            Kabelfri.
            <br />
            Bygget til hele haven.
            <br />
            Nu fra 9.999 kr.
          </h1>
          <p className="mt-6 max-w-[520px] text-[16.5px] leading-[1.55] text-white/75">
            Spar op til 6.000 kr. på Sunseeker X-serien. AONavi kortlægger
            plænen digitalt via appen — ingen afgrænsningskabler at grave ned.
            Vælg modellen der passer til din have.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={DEALER_URL}
              className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(255,80,22,0.35)] transition hover:brightness-110"
            >
              Find din forhandler →
            </a>
            <a
              href="#kampagne"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white/90 transition hover:border-white hover:bg-white/5"
            >
              Se kampagnemodellerne
            </a>
          </div>

          <p className="mt-5 text-[13.5px] font-medium text-white/85">
            Fra <span className="font-bold text-white">9.999 kr.</span>{" "}
            <span className="text-white/55">inkl. moms</span>
            <span className="mx-2 text-white/30">·</span>
            <span className="text-brand-orange-light">
              Spar op til 6.000 kr.
            </span>
          </p>

          <div className="mt-6">
            <Countdown variant="dark" />
          </div>
        </div>

        <div className="relative md:order-2">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[600px]">
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
            {/* TODO: swap for the silver Gen 1 campaign render when supplied. */}
            <Image
              src="/x7_plus_gen_2-id.png"
              alt="Sunseeker X-serien robotplæneklipper"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 600px"
              className="relative object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
              style={{ filter: SILVER_FILTER }}
            />
            <span className="absolute right-[6%] top-[8%] rounded-full bg-brand-gradient px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-white shadow-[0_8px_24px_rgba(255,80,22,0.4)]">
              Spar op til 6.000 kr.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
