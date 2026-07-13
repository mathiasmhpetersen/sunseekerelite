"use client";

import { useState } from "react";
import SunseekerLogo from "./SunseekerLogo";
import { DEALER_URL } from "../_lib/campaign";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Kampagne", href: "#kampagne" },
  { label: "Sammenlign", href: "#sammenlign" },
  { label: "Gen 1 vs Gen 2", href: "#generationer" },
  { label: "FAQ", href: "#faq" },
];

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-5 md:h-16 lg:px-8">
        <a
          href="#top"
          aria-label="Sunseeker Elite forside"
          className="flex items-center gap-3"
        >
          <SunseekerLogo height={24} />
          <span className="hidden text-[12px] font-medium text-white/60 sm:inline">
            Elite X-serien — Sommerkampagne
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={DEALER_URL}
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_6px_18px_rgba(255,80,22,0.32)] transition hover:brightness-110"
          >
            Find din forhandler
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={DEALER_URL}
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-4 py-2 text-[12.5px] font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Find forhandler
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Luk menu" : "Åbn menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="mx-auto flex max-w-content flex-col px-5 py-3">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-white/10 py-3 text-[15px] font-medium text-white/90 last:border-b-0 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
