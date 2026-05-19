import CtaButton from "./CtaButton";

export default function FinalCta() {
  return (
    <section className="w-full bg-[--brand-bg-dark] px-4 py-16 text-white sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[600px] text-center">
        <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: "-0.02em" }}>
          Oplev Sunseeker Elite X Gen 2 i dag
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-white/70">
          Ledningsfri. Antennefri. Ubesværet. Tre modeller til plæner fra
          små haver til 6000 m².
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <CtaButton href="https://sunseekerelite.com/dk/x-gen-2-series" size="lg">
            Se X Gen 2-serien →
          </CtaButton>
          <CtaButton
            href="https://www.fritidsmarkedet.dk/artikel/127709-min-maalte-erfaring-med-sunseeker-elite-x5-en-paalidelig-robotplaneklipper-til-rigtige-grasplaner"
            variant="secondary"
            size="lg"
          >
            Læs anmeldelsen
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
