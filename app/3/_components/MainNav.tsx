"use client";

import { useState } from "react";
import SunseekerLogo from "./SunseekerLogo";

const NAV = [
  { label: "Produkter", href: "https://sunseekerelite.com/dk/products" },
  { label: "Tilbehør", href: "https://sunseekerelite.com/dk/accessories" },
  { label: "Udforsk", href: "https://sunseekerelite.com/dk/explore" },
  { label: "Om Os", href: "https://sunseekerelite.com/dk/about" },
  { label: "Bliv Forhandler", href: "https://sunseekerelite.com/dk/become-dealer" },
  { label: "Hvor den kan købes", href: "https://sunseekerelite.com/dk/where-to-buy" },
  { label: "Support", href: "https://sunseekerelite.com/dk/support" },
];

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:h-[72px] lg:px-8">
        <a
          href="https://sunseekerelite.com/dk"
          aria-label="Sunseeker Elite forside"
          className="flex items-center"
        >
          <SunseekerLogo height={26} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-medium text-white/90 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Luk menu" : "Åbn menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
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
            {open ? (
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

      {open && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="mx-auto flex max-w-content flex-col px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-white/10 py-3 text-[15px] font-medium text-white/90 last:border-b-0 hover:text-white"
                onClick={() => setOpen(false)}
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
