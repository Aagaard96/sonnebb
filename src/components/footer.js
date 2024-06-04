import { Image, Link } from "@nextui-org/react"
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (


        <footer className="bg-zinc-200">
            <div className="mx-auto w-full max-w-screen-lg p-8 py-6 lg:py-10">
                <div className="md:flex md:justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center justify-left">
                            <Image src="/sonnebb_logo_black.svg"
                                height={200}
                                width={200}
                                className="rounded-none" alt="Willum Logo" />
                        </a>
                    </div>
                    <div className="flex justify-between sm:gap-6">
                        <div>
                            <h2 className="text-sm font-semibold uppercase ">Sonne Body &amp; Balance</h2>
                            <ul>
                                <li>
                                    <p>Annasvej 1</p>
                                </li>
                                <li>
                                    <p>2690 Karlslunde</p>
                                </li>
                                <li>
                                    <p>CVR: 4162 5317</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold uppercase ">Kontakt:</h2>
                            <ul>
                                <li>
                                    <Link className="text-moss" href="mailto:morten@sonnebb.dk">Morten@sonnebb.dk</Link>
                                </li>
                                <li>
                                    <Link className="text-moss" href="tel:+4525378860">+45 2537 8860</Link>
                                </li>
                                <li>
                                    <Link
                                        isExternal
                                        href="https://www.instagram.com/sonnebodyandbalance/"
                                    >
                                        <FaInstagram className="text-moss" size={25} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    )
}