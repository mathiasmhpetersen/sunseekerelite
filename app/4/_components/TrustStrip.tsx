type Item = {
  label: string;
  href?: string;
  icon: React.ReactNode;
};

// Verified facts only. Per brief rule 2, NO "gratis tyverisikring" here —
// theft protection is a tilkøb on Gen 1 X5/X7.
const ITEMS: Item[] = [
  {
    label: "9,5 / 10 hos Fritidsmarkedet",
    href: "/1",
    icon: (
      <path d="M12 2l2.39 6.96H22l-6.18 4.49 2.36 6.95L12 15.9l-6.18 4.5 2.36-6.95L2 8.96h7.61z" />
    ),
  },
  {
    label: "Kabelfri opsætning under 1 time",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12,7 12,12 15.5,14" />
      </>
    ),
  },
  {
    label: "Op til 3 års garanti",
    icon: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    label: "Dansk distributør — Texas A/S",
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-5h6v5" />
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
