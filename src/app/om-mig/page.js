
import Animation from "@/components/animations/SlideAnimation";
import Image from "next/image";

export const metadata = {
    title: "Om Mig | Sonne Body & Balance",
    description: "Min historie, og vejen til at blive Body SDS behandler.",
};

export default function OmMorten() {
    return (
        <section className='py-36 ctn'>
            <header className='heading-container'>
                <Animation type="OnlyAppear" as="h2" className="section-heading">Hvem er</Animation>
                <h3 className="section-description">Sonne Body &amp; Balance</h3>
            </header>
            <div className='flex flex-col gap-10'>
                <article className='flex flex-col lg:flex-row gap-10 items-center'>
                    <div className='flex-1'>
                        <div className="uppercase mb-2">
                            <h3 className='p-heading'>Morten Sonne</h3>
                            <h3 className='text-lg'>Autoriseret BODY SDS Behandler</h3>
                        </div>
                        <Animation type="SlideInTop" delay={0.75} as="div" className='textCtn'>
                            <p>Jeg kommer oprindelig fra cykelsporten, hvor jeg i slutningen af 90&apos;erne og starten af 00&apos;erne kørte som professionel i 5 år. Jeg kørte flere år i Italien og deltog bl.a. 4 gange i VM.</p>
                            <p>I 2012 begyndte jeg at træne mere seriøst med triatlon, som jeg i flere år havde snuset til på motionsplan. På 5 år, deltog jeg 3 gange i VM på Hawaii, med en 4. plads som bedste resultat.</p>
                            <p>Det hele fik dog en brat afslutning, da jeg i 2017 fik en blodprop i hjertet imens jeg en tirsdag eftermiddag cyklede hjem fra arbejde. Den oplevelse satte en masse tanker i gang, for hvordan kunne en sportsmand i topform og med deltagelse i konkurrencer på topniveau få en blodprop ud af det blå? Jeg spiste sundt, røg ikke og drak kun sjælendt alkohol.</p>
                            <p>Faktisk mente jeg selv, at jeg skulle passere 100 år - ovenikøbet med en god margin.</p>
                            <p className="italic text-xs lg:hidden">Fortsætter under billedet</p>
                        </Animation>
                    </div>
                    <div className="lg:flex-1 relative h-[400px] w-full sm:w-4/5 md:h-[600px] lg:w-[400px]">
                        <Image
                            loading="lazy"
                            src="/om-mig-1.jpg"
                            fill
                            alt='Billede af Morten Sonne'
                            className="img"
                        />
                    </div>
                </article>

                <article className='flex flex-col lg:flex-row gap-10 items-center'>
                    <div className="lg:flex-1 relative h-[400px] w-full sm:w-4/5 md:h-[600px] lg:w-[400px] order-2 lg:order-1">
                        <Image
                            loading="lazy"
                            src="/om-mig-2.jpg"
                            fill
                            alt='Billede af Morten Sonne'
                            className="img"
                        />
                    </div>
                    <div className='flex-1 space-y-2 order-1 lg:order-2'>
                        <h2 className='p-heading mb-2'>Balancen Mellem Krop og Sind</h2>
                        <Animation type="SlideInTop" delay={0.75} as="div" className='textCtn'>
                            <p>Efter et længere restitutionsforløb, fandt jeg ud af én ting, som slet ikke havde været inde i billedet; ved at været så fokuseret på den fysiske del af træningen og hele tiden presse kravene til kroppens formåen opad, havde jeg overhørt - eller undertrykt - kroppens advarselssignaler. Og ved den intensive triatlontræning havde jeg snydt krop og hoved til at tro, at jeg også var mentalt ovenpå, selvom den psykiske tilstand kørte på pumperne med træthed, udbrændthed og stress til følge.</p>
                            <p>Og det er netop samspillet mellem den fysiske og psykiske tilstand, der i dag optager mig.</p>
                            <p>Jeg træner meget mindre nu, men da jeg nu er i fysisk og psykisk balance, løber jeg faktisk både hurtigere tider og har samtidig masser af overskud i hverdagen.</p>
                            <p>Body SDS giver værktøjerne til, udover specifik symptombehandling, at arbejde med balancen mellem den fysiske og psykiske tilstand, og skabe en krop i balance så du undgår, at skader og skavanker kommer igen.</p>
                        </Animation>
                    </div>
                </article>
            </div>
        </section >
    );
}
