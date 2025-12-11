import { useContext, useState } from 'react'
import logo from "../assets/logo.webp"
import { LINKS } from '../constants'
import { Menu, X, Moon, Sun } from "lucide-react"
import { ThemeContext } from '../App';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }


    const navbarVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    
    const itemVariants = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

  
    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        visible: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950 backdrop-blur-md transition-colors duration-300"
        >
            <div className="container px-4 py-2 mx-auto relative text-sm">
                <div className="flex justify-between items-center py-3">

               
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center flex-shrink-0 cursor-pointer"
                    >
                        <img className='h-8 w-auto object-contain' src={logo} alt="logo" />
                    </motion.div>

                
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {LINKS.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants} 
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href={item.link}
                                    className='text-base font-medium text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors duration-200'
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                  
                    <div className="flex items-center gap-4">

                       
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9, rotate: -15 }}
                            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {theme === 'light' ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Sun className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Moon className="w-6 h-6 text-neutral-100" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* Botón Menú Móvil */}
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <motion.button
                                onClick={toggleNavbar}
                                whileTap={{ scale: 0.9 }}
                                className="text-neutral-800 dark:text-white"
                            >
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </motion.button>
                        </div>
                    </div>
                </div>

               
                <AnimatePresence>
                    {mobileDrawerOpen && (
                        <motion.div
                            key="mobile-menu"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed right-0 z-20 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 lg:hidden overflow-hidden shadow-xl"
                        >
                            <ul className="flex flex-col items-center py-6 space-y-4">
                                {LINKS.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }} 
                                    >
                                        <a
                                            href={item.link}
                                            onClick={() => setMobileDrawerOpen(false)}
                                            className="text-lg font-medium text-neutral-800 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navbar