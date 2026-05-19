interface QuoteProps {
  quote: string;
  attribution: string;
  label?: string;
}

export default function Quote({ quote, attribution, label }: QuoteProps) {
  return (
    <section className="bg-white px-4 lg:px-8">
      <div className="mx-auto max-w-prose">
        <figure className="rounded-xl border-l-4 border-[--brand-orange-dark] bg-[#FFF4E6] p-6 sm:p-7">
          {label ? (
            <figcaption className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[--text-primary]">
              {label}
            </figcaption>
          ) : null}
          <blockquote className="text-lg italic leading-relaxed text-[--text-primary] sm:text-xl">
            “{quote}”
          </blockquote>
          <figcaption className="mt-4 text-sm italic text-[--text-secondary]">
            — {attribution}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
