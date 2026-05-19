import Link from "next/link";
import SunseekerLogo from "./SunseekerLogo";

interface LinkItem {
  label: string;
  href: string;
}

const products: LinkItem[] = [
  { label: "X7 / X7 Plus", href: "https://sunseekerelite.com/dk/x-series/x7" },
  { label: "X5", href: "https://sunseekerelite.com/dk/x-series/x5" },
  { label: "Tilbehør", href: "https://sunseekerelite.com/dk/accessories" },
  { label: "Robotplæneklippere", href: "https://sunseekerelite.com/dk/collections/robot-lawn-mower" },
];

const support: LinkItem[] = [
  { label: "Supportcenter", href: "https://sunseekerintelligenttechn.freshdesk.com/da/support/home" },
  { label: "Registrering af garanti", href: "https://warranty.elite.sk-robot.com/da" },
  { label: "Produktforespørgsel", href: "https://sunseekerelite.com/dk/product-inquiry" },
  { label: "Manualer og videoer", href: "https://sunseekerelite.com/dk/support" },
];

const company: LinkItem[] = [
  { label: "Om os", href: "https://sunseekerelite.com/dk/about-us" },
  { label: "Elite Lab", href: "https://sunseekerelite.com/dk/elite-lab" },
  { label: "Bliv forhandler", href: "https://sunseekerelite.com/dk/become-a-dealer" },
  { label: "Hvor den kan købes", href: "https://sunseekerelite.com/dk/where-to-buy" },
];

const explore: LinkItem[] = [
  { label: "Nyheder", href: "https://sunseekerelite.com/dk/news" },
  { label: "Blog", href: "https://sunseekerelite.com/dk/blog" },
];

const social: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/SunseekerElite",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sunseekerelite/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@SunseekerElite-global",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C17 3.7 12 3.7 12 3.7s-5 0-8 .2c-.4.1-1.3.1-2.1 1C1.2 5.6 1 7.2 1 7.2S.7 9 .7 10.9v1.7C.7 14.5 1 16.3 1 16.3s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.2 7.7.2s5 0 8-.2c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.3-1.8.3-3.7v-1.7c0-1.9-.3-3.7-.3-3.7zM9.7 14.6V8.3l6.4 3.2-6.4 3.1z" /></svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sunseeker-elite-global",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18V10H5.8v8h2.5zM7 8.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18 18v-4.4c0-2.4-1.3-3.5-3-3.5a2.6 2.6 0 0 0-2.4 1.3V10h-2.4v8h2.5v-4.4c0-1.2.2-2.3 1.7-2.3s1.5 1.3 1.5 2.3V18H18z" /></svg>
    ),
  },
];

const legal: LinkItem[] = [
  { label: "Brugsvilkår", href: "https://sunseekerelite.com/dk/terms-of-use" },
  { label: "Databeskyttelsespolitik", href: "https://sunseekerelite.com/dk/privacy-policy" },
  { label: "Garantipolitik", href: "https://sunseekerelite.com/dk/warranty-policy" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.04em] text-white">
      {children}
    </h4>
  );
}

function ColumnLinks({ items }: { items: LinkItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i.label}>
          <Link
            href={i.href}
            className="text-[14px] text-white/70 transition hover:text-white"
          >
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-content px-4 pb-8 pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <ColumnHeading>Produkter</ColumnHeading>
            <ColumnLinks items={products} />
          </div>
          <div>
            <ColumnHeading>Support og service</ColumnHeading>
            <ColumnLinks items={support} />
          </div>
          <div>
            <ColumnHeading>Virksomhed</ColumnHeading>
            <ColumnLinks items={company} />
          </div>
          <div>
            <ColumnHeading>Udforsk</ColumnHeading>
            <ColumnLinks items={explore} />
            <div className="mt-6 flex items-center gap-3">
              {social.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-white/70 transition hover:text-white"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/[0.08] pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <SunseekerLogo height={22} />
            <span className="text-[13px] text-white/50">
              © 2026 Sunseeker. Alle rettigheder forbeholdes.
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[13px] text-white/50 transition hover:text-white/80"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
