import MainNav from "./MainNav";
import ArticleHero from "./ArticleHero";
import HeroImage from "./HeroImage";
import IntroLede from "./IntroLede";
import SetupSection from "./SetupSection";
import FirstDriveSection from "./FirstDriveSection";
import Quote from "./Quote";
import IntegrationSection from "./IntegrationSection";
import StatsGrid from "./StatsGrid";
import WhereItFitsSection from "./WhereItFitsSection";
import VerdictSection from "./VerdictSection";
import Gen2Section from "./Gen2Section";
import FinalCta from "./FinalCta";
import Disclaimer from "./Disclaimer";
import SiteFooter from "./SiteFooter";
import SoftCta from "./SoftCta";

const GEN2_URL = "https://sunseekerelite.com/dk/x-gen-2-series";

export default function LandingPage() {
  return (
    <main>
      <MainNav />

      <ArticleHero />
      <HeroImage />

      <IntroLede />
      <SetupSection />
      <FirstDriveSection />

      <SoftCta href={GEN2_URL}>Læs mere om X5 Gen 2</SoftCta>

      <Quote
        eyebrow="FRA ANMELDELSEN"
        quote="Jeg plejede at være lidt flov over, hvor ujævn min græsplæne så ud."
        attribution="Fritidsmarkedet, anmeldelse af Sunseeker Elite X5"
      />

      <IntegrationSection />
      <StatsGrid />

      <SoftCta href={GEN2_URL}>Se X Gen 2-serien</SoftCta>

      <WhereItFitsSection />
      <VerdictSection />

      <SoftCta href={GEN2_URL}>Sammenlign X Gen 2-modellerne</SoftCta>

      <Gen2Section />
      <FinalCta />
      <Disclaimer />
      <SiteFooter />
    </main>
  );
}
