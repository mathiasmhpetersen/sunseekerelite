import type { Metadata } from "next";
import LandingPage from "./_components/LandingPage";

export const metadata: Metadata = {
  title:
    "Sunseeker Elite X5 anmeldt af Fritidsmarkedet – pålidelig robotplæneklipper",
  description:
    "Fritidsmarkedet anmelder Sunseeker Elite X5 og giver 9,5/10. Se hvordan AONavi™, Vision AI og kantklipning leverer på rigtige danske plæner – og oplev næste generation X Gen 2.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Sunseeker Elite X5 anmeldt af Fritidsmarkedet – 9,5 / 10",
    description:
      "Uafhængig anmeldelse: pålidelig robotplæneklipper til rigtige danske græsplæner.",
    type: "article",
    locale: "da_DK",
  },
};

export default function Page() {
  return <LandingPage />;
}
