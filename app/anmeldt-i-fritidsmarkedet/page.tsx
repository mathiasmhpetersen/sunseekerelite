import type { Metadata } from "next";
import TopBanner from "./_components/TopBanner";
import MainNav from "./_components/MainNav";
import SubNav from "./_components/SubNav";
import ArticleHero from "./_components/ArticleHero";
import HeroImage from "./_components/HeroImage";
import WhyFeatured from "./_components/WhyFeatured";
import Quote from "./_components/Quote";
import CtaButton from "./_components/CtaButton";
import StatsGrid from "./_components/StatsGrid";
import Gen2Section from "./_components/Gen2Section";
import FinalCta from "./_components/FinalCta";
import Disclaimer from "./_components/Disclaimer";
import SiteFooter from "./_components/SiteFooter";

export const metadata: Metadata = {
  title:
    "Sunseeker Elite X5 anmeldt af Fritidsmarkedet – pålidelig robotplæneklipper",
  description:
    "Fritidsmarkedet anmelder Sunseeker Elite X5 og giver 9,5/10. Se hvordan AONavi™, Vision AI og kantklipning leverer på rigtige danske plæner – og oplev næste generation X Gen 2.",
  robots: { index: false, follow: false },
  openGraph: {
    title:
      "Sunseeker Elite X5 anmeldt af Fritidsmarkedet – 9,5 / 10",
    description:
      "Uafhængig anmeldelse: pålidelig robotplæneklipper til rigtige danske græsplæner.",
    type: "article",
    locale: "da_DK",
  },
};

export default function Page() {
  return (
    <main>
      <TopBanner />
      <MainNav />
      <SubNav />

      <ArticleHero />
      <HeroImage />
      <WhyFeatured />

      <Quote
        label="Fritidsmarkedet om Sunseeker Elite X5:"
        quote="Sunseeker Elite X5 repræsenterer et skift fra reaktiv plænevedligeholdelse til proaktiv græsforvaltning."
        attribution="Fritidsmarkedet, anmeldelse maj 2025"
      />

      <div className="bg-white px-4 py-12 lg:px-8 lg:py-16">
        <div className="flex justify-center">
          <CtaButton href="https://sunseekerelite.com/dk/x-gen-2-series" size="lg">
            Se Sunseeker Elite X Gen 2 →
          </CtaButton>
        </div>
      </div>

      <div className="bg-white px-4 lg:px-8">
        <hr className="mx-auto max-w-content border-t border-[--border-subtle]" />
      </div>

      <StatsGrid />

      <Quote
        quote="Jeg plejede at være lidt flov over, hvor ujævn min græsplæne så ud. Nu ser den ud, som om jeg har hyret en professionel."
        attribution="Fra anmeldelsen i Fritidsmarkedet"
      />

      <Gen2Section />
      <FinalCta />
      <Disclaimer />
      <SiteFooter />
    </main>
  );
}
