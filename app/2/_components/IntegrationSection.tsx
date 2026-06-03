import ArticleBlock from "./ArticleBlock";

export default function IntegrationSection() {
  return (
    <ArticleBlock
      variant="side-right"
      image="/sunseeker/section-integration.png"
      title="Minimalt tilsyn efter første uge"
    >
      <p>
        Efter den første uges drift krævede plæneklipperen ifølge
        anmeldelsen minimalt tilsyn. Anmelderen programmerede en
        multizone-klippeplan via Sunseeker-appen, og X5 fulgte planen uden
        afvigelser. Robotten lader sig selv op mellem sessioner, sætter
        intelligent arbejde på pause i dårligt vejr, og genoptager hvor
        den slap, når forholdene tillader det igen.
      </p>
      <p>
        Anmeldelsen peger også på effekten på selve plænens sundhed. Fordi
        X5 klipper hyppigere end ugentligt — typisk hver eller hver anden
        dag — bliver græsset ifølge testen tykkere og mere ensartet over
        tid. Tendency to Turf-designet forhindrer, at græsset rives over i
        robottens sving, og Ride-on-Edge-funktionen trimmer helt op til
        kanter og hegn, så der ikke står uklippede strimler tilbage som
        efter traditionel klipning.
      </p>
    </ArticleBlock>
  );
}
