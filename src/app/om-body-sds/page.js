import Image from "next/image";
import React from "react";


const icons = [
  { img: "/negative-thoughts-icon.svg", heading: "Stress" },
  { img: "/stress-icon.svg", heading: "Angst" },
  { img: "/negative-thoughts-icon.svg", heading: "Depression" },
  { img: "/stress-icon.svg", heading: "Modløshed" },
  { img: "/negative-thoughts-icon.svg", heading: "Sportsskader" },
  { img: "/stress-icon.svg", heading: "Velvære" }
];

export default function OmBodysds() {
  return (
    <article className="flex gap-20 py-20 px-10 bg-gradient-to-br from-mainBg to-accentBg">
      <div className="flex flex-col text-lg max-w-5xl mx-auto">
        <div className="mb-10">
          <h3 className="text-4xl font-bold leading-none">Hvad er <span className="text-accentText">Body SDS?</span></h3>
        </div>
        <div className="flex flex-col gap-5">
          <p>
            Body SDS har udviklet sig gennem lang tid og bygger på mange gennemprøvede teorier. Den grundlæggende filosofi er simpel: Alle oplevelser og udtryk fra hverdagen er forankret i kroppen, hvilket gør, at din krops tilstand afspejler dit generelle velbefindende - fysisk og psykisk sundhed er derfor ikke adskilte, men en helhed.
          </p>
          <p>
            I vores moderne samfund bliver vi udsat for belastninger på mange områder. Mange mennesker bruger deres kroppe forkert, hvilket fører til spændinger, slitage, ubehag og sygdomme. Vi bliver stressede, får præstationsangst, bliver påvirket af høje ambitioner og mister overskud. Derudover er mange følelser ikke &quot;tilladte&quot;, som f.eks. vrede, sårbarhed og nervøsitet, hvilket skaber pres i vores &quot;indre rum&quot;.
          </p>
          <p>
            Body SDS (<span className="text-accentText font-semibold">Body Self Development&lsquo;s System</span>) er en holistisk behandlingsmetode udviklet i Danmark af Ole Kåre Føli i 1980&lsquo;erne. Metoden kombinerer <span className="text-accentText font-semibold">massage, samtale, åndedrætsøvelser og bevægelse</span> for at arbejde med både krop og sind. Systemet sigter mod at frigøre fysiske og følelsesmæssige spændinger, forbedre kropsbevidsthed og fremme generel velvære.
          </p>
          <p>Med de metoder, som vores grundlæggere har skabt, hjælper vi klienter med at lindre <span className="text-accentText font-semibold">fysiske skavanker</span> (fx ryg- og nakkeproblemer), indre <span className="text-accentText font-semibold">fysiske gener</span>(organproblemer) og <span className="text-accentText font-semibold">psykiske problemer</span> som stress og bekymringer i hverdagen. Terapeuten arbejder med at løsne spændinger i muskler og bindevæv gennem forskellige teknikker, mens klienten opfordres til at være opmærksom på deres åndedræt og følelser, som kan dukke op under behandlingen.</p>
          <p>
            Formålet med vores forskellige discipliner - træning, behandling og udrensning - er at forbedre den enkeltes fysiske og psykiske udfordringer. Body SDS stræber efter at identificere og bearbejde ophobede stress- og spændingstilstande i kroppen, som kan stamme fra både fysiske belastninger og psykiske udfordringer, og dermed skabe en helhedsorienteret tilgang til sundhed og velvære.
          </p>
          <p>
            Så har du gået og følt det hele har været lidt mere uoverskueligt i en periode så <a className="text-accentText underline" href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE">book en tid</a>, eller <a className="text-accentText underline" href="tel:+4525378860">kontakt mig</a>, så tager vi en uforpligtende snak om, hvad jeg evt. kan gøre for dig.
          </p>
        </div>
      </div>
    </article>
  );
}
