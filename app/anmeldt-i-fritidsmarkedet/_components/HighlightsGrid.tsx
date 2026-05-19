import Image from "next/image";

interface Highlight {
  image: string;
  label: string;
  title: string;
  body: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    image: "/sunseeker/highlight-setup.png",
    label: "Opsætning",
    title: "Under én time",
    body: "Kabelfri opsætning via app. Ingen afgrænsningskabler nedgravet i plænen.",
  },
  {
    image: "/sunseeker/highlight-vision.png",
    label: "Vision AI",
    title: "200+ objekttyper",
    body: "Genkendte et tyggelegetøj efterladt på plænen og navigerede uden om.",
  },
  {
    image: "/sunseeker/highlight-edge.png",
    label: "Kantklipning",
    title: "Ride-on-Edge",
    body: "Trimmer helt op til kanter og hegn. Ingen uklippede strimler tilbage.",
  },
  {
    image: "/sunseeker/highlight-floating.png",
    label: "Klippehøjde",
    title: "Floating Cut System",
    body: "Justerer klippehøjden midt på ruten. Minimerer skalpering på ujævne overflader.",
  },
];

export default function HighlightsGrid() {
  return (
    <section className="highlights">
      <div className="highlights__inner">
        <header className="highlights__header">
          <span className="highlights__eyebrow">
            Hvad Fritidsmarkedet fremhævede
          </span>
          <h2 className="highlights__title">Fire ting fra testen</h2>
        </header>

        <div className="highlights__grid">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title} className="highlight-card">
              <div className="highlight-card__image">
                <Image
                  src={item.image}
                  alt=""
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
              <div className="highlight-card__body">
                <span className="highlight-card__label">{item.label}</span>
                <h3 className="highlight-card__title">{item.title}</h3>
                <p className="highlight-card__text">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
