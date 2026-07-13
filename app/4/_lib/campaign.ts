// SINGLE SOURCE OF TRUTH for the Sommerkampagne 2026 page (/4).
// Every price and spec below is transcribed verbatim from the build brief
// (Section 3 — LOCKED DATA). Do NOT edit values without a matching source.
//
// Correctness invariants baked in here (see brief Section 0 / Section 8):
//  - Gen 1 (X5/X7/X7 Plus) = Dagtilstand only. No night vision, no iToF, no Vision AI 2.0.
//  - Theft protection: Gen 1 X5/X7 = tilkøb, Gen 1 X7 Plus = 24 mdr inkl., all Gen 2 = inkl.
//  - Campaign pricing applies to Gen 1 ONLY. Gen 2 stays at full price.
//  - Warranty phrasing = "Op til 3 års garanti (2 år + 1 år ved registrering inden 30 dage)".

export const DEALER_URL = "https://sunseekerelite.com/dk/where-to-buy";

/** Campaign deadline — countdowns target this exact instant. */
export const CAMPAIGN_DEADLINE_ISO = "2026-08-31T23:59:59+02:00";
export const CAMPAIGN_DEADLINE_LABEL = "31. august 2026";

export type Gen1Id = "x5" | "x7" | "x7plus";
// The three Gen 2 models that pair 1:1 with a Gen 1 campaign model.
export type CoreGen2Id = "x5g2" | "x7g2" | "x7plusg2";
// X3 Gen 2 is the entry Gen 2 model — no Gen 1 campaign counterpart, and it
// differs from the core Gen 2s (dagtilstand only, forhjulstræk). Sourced from /3.
export type Gen2Id = CoreGen2Id | "x3g2";
// Columns that share the simple "Gen 1 value / Gen 2 value" pattern (the 6 pairs).
export type CoreColId = Gen1Id | CoreGen2Id;
export type ColId = Gen1Id | Gen2Id;

/** Ribbon shown on a Gen 1 campaign card. */
export type Ribbon = "MEST POPULÆR" | "STØRSTE BESPARELSE" | null;

export type Gen1Model = {
  id: Gen1Id;
  name: string;
  slug: string;
  area: string;
  foer: string; // struck-through vejledende pris
  nu: string; // kampagnepris
  spar: string; // besparelse, e.g. "4.000"
  tagline: string;
  bullets: string[];
  ribbon: Ribbon;
  image: string;
};

// NOTE ON IMAGERY: the brief calls for the *silver/chrome* Gen 1 render on all
// Gen 1 cards and a *graphite* render on Gen 2. Only the graphite Gen 2 renders
// (`*_gen_2-id.png`) currently exist in /public, so we reuse them and apply a
// light "silver" filter (SILVER_FILTER) to the Gen 1 side to keep the
// chrome-vs-graphite contrast the brief asks for.
// TODO: swap Gen 1 `image` values for the real silver campaign renders when supplied.
export const SILVER_FILTER = "grayscale(0.45) brightness(1.12) contrast(0.94)";

export const gen1Models: Gen1Model[] = [
  {
    id: "x5",
    name: "Sunseeker X5",
    slug: "x5",
    area: "op til 2.000 m²",
    foer: "13.999 kr.",
    nu: "9.999 kr.",
    spar: "4.000",
    tagline: "Til typiske danske parcelhaver",
    bullets: [
      "AWD + baghjulsstyring",
      "60% (30°) hældning",
      "22 cm klippebredde",
      "Vision AI forhindringsundgåelse",
      "Kabelfri kortlægning",
    ],
    ribbon: null,
    image: "/x5_gen_2-id.png",
  },
  {
    id: "x7",
    name: "Sunseeker X7",
    slug: "x7",
    area: "op til 3.000 m²",
    foer: "18.999 kr.",
    nu: "13.999 kr.",
    spar: "5.000",
    tagline: "Til store grunde og komplekst terræn",
    bullets: [
      "AWD + baghjulsstyring",
      "70% (35°) hældning",
      "35 cm dobbelt knivdisk",
      "Elektrisk højdejustering 20–100 mm",
      "10 Ah batteri",
    ],
    ribbon: "MEST POPULÆR",
    image: "/x7_gen_2-id.png",
  },
  {
    id: "x7plus",
    name: "Sunseeker X7 Plus",
    slug: "x7-plus",
    area: "op til 6.000 m²",
    foer: "23.999 kr.",
    nu: "17.999 kr.",
    spar: "6.000",
    tagline: "Til meget store grunde og landejendomme",
    bullets: [
      "AWD + baghjulsstyring",
      "70% (35°) hældning",
      "35 cm dobbelt knivdisk",
      "24 mdr tyverisikring inkluderet",
      "7 A hurtig oplader",
    ],
    ribbon: "STØRSTE BESPARELSE",
    image: "/x7_plus_gen_2-id.png",
  },
];

