import Animation from '@/components/animations/SlideAnimation';
import Image from 'next/image';
import Link from 'next/link';

const topIcons = [
    { img: "/icons/negative-thoughts-icon.svg", heading: "Stress" },
    { img: "/icons/stress-icon.svg", heading: "Angst" },
    { img: "/icons/negative-thoughts-icon.svg", heading: "Depression" },
    { img: "/icons/stress-icon.svg", heading: "Sportsskader" },
    { img: "/icons/negative-thoughts-icon.svg", heading: "Handikap" },
    { img: "/icons/stress-icon.svg", heading: "Velvære" },
];


export default function Symptomer() {
    return (
        <section className="ctn py-16">
            <div className="text-center text-balance mb-10 md:text-lg">
                <div className="heading-container">
                    <Animation type="OnlyAppear" as="h2" className="section-heading text-center">
                        Body SDS
                    </Animation>
                    <h3 className="section-description text-center">
                        Hvad kan det gøre for mig?
                    </h3>
                </div>
                <p>
                    Uanset om det handler om fysiske smerter, stress, angst eller
                    andre helbredsmæssige udfordringer, har Body SDS vist sig at være
                    effektiv.
                </p>
                <p>
                    Denne holistiske tilgang til kroppen hjælper med at løsne
                    spændinger, forbedre kropsholdningen, øge energiniveauet og fremme
                    en dybere følelse af ro og balance.
                </p>
                <p>
                    <Link className="font-bold" href="/om-body-sds">
                        Læs mere her
                    </Link>
                </p>
            </div>
            <section className="ctn">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 lg:gap-y-0 lg:grid-cols-6 place-items-center">
                    {topIcons.map((feeling, i) => (
                        <div
                            key={i}
                            className="relative w-[150px] md:w-[125px] lg:w-[150px] aspect-square flex flex-col items-center justify-evenly border-2 border-gray rounded-lg text-center"
                        >
                            <Image
                                className="w-3/5 h-3/5 invert"
                                src={feeling.img}
                                width={100}
                                height={100}
                                alt={feeling.heading}
                            />
                            <h4 className="text-sm md:text-base lg:text-xl font-extralight lg:mt-3">
                                {feeling.heading}
                            </h4>
                        </div>

                    ))}
                </div>
            </section>
        </section>
    )
}
