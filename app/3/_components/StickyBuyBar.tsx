"use client";

import { useEffect, useState } from "react";
import SunseekerLogo from "./SunseekerLogo";
import { DEALER_URL } from "../_lib/models";

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("sticky-buy-bar-sentinel");
    if (!sentinel) {
      const handler = () => setVisible(window.scrollY > 520);
      handler();
      window.addEventListener("scroll", handler, { passive: true });
      return () => window.removeEventListener("scroll", handler);
    }

    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px" }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-black/85 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-content items-center justify-between gap-4 px-5 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 text-white">
          <SunseekerLogo height={20} />
          <span className="hidden truncate text-[13px] font-semibold text-white/90 sm:inline">
            Elite X Gen 2-serien
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#modeller"
            className="hidden text-[13px] font-medium text-white/75 transition hover:text-white md:inline"
          >
            Oversigt
          </a>
          <a
            href="#specifikationer"
            className="hidden text-[13px] font-medium text-white/75 transition hover:text-white md:inline"
          >
            Specifikationer
          </a>
          <a
            href={DEALER_URL}
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Hvor den kan købes
          </a>
        </div>
      </div>
    </div>
  );
}
