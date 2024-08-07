import Image from "next/image";
import React from "react";

const icons = [
  { img: "/negative-thoughts-icon.svg", heading: "Stress" },
  { img: "/stress-icon.svg", heading: "Angst" },
  { img: "/negative-thoughts-icon.svg", heading: "Depression" },
  { img: "/stress-icon.svg", heading: "Modløshed" },
  { img: "/negative-thoughts-icon.svg", heading: "Sportsskader" },
  { img: "/stress-icon.svg", heading: "Velvære" },
];

export const metadata = {
  title: "Om Body SDS | Sonne Body & Balance",
  description: "Hvad er Body SDS - og hvordan bruger vi det?",
};

export default function OmBodysds() {
  return (
    <article className="flex gap-20 py-28 px-10 bg-gradient-to-br from-mainBg to-accentBg relative">
      <div className="flex flex-col text-lg max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h3 className="text-4xl font-bold leading-none">
            Hvad er <span className="text-accentText">Body SDS?</span>
          </h3>
          <Image
            className="mr-10 hidden sm:block w-[100px] md:w-[200px]"
            src="/logo/ab_logo_nobg_cropped.png"
            width={200}
            height={200}
            alt="Autoriseret Body SDS Behandler"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-lg font-semibold mb-1">
              Kroppens Tilstand Afspejler Dit Velbefindende
            </h4>
            <p>
              Body SDS har udviklet sig gennem lang tid og bygger på mange
              gennemprøvede teorier. Den grundlæggende filosofi er simpel: Alle
              oplevelser og udtryk fra hverdagen er forankret i kroppen, hvilket
              gør, at din krops tilstand afspejler dit generelle velbefindende -
              fysisk og psykisk sundhed er derfor ikke adskilte, men en helhed.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">
              Moderne Samfunds Belastninger
            </h4>
            <p>
              I vores moderne samfund bliver vi udsat for belastninger på mange
              områder. Mange mennesker bruger deres kroppe forkert, hvilket
              fører til spændinger, slitage, ubehag og sygdomme. Vi bliver
              stressede, får præstationsangst, bliver påvirket af høje
              ambitioner og mister overskud. Derudover er mange følelser ikke
              &quot;tilladte&quot;, som f.eks. vrede, sårbarhed og nervøsitet, hvilket
              skaber pres i vores &quot;indre rum&quot;.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">Hvad er Body SDS?</h4>
            <p>
              Body SDS (
              <span className="text-accentText font-semibold">
                Body Self Development‘s System
              </span>
              ) er en holistisk behandlingsmetode udviklet i Danmark af Ole Kåre
              Føli i 1980‘erne. Metoden kombinerer{" "}
              <span className="text-accentText font-semibold">
                massage, samtale, åndedrætsøvelser og bevægelse
              </span>{" "}
              for at arbejde med både krop og sind. Systemet sigter mod at
              frigøre fysiske og følelsesmæssige spændinger, forbedre
              kropsbevidsthed og fremme generel velvære.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">
              Behandling af Fysiske og Psykiske Problemer
            </h4>
            <p>
              Med de metoder, som vores grundlæggere har skabt, hjælper vi
              klienter med at lindre{" "}
              <span className="text-accentText font-semibold">
                fysiske skavanker
              </span>{" "}
              (fx ryg- og nakkeproblemer), indre{" "}
              <span className="text-accentText font-semibold">
                fysiske gener
              </span>{" "}
              (organproblemer) og{" "}
              <span className="text-accentText font-semibold">
                psykiske problemer
              </span>{" "}
              som stress og bekymringer i hverdagen. Terapeuten arbejder med at
              løsne spændinger i muskler og bindevæv gennem forskellige
              teknikker, mens klienten opfordres til at være opmærksom på deres
              åndedræt og følelser, som kan dukke op under behandlingen.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">
              Helhedsorienteret Sundhed og Velvære
            </h4>
            <p>
              Formålet med vores forskellige discipliner - træning, behandling
              og udrensning - er at forbedre den enkeltes fysiske og psykiske
              udfordringer. Body SDS stræber efter at identificere og bearbejde
              ophobede stress- og spændingstilstande i kroppen, som kan stamme
              fra både fysiske belastninger og psykiske udfordringer, og dermed
              skabe en helhedsorienteret tilgang til sundhed og velvære.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">
              Kontakt og Konsultation
            </h4>
            <p>
              Så har du gået og følt det hele har været lidt mere uoverskueligt
              i en periode så{" "}
              <a
                className="text-moss underline hover:text-accentBg"
                href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE"
              >
                book en tid
              </a>
              , eller{" "}
              <a
                className="text-accentText underline hover:text-accentBg"
                href="tel:+4525378860"
              >
                kontakt mig
              </a>
              , så tager vi en uforpligtende snak om, hvad jeg evt. kan gøre for
              dig.
            </p>
          </div>
        </div>

        <div className="flex sm:gap-5 mt-5 items-center justify-between mx-auto sm:mx-0">
          <div>
            <Image
              className="rounded-md z-20 w-[300px] border-2 border-moss"
              src="/leg.jpg"
              width={400}
              height={400}
              alt="Behandling af skulder"
            />
          </div>
          <div>
            <Image
              className="rounded-md z-20 w-[300px] hidden sm:flex border-2 border-moss"
              src="/skulder.jpg"
              width={400}
              height={400}
              alt="Behandling af skulder"
            />
          </div>
          <div>
            <Image
              className="rounded-md z-20 w-[300px] hidden sm:flex border-2 border-moss"
              src="/tjek1.jpg"
              width={400}
              height={400}
              alt="Behandling af skulder"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
