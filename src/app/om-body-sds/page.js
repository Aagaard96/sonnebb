import Animation from "@/components/animations/SlideAnimation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Om Body SDS | Sonne Body & Balance",
  description: "Hvad er Body SDS - og hvordan bruger vi det?",
};

export default function OmBodysds() {
  return (
    <article className="ctn py-36 relative">
      <div className="flex items-end justify-between mb-10">
        <header className="section-container">
          <Animation type="OnlyAppear" as="h2" className="section-heading">BODY SDS</Animation>
          <h3 className="section-description">hvad er det?</h3>
        </header>
        <Image
          className="hidden sm:block w-[100px] md:w-[150px]"
          src="/logo/ab_logo_nobg_cropped.png"
          width={200}
          height={200}
          alt="Body SDS Logo"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col space-y-4 flex-2">
          <div>
            <h4 className="p-heading">
              Kroppens Tilstand Afspejler Dit Velbefindende
            </h4>
            <div className="textCtn">
              <p>
                Body SDS har udviklet sig gennem lang tid og bygger på mange
                gennemprøvede teorier. Den grundlæggende filosofi er simpel:</p>
              <p>
                Alle oplevelser og udtryk fra hverdagen er forankret i kroppen,
                hvilket gør, at din krops tilstand afspejler dit generelle
                velbefindende - fysisk og psykisk sundhed er derfor ikke
                adskilte, men en helhed.
              </p>
            </div>
          </div>

          <div>
            <h4 className="p-heading">Moderne Samfunds Belastninger</h4>
            <div className="textCtn">
              <p>
                I vores moderne samfund bliver vi udsat for belastninger på
                mange områder. Mange mennesker bruger deres kroppe forkert,
                hvilket fører til spændinger, slitage, ubehag og sygdomme.{" "}
              </p>
              <p>
                Vi bliver stressede, får præstationsangst, bliver påvirket af
                høje ambitioner og mister overskud.
              </p>
              <p>
                Derudover er mange følelser ikke &quot;tilladte&quot;, som
                f.eks. vrede, sårbarhed og nervøsitet, hvilket skaber pres i
                vores &quot;indre rum&quot;.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h4 className="p-heading">Hvad er Body SDS?</h4>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="textCtn flex-1">
                  <p>
                    Body SDS (
                    <span className="text-gray">
                      Body Self Development&apos;s System
                    </span>
                    ) er en holistisk behandlingsmetode udviklet i Danmark af Ole
                    Kåre Føli i 1980&apos;erne. Metoden kombinerer{" "}

                    massage, samtale, åndedrætsøvelser og bevægelse

                    for at arbejde med både krop og sind. Systemet sigter mod at
                    frigøre fysiske og følelsesmæssige spændinger, forbedre
                    kropsbevidsthed og fremme generel velvære.
                  </p>
                </div>
                <div className="flex flex-1 justify-center relative lg:hidden h-[300px]">
                  <Image
                    src="/om-bsds-1.jpg"
                    alt="An illustration of modern life's pressures"
                    width={250}  // Adjust width as needed
                    height={100}
                    className="inline-block img w-full"  // Adjust dimensions for inline image
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="p-heading">
              Behandling af Fysiske og Psykiske Problemer
            </h4>
            <div className="textCtn">
              <p>
                Med de metoder, som vores grundlæggere har skabt, hjælper vi
                klienter med at lindre{" "}
                <span className="text-brightGreen font-semibold">
                  fysiske skavanker
                </span>{" "}
                (fx ryg- og nakkeproblemer), indre{" "}
                <span className="text-brightGreen font-semibold">
                  fysiske gener
                </span>{" "}
                (organproblemer) og{" "}
                <span className="text-brightGreen font-semibold">
                  psykiske problemer
                </span>{" "}
                som stress og bekymringer i hverdagen. Terapeuten arbejder med
                at løsne spændinger i muskler og bindevæv gennem forskellige
                teknikker, mens klienten opfordres til at være opmærksom på
                deres åndedræt og følelser, som kan dukke op under behandlingen.
              </p>
            </div>
          </div>
          <div>
            <h4 className="p-heading">Helhedsorienteret Sundhed og Velvære</h4>
            <div className="textCtn">
              <p>
                Formålet med vores forskellige discipliner - træning, behandling
                og udrensning - er at forbedre den enkeltes fysiske og psykiske
                udfordringer. Body SDS stræber efter at identificere og
                bearbejde ophobede stress- og spændingstilstande i kroppen, som
                kan stamme fra både fysiske belastninger og psykiske
                udfordringer, og dermed skabe en helhedsorienteret tilgang til
                sundhed og velvære.
              </p>
            </div>
          </div>
          <div>
            <h4 className="p-heading">Kontakt og Konsultation</h4>
            <div className="textCtn">
              <p>
                Så har du gået og følt det hele har været lidt mere
                uoverskueligt i en periode så{" "}
                <Link
                  className="underline hover:text-gray"
                  href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE"
                >
                  book en tid
                </Link>
                , eller{" "}
                <Link
                  className="underline hover:text-gray"
                  href="tel:+4525378860"
                >
                  kontakt mig
                </Link>
                , så tager vi en uforpligtende snak om, hvad jeg evt. kan gøre
                for dig.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col gap-5 lg:flex-1">
          <div className="relative h-[400px] w-[350px] sm:w-4/5 md:h-[600px] lg:w-[400px]">
            <Image
              src="/om-bsds-2.jpg"
              fill
              className="img"
              alt="Billede af Morten Sonne der behandler"
            />
          </div>
          <div className=" hidden lg:block relative h-[400px] w-[350px] sm:w-4/5 md:h-[600px] lg:w-[400px]">
            <Image
              className="img"
              src="/om-bsds-1.jpg"
              width={400}
              height={400}
              alt="Billede af Morten Sonne der behandler"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
