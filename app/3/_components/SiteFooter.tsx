import SunseekerLogo from "./SunseekerLogo";

const COLUMNS: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Produkter",
    items: [
      { label: "X3 Gen 2", href: "https://sunseekerelite.com/dk/x3-gen-2" },
      { label: "X5 Gen 2", href: "https://sunseekerelite.com/dk/x5-gen-2" },
      { label: "X7 Gen 2", href: "https://sunseekerelite.com/dk/x7-gen-2" },
      { label: "X7 Plus Gen 2", href: "https://sunseekerelite.com/dk/x7-plus-gen-2" },
      { label: "Tilbehør", href: "https://sunseekerelite.com/dk/accessories" },
    ],
  },
  {
    title: "Support & Service",
    items: [
      { label: "Support Center", href: "https://sunseekerelite.com/dk/support" },
      { label: "Garantiregistrering", href: "https://sunseekerelite.com/dk/warranty-registration" },
      { label: "Produktforespørgsel", href: "https://sunseekerelite.com/dk/product-inquiry" },
      { label: "Manualer & Videoer", href: "https://sunseekerelite.com/dk/manuals-videos" },
    ],
  },
  {
    title: "Virksomhed",
    items: [
      { label: "Om Os", href: "https://sunseekerelite.com/dk/about" },
      { label: "Elite Lab", href: "https://sunseekerelite.com/dk/elite-lab" },
      { label: "Bliv Forhandler", href: "https://sunseekerelite.com/dk/become-dealer" },
      { label: "Hvor den kan købes", href: "https://sunseekerelite.com/dk/where-to-buy" },
    ],
  },
  {
    title: "Udforsk",
    items: [
      { label: "Nyheder", href: "https://sunseekerelite.com/dk/news" },
      { label: "Blog", href: "https://sunseekerelite.com/dk/blog" },
    ],
  },
];

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://facebook.com/sunseekerelite",
    icon: (
      <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V9c0-.5.5-1 1-1z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/sunseekerelite",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@sunseekerelite",
    icon: (
      <>
        <path d="M22 8.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 5 12 5 12 5s-4 0-7.2.3c-.4 0-1.2.1-2 .9C2.2 6.8 2 8.2 2 8.2S1.8 9.8 1.8 11.5v1c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.6.2 6.9.3 6.9.3s4 0 7.2-.3c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.7.2-3.3v-1c0-1.7-.2-3.3-.2-3.3z" />
        <polygon points="10,15 15.2,12 10,9" fill="#0a0a0a" stroke="none" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/sunseekerelite",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="8" y1="11" x2="8" y2="17" />
        <line x1="8" y1="8" x2="8" y2="8" />
        <line x1="12" y1="17" x2="12" y2="13" />
        <path d="M16 17v-3.5a2 2 0 0 0-4 0" />
      </>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-content px-5 pb-12 pt-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-[14px] text-white/85 transition hover:text-white"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <SunseekerLogo height={22} />
            <span className="text-[12.5px] text-white/55">
              © 2026 Sunseeker
            </span>
          </div>

          <div className="flex items-center gap-5">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/70 transition hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-white/55">
          <a href="https://sunseekerelite.com/dk/terms" className="hover:text-white">
            Terms of Use
          </a>
          <a href="https://sunseekerelite.com/dk/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="https://sunseekerelite.com/dk/warranty" className="hover:text-white">
            Warranty Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
