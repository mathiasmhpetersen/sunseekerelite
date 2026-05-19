import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="bg-white px-4 lg:px-8">
      <div className="mx-auto max-w-[760px]">
        <div
          className="relative overflow-hidden rounded-2xl bg-[#f6f6f6]"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
        >
          <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[480px]">
            <Image
              src="/sunseeker/fritidsmarkedet-article-hero.png"
              alt="Sunseeker Elite X5 anmeldt i Fritidsmarkedet"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 760px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-bg-stat px-4 py-2 text-[13px] font-semibold text-ink-primary">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-brand-orange-dark" />
            Fritidsmarkedet · maj 2025
          </span>
        </div>
      </div>
    </section>
  );
}
