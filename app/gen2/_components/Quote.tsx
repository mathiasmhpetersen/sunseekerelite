interface QuoteProps {
  eyebrow?: string;
  meta?: string;
  quote: string;
}

export default function Quote({
  eyebrow = "Fritidsmarkedet om Sunseeker Elite X5",
  meta = "Uddrag fra anmeldelsen · 9,5 / 10",
  quote,
}: QuoteProps) {
  return (
    <section className="bg-white px-4 py-16 lg:px-8">
      <aside className="quote-box">
        <header className="quote-box__header">
          <span className="quote-box__eyebrow">{eyebrow}</span>
          <span className="quote-box__meta">{meta}</span>
        </header>
        <blockquote className="quote-box__quote">&quot;{quote}&quot;</blockquote>
      </aside>
    </section>
  );
}
