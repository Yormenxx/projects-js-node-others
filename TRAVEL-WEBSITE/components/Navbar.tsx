"use client"; // Necesario para useState y Framer Motion en Next.js

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence,Variants } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Variantes para los enlaces del escritorio (cascada)
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants:Variants  = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variantes para el menú móvil
  const mobileMenuVariants:Variants  = {
    closed: { opacity: 0, height: 0 },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
  };

  return (
    <nav className="flex justify-between items-center max-container relative z-30 py-5 px-6 lg:px-20 3xl:px-0 bg-white">
     
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
      </motion.div>

      
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden h-full gap-12 lg:flex"
      >
        {NAV_LINKS.map((link) => (
          <motion.li key={link.key} variants={itemVariants}>
            <Link
              href={link.href}
              className="regular-16 text-neutral-700 flexCenter cursor-pointer pb-1.5 transition-all  hover:text-green-800 relative group"
            >
              {link.label}
              {/* Línea animada bajo el link */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

  
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:flex"
      >
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-full bg-green-600 px-8 py-3 text-white transition-all hover:bg-neutral-950"
        >
          <Image src="/user.svg" alt="user" width={24} height={24} />
          <span className="bold-16 whitespace-nowrap">Login</span>
        </Link>
      </motion.div>

     
      <motion.div 
        whileTap={{ scale: 0.9 }}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
        />
      </motion.div>


      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden overflow-hidden border-t border-gray-200"
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.key} className="w-full text-center">
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)} 
                    className="block w-full py-2 text-neutral-500 hover:text-green-800 hover:bg-gray-50 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
           
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 mt-2 px-6 py-3 bg-green-90 text-white bg-green-500 rounded-full hover:bg-neutral-950 transition-colors"
              >
                <Image src="/user.svg" alt="user" width={20} height={20} />
                Login
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;