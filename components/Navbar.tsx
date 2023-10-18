'use client'
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flexBetween padding-container max-container relative z-30 py-5 ">
      <Link href="/">
        <span className="text-2xl font-bold ">Vee</span>
        <span className="text-2xl font-medium text-green-50">travels.</span>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"

          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
        />
      </div>

    <Image 
        src='/menu.svg'
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
    />

    {/*  Mobile Menu */}
    <div className={`absolute top-0 left-0 w-full h-max bg-white lg:hidden ${showMenu ? 'flex' : 'hidden'} flex-col gap-12 py-24 px-16`}>
       
       {/*  Close Button */}
         <div className="flex justify-end items-end border border-red-800 bg-black w-8 h-8 rounded-full float-right ">
         <Image
            src='/close.svg'
            alt="close"
            width={32}
            height={32}
            className="p-2"
            onClick={() => setShowMenu(!showMenu)}
        />
            </div>

       
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={() => setShowMenu(!showMenu)}
          >
            {link.label}
          </Link>
        ))}
        <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
        />
    </div>


    </nav>
  );
};

export default Navbar;
