export type ModelId = "x3" | "x5" | "x7" | "x7plus";

export type Model = {
  id: ModelId;
  name: string;
  slug: string;
  area: string;
  priceDkk: string;
  useCase: string;
  highlights: string[];
  image: string;
  imageTodo?: string;
  featured?: boolean;
};

export const models: Model[] = [
  {
    id: "x3",
    name: "X3 Gen 2",
    slug: "x3-gen-2",
    area: "op til 800 m²",
    priceDkk: "7.999 kr.",
    useCase: "Til mindre byhaver og rækkehuse",
    highlights: [
      "Forhjulstræk",
      "20 cm klippebredde",
      "Vision AI dagsyn",
      "ideel til mindre haver",
    ],
    image: "/X3_Gen_21s.png",
  },
  {
    id: "x5",
    name: "X5 Gen 2",
    slug: "x5-gen-2",
    area: "op til 2.000 m²",
    priceDkk: "15.999 kr.",
    useCase: "Til typiske danske parcelhushaver",
    highlights: [
      "AWD",
      "60% hældning",
      "Vision AI 2.0 dag+nat",
      "LED-frontlys",
    ],
    image: "/X3_Gen_23s.png",
    imageTodo: "replace with X5 Gen 2 render",
    featured: true,
  },
  {
    id: "x7",
    name: "X7 Gen 2",
    slug: "x7-gen-2",
    area: "op til 3.000 m²",
    priceDkk: "23.999 kr.",
    useCase: "Til store grunde og komplekse haver",
    highlights: [
      "AWD",
      "70% hældning",
      "35 cm dobbeltskive",
      "elektronisk højdejustering",
    ],
    image: "/X3_Gen_25s.png",
    imageTodo: "replace with X7 Gen 2 render",
  },
  {
    id: "x7plus",
    name: "X7 Plus Gen 2",
    slug: "x7-plus-gen-2",
    area: "op til 6.000 m²",
    priceDkk: "27.999 kr.",
    useCase: "Til meget store grunde og landejendomme",
    highlights: [
      "AWD",
      "70% hældning",
      "35 cm dobbeltskive",
      "5 års gratis nRTK + tyverisikring",
    ],
    image: "/X3_Gen_27s.png",
    imageTodo: "replace with X7 Plus Gen 2 render",
  },
];

export type SpecRow = {
  label: string;
  values: Record<ModelId, string>;
};

