import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__inner">
        <h2 className="final-cta__title">Se Sunseeker Elite X Gen 2</h2>
        <p className="final-cta__body">
          Tre modeller. Plæner fra små haver til 6000 m². Ledningsfri og
          antennefri opsætning.
        </p>

        <div className="final-cta__actions">
          <Link
            className="final-cta__primary"
            href="https://sunseekerelite.com/dk/x-gen-2-series"
          >
            Se serien
            <span className="final-cta__arrow" aria-hidden>
              →
            </span>
          </Link>

          <Link
            className="final-cta__secondary"
            href="https://www.fritidsmarkedet.dk/artikel/127709-min-maalte-erfaring-med-sunseeker-elite-x5-en-paalidelig-robotplaneklipper-til-rigtige-grasplaner"
          >
            Læs hele anmeldelsen i Fritidsmarkedet →
          </Link>
        </div>
      </div>
    </section>
  );
}