export type Gen2Model = {
  id: Gen2Id;
  name: string;
  area: string;
  pris: string;
  image: string;
};

export const gen2Models: Gen2Model[] = [
  {
    id: "x3g2",
    name: "Sunseeker X3 Gen 2",
    area: "op til 800 m²",
    pris: "7.999 kr.",
    image: "/x3_gen_2-id.png",
  },
  {
    id: "x5g2",
    name: "Sunseeker X5 Gen 2",
    area: "op til 2.000 m²",
    pris: "15.999 kr.",
    image: "/x5_gen_2-id.png",
  },
  {
    id: "x7g2",
    name: "Sunseeker X7 Gen 2",
    area: "op til 3.000 m²",
    pris: "23.999 kr.",
    image: "/x7_gen_2-id.png",
  },
  {
    id: "x7plusg2",
    name: "Sunseeker X7 Plus Gen 2",
    area: "op til 6.000 m²",
    pris: "27.999 kr.",
    image: "/x7_plus_gen_2-id.png",
  },
];

/** Pairs the Gen 1 → Gen 2 upgrade (Section 6). */
export type GenPair = {
  gen1: Gen1Id;
  gen2: Gen2Id;
  label: string; // toggle label
  delta: string; // e.g. "+6.000 kr."
  securityNote: string; // per-model security wording for the upgrade list
};

export const genPairs: GenPair[] = [
  {
    gen1: "x5",
    gen2: "x5g2",
    label: "X5",
    delta: "+6.000 kr.",
    securityNote: "Tyverisikring inkluderet (24 mdr) — Gen 1: tilkøb",
  },
  {
    gen1: "x7",
    gen2: "x7g2",
    label: "X7",
    delta: "+10.000 kr.",
    securityNote: "Tyverisikring inkluderet (24 mdr) — Gen 1: tilkøb",
  },
  {
    gen1: "x7plus",
    gen2: "x7plusg2",
    label: "X7 Plus",
    delta: "+10.000 kr.",
    securityNote: "Tyverisikring inkluderet (60 mdr) — Gen 1: 24 mdr",
  },
];

/** What Gen 2 adds over Gen 1 (Section 3.4). Security line is per-model, so it
 *  is supplied separately from genPairs[].securityNote. */
export const gen2Upgrades: string[] = [
  "Nat-syn — kører også om natten",
  "iToF-kamera + Vision AI 2.0",
  "Dobbelt så mange knive",
  "LCD-display + LED-forlygte",
  "Automatisk kortlægning + hjulbørster",
  "Klipning i flere vinkler",
];

/** The one thing Gen 1 keeps over Gen 2 — shown honestly (Section 3.4 / rule 5). */
export const gen1Keeps = "Super WiFi (LoRa) — ekstra lang WiFi-rækkevidde";

// ---------------------------------------------------------------------------
// FULL SPEC GRID (Section 3.3) — six columns, verbatim.
// Column order matches Section 8: X5 · X7 · X7 Plus · X5 Gen 2 · X7 Gen 2 · X7 Plus Gen 2
// ---------------------------------------------------------------------------

export const columnOrder: ColId[] = [
  "x5",
  "x7",
  "x7plus",
  "x3g2",
  "x5g2",
  "x7g2",
  "x7plusg2",
];

export type SpecRow = {
  label: string;
  values: Record<ColId, string>;
};

