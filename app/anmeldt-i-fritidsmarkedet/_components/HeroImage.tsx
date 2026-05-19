import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="bg-white px-4 pt-10 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-2xl border border-[--border-subtle] bg-[#f6f6f6] shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)]">
          <Image
            src="/X3_Gen_25s.png"
            alt="Sunseeker Elite X5 anmeldt af Fritidsmarkedet"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f3f3f3] px-4 py-1.5 text-xs font-semibold text-[--text-primary]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand-orange-dark]" />
            Anmeldt af Fritidsmarkedet · maj 2025
          </span>
        </div>
      </div>
    </section>
  );
}
