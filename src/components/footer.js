import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-800">
      <div className="ctn">
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
          <div className="mb-6 md:mb-0 col-start-1 row-start-2 md:row-start-1 md:pr-5 lg:pr-0 place-self-center lg:place-self-auto lg:self-center">
            <Link href="/" className="flex items-center justify-left">
              <Image
                src="/logo/sonnebb_logo_hvid.svg"
                height={150}
                width={150}
                className="rounded-none"
                alt="Sonne Body & Balance Logo"
              />
            </Link>
          </div>
          <div className="col-start-1 md:col-start-2 place-self-center">
            <h2 className="text-sm font-semibold uppercase ">
              Sonne Body &amp; Balance
            </h2>
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
          <div className="col-start-2 md:col-start-3 place-self-center">
            <h2 className="text-sm font-semibold uppercase ">Kontakt:</h2>
            <ul>
              <li>
                <Link
                  className="text-accent"
                  href="mailto:morten@sonnebb.dk"
                >
                  Morten@sonnebb.dk
                </Link>
              </li>
              <li>
                <Link className="text-accent" href="tel:+4525378860">
                  +45 2537 8860
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href="https://www.instagram.com/sonnebodyandbalance/"
                >
                  <FaInstagram className="text-accent" size={25} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-start-2 row-start-2 md:col-start-4 md:row-start-1 place-self-center lg:place-self-end lg:self-center">
            <Image
              className=""
              src="/logo/ab_logo_nobg.png"
              width={150}
              height={150}
              alt="Autoriseret Body SDS Behandler Logo"
            />
          </div>
        </div>
        <div className="text-center opacity-80">
          <Link href="/https://aaadev.dk" className=" underline text-sm">Hosted af AAA Dev. &copy;</Link>
        </div>
      </div>
    </footer>
  );
}
