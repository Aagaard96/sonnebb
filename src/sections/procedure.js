import Animation from "@/components/animations/SlideAnimation";
import Image from "next/image";
import Link from "next/link";


export default function Procedure() {
    return (
        <section className="py-16 ctn">
            <div className="flex flex-col lg:flex-row mx-auto justify-between gap-10 ">
                <div className="flex-1 lg:text-start">
                    <div className="heading-container">
                        <Animation 
                        type="OnlyAppear" 
                        as="h2" 
                        className="section-heading">
                            Body SDS Session
                        </Animation>
                        <h3 className="section-description">
                            Hvordan foregår body sds?
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="p-heading">Indledende samtale:</h4>
                            <div className="textCtn">
                                <p>
                                    Behandlingen starter med en indledende samtale mellem
                                    behandleren og klienten. Formålet med samtalen er at forstå
                                    klientens behov, symptomer og eventuelle helbredsproblemer.
                                    Behandleren spørger også om klientens livsstil, stressniveau
                                    og tidligere behandlinger.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 className="p-heading">Kropsbehandling:</h4>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                <div className="textCtn flex-1">
                                    <p>
                                        Behandleren udfører en fysisk vurdering af klientens krop. Dette kan omfatte observation af kropsholdning, bevægelighed og eventuelle muskelspændinger eller ømheder. Selve behandlingen involverer dybdegående massage og tryk på specifikke punkter på kroppen. Behandleren bruger hænder, albuer og knæ for at løsne spændinger i muskler og led. Massagen kan være intens og dyb, men den tilpasses altid klientens komfortniveau.
                                    </p>
                                    <p className="italic text-xs sm:hidden ">Fortsætter under billedet</p>
                                </div>

                                <div className="flex flex-1 justify-center relative lg:hidden">
                                    <Image
                                        src="/samtale-1.jpg"
                                        alt="An illustration of modern life's pressures"
                                        width={250}  // Adjust width as needed
                                        height={100}
                                        className="inline-block img"  // Adjust dimensions for inline image
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="p-heading">Åndedrætsøvelser:</h4>
                            <div className="textCtn">
                                <p>
                                    Behandleren guider klienten gennem specifikke åndedrætsøvelser for at fremme afslapning og frigøre indre spændinger. Disse øvelser hjælper med at øge iltoptagelsen og støtte kroppens naturlige helingsprocesser.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 className="p-heading">Afslapning:</h4>
                            <div className="textCtn">
                                <p>
                                    Klienten får tid til at hvile og integrere behandlingen, ofte med et par minutters afslapning på briksen.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 className="p-heading">Efterbehandling og rådgivning:</h4>
                            <div className="textCtn">
                                <p>
                                    Efter behandlingen diskuterer behandleren og klienten eventuelle observationer og fremtidige skridt.
                                    Klienten kan få råd om øvelser eller livsstilsændringer, der kan hjælpe med at opretholde og forbedre behandlingsresultaterne.
                                    Under behandlingen kan der også være fokus på sammenhængen mellem krop og psyke. Behandleren kan tale med klienten om følelsesmæssige oplevelser, der kan være relateret til fysiske spændinger. Formålet er at skabe en helhedsorienteret forståelse af klientens velbefindende.
                                </p>
                            </div>
                        </div>
                        <Animation as="p" type="OnlyAppear" delay={1} className="text-lg uppercase">
                            Har du mod på at prøve?{" "}
                            <Link
                                className="font-bold text-gray"
                                href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE"
                            >
                                Book her
                            </Link>
                        </Animation>
                    </div>
                </div>
                <div className="flex lg:flex-col justify-center lg:gap-5">
                    <div className="flex items-start relative">
                        <Image
                            className="hidden lg:flex img"
                            src="/samtale-2.jpg"
                            width={400}
                            height={400}
                            alt="BSamtale mellem klient og behandler"
                        />
                    </div>
                    <div className="flex items-center relative">
                        <Image
                            className="img"
                            src="/samtale-1.jpg"
                            width={400}
                            height={400}
                            alt="BSamtale mellem klient og behandler"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
