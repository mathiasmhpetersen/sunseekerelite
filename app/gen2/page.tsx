import type { Metadata } from "next";
import LandingPage from "./_components/LandingPage";

export const metadata: Metadata = {
  title:
    "Sunseeker Elite X5 anmeldt i Fritidsmarkedet — 9,5 ud af 10",
  description:
    "Fritidsmarkedet testede Sunseeker Elite X5 på en 1.700 m² plæne og fremhæver kabelfri opsætning, Vision AI og præcis kantklipning. Oplev næste generation: X Gen 2.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Sunseeker Elite X5 anmeldt i Fritidsmarkedet — 9,5 ud af 10",
    description:
      "Uafhængig dansk anmeldelse af Sunseeker Elite X5 på en typisk dansk plæne.",
    type: "article",
    locale: "da_DK",
  },
};

export default function Page() {
  return <LandingPage />;
}
