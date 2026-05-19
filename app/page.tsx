import type { Metadata } from "next";
import LandingPage from "./anmeldt-i-fritidsmarkedet/_components/LandingPage";

export const metadata: Metadata = {
  title:
    "Sunseeker Elite X5 anmeldt af Fritidsmarkedet – pålidelig robotplæneklipper",
  description:
    "Fritidsmarkedet anmelder Sunseeker Elite X5 og giver 9,5/10. Se hvordan AONavi™, Vision AI og kantklipning leverer på rigtige danske plæner – og oplev næste generation X Gen 2.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LandingPage />;
}
