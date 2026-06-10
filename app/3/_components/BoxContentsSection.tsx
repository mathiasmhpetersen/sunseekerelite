import Image from "next/image";

export default function BoxContentsSection() {
  return (
    <section className="bg-white text-ink-primary">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Hvad du får
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Kassens indhold
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.55] text-ink-secondary">
            Alt du skal bruge — robotten, ladestation, oplader, ekstra knive
            og manualer. Klar til opsætning på under én time.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-line-subtle bg-[#f4efe6]">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/box-contents.jpg"
              alt="Kassens indhold — robotplæneklipper, ladestation, oplader, rengøringsbørste, ekstra knive og skruer, manualer"
              fill
              sizes="(max-width: 768px) 90vw, 1080px"
              className="object-contain p-4 md:p-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