// The six paired columns are authored here; X3 Gen 2 is grafted on afterwards
// (see x3g2Values below) so its many differences live in one place.
type BaseSpecRow = {
  label: string;
  values: Record<CoreColId, string>;
};

export type SpecGroup = {
  title: string;
  rowLabels: string[];
};

export const specGroups: SpecGroup[] = [
  { title: "Areal", rowLabels: ["Maks. areal"] },
  {
    title: "Navigation & syn",
    rowLabels: [
      "Teknologi",
      "Synstilstand",
      "Kamera",
      "Forhindringsundgåelse",
      "Nattilstand",
    ],
  },
  {
    title: "Klipning",
    rowLabels: [
      "Klippebredde",
      "Klippehøjde",
      "Højdejustering",
      "Knive",
      "Klippehastighed",
      "Adaptiv klippedisk",
      "Kantklip over grænsen",
      "Kantklipper",
      "Klipning i flere vinkler",
    ],
  },
  {
    title: "Drev & terræn",
    rowLabels: [
      "Drev",
      "Maks. hældning",
      "Affjedring",
      "Bevægelig kofanger",
    ],
  },
  { title: "Strøm", rowLabels: ["Batteri", "Oplader", "Vandtæthed"] },
  {
    title: "Tjenester & forbindelse",
    rowLabels: [
      "Modul + tyverisikring",
      "Forbindelse",
      "Super WiFi (LoRa)",
      "Multi-zoner",
      "Regnsensor",
      "Trådløs opdatering (FOTA)",
      "Alexa / Google Home",
      "Lydniveau",
      "Display",
    ],
  },
  {
    title: "Funktioner",
    rowLabels: [
      "Automatisk kortlægning",
      "Ruteplanlægning",
      "LED-forlygte",
      "Hjulbørster",
      "Virtuelle grænser",
      "Planlægning af klippetider",
    ],
  },
];

// Helper to build a row where all six paired columns share one value.
const all = (v: string): Record<CoreColId, string> => ({
  x5: v,
  x7: v,
  x7plus: v,
  x5g2: v,
  x7g2: v,
  x7plusg2: v,
});

// Helper for the common "Gen 1 value" / "Gen 2 value" split.
const byGen = (g1: string, g2: string): Record<CoreColId, string> => ({
  x5: g1,
  x7: g1,
  x7plus: g1,
  x5g2: g2,
  x7g2: g2,
  x7plusg2: g2,
});

