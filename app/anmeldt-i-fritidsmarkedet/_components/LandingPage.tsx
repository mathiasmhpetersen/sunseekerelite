import TopBanner from "./TopBanner";
import MainNav from "./MainNav";
import SubNav from "./SubNav";
import ArticleHero from "./ArticleHero";
import HeroImage from "./HeroImage";
import WhyFeatured from "./WhyFeatured";
import Quote from "./Quote";
import CtaButton from "./CtaButton";
import StatsGrid from "./StatsGrid";
import Gen2Section from "./Gen2Section";
import FinalCta from "./FinalCta";
import Disclaimer from "./Disclaimer";
import SiteFooter from "./SiteFooter";

export default function LandingPage() {
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
