import type { Metadata } from "next";
import MainNav from "./_components/MainNav";
import StickyBuyBar from "./_components/StickyBuyBar";
import SiteFooter from "./_components/SiteFooter";
import Hero from "./_components/Hero";
import TrustStrip from "./_components/TrustStrip";
import ModelSelector from "./_components/ModelSelector";
import FeatureSection from "./_components/FeatureSection";
import StatRow from "./_components/StatRow";
import BrugervenligCarousel from "./_components/BrugervenligCarousel";
import SpecTable from "./_components/SpecTable";
import Faq from "./_components/Faq";
import FinalCta from "./_components/FinalCta";
import Disclaimer from "./_components/Disclaimer";

export const metadata: Metadata = {
  title:
    "Sunseeker Elite X Gen 2 — robotplæneklipper-serien | ledningsfri & antennefri",
  description:
    "Fire modeller fra 800 til 6.000 m². AONavi 2.0 (nRTK + VSLAM), Vision AI 2.0 dag+nat og AWD-skråninger op til 70%. Sammenlign X3, X5, X7 og X7 Plus Gen 2 — danske priser inkl. moms.",
  // Paid-traffic landing page — keep noindex for now.
  // To make this the canonical series page, change to: robots: { index: true, follow: true }
  robots: { index: false, follow: false },
  openGraph: {
    title: "Sunseeker Elite X Gen 2 — hele serien",
    description:
      "Ledningsfri og antennefri robotplæneklippere fra Sunseeker. Fire modeller, priser fra 7.999 kr.",
    type: "website",
    locale: "da_DK",
  },
};

export default function Page() {
  return (
    <div className="bg-white">
      <MainNav />
      <StickyBuyBar />
      <main>
        <Hero />
        <TrustStrip />
        <ModelSelector />

        <FeatureSection
          variant="dark"
          label="Navigation"
          title="AONavi 2.0 — ingen kabler, ingen fast antenne"
          body="X Gen 2 kombinerer netværks-RTK (nRTK) og VSLAM 2.0 visuel lokalisering. Plænen kortlægges digitalt via Sunseeker-appen i stedet for fysiske afgrænsningskabler nedgravet i jorden. nRTK betyder centimeter-præcis positionering uden en fast antennemast i haven — robotten kommer med 4G-modul fra start."
          bullets={[
            "Ingen afgrænsningskabler",
            "Ingen fast antenne",
            "Centimeter-præcision",
            "Ubegrænsede multizoner",
          ]}
          image={{
            // TODO: replace with aonavi-stripe.jpg (orange virtual-boundary light stripe)
            src: "/X3_Gen_28s.png",
            alt: "AONavi 2.0 virtuel afgrænsning",
            overlayLabel: "AONavi 2.0",
            overlayValue: "0 kabler",
          }}
        />

        <FeatureSection
          variant="light"
          label="Vision AI"
          title="Ser forhindringer — dag og nat"
          body="Vision AI 2.0 bruger et binokulært kamera til genkendelse om dagen og et iToF-kamera om natten, så robotten registrerer og kører uden om forhindringer 24/7. Den genkender over 200 objekttyper — fra havemøbler og legetøj til træer og bede."
          note="* X3 Gen 2 har binokulært kamera (dagsyn). Vision AI 2.0 med iToF nattedrift gælder X5, X7 og X7 Plus."
          image={{
            // TODO: replace with visionai-camera.jpg (iToF + Binocular lens explosion)
            src: "/X3_Gen_24s.png",
            alt: "Vision AI 2.0 binokulært + iToF kamera",
            overlayLabel: "Objekttyper",
            overlayValue: "200+",
          }}
          reverse
        />

        <FeatureSection
          variant="dark"
          label="Terræn"
          title="Bygget til rigtige haver"
          body="Med all-wheel drive og drejbart baghjul håndterer X5, X7 og X7 Plus skråninger op til 70% (35°), våd græs, rødder og ujævn jord. Forhjulsaffjedring holder klippeskjoldet plant, så klippehøjden forbliver ensartet — uden skalpering på toppe og kanter."
          image={{
            // TODO: replace with terrain-awd.jpg (glowing-wheel AWD render)
            src: "/X3_Gen_26s.png",
            alt: "AWD og drejbart baghjul på skråning",
            overlayLabel: "Maks. hældning",
            overlayValue: "70% / 35°",
          }}
        />

        <section className="bg-[#0a0a0a]">
          <div className="mx-auto -mt-12 max-w-content px-5 pb-20 lg:px-8 lg:pb-28">
            <StatRow
              stats={[
                { value: "70%", label: "Maks. hældning (35°)" },
                { value: "200+", label: "objekttyper genkendes" },
                { value: "6.000 m²", label: "areal med X7 Plus Gen 2" },
              ]}
            />
          </div>
        </section>

        <FeatureSection
          variant="light"
          label="Klippekvalitet"
          title="Rene baner helt ud til kanten"
          body="Floating Cut System justerer klippehøjden midt på ruten og minimerer skalpering på ujævne overflader. Ride-on Edge trimmer helt op til kanter og hegn, så der ikke står uklippede strimler tilbage. X7 og X7 Plus klipper 35 cm bredt med dobbeltskive for hurtigere dækning på store plæner."
          note="* Kant-skæreskive og Floating Cut varierer pr. model."
          image={{
            // TODO: replace with rideon-edge.jpg (mower trimming along paved edge)
            src: "/X3_Gen_2_Extra_Precise_Edge_Cutting_Disc_2.png",
            alt: "Ride-on Edge klippeskive langs kant",
          }}
          reverse
        />

        <FeatureSection
          variant="dark"
          label="Opsætning"
          title="Klar på under én time"
          body="Kabelfri opsætning via app. Kør robotten rundt om plænens kant én gang for at definere virtuelle grænser, opret zoner for for-, side- og bagplæne, og tilføj udelukkelseszoner omkring bede og bålpladser. Ingen gravearbejde, ingen kabler."
          image={{
            // TODO: replace with app-screens.jpg (phone mockups: mapping, zones, maintenance)
            src: "/X3_Gen_27s.png",
            alt: "Opsætning via Sunseeker-appen",
            overlayLabel: "Opsætningstid",
            overlayValue: "< 1 time",
          }}
        />

        <BrugervenligCarousel />
        <SpecTable />
        <Faq />
        <FinalCta />
        <Disclaimer />
      </main>
      <SiteFooter />
    </div>
  );
}