const baseSpecRows: BaseSpecRow[] = [
  {
    label: "Maks. areal",
    values: {
      x5: "2.000 m²",
      x7: "3.000 m²",
      x7plus: "6.000 m²",
      x5g2: "2.000 m²",
      x7g2: "3.000 m²",
      x7plusg2: "6.000 m²",
    },
  },
  {
    label: "Teknologi",
    values: byGen(
      "AONavi (RTK+VSLAM) + Vision AI",
      "AONavi 2.0 (nRTK+VSLAM 2.0) + Vision AI 2.0",
    ),
  },
  {
    label: "Synstilstand",
    values: byGen("Dagtilstand", "Dag + Nattilstand"),
  },
  {
    label: "Kamera",
    values: byGen("Binokulær", "Binokulær + iToF"),
  },
  {
    label: "Forhindringsundgåelse",
    values: byGen("Vision AI + kofanger", "Vision AI 2.0 + kofanger"),
  },
  {
    label: "Nattilstand",
    values: byGen("–", "✓"),
  },
  {
    label: "Klippebredde",
    values: {
      x5: "22 cm",
      x7: "35 cm (dobbelt knivdisk)",
      x7plus: "35 cm (dobbelt knivdisk)",
      x5g2: "22 cm",
      x7g2: "35 cm (dobbelt knivdisk)",
      x7plusg2: "35 cm (dobbelt knivdisk)",
    },
  },
  {
    label: "Klippehøjde",
    values: {
      x5: "20–60 mm",
      x7: "20–100 mm",
      x7plus: "20–100 mm",
      x5g2: "20–60 mm",
      x7g2: "20–100 mm",
      x7plusg2: "20–100 mm",
    },
  },
  {
    label: "Højdejustering",
    values: {
      x5: "Manuel",
      x7: "Elektrisk",
      x7plus: "Elektrisk",
      x5g2: "Manuel",
      x7g2: "Elektrisk",
      x7plusg2: "Elektrisk",
    },
  },
  {
    label: "Knive",
    values: {
      x5: "3 knive",
      x7: "3 knive × 2",
      x7plus: "3 knive × 2",
      x5g2: "6 knive",
      x7g2: "6 knive × 2",
      x7plusg2: "6 knive × 2",
    },
  },
  {
    label: "Klippehastighed",
    values: all("Max 0,45 m/s"),
  },
  {
    label: "Adaptiv klippedisk",
    values: all("✓"),
  },
  {
    label: "Kantklip over grænsen",
    values: all("✓"),
  },
  {
    label: "Kantklipper",
    values: all("✓"),
  },
  {
    label: "Klipning i flere vinkler",
    values: byGen("–", "✓"),
  },
  {
    label: "Drev",
    values: all("AWD + baghjulsstyring"),
  },
  {
    label: "Maks. hældning",
    values: {
      x5: "60% / 30°",
      x7: "70% / 35°",
      x7plus: "70% / 35°",
      x5g2: "60% / 30°",
      x7g2: "70% / 35°",
      x7plusg2: "70% / 35°",
    },
  },
  {
    label: "Affjedring",
    values: all("Forhjul"),
  },
  {
    label: "Bevægelig kofanger",
    values: all("✓"),
  },
  {
    label: "Batteri",
    values: {
      x5: "5 Ah",
      x7: "10 Ah",
      x7plus: "10 Ah",
      x5g2: "5 Ah",
      x7g2: "10 Ah",
      x7plusg2: "10 Ah",
    },
  },
  {
    label: "Oplader",
    values: {
      x5: "3 A",
      x7: "5 A",
      x7plus: "7 A",
      x5g2: "3 A",
      x7g2: "5 A",
      x7plusg2: "7 A",
    },
  },
  {
    label: "Vandtæthed",
    values: all("IPX5"),
  },
  {
    label: "Modul + tyverisikring",
    values: {
      x5: "4G (tilkøb)",
      x7: "4G (tilkøb)",
      x7plus: "4G (24 mdr inkl.)",
      x5g2: "nRTK 4G (24 mdr inkl.)",
      x7g2: "nRTK 4G (24 mdr inkl.)",
      x7plusg2: "nRTK 4G (60 mdr inkl.)",
    },
  },
  {
    label: "Forbindelse",
    values: {
      x5: "Wifi/Bluetooth/4G (tilkøb)",
      x7: "Wifi/Bluetooth/4G (tilkøb)",
      x7plus: "Wifi/Bluetooth/4G",
      x5g2: "Wifi/Bluetooth/4G",
      x7g2: "Wifi/Bluetooth/4G",
      x7plusg2: "Wifi/Bluetooth/4G",
    },
  },
  {
    label: "Super WiFi (LoRa)",
    values: byGen("✓", "–"),
  },
  {
    label: "Multi-zoner",
    values: all("Ingen grænse"),
  },
  {
    label: "Regnsensor",
    values: all("✓"),
  },
  {
    label: "Trådløs opdatering (FOTA)",
    values: all("✓"),
  },
  {
    label: "Alexa / Google Home",
    values: all("✓"),
  },
  {
    label: "Lydniveau",
    values: all("60 dB(A)"),
  },
  {
    label: "Display",
    values: byGen("LED", "LCD"),
  },
  {
    label: "Automatisk kortlægning",
    values: byGen("–", "✓"),
  },
  {
    label: "Ruteplanlægning",
    values: all("Intelligent"),
  },
  {
    label: "LED-forlygte",
    values: byGen("–", "✓"),
  },
  {
    label: "Hjulbørster",
    values: byGen("–", "✓"),
  },
  {
    label: "Virtuelle grænser",
    values: all("✓"),
  },
  {
    label: "Planlægning af klippetider",
    values: all("✓"),
  },
];

