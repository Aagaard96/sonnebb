"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // Import burger and close icons
import { IoCaretDown } from "react-icons/io5"; // Icon for dropdown

export default function Navigation() {
    const pathname = usePathname(); // Get the current path
    const [isMenuOpen, setMenuOpen] = useState(false); // State for toggling the menu
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for toggling the dropdown
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    // Function to toggle the menu
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    // Function to close the menu when a link is clicked
    const closeMenu = () => setMenuOpen(false);


    return (
        <header className="fixed w-full z-50 bg-black/35 backdrop-blur-lg capitalize py-5">
            <div className="flex justify-between items-center ctn ">
                <Link href="/">
                    <Image
                        src="/logo/sonnebb_logo_hvid.svg"
                        alt="PaaTur Logo"
                        height={200}
                        width={200}
                        className="w-[125px] md:w-[135px]"
                    />
                </Link>

                {/* Burger menu button on mobile */}
                <button
                    className="md:hidden text-2xl text-baseText z-50"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                        } transition-transform duration-300 ease-in-out transform md:transform-none md:opacity-100 md:translate-x-0 absolute md:relative top-0 left-0 h-screen md:h-auto w-full md:w-auto flex flex-col bg-black/95 md:bg-transparent md:flex-row justify-center items-center gap-10 md:gap-4 lg:gap-6 text-baseText font-semibold text-2xl md:text-base uppercase`}
                >
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className={`${pathname === "/"
                            ? "font-bold text-accent"
                            : "hover:text-accent transition-colors"
                            }`}
                    >
                        Forside
                    </Link>
                    <Link
                        href="/om-body-sds"
                        onClick={closeMenu}
                        className={`${pathname === "/om-body-sds"
                            ? "font-bold text-accent"
                            : "hover:text-accent transition-colors"
                            }`}
                    >
                        Om Body SDS
                    </Link>
                    <Link
                        href="/videoer"
                        onClick={closeMenu}
                        className={`${pathname === "/videoer"
                            ? "font-bold text-accent"
                            : "hover:text-accent transition-colors"
                            } `}
                    >
                        videoer
                    </Link>
                    <Link
                        href="/om-mig"
                        onClick={closeMenu}
                        className={`${pathname === "/om-mig"
                            ? "font-bold text-accent"
                            : "hover:text-accent transition-colors"
                            }`}
                    >
                        om mig
                    </Link>
                    <Link
                        href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE"
                        target="_blank"
                        onClick={closeMenu}
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        Book her
                    </Link>
                </nav>
            </div>
        </header>
    );
}
