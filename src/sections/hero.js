import Animation from '@/components/animations/SlideAnimation'
import Link from 'next/link'

export default function Hero() {
    return (
        <header
            className="h-screen bg-[url('/heromobile.jpg')] relative bg-cover bg-bottom flex items-center"

        >
            <div className=" ctn flex flex-col justify-center items-center text-center font-medium font-playfair">
                <h1 className="text-3xl font-inria mb-5 text-accent">
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
                    className="text-[55px] sm:text-7xl md:text-8xl lg:text-[105px]"
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
                    className="text-base md:text-xl max-w-lg rounded-md font-inria py-5"
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
                    className="btn"
                >
                    Book her
                </Link>
            </div>
        </header>
    )
}
