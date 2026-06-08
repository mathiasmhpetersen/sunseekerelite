import { DEALER_URL } from "../_lib/models";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[420px] max-w-[1100px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,80,22,0.55), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-content px-5 py-24 text-center lg:px-8 lg:py-32">
        <h2
          className="mx-auto max-w-[760px] text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[48px]"
        >
          Find modellen til din have
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[16.5px] leading-[1.6] text-white/75">
          Fire modeller. Plæner fra små haver til 6.000 m². Ledningsfri og
          antennefri opsætning.
        </p>
        <div className="mt-9">
          <a
            href={DEALER_URL}
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(255,80,22,0.35)] transition hover:brightness-110"
          >
            Se hvor den kan købes →
          </a>
        </div>
      </div>
    </section>
  );
}
