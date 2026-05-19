interface QuoteProps {
  eyebrow?: string;
  quote: string;
  attribution: string;
}

export default function Quote({
  eyebrow = "FRA ANMELDELSEN",
  quote,
  attribution,
}: QuoteProps) {
  return (
    <section className="bg-white px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-[680px]">
        <figure className="rounded-xl border-l-[3px] border-brand-orange-dark bg-bg-cream px-8 py-7">
          <figcaption className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-orange-dark">
            {eyebrow}
          </figcaption>
          <blockquote className="mt-3 text-[18px] italic leading-[1.5] text-ink-primary">
            &quot;{quote}&quot;
          </blockquote>
          <figcaption className="mt-4 text-[14px] text-ink-secondary">
            — {attribution}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
