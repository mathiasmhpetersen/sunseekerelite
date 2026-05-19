import CtaButton from "./CtaButton";

export default function FinalCta() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[720px] px-6 py-20 text-center">
        <h2
          className="mx-auto max-w-[560px] font-extrabold text-white"
          style={{
            fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textWrap: "balance",
          }}
        >
          Oplev Sunseeker Elite X Gen 2 i dag
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[17px] leading-relaxed text-white/70">
          Ledningsfri. Antennefri. Ubesværet. Tre modeller til plæner fra
          små haver til 6000 m².
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="https://sunseekerelite.com/dk/x-gen-2-series" size="lg">
            Se X Gen 2-serien →
          </CtaButton>
          <CtaButton
            href="https://www.fritidsmarkedet.dk/artikel/127709-min-maalte-erfaring-med-sunseeker-elite-x5-en-paalidelig-robotplaneklipper-til-rigtige-grasplaner"
            variant="secondary"
            size="lg"
          >
            Læs hele anmeldelsen
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
