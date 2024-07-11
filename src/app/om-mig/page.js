
import Image from "next/image";
import Animation from "../components/animations/SlideAnimation";

export const metadata = {
    title: "Om Mig | Sonne Body & Balance",
    description: "Min historie, og vejen til at blive Body SDS behandler.",
};

export default function OmMorten() {
    return (
        <section className="py-28 bg-gradient-to-br from-mainBg to-accentBg">
            <div className="flex flex-col lg:flex-row lg:gap-20 px-10 xl:px-0 max-w-6xl mx-auto">
                <div className="flex-1 flex flex-col text-lg">
              <Animation
                        as="div"
                        type="OnlyAppear"
                        duration={1.5}
                        delay={0.15}
                        className="mb-10"
                    >
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            Morten Sonne
                        </h3>
                        <h2 className="text-xl font-semibold text-accentText">
                            Autoriseret BODY SDS behandler
                        </h2>
                    </Animation>
                    <div className="flex flex-col gap-5">
                        <Animation as="p" type="OnlyAppear" duration={1.25} delay={0.25}>
                            Jeg kommer oprindelig fra cykelsporten, hvor jeg i slutningen af
                            90&apos;erne og starten af 00&apos;erne kørte som professionel i 5
                            år. Jeg kørte flere år i Italien og deltog bl.a. 4 gange i VM.
                        </Animation>
                        <Animation
                            Animation
                            as="p"
                            type="OnlyAppear"
                            duration={1.25}
                            delay={0.25}
                        >
                            I 2012 begyndte jeg at træne mere seriøst med triatlon, som jeg i
                            flere år havde snuset til på motionsplan. På 5 år, deltog jeg 3
                            gange i VM på Hawaii, med en 4. plads som bedste resultat.
                        </Animation>
                        <Animation
                            Animation
                            as="p"
                            type="OnlyAppear"
                            duration={1.25}
                            delay={0.25}
                        >
                            Det hele fik dog en brat afslutning, da jeg i 2017 fik en blodprop
                            i hjertet imens jeg en tirsdag eftermiddag cyklede hjem fra
                            arbejde. Den oplevelse satte en masse tanker i gang, for hvordan
                            kunne en sportsmand i topform og med deltagelse i konkurrencer på
                            topniveau få en blodprop ud af det blå? Jeg spiste sundt, røg ikke
                            og drak kun sjælendt alkohol.
                        </Animation>
                        <Animation
                            Animation
                            as="p"
                            type="OnlyAppear"
                            duration={1.25}
                            delay={0.25}
                        >
                            Faktisk mente jeg selv, at jeg skulle passere 100 år - ovenikøbet
                            med en god margin.
                        </Animation>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Image
                        src="/aboutprofile1.jpg"
                        width={400}
                        height={200}
                        alt="Morten Sonne - Body SDS Behandler"
                        className="mx-auto rounded-md border-2 border-moss"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-20 max-w-6xl mx-auto px-10 lg:px-0 mt-10">
                <div className="flex items-center mb-10 lg:mb-0">
                    <Image
                        src="/aboutprofile.jpg"
                        width={400}
                        height={200}
                        alt="Morten Sonne - Body SDS Behandler"
                        className="mx-auto rounded-md border-2 border-moss"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-5 text-lg">
                    <Animation as="p" type="OnlyAppear" duration={1.25} delay={0.25}>
                        Efter et længere restitutionsforløb, fandt jeg ud af én ting, som
                        slet ikke havde været inde i billedet; ved at været så fokuseret på
                        den fysiske del af træningen og hele tiden presse kravene til
                        kroppens formåen opad, havde jeg overhørt - eller undertrykt -
                        kroppens advarselssignaler. Og ved den intensive triatlontræning
                        havde jeg snydt krop og hoved til at tro, at jeg også var mentalt
                        ovenpå, selvom den psykiske tilstand kørte på pumperne med træthed,
                        udbrændthed og stress til følge.
                    </Animation>
                    <Animation as="p" type="OnlyAppear" duration={1.25} delay={0.25}>
                        Og det er netop samspillet mellem den fysiske og psykiske tilstand,
                        der i dag optager mig.
                    </Animation>
                    <Animation as="p" type="OnlyAppear" duration={1.25} delay={0.25}>
                        Jeg træner meget mindre nu, men da jeg nu er i fysisk og psykisk
                        balance, løber jeg faktisk både hurtigere tider og har samtidig
                        masser af overskud i hverdagen.
                    </Animation>
                    <Animation as="p" type="OnlyAppear" duration={1.25} delay={0.25}>
                        Body SDS giver værktøjerne til, udover specifik symptombehandling,
                        at arbejde med balancen mellem den fysiske og psykiske tilstand, og
                        skabe en krop i balance så du undgår, at skader og skavanker kommer
                        igen.
                    </Animation>
                </div>
            </div>
        </section>
    );
}
