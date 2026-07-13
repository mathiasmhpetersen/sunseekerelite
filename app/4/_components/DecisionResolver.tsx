import { DEALER_URL } from "../_lib/campaign";

type Profile = {
  eyebrow: string;
  title: string;
  body: string;
  example: string;
  featured?: boolean;
};

const PROFILES: Profile[] = [
  {
    eyebrow: "Mere have for pengene",
    title: "Vælg en større Gen 1 (kampagne)",
    body: "Hvis din grund er stor, du vil have mest have for pengene, og dagdrift er nok.",
    example: "Fx X7 Plus op til 6.000 m² til 17.999 kr.",
    featured: true,
  },
  {
    eyebrow: "Nyeste teknologi",
    title: "Vælg Gen 2",
    body: "Hvis du vil have nyeste generation — nat-syn, iToF og inkluderet tyverisikring — og areal betyder mindre.",
    example: "Fx X7 Gen 2, op til 3.000 m² til 23.999 kr.",
  },
];

export default function DecisionResolver() {
  return (
    <section className="bg-white text-ink-primary">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[680px]">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
            Sådan vælger du
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-primary md:text-[44px]">
            Mere have — eller nyere teknologi?
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PROFILES.map((p) => (
            <article
              key={p.title}
              className={`flex flex-col rounded-3xl border p-7 lg:p-8 ${
                p.featured
                  ? "border-brand-orange-dark/40 bg-[#fff7ec]"
                  : "border-line-subtle bg-[#faf7f1]"
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange-dark">
                {p.eyebrow}
              </p>
              <h3 className="mt-3 text-[22px] font-bold leading-tight tracking-[-0.01em] text-ink-primary">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[15.5px] leading-[1.55] text-ink-secondary">
                {p.body}
              </p>
              <p className="mt-4 rounded-xl bg-white/70 px-4 py-3 text-[13.5px] font-medium text-ink-primary">
                {p.example}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <p className="text-[15.5px] leading-[1.55] text-ink-secondary">
            Begge er kabelfri. Der findes ikke et forkert valg — kun det rigtige
            til din have.
          </p>
          <a
            href={DEALER_URL}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gradient px-6 py-3 text-[14px] font-semibold text-white transition hover:brightness-110"
          >
            Find din forhandler →
          </a>
        </div>
      </div>
    </section>
  );
}
