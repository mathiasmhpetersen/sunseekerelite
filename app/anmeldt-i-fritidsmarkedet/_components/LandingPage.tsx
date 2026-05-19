import TopBanner from "./TopBanner";
import MainNav from "./MainNav";
import ArticleHero from "./ArticleHero";
import HeroImage from "./HeroImage";
import ReviewSummary from "./ReviewSummary";
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

      <ArticleHero />
      <HeroImage />
      <ReviewSummary />

      <div className="bg-white pt-12 lg:pt-16">
        <Quote
          quote="Jeg plejede at være lidt flov over, hvor ujævn min græsplæne så ud."
          attribution="Fritidsmarkedet, anmeldelse af Sunseeker Elite X5"
        />
      </div>

      <div className="bg-white px-4 py-12 lg:px-8">
        <div className="flex justify-center">
          <CtaButton href="https://sunseekerelite.com/dk/x-gen-2-series" size="lg">
            Se Sunseeker Elite X Gen 2 →
          </CtaButton>
        </div>
      </div>

      <div className="bg-white px-4 lg:px-8">
        <hr className="mx-auto max-w-[680px] border-t border-line-subtle" />
      </div>

      <StatsGrid />

      <Gen2Section />
      <FinalCta />
      <Disclaimer />
      <SiteFooter />
    </main>
  );
}
