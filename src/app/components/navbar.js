"use client";
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
    <header className="hidden lg:flex">
      <nav className="font-semibold items-end md:flex w-full bg-neutral-800 py-5 lg:px-5">
        <div className="max-w-6xl flex flex-col lg:flex-row lg:items-end items-center gap-10 lg:gap-0 lg:justify-between mx-auto w-full">
          <Link href="/">
            <Image
              src="/logo/sonnebb_logo_hvid.svg"
              width={200}
              height={200}
              alt="Sonne Body & Balance"
              className="justify-self-center place-self-center w-[150px] lg:w-[200px]"
            />
          </Link>
          <ul className="justify-around text-sm uppercase flex h-[45px]">
            <div className="bg-main flex text-center rounded-lg divide-x-2 divide-accentText border-accentText border-2">
              <NavItem href="/om-body-sds" isActive={isActiveOmBodySDS}>
                om body sds
              </NavItem>
              <NavItem href="/om-mig" isActive={isActiveOmMig}>
                om mig
              </NavItem>
              <NavItem href="/videoer" isActive={isActiveVideoer}>
                videoer
              </NavItem>
              <NavItem
                href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE"
                isActive={isActiveBooking}
                external
              >
                booking
              </NavItem>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

const NavItem = ({ href, isActive, external, children }) => {
  const classNames = `flex items-center justify-center text-[10px] lg:text-sm lg:w-[150px] w-[90px] hover:text-zinc-100 hover:bg-moss/50 transition duration-300 ease-in-out ${isActive ? "bg-accentText/50 text-zinc-100" : ""}`;

  return (
    <li className={classNames}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </li>
  );
};
