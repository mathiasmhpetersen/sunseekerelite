import SunseekerLogo from "./SunseekerLogo";
import { DEALER_URL } from "../_lib/campaign";

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto max-w-content px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <SunseekerLogo height={22} />
            <span className="text-[13px] text-white/55">
              Elite X-serien — Sommerkampagne 2026
            </span>
          </div>
          <a
            href={DEALER_URL}
            className="inline-flex w-max items-center justify-center rounded-full bg-brand-gradient px-6 py-3 text-[14px] font-semibold text-white transition hover:brightness-110"
          >
            Find din forhandler →
          </a>
        </div>

        <p className="mt-8 max-w-[820px] text-[12px] leading-[1.6] text-white/45">
          Priser er vejledende udsalgspriser inkl. moms og kan variere mellem
          forhandlere. Kampagne gælder Gen 1 (X5 / X7 / X7 Plus) frem til 31.
          august 2026, så længe lager haves. Gen 1 kører i dagtilstand; nat-syn,
          iToF-kamera og inkluderet tyverisikring er Gen 2. Op til 3 års garanti
          = 2 år + 1 år ved registrering inden 30 dage. Dansk distributør: Texas
          A/S.
        </p>
      </div>
    </footer>
  );
}
