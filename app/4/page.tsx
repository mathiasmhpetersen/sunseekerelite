import type { Metadata } from "next";
import MetaPixel from "./_components/MetaPixel";
import AnnouncementBar from "./_components/AnnouncementBar";
import MainNav from "./_components/MainNav";
import Hero from "./_components/Hero";
import TrustStrip from "./_components/TrustStrip";
import CampaignModels from "./_components/CampaignModels";
import LadderSection from "./_components/LadderSection";
import SizeSelector from "./_components/SizeSelector";
import GenerationsSection from "./_components/GenerationsSection";
import DecisionResolver from "./_components/DecisionResolver";
import ComparisonTable from "./_components/ComparisonTable";
import FeatureSection from "./_components/FeatureSection";
import StatRow from "./_components/StatRow";
import BoxContentsSection from "./_components/BoxContentsSection";
import ReviewsCarousel from "./_components/ReviewsCarousel";
import Faq from "./_components/Faq";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";

export const metadata: Metadata = {
  title:
    "Sunseeker X-serien — Sommerkampagne 2026 | spar op til 6.000 kr. (Gen 1)",
  description:
    "Sommertilbud på Sunseeker X5, X7 og X7 Plus (Gen 1) — fra 9.999 kr. Kabelfri kortlægning via app, AWD-skråninger op til 70%. Sammenlign Gen 1 og Gen 2 og find din forhandler. Frem til 31. august 2026.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Sunseeker X-serien — Sommerkampagne 2026",
    description:
      "Spar op til 6.000 kr. på Gen 1 (X5 / X7 / X7 Plus). Kabelfri robotplæneklippere fra 9.999 kr. Frem til 31. august 2026.",
    type: "website",
    locale: "da_DK",
  },
};

export default function Page() {
  return (
    <div className="bg-white">
      <MetaPixel />

      {/* Announcement bar + nav travel together as one always-sticky group,
          keeping the single "Find din forhandler" CTA on screen at all times. */}
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <MainNav />
      </div>

      <main>
        {/* 1 — Hero */}
        <Hero />

        {/* 2 — Trust bar */}
        <TrustStrip />

        {/* 3 — Vælg din kampagnemodel */}
        <CampaignModels />

        {/* 4 — The ladder */}
        <LadderSection />

        {/* 5 — Havestørrelse-vælger */}
        <SizeSelector />

        {/* 6 — Gen 1 vs Gen 2 */}
        <GenerationsSection />

        {/* 7 — Decision resolver */}
        <DecisionResolver />

        {/* 8 — Full comparison table */}
        <ComparisonTable />

        {/* 9 — Feature storytelling (gen-accurate) */}
        <FeatureSection
          variant="dark"
          label="Kabelfri kortlægning"
          title="AONavi — ingen kabler at grave ned"
          body="Gå en tur rundt om plænens kant med appen én gang. AONavi kombinerer RTK-positionering og VSLAM visuel navigation, så plænen kortlægges digitalt — helt uden afgrænsningskabler. Opret zoner for for-, side- og bagplæne og tilføj udelukkelseszoner omkring bede."
          bullets={[
            "Ingen afgrænsningskabler",
            "Kabelfri kortlægning via app",
            "Ubegrænsede multizoner",
            "Intelligent ruteplanlægning",
          ]}
          image={{
            src: "/aonavi-stripe.png",
            alt: "AONavi virtuel afgrænsning omkring haven",
            overlayLabel: "Kabelfri",
            overlayValue: "0 kabler",
          }}
        />

        <FeatureSection
          variant="light"
          label="Vision AI"
          title="Ser forhindringer og kører udenom"
          body="Vision AI bruger et binokulært kamera til at genkende op til 200 objekttyper — fra havemøbler og legetøj til træer og bede — og styrer robotten uden om. På Gen 1 fungerer forhindringsundgåelsen i dagtilstand."
          note="* Gen 1 er dagdrift. Vil du have forhindringsundgåelse dag OG nat med iToF-kamera? Se Gen 2."
          image={{
            src: "/gen2/x7-gen2-navigation.jpg",
            alt: "Sunseeker X7 kører tæt forbi et bed uden at ramme planterne",
            overlayLabel: "Objekttyper",
            overlayValue: "200+",
          }}
          reverse
        />

        <FeatureSection
          variant="dark"
          label="Terræn"
          title="Bygget til rigtige haver"
          body="Med all-wheel drive og baghjulsstyring håndterer X7 og X7 Plus skråninger op til 70% (35°), vådt græs, rødder og ujævn jord. X5 klarer op til 60% (30°). Forhjulsaffjedring holder klippeskjoldet plant, så klippehøjden forbliver ensartet — uden skalpering på toppe og kanter."
          image={{
            src: "/gen2/x7-gen2-slope.jpg",
            alt: "Sunseeker X7 kører op ad en græsklædt skråning",
            overlayLabel: "Maks. hældning",
            overlayValue: "70% / 35°",
          }}
        />

        <section className="bg-[#0a0a0a]">
          <div className="mx-auto -mt-12 max-w-content px-5 pb-20 lg:px-8 lg:pb-28">
            <StatRow
              stats={[
                { value: "70%", label: "Maks. hældning på X7 / X7 Plus (35°)" },
                { value: "200+", label: "objekttyper genkendes af Vision AI" },
                { value: "6.000 m²", label: "areal med X7 Plus" },
              ]}
            />
          </div>
        </section>

        <FeatureSection
          variant="light"
          label="Klippekvalitet"
          title="Rene baner helt ud til kanten"
          body="Robotten klipper rent helt ud til kanter og hegn, så der ikke står uklippede strimler tilbage. Den flydende skæreskive justerer klippehøjden midt på ruten og minimerer skalpering på ujævne overflader. X7 og X7 Plus klipper 35 cm bredt med dobbelt knivdisk for hurtigere dækning på store plæner."
          note="* Klippebredde og skæreskive varierer pr. model (22–35 cm)."
          video={{ src: "/klip-0713.mp4" }}
          reverse
        />

        <FeatureSection
          variant="dark"
          label="Opsætning"
          title="Klar på under én time"
          body="Kabelfri opsætning via app. Kør robotten rundt om plænens kant én gang for at definere virtuelle grænser, opret zoner og tilføj udelukkelseszoner omkring bede og bålpladser. Ingen gravearbejde, ingen kabler."
          image={{
            src: "/setup-app-lifestyle.jpg",
            alt: "Opsætning af Sunseeker X via app i haven",
            overlayLabel: "Opsætningstid",
            overlayValue: "< 1 time",
          }}
        />

        <BoxContentsSection />

        {/* 10 — Reviews */}
        <ReviewsCarousel />

        {/* 11 — FAQ */}
        <Faq />

        {/* 13 — Final CTA */}
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}
