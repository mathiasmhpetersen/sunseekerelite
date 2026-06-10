import Image from "next/image";

const DETAILS = [
  {
    src: "/floating-disc-disc.png",
    alt: "Flydende skæreskive set fra undersiden — 20 cm klippebredde",
    label: "Klippebredde",
    value: "20 cm",
    caption:
      "Tre roterende knive på en flydende skive — bredere klippesti i én bevægelse.",
    bgClass: "bg-[#0a0a0a]",
  },
  {
    src: "/floating-disc-height.png",
    alt: "Klippehøjdejustering 20–60 mm",
    label: "Klippehøjde",
    value: "20–60 mm",
    caption:
      "Skiven løfter og sænker sig dynamisk og holder klippehøjden konstant over ujævne overflader.",
    bgClass: "bg-[#f4efe6]",
  },
];

export default function FloatingDiscSection() {
  return (
    <section className="bg-[#faf7f1] text-ink-primary">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:items-end md:gap-12 lg:gap-16">
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
              Klippekvalitet
            </p>
            <h2 className="mt-4 text-balance text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]">
              Flydende skæreskive
            </h2>
          </div>
          <p className="text-[16.5px] leading-[1.6] text-ink-secondary md:max-w-[520px]">
            De flydende klippeskiver tilpasser sig ujævnt underlag og komplekst
            terræn, hvilket skaber en bredere klippesti for en mere åben og
            ensartet finish.
          </p>
        </div>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-black">
          <Image
            src="/floating-disc-hero.jpg"
            alt="Sunseeker X Gen 2 med flydende skæreskive i aften-sol"
            fill
            sizes="(max-width: 768px) 90vw, 1080px"
            className="object-cover"
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {DETAILS.map((d) => (
            <article
              key={d.value}
              className="overflow-hidden rounded-3xl border border-line-subtle bg-white"
            >
              <div className={`relative aspect-[16/10] w-full ${d.bgClass}`}>
                <Image
                  src={d.src}
                  alt={d.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 540px"
                  className="object-contain p-4"
                />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange-dark">
                  {d.label}
                </p>
                <p className="text-[26px] font-bold leading-none tracking-[-0.02em] text-ink-primary">
                  {d.value}
                </p>
                <p className="mt-1 text-[14.5px] leading-[1.55] text-ink-secondary">
                  {d.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
