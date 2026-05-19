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
import MidPageCta from "./MidPageCta";

const GEN2_URL = "https://sunseekerelite.com/dk/x-gen-2-series";

export default function LandingPage() {
  return (
    <main>
      <MainNav />

      <ArticleHero />
      <HeroImage />

      <IntroLede />
      <hr className="section-divider" />
      <SetupSection />
      <FirstDriveSection />

      <SoftCta href={GEN2_URL}>Læs mere om X5 Gen 2</SoftCta>

      <Quote quote="Jeg plejede at være lidt flov over, hvor ujævn min græsplæne så ud." />

      <IntegrationSection />
      <hr className="section-divider" />
      <StatsGrid />

      <SoftCta href={GEN2_URL}>Se X Gen 2-serien</SoftCta>

      <WhereItFitsSection />
      <hr className="section-divider" />
      <VerdictSection />

      <MidPageCta href={GEN2_URL}>Læs mere om den nye Gen 2</MidPageCta>

      <Gen2Section />
      <FinalCta />
      <Disclaimer />
      <SiteFooter />
    </main>
  );
}
