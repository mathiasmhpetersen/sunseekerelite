import type { Metadata } from "next";
import LandingPage from "./anmeldt-i-fritidsmarkedet/_components/LandingPage";

export const metadata: Metadata = {
  title: "Sunseeker Elite X5 anmeldt i Fritidsmarkedet — 9,5 ud af 10",
  description:
    "Fritidsmarkedet testede Sunseeker Elite X5 på en 1.700 m² plæne og fremhæver kabelfri opsætning, Vision AI og præcis kantklipning. Oplev næste generation: X Gen 2.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LandingPage />;
}
