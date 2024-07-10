"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="lg:hidden">
      <nav className="fixed left-5 top-10 z-50">
        <motion.button
          onClick={toggleMenu}
          whileTap={{ scale: 0.75 }}
          className="absolute z-50"
        >
          <HiOutlineMenuAlt3
            className={`text-4xl md:text-6xl rotate-180 lg:rotate-240 rounded-md border-2 ${isOpen ? "text-neutral-800 bg-moss border-neutral-800" : "text-moss bg-neutral-800 border-moss"}`}
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-moss/95 z-40 flex flex-col justify-center items-center"
            >
              <Link href="/">
                <Image
                  src="/logo/sonnebb_logo_hvid.svg"
                  width={200}
                  height={200}
                  alt="Sonne Body & Balance"
                  className="w-[150px] absolute top-5 right-10 invert"
                />
              </Link>
              <motion.ul
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                className="text-3xl flex flex-col gap-6 text-center"
              >
                <li>
                  <Link
                    className="hover:text-GreenAccent"
                    href="/"
                    onClick={() => setIsOpen(false)}
                  >
                    Velkommen
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-GreenAccent"
                    href="/om-body-sds"
                    onClick={() => setIsOpen(false)}
                  >
                    Om Body SDS
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-GreenAccent"
                    href="/om-mig"
                    onClick={() => setIsOpen(false)}
                  >
                    Om Morten
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-GreenAccent"
                    href="/videoer"
                    onClick={() => setIsOpen(false)}
                  >
                    Videoer
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-GreenAccent"
                    href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE"
                    onClick={() => setIsOpen(false)}
                  >
                    Booking
                  </Link>
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