export const specRows: SpecRow[] = [
  {
    label: "Anbefalet areal",
    values: {
      x3: "800 m²",
      x5: "2.000 m²",
      x7: "3.000 m²",
      x7plus: "6.000 m²",
    },
  },
  {
    label: "Navigation",
    values: {
      x3: "AONavi 2.0 (nRTK + VSLAM)",
      x5: "AONavi 2.0 (nRTK + VSLAM 2.0)",
      x7: "AONavi 2.0 (nRTK + VSLAM 2.0)",
      x7plus: "AONavi 2.0 (nRTK + VSLAM 2.0)",
    },
  },
  {
    label: "Vision AI",
    values: {
      x3: "Vision AI (dagsyn)",
      x5: "Vision AI 2.0 (dag + nat)",
      x7: "Vision AI 2.0 (dag + nat)",
      x7plus: "Vision AI 2.0 (dag + nat)",
    },
  },
  {
    label: "Kamera",
    values: {
      x3: "Binokulær",
      x5: "Binokulær + iToF",
      x7: "Binokulær + iToF",
      x7plus: "Binokulær + iToF",
    },
  },
  {
    label: "nRTK + tyverisikring",
    values: {
      x3: "2 år gratis",
      x5: "2 år gratis",
      x7: "2 år gratis",
      x7plus: "5 år gratis",
    },
  },
  {
    label: "Drev",
    values: {
      x3: "Forhjulstræk",
      x5: "AWD + drejbart baghjul",
      x7: "AWD + drejbart baghjul",
      x7plus: "AWD + drejbart baghjul",
    },
  },
  {
    label: "Maks. hældning",
    values: {
      x3: "30% / 17°",
      x5: "60% / 30°",
      x7: "70% / 35°",
      x7plus: "70% / 35°",
    },
  },
  {
    label: "Affjedring",
    values: {
      x3: "—",
      x5: "Forhjulsaffjedring",
      x7: "Forhjulsaffjedring",
      x7plus: "Forhjulsaffjedring",
    },
  },
  {
    label: "Klippebredde",
    values: {
      x3: "20 cm",
      x5: "22 cm",
      x7: "35 cm (dobbeltskive)",
      x7plus: "35 cm (dobbeltskive)",
    },
  },
  {
    label: "Klippehøjde",
    values: {
      x3: "20–60 mm",
      x5: "20–60 mm",
      x7: "20–100 mm",
      x7plus: "20–100 mm",
    },
  },
  {
    label: "Højdejustering",
    values: {
      x3: "Manuel",
      x5: "Manuel",
      x7: "Elektronisk",
      x7plus: "Elektronisk",
    },
  },
  {
    label: "Knive",
    values: {
      x3: "3 knive",
      x5: "6 knive",
      x7: "6 knive ×2",
      x7plus: "6 knive ×2",
    },
  },
  {
    label: "Knivhastighed",
    values: {
      x3: "2.500 RPM",
      x5: "2.300 RPM",
      x7: "2.600 / 2.800 RPM",
      x7plus: "2.600 / 2.800 RPM",
    },
  },
  {
    label: "Batteri",
    values: {
      x3: "5 Ah",
      x5: "5 Ah",
      x7: "10 Ah",
      x7plus: "10 Ah",
    },
  },
  {
    label: "Oplader",
    values: {
      x3: "2 A",
      x5: "3 A",
      x7: "5 A",
      x7plus: "7 A",
    },
  },
  {
    label: "Klippehastighed",
    values: {
      x3: "maks. 0,45 m/s",
      x5: "maks. 0,45 m/s",
      x7: "maks. 0,45 m/s",
      x7plus: "maks. 0,45 m/s",
    },
  },
  {
    label: "Støjniveau",
    values: {
      x3: "60 dB(A)",
      x5: "60 dB(A)",
      x7: "60 dB(A)",
      x7plus: "60 dB(A)",
    },
  },
  {
    label: "Display",
    values: {
      x3: "LED",
      x5: "LCD",
      x7: "LCD",
      x7plus: "LCD",
    },
  },
  {
    label: "Multizoner",
    values: {
      x3: "Ubegrænset",
      x5: "Ubegrænset",
      x7: "Ubegrænset",
      x7plus: "Ubegrænset",
    },
  },
  {
    label: "Konnektivitet",
    values: {
      x3: "Wifi / Bluetooth / 4G",
      x5: "Wifi / Bluetooth / 4G",
      x7: "Wifi / Bluetooth / 4G",
      x7plus: "Wifi / Bluetooth / 4G",
    },
  },
  {
    label: "Natfunktion",
    values: {
      x3: "—",
      x5: "Ja",
      x7: "Ja",
      x7plus: "Ja",
    },
  },
  {
    label: "LED-frontlys",
    values: {
      x3: "—",
      x5: "Ja",
      x7: "Ja",
      x7plus: "Ja",
    },
  },
  {
    label: "Mål (L×B×H)",
    values: {
      x3: "62,1 × 42,0 × 24,7 cm",
      x5: "68,0 × 43,8 × 26,0 cm",
      x7: "74,1 × 51,3 × 26,7 cm",
      x7plus: "74,1 × 51,3 × 26,7 cm",
    },
  },
  {
    label: "Vægt",
    values: {
      x3: "10,55 kg",
      x5: "13,1 kg",
      x7: "14,5 kg",
      x7plus: "14,5 kg",
    },
  },
  {
    label: "Pris (inkl. moms)",
    values: {
      x3: "7.999 kr.",
      x5: "15.999 kr.",
      x7: "23.999 kr.",
      x7plus: "27.999 kr.",
    },
  },
];

export const DEALER_URL = "https://sunseekerelite.com/dk/where-to-buy";
