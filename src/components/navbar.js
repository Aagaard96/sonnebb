"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
    const pathname = usePathname();
    const isActiveOmBodySDS = pathname === "/om-body-sds";
    const isActiveOmMig = pathname === "/om-mig";
    const isActiveVideoer = pathname === "/videoer";
    const isActiveBooking = pathname === "/booking";

    return (
        <nav className="font-semibold items-end flex w-full bg-neutral-800 lg:bg-black py-5">
            <div className="max-w-7xl flex flex-col lg:flex-row lg:items-end items-center gap-10 lg:gap-0 lg:justify-between mx-auto w-full">
                <Link href="/">
                    <Image
                        src="/logo/sonnebb_logo_hvid.svg"
                        width={200}
                        height={200}
                        alt="test"
                        className="justify-self-center place-self-center w-[150px] lg:w-[150px]"
                    />
                </Link>
                <ul className="justify-around text-sm uppercase flex h-[45px]">
                    <div className="bg-main flex text-center rounded-lg divide-x-2 divide-moss border-moss border-2">
                        <NavItem href="/om-body-sds" isActive={isActiveOmBodySDS}>om body sds</NavItem>
                        <NavItem href="/om-mig" isActive={isActiveOmMig}>om mig</NavItem>
                        <NavItem href="/videoer" isActive={isActiveVideoer}>videoer</NavItem>
                        <NavItem href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE" isActive={isActiveBooking} external>booking</NavItem>
                    </div>
                </ul>
            </div>
        </nav>

    );
}

const NavItem = ({ href, isActive, external, children }) => {
    const classNames = `flex items-center justify-center text-[10px] lg:text-sm lg:w-[150px] w-[90px] hover:text-zinc-100 hover:bg-moss/50 transition duration-300 ease-in-out ${isActive ? "bg-moss/50 text-zinc-100" : ""}`;

    return (
        <li className={classNames}>
            {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
            ) : (
                <Link href={href}>{children}</Link>
            )}
        </li>
    );
};
