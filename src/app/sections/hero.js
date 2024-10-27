import Animation from '@/components/animations/SlideAnimation'
import Link from 'next/link'

export default function Hero() {
    return (
        <header
            className="h-screen relative bg-cover bg-center flex items-center px-5"
            style={{
                backgroundImage: "url('/sonnenakke.JPEG')",
            }}
        >
            <div className=" ctn flex flex-col justify-center items-center px-2 md:px-0 text-center font-medium font-playfair">
                <h1 className="text-4xl font-inria mb-5 text-accent">
                    Sonne
                    <span className="sm:hidden">
                        <br />
                    </span>
                    <span className=""> </span>
                    Body &amp; Balance
                </h1>
                <Animation
                    as="h3"
                    type="OnlyScale"
                    duration={0.75}
                    delay={0.5}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[115px]"
                >
                    Body Session
                </Animation>
                <Animation
                    as="h3"
                    type="OnlyScale"
                    duration={0.75}
                    delay={0.75}
                    className="text-4xl sm:text-5xl md:text-6xl mt-3 lg:mt-6"
                >
                    50 min./950 kr
                </Animation>
                <Animation
                    as="div"
                    type="OnlyAppear"
                    duration={1}
                    delay={1.5}
                    className="text-base sm:text-xl md:text-2xl max-w-lg md:mx-auto rounded-md font-inria py-5"
                >
                    <p>
                        Body SDS er et af verdens mest effektive behandlings- og
                        træningssystemer.
                    </p>
                    <p>
                        Effektiv behandling af migræne, sportsskader, stress, angst, traumer, smerter og andre kropslige udfordringer.
                    </p>
                </Animation>
                <Link
                    href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                >
                    Book her
                </Link>
            </div>
        </header>
    )
}
