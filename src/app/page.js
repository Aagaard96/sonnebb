import { NextUIProvider } from "@nextui-org/react";
import Reviews from "@/components/reviews";
import Image from "next/image";
import BookBtn from "@/components/bookbtn";
import Divider from "@/components/divider";
import Animation from "@/components/animations/SlideAnimation";
import Symptomer from "@/components/symptomer";


export default function Home() {
  return (
    <NextUIProvider>
      <main className="min-h-screen mx-auto">
        {/* HERO */}
        <section className=" bg-[url('/heromobile.jpg')] lg:bg-[url('/sonnenakke.JPEG')] bg-cover bg-no-repeat  flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col text-center font-medium max-w-6xl font-playfair">
            <Animation as="h3" type="OnlyScale" duration={0.75} delay={0.5} className="text-6xl md:text-4xl lg:text-[150px]">Body Session</Animation>
            <Animation as="h3" type="OnlyScale" duration={0.75} delay={0.75} className="text-4xl md:text-2xl lg:text-[80px] mt-3 lg:mt-28">
              50 min./950 kr
            </Animation>
            <Animation as="div" type="OnlyAppear" duration={1} delay={1.5} className="text-sm md:text-xl mx-5 max-w-2xl md:mx-auto p-5 rounded-md font-inter md:mt-10">
              <p>Body SDS er et af verdens mest effektive behandlings- og træningssystemer.</p>
              <p>Effektivt mod migræne, sportsskader, stress, angst, traumer, smerte, piskesmæld, kold skulder, tennisalbue, kontorskader, ryg- og nakkeproblemer, eksem, allergi, astma og fordøjelsesproblemer.</p>
            </Animation>
          </div>
          <BookBtn />
        </section>

        {/* SYMPTOMER */}
        <section className="py-28 px-10 bg-gradient-to-l from-accentBg to-mainBg">
          <div className="text-center max-w-6xl mx-auto text-balance mb-10 lg:mb-20 md:text-lg">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-accentText">Body SDS</span> - Hvad kan det gøre for mig?
            </h3>
            <p>
              Uanset om det handler om fysiske smerter, stress, angst eller
              andre helbredsmæssige udfordringer, har Body SDS vist sig at være
              effektiv.
            </p>
            <p className="mt-2">
              Denne holistiske tilgang til kroppen hjælper med at løsne
              spændinger, forbedre kropsholdningen, øge energiniveauet og fremme
              en dybere følelse af ro og balance.
            </p>
          </div>
          <Symptomer />
        </section>

        <Divider />

        {/* REVIEWS*/}
        <section className="mx-auto py-28 bg-gradient-to-l from-mainBg to-accentBg">
          <Animation as="div" type="SlideInBottom" className="text-center mb-20 max-w-5xl mx-auto px-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
              Mine <span className="text-accentText">fantastiske kunder</span> har sagt følgende:
            </h3>
            <p>
              I løbet af de sidste 5 år har jeg haft æren af at bidrage til at
              forbedre livskvaliteten for mange af mine klienter.
            </p>
            <p>
              Uanset om det drejede sig om fysiske eller psykiske udfordringer,
              har de fleste oplevet en mærkbar forbedring i deres livskvalitet
              efter vores behandlinger.
            </p>
          </Animation>
          <Reviews />
        </section>

        <Divider />

        {/* SÅDAN FOREGÅR EN BEHANDLING */}
        <section className="py-28 bg-gradient-to-l from-accentBg to-mainBg px-10">
          <div className="max-w-6xl flex flex-col lg:flex-row mx-auto justify-between gap-20 ">
            <div className="flex-1 text-center lg:text-start">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                Hvordan foregår en behandling?
              </h3>
              <div className="flex flex-col gap-5">
                <p>Behandlingen starter med en indledende samtale mellem behandleren og klienten. Formålet med samtalen er at forstå klientens behov, symptomer og eventuelle helbredsproblemer. Behandleren spørger også om klientens livsstil, stressniveau og tidligere behandlinger.</p>
                <p>Behandleren udfører en fysisk vurdering af klientens krop. Dette kan omfatte observation af kropsholdning, bevægelighed og eventuelle muskelspændinger eller ømheder.</p>
                <p>Selve behandlingen involverer dybdegående massage og tryk på specifikke punkter på kroppen. Behandleren bruger hænder, albuer og knæ for at løsne spændinger i muskler og led. Massagen kan være intens og dyb, men den tilpasses altid klientens komfortniveau..</p>
                <p>En vigtig del af Body SDS behandlingen er fokus på åndedrættet. Klienten opfordres til at bruge dybe, langsomme åndedrag for at hjælpe med at frigøre spændinger og øge kroppens ilttilførsel. Åndedrættet bruges som et redskab til at støtte den fysiske behandling og fremme afslapning.</p>
                <p>Under behandlingen kan der også være fokus på sammenhængen mellem krop og psyke. Behandleren kan tale med klienten om følelsesmæssige oplevelser, der kan være relateret til fysiske spændinger. Formålet er at skabe en helhedsorienteret forståelse af klientens velbefindende.</p>
                <p>Efter behandlingen følger en kort samtale, hvor klienten får mulighed for at dele sine oplevelser og følelser. Behandleren kan give råd om øvelser, stræk og livsstilsændringer, der kan støtte klientens fortsatte velvære.</p>
              </div>
            </div>
            <div className="flex mx-auto">
              <div className="flex items-center relative px-5">
                <Image
                  className="rounded-md z-20 w-[400px]"
                  src="/sonnearm.jpeg"
                  width={400}
                  height={400}
                  alt="Behandling hos SonneBB"
                />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <p>Har du mod på at prøve?</p>
            <BookBtn />
          </div>
        </section>
      </main>
    </NextUIProvider>
  );
}
