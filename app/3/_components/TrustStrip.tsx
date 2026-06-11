type Item = {
  label: string;
  href?: string;
  icon: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    label: "9,5 / 10 hos Fritidsmarkedet",
    href: "/1",
    icon: (
      <path d="M12 2l2.39 6.96H22l-6.18 4.49 2.36 6.95L12 15.9l-6.18 4.5 2.36-6.95L2 8.96h7.61z" />
    ),
  },
  {
    label: "2 års gratis nRTK + tyverisikring",
    icon: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    label: "3 års garanti",
    icon: (
      <>
        <path d="M12 2l2.5 3 3.8.4-2.8 2.7.8 3.9L12 10.2 7.7 12l.8-3.9-2.8-2.7L9.5 5z" />
        <path d="M7.5 11.5L5 22l4.5-2.5L12 22l2.5-2.5L19 22l-2.5-10.5" />
      </>
    ),
  },
  {
    label: "Ledningsfri opsætning under 1 time",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12,7 12,12 15.5,14" />
      </>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#fff7ec] text-ink-primary">
      <div className="mx-auto max-w-content px-5 py-6 lg:px-8 lg:py-7">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4">
          {ITEMS.map((it) => {
            const inner = (
              <span className="flex items-start gap-2.5 text-[13px] font-medium leading-[1.35] text-ink-primary">
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
                  className="mt-0.5 shrink-0 text-brand-orange-dark"
                >
                  {it.icon}
                </svg>
                <span>{it.label}</span>
              </span>
            );
            return (
              <li key={it.label}>
                {it.href ? (
                  <a
                    href={it.href}
                    className="block transition hover:opacity-80"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
