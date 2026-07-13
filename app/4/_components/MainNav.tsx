"use client";

import { useState } from "react";
import Image from "next/image";
import SunseekerLogo from "./SunseekerLogo";
import { DEALER_URL } from "../_lib/campaign";

type NavItem = { label: string; href: string };

// In-page campaign anchors.
const ANCHORS: NavItem[] = [
  { label: "Tilbud", href: "#kampagne" },
  { label: "Sammenlign", href: "#sammenlign" },
  { label: "Gen 1 vs Gen 2", href: "#generationer" },
  { label: "FAQ", href: "#faq" },
];

type Product = { name: string; image: string; href: string };
type Series = { label: string; products: Product[] };

// Mega-menu — mirrors the /3 nav, extended with the Gen 1 X-serien.
const SERIES: Series[] = [
  {
    label: "X Gen 2-serien",
    products: [
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
    ],
  },
  {
    label: "X-serien",
    products: [
      {
        name: "X7 / X7 Plus",
        image: "/gen2/x7-gen2-beauty.jpg",
        href: "https://sunseekerelite.com/dk/x-series/x7",
      },
      {
        name: "X5",
        image: "/gen2/x5-gen2-beauty.jpg",
        href: "https://sunseekerelite.com/dk/x-series/x5",
      },
    ],
  },
];

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeSeries, setActiveSeries] = useState(0);

  const active = SERIES[activeSeries];

  return (
    <header className="relative w-full bg-black text-white">
      <div
        className="mx-auto flex h-14 max-w-content items-center justify-between px-5 md:h-16 lg:px-8"
        onMouseLeave={() => setProductsOpen(false)}
      >
        <a
          href="#top"
          aria-label="Sunseeker Elite forside"
          className="flex items-center gap-3"
        >
          <SunseekerLogo height={24} />
          <span className="hidden text-[12px] font-medium text-white/60 xl:inline">
            Elite X-serien — Sommertilbud
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              className="inline-flex items-center gap-1.5 py-1 text-[13.5px] font-medium text-white/85 transition hover:text-white"
            >
              Produkter
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
            </button>
          </div>

          {ANCHORS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setProductsOpen(false)}
              className="text-[13.5px] font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href={DEALER_URL}
            onMouseEnter={() => setProductsOpen(false)}
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

      {/* Desktop Produkter mega-menu */}
      <div
        className={`absolute inset-x-0 top-full hidden bg-white text-ink-primary shadow-[0_24px_60px_rgba(10,10,10,0.18)] transition-opacity lg:block ${
          productsOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onMouseEnter={() => setProductsOpen(true)}
        onMouseLeave={() => setProductsOpen(false)}
      >
        <div className="mx-auto grid max-w-content grid-cols-[240px_1fr] gap-8 px-5 py-8 lg:px-8">
          <aside className="border-r border-line-subtle pr-4">
            <ul className="flex flex-col gap-1">
              {SERIES.map((s, i) => (
                <li key={s.label}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveSeries(i)}
                    onFocus={() => setActiveSeries(i)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-[14px] font-semibold transition ${
                      i === activeSeries
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

          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${active.products.length}, minmax(0, 1fr))`,
            }}
          >
            {active.products.map((p) => (
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
                    sizes="(max-width: 1024px) 50vw, 300px"
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
          <nav className="mx-auto flex max-w-content flex-col px-5 py-3">
            {ANCHORS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-white/10 py-3 text-[15px] font-medium text-white/90 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {SERIES.map((s) => (
              <div key={s.label} className="mt-2 border-t border-white/10 pt-3">
                <p className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
                  {s.label}
                </p>
                {s.products.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    className="flex border-b border-white/10 py-2.5 text-[14px] font-medium text-white/85 last:border-b-0 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
