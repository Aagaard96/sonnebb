import { NextUIProvider } from "@nextui-org/react";
import BookBtn from "@/components/bookbtn";
import Reviews from "@/components/reviews";
import Services from "@/components/service";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="min-h-screen mx-auto">
        {/* BOOK TID BUTTON */}
        <BookBtn />

        {/* HERO */}
        <section className=" bg-[url('/heromobile.jpg')] lg:bg-[url('/sonnenakke.JPEG')] bg-cover bg-no-repeat  flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col text-center font-medium max-w-6xl font-playfair">
            <h1 className="text-5xl md:text-4xl lg:text-[150px]">Body Session</h1>
            <h3 className="text-4xl md:text-2xl lg:text-[80px] lg:mt-28">
              50 min./950.kr
            </h3>
            <div className="text-sm md:text-xl mx-5 max-w-2xl md:mx-auto p-5 rounded-md font-inter md:mt-10">
              <p>Body SDS er et af verdens mest effektive behandlings- og træningssystemer.</p>
              <p>Effektivt mod migræne, sportsskader, stress, angst, traumer, smerte, piskesmæld, kold skulder, tennisalbue, kontorskader, ryg- og nakkeproblemer, eksem, allergi, astma og fordøjelsesproblemer.</p>
            </div>
          </div>
          <Link href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE" className="py-2 px-4 lg:px-8 lg:py-4 bg-moss rounded-md text-white hover:bg-orangeAccent/50 uppercase border-2 border-text mt-4">
            Book tid
          </Link>
        </section>

        {/* SERVICES */}
        <section className="py-20 px-10 bg-gradient-to-l from-bgAccent to-bgMain">
          <div className="text-center max-w-6xl mx-auto  text-lg text-balance mb-10 lg:mb-20">
            <h3 className="text-2xl lg:text-4xl font-bold mb-5">
              <span className="text-moss">Body SDS</span> - Hvad kan det gøre for mig?
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
          <Services />
        </section>

        {/* REVIEWS*/}
        <section className="mx-auto py-20 bg-gradient-to-l from-bgMain to-bgAccent">
          <div className="text-center mb-20 max-w-4xl mx-auto px-10 text-lg">
            <h3 className="text-2xl lg:text-4xl font-bold mb-4">
              Her er, hvad mine <span className="text-moss">fantastiske kunder</span> har delt om deres oplevelser
              hos mig
            </h3>
            <p>
              I løbet af de sidste 5 år har jeg haft æren af at bidrage til at
              forbedre livskvaliteten for mange af mine klienter
            </p>
            <p>
              Uanset om det drejede sig om fysiske eller psykiske udfordringer,
              har de fleste oplevet en mærkbar forbedring i deres livskvalitet
              efter vores behandlinger.
            </p>
          </div>
          <Reviews />
        </section>

        {/* SÅDAN FOREGÅR EN BEHANDLING */}
        <section className="py-20 flex justify-between gap-20 bg-gradient-to-l from-bgAccent to-bgMain ">
          <div className="max-w-6xl flex flex-col mx-auto justify-between gap-20 px-10">
            <div className="flex-1">
              <h3 className="text-4xl font-bold mb-5">
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
              <div className="flex items-end justify-between">
                <p>Har du mod på at prøve?</p>
                <Link href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE" className="px-8 py-4 bg-moss rounded-md text-white hover:bg-moss/50 uppercase border-2 border-moss mt-5">
                  Book tid
                </Link>
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
                {/* <div className="w-[400px] h-[533px] bg-moss rounded-md absolute z-10 ml-12 mt-20"></div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </NextUIProvider>
  );
}
