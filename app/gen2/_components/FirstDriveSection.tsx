import ArticleBlock from "./ArticleBlock";

export default function FirstDriveSection() {
  return (
    <ArticleBlock
      variant="stacked"
      wide
      image="/sunseeker/section-firstdrive.webp"
      title="Klippebanerne var rene fra første tur"
    >
      <p>
        Da X5 blev sat i drift første gang, var de tekniske styrker ifølge
        anmeldelsen tydelige med det samme. Klippebanerne var rene og
        ensartede uden uregelmæssigheder. Robotten holdt lige linjer selv
        på milde skråninger og tilpassede sig terrænet undervejs ved at
        justere klippehøjden midt på ruten via det indbyggede Floating Cut
        System — en funktion, der ifølge testen minimerede skalpering på
        ujævne overflader.
      </p>
      <p>
        Det er især to specifikke øjeblikke fra testen, anmeldelsen
        fremhæver. Det ene var, da X5 identificerede og navigerede uden om
        et tyggelegetøj, der var efterladt på plænen — Vision AI-systemet
        med 3D-kikkertkamera og indbygget 5TOPS AI-chip kan ifølge
        anmeldelsen genkende over 200 forskellige objekttyper. Det andet
        var, da det begyndte at regne midt i en session: X5 detekterede
        vejrskiftet, kørte automatisk tilbage til ladestationen og genoptog
        arbejdet, da forholdene blev bedre.
      </p>
    </ArticleBlock>
  );
}
