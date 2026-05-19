export default function SetupSection() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-[680px]">
        <h3 className="h3-display text-ink-primary">
          Opsætning under én time, uden afgrænsningskabler
        </h3>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-primary">
          Et af de aspekter, anmeldelsen fremhæver mest, er den kabelfri
          opsætning. Hvor ældre generationer af robotplæneklippere
          kræver fysiske afgrænsningskabler nedgravet i plænen, bruger
          X5 et system kaldet AONavi — en kombination af RTK-GNSS
          positionering og VSLAM visuel lokalisering. I praksis betyder
          det, at plænen kortlægges digitalt via Sunseeker-appen i
          stedet for fysisk afgrænsning.
        </p>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-primary">
          Selve opsætningen tog ifølge testen under én time. Anmelderen
          installerede RTK-antennen et sted med klar himmel, kørte
          robotten rundt om plænens kant én gang via appen for at
          definere virtuelle grænser, og oprettede zoner for for-, side-
          og bagplæne sammen med udelukkelseszoner omkring bålpladsen
          og køkkenhaven. Anmeldelsen konkluderer, at opsætningen ikke
          krævede teknisk ekspertise.
        </p>
      </div>
    </section>
  );
}
