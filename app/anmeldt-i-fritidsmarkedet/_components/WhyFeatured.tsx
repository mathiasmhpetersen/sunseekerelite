const points: { title: string; body: string }[] = [
  {
    title: "AONavi™ kabelfri navigation",
    body: "kombinerer RTK-GNSS og VSLAM, så plæneklipperen kortlægger plænen uden afgrænsningskabler. Opsætning under én time.",
  },
  {
    title: "Vision AI med 3D-kikkertkamera",
    body: "identificerer og navigerer uden om mere end 200 objekttyper, fra legetøj til kæledyr og haveværktøj.",
  },
  {
    title: "Ride-on-Edge kantklipning",
    body: "trimmer helt op til kanter og hegn, så ingen uklippede strimler står tilbage.",
  },
  {
    title: "Floating Cut System",
    body: "justerer klippehøjden midt på ruten og minimerer skalpering på ujævne overflader.",
  },
];

function Check() {
  return (
    <span
      aria-hidden
      className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black text-white"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </span>
  );
}

export default function WhyFeatured() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-prose">
        <h2 className="text-balance text-3xl font-bold leading-tight text-[--text-primary] sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
          Derfor fremhæver Fritidsmarkedet Sunseeker Elite X5
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[--text-secondary]">
          I artiklen beskriver Fritidsmarkedet, hvordan robotplæneklipperen
          X5 leverer pålidelig præstation på en kompleks dansk plæne med
          skråninger, skygge og forhindringer – og peger specifikt på fire
          styrker:
        </p>

        <ul className="mt-8 space-y-5">
          {points.map((p) => (
            <li key={p.title} className="flex items-start gap-4">
              <Check />
              <p className="text-base leading-relaxed text-[--text-primary]">
                <span className="font-semibold">{p.title}</span>
                <span className="text-[--text-secondary]"> – {p.body}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
