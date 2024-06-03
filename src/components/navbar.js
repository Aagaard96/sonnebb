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
        <nav className="bg-zinc-200 p-10 text-[#63827B] font-semibold items-end">
            <div className="max-w-6xl flex items-end justify-between mx-auto">
                <Link href="/">                
                <Image
                    src="/sonnebb_logo_black.svg"
                    width={200}
                    height={200}
                    alt="test"
                    className="justify-self-center place-self-center"
                />
                </Link>
                <ul className="justify-around text-sm uppercase flex h-[50px]">
                    <div className="bg-zinc-100 flex text-center rounded-lg divide-x-2 divide-[#63827B] border-[#63827B] border-2">
                        <NavItem href="/om-body-sds" isActive={isActiveOmBodySDS}>om body sds</NavItem>
                        <NavItem href="/om-mig" isActive={isActiveOmMig}>om morten</NavItem>
                        <NavItem href="/videoer" isActive={isActiveVideoer}>videoer</NavItem>
                        <NavItem href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE" isActive={isActiveBooking} external>booking</NavItem>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

const NavItem = ({ href, isActive, external, children }) => {
    const classNames = `flex items-center justify-center w-[125px] hover:text-zinc-100 hover:bg-[#63827B]/50 transition duration-300 ease-in-out ${isActive ? "bg-[#63827B]/50 text-zinc-100" : ""}`;

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
