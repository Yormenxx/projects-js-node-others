"use client"
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import Logo from "../public/logo/logo.webp";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <>
            <nav className="overflow-hidden rounded-lg top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white py-6 px-4 md:px-8 mx-6">
                <Element name="top" className="flex items-center justify-between">
                    <Link href={"/"}>
                        <Image src={Logo} alt="logo" className="w-28" />
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href={"/showcase"}>Showcase</Link>
                        <ScrollLink to="services" smooth={true} className="hover:text-blue-500 cursor-pointer">Services</ScrollLink>
                        <ScrollLink to="process" smooth={true} className="hover:text-blue-500 cursor-pointer">Process</ScrollLink>
                        <ScrollLink to="guarantess" smooth={true} className="hover:text-blue-500 cursor-pointer">Guarantees</ScrollLink>
                    </div>

                    <div className="hidden md:flex items-center gap-x-4">
                        <a href="">+5433233144</a>
                        <Link href={"/meeting"} className="px-6 py-2 rounded-md  border-2 border-black dark:border-white capitalize bg-neutral-950 text-white hover:bg-white hover:text-black transition duration-200 text-sm hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                            Book a call
                        </Link>
                    </div>

                    <div className="flex md:hidden">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </Element>
            </nav>

            {/* 🔽 Mobile menu (fuera del nav!) */}
            {mobileDrawerOpen && (
                <div className="md:hidden sticky top-[90px] left-6 right-6 z-40 rounded-lg bg-white dark:bg-neutral-900 shadow-lg py-6 px-4 space-y-6 flex flex-col items-center">
                    <Link href="/showcase">Showcase</Link>
                    <ScrollLink to="services" smooth={true} className="hover:text-blue-500">Services</ScrollLink>
                    <ScrollLink to="process" smooth={true} className="hover:text-blue-500">Process</ScrollLink>
                    <ScrollLink to="guarantees" smooth={true} className="hover:text-blue-500">Guarantees</ScrollLink>
                    <a href="">+5433233144</a>
                    <Link href="/meeting" className="px-6 py-2 rounded-md  border-2 border-black dark:border-white capitalize bg-neutral-950 text-white hover:bg-white hover:text-black transition duration-200 text-sm hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                        Book a call
                    </Link>
                </div>
            )}
        </>
    );

}

export default Navbar
