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
    <article>
      <section>
        <h3>Hvad er Body SDS?</h3>
        <p>
          Body SDS (Body Self Development&apos;s System) er en holistisk
          behandlingsmetode udviklet i Danmark, der kombinerer
          <span>massage</span>, <span>samtale</span>,
          <span>åndedrætsøvelser</span> og <span>bevægelse</span> for at arbejde
          med både krop og sind.
        </p>
        <p>
          Systemet blev udviklet af Ole Kåre Føli i 1980&apos;erne og har til formål
          at frigøre fysiske og følelsesmæssige spændinger, forbedre
          kropsbevidsthed og fremme generel velvære.
        </p>
        <p>
          Behandlingen sigter mod at identificere og bearbejde ophobede stress-
          og spændingstilstande i kroppen, som kan stamme fra både fysiske
          belastninger og psykiske udfordringer. Terapeuten arbejder med at
          løsne spændinger i muskler og bindevæv gennem forskellige teknikker,
          mens klienten opfordres til at være opmærksom på deres åndedræt og
          følelser, som kan dukke op under behandlingen.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-2 gap-3">
          {icons.map((feeling, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                className="w-[150px] h-[150px]"
                src={feeling.img}
                priority
                width={150}
                height={150}
                alt={feeling.heading}
              />
              <h4>{feeling.heading}</h4>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
