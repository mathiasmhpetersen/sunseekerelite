import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunseeker Elite · Oversigt over landingpages",
  description:
    "Intern hub for advertorial- og campaign-landingsider for Sunseeker Elite i Danmark.",
  robots: { index: false, follow: false },
};

type Status = "live" | "draft" | "paused";

type Landingpage = {
  title: string;
  slug: string;
  url: string;
  status: Status;
  description: string;
  hook: string;
};

const SUBDOMAIN = "www.sunseekerelite-anmeldelse.dk";
const MAIN_DOMAIN = "sunseekerelite.com";

const landingpages: Landingpage[] = [
  {
    title: "Anmeldt i Fritidsmarkedet",
    slug: "1",
    url: "www.sunseekerelite-anmeldelse.dk/1",
    status: "live",
    description:
      "Advertorial bygget op om Fritidsmarkedets test af Elite X5 på en 1.700 m² plæne. 9,5/10. Fokus på kabelfri opsætning, Vision AI og kantklipning. Leder mod Elite X Gen 2 som det aktuelle køb.",
    hook: "“En pålidelig robotplæneklipper til rigtige græsplæner.”",
  },
  {
    title: "Gen2",
    slug: "2",
    url: "www.sunseekerelite-anmeldelse.dk/2",
    status: "draft",
    description:
      "Duplikat af Fritidsmarkedet-advertorial som arbejdsudgave til Elite X Gen 2-vinkel. Klar til at blive tilpasset med ny copy, billeder og CTA-tracking.",
    hook: "“En pålidelig robotplæneklipper til rigtige græsplæner.”",
  },
];

const statusLabel: Record<Status, string> = {
  live: "LIVE",
  draft: "KLADDE",
  paused: "PAUSET",
};

const statusClass: Record<Status, string> = {
  live: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  draft: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  paused: "bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-ink-primary">
      <div className="mx-auto max-w-[920px] px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
        <header className="border-b border-line-subtle pb-10">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-ink-tertiary">
            SUNSEEKER ELITE · LANDINGPAGES
          </p>
          <h1 className="mt-5 font-serif text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[48px]">
            Oversigt over landingpages
          </h1>
          <p className="mt-5 max-w-[640px] text-[16px] leading-[1.6] text-ink-secondary">
            Intern hub for advertorial- og campaign-landingsider på{" "}
            <span className="font-mono text-[14px] text-ink-primary">
              {SUBDOMAIN}
            </span>
            . Hver side er målrettet en specifik annonce-vinkel og avatar.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-secondary">
            <span>
              Subdomain:{" "}
              <span className="font-mono text-ink-primary">{SUBDOMAIN}</span>
            </span>
            <span>
              Hoveddir:{" "}
              <span className="font-mono text-ink-primary">{MAIN_DOMAIN}</span>
            </span>
          </div>
        </header>

        <section className="pt-12">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-ink-tertiary">
            AKTIVE LANDINGPAGES
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {landingpages.map((lp) => (
              <li key={lp.slug}>
                <a
                  href={`https://${lp.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-line-subtle bg-white p-6 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_10px_30px_rgba(10,10,10,0.06)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-serif text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink-primary">
                      {lp.title}
                    </h2>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.12em] ${statusClass[lp.status]}`}
                    >
                      {statusLabel[lp.status]}
                    </span>
                  </div>

                  <p className="mt-2 font-mono text-[12px] text-ink-tertiary">
                    {lp.url}
                  </p>

                  <p className="mt-4 text-[14.5px] leading-[1.55] text-ink-secondary">
                    {lp.description}
                  </p>

                  <p className="mt-4 border-t border-line-subtle pt-4 font-serif text-[14px] italic leading-[1.5] text-ink-secondary">
                    {lp.hook}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
