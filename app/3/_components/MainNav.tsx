"use client";

import { useState } from "react";
import Image from "next/image";
import SunseekerLogo from "./SunseekerLogo";

type NavItem = {
  label: string;
  href: string;
  dropdown?: boolean;
};

const NAV: NavItem[] = [
  { label: "Produkter", href: "https://sunseekerelite.com/dk/products", dropdown: true },
  { label: "Tilbehør", href: "https://sunseekerelite.com/dk/accessories" },
  { label: "Udforsk", href: "https://sunseekerelite.com/dk/news" },
  { label: "Om Os", href: "https://sunseekerelite.com/dk/about-us" },
  { label: "Bliv Forhandler", href: "https://sunseekerelite.com/dk/become-a-dealer" },
  { label: "Hvor den kan købes", href: "https://sunseekerelite.com/dk/where-to-buy" },
  { label: "Support", href: "https://sunseekerelite.com/dk/support" },
];

const SERIES = [{ label: "X Gen 2 Series", active: true }];

const PRODUCTS = [
  {
    name: "X3 Gen 2",
    image: "/nav-x3-gen-2.jpg",
    href: "https://sunseekerelite.com/dk/x3-gen-2",
  },
  {
    name: "X5 Gen 2",
    image: "/nav-x5-gen-2.jpg",
    href: "https://sunseekerelite.com/dk/x5-gen-2",
  },
  {
    name: "X7 / X7 Plus Gen 2",
    image: "/nav-x7-gen-2.jpg",
    href: "https://sunseekerelite.com/dk/x7-gen-2",
  },
];

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white isolate">
      <div
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:h-[72px] lg:px-8"
        onMouseLeave={() => setProductsOpen(false)}
      >
        <a
          href="https://sunseekerelite.com/dk"
          aria-label="Sunseeker Elite forside"
          className="flex items-center"
        >
          <SunseekerLogo height={26} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                >
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={productsOpen}
                    className="inline-flex items-center gap-1.5 py-1 text-[13.5px] font-medium text-white/90 transition hover:text-white"
                  >
                    {item.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="3 4.5 6 7.5 9 4.5" />
                    </svg>
                  </a>
                </div>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setProductsOpen(false)}
                className="text-[13.5px] font-medium text-white/90 transition hover:text-white"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
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

      {/* Desktop Produkter mega-menu */}
      <div
        className={`absolute inset-x-0 top-full hidden bg-white text-ink-primary shadow-[0_24px_60px_rgba(10,10,10,0.18)] transition-opacity lg:block ${
          productsOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onMouseEnter={() => setProductsOpen(true)}
        onMouseLeave={() => setProductsOpen(false)}
      >
        <div className="mx-auto grid max-w-content grid-cols-[220px_1fr] gap-8 px-5 py-8 lg:px-8">
          <aside className="border-r border-line-subtle pr-4">
            <ul className="flex flex-col gap-1">
              {SERIES.map((s) => (
                <li key={s.label}>
                  <button
                    type="button"
                    className={`w-full rounded-lg px-4 py-3 text-left text-[14px] font-semibold transition ${
                      s.active
                        ? "bg-[#fff1ea] text-brand-orange-dark"
                        : "text-ink-secondary hover:bg-[#f7f4ee]"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="group relative block overflow-hidden rounded-2xl bg-[#e6e6e6]"
                onClick={() => setProductsOpen(false)}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 260px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent"
                  />
                  <h3 className="absolute inset-x-4 bottom-3 text-[16px] font-bold leading-tight tracking-[-0.01em] text-white drop-shadow">
                    {p.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="mx-auto flex max-w-content flex-col px-5 py-4">
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
            <div className="mt-2 border-t border-white/10 pt-3">
              <p className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
                X Gen 2 Series
              </p>
              {PRODUCTS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="border-b border-white/10 py-2.5 text-[14px] font-medium text-white/85 last:border-b-0 hover:text-white flex"
                  onClick={() => setMobileOpen(false)}
                >
                  {p.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
