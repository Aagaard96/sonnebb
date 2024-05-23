import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <section className="min-h-screen max-w-6xl mx-auto">
            <div className="flex gap-10">
                <div className="max-w-xl mx-auto flex flex-col gap-5">
                    <h2 className="text-4xl mb-5 uppercase">Hvem er <br /> Morten Sonne?</h2>
                    <p>
                        Jeg kommer oprindelig fra cykelsporten, hvor jeg i slutningen af
                        90’erne og starten af 00’erne kørte som professionel i 5 år. Jeg
                        kørte flere år i Italien og deltog bl.a. 4 gange i VM.
                    </p>
                    <p>
                        I 2012 begyndte jeg at træne mere seriøst med triatlon, som jeg i
                        flere år havde snuset til på motionsplan. På 5 år, deltog jeg 3
                        gange i VM på Hawaii, med en 4. plads som bedste resultat.
                    </p>
                    <p>
                        Det hele fik dog en brat afslutning, da jeg i 2017 fik en blodprop i
                        hjertet imens jeg en tirsdag eftermiddag cyklede hjem fra arbejde.
                        Den oplevelse satte en masse tanker i gang, for hvordan kunne en
                        sportsmand i topform og med deltagelse i konkurrencer på topniveau
                        få en blodprop ud af det blå? Jeg spiste sundt, røg ikke og drak kun
                        sjælendt alkohol.
                    </p>
                    <p>
                        Faktisk mente jeg selv, at jeg skulle passere 100 år – ovenikøbet
                        med en god margin.
                    </p>
                    <p>
                        Efter et længere restitutionsforløb, fandt jeg ud af én ting, som
                        slet ikke havde været inde i billedet; ved at været så fokuseret på
                        den fysiske del af træningen og hele tiden presse kravene til
                        kroppens formåen opad, havde jeg overhørt – eller undertrykt –
                        kroppens advarselssignaler. Og ved den intensive triatlontræning
                        havde jeg snydt krop og hoved til at tro, at jeg også var mentalt
                        ovenpå, selvom den psykiske tilstand kørte på pumperne med træthed,
                        udbrændthed og stress til følge.
                    </p>
                    <p>
                        Og det er netop samspillet mellem den fysiske og psykiske tilstand,
                        der i dag optager mig.
                    </p>
                    <p>
                        Jeg træner meget mindre nu, men da jeg nu er i fysisk og psykisk
                        balance, løber jeg faktisk både hurtigere tider og har samtidig
                        masser af overskud i hverdagen.
                    </p>
                    <p>
                        Body SDS giver værktøjerne til, udover specifik symptombehandling,
                        at arbejde med balancen mellem den fysiske og psykiske tilstand, og
                        skabe en krop i balance så du undgår, at skader og skavanker kommer
                        igen.
                    </p>
                </div>
                <Image src="/profiledummy.jpg" width={200} height={200} alt="Morten Sonne" className="w-2/3 h-fit" />
            </div>
        </section>
    );
}
