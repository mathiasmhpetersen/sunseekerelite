import MainNav from "./MainNav";
import ArticleHero from "./ArticleHero";
import HeroImage from "./HeroImage";
import IntroLede from "./IntroLede";
import HighlightsGrid from "./HighlightsGrid";
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

export default function LandingPage() {
  return (
    <main>
      <MainNav />

      <ArticleHero />
      <HeroImage />

      <IntroLede />
      <HighlightsGrid />

      <SetupSection />
      <FirstDriveSection />

      <Quote quote="Jeg plejede at være lidt flov over, hvor ujævn min græsplæne så ud." />

      <IntegrationSection />
      <StatsGrid />

      <WhereItFitsSection />
      <VerdictSection />

      <Gen2Section />
      <FinalCta />
      <Disclaimer />
      <SiteFooter />
    </main>
  );
}
