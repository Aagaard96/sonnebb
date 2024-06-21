import { NextUIProvider } from "@nextui-org/react";
import Reviews from "@/components/reviews";
import Image from "next/image";
import BookBtn from "@/components/cta-btn";
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
            <Animation as="div" type="OnlyAppear" duration={1} delay={1.5} className="text-sm md:text-xl mx-5 max-w-2xl md:mx-auto p-5 rounded-md font-inria md:mt-10">
              <p>Body SDS er et af verdens mest effektive behandlings- og træningssystemer.</p>
              <p>Effektivt mod migræne, sportsskader, stress, angst, traumer, smerte, piskesmæld, kold skulder, tennisalbue, kontorskader, ryg- og nakkeproblemer, eksem, allergi, astma og fordøjelsesproblemer.</p>
            </Animation>
          </div>
          <BookBtn />
        </section>

        {/* SYMPTOMER */}
        <section className="py-20 px-10 bg-gradient-to-l from-accentBg to-mainBg">
          <div className="text-start lg:text-center max-w-6xl mx-auto text-balance mb-10 lg:mb-20 md:text-lg">
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
            <p><a className="font-bold" href="/om-body-sds">Læs mere her</a></p>

          </div>
          <Symptomer />
        </section>

        <Divider />

        {/* REVIEWS*/}
        <section className="mx-auto py-20 bg-[url('/sonnenakke.JPEG')] lg:bg-[url('/reviewsbg.jpg')] bg-no-repeat bg-cover">
          <Animation as="div" type="SlideInTop" delay={0} className="text-start lg:text-center mb-20 max-w-5xl mx-auto px-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 back">
              Mine <span className="text-accentText">fantastiske kunder</span> har sagt følgende:
            </h3>
            <p className="text-lg">
              I løbet af de sidste 5 år har jeg haft æren af at bidrage til at
              forbedre livskvaliteten for mange af mine klienter.
            </p>
            <p className="text-lg">
              Uanset om det drejede sig om fysiske eller psykiske udfordringer,
              har de fleste oplevet en mærkbar forbedring i deres livskvalitet
              efter vores behandlinger.
            </p>
          </Animation>
          <Reviews />
        </section>

        <Divider />

        {/* SÅDAN FOREGÅR EN BEHANDLING */}
        <section className="py-20 bg-gradient-to-l from-accentBg to-mainBg px-10 b">
          <div className="max-w-6xl flex flex-col lg:flex-row mx-auto justify-between gap-20 ">
            <div className="flex-1 lg:text-start">
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Hvordan foregår en behandling?
                </h3>
                <p className="font-semibold">Ikke alle sessioner er ens, men dette er i helhed hvad BODY SDS står for:</p>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="font-semibold text-lg">Indledende samtale:</h4>
                  <p>Behandlingen starter med en indledende samtale mellem behandleren og klienten. Formålet med samtalen er at forstå klientens behov, symptomer og eventuelle helbredsproblemer. Behandleren spørger også om klientens livsstil, stressniveau og tidligere behandlinger.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Kropsbehandling:</h4>
                  <p>Behandleren udfører en fysisk vurdering af klientens krop. Dette kan omfatte observation af kropsholdning, bevægelighed og eventuelle muskelspændinger eller ømheder.</p>
                  <p>Selve behandlingen involverer dybdegående massage og tryk på specifikke punkter på kroppen. Behandleren bruger hænder, albuer og knæ for at løsne spændinger i muskler og led. Massagen kan være intens og dyb, men den tilpasses altid klientens komfortniveau..</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Åndedrætsøvelser:</h4>
                  <p>Behandleren guider klienten gennem specifikke åndedrætsøvelser for at fremme afslapning og frigøre indre spændinger.
                    Disse øvelser hjælper med at øge iltoptagelsen og støtte kroppens naturlige helingsprocesser.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Afslapning:</h4>
                  <p>Klienten får tid til at hvile og integrere behandlingen, ofte med et par minutters afslapning på briksen.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Efterbehandling og rådgivning:</h4>
                  <p>Efter behandlingen diskuterer behandleren og klienten eventuelle observationer og fremtidige skridt.</p>
                  <p>Klienten kan få råd om øvelser eller livsstilsændringer, der kan hjælpe med at opretholde og forbedre behandlingsresultaterne..</p>
                  <p>Under behandlingen kan der også være fokus på sammenhængen mellem krop og psyke. Behandleren kan tale med klienten om følelsesmæssige oplevelser, der kan være relateret til fysiske spændinger. Formålet er at skabe en helhedsorienteret forståelse af klientens velbefindende.</p>
                </div>
                <Animation as="p" type="OnlyAppear" delay={3}>Har du mod på at prøve? <a className="font-bold" href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE">Book her</a></Animation>
              </div>
            </div>
            <div className="flex mx-auto">
              <div className="flex items-center relative px-5">
                <Image
                  className="rounded-md z-20 w-[400px] saturate-0"
                  src="/sonnearm.jpeg"
                  width={400}
                  height={400}
                  alt="Behandling af skulder"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </NextUIProvider>
  );
}