// X3 Gen 2 — the entry Gen 2 model. Values transcribed from the /3 spec grid;
// it is a Gen 2 (AONavi 2.0) but WITHOUT night vision/iToF, and is forhjulstræk.
// Universal smart features (regnsensor, FOTA, app-styring, virtuelle grænser
// osv.) are standard across the Elite Gen 2 platform, so marked ✓. Anything not
// confidently sourced is left conservative ("–"). Keyed by row label.
const x3g2Values: Record<string, string> = {
  "Maks. areal": "800 m²",
  Teknologi: "AONavi 2.0 (nRTK+VSLAM) + Vision AI",
  Synstilstand: "Dagtilstand",
  Kamera: "Binokulær",
  Forhindringsundgåelse: "Vision AI + kofanger",
  Nattilstand: "–",
  Klippebredde: "20 cm",
  Klippehøjde: "20–60 mm",
  Højdejustering: "Manuel",
  Knive: "3 knive",
  Klippehastighed: "Max 0,45 m/s",
  "Adaptiv klippedisk": "✓",
  "Kantklip over grænsen": "✓",
  Kantklipper: "✓",
  "Klipning i flere vinkler": "–",
  Drev: "Forhjulstræk",
  "Maks. hældning": "30% / 17°",
  Affjedring: "–",
  "Bevægelig kofanger": "✓",
  Batteri: "5 Ah",
  Oplader: "2 A",
  Vandtæthed: "IPX5",
  "Modul + tyverisikring": "nRTK 4G (24 mdr inkl.)",
  Forbindelse: "Wifi/Bluetooth/4G",
  "Super WiFi (LoRa)": "–",
  "Multi-zoner": "Ingen grænse",
  Regnsensor: "✓",
  "Trådløs opdatering (FOTA)": "✓",
  "Alexa / Google Home": "✓",
  Lydniveau: "60 dB(A)",
  Display: "LED",
  "Automatisk kortlægning": "✓",
  Ruteplanlægning: "Intelligent",
  "LED-forlygte": "–",
  Hjulbørster: "–",
  "Virtuelle grænser": "✓",
  "Planlægning af klippetider": "✓",
};

// Final rows = the six paired columns + the grafted X3 Gen 2 column.
export const specRows: SpecRow[] = baseSpecRows.map((r) => ({
  label: r.label,
  values: { ...r.values, x3g2: x3g2Values[r.label] ?? "–" },
}));

// Column header meta for the comparison table (price shown per column).
export type ColumnMeta = {
  id: ColId;
  name: string;
  area: string;
  image: string;
  gen: 1 | 2;
  foer?: string; // Gen 1 only
  price: string; // Gen 1 = kampagnepris, Gen 2 = fuld pris
  ribbon?: Ribbon;
};

export const columns: ColumnMeta[] = [
  {
    id: "x5",
    name: "X5",
    area: "op til 2.000 m²",
    image: "/x5_gen_2-id.png",
    gen: 1,
    foer: "13.999",
    price: "9.999 kr.",
  },
  {
    id: "x7",
    name: "X7",
    area: "op til 3.000 m²",
    image: "/x7_gen_2-id.png",
    gen: 1,
    foer: "18.999",
    price: "13.999 kr.",
    ribbon: "MEST POPULÆR",
  },
  {
    id: "x7plus",
    name: "X7 Plus",
    area: "op til 6.000 m²",
    image: "/x7_plus_gen_2-id.png",
    gen: 1,
    foer: "23.999",
    price: "17.999 kr.",
  },
  {
    id: "x3g2",
    name: "X3 Gen 2",
    area: "op til 800 m²",
    image: "/x3_gen_2-id.png",
    gen: 2,
    price: "7.999 kr.",
  },
  {
    id: "x5g2",
    name: "X5 Gen 2",
    area: "op til 2.000 m²",
    image: "/x5_gen_2-id.png",
    gen: 2,
    price: "15.999 kr.",
  },
  {
    id: "x7g2",
    name: "X7 Gen 2",
    area: "op til 3.000 m²",
    image: "/x7_gen_2-id.png",
    gen: 2,
    price: "23.999 kr.",
  },
  {
    id: "x7plusg2",
    name: "X7 Plus Gen 2",
    area: "op til 6.000 m²",
    image: "/x7_plus_gen_2-id.png",
    gen: 2,
    price: "27.999 kr.",
  },
];
