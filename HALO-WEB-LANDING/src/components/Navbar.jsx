import { navItems } from "../constants"
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";


function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    const menuVars = {
        initial: { scaleY: 0, opacity: 0 },
        animate: {
            scaleY: 1,
            opacity: 1,
            transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] },
        },
        exit: {
            scaleY: 0,
            opacity: 0,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        },
    };


    const containerVars = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVars = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };


    return (
        <>


            <header className="w-full h-screen relative  bg-[url('/assets/halo.jpeg')] bg-cover bg-center">

                <nav className="sticky top-0 z-50 py-5 px-4 text-white  backdrop-blur-lg border-b border-white/10">

                    <div className="flex justify-around items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center flex-shrink-0 cursor-pointer"
                        >
                            <img src="https://uhf.microsoft.com/images/microsoft/RE1MmB8.png" className="w-[100px] md:w-[130px]" alt="microsoft" />
                        </motion.div>

                        <div className="lg:flex hidden">
                            <ul className="flex justify-between items-center space-x-5 ">
                                {
                                    navItems.map((item, id) => (

                                        <motion.li
                                            key={id}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * id }}
                                        >
                                            <a
                                                href={item.link}
                                                className="relative text-sm text-white transition-colors hover:opacity-80 capitalize group"
                                            >
                                                {item.name}

                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#adff2f] transition-all duration-300 group-hover:w-full"></span>
                                            </a>
                                        </motion.li>

                                    ))
                                }
                            </ul>
                        </div>



                        <div className="lg:hidden flex items-center">
                            <motion.button
                                onClick={toggleNavbar}
                                whileTap={{ scale: 0.9 }}
                                className="text-white focus:outline-none cursor-pointer"
                            >
                                {mobileDrawerOpen ? (
                                    <IoClose className="text-3xl" />
                                ) : (
                                    <IoMdMenu className="text-3xl" />
                                )}
                            </motion.button>
                        </div>

                    </div>


                    <AnimatePresence>
                        {mobileDrawerOpen && (
                            <motion.div
                                variants={menuVars}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute left-0 z-60  top-full w-full origin-top  bg-neutral-900/95 p-8 backdrop-blur-lg border-b border-white/10 lg:hidden overflow-hidden"
                            >
                                <motion.ul
                                    variants={containerVars}
                                    initial="initial"
                                    animate="animate"
                                    className="flex flex-col items-center space-y-6"
                                >
                                    {navItems.map((item, index) => (
                                        <motion.li key={index} variants={itemVars}>
                                            <a
                                                href={item.link}
                                                className="text-lg font-medium text-white hover:text-[#adff2f] transition-colors capitalize"
                                                onClick={() => setMobileDrawerOpen(false)} // Cierra el menú al hacer click
                                            >
                                                {item.name}
                                            </a>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                <Hero />
            </header>






        </>
    )
}

export default Navbar
