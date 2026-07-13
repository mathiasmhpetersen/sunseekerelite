import { DEALER_URL } from "../_lib/campaign";

export default function AnnouncementBar() {
  return (
    <a
      href={DEALER_URL}
      className="group block bg-brand-gradient text-white transition hover:brightness-[1.03]"
    >
      <div className="mx-auto flex min-h-9 max-w-content items-center justify-center gap-2 px-4 py-1.5 text-center text-[12px] font-semibold leading-tight tracking-[0.01em] sm:text-[12.5px]">
        <span aria-hidden="true">☀</span>
        <span>
          <span className="font-bold uppercase tracking-[0.08em]">
            Sommertilbud
          </span>{" "}
          — Spar op til 6.000 kr. på X-serien
          <span className="hidden sm:inline"> · Slutter 31. august</span>
        </span>
        <span className="hidden items-center gap-1 font-bold md:inline-flex">
          Find din forhandler
          <span
            aria-hidden="true"
            className="transition group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
}
